import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FormField from "./FormField";
import InfoBlock from "./InfoBlock";
import { RedotPayFormData } from "@/types/redot-pay";
import { saveUserInfo } from "@/lib/supabase";
import { createPaymentSession, redirectToPayment } from "@/lib/payment";

interface OrderFormProps {
  onSubmit: (data: RedotPayFormData) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<RedotPayFormData>({
    email: "",
    telegramNick: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Сохраняем данные в Supabase
      await saveUserInfo({
        email: formData.email,
        telegram_nick: formData.telegramNick,
        comment: formData.comment,
      });

      // Создаем платежную сессию
      const paymentData = await createPaymentSession({
        amount: 2500, // Цена карты RedotPay в рублях
        currency: "RUB",
        description: "Заказ виртуальной карты RedotPay",
        customer_email: formData.email,
        return_url: window.location.origin + "/payment-success",
        callback_url: window.location.origin + "/api/payment-callback",
      });

      // Перенаправляем на форму оплаты
      if (paymentData.payment_url) {
        redirectToPayment(paymentData.payment_url);
      } else {
        throw new Error("Не получен URL для оплаты");
      }

      // Отправляем данные формы
      onSubmit(formData);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof RedotPayFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormField
        id="email"
        label="Email адрес"
        placeholder="ваш@email.com"
        type="email"
        value={formData.email}
        onChange={(value) => handleInputChange("email", value)}
        required
      />

      <FormField
        id="telegramNick"
        label="Ник в телеграмм"
        placeholder="@ваш_ник"
        value={formData.telegramNick}
        onChange={(value) => handleInputChange("telegramNick", value)}
        required
      />

      <InfoBlock />

      <FormField
        id="comment"
        label="Дополнительные пожелания"
        placeholder="Укажите особые требования или вопросы..."
        value={formData.comment}
        onChange={(value) => handleInputChange("comment", value)}
        optional
        multiline
      />

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Отправить заявку
          </>
        )}
      </Button>
    </form>
  );
}

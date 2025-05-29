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
      console.log("🎯 Начинаем обработку заказа...");

      // Сохраняем данные в Supabase
      console.log("💾 Сохраняем данные пользователя...");
      await saveUserInfo({
        email: formData.email,
        telegram_nick: formData.telegramNick,
        comment: formData.comment,
      });
      console.log("✅ Данные сохранены");

      // Создаем платежную сессию
      console.log("💳 Создаем платежную сессию...");
      const paymentData = await createPaymentSession({
        amount: 2500,
        currency: "RUB",
        description: "Заказ виртуальной карты RedotPay",
        customer_email: formData.email,
        return_url: window.location.origin + "/payment-success",
        callback_url: window.location.origin + "/api/payment-callback",
      });
      console.log("✅ Платежная сессия создана:", paymentData);

      // Отправляем данные формы
      onSubmit(formData);

      // Перенаправляем на форму оплаты
      console.log("🔄 Перенаправляем на оплату...");
      redirectToPayment(paymentData.payment_url);
    } catch (error) {
      console.error("💥 Ошибка отправки:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Произошла неизвестная ошибка";

      alert(
        `❌ Ошибка: ${errorMessage}\n\nПроверьте консоль браузера для подробностей.`,
      );
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

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold px-8 py-2 h-10 text-sm w-auto min-w-[120px]"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
              Обработка...
            </>
          ) : (
            "Купить за 2500₽"
          )}
        </Button>
      </div>
    </form>
  );
}

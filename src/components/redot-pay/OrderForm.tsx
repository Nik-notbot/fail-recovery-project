import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FormField from "./FormField";
import InfoBlock from "./InfoBlock";
import { RedotPayFormData } from "@/types/redot-pay";
import { saveUserInfo } from "@/lib/supabase";

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
      // Сохраняем в Supabase
      const result = await saveUserInfo({
        gmail: formData.email,
        telegram: formData.telegramNick,
        status: "pending",
      });

      if (result.success) {
        console.log("Данные успешно сохранены в Supabase");
        onSubmit(formData);
      } else {
        console.error("Ошибка сохранения:", result.error);
        // Показываем ошибку пользователю
        alert("Ошибка отправки данных. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Неожиданная ошибка:", error);
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

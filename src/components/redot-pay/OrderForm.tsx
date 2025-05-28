import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FormField from "./FormField";
import InfoBlock from "./InfoBlock";
import { RedotPayFormData } from "@/types/redot-pay";

interface OrderFormProps {
  onSubmit: (data: RedotPayFormData) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<RedotPayFormData>({
    email: "",
    telegramNick: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
        className="w-full h-16 text-xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-900 hover:via-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl rounded-xl text-white"
      >
        <Icon name="ShoppingCart" size={24} className="mr-3" />
        Оформить заказ
      </Button>
    </form>
  );
}

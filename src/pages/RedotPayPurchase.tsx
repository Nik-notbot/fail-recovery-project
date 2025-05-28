import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

export default function RedotPayPurchase() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    telegramNick: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    console.log("Заказ отправлен:", formData);
    // Пока просто показываем алерт
    alert("Заказ принят! Мы свяжемся с вами в ближайшее время.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Кнопка назад */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <Icon name="ArrowLeft" size={20} />
          Вернуться на главную
        </Button>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <Icon name="CreditCard" size={32} />
              Покупка RedotPay карты
            </CardTitle>
            <p className="text-blue-100 mt-2">
              Заполните форму для оформления заказа
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ваш@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12 text-lg"
                />
              </div>

              {/* Ник в телеграмм */}
              <div className="space-y-2">
                <Label htmlFor="telegramNick" className="text-lg font-medium">
                  Ник в телеграмм
                </Label>
                <Input
                  id="telegramNick"
                  type="text"
                  placeholder="@ваш_ник"
                  value={formData.telegramNick}
                  onChange={(e) =>
                    handleInputChange("telegramNick", e.target.value)
                  }
                  required
                  className="h-12 text-lg"
                />
              </div>

              {/* Информационный блок */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4"></div>

              {/* Комментарий */}
              <div className="space-y-2">
                <Label htmlFor="comment" className="text-lg font-medium">
                  Дополнительные пожелания (необязательно)
                </Label>
                <Textarea
                  id="comment"
                  placeholder="Укажите особые требования или вопросы..."
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  className="min-h-24 text-lg"
                />
              </div>

              {/* Комментарий */}
              <div className="space-y-2">
                <Label htmlFor="comment" className="text-lg font-medium">
                  Дополнительные пожелания (необязательно)
                </Label>
                <Textarea
                  id="comment"
                  placeholder="Укажите особые требования или вопросы..."
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  className="min-h-24 text-lg"
                />
              </div>

              {/* Информационный блок */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Info"
                    size={20}
                    className="text-blue-600 mt-0.5"
                  />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Важная информация:</p>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Карта будет выпущена в течение 1-2 рабочих дней</li>
                      <li>
                        • После оформления мы свяжемся с вами для подтверждения
                      </li>
                      <li>• Минимальная сумма пополнения - 50 USD</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Кнопка отправки */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Icon name="ShoppingCart" size={20} />
                Оформить заказ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

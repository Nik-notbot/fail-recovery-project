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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Кнопка назад */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Вернуться на главную
        </Button>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/90">
          <CardHeader className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-t-lg p-8">
            <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3 mb-2">
              <Icon name="CreditCard" size={36} />
              Покупка RedotPay карты
            </CardTitle>
            <p className="text-violet-100 text-lg">
              Заполните форму для оформления заказа
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email */}
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-lg font-semibold text-gray-700"
                >
                  Email адрес
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ваш@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-14 text-lg border-2 border-gray-200 focus:border-violet-500 focus:ring-violet-500/20 rounded-xl"
                />
              </div>

              {/* Ник в телеграмм */}
              <div className="space-y-3">
                <Label
                  htmlFor="telegramNick"
                  className="text-lg font-semibold text-gray-700"
                >
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
                  className="h-14 text-lg border-2 border-gray-200 focus:border-violet-500 focus:ring-violet-500/20 rounded-xl"
                />
              </div>

              {/* Информационный блок */}
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="Info"
                    size={24}
                    className="text-violet-600 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm">
                    <p className="font-semibold mb-3 text-violet-800 text-lg">
                      Важная информация:
                    </p>
                    <ul className="space-y-2 text-violet-700">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 font-bold">•</span>
                        Карта будет выпущена в течение 1-2 рабочих дней
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 font-bold">•</span>
                        После оформления мы свяжемся с вами для подтверждения
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 font-bold">•</span>
                        Минимальная сумма пополнения - 50 USD
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Комментарий */}
              <div className="space-y-3">
                <Label
                  htmlFor="comment"
                  className="text-lg font-semibold text-gray-700"
                >
                  Дополнительные пожелания{" "}
                  <span className="text-gray-400 font-normal">
                    (необязательно)
                  </span>
                </Label>
                <Textarea
                  id="comment"
                  placeholder="Укажите особые требования или вопросы..."
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  className="min-h-32 text-lg border-2 border-gray-200 focus:border-violet-500 focus:ring-violet-500/20 rounded-xl resize-none"
                />
              </div>

              {/* Кнопка отправки */}
              <Button
                type="submit"
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl rounded-xl"
              >
                <Icon name="ShoppingCart" size={24} className="mr-3" />
                Оформить заказ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

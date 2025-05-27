import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export default function RedotPayPurchase() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    manualEmail: "",
    telegramNick: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Order data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-2xl mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад к услугам
        </Button>

        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img
                src="https://play-lh.googleusercontent.com/kvP-BmU-swM_AqJSTgCFZEc44L2qgC32LWF2xctra2Px8FkSriGv9D7aqMp5FU2u2Q"
                alt="RedotPay"
                className="w-12 h-12 rounded-lg"
              />
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Покупка RedotPay</CardTitle>
            <p className="text-muted-foreground">
              Заполните форму для оформления заказа
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="manualEmail">Ручной ввод Email</Label>
                <Input
                  id="manualEmail"
                  type="email"
                  placeholder="Повторите ваш email"
                  value={formData.manualEmail}
                  onChange={(e) =>
                    handleInputChange("manualEmail", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegramNick">Ник в Telegram</Label>
                <Input
                  id="telegramNick"
                  type="text"
                  placeholder="@your_telegram_nick"
                  value={formData.telegramNick}
                  onChange={(e) =>
                    handleInputChange("telegramNick", e.target.value)
                  }
                  required
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  Оформить заказ
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

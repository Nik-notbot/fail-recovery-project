import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface BybitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BybitModal({ isOpen, onClose }: BybitModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/2e0c518c-ae63-4c4e-a5cd-e8328a9908fa.png"
              className="h-8 w-8"
              alt="Bybit"
            />
            Bybit Виртуальная Карта
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="CreditCard" size={16} className="mr-1" />
              Виртуальная карта
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Криптобиржа
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Виртуальная карта
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Instant пополнение криптой</li>
                  <li>• Поддержка Visa/Mastercard</li>
                  <li>• Онлайн покупки по всему миру</li>
                  <li>• Низкие комиссии</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Безопасность
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Регулируемая биржа</li>
                  <li>• 2FA аутентификация</li>
                  <li>• Страхование средств</li>
                  <li>• KYC верификация</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-orange-800">
                Что включено в пакет:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Аккаунт Bybit с KYC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Активированная виртуальная карта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Инструкция по использованию</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              className="flex-1 bg-orange-600 hover:bg-orange-700"
              onClick={() =>
                window.open("https://t.me/m/RN5tSaCbZmI0", "_blank")
              }
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Купить за 2700 ₽
            </Button>
            <Button variant="outline" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

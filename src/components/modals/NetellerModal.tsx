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

interface NetellerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NetellerModal({ isOpen, onClose }: NetellerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/4ebb3203-5e80-4200-a43e-6a6adea739e3.png"
              className="h-8 w-8"
              alt="Neteller"
            />
            Neteller
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="CreditCard" size={16} className="mr-1" />
              E-wallet + карта
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Icon name="Globe" size={16} className="mr-1" />
              Глобальная система
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Wallet" size={20} />
                  E-wallet
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Мгновенные переводы</li>
                  <li>• Низкие комиссии</li>
                  <li>• Поддержка 26 валют</li>
                  <li>• Мобильное приложение</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Net+ карта
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Mastercard по всему миру</li>
                  <li>• Снятие в банкоматах</li>
                  <li>• Покупки в магазинах</li>
                  <li>• Контроль через приложение</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-green-800">
                Что включено в пакет:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Верифицированный аккаунт</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Активированная Net+ карта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Настройка лимитов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Инструкции по использованию</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() =>
                window.open("https://t.me/m/l0fyHDctZTFk", "_blank")
              }
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Купить за 8000 ₽
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

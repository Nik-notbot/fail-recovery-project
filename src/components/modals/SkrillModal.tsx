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

interface SkrillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkrillModal({ isOpen, onClose }: SkrillModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/7468311a-cd9f-452c-aed1-984204b9f730.png"
              className="h-8 w-8"
              alt="Skrill"
            />
            Skrill
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              <Icon name="CreditCard" size={16} className="mr-1" />
              E-wallet + карта
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800"
            >
              <Icon name="Shield" size={16} className="mr-1" />
              FCA лицензия
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Wallet" size={20} />
                  Электронный кошелек
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Быстрые переводы</li>
                  <li>• Поддержка 40 валют</li>
                  <li>• Низкие комиссии</li>
                  <li>• Криптовалюты</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Skrill карта
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Mastercard Prepaid</li>
                  <li>• Снятие наличных</li>
                  <li>• Покупки онлайн</li>
                  <li>• Контакт-less платежи</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-pink-800">
                Что включено в пакет:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Верифицированный аккаунт</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Активированная карта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Доступ к криптовалютам</span>
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
              className="flex-1 bg-pink-600 hover:bg-pink-700"
              onClick={() =>
                window.open("https://t.me/m/5dpj--uyYjg0", "_blank")
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

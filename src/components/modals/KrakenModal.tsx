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

interface KrakenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KrakenModal({ isOpen, onClose }: KrakenModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/fbb86602-f694-4b26-bbd4-6054a54affee.png"
              className="h-8 w-8"
              alt="Kraken"
            />
            Kraken
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800"
            >
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Топ-3 биржа США
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="CreditCard" size={16} className="mr-1" />
              Виртуальная карта
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Building" size={20} />О бирже
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Основана в 2011 году</li>
                  <li>• Лицензирована в США</li>
                  <li>• Более 9 млн пользователей</li>
                  <li>• Высокая безопасность</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Возможности карты
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Пополнение криптовалютой</li>
                  <li>• Покупки в интернете</li>
                  <li>• Поддержка Visa</li>
                  <li>• Контроль лимитов</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-purple-800">
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
                  <span>Полная настройка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Техническая поддержка</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={() =>
                window.open("https://t.me/m/HIJwHavMMTk0", "_blank")
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

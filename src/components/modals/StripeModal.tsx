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

interface StripeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StripeModal({ isOpen, onClose }: StripeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/586e6cb7-c129-442e-9202-c96e740df789.png"
              className="h-8 w-8"
              alt="Stripe"
            />
            Stripe для бизнеса
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Icon name="Building" size={16} className="mr-1" />
              Для бизнеса
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="CreditCard" size={16} className="mr-1" />
              Платежный процессинг
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Для бизнеса
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Прием онлайн платежей</li>
                  <li>• 135+ валют</li>
                  <li>• API интеграция</li>
                  <li>• Аналитика продаж</li>
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
                  <li>• PCI DSS сертификат</li>
                  <li>• Защита от мошенничества</li>
                  <li>• 3D Secure</li>
                  <li>• SOC 2 Type II</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-blue-800">
                Что включено в пакет:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Аккаунт Stripe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Полная верификация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Настройка платежей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Техническая интеграция</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                window.open("https://t.me/forbidden_john", "_blank")
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

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

interface EsimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EsimModal({ isOpen, onClose }: EsimModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <img
              src="https://cdn.poehali.dev/files/9aff47ae-06ea-4556-8616-99d8af0098a4.jpeg"
              className="h-8 w-8"
              alt="eSIM"
            />
            eSIM Европа
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Icon name="Smartphone" size={16} className="mr-1" />
              eSIM технология
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="MapPin" size={16} className="mr-1" />
              Европа
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Globe" size={20} />
                  Покрытие
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 27 стран Европы</li>
                  <li>• Высокоскоростной интернет</li>
                  <li>• 4G/5G сеть</li>
                  <li>• Без роуминга</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Smartphone" size={20} />
                  Преимущества
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Мгновенная активация</li>
                  <li>• Нет физической SIM</li>
                  <li>• Удобное управление</li>
                  <li>• Экономия до 90%</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-blue-800">
                Что включено в пакет:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>eSIM профиль</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>QR-код для активации</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Инструкция по установке</span>
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
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                window.open("https://t.me/m/s3YBfElRZGRk", "_blank")
              }
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Купить за 2400 ₽
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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface WiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WiseModal({ isOpen, onClose }: WiseModalProps) {
  const handleOrderClick = () => {
    window.open("https://t.me/m/0F_E6lYlNjQ8", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex-shrink-0">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  className="h-12 w-12 object-contain"
                  src="https://s3-symbol-logo.tradingview.com/wise--600.png"
                  alt="WISE"
                />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-white">
              Европейская карта Wise
            </DialogTitle>
            <p className="text-center text-blue-100 text-lg mt-2">
              Британская платежная система для международных переводов
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Price & Type */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-blue-50 rounded-2xl px-6 py-3 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Виртуальная карта
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                Visa
              </Badge>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">8 000 ₽</div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Star" className="h-5 w-5 text-blue-600" />
                Ключевые преимущества
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Send"
                      className="h-5 w-5 text-orange-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-orange-800">
                        SWIFT переводы по миру
                      </h4>
                      <p className="text-sm text-orange-700 mt-1">
                        Не нужно декларировать. Бесплатное обслуживание
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CreditCard"
                      className="h-5 w-5 text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-green-800">
                        Легкое пополнение
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        Через криптовалюту с подробными инструкциями
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Package" className="h-5 w-5 text-blue-600" />
                Что входит в пакет
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {[
                    "Готовый аккаунт WISE",
                    "Виртуальная карта Visa",
                    "SWIFT переводы",
                    "Инструкции по пополнению",
                    "Техподдержка 24/7",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon
                        name="CheckCircle"
                        className="h-5 w-5 text-green-500"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "Shield",
                title: "Без доверенности",
                desc: "Полноценная европейская карта",
              },
              {
                icon: "MapPin",
                title: "Европейская карта",
                desc: "Выпущена в ЕС",
              },
              {
                icon: "Zap",
                title: "Исходящий Swift",
                desc: "Переводы по миру",
              },
              {
                icon: "Smartphone",
                title: "Поддержка платежей",
                desc: "GooglePay, ApplePay",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-blue-600 mb-2"
                />
                <h4 className="font-semibold text-sm text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleOrderClick}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg text-lg font-semibold"
            >
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
              Заказать за 8 000 ₽
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="px-8 py-3 text-lg"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

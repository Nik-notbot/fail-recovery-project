import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface BybitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BybitModal({ isOpen, onClose }: BybitModalProps) {
  const handleOrderClick = () => {
    window.open("https://t.me/m/gJc_SjqXNw40", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 flex-shrink-0">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  className="h-12 w-12 object-contain"
                  src="https://s3-symbol-logo.tradingview.com/bybit--600.png"
                  alt="Bybit"
                />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-white">
              Bybit виртуальная карта
            </DialogTitle>
            <p className="text-center text-yellow-100 text-lg mt-2">
              Криптовалютная биржа с виртуальными картами
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Price & Type */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-yellow-50 rounded-2xl px-6 py-3 mb-4">
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                Виртуальная карта
              </Badge>
              <div className="text-3xl font-bold text-yellow-700">2 700 ₽</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Что вы получите
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Торговля криптовалютами
                </h3>
                <div className="space-y-2">
                  {[
                    "Споттовая торговля",
                    "Фьючерсная торговля",
                    "Маржинальная торговля",
                    "Копи-трейдинг",
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
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Карточные услуги
                </h3>
                <div className="space-y-2">
                  {[
                    "Виртуальная карта",
                    "Пополнение криптой",
                    "Покупки в интернете",
                    "Низкие комиссии",
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
                icon: "Bitcoin",
                title: "Криптовалюты",
                desc: "Торговля 400+ криптовалютами",
              },
              {
                icon: "CreditCard",
                title: "Виртуальная карта",
                desc: "Для онлайн покупок",
              },
              {
                icon: "TrendingUp",
                title: "Фьючерсы",
                desc: "Торговля с плечом до 100x",
              },
              {
                icon: "Copy",
                title: "Копи-трейдинг",
                desc: "Копируйте прибыльных трейдеров",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-yellow-600 mb-2"
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
              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-3 rounded-lg text-lg font-semibold"
            >
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
              Заказать за 2 700 ₽
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

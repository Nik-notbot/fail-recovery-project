import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface StripeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StripeModal({ isOpen, onClose }: StripeModalProps) {
  const handleOrderClick = () => {
    window.open("https://t.me/forbidden_john", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex flex-col border-4 border-transparent bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 p-1 shadow-2xl">
        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-6 flex-shrink-0">
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img
                    className="h-12 w-12 object-contain"
                    src="https://cdn.poehali.dev/files/586e6cb7-c129-442e-9202-c96e740df789.png"
                    alt="Stripe"
                  />
                </div>
              </div>
              <DialogTitle className="text-3xl font-bold text-center text-white">
                Stripe для бизнеса
              </DialogTitle>
              <p className="text-center text-indigo-100 text-lg mt-2">
                Ведущая платформа для онлайн платежей
              </p>
            </DialogHeader>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 flex-1 overflow-y-auto">
            {/* Price & Type */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-xl px-4 py-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800"
                >
                  Для бизнеса
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Платежный процессинг
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                8 000 ₽
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Icon name="Star" className="h-5 w-5 text-indigo-600" />
                  Возможности для бизнеса
                </h3>
                <div className="space-y-2">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon
                        name="CreditCard"
                        className="h-5 w-5 text-blue-600 mt-0.5"
                      />
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Прием онлайн платежей
                        </h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Обработка платежей в реальном времени
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon
                        name="Globe"
                        className="h-5 w-5 text-green-600 mt-0.5"
                      />
                      <div>
                        <h4 className="font-semibold text-green-800">
                          135+ валют
                        </h4>
                        <p className="text-sm text-green-700 mt-1">
                          Международные платежи
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon
                        name="BarChart"
                        className="h-5 w-5 text-purple-600 mt-0.5"
                      />
                      <div>
                        <h4 className="font-semibold text-purple-800">
                          Аналитика продаж
                        </h4>
                        <p className="text-sm text-purple-700 mt-1">
                          Детальная отчетность
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Icon name="Package" className="h-5 w-5 text-indigo-600" />
                  Что входит в пакет
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    {[
                      "Аккаунт Stripe",
                      "Полная верификация",
                      "Настройка платежей",
                      "Техническая интеграция",
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  icon: "Code",
                  title: "API интеграция",
                  desc: "Простая интеграция с сайтом",
                },
                {
                  icon: "Shield",
                  title: "PCI DSS",
                  desc: "Максимальная безопасность",
                },
                {
                  icon: "AlertTriangle",
                  title: "Защита от мошенничества",
                  desc: "Встроенная защита",
                },
                {
                  icon: "Award",
                  title: "SOC 2 Type II",
                  desc: "Международные стандарты",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                >
                  <Icon
                    name={feature.icon}
                    className="h-6 w-6 text-indigo-600 mb-2"
                  />
                  <h4 className="font-semibold text-xs text-gray-900 mb-1">
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
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white py-3 rounded-lg text-lg font-semibold"
              >
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Купить за 8 000 ₽
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

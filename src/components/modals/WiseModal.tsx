import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface WiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WiseModal({ isOpen, onClose }: WiseModalProps) {
  const handleOrderClick = () => {
    window.open("https://t.me/m/0F_E6lYlNjQ8", "_blank");
    onClose();
  };

  const features = [
    { title: "Без доверенности", description: "Полноценная европейская карта" },
    { title: "Европейская карта", description: "Выпущена в ЕС" },
    { title: "Исходящий Swift", description: "Переводы по миру" },
    { title: "Поддержка платежей", description: "GooglePay, ApplePay" },
  ];

  const advantages = [
    {
      title: "SWIFT переводы по миру",
      description: "Не нужно декларировать. Бесплатное обслуживание",
      bgColor: "bg-orange-50 border-orange-200",
      textColor: "text-orange-800",
      descColor: "text-orange-700",
    },
    {
      title: "Легкое пополнение",
      description: "Через криптовалюту с подробными инструкциями",
      bgColor: "bg-green-50 border-green-200",
      textColor: "text-green-800",
      descColor: "text-green-700",
    },
  ];

  const packageItems = [
    "Готовый аккаунт WISE",
    "Виртуальная карта Visa",
    "SWIFT переводы",
    "Инструкции по пополнению",
    "Техподдержка",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl font-bold text-center">
            Европейская карта Wise
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая колонка */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm border-2 border-gray-200">
                  <img
                    className="h-20 w-20 object-contain"
                    src="https://s3-symbol-logo.tradingview.com/wise--600.png"
                    alt="WISE"
                  />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">
                  8 000 ₽
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Британская платежная система для международных переводов
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <span className="text-base font-medium">Карта: </span>
                  <span className="text-base">Visa (виртуальная)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ключевые преимущества
                </h3>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className={`${advantage.bgColor} border rounded-lg p-4`}
                    >
                      <h4
                        className={`font-semibold mb-2 ${advantage.textColor}`}
                      >
                        {advantage.title}
                      </h4>
                      <p className={`text-sm ${advantage.descColor}`}>
                        {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Что входит в пакет
                </h3>
                <div className="space-y-3">
                  {packageItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t">
            <Button
              className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-3 text-lg"
              onClick={handleOrderClick}
            >
              Заказать карту — 8 000 ₽
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

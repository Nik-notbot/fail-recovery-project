import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/lib/i18n/context";

interface RedotPayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RedotPayModal({ isOpen, onClose }: RedotPayModalProps) {
  const { locale } = useLanguage();
  
  const getPrice = () => {
    return locale === 'en' ? '40 USD' : '3 100 ₽';
  };
  
  const handleOrderClick = () => {
    window.open("https://t.me/m/hT6UIwKhYmJk", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0 flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  className="h-12 w-12 object-contain rounded-full"
                  src="https://play-lh.googleusercontent.com/kvP-BmU-swM_AqJSTgCFZEc44L2qgC32LWF2xctra2Px8FkSriGv9D7aqMp5FU2u2Q"
                  alt="RedotPay"
                />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-white">
              {locale === 'en' ? 'RedotPay Virtual Card' : 'RedotPay виртуальная карта'}
            </DialogTitle>
            <p className="text-center text-purple-100 text-lg mt-2">
              {locale === 'en' ? 'Cryptocurrency payment solution' : 'Криптовалютное платежное решение'}
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          {/* Price & Type */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-50 rounded-xl px-4 py-2 mb-2">
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800"
              >
{locale === 'en' ? 'Virtual Card' : 'Виртуальная карта'}
              </Badge>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
{locale === 'en' ? 'Visa' : 'Visa'}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{getPrice()}</div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Star" className="h-5 w-5 text-purple-600" />
{locale === 'en' ? 'Key Benefits' : 'Основные преимущества'}
              </h3>
              <div className="space-y-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Coins"
                      className="h-5 w-5 text-blue-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-blue-800">
{locale === 'en' ? 'Crypto Support' : 'Поддержка криптовалют'}
                      </h4>
                      <p className="text-xs text-blue-700 mt-1">
{locale === 'en' ? 'Direct funding with cryptocurrencies' : 'Прямое пополнение криптовалютами'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Globe"
                      className="h-5 w-5 text-purple-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-800">
{locale === 'en' ? 'Global Usage' : 'Глобальное использование'}
                      </h4>
                      <p className="text-sm text-purple-700 mt-1">
{locale === 'en' ? 'Accepted worldwide for online payments' : 'Принимается по всему миру для онлайн-платежей'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Package" className="h-5 w-5 text-purple-600" />
{locale === 'en' ? 'Package Includes' : 'Что входит в пакет'}
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2">
                  [
                    locale === 'en' ? 'Ready RedotPay Account' : 'Готовый аккаунт RedotPay',
                    locale === 'en' ? 'Virtual Visa Card' : 'Виртуальная карта Visa',
                    locale === 'en' ? 'Mobile App Access' : 'Доступ к мобильному приложению',
                    locale === 'en' ? 'Usage Instructions' : 'Инструкции по использованию',
                    locale === 'en' ? '24/7 Technical Support' : 'Техподдержка 24/7',
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
            [
              {
                icon: "CreditCard",
                title: locale === 'en' ? 'Virtual Card' : 'Виртуальная карта',
                desc: locale === 'en' ? 'Instant issuance' : 'Мгновенный выпуск',
              },
              {
                icon: "Coins",
                title: locale === 'en' ? 'Crypto Top-up' : 'Пополнение криптой',
                desc: locale === 'en' ? 'Multiple cryptocurrencies' : 'Множество криптовалют',
              },
              {
                icon: "Globe",
                title: locale === 'en' ? 'Global Payments' : 'Глобальные платежи',
                desc: locale === 'en' ? 'Worldwide acceptance' : 'Принимается по всему миру',
              },
              {
                icon: "Smartphone",
                title: locale === 'en' ? 'Mobile App' : 'Мобильное приложение',
                desc: locale === 'en' ? 'Easy management' : 'Удобное управление',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
              >
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-purple-600 mb-2"
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
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg text-lg font-semibold"
            >
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
{locale === 'en' ? `Buy for ${getPrice()}` : `Купить за ${getPrice()}`}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="px-8 py-3 text-lg"
            >
{locale === 'en' ? 'Close' : 'Закрыть'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
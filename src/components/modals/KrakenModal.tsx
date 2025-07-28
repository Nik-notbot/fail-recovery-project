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

interface KrakenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KrakenModal({ isOpen, onClose }: KrakenModalProps) {
  const { locale } = useLanguage();
  
  const getPrice = () => {
    return locale === 'en' ? '100 USD' : '8 000 ₽';
  };
  
  const handleOrderClick = () => {
    window.open("https://t.me/m/HIJwHavMMTk0", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 flex-shrink-0">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  className="h-12 w-12 object-contain"
                  src="https://cdn.poehali.dev/files/fbb86602-f694-4b26-bbd4-6054a54affee.png"
                  alt="Kraken"
                />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-white">
              {locale === 'en' ? 'Kraken Pro Account' : 'Kraken Pro Account'}
            </DialogTitle>
            <p className="text-center text-indigo-100 text-lg mt-2">
              {locale === 'en' ? 'Professional US cryptocurrency exchange' : 'Профессиональная криптобиржа США'}
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Price & Type */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-indigo-50 rounded-2xl px-6 py-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-indigo-100 text-indigo-800"
              >
{locale === 'en' ? 'Top-3 US Exchange' : 'Топ-3 биржа США'}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800"
              >
{locale === 'en' ? 'Pro Account' : 'Pro аккаунт'}
              </Badge>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{getPrice()}</div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Star" className="h-5 w-5 text-indigo-600" />{locale === 'en' ? 'About Exchange' : 'О бирже'}
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Building"
                      className="h-5 w-5 text-blue-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-800">
{locale === 'en' ? 'US Licensed' : 'Лицензированная в США'}
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
{locale === 'en' ? 'Founded 2011, high security standards' : 'Основана в 2011 году, высокая безопасность'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Users"
                      className="h-5 w-5 text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-green-800">
{locale === 'en' ? '9+ Million Users' : '9+ млн пользователей'}
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
{locale === 'en' ? 'One of the world\'s largest exchanges' : 'Одна из крупнейших бирж в мире'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Package" className="h-5 w-5 text-indigo-600" />
{locale === 'en' ? 'Package Includes' : 'Что входит в пакет'}
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {[
                    locale === 'en' ? 'Verified Account' : 'Верифицированный аккаунт',
                    locale === 'en' ? 'Activated Card' : 'Активированная карта',
                    locale === 'en' ? 'Complete Setup' : 'Полная настройка',
                    locale === 'en' ? 'Technical Support' : 'Техническая поддержка',
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
                icon: "CreditCard",
                title: locale === 'en' ? 'Virtual Card' : 'Виртуальная карта',
                desc: locale === 'en' ? 'Crypto funding' : 'Пополнение криптовалютой',
              },
              {
                icon: "Globe",
                title: locale === 'en' ? 'Online Purchases' : 'Покупки в интернете',
                desc: locale === 'en' ? 'Visa support' : 'Поддержка Visa',
              },
              {
                icon: "Settings",
                title: locale === 'en' ? 'Limit Control' : 'Контроль лимитов',
                desc: locale === 'en' ? 'Flexible settings' : 'Гибкая настройка',
              },
              {
                icon: "Shield",
                title: locale === 'en' ? 'Security' : 'Безопасность',
                desc: locale === 'en' ? 'High-level protection' : 'Высокий уровень защиты',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-indigo-600 mb-2"
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
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-3 rounded-lg text-lg font-semibold"
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
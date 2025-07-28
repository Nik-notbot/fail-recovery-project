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

interface SkrillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkrillModal({ isOpen, onClose }: SkrillModalProps) {
  const { locale } = useLanguage();
  
  const getPrice = () => {
    return locale === 'en' ? '100 USD' : '8 000 ₽';
  };
  
  const handleOrderClick = () => {
    window.open("https://t.me/m/5dpj--uyYjg0", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 flex-shrink-0">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  className="h-12 w-12 object-contain"
                  src="https://cdn.poehali.dev/files/7468311a-cd9f-452c-aed1-984204b9f730.png"
                  alt="Skrill"
                />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-white">
              {locale === 'en' ? 'Skrill E-Wallet' : 'Skrill E-Wallet'}
            </DialogTitle>
            <p className="text-center text-pink-100 text-lg mt-2">
              {locale === 'en' ? 'International payment system with FCA license' : 'Международная платежная система с FCA лицензией'}
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          {/* Price & Type */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-50 rounded-xl px-4 py-2 mb-2">
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
{locale === 'en' ? 'E-wallet + Card' : 'E-wallet + карта'}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800"
              >
{locale === 'en' ? 'FCA License' : 'FCA лицензия'}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{getPrice()}</div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Star" className="h-5 w-5 text-pink-600" />
{locale === 'en' ? 'Electronic Wallet' : 'Электронный кошелек'}
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Zap" className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800">
{locale === 'en' ? 'Fast Transfers' : 'Быстрые переводы'}
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
{locale === 'en' ? 'Instant international transfers' : 'Мгновенные международные переводы'}
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
{locale === 'en' ? '40 Currencies Support' : 'Поддержка 40 валют'}
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
{locale === 'en' ? 'Wide selection of currencies' : 'Широкий выбор валют'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Bitcoin"
                      className="h-5 w-5 text-purple-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-800">
{locale === 'en' ? 'Cryptocurrencies' : 'Криптовалюты'}
                      </h4>
                      <p className="text-sm text-purple-700 mt-1">
{locale === 'en' ? 'Support for popular cryptocurrencies' : 'Поддержка популярных криптовалют'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Package" className="h-5 w-5 text-pink-600" />
{locale === 'en' ? 'Package Includes' : 'Что входит в пакет'}
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {[
                    locale === 'en' ? 'Verified Account' : 'Верифицированный аккаунт',
                    locale === 'en' ? 'Activated Card' : 'Активированная карта',
                    locale === 'en' ? 'Cryptocurrency Access' : 'Доступ к криптовалютам',
                    locale === 'en' ? '24/7 Support' : 'Поддержка 24/7',
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
            [
              {
                icon: "CreditCard",
                title: locale === 'en' ? 'Skrill Card' : 'Skrill карта',
                desc: locale === 'en' ? 'Mastercard Prepaid' : 'Mastercard Prepaid',
              },
              {
                icon: "Banknote",
                title: locale === 'en' ? 'Cash Withdrawal' : 'Снятие наличных',
                desc: locale === 'en' ? 'ATMs worldwide' : 'В банкоматах по миру',
              },
              {
                icon: "ShoppingCart",
                title: locale === 'en' ? 'Online Shopping' : 'Покупки онлайн',
                desc: locale === 'en' ? 'Online stores' : 'Интернет-магазины',
              },
              {
                icon: "Contactless",
                title: locale === 'en' ? 'Contactless Payments' : 'Бесконтактные платежи',
                desc: locale === 'en' ? 'NFC technology' : 'NFC технология',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-pink-600 mb-2"
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
              className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-lg text-lg font-semibold"
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
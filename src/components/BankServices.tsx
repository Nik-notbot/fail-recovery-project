import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/context";

export function BankServices() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const openTelegram = () => {
    window.open("https://t.me/forbidden_john", "_blank");
  };

  // Функция для получения чистого ключа логотипа
  const getCleanLogoKey = (name: string) => {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const specialCases: Record<string, string> = {
      bybitvirtualcard: "bybit",
      bybitвиртуальнаякарта: "bybit",
      bybit: "bybit",
    };
    return specialCases[cleanName] || cleanName;
  };

  // Fallback-изображения для всех банков
  const logoFallbacks: Record<string, string> = {
    bybit:
      "https://cdn.poehali.dev/files/2e0c518c-ae63-4c4e-a5cd-e8328a9908fa.png",
    binance:
      "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
    revolut:
      "https://play-lh.googleusercontent.com/9Agn2TZHIyOR4GGB4LcOU4VXwE2OcK47qwGY8XPZXz4u55ehNfpGuEBeNq_cbvH0z5A",
    redotpay:
      "https://play-lh.googleusercontent.com/kvP-BmU-swM_AqJSTgCFZEc44L2qgC32LWF2xctra2Px8FkSriGv9D7aqMp5FU2u2Q",
    bitget: "https://s2.coinmarketcap.com/static/img/coins/200x200/11092.png",
    coinbase:
      "https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png",
    okx: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png",
    bingx: "https://www.cryptunit.com/exchangeicons/176.png",
    esim: "https://cdn.poehali.dev/files/9aff47ae-06ea-4556-8616-99d8af0098a4.jpeg",
    neteller:
      "https://cdn.poehali.dev/files/4ebb3203-5e80-4200-a43e-6a6adea739e3.png",
    skrill:
      "https://cdn.poehali.dev/files/7468311a-cd9f-452c-aed1-984204b9f730.png",
    kraken:
      "https://cdn.poehali.dev/files/fbb86602-f694-4b26-bbd4-6054a54affee.png",
    stripe:
      "https://cdn.poehali.dev/files/586e6cb7-c129-442e-9202-c96e740df789.png",
  };

  return (
    <section id="banks" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("bankServices.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mb-6">
            {t("bankServices.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {t("bankServices.banks")
            .filter(
              (bank: any) => bank.name !== "Stripe" && bank.name !== "Skrill",
            )
            .map((bank: any) => {
              const logoKey = getCleanLogoKey(bank.name);
              const isRedotPay = logoKey === "redotpay";

              const handleBuyClick = () => {
                if (isRedotPay) {
                  window.open("https://t.me/m/hT6UIwKhYmJk", "_blank");
                } else {
                  openTelegram();
                }
              };
              return (
                <Card
                  key={bank.id}
                  className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                >
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <div className="h-20 w-20 mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm border-2 border-gray-200">
                      <img
                        className="h-16 w-16 object-contain"
                        src={`https://s3-symbol-logo.tradingview.com/${logoKey}--600.png`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            logoFallbacks[logoKey] || "/placeholder.svg";
                        }}
                        alt={bank.name}
                        onLoad={() =>
                          console.log(`Успешно загружено: ${bank.name}`)
                        }
                        onErrorCapture={() =>
                          console.log(`Ошибка загрузки: ${bank.name}`)
                        }
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{bank.name}</h3>
                    <p className="text-center text-muted-foreground mb-auto">
                      {bank.description}
                    </p>
                    <div className="w-full mt-6">
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                        onClick={
                          bank.name === "RedotPay"
                            ? handleBuyClick
                            : bank.name.toLowerCase().includes("bybit")
                              ? () =>
                                  window.open(
                                    "https://t.me/m/RN5tSaCbZmI0",
                                    "_blank",
                                  )
                              : bank.name.toLowerCase().includes("wise")
                                ? () =>
                                    window.open(
                                      "https://t.me/m/0F_E6lYlNjQ8",
                                      "_blank",
                                    )
                                : bank.name.toLowerCase().includes("kraken")
                                  ? () =>
                                      window.open(
                                        "https://t.me/m/HIJwHavMMTk0",
                                        "_blank",
                                      )
                                  : bank.name.toLowerCase().includes("neteller")
                                    ? () =>
                                        window.open(
                                          "https://t.me/m/l0fyHDctZTFk",
                                          "_blank",
                                        )
                                    : bank.name === "ESIM"
                                      ? () =>
                                          window.open(
                                            "https://t.me/m/s3YBfElRZGRk",
                                            "_blank",
                                          )
                                      : openTelegram
                        }
                      >
                        {bank.name.toLowerCase().includes("bybit")
                          ? "Купить 2700 ₽"
                          : bank.name.toLowerCase().includes("wise")
                            ? "Купить 8000 ₽"
                            : bank.name === "RedotPay"
                              ? "Купить 2700 ₽"
                              : bank.name === "ESIM"
                                ? "Купить 2400 ₽"
                                : `Купить ${bank.price} ₽`}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Центрированные карточки Stripe и Skrill */}
        <div className="flex justify-center gap-8 mb-10">
          {t("bankServices.banks")
            .filter(
              (bank: any) => bank.name === "Stripe" || bank.name === "Skrill",
            )
            .map((bank: any) => {
              const logoKey = getCleanLogoKey(bank.name);

              return (
                <Card
                  key={bank.id}
                  className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full w-full max-w-sm"
                >
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <div className="h-20 w-20 mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm border-2 border-gray-200">
                      <img
                        src={`https://s3-symbol-logo.tradingview.com/${logoKey}--600.png`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            logoFallbacks[logoKey] || "/placeholder.svg";
                        }}
                        alt={bank.name}
                        className="h-16 w-16 object-contain"
                        onLoad={() =>
                          console.log(`Успешно загружено: ${bank.name}`)
                        }
                        onErrorCapture={() =>
                          console.log(`Ошибка загрузки: ${bank.name}`)
                        }
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{bank.name}</h3>
                    <p className="text-center text-muted-foreground mb-auto">
                      {bank.description}
                    </p>
                    <div className="w-full mt-6">
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                        onClick={
                          bank.name === "Skrill"
                            ? () =>
                                window.open(
                                  "https://t.me/m/5dpj--uyYjg0",
                                  "_blank",
                                )
                            : openTelegram
                        }
                      >
                        {bank.name === "Skrill" || bank.name === "Stripe"
                          ? "Купить 8000 ₽"
                          : `Купить ${bank.price} ₽`}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Блок индивидуального запроса */}
        <div className="flex justify-center mb-10">
          <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 max-w-3xl w-full">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="h-24 w-24 flex items-center justify-center bg-gray-900 rounded-full overflow-hidden shadow-md">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold">
                  {t("bankServices.customRequest.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("bankServices.customRequest.description")}
                </p>
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-full"
                  onClick={openTelegram}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />{" "}
                  {t("bankServices.customRequest.button")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

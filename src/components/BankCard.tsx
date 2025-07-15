import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

interface Bank {
  id: string;
  name: string;
  description: string;
  price?: string;
}

interface BankCardProps {
  bank: Bank;
  onWiseModal: () => void;
  onRedotPayModal: () => void;
  onBybitModal: () => void;
  onKrakenModal: () => void;
  onNetellerModal: () => void;
  onEsimModal: () => void;
  onSkrillModal: () => void;
  onStripeModal: () => void;
  onTelegramOpen: () => void;
}

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

const getCleanLogoKey = (name: string) => {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const specialCases: Record<string, string> = {
    bybitvirtualcard: "bybit",
    bybitвиртуальнаякарта: "bybit",
    bybit: "bybit",
  };
  return specialCases[cleanName] || cleanName;
};

const getBankUrls = (bankName: string) => {
  const name = bankName.toLowerCase();
  const urls: Record<string, string> = {
    wise: "https://t.me/m/0F_E6lYlNjQ8",
    redotpay: "https://t.me/m/hT6UIwKhYmJk",
    bybit: "https://t.me/m/RN5tSaCbZmI0",
    kraken: "https://t.me/m/HIJwHavMMTk0",
    neteller: "https://t.me/m/l0fyHDctZTFk",
    esim: "https://t.me/m/s3YBfElRZGRk",
    skrill: "https://t.me/m/5dpj--uyYjg0",
  };

  for (const [key, url] of Object.entries(urls)) {
    if (name.includes(key)) return url;
  }
  return null;
};

const getBankPrice = (bankName: string, locale: string) => {
  const name = bankName.toLowerCase();
  
  const isHighPrice = 
    name.includes("wise") ||
    name.includes("kraken") ||
    name.includes("neteller") ||
    name === "stripe" ||
    name === "skrill";
    
  const isMediumPrice = name.includes("bybit") || name === "redotpay";
  const isLowPrice = name === "esim";
  
  if (locale === 'en') {
    if (isHighPrice) return "100 USD";
    if (isMediumPrice) return "40 USD";
    if (isLowPrice) return "30 USD";
    return "Get price";
  } else {
    if (isHighPrice) return "8000 ₽";
    if (isMediumPrice) return "3100 ₽";
    if (isLowPrice) return "2400 ₽";
    return "Узнать цену";
  }
};

export default function BankCard({
  bank,
  onWiseModal,
  onRedotPayModal,
  onBybitModal,
  onKrakenModal,
  onNetellerModal,
  onEsimModal,
  onSkrillModal,
  onStripeModal,
  onTelegramOpen,
}: BankCardProps) {
  const { locale } = useLanguage();
  const logoKey = getCleanLogoKey(bank.name);
  const bankUrl = getBankUrls(bank.name);
  const price = getBankPrice(bank.name, locale);

  const handleBuyClick = () => {
    if (bankUrl) {
      window.open(bankUrl, "_blank");
    } else {
      onTelegramOpen();
    }
  };

  const getModalHandler = () => {
    const name = bank.name.toLowerCase();
    if (name.includes("wise")) return onWiseModal;
    if (name === "redotpay") return onRedotPayModal;
    if (name.includes("bybit")) return onBybitModal;
    if (name.includes("kraken")) return onKrakenModal;
    if (name.includes("neteller")) return onNetellerModal;
    if (name.includes("esim")) return onEsimModal;
    if (name === "skrill") return onSkrillModal;
    if (name === "stripe") return onStripeModal;
    return null;
  };

  const renderButtons = () => {
    const modalHandler = getModalHandler();

    if (modalHandler) {
      return (
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            className="flex-1 bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
            onClick={handleBuyClick}
          >
            {locale === 'en' ? 'Buy' : 'Купить'} {price}
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={modalHandler}
          >
            {locale === 'en' ? 'Details' : 'Подробнее'}
          </Button>
        </div>
      );
    }

    return (
      <Button
        variant="outline"
        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
        onClick={handleBuyClick}
      >
        {locale === 'en' ? 'Buy' : 'Купить'} {price}
      </Button>
    );
  };

  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full">
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
          />
        </div>
        <h3 className="text-xl font-bold mb-3">{bank.name}</h3>
        <p className="text-center text-muted-foreground mb-auto">
          {bank.description}
        </p>
        <div className="w-full mt-6">{renderButtons()}</div>
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import BankCard from "./BankCard";
import WiseModal from "./modals/WiseModal";
import RedotPayModal from "./modals/RedotPayModal";
import BybitModal from "./modals/BybitModal";
import KrakenModal from "./modals/KrakenModal";
import NetellerModal from "./modals/NetellerModal";
import EsimModal from "./modals/EsimModal";
import SkrillModal from "./modals/SkrillModal";
import StripeModal from "./modals/StripeModal";
import CustomRequestCard from "./CustomRequestCard";

export function BankServices() {
  const { t } = useLanguage();
  const [isWiseModalOpen, setIsWiseModalOpen] = useState(false);
  const [isRedotPayModalOpen, setIsRedotPayModalOpen] = useState(false);
  const [isBybitModalOpen, setIsBybitModalOpen] = useState(false);
  const [isKrakenModalOpen, setIsKrakenModalOpen] = useState(false);
  const [isNetellerModalOpen, setIsNetellerModalOpen] = useState(false);
  const [isEsimModalOpen, setIsEsimModalOpen] = useState(false);
  const [isSkrillModalOpen, setIsSkrillModalOpen] = useState(false);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  const openTelegram = () => {
    window.open("https://t.me/forbidden_john", "_blank");
  };

  const regularBanks = t("bankServices.banks").filter(
    (bank: any) => bank.name !== "Stripe" && bank.name !== "Skrill",
  );

  const specialBanks = t("bankServices.banks").filter(
    (bank: any) => bank.name === "Stripe" || bank.name === "Skrill",
  );

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

        {/* Основные банки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {regularBanks.map((bank: any) => (
            <BankCard
              key={bank.id}
              bank={bank}
              onWiseModal={() => setIsWiseModalOpen(true)}
              onRedotPayModal={() => setIsRedotPayModalOpen(true)}
              onBybitModal={() => setIsBybitModalOpen(true)}
              onKrakenModal={() => setIsKrakenModalOpen(true)}
              onNetellerModal={() => setIsNetellerModalOpen(true)}
              onEsimModal={() => setIsEsimModalOpen(true)}
              onSkrillModal={() => setIsSkrillModalOpen(true)}
              onStripeModal={() => setIsStripeModalOpen(true)}
              onTelegramOpen={openTelegram}
            />
          ))}
        </div>

        {/* Центрированные карточки Stripe и Skrill */}
        <div className="flex justify-center gap-8 mb-10">
          {specialBanks.map((bank: any) => (
            <div key={bank.id} className="w-full max-w-sm">
              <BankCard
                bank={bank}
                onWiseModal={() => setIsWiseModalOpen(true)}
                onRedotPayModal={() => setIsRedotPayModalOpen(true)}
                onBybitModal={() => setIsBybitModalOpen(true)}
                onKrakenModal={() => setIsKrakenModalOpen(true)}
                onNetellerModal={() => setIsNetellerModalOpen(true)}
                onEsimModal={() => setIsEsimModalOpen(true)}
                onSkrillModal={() => setIsSkrillModalOpen(true)}
                onStripeModal={() => setIsStripeModalOpen(true)}
                onTelegramOpen={openTelegram}
              />
            </div>
          ))}
        </div>

        {/* Блок индивидуального запроса */}
        <CustomRequestCard onTelegramOpen={openTelegram} />
      </div>

      {/* Модальные окна */}
      <WiseModal
        isOpen={isWiseModalOpen}
        onClose={() => setIsWiseModalOpen(false)}
      />
      <RedotPayModal
        isOpen={isRedotPayModalOpen}
        onClose={() => setIsRedotPayModalOpen(false)}
      />
      <BybitModal
        isOpen={isBybitModalOpen}
        onClose={() => setIsBybitModalOpen(false)}
      />
      <KrakenModal
        isOpen={isKrakenModalOpen}
        onClose={() => setIsKrakenModalOpen(false)}
      />
      <NetellerModal
        isOpen={isNetellerModalOpen}
        onClose={() => setIsNetellerModalOpen(false)}
      />
      <EsimModal
        isOpen={isEsimModalOpen}
        onClose={() => setIsEsimModalOpen(false)}
      />
      <SkrillModal
        isOpen={isSkrillModalOpen}
        onClose={() => setIsSkrillModalOpen(false)}
      />
      <StripeModal
        isOpen={isStripeModalOpen}
        onClose={() => setIsStripeModalOpen(false)}
      />
    </section>
  );
}

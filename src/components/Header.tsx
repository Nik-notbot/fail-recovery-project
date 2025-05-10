import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-900 w-8 h-8 rounded-full">
            <Check className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          <span className="text-xl font-semibold">HEY, KYC!</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t("header.home")}
          </a>
          <a href="#banks" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t("header.services")}
          </a>
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t("header.features")}
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t("header.faq")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="h-9 flex items-center">
            <LanguageSwitcher />
          </div>
          <Button 
            className="rounded-full bg-gray-900 hover:bg-gray-800" 
            onClick={() => document.getElementById("banks")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("header.catalog")}
          </Button>
        </div>
      </div>
    </header>
  );
}
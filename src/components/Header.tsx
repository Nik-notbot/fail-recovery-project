import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // На главной странице скроллим к нужному блоку
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // На других страницах перенаправляем на главную с якорем
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-900 w-8 h-8 rounded-full">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-semibold">HEY, KYC!</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.home")}
          </Link>
          <button
            onClick={() => scrollToSection("banks")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.services")}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.features")}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.faq")}
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <div className="h-9 flex items-center">
            <LanguageSwitcher />
          </div>
          <Button
            className="rounded-full bg-gray-900 hover:bg-gray-800"
            onClick={() => scrollToSection("banks")}
          >
            {t("header.catalog")}
          </Button>
        </div>
      </div>
    </header>
  );
}

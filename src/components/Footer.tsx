import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-gray-900 w-8 h-8 rounded-full">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-semibold">HEY, KYC!</h3>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t("footer.slogan")}
            </p>
          </div>
        </div>
        <Separator className="my-6 bg-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              to="/offer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Публичная оферта
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-gray-500">
            <div className="text-center md:text-right">
              <p className="font-medium">COPRA LIMITED</p>
              <p>Company number 04175903</p>
              <p className="mt-1">Registered office address:</p>
              <p>Ivy Todd, Northchurch Common,</p>
              <p>Berkhamsted, Hertfordshire, HP4 1LR</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

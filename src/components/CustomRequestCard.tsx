import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

interface CustomRequestCardProps {
  onTelegramOpen: () => void;
}

export default function CustomRequestCard({
  onTelegramOpen,
}: CustomRequestCardProps) {
  const { t } = useLanguage();

  return (
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
              onClick={onTelegramOpen}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {t("bankServices.customRequest.button")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

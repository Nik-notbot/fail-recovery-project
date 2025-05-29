const MERCHANT_API_URL = "https://api.merchant001.io/v1";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJWSm9ZdXFhN2RraFo1R1VXOWVOd2tKTmZlNHMxIiwiZGF0ZSI6IjIwMjUtMDUtMjlUMDg6MDM6MzMuMDg4WiIsImlhdCI6MTc0ODUwNTgxM30.4mSCsAQFaSlqHPb4cH4IFRWkdF638P9oliV5rKweCCg";

export interface PaymentRequest {
  amount: number;
  currency: string;
  description: string;
  customer_email: string;
  customer_phone?: string;
  return_url?: string;
  callback_url?: string;
}

export async function createPaymentSession(data: PaymentRequest) {
  try {
    console.log("🚀 Отправляем запрос на создание транзакции:", data);

    // Формируем данные согласно документации merchant001.io
    const transactionData = {
      project_id: import.meta.env.VITE_MERCHANT_PROJECT_ID || "test_project_id",
      amount: data.amount,
      currency: data.currency || "RUB",
      order_id: `redotpay_${Date.now()}`,
      description: data.description,
      success_url:
        data.return_url || `${window.location.origin}/payment-success`,
      fail_url: `${window.location.origin}/payment-failed`,
      callback_url:
        data.callback_url || `${window.location.origin}/api/payment-callback`,
      customer: {
        email: data.customer_email,
        phone: data.customer_phone || "",
      },
    };

    console.log("📤 Данные для отправки:", transactionData);

    const response = await fetch(`${MERCHANT_API_URL}/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(transactionData),
    });

    console.log("📨 Ответ от API:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Ошибка API (текст):", errorText);

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }

      throw new Error(
        `Ошибка создания транзакции: ${response.status} - ${errorData.message || "Неизвестная ошибка"}`,
      );
    }

    const result = await response.json();
    console.log("✅ Данные транзакции:", result);

    // Проверяем различные варианты URL в ответе
    const paymentUrl = result.url || result.payment_url || result.redirect_url;

    if (!paymentUrl) {
      console.error("❌ URL оплаты не найден в ответе:", result);
      throw new Error("Не получен URL для оплаты от платежной системы");
    }

    console.log("🔗 URL для оплаты:", paymentUrl);

    return {
      ...result,
      payment_url: paymentUrl,
    };
  } catch (error) {
    console.error("💥 Ошибка API кассы:", error);

    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Не удается подключиться к платежной системе. Проверьте интернет-соединение.",
      );
    }

    throw error;
  }
}

export function redirectToPayment(paymentUrl: string) {
  console.log("🔄 Попытка перенаправления на:", paymentUrl);

  if (!paymentUrl) {
    console.error("❌ Пустой URL для перенаправления");
    throw new Error("URL для оплаты не указан");
  }

  try {
    const url = new URL(paymentUrl);
    console.log("✅ URL валиден:", url.toString());

    // Добавляем небольшую задержку для завершения логирования
    setTimeout(() => {
      console.log("🚀 Выполняем перенаправление...");
      window.location.href = paymentUrl;
    }, 100);
  } catch (error) {
    console.error("❌ Некорректный URL оплаты:", paymentUrl, error);
    throw new Error("Получен некорректный URL для оплаты");
  }
}

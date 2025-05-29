const MERCHANT_API_URL = "https://app.merchant001.io/merchant/api";
const MERCHANT_API_KEY = "your_api_key_here"; // Добавьте ваш API ключ

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
    console.log("Отправляем запрос на создание платежа:", data);

    const response = await fetch(`${MERCHANT_API_URL}/payment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCHANT_API_KEY}`, // Добавляем авторизацию
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        merchant_id: "your_merchant_id", // Возможно нужен ID мерчанта
      }),
    });

    console.log("Ответ от API:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ошибка API:", errorText);
      throw new Error(
        `Ошибка создания платежа: ${response.status} - ${errorText}`,
      );
    }

    const result = await response.json();
    console.log("Данные платежа:", result);

    // Проверяем разные возможные поля для URL оплаты
    const paymentUrl =
      result.payment_url ||
      result.paymentUrl ||
      result.redirect_url ||
      result.url;

    if (!paymentUrl) {
      console.error("URL оплаты не найден в ответе:", result);
      throw new Error("Не получен URL для оплаты от платежной системы");
    }

    return { ...result, payment_url: paymentUrl };
  } catch (error) {
    console.error("Ошибка API кассы:", error);
    throw error;
  }
}

export function redirectToPayment(paymentUrl: string) {
  console.log("Перенаправляем на оплату:", paymentUrl);
  window.location.href = paymentUrl;
}

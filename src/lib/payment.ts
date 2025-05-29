const MERCHANT_API_URL = "https://app.merchant001.io/api/v1";

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

    // Формируем данные согласно API merchant001.io
    const paymentData = {
      amount: data.amount,
      currency: data.currency || "RUB",
      description: data.description,
      order_id: `order_${Date.now()}`, // Уникальный ID заказа
      customer: {
        email: data.customer_email,
        phone: data.customer_phone,
      },
      success_url:
        data.return_url || `${window.location.origin}/payment-success`,
      fail_url: `${window.location.origin}/payment-failed`,
      callback_url: data.callback_url,
    };

    const response = await fetch(`${MERCHANT_API_URL}/payment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    console.log("Ответ от API:", response.status, response.statusText);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Ошибка API:", errorData);
      throw new Error(
        `Ошибка создания платежа: ${response.status} - ${errorData.message || "Неизвестная ошибка"}`,
      );
    }

    const result = await response.json();
    console.log("Данные платежа:", result);

    // Проверяем поле payment_url в ответе
    if (!result.payment_url) {
      console.error("URL оплаты не найден в ответе:", result);
      throw new Error("Не получен URL для оплаты от платежной системы");
    }

    return result;
  } catch (error) {
    console.error("Ошибка API кассы:", error);

    // Показываем более понятную ошибку пользователю
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Не удается подключиться к платежной системе. Проверьте интернет-соединение.",
      );
    }

    throw error;
  }
}

export function redirectToPayment(paymentUrl: string) {
  console.log("Перенаправляем на оплату:", paymentUrl);

  // Проверяем валидность URL
  try {
    new URL(paymentUrl);
    window.location.href = paymentUrl;
  } catch (error) {
    console.error("Некорректный URL оплаты:", paymentUrl);
    throw new Error("Получен некорректный URL для оплаты");
  }
}

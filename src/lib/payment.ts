const MERCHANT_API_URL = "https://api.merchant001.io/v1";

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
    console.log("Отправляем запрос на создание транзакции:", data);

    // Формируем данные согласно документации merchant001.io
    const transactionData = {
      project_id: process.env.VITE_MERCHANT_PROJECT_ID || "your_project_id", // Нужно добавить в .env
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
      // sign будет генерироваться на бэкенде для безопасности
    };

    const response = await fetch(`${MERCHANT_API_URL}/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(transactionData),
    });

    console.log("Ответ от API:", response.status, response.statusText);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Ошибка API:", errorData);
      throw new Error(
        `Ошибка создания транзакции: ${response.status} - ${errorData.message || "Неизвестная ошибка"}`,
      );
    }

    const result = await response.json();
    console.log("Данные транзакции:", result);

    // Согласно документации, URL находится в поле url
    if (!result.url) {
      console.error("URL оплаты не найден в ответе:", result);
      throw new Error("Не получен URL для оплаты от платежной системы");
    }

    return {
      ...result,
      payment_url: result.url, // Для совместимости с текущим кодом
    };
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

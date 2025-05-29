const MERCHANT_API_URL = "https://app.merchant001.io/merchant/api";

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
    const response = await fetch(`${MERCHANT_API_URL}/payment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка создания платежа: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Ошибка API кассы:", error);
    throw error;
  }
}

export function redirectToPayment(paymentUrl: string) {
  window.location.href = paymentUrl;
}

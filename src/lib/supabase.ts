// Временная заглушка для Supabase (база данных в разработке)
export interface UserInfo {
  email: string;
  telegram_nick: string;
  comment?: string;
  created_at?: string;
}

export async function saveUserInfo(data: UserInfo): Promise<any> {
  // Временная заглушка - просто логируем данные
  console.log("Данные пользователя (сохранение в разработке):", data);

  // Имитируем асинхронную операцию
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 500);
  });
}

// Заглушка для supabase клиента
export const supabase = {
  from: () => ({
    insert: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
    }),
  }),
};

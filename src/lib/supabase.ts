// Mock implementation of Supabase client
const createMockClient = () => ({
  from: (tableName: string) => ({
    insert: (data: any[]) => ({
      select: () => ({
        then: (callback: (result: { data: any; error: null }) => void) => {
          // Simulate successful insertion with mock data
          setTimeout(() => {
            callback({
              data: data.map((item, index) => ({ ...item, id: index + 1 })),
              error: null,
            });
          }, 100);
          return Promise.resolve();
        },
        catch: (callback: (error: any) => void) => Promise.resolve(),
      }),
    }),
  }),
});

export const supabase = createMockClient();

export interface UserInfo {
  email: string;
  telegram_nick: string;
  comment?: string;
  created_at?: string;
}

export async function saveUserInfo(data: UserInfo): Promise<any> {
  try {
    // Mock implementation - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("Mock: Сохранение данных пользователя:", data);

    const mockResult = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
    };

    return { success: true, data: [mockResult] };
  } catch (error) {
    console.error("Ошибка при сохранении:", error);
    throw error;
  }
}

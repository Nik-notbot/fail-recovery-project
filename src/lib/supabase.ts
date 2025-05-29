import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nwcleyhnnbzxetcqtlim.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Y2xleWhubmJ6eGV0Y3F0bGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczODEzODUsImV4cCI6MjA2Mjk1NzM4NX0.3ss3IMHLlhipHY1u8610mCX6TBG4e3doZULjvoQ1Ijg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserInfo {
  email: string;
  telegram_nick: string;
  comment?: string;
  created_at?: string;
}

export async function saveUserInfo(data: UserInfo): Promise<any> {
  try {
    const { data: result, error } = await supabase
      .from("user_info")
      .insert([data])
      .select();

    if (error) {
      console.error("Ошибка сохранения данных:", error);
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Ошибка при сохранении:", error);
    throw error;
  }
}

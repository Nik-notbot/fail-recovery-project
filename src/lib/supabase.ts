import { createClient } from "@supabase/supabase-js";

// Замените на ваши реальные значения из Supabase Dashboard
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface RedotPayUserInfo {
  gmail: string;
  telegram: string;
  status: string;
}

export async function saveUserInfo(data: RedotPayUserInfo) {
  try {
    const { data: result, error } = await supabase
      .from("redotpay_user_info")
      .insert([data])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Ошибка сохранения в Supabase:", error);
    return { success: false, error };
  }
}

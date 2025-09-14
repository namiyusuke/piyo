import "server-only";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABESE_URL!, process.env.SUPABESE_SECRET_KEY!);

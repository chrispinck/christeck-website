import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function createSupabaseClient() {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Missing Supabase environment variables. Check your environment configuration."
    );
  }

  return createClient<Database>(
    supabaseUrl,
    supabasePublishableKey
  );
}

export const supabase = new Proxy(
  {} as ReturnType<typeof createClient<Database>>,
  {
    get(_target, property) {
      const client = createSupabaseClient();
      const value = Reflect.get(client, property, client);

      return typeof value === "function"
        ? value.bind(client)
        : value;
    },
  }
);
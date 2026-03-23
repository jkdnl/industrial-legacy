import { createClient } from '@supabase/supabase-js';
import { Database } from '../src/supabase';

export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);

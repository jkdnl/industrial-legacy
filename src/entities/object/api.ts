import { supabase } from '../../shared/lib/supabase';

export const getObjects = async () => {
  return supabase.rpc('get_random_items');
};

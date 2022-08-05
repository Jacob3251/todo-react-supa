import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fslgaqygviuoqgkdssbv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzbGdhcXlndml1b3Fna2Rzc2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzMzg1MTIsImV4cCI6MTk3NDkxNDUxMn0.fV8E1WlPySytyXEhgg18KEQityeWu5_OE4ed8KHw8HE"
);
export default supabase;

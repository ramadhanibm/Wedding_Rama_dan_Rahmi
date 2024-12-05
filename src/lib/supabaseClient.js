// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase URL and API Key
// const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvY25hcG9mY2t0cGlhbXhydXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1ODA0MDIsImV4cCI6MjA0ODE1NjQwMn0.YVJVQvotDVnDxp7RtXlgaCNm7ICjGl4UJFNxagJ3amQ';
const SUPABASE_URL = 'https://qocnapofcktpiamxrurw.supabase.co';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

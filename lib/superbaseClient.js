import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://inxxmrqboackxqyidics.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlueHhtcnFib2Fja3hxeWlkaWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDMzMjIsImV4cCI6MjA3NTA3OTMyMn0.XRIWAV9hrKnHzovFwVHvNlzWApRFOzfDfD6_ij-qfwg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

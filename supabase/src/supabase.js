import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://tycyeazacauuvgyyusix.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5Y3llYXphY2F1dXZneXl1c2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3NDA4NzEsImV4cCI6MTk5OTMxNjg3MX0.Je-5zYPvpgfiXWjKsGw88y7UGb9Bbuoy8aeaD6ZxOlQ'
)

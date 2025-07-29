import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

// Create client with fallback for development
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== "https://placeholder.supabase.co" && supabaseAnonKey !== "placeholder-key"
}

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          company: string
          message: string
          status: "new" | "contacted" | "closed"
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          company?: string
          message: string
          status?: "new" | "contacted" | "closed"
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          company?: string
          message?: string
          status?: "new" | "contacted" | "closed"
        }
      }
      newsletter: {
        Row: {
          id: string
          created_at: string
          email: string
          subscribed: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          subscribed?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          subscribed?: boolean
        }
      }
    }
  }
}

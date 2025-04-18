import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
// In a real project, these would be set in your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-supabase-url';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-supabase-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to submit contact form data
export async function submitContactForm(formData) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message,
          submitted_at: new Date()
        }
      ]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: error.message };
  }
}

// Function to add email to waitlist
export async function addToWaitlist(email) {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          joined_at: new Date()
        }
      ]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error: error.message };
  }
} 
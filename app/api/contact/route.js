import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate the required fields
    if (!formData.name || !formData.email || !formData.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert the form data into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message || '',
          created_at: new Date().toISOString(),
        }
      ]);
    
    // Handle any database errors
    if (error) {
      console.error('Error storing contact form data:', error);
      return NextResponse.json(
        { error: 'Failed to store your submission. Please try again.' },
        { status: 500 }
      );
    }
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Unexpected error in contact form API:', error);
    
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 
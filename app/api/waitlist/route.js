import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

// Email validation function
const isValidEmail = (email) => {
  // More comprehensive email validation regex
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).trim().toLowerCase());
};

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate the required fields
    if (!formData.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Server-side email validation
    if (!isValidEmail(formData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Normalize email (trim and lowercase)
    const normalizedEmail = String(formData.email).trim().toLowerCase();
    
    // Insert the email into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: normalizedEmail,
          created_at: new Date().toISOString(),
        }
      ]);
    
    // Handle any database errors
    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on our waitlist' },
          { status: 409 }
        );
      }
      
      console.error('Error storing waitlist data:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Unexpected error in waitlist API:', error);
    
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 
# Supabase Setup for MemoTag Contact Form

This guide explains how to set up Supabase to store contact form submissions from the MemoTag website.

## Prerequisites

1. A Supabase account (you can sign up at [supabase.com](https://supabase.com))
2. A Supabase project created for your application

## Setup Steps

### 1. Create the Database Table

You can set up your database table in one of two ways:

#### Option A: Using the Supabase UI

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Create a new query and paste the contents of `supabase/migrations/20231001000000_create_contact_submissions.sql`
4. Run the query to create the table and set up permissions

#### Option B: Using the Supabase CLI

If you have the Supabase CLI installed, you can run:

```bash
supabase migration up
```

### 2. Configure Environment Variables

1. Copy the `.env.local` file to your project root (if not already there)
2. Replace the placeholder values with your actual Supabase credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL (find in Project Settings > API)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key (find in Project Settings > API)

### 3. Testing the Integration

1. Start your Next.js development server
2. Fill out and submit the contact form
3. Check your Supabase table to verify that submissions are being stored

## Table Structure

The `contact_submissions` table has the following structure:

| Column      | Type                     | Description                        |
|-------------|--------------------------|----------------------------------- |
| id          | UUID                     | Primary key (auto-generated)       |
| name        | TEXT                     | Submitter's name                   |
| email       | TEXT                     | Submitter's email address          |
| role        | TEXT                     | Selected role (caregiver, etc.)    |
| message     | TEXT                     | Message content                    |
| created_at  | TIMESTAMP WITH TIME ZONE | Submission timestamp (auto-filled) |
| updated_at  | TIMESTAMP WITH TIME ZONE | Last update timestamp              |

## Security

The setup includes Row Level Security (RLS) policies that:

1. Allow anyone to submit to the form (for public form submissions)
2. Restrict viewing the submissions to authenticated admin users only

## Troubleshooting

If your form submissions aren't reaching the database:

1. Check browser console for errors
2. Verify your Supabase credentials in the `.env.local` file
3. Ensure your Supabase project is active and the database is online
4. Check that the contact_submissions table exists in your database 
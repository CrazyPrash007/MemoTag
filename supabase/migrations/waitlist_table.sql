-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for insert (anyone can submit their email)
CREATE POLICY "Anyone can join the waitlist" 
    ON public.waitlist 
    FOR INSERT 
    WITH CHECK (true);

-- Create policy for select (only authenticated users with admin role can view)
CREATE POLICY "Only admins can view waitlist" 
    ON public.waitlist 
    FOR SELECT 
    USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

-- Create index on created_at for performance
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON public.waitlist (created_at);

-- Create index on email for faster lookup and enforcing uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist (email); 
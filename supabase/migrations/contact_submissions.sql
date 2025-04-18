-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for insert (anyone can submit)
CREATE POLICY "Anyone can insert a submission" 
    ON public.contact_submissions 
    FOR INSERT 
    WITH CHECK (true);

-- Create policy for select (only authenticated users with admin role can view)
CREATE POLICY "Only admins can view submissions" 
    ON public.contact_submissions 
    FOR SELECT 
    USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

-- Create index on created_at for performance
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions (created_at); 
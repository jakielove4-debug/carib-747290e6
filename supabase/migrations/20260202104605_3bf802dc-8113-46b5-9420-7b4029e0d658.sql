-- Create enum for shipment status
CREATE TYPE public.shipment_status AS ENUM ('pending', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled');

-- Create shipments table
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT,
  shipping_address TEXT NOT NULL,
  package_description TEXT NOT NULL,
  weight DECIMAL(10,2) NOT NULL,
  weight_unit TEXT NOT NULL DEFAULT 'lbs',
  status shipment_status NOT NULL DEFAULT 'pending',
  estimated_delivery DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view shipments by tracking number (for customer tracking)
CREATE POLICY "Anyone can view shipments by tracking number"
ON public.shipments
FOR SELECT
USING (true);

-- Create admin role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy: Only admins can insert shipments
CREATE POLICY "Admins can insert shipments"
ON public.shipments
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can update shipments
CREATE POLICY "Admins can update shipments"
ON public.shipments
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can delete shipments
CREATE POLICY "Admins can delete shipments"
ON public.shipments
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_shipments_updated_at
BEFORE UPDATE ON public.shipments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to generate tracking number
CREATE OR REPLACE FUNCTION public.generate_tracking_number()
RETURNS TEXT AS $$
DECLARE
  new_tracking TEXT;
BEGIN
  new_tracking := 'CE' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || UPPER(SUBSTRING(gen_random_uuid()::TEXT FROM 1 FOR 6));
  RETURN new_tracking;
END;
$$ LANGUAGE plpgsql SET search_path = public;
-- Set the generate_tracking_number function as the default value for tracking_number column
ALTER TABLE public.shipments 
ALTER COLUMN tracking_number SET DEFAULT public.generate_tracking_number();
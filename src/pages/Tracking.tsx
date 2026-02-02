import { useState } from "react";
import { Search, Package, MapPin, User, Scale, Clock, CheckCircle, Truck, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

type ShipmentStatus = 'pending' | 'processing' | 'shipped' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'cancelled';

interface Shipment {
  id: string;
  tracking_number: string;
  customer_name: string;
  shipping_address: string;
  package_description: string;
  weight: number;
  weight_unit: string;
  status: ShipmentStatus;
  estimated_delivery: string | null;
  created_at: string;
  updated_at: string;
}

const statusConfig: Record<ShipmentStatus, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: "Pending", color: "bg-yellow-500", icon: <Clock className="w-4 h-4" /> },
  processing: { label: "Processing", color: "bg-blue-500", icon: <Box className="w-4 h-4" /> },
  shipped: { label: "Shipped", color: "bg-indigo-500", icon: <Package className="w-4 h-4" /> },
  in_transit: { label: "In Transit", color: "bg-purple-500", icon: <Truck className="w-4 h-4" /> },
  out_for_delivery: { label: "Out for Delivery", color: "bg-orange-500", icon: <Truck className="w-4 h-4" /> },
  delivered: { label: "Delivered", color: "bg-green-500", icon: <CheckCircle className="w-4 h-4" /> },
  cancelled: { label: "Cancelled", color: "bg-red-500", icon: <Clock className="w-4 h-4" /> },
};

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setError("");
    setSearched(true);

    const { data, error: fetchError } = await supabase
      .from("shipments")
      .select("*")
      .eq("tracking_number", trackingNumber.trim().toUpperCase())
      .single();

    if (fetchError || !data) {
      setShipment(null);
      setError("No shipment found with this tracking number.");
    } else {
      setShipment(data as Shipment);
    }
    setLoading(false);
  };

  const statusSteps: ShipmentStatus[] = ['pending', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered'];
  const currentStepIndex = shipment ? statusSteps.indexOf(shipment.status) : -1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Track Your Shipment</h1>
          <p className="text-muted-foreground text-lg">
            Enter your tracking number to see the status of your order
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-4 mb-12">
          <Input
            type="text"
            placeholder="Enter tracking number (e.g., CE20250203-ABC123)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
            className="flex-1 h-14 text-lg"
          />
          <Button type="submit" size="lg" className="h-14 px-8" disabled={loading}>
            <Search className="w-5 h-5 mr-2" />
            {loading ? "Searching..." : "Track"}
          </Button>
        </form>

        {error && searched && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="pt-6">
              <p className="text-destructive text-center">{error}</p>
            </CardContent>
          </Card>
        )}

        {shipment && (
          <div className="space-y-6">
            {/* Status Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-6 h-6" />
                    Tracking #{shipment.tracking_number}
                  </CardTitle>
                  <Badge className={`${statusConfig[shipment.status].color} text-white`}>
                    {statusConfig[shipment.status].icon}
                    <span className="ml-1">{statusConfig[shipment.status].label}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {shipment.status !== 'cancelled' && (
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      {statusSteps.map((step, index) => (
                        <div key={step} className="flex flex-col items-center flex-1">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                              index <= currentStepIndex ? statusConfig[step].color : "bg-gray-300"
                            }`}
                          >
                            {statusConfig[step].icon}
                          </div>
                          <span className="text-xs mt-2 text-center hidden sm:block">
                            {statusConfig[step].label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Shipment Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="w-5 h-5" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{shipment.customer_name}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium whitespace-pre-line">{shipment.shipping_address}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Box className="w-5 h-5" />
                    Package Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="font-medium">{shipment.package_description}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Scale className="w-5 h-5" />
                    Weight & Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">{shipment.weight} {shipment.weight_unit}</p>
                  </div>
                  {shipment.estimated_delivery && (
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-medium">
                        {new Date(shipment.estimated_delivery).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;

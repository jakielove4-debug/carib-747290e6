import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, LogOut, Package, Edit, Trash2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type ShipmentStatus = 'pending' | 'processing' | 'shipped' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'cancelled';

interface Shipment {
  id: string;
  tracking_number: string;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string | null;
  shipping_address: string;
  package_description: string;
  weight: number;
  weight_unit: string;
  status: ShipmentStatus;
  estimated_delivery: string | null;
  notes: string | null;
  created_at: string;
}

const statusOptions: { value: ShipmentStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "in_transit", label: "In Transit" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const statusColors: Record<ShipmentStatus, string> = {
  pending: "bg-yellow-500",
  processing: "bg-blue-500",
  shipped: "bg-indigo-500",
  in_transit: "bg-purple-500",
  out_for_delivery: "bg-orange-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
};

const AdminDashboard = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    package_description: "",
    weight: "",
    weight_unit: "lbs",
    status: "pending" as ShipmentStatus,
    estimated_delivery: "",
    notes: "",
  });

  useEffect(() => {
    checkAuth();
    fetchShipments();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .single();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchShipments = async () => {
    const { data, error } = await supabase
      .from("shipments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch shipments",
        variant: "destructive",
      });
    } else {
      setShipments(data as Shipment[]);
    }
    setLoading(false);
  };

  const generateTrackingNumber = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `CE${date}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const shipmentData = {
      ...formData,
      weight: parseFloat(formData.weight),
      estimated_delivery: formData.estimated_delivery || null,
      customer_email: formData.customer_email || null,
      customer_phone: formData.customer_phone || null,
      notes: formData.notes || null,
    };

    if (editingShipment) {
      const { error } = await supabase
        .from("shipments")
        .update(shipmentData)
        .eq("id", editingShipment.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update shipment",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Shipment updated successfully" });
        fetchShipments();
      }
    } else {
      const { error } = await supabase.from("shipments").insert({
        ...shipmentData,
        tracking_number: generateTrackingNumber(),
      });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create shipment",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Shipment created successfully" });
        fetchShipments();
      }
    }

    resetForm();
    setDialogOpen(false);
  };

  const handleEdit = (shipment: Shipment) => {
    setEditingShipment(shipment);
    setFormData({
      customer_name: shipment.customer_name,
      customer_email: shipment.customer_email || "",
      customer_phone: shipment.customer_phone || "",
      shipping_address: shipment.shipping_address,
      package_description: shipment.package_description,
      weight: shipment.weight.toString(),
      weight_unit: shipment.weight_unit,
      status: shipment.status,
      estimated_delivery: shipment.estimated_delivery || "",
      notes: shipment.notes || "",
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this shipment?")) return;

    const { error } = await supabase.from("shipments").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete shipment",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Shipment deleted successfully" });
      fetchShipments();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const resetForm = () => {
    setEditingShipment(null);
    setFormData({
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      shipping_address: "",
      package_description: "",
      weight: "",
      weight_unit: "lbs",
      status: "pending",
      estimated_delivery: "",
      notes: "",
    });
  };

  const copyTrackingNumber = async (trackingNumber: string) => {
    await navigator.clipboard.writeText(trackingNumber);
    setCopiedId(trackingNumber);
    setTimeout(() => setCopiedId(null), 2000);
    toast({ title: "Copied!", description: "Tracking number copied to clipboard" });
  };

  return (
    <div className="min-h-screen bg-stone-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Shipment Dashboard</h1>
            <p className="text-muted-foreground">Manage and track all shipments</p>
          </div>
          <div className="flex gap-4">
            <Dialog open={dialogOpen} onOpenChange={(open) => {
              setDialogOpen(open);
              if (!open) resetForm();
            }}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Shipment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingShipment ? "Edit Shipment" : "Create New Shipment"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer_name">Customer Name *</Label>
                      <Input
                        id="customer_name"
                        value={formData.customer_name}
                        onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer_email">Customer Email</Label>
                      <Input
                        id="customer_email"
                        type="email"
                        value={formData.customer_email}
                        onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_phone">Customer Phone</Label>
                    <Input
                      id="customer_phone"
                      value={formData.customer_phone}
                      onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shipping_address">Shipping Address *</Label>
                    <Textarea
                      id="shipping_address"
                      value={formData.shipping_address}
                      onChange={(e) => setFormData({ ...formData, shipping_address: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="package_description">Package Description *</Label>
                    <Textarea
                      id="package_description"
                      value={formData.package_description}
                      onChange={(e) => setFormData({ ...formData, package_description: e.target.value })}
                      rows={2}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight *</Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.01"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight_unit">Unit</Label>
                      <Select
                        value={formData.weight_unit}
                        onValueChange={(value) => setFormData({ ...formData, weight_unit: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lbs">lbs</SelectItem>
                          <SelectItem value="kg">kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value: ShipmentStatus) => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimated_delivery">Estimated Delivery</Label>
                    <Input
                      id="estimated_delivery"
                      type="date"
                      value={formData.estimated_delivery}
                      onChange={(e) => setFormData({ ...formData, estimated_delivery: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={2}
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => {
                      resetForm();
                      setDialogOpen(false);
                    }}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingShipment ? "Update Shipment" : "Create Shipment"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              All Shipments ({shipments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center py-8 text-muted-foreground">Loading...</p>
            ) : shipments.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">
                No shipments yet. Create your first shipment.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tracking #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Weight</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shipments.map((shipment) => (
                      <TableRow key={shipment.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="text-sm bg-muted px-2 py-1 rounded">
                              {shipment.tracking_number}
                            </code>
                            <button
                              onClick={() => copyTrackingNumber(shipment.tracking_number)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedId === shipment.tracking_number ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{shipment.customer_name}</p>
                            <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                              {shipment.shipping_address}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="truncate max-w-[150px]">{shipment.package_description}</p>
                        </TableCell>
                        <TableCell>
                          {shipment.weight} {shipment.weight_unit}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[shipment.status]} text-white`}>
                            {statusOptions.find((s) => s.value === shipment.status)?.label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(shipment.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(shipment)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(shipment.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

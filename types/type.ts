export interface Enterprise {
  createdAt: string;
  id: string;
  logo: string;
  name: string;
  shipments: any[]; // Replace 'any' with the appropriate type if available
  updatedAt: string;
}

export interface Location {
  _id: string;
  id: string;
  latitude: string;
  longitude: string;
}

export interface Shipment {
  category: string;
  createdAt: string;
  deliveryDate: string;
  deliveryTimeRange: string;
  enterpriseId: Enterprise;
  id: string;
  location: Location;
  service: string;
  shipmentProgress: any[][]; // Replace 'any' with the appropriate type if available
  status: string;
  trackingId: string;
  updatedAt: string;
  userId: string;
  weight: string;
}

export interface allShipment {
  shipments: Shipment[];
}

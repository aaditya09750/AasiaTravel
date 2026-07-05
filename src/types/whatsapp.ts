export interface PackageBookingDetails {
  title: string;
  category: string;
  duration: string;
  departureCity: string;
  date: string;
  basePrice: number;
}

export interface CalculatorBookingDetails {
  packageTitle: string;
  travellers: number;
  sharing: string;
  addonsList: string;
  grandTotal: number;
}

export interface HotelDirectionsDetails {
  name: string;
  type: string;
  distance: string;
}

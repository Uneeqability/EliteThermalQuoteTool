export interface FormData {
  address: string;
  squareFootage: number;
  roofType: string;
  insulationType: string;
  addOns: {
    atticAirSeal: boolean;
    radiantBarrier: boolean;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  estimatedPrice: number;
}
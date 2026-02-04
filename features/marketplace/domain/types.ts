export interface MarketplaceItem {
  id: string;
  title: string;
  category: string;
  price: string;
  location: string;
  image?: string;
  description?: string;
}

export interface MarketplaceService {
  id: string;
  title: string;
  type: string;
  price: string;
  location: string;
  date?: string;
  image?: string;
  description?: string;
}



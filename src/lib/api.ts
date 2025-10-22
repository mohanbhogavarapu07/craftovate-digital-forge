// API utilities for the application

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}

export interface Analytics {
  totalRevenue?: number;
  totalOrders?: number;
  totalCustomers: number;
  averageOrderValue?: number;
  totalSales: number;
  totalProducts: number;
  salesTrend: Array<{ date: string; sales: number }>;
  topProducts: Array<{ name?: string; product: Product; sales: number }>;
}

// Mock API functions
export const fetchProducts = async (): Promise<Product[]> => {
  // Mock implementation
  return [];
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  // Mock implementation
  return null;
};

export const createOrder = async (orderData: Partial<Order>): Promise<Order> => {
  // Mock implementation
  return {} as Order;
};

// Cart API
export const cartAPI = {
  get: async () => {
    return { data: [] };
  },
  getCart: async () => {
    return { data: [] };
  },
  addToCart: async (productId: string, quantity: number) => {
    return { data: {} as CartItem };
  },
  removeFromCart: async (itemId: string) => {
    return { data: true };
  },
  updateQuantity: async (itemId: string, quantity: number) => {
    return { data: {} as CartItem };
  },
  clear: async () => {
    return { data: true };
  },
  clearCart: async () => {
    return { data: true };
  }
};

// Order API
export const orderAPI = {
  create: async (orderData: any) => {
    return { data: {} as Order };
  },
  createOrder: async (orderData: any) => {
    return { data: {} as Order };
  },
  getOrders: async () => {
    return { data: [] };
  },
  getOrderById: async (id: string) => {
    return { data: {} as Order };
  }
};

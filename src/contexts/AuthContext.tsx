import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login implementation
      setUser({ 
        id: '1', 
        email, 
        name: 'User',
        created_at: new Date().toISOString()
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = async (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      if (user) {
        setUser({ ...user, ...userData });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout,
      updateUser,
      isAuthenticated: !!user,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

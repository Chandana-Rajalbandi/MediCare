import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Medicine, CartItem, UserProfile, Diagnosis } from '../types';

interface AppContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  cart: CartItem[];
  addToCart: (medicine: Medicine, quantity: number) => void;
  removeFromCart: (medicineId: string) => void;
  updateCartItemQuantity: (medicineId: string, quantity: number) => void;
  clearCart: () => void;
  currentDiagnosis: Diagnosis | null;
  setCurrentDiagnosis: (diagnosis: Diagnosis | null) => void;
  orders: any[];
  addOrder: (order: any) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentDiagnosis, setCurrentDiagnosis] = useState<Diagnosis | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    // Mock user for demo purposes
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-123-4567',
      address: '123 Main St, Anytown, USA',
      medicalHistory: []
    });
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (medicine: Medicine, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.medicine.id === medicine.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.medicine.id === medicine.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { medicine, quantity }];
      }
    });
  };

  const removeFromCart = (medicineId: string) => {
    setCart(prevCart => prevCart.filter(item => item.medicine.id !== medicineId));
  };

  const updateCartItemQuantity = (medicineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(medicineId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.medicine.id === medicineId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addOrder = (order: any) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      cart,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      currentDiagnosis,
      setCurrentDiagnosis,
      orders,
      addOrder,
      isLoading,
      setIsLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
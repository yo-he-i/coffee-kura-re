import { useState, useEffect, useCallback } from 'react';
import { products as initialProducts, Product } from '@/data/products';

const STORAGE_KEY = 'coffee-kura-inventory';

function persist(items: Product[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

export function useInventory() {
  const [items, setItems] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setItems(stored ? JSON.parse(stored) : initialProducts);
    } catch {
      setItems(initialProducts);
    }
    setLoaded(true);
  }, []);

  const updateStock = useCallback((slug: string, stock: number) => {
    setItems(prev => {
      const next = prev.map(item =>
        item.slug === slug ? { ...item, stock: Math.max(0, stock) } : item
      );
      persist(next);
      return next;
    });
  }, []);

  const upsertProduct = useCallback((product: Product) => {
    setItems(prev => {
      const exists = prev.some(i => i.slug === product.slug);
      const next = exists
        ? prev.map(i => i.slug === product.slug ? product : i)
        : [...prev, product];
      persist(next);
      return next;
    });
  }, []);

  const deleteProduct = useCallback((slug: string) => {
    setItems(prev => {
      const next = prev.filter(i => i.slug !== slug);
      persist(next);
      return next;
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    setItems(initialProducts);
    persist(initialProducts);
  }, []);

  return { items, loaded, updateStock, upsertProduct, deleteProduct, resetToDefaults };
}

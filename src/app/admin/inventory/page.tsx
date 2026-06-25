import type { Metadata } from 'next';
import { InventoryClient } from '@/components/inventory/InventoryClient';

export const metadata: Metadata = {
  title: '在庫管理 | Coffee Kura Re',
};

export default function InventoryPage() {
  return <InventoryClient />;
}

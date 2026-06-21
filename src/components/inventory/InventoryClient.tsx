'use client';

import { useState, useMemo } from 'react';
import { useInventory } from '@/hooks/useInventory';
import { ProductModal } from './ProductModal';
import { Product } from '@/data/products';

type SortKey = 'name' | 'stock' | 'origin';

function StockBadge({ stock }: { stock: number }) {
  if (stock === 0)
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-red-100 text-red-700 border border-red-200 whitespace-nowrap">
        在庫切れ
      </span>
    );
  if (stock <= 5)
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-amber-100 text-amber-700 border border-amber-200 whitespace-nowrap">
        要補充
      </span>
    );
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700 border border-green-200 whitespace-nowrap">
      在庫あり
    </span>
  );
}

function SortIcon({ active, asc }: { active: boolean; asc: boolean }) {
  return (
    <span className={`ml-1 text-xs ${active ? 'text-kura-earth' : 'text-kura-border'}`}>
      {active ? (asc ? '↑' : '↓') : '↕'}
    </span>
  );
}

export function InventoryClient() {
  const { items, loaded, updateStock, upsertProduct, deleteProduct, resetToDefaults } =
    useInventory();

  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [modal, setModal] = useState<{ open: boolean; product: Product | null }>({
    open: false,
    product: null,
  });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [editingStock, setEditingStock] = useState<{ slug: string; value: string } | null>(null);

  const stats = useMemo(
    () => ({
      total: items.length,
      inStock: items.filter(p => p.stock > 5).length,
      low: items.filter(p => p.stock > 0 && p.stock <= 5).length,
      out: items.filter(p => p.stock === 0).length,
    }),
    [items]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items
      .filter(
        p =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.roastLevel.includes(q) ||
          p.process.includes(q)
      )
      .sort((a, b) => {
        let cmp = 0;
        if (sortKey === 'name') cmp = a.name.localeCompare(b.name, 'ja');
        else if (sortKey === 'stock') cmp = a.stock - b.stock;
        else if (sortKey === 'origin') cmp = a.origin.localeCompare(b.origin, 'ja');
        return sortAsc ? cmp : -cmp;
      });
  }, [items, query, sortKey, sortAsc]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(v => !v);
    else { setSortKey(key); setSortAsc(true); }
  }

  function commitStock(slug: string) {
    if (editingStock?.slug !== slug) return;
    const num = parseInt(editingStock.value, 10);
    if (!isNaN(num)) updateStock(slug, num);
    setEditingStock(null);
  }

  const productToDelete = items.find(p => p.slug === deleteConfirm);

  if (!loaded) {
    return (
      <div className="py-32 text-center text-kura-sumi-soft text-sm font-gothic">
        読み込み中...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi">在庫管理</h1>
          <p className="text-sm text-kura-sumi-soft mt-1">珈琲豆の在庫状況を確認・更新できます</p>
        </div>
        <button
          onClick={() => setModal({ open: true, product: null })}
          className="shrink-0 px-4 py-2 bg-kura-earth text-white text-sm font-gothic tracking-wide rounded hover:bg-kura-earth-dark transition-colors"
        >
          ＋ 新規追加
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: '総商品数', value: stats.total, color: 'text-kura-sumi' },
          { label: '在庫十分', value: stats.inStock, color: 'text-kura-green' },
          { label: '要補充', value: stats.low, color: 'text-amber-600' },
          { label: '在庫切れ', value: stats.out, color: 'text-red-600' },
        ].map(s => (
          <div
            key={s.label}
            className="bg-white border border-kura-border rounded-lg p-4 text-center shadow-sm"
          >
            <div className={`text-3xl font-mincho ${s.color}`}>{s.value}</div>
            <div className="text-xs text-kura-sumi-soft mt-1 font-gothic">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Reset */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="商品名・産地・焙煎度で検索..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-kura-border rounded text-sm bg-white placeholder:text-kura-border focus:outline-none focus:ring-1 focus:ring-kura-earth"
        />
        <button
          onClick={() => {
            if (confirm('在庫データを初期状態にリセットしますか？')) resetToDefaults();
          }}
          className="px-3 py-2 text-xs text-kura-sumi-soft border border-kura-border rounded hover:bg-kura-cream-dark transition-colors whitespace-nowrap"
        >
          リセット
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-kura-border rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-kura-border bg-kura-cream-dark text-left">
                <th
                  className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft cursor-pointer select-none"
                  onClick={() => toggleSort('name')}
                >
                  商品名
                  <SortIcon active={sortKey === 'name'} asc={sortAsc} />
                </th>
                <th className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft hidden md:table-cell">
                  焙煎度
                </th>
                <th className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft hidden lg:table-cell">
                  精製方法
                </th>
                <th
                  className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft text-right cursor-pointer select-none"
                  onClick={() => toggleSort('stock')}
                >
                  在庫数
                  <SortIcon active={sortKey === 'stock'} asc={sortAsc} />
                </th>
                <th className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft text-center">
                  状態
                </th>
                <th className="px-4 py-3 font-gothic text-xs tracking-widest text-kura-sumi-soft text-right">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-kura-sumi-soft text-sm font-gothic">
                    {query ? '検索結果がありません' : '商品が登録されていません'}
                  </td>
                </tr>
              ) : (
                filtered.map((product, i) => (
                  <tr
                    key={product.slug}
                    className={`border-b border-kura-border last:border-0 ${i % 2 === 1 ? 'bg-kura-cream/20' : ''}`}
                  >
                    {/* Name */}
                    <td className="px-4 py-3">
                      <div className="font-gothic text-kura-sumi font-medium">{product.name}</div>
                      <div className="text-xs text-kura-sumi-soft mt-0.5">{product.origin}</div>
                    </td>

                    {/* Roast */}
                    <td className="px-4 py-3 text-kura-sumi-soft hidden md:table-cell">
                      {product.roastLevel}
                    </td>

                    {/* Process */}
                    <td className="px-4 py-3 text-kura-sumi-soft hidden lg:table-cell">
                      {product.process}
                    </td>

                    {/* Stock (inline editable) */}
                    <td className="px-4 py-3 text-right">
                      {editingStock?.slug === product.slug ? (
                        <input
                          type="number"
                          min="0"
                          value={editingStock.value}
                          onChange={e =>
                            setEditingStock({ slug: product.slug, value: e.target.value })
                          }
                          onBlur={() => commitStock(product.slug)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') commitStock(product.slug);
                            if (e.key === 'Escape') setEditingStock(null);
                          }}
                          className="w-16 text-right border border-kura-earth rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-kura-earth"
                          autoFocus
                        />
                      ) : (
                        <button
                          onClick={() =>
                            setEditingStock({ slug: product.slug, value: String(product.stock) })
                          }
                          className="font-gothic text-kura-sumi hover:text-kura-earth transition-colors tabular-nums underline-offset-2 hover:underline"
                          title="クリックして在庫数を編集"
                        >
                          {product.stock}
                        </button>
                      )}
                    </td>

                    {/* Status badge */}
                    <td className="px-4 py-3 text-center">
                      <StockBadge stock={product.stock} />
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => updateStock(product.slug, product.stock - 1)}
                          disabled={product.stock === 0}
                          className="w-7 h-7 rounded border border-kura-border text-kura-sumi-soft hover:border-kura-sumi hover:text-kura-sumi disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                          title="在庫を1減らす"
                        >
                          −
                        </button>
                        <button
                          onClick={() => updateStock(product.slug, product.stock + 1)}
                          className="w-7 h-7 rounded border border-kura-border text-kura-sumi-soft hover:border-kura-sumi hover:text-kura-sumi transition-colors flex items-center justify-center"
                          title="在庫を1増やす"
                        >
                          ＋
                        </button>
                        <button
                          onClick={() => setModal({ open: true, product })}
                          className="px-2 py-1 text-xs text-kura-earth border border-kura-earth/50 rounded hover:bg-kura-earth/5 transition-colors"
                        >
                          編集
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(product.slug)}
                          className="px-2 py-1 text-xs text-red-500 border border-red-300/70 rounded hover:bg-red-50 transition-colors"
                        >
                          削除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <h2 className="font-mincho text-lg text-kura-sumi mb-2">削除の確認</h2>
            <p className="text-sm text-kura-sumi-soft mb-6">
              「{productToDelete?.name}」を削除しますか？
              <br />
              この操作は元に戻せません。
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-sm text-kura-sumi-soft border border-kura-border rounded hover:bg-kura-cream-dark transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  deleteProduct(deleteConfirm);
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                削除する
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit modal */}
      {modal.open && (
        <ProductModal
          product={modal.product}
          onClose={() => setModal({ open: false, product: null })}
          onSave={product => {
            upsertProduct(product);
            setModal({ open: false, product: null });
          }}
        />
      )}
    </div>
  );
}

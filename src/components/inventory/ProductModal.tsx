'use client';

import { useState, useEffect, useId } from 'react';
import { Product, WeightOption } from '@/data/products';

type Props = {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
};

const ROAST_LEVELS = ['極浅煎り', '浅煎り', '中浅煎り', '中煎り', '中深煎り', '深煎り', '極深煎り'];
const PROCESSES = ['ウォッシュド', 'ナチュラル', 'ハニー', 'アナエロビック', 'スマトラ式（湿式脱穀）', 'その他'];

const inputCls =
  'w-full px-3 py-2 border border-kura-border rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-kura-earth';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-kura-sumi-soft mb-1">{label}</label>
      {children}
    </div>
  );
}

function toSlug(name: string): string {
  const latin = name.toLowerCase().replace(/[\s　]+/g, '-').replace(/[^\w-]/g, '');
  return latin || `product-${Date.now()}`;
}

type WeightRow = { weight: string; price: string };

export function ProductModal({ product, onClose, onSave }: Props) {
  const formId = useId();
  const isNew = product === null;

  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [farm, setFarm] = useState('');
  const [varietal, setVarietal] = useState('');
  const [process, setProcess] = useState('ウォッシュド');
  const [processCustom, setProcessCustom] = useState('');
  const [roastLevel, setRoastLevel] = useState('中煎り');
  const [tastingNotes, setTastingNotes] = useState('');
  const [weightRows, setWeightRows] = useState<WeightRow[]>([
    { weight: '100g', price: '' },
    { weight: '200g', price: '' },
  ]);
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('0');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    if (product) {
      const knownProcess = PROCESSES.includes(product.process) ? product.process : 'その他';
      setName(product.name);
      setOrigin(product.origin);
      setFarm(product.farm);
      setVarietal(product.varietal);
      setProcess(knownProcess);
      setProcessCustom(knownProcess === 'その他' ? product.process : '');
      setRoastLevel(product.roastLevel);
      setTastingNotes(product.tastingNotes.join('、'));
      setWeightRows(product.weightOptions.map(o => ({ weight: o.weight, price: String(o.price) })));
      setPrice(String(product.price));
      setStock(String(product.stock));
      setDescription(product.description);
      setImagePath(product.imagePath);
    }
  }, [product]);

  function updateRow(i: number, field: keyof WeightRow, value: string) {
    setWeightRows(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: value } : r));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const processValue = process === 'その他' ? processCustom : process;
    const weightOptions: WeightOption[] = weightRows
      .filter(r => r.weight && r.price)
      .map(r => ({ weight: r.weight, price: parseInt(r.price, 10) }));

    onSave({
      slug: product?.slug ?? toSlug(name),
      name,
      origin,
      farm,
      varietal,
      process: processValue,
      roastLevel,
      tastingNotes: tastingNotes.split(/[,、，\s]+/).map(s => s.trim()).filter(Boolean),
      weightOptions,
      price: parseInt(price, 10) || 0,
      stock: parseInt(stock, 10) || 0,
      description,
      imagePath: imagePath || '/products/placeholder.jpg',
    });
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-kura-border shrink-0">
          <h2 className="font-mincho text-xl text-kura-sumi">
            {isNew ? '商品を新規追加' : '商品を編集'}
          </h2>
          <button
            onClick={onClose}
            className="text-kura-sumi-soft hover:text-kura-sumi transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <form id={formId} onSubmit={handleSubmit} className="overflow-y-auto flex-1 px-6 py-5 space-y-6">
          <section className="space-y-3">
            <h3 className="text-xs tracking-widest text-kura-sumi-soft border-b border-kura-border pb-1">基本情報</h3>
            <Field label="商品名 *">
              <input required value={name} onChange={e => setName(e.target.value)}
                className={inputCls} placeholder="エチオピア イルガチェフェ" />
            </Field>
            <Field label="産地 *">
              <input required value={origin} onChange={e => setOrigin(e.target.value)}
                className={inputCls} placeholder="エチオピア / イルガチェフェ地区" />
            </Field>
            <Field label="農園・生産者">
              <input value={farm} onChange={e => setFarm(e.target.value)}
                className={inputCls} placeholder="コチェレ・ウォッシングステーション" />
            </Field>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs tracking-widest text-kura-sumi-soft border-b border-kura-border pb-1">豆の特徴</h3>
            <Field label="品種">
              <input value={varietal} onChange={e => setVarietal(e.target.value)}
                className={inputCls} placeholder="ヘイルーム" />
            </Field>
            <Field label="精製方法">
              <select value={process} onChange={e => setProcess(e.target.value)} className={inputCls}>
                {PROCESSES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              {process === 'その他' && (
                <input value={processCustom} onChange={e => setProcessCustom(e.target.value)}
                  className={`${inputCls} mt-2`} placeholder="精製方法を入力" required />
              )}
            </Field>
            <Field label="焙煎度">
              <select value={roastLevel} onChange={e => setRoastLevel(e.target.value)} className={inputCls}>
                {ROAST_LEVELS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
            <Field label="テイスティングノート">
              <input value={tastingNotes} onChange={e => setTastingNotes(e.target.value)}
                className={inputCls} placeholder="ベルガモット、白い花、澄んだ酸味" />
              <p className="text-xs text-kura-sumi-soft mt-1">読点（、）または半角カンマ区切り</p>
            </Field>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs tracking-widest text-kura-sumi-soft border-b border-kura-border pb-1">価格・在庫</h3>
            <Field label="重量オプション">
              <div className="space-y-2">
                {weightRows.map((row, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input
                      value={row.weight}
                      onChange={e => updateRow(i, 'weight', e.target.value)}
                      className={`${inputCls} w-24`}
                      placeholder="100g"
                    />
                    <span className="text-kura-sumi-soft text-sm shrink-0">¥</span>
                    <input
                      type="number"
                      min="0"
                      value={row.price}
                      onChange={e => updateRow(i, 'price', e.target.value)}
                      className={`${inputCls} flex-1`}
                      placeholder="1400"
                    />
                    {weightRows.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setWeightRows(prev => prev.filter((_, idx) => idx !== i))}
                        className="text-red-400 hover:text-red-600 text-sm shrink-0"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                {weightRows.length < 4 && (
                  <button
                    type="button"
                    onClick={() => setWeightRows(prev => [...prev, { weight: '', price: '' }])}
                    className="text-xs text-kura-earth hover:text-kura-earth-dark transition-colors"
                  >
                    + オプションを追加
                  </button>
                )}
              </div>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="基本価格（円）">
                <input type="number" min="0" value={price} onChange={e => setPrice(e.target.value)}
                  className={inputCls} placeholder="1400" />
              </Field>
              <Field label="在庫数">
                <input type="number" min="0" value={stock} onChange={e => setStock(e.target.value)}
                  className={inputCls} placeholder="0" />
              </Field>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs tracking-widest text-kura-sumi-soft border-b border-kura-border pb-1">詳細</h3>
            <Field label="商品説明">
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={`${inputCls} resize-none`}
                rows={3}
                placeholder="豆の特徴や風味の説明を入力してください"
              />
            </Field>
            <Field label="画像パス">
              <input value={imagePath} onChange={e => setImagePath(e.target.value)}
                className={inputCls} placeholder="/products/ethiopia-yirgacheffe.jpg" />
            </Field>
          </section>
        </form>

        <div className="flex gap-3 justify-end px-6 py-4 border-t border-kura-border shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-kura-sumi-soft border border-kura-border rounded hover:bg-kura-cream-dark transition-colors"
          >
            キャンセル
          </button>
          <button
            type="submit"
            form={formId}
            className="px-6 py-2 text-sm bg-kura-earth text-white rounded hover:bg-kura-earth-dark transition-colors"
          >
            {isNew ? '追加する' : '保存する'}
          </button>
        </div>
      </div>
    </div>
  );
}

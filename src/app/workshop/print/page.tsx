'use client';

import { Printer } from 'lucide-react';

export default function WorkshopPrintPage() {
  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 20mm 18mm 20mm 18mm;
        }
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .page { box-shadow: none !important; margin: 0 !important; padding: 0 !important; }
        }
        body {
          background: #f0ede6;
          font-family: "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", sans-serif;
        }
      `}</style>

      <div className="no-print" style={{ background: '#8B7355', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'white', fontFamily: '"Shippori Mincho", serif', fontSize: '1rem' }}>☕ 提案書 印刷プレビュー</span>
        <button
          onClick={() => window.print()}
          style={{ padding: '0.6rem 1.5rem', backgroundColor: 'white', color: '#8B7355', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}
        >
          <Printer size={16} /> PDFとして保存
        </button>
      </div>

      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div className="page" style={{ background: 'white', width: '210mm', minHeight: '297mm', padding: '20mm 18mm', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', boxSizing: 'border-box' }}>

          {/* ヘッダー */}
          <div style={{ borderBottom: '3px solid #8B7355', paddingBottom: '12mm', marginBottom: '10mm', textAlign: 'center' }}>
            <p style={{ fontSize: '9pt', letterSpacing: '0.3em', color: '#D4A574', marginBottom: '4mm', fontFamily: '"Zen Kaku Gothic New", sans-serif' }}>
              COFFEE KURA RE ・ 長野県須坂市
            </p>
            <h1 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '22pt', color: '#8B7355', marginBottom: '3mm', letterSpacing: '0.1em' }}>
              珈琲ワークショップ　企画書
            </h1>
            <p style={{ fontSize: '11pt', color: '#3E3E3E', letterSpacing: '0.05em' }}>
              八十二銀行　一般職員向け
            </p>
          </div>

          {/* 基本情報 */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>基本情報</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10pt', color: '#3E3E3E' }}>
              <tbody>
                {[
                  { key: '開催時間', val: '60分' },
                  { key: '参加者', val: '一般職員　20〜25名' },
                  { key: '形式', val: '体験型グループワーク（4〜5人）' },
                  { key: '体験内容', val: '浅煎り・深煎り　飲み比べ実習' },
                  { key: '必要設営', val: 'テーブル 5個、椅子 25個、電源、水道' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #E8E5DC' }}>
                    <td style={{ padding: '3mm 4mm', fontWeight: 'bold', width: '32mm', color: '#8B7355', whiteSpace: 'nowrap' }}>{row.key}</td>
                    <td style={{ padding: '3mm 4mm' }}>{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 企画内容 */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>企画内容</h2>
            <p style={bodyText}>
              珈琲の「浅煎り」と「深煎り」をご自身で挽いて、淹れます。同じ豆でも、焙煎度で香り・味が全く変わることを、「手で」「目で」「舌で」感じていただきます。
            </p>
            <p style={{ ...bodyText, marginTop: '3mm' }}>
              グループ内で役割を分けることで、協力と発見が自然に生まれ、参加者が「家でもやってみようか」という動機を引き出します。
            </p>
          </section>

          {/* 60分のフロー */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>60分のフロー</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9.5pt', color: '#3E3E3E' }}>
              <thead>
                <tr style={{ backgroundColor: '#8B7355', color: 'white' }}>
                  <th style={{ padding: '2.5mm 3mm', textAlign: 'left', width: '28mm' }}>時間</th>
                  <th style={{ padding: '2.5mm 3mm', textAlign: 'left', width: '36mm' }}>フェーズ</th>
                  <th style={{ padding: '2.5mm 3mm', textAlign: 'left' }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '0:00〜0:05', phase: 'オープニング', content: '挨拶・珈琲が変わる仕組みの簡潔な説明' },
                  { time: '0:05〜0:10', phase: 'デモンストレーション', content: '浅煎り・深煎り両方を実演。実物を触らせる' },
                  { time: '0:10〜0:35', phase: 'グループ1〜3　実習', content: '浅煎りと深煎りを同時進行で挽く・淹れる' },
                  { time: '0:35〜0:55', phase: 'グループ4〜6　実習', content: '同じフロー。グループ1〜3は試飲中' },
                  { time: '0:55〜1:00', phase: '試飲・まとめ', content: '全員で浅・深の飲み比べ' },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#FAF8F3', borderBottom: '1px solid #E8E5DC' }}>
                    <td style={{ padding: '2.5mm 3mm', color: '#D4A574', fontWeight: 'bold' }}>{row.time}</td>
                    <td style={{ padding: '2.5mm 3mm', fontWeight: 'bold' }}>{row.phase}</td>
                    <td style={{ padding: '2.5mm 3mm' }}>{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 参加者のメリット */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>参加者のメリット</h2>
            <ul style={{ paddingLeft: '5mm', margin: 0, listStyle: 'none' }}>
              {[
                '「同じ豆でこんなに違う」という体験',
                '「グラインダーがあれば、家でも出来る」という気づき',
                '職員同士が協力する時間',
              ].map((point, i) => (
                <li key={i} style={{ ...bodyText, paddingLeft: '5mm', position: 'relative', marginBottom: '2mm' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#D4A574' }}>▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* 必要機材 */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>必要機材</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4mm', fontSize: '9.5pt', color: '#3E3E3E' }}>
              <div>
                <p style={{ fontWeight: 'bold', color: '#8B7355', marginBottom: '2mm' }}>コア機材</p>
                <ul style={{ paddingLeft: '4mm', margin: 0, lineHeight: '1.9' }}>
                  {['手挽きグラインダー 6台', 'ドリッパー 12個', 'ペーパーフィルター 20枚', '保温ポット 3個', '計量スプーン 3個', '紙コップ 25個', 'タイマー（スマホ）'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: '#8B7355', marginBottom: '2mm' }}>珈琲豆</p>
                <ul style={{ paddingLeft: '4mm', margin: 0, lineHeight: '1.9', marginBottom: '4mm' }}>
                  {['浅煎り豆 100g', '深煎り豆 100g'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <p style={{ fontWeight: 'bold', color: '#8B7355', marginBottom: '2mm' }}>セッティング用</p>
                <ul style={{ paddingLeft: '4mm', margin: 0, lineHeight: '1.9' }}>
                  {['ゴミ箱 5個', 'ティッシュボックス 3個', '小皿 5個', 'キッチンペーパー 1ロール'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* 費用 */}
          <section style={{ marginBottom: '9mm' }}>
            <h2 style={sectionTitle}>費用</h2>
            <div style={{ backgroundColor: '#FAF8F3', border: '1px solid #E8E5DC', borderLeft: '4px solid #8B7355', padding: '4mm 6mm', fontSize: '10.5pt', color: '#3E3E3E' }}>
              <strong>珈琲豆代（浅煎り・深煎り各100g）：¥3,000</strong>
            </div>
            <p style={{ fontSize: '8.5pt', color: '#666', marginTop: '2mm', paddingLeft: '1mm' }}>
              ※ その他の機材は古畑が負担します。
            </p>
          </section>

          {/* 備考 */}
          <section style={{ backgroundColor: '#FAF8F3', border: '1px solid #E8E5DC', padding: '5mm 6mm', borderRadius: '2mm' }}>
            <p style={{ ...bodyText, margin: 0 }}>
              開始までに、グループ分けの名簿をいただければ幸いです。
            </p>
          </section>

          {/* フッター */}
          <div style={{ marginTop: '10mm', paddingTop: '5mm', borderTop: '1px solid #E8E5DC', textAlign: 'center', fontSize: '8.5pt', color: '#999' }}>
            古畑　｜　Coffee Kura Re　｜　珈琲焙煎 × 土地家屋調査士　｜　長野県須坂市
          </div>

        </div>
      </div>
    </>
  );
}

const sectionTitle: React.CSSProperties = {
  fontFamily: '"Shippori Mincho", serif',
  fontSize: '12pt',
  color: '#8B7355',
  borderBottom: '1.5px solid #D4A574',
  paddingBottom: '2mm',
  marginBottom: '4mm',
};

const bodyText: React.CSSProperties = {
  fontSize: '10pt',
  color: '#3E3E3E',
  lineHeight: '1.85',
  margin: 0,
};

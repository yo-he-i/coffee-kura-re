'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Printer } from 'lucide-react';

const colors = {
  primary: '#8B7355',
  secondary: '#D4A574',
  accent: '#3E3E3E',
  bg: '#FAF8F3',
  light: '#E8E5DC',
};

const checklistItems = {
  preDayNight: [
    { id: 'roast-light', label: '浅煎り豆を焙煎・冷却（100g分）' },
    { id: 'roast-dark', label: '深煎り豆を焙煎・冷却（100g分）' },
    { id: 'table-setup', label: 'グループテーブル5つのセッティング完了' },
    { id: 'bean-portions', label: '豆を小皿に分けて配置' },
    { id: 'grinder-check', label: 'グラインダー6台の動作確認' },
    { id: 'timer-check', label: 'タイマー音量確認' },
    { id: 'handout-copy', label: 'レジュメ5枚コピー' },
  ],
  morningDay: [
    { id: 'water-prep', label: '温水ポット3個に水を入れて沸騰準備' },
    { id: 'cool-water', label: '沸騰後、15分待たせて80℃に冷ます' },
    { id: 'venue-setup', label: '会場に着いて全体セッティング確認' },
    { id: 'demo-run', label: '浅煎り・深煎りの実演を1回通す' },
    { id: 'mic-check', label: 'マイク or スピーカー確認（会場が広い場合）' },
  ],
};

const timelineItems = [
  {
    id: 'opening',
    time: '0:00～0:05',
    phase: 'オープニング',
    description: '挨拶 + 珈琲が変わる仕組みの簡潔な説明',
    position: '古畑さんが前に立つ',
    detail: '「朝、珈琲飲みます？実は、この3つでコントロール出来るんです」という導入。リラックスした空気を作る。',
  },
  {
    id: 'demo',
    time: '0:05～0:10',
    phase: 'デモンストレーション',
    description: '浅煎り・深煎り両方を実演',
    position: '前に立つ。実物を触らせる。',
    detail: '左右の手でそれぞれ実演。香りを嗅がせて、挽き目を確認させて、「あ、簡単だ」という確信を与える。',
  },
  {
    id: 'round1-setup',
    time: '0:10～0:35',
    phase: 'グループ1～3が実習',
    description: '浅煎りと深煎りを同時進行で挽く・淹れる',
    position: '各グループを3分ずつ見回り',
    detail: 'タイマーを全員で揃えることが見守り負荷を激減させる。蒸らし時間は統一指示。',
  },
  {
    id: 'round2-setup',
    time: '0:35～0:55',
    phase: 'グループ4～6が実習',
    description: '同じフロー。グループ1～3は試飲中',
    position: '同じく見回り',
    detail: 'グループ1～3が試飲してる間に、次グループの実習をサポート。自然な時間差で全員が体験できる。',
  },
  {
    id: 'tasting',
    time: '0:55～1:00',
    phase: '試飲 + まとめ',
    description: '全員で浅・深の飲み比べ',
    position: '前に立つ or テーブル回りながら',
    detail: '色、香り、味の違いを「自分たちが淹れたから気づく」というプロセスが価値。',
  },
];

const sections = [
  { id: 'overview', label: '概要', icon: '📋' },
  { id: 'timeline', label: 'タイムテーブル', icon: '⏱️' },
  { id: 'groups', label: 'グループ構成', icon: '👥' },
  { id: 'prep', label: '準備物・段取り', icon: '✅' },
  { id: 'proposal', label: '提案書', icon: '🖨️' },
];

function calculateGroups(count: number) {
  const baseSize = 4;
  const numGroups = Math.ceil(count / baseSize);
  const groups = [];
  let remaining = count;
  for (let i = 0; i < numGroups; i++) {
    const size = remaining <= baseSize ? remaining : baseSize;
    const roleACount = Math.ceil(size / 2);
    const roleBCount = size - roleACount;
    groups.push({
      id: String.fromCharCode(65 + i),
      size,
      roleA: roleACount,
      roleB: roleBCount,
    });
    remaining -= size;
  }
  return groups;
}

export default function WorkshopPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedTimelineItem, setExpandedTimelineItem] = useState<string | null>(null);
  const [participantCount, setParticipantCount] = useState(25);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [editingParticipants, setEditingParticipants] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('coffeeWorkshopChecklist');
    if (saved) setChecklist(JSON.parse(saved));
  }, []);

  const toggleChecklistItem = (id: string) => {
    const newChecklist = { ...checklist, [id]: !checklist[id] };
    setChecklist(newChecklist);
    localStorage.setItem('coffeeWorkshopChecklist', JSON.stringify(newChecklist));
  };

  const groups = calculateGroups(participantCount);

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: '"Zen Kaku Gothic New", sans-serif' }}>
      <div style={{ backgroundColor: colors.primary, color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          ☕ 珈琲ワークショップ企画資料
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>八十二銀行 一般職員向け</p>
        <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>浅煎り・深煎り飲み比べ体験 | 60分</p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem 2rem', overflowX: 'auto', backgroundColor: 'white', borderBottom: `2px solid ${colors.light}` }}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={{
              padding: '0.7rem 1.5rem',
              border: 'none',
              backgroundColor: activeSection === section.id ? colors.primary : 'transparent',
              color: activeSection === section.id ? 'white' : colors.primary,
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: activeSection === section.id ? 'bold' : 'normal',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
            }}
          >
            {section.icon} {section.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
        {activeSection === 'overview' && (
          <div>
            <h2 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2rem', color: colors.primary, marginBottom: '1.5rem' }}>企画の全体像</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: '参加者', value: '20～25名', icon: '👥' },
                { label: '時間', value: '60分', icon: '⏱️' },
                { label: '形式', value: '4～5人グループワーク', icon: '🎯' },
                { label: '体験内容', value: '浅煎り＆深煎り両方を実習', icon: '☕' },
              ].map((card, i) => (
                <div key={i} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '10px', borderLeft: `4px solid ${colors.primary}` }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{card.icon}</div>
                  <p style={{ color: colors.accent, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{card.label}</p>
                  <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors.primary }}>{card.value}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>このワークショップの特徴</h3>
              <ul style={{ lineHeight: '1.8', color: colors.accent, listStyle: 'none', padding: 0 }}>
                {[
                  '「同じ豆でこんなに違う」という体験を自分の手で感じる',
                  '浅煎り・深煎り両方を挽いて淹れることで焙煎度の違いが実感できる',
                  'グループ内で役割分けをすることで協力と発見が生まれる',
                  '家でもやってみたくなる動機づけができる',
                  '古畑が1人で対応可能。設計で見守り負荷を激減させている',
                ].map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: colors.secondary }}>▸</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'timeline' && (
          <div>
            <h2 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2rem', color: colors.primary, marginBottom: '2rem' }}>60分のフロー</h2>
            {timelineItems.map((item, index) => (
              <div key={item.id} style={{ marginBottom: '1rem' }}>
                <div
                  onClick={() => setExpandedTimelineItem(expandedTimelineItem === item.id ? null : item.id)}
                  style={{ backgroundColor: index % 2 === 0 ? 'white' : colors.light, padding: '1.5rem', borderRadius: '8px', cursor: 'pointer', borderLeft: `5px solid ${colors.primary}` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ color: colors.secondary, fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>{item.time}</p>
                      <h4 style={{ fontSize: '1.2rem', color: colors.accent, marginBottom: '0.5rem' }}>{item.phase}</h4>
                      <p style={{ color: colors.accent, opacity: 0.8, fontSize: '0.95rem' }}>{item.description}</p>
                    </div>
                    {expandedTimelineItem === item.id ? <ChevronUp color={colors.primary} /> : <ChevronDown color={colors.primary} />}
                  </div>
                  {expandedTimelineItem === item.id && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${colors.light}` }}>
                      <p style={{ marginBottom: '0.5rem', color: colors.accent }}><strong>立ち位置：</strong> {item.position}</p>
                      <p style={{ color: colors.accent, lineHeight: '1.7' }}><strong>ポイント：</strong> {item.detail}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'groups' && (
          <div>
            <h2 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2rem', color: colors.primary, marginBottom: '2rem' }}>グループ構成＆役割分け</h2>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '10px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold', color: colors.accent }}>参加者数：</label>
                {editingParticipants ? (
                  <input
                    type="number"
                    min="5"
                    max="50"
                    value={participantCount}
                    onChange={(e) => setParticipantCount(Math.max(5, parseInt(e.target.value) || 25))}
                    onBlur={() => setEditingParticipants(false)}
                    style={{ padding: '0.5rem', border: `2px solid ${colors.primary}`, borderRadius: '4px', fontSize: '1rem', width: '80px' }}
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => setEditingParticipants(true)}
                    style={{ fontSize: '1.2rem', fontWeight: 'bold', color: colors.primary, cursor: 'pointer', padding: '0.5rem 1rem', backgroundColor: colors.light, borderRadius: '4px' }}
                  >
                    {participantCount}名
                  </span>
                )}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {groups.map((group) => (
                  <div key={group.id} style={{ backgroundColor: colors.light, padding: '1.5rem', borderRadius: '8px', border: `2px solid ${colors.secondary}` }}>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors.primary, marginBottom: '1rem' }}>グループ {group.id}</h4>
                    <div style={{ fontSize: '0.95rem', color: colors.accent, lineHeight: '1.8' }}>
                      <p>👥 合計：<strong>{group.size}人</strong></p>
                      <p style={{ color: colors.secondary }}>☕ 浅煎り班：{group.roleA}人</p>
                      <p style={{ color: colors.accent }}>🌑 深煎り班：{group.roleB}人</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'prep' && (
          <div>
            <h2 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2rem', color: colors.primary, marginBottom: '2rem' }}>準備物＆当日段取り</h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>📅 前日夜の準備</h3>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px' }}>
                {checklistItems.preDayNight.map((item) => (
                  <label key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '0.8rem', borderBottom: `1px solid ${colors.light}`, cursor: 'pointer', opacity: checklist[item.id] ? 0.6 : 1 }}>
                    <input
                      type="checkbox"
                      checked={checklist[item.id] || false}
                      onChange={() => toggleChecklistItem(item.id)}
                      style={{ marginRight: '1rem', width: '18px', height: '18px', cursor: 'pointer', accentColor: colors.primary }}
                    />
                    <span style={{ color: colors.accent, textDecoration: checklist[item.id] ? 'line-through' : 'none' }}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>🌅 当日朝の準備</h3>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px' }}>
                {checklistItems.morningDay.map((item) => (
                  <label key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '0.8rem', borderBottom: `1px solid ${colors.light}`, cursor: 'pointer', opacity: checklist[item.id] ? 0.6 : 1 }}>
                    <input
                      type="checkbox"
                      checked={checklist[item.id] || false}
                      onChange={() => toggleChecklistItem(item.id)}
                      style={{ marginRight: '1rem', width: '18px', height: '18px', cursor: 'pointer', accentColor: colors.primary }}
                    />
                    <span style={{ color: colors.accent, textDecoration: checklist[item.id] ? 'line-through' : 'none' }}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>📦 必要な機材・設営</h3>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: colors.primary, marginBottom: '1rem' }}>コア機材</h4>
                <ul style={{ color: colors.accent, lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  {['手挽きグラインダー 6台', 'ドリッパー 12個', 'ペーパーフィルター 20枚', '珈琲豆（浅煎り）100g', '珈琲豆（深煎り）100g', '保温ポット 3個', '計量スプーン 3個', '紙コップ 25個', 'タイマー（スマホ）'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <h4 style={{ color: colors.primary, marginTop: '1.5rem', marginBottom: '1rem' }}>セッティング用</h4>
                <ul style={{ color: colors.accent, lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  {['ゴミ箱 5個', 'ティッシュボックス 3個', '小皿 5個', 'キッチンペーパー 1ロール'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <h4 style={{ color: colors.primary, marginTop: '1.5rem', marginBottom: '1rem' }}>会場必要物</h4>
                <ul style={{ color: colors.accent, lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  {['テーブル 5個', '椅子 25個', '電源', '水道'].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'proposal' && (
          <div>
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <button
                onClick={() => window.print()}
                style={{ padding: '0.7rem 1.5rem', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Printer size={18} /> 印刷する
              </button>
            </div>

            <div style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '10px' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: `2px solid ${colors.primary}`, paddingBottom: '2rem' }}>
                <h1 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '2rem', color: colors.primary, marginBottom: '0.5rem' }}>珈琲ワークショップ　企画書</h1>
                <p style={{ color: colors.secondary, fontSize: '1.1rem' }}>八十二銀行 一般職員向け</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>基本情報</h3>
                <table style={{ width: '100%', color: colors.accent, lineHeight: '2' }}>
                  <tbody>
                    {[
                      { key: '開催時間', val: '60分' },
                      { key: '参加者', val: '一般職員 20～25名' },
                      { key: '形式', val: '体験型グループワーク' },
                      { key: '必要設営', val: 'テーブル5個、椅子25個、電源、水道' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${colors.light}` }}>
                        <td style={{ fontWeight: 'bold', width: '120px' }}>{row.key}</td>
                        <td>{row.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>企画内容</h3>
                <p style={{ color: colors.accent, lineHeight: '1.8', marginBottom: '1rem' }}>珈琲の「浅煎り」と「深煎り」をご自身で挽いて、淹れます。同じ豆でも、焙煎度で香り・味が全く変わることを、「手で」「目で」「舌で」感じていただきます。</p>
                <p style={{ color: colors.accent, lineHeight: '1.8' }}>グループ内で役割を分けることで、協力と発見が自然に生まれ、参加者が「家でもやってみようか」という動機を引き出します。</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>参加者のメリット</h3>
                <ul style={{ color: colors.accent, lineHeight: '1.8', listStyle: 'none', paddingLeft: '1.5rem' }}>
                  {[
                    '「同じ豆でこんなに違う」という体験',
                    '「グラインダーがあれば、家でも出来る」という気づき',
                    '職員同士が協力する時間',
                  ].map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-1.2rem', color: colors.secondary }}>▸</span>{point}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '1.3rem', color: colors.primary, marginBottom: '1rem' }}>費用</h3>
                <p style={{ color: colors.accent, lineHeight: '1.8' }}><strong>珈琲豆代（浅煎り・深煎り各100g）：¥3,000</strong></p>
                <p style={{ color: colors.accent, fontSize: '0.9rem', marginTop: '1rem' }}>※ その他の機材は古畑が負担します。</p>
              </div>

              <div style={{ backgroundColor: colors.light, padding: '1.5rem', borderRadius: '8px' }}>
                <p style={{ color: colors.accent, lineHeight: '1.8', margin: 0 }}>開始までに、グループ分けの名簿をいただければ幸いです。</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ backgroundColor: colors.primary, color: 'white', padding: '2rem', textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>古畑 | Coffee Kura Re | 珈琲焙煎 × 土地家屋調査士</p>
        <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem' }}>珈琲の違いを「手で感じる」という体験をお届けします。</p>
      </div>

      <style>{`@media print { body { background-color: white; } button { display: none; } div { page-break-inside: avoid; } }`}</style>
    </div>
  );
}

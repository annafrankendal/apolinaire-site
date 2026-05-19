import { useState, useEffect, useRef } from 'react'
import { products, SHOP_URL } from '@/data/products'

const colors = [
  '#F2E8D9',
  '#E8EFD9',
  '#F2EDD9',
  '#F5DDD9',
  '#DDE0EF',
  '#E0D9EF',
  '#D9E4EF',
]

const VISIBLE = 4 // antal synliga på desktop

export function ProductMarquee() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = products.length

  const next = () => setCurrent(c => (c + 1) % total)
  const prev = () => setCurrent(c => (c - 1 + total) % total)

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(next, 2800)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [playing, current])

  const getVisible = () => {
    const items = []
    for (let i = 0; i < VISIBLE; i++) {
      items.push(products[(current + i) % total])
    }
    return items
  }

  return (
    <div className="border-y border-border">
      <div className="container-editorial py-12">
        {/* Kontroller */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setPlaying(false) }}
                className="transition-all"
                style={{
                  width: current === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: current === i ? '#1A1A18' : '#D8D2C4',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev}
              className="w-9 h-9 border border-border flex items-center justify-center hover:border-ink transition-colors"
              aria-label="Föregående">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="#1A1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={next}
              className="w-9 h-9 border border-border flex items-center justify-center hover:border-ink transition-colors"
              aria-label="Nästa">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="#1A1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setPlaying(p => !p)}
              className="eyebrow border border-border px-4 py-2 hover:border-ink transition-colors"
              style={{ fontSize: '0.6rem' }}
            >
              {playing ? '⏸ Pausa' : '▶ Spela'}
            </button>
          </div>
        </div>

        {/* Produkter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {getVisible().map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center text-center p-6 border border-transparent hover:border-border transition-all"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-28 h-28 rounded-full flex flex-col items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 border border-border/30"
                style={{ background: colors[products.indexOf(p)] }}
              >
                <span className="font-display text-ink text-xl">{p.name}</span>
              </div>
              <div className="font-display text-ink leading-snug mb-2" style={{ fontSize: '1rem' }}>
                {p.sub}
              </div>
              {p.medal && (
                <div className="eyebrow text-muted-foreground mb-2" style={{ fontSize: '0.55rem' }}>
                  ★ {p.medal}
                </div>
              )}
              <div className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: '0.78rem' }}>
                {p.desc}
              </div>
              <div className="eyebrow text-muted-foreground" style={{ fontSize: '0.6rem' }}>
                {p.pairings[0]}
              </div>
              <span className="mt-4 eyebrow link-underline text-ink opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '0.6rem' }}>
                Beställ via Mylla →
              </span>
            </a>
          ))}
        </div>

        {/* Smaknamn-lista */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
          {products.map((p, i) => (
            <button key={p.id} onClick={() => { setCurrent(i); setPlaying(false) }}
              className="eyebrow transition-colors hover:text-ink"
              style={{ color: current === i ? '#1A1A18' : '#7a7468', fontSize: '0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              {p.name} · {p.sub}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

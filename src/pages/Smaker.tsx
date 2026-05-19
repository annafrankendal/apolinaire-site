import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import { products, SHOP_URL } from '@/data/products'
import { imgSrc } from '@/lib/img'

const productImages: Record<string, string> = {
  no1: '/images/no1.webp',
  no2: '/images/no2.png',
  no3: '/images/no3.webp',
  no4: '/images/no4.webp',
  no5: '/images/no5.webp',
  no6: '/images/no6.webp',
  no7: '/images/no7.webp',
}

const placeholderColors: Record<string, string> = {}

export default function Smaker() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Sju alkoholfria smakförhöjare | Apolinaire"
        description="Utforska Apolinaires sju alkoholfria smakförhöjare. Gjorda på frukt, bär och örter utan tillsatt socker. Hitta rätt smak till din rätt och ditt tillfälle."
        canonical="https://apolinaire.se/smaker"
      />
      <SiteHeader />

      {/* INTRO */}
      <section className="pt-40 pb-16">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow mb-4 text-muted-foreground">Våra drycker</div>
              <h1 className="font-display text-ink" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95 }}>
                Sju smakförhöjare.
              </h1>
            </div>
            <p className="text-muted-foreground max-w-xs" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
              Frukt, bär och örter. Inget tillsatt socker. En smak för varje tillfälle.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUKT GRID */}
      <section className="pb-24 md:pb-36">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {products.map((p) => (
              <a
                key={p.id}
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="group bg-bone flex flex-col hover:bg-linen transition-colors duration-300"
              >
                {/* Produktbild eller färgplaceholder */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: '3/4',
                    background: productImages[p.id] ? '#FAFAF8' : placeholderColors[p.id],
                  }}
                >
                  {productImages[p.id] ? (
                    <img
                      src={productImages[p.id]}
                      alt={`Apolinaire ${p.name}`}
                      loading="lazy"
                      className="transition-transform duration-700 group-hover:scale-105"
                      style={{ width: '70%', height: '80%', objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="font-display text-ink" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}>
                      {p.name}
                    </span>
                  )}
                  {p.nobel && (
                    <div className="absolute top-3 left-3 bg-ink px-2 py-1.5">
                      <img src={imgSrc('/images/nobel-emblem.png')} alt="Nobelmiddag 2025" style={{ height: '22px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 border-t border-border">
                  <div className="font-display text-ink mb-1" style={{ fontSize: '1.1rem' }}>{p.name}</div>
                  <div className="text-ink mb-2" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>{p.sub}</div>
                  {p.medal && (
                    <div className="eyebrow text-muted-foreground mb-3" style={{ fontSize: '0.48rem' }}>★ {p.medal}</div>
                  )}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="eyebrow text-muted-foreground mb-1" style={{ fontSize: '0.48rem' }}>Passar till</div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-ink" style={{ fontSize: '0.78rem' }}>{p.pairings[0]}</span>
                      <span className="eyebrow text-muted-foreground group-hover:text-ink transition-colors flex-shrink-0" style={{ fontSize: '0.65rem' }}>→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-ink text-bone text-center">
        <div className="container-editorial max-w-2xl mx-auto">
          <p className="font-display text-bone mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}>
            Vilken kväll är det ikväll?
          </p>
          <p className="text-bone/50 mb-10" style={{ fontSize: '0.9rem' }}>
            Alla sju smaker finns på Mylla. Vi har gjort valet enkelt.
          </p>
          <Button asChild variant="quiet" size="editorialLg" className="border-bone text-bone hover:bg-bone hover:text-ink">
            <a href={SHOP_URL} target="_blank" rel="noreferrer">Beställ via Mylla</a>
          </Button>
          <div className="flex items-center justify-center gap-3 mt-8">
            <img src={imgSrc('/images/nobel-emblem.png')} alt="Nobelmiddag 2025" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.4 }} />
            <p className="eyebrow text-bone/30" style={{ fontSize: '0.58rem' }}>
              Nobelmiddagen 2025 · No3 Bronsmedalj must-SM 2022 · No5, No6, No7 Silvermedalj must-SM 2022
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

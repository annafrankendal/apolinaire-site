import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { TableConfigurator } from '@/components/site/TableConfigurator'
import { products } from '@/data/products'

const imgSeafood = '/images/fisk-pairing-bord.jpg'
const imgDinner = '/images/glasen-bricka.jpg'
const imgSummer = '/images/no6-asparges.jpg'

const articles = [
  { tag: 'Guide', title: 'Dryck till fisk. Smakförhöjaren med precision', img: imgSeafood, href: '/journal/fisk', pos: 'center center' },
  { tag: 'Middagar & dryck', title: 'Hemma middag som sitter. Tre saker som gör kvällen', img: imgDinner, href: '/journal/middagsupplevelse', pos: 'center center' },
  { tag: 'Apolinaire Guide', title: 'Pairing till mat. Drycken som förstår rätten', img: imgSummer, href: '/journal/skaldjur', pos: 'center 40%' },
]

const Index = () => {
  const scrollToGuide = () => {
    document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Apolinaire. Alkoholfri dryck för gastronomi"
        description="Apolinaire är en alkoholfri smakförhöjare för gastronomi. Sju smaker skapade för pairing till mat, fine dining och hemma middagar. Serverades på Nobelmiddagen 2025."
        canonical="https://apolinaire.se"
        image="/images/midsommar.jpg"
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img src="/images/bord-darmeddig.jpg" alt="Fyra vänner skrattar tillsammans vid bordet med Apolinaire"
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.4), rgba(26,26,24,0.2) 40%, rgba(26,26,24,0.65))' }} />
        <div className="relative h-full container-editorial flex flex-col items-center justify-center text-center pb-12">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/30 rounded-full">
              <img src="/images/nobel-emblem.png" alt="Leverantör Nobelmiddag 2025" style={{ height: '20px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <span style={{ color: 'rgba(244,239,228,0.9)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
                Serverades på Nobelmiddagen 2025
              </span>
            </div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', lineHeight: 0.95, textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}>
              Där med dig
            </h1>
            <p className="mt-8 text-bone/85 max-w-sm mx-auto leading-relaxed" style={{ fontSize: '1rem', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
              Gastronomisk smakförhöjare. En producent mellan tradition och tillgänglighet.
            </p>
            <div className="mt-10">
              <button
                onClick={scrollToGuide}
                className="inline-flex items-center eyebrow px-8 py-4 border border-bone text-bone hover:bg-bone hover:text-ink transition-all duration-300"
                style={{ fontSize: '0.7rem', letterSpacing: '0.14em' }}>
                Vi väljer åt dig →
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(244,239,228,0.4)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* FILOSOFI */}
      <section className="py-24 md:py-36 border-b border-border">
        <div className="container-editorial mx-auto text-center" style={{ maxWidth: '520px' }}>
          <div className="eyebrow mb-8 text-muted-foreground">Vår filosofi</div>
          <p className="font-display text-ink" style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1.1rem)', lineHeight: 1.9, letterSpacing: '0.01em' }}>
            Vår filosofi utgår från att smak inte är ett slutmål, utan en relation. En relation mellan sinnen, människor och ögonblick. Om samspelet mellan smaker, dofter, texturer och atmosfärer som tillsammans kan förändra hur ett ögonblick upplevs. Gastronomi behöver därför inte förstås för att upplevas. Den behöver kännas.
          </p>
          <p className="font-display text-ink mt-8" style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1.1rem)', lineHeight: 1.9, letterSpacing: '0.01em' }}>
            Därför arbetar vi för att göra gastronomi mer intuitivt, mänskligt och nära. Inte genom att förenkla smaken, utan genom att förenkla vägen in till upplevelsen. Vi vill att fler ska känna gastronomi snarare än att behöva förstå den. För när smak får kännas istället för att förklaras, blir gastronomi något fler kan göra till sitt eget.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <div id="guide">
        <TableConfigurator />
      </div>

      {/* SMAKER RAD */}
      <section className="border-b border-border bg-bone">
        <div className="container-editorial">
          <div className="overflow-x-auto">
            <div className="flex divide-x divide-border min-w-max md:min-w-0 md:grid md:grid-cols-7">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to="/smaker"
                  className="group flex flex-col items-center text-center px-6 py-10 hover:bg-linen transition-colors duration-300 min-w-[130px] md:min-w-0"
                >
                  <div className="font-display text-ink mb-2 transition-opacity group-hover:opacity-60" style={{ fontSize: '1.4rem' }}>
                    {p.name}
                  </div>
                  <div className="text-muted-foreground leading-snug" style={{ fontSize: '0.62rem', letterSpacing: '0.04em' }}>
                    {p.sub}
                  </div>
                  {p.nobel && (
                    <div className="mt-2 flex justify-center">
                      <img src="/images/nobel-emblem.png" alt="Nobelmiddag 2025" style={{ height: '18px', width: 'auto' }} />
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="py-24 md:py-36 bg-linen">
        <div className="container-editorial">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4 text-muted-foreground">Inspiration</div>
            <h2 className="font-display text-ink" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.02 }}>
              Middagar & dryck.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {articles.map((a, i) => (
              <Link key={i} to={a.href} className="group block">
                <div className="overflow-hidden bg-bone mb-5" style={{ aspectRatio: '3/2' }}>
                  <img src={a.img} alt={a.title} loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform 1.4s ease', objectPosition: a.pos }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div className="eyebrow mb-3 text-muted-foreground">{a.tag}</div>
                <h3 className="font-display text-ink" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', lineHeight: 1.25 }}>{a.title}</h3>
                <span className="mt-4 inline-flex eyebrow link-underline text-ink">Läs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Index

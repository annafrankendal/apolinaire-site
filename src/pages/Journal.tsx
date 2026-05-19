import { Link } from 'react-router-dom'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SEO } from '@/components/SEO'
import { imgSrc } from '@/lib/img'

const imgSeafood = imgSrc('/images/fisk-pairing-bord.jpg')
const imgDinner = imgSrc('/images/glasen-bricka.jpg')
const imgSummer = imgSrc('/images/no6-asparges.jpg')

const articles = [
  { tag: 'Guide', title: 'Dryck till fisk. Smakförhöjaren med precision', img: imgSeafood, href: '/journal/fisk', pos: 'center center' },
  { tag: 'Middagar & dryck', title: 'Hemma middag som sitter. Tre saker som gör kvällen', img: imgDinner, href: '/journal/middagsupplevelse', pos: 'center center' },
  { tag: 'Apolinaire Guide', title: 'Pairing till mat. Drycken som förstår rätten', img: imgSummer, href: '/journal/skaldjur', pos: 'center 40%' },
]

export default function Journal() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Guider om alkoholfri pairing och hemma middag | Apolinaire"
        description="Apolinaire guider om alkoholfri pairing, hemma middagar och värdskap. Lär dig matcha dryck till mat och skapa middagar som sitter."
        canonical="https://apolinaire.se/inspiration"
      />
      <SiteHeader />

      <section className="pt-40 pb-24">
        <div className="container-editorial">
          <div className="mb-16">
            <div className="eyebrow mb-4 text-muted-foreground">Inspiration</div>
            <h1 className="font-display text-ink" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.02 }}>
              Middagar & dryck.
            </h1>
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
                <h2 className="font-display text-ink mb-4" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', lineHeight: 1.25 }}>{a.title}</h2>
                <span className="inline-flex eyebrow link-underline text-ink">Läs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { TableConfigurator } from '@/components/site/TableConfigurator'
import { SHOP_URL } from '@/data/products'
import { SEO } from '@/components/SEO'
import { imgSrc } from '@/lib/img'

const tips = [
  {
    nr: '01',
    title: 'Välj rätt temperatur',
    desc: 'Apolinaire serveras kyld, 8–10°C. Precis som en vit burgunder, kall nog att vara fräsch, varm nog att visa sin komplexitet.',
  },
  {
    nr: '02',
    title: 'Välj rätt glas',
    desc: 'Ett stort vitvinsglas öppnar upp aromerna. Undvik tumbler, det förtar dryckens karaktär.',
  },
  {
    nr: '03',
    title: 'Timing vid bordet',
    desc: 'Häll upp precis när rätten är serverad. Apolinaire är levande i glaset och förändras under middagens gång.',
  },
  {
    nr: '04',
    title: 'Pairing-logiken',
    desc: 'Syra möter syra. Sötma balanserar sälta. No3 till fisk, No4 till kött, No7 till desserter.',
  },
]

const imgHero = imgSrc('/images/hemma-smak.jpg')
const imgTable = imgSrc('/images/skaal-sallskap.jpg')

export default function ForHemmet() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Alkoholfri dryck till hemma middag | Apolinaire"
        description="Apolinaire är en alkoholfri smakförhöjare för hemma middagar. Tips för pairing, rätt glas och temperatur. Inkludera alla vid bordet med ett glas som hör hemma."
        canonical="https://apolinaire.se/for-hemmet"
        image={imgSrc('/images/hemma-smak.jpg')}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={imgHero} alt="Kvinna smakar Apolinaire vid bardisken – ett ögonblick för sig själv"
          className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ objectPosition: 'center 35%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.35), rgba(26,26,24,0.6))' }} />
        <div className="relative h-full container-editorial flex flex-col items-center justify-center text-center">
          <div className="fade-up">
            <div className="eyebrow mb-6 text-bone/70">För hemmet</div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.95 }}>
              Kvällen börjar<br />i köket.
            </h1>
            <p className="mt-8 text-bone/85 max-w-lg mx-auto leading-relaxed">
              Guider, tips och inspiration för middagar hemma, med Apolinaire som sällskap.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-24 md:py-36">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6 text-muted-foreground">Värdskapsguide</div>
            <h2 className="font-display text-ink" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              Fyra saker som gör skillnad.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
            {tips.map((t) => (
              <div key={t.nr}>
                <div className="eyebrow text-muted-foreground mb-4">{t.nr}</div>
                <h3 className="font-display text-2xl text-ink mb-3">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILD + TEXT */}
      <section className="py-24 bg-linen">
        <div className="container-editorial grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={imgTable} alt="Tre vänner skålar med Apolinaire i ett vitvinsglas" className="w-full h-full object-cover" style={{ objectPosition: 'center 35%' }} />
          </div>
          <div>
            <div className="eyebrow mb-6 text-muted-foreground">Alkoholfritt värdskap</div>
            <h2 className="font-display text-ink mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              Alla förtjänar ett riktigt glas.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apolinaire skapades för dem som väljer bort alkoholen men inte vill välja bort upplevelsen. Ingen läsk. Ingen juice. En riktig dryck med komplexitet, syra och kropp.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Det handlar om att inkludera alla runt bordet och höja ribban för vad alkoholfritt kan vara.
            </p>
            <Button asChild variant="ghostLine" size="editorial">
              <a href={SHOP_URL} target="_blank" rel="noreferrer">Beställ via Mylla →</a>
            </Button>
          </div>
        </div>
      </section>

      <TableConfigurator />

      <section className="py-20 bg-ink text-bone text-center">
        <div className="container-editorial">
          <div className="flex flex-col items-center gap-4">
            <Button asChild variant="quiet" size="editorialLg" className="border-bone text-bone hover:bg-bone hover:text-ink">
              <a href={SHOP_URL} target="_blank" rel="noreferrer">Beställ via Mylla</a>
            </Button>
            <img src={imgSrc('/images/nobel-emblem.png')} alt="Leverantör Nobelmiddag 2025" style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.45 }} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

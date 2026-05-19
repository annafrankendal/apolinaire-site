import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SHOP_URL } from '@/data/products'
import { SEO } from '@/components/SEO'
import { imgSrc } from '@/lib/img'

const img = imgSrc('/images/no6-asparges.jpg')

export default function JournalSkaldjur() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Pairing till mat. Drycken som förstår rätten | Apolinaire"
        description="Apolinaire är en gastronomisk smakförhöjare byggd för pairing. Lär dig grunderna i att matcha dryck till mat och varför precision gör hela skillnaden."
        canonical="https://apolinaire.se/journal/skaldjur"
        image={img}
        type="article"
      />
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={img} alt="Apolinaire No6 serveras till grillad sparris – pairing med precision" className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.2), rgba(26,26,24,0.7))' }} />
        <div className="relative h-full container-editorial flex flex-col justify-end pb-16">
          <div className="fade-up max-w-2xl">
            <div className="eyebrow mb-4 text-bone/70">Apolinaire Guide</div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
              Pairing till mat.<br />Drycken som förstår rätten.
            </h1>
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="container-editorial max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Pairing till mat handlar inte om regler. Det handlar om precision. Rätt dryck till rätt rätt gör att du smakar maten djupare – inte annorlunda. Det är skillnaden mellan en dryck som fyller ett glas och en som förstår tallriken.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            De bästa smakkombinationerna delar en logik: syra möter fett, struktur möter umami, ett mineraliskt avslut rensar gommen inför nästa tugga. Apolinaire är skapad runt den logiken – som ett gastronomiskt verktyg, inte ett kompromissalternativ.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Grunderna i pairing till mat</h2>
          <h3 className="font-display text-xl text-ink mt-6 mb-4">Syra, struktur och kontrast</h3>
          <p className="text-ink leading-relaxed mb-8">
            Tre variabler styr en välgjord pairing. Syra – en dryck med syra lyfter feta rätter och håller gommen alert. Struktur – en dryck med kropp matchar täta smaker utan att försvinna. Kontrast – ibland är det ett oväntat samspel som skapar det bästa resultatet.
          </p>
          <p className="text-ink leading-relaxed mb-8">
            No6 · Äpple, Svarta vinbär, Lime & Fänkålsfrö illustrerar det. Fruktig djuphet, mineralisk finish och tillräcklig syra för att möta grönsaksrätter, lamm och mörkare karaktärer. Bilden talar sitt tydliga språk: sparris, ren smak, precision.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Smakförhöjaren. Drycken som vet sin roll</h2>
          <p className="text-ink leading-relaxed mb-8">
            En gastronomisk smakförhöjare är inte skapad för att ta plats – den är skapad för att ge rätten mer utrymme. Det kräver att drycken förstår sin uppgift: stötta, lyfta och sedan kliva tillbaka. Apolinaire är satt på de premisserna.
          </p>
          <p className="text-ink leading-relaxed mb-8">
            Varje av de sju smakerna är formulerade med en specifik pairingslogik. Inte slumpmässigt, utan som ett genomtänkt gastronomiskt program.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Så serverar du för bästa resultat</h2>
          <p className="text-ink leading-relaxed mb-8">
            8–10°C. Stort vitvinsglas. Häll upp precis när rätten är serverad. Låt drycken öppna sig en minut – det är i det ögonblicket pairingen visar sin fulla potential. Gastronomisk pairing kräver inte utbildning. Den kräver intention.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Vet du inte vilken smak som passar din rätt? Låt oss välja åt dig.{' '}
            <Link to="/#guide" className="underline text-ink hover:opacity-60 transition-opacity">
              Prova vår pairingsguide: Vi väljer åt dig →
            </Link>
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Vill du fördjupa dig i en specifik råvara?{' '}
            <Link to="/journal/fisk" className="underline text-ink hover:opacity-60 transition-opacity">
              Läs vår guide: Dryck till fisk →
            </Link>
            {' '}eller{' '}
            <Link to="/journal/middagsupplevelse" className="underline text-ink hover:opacity-60 transition-opacity">
              Hemma middag som sitter →
            </Link>
          </p>

          <div className="border-t border-border mt-16 pt-12 text-center">
            <p className="font-display text-2xl text-ink mb-2">No6 · Äpple, Svarta vinbär, Lime & Fänkålsfrö</p>
            <p className="text-muted-foreground mb-4 text-sm">★ Silvermedalj must-SM 2022</p>
            <p className="text-muted-foreground mb-8 text-sm">
              <Link to="/smaker" className="underline hover:opacity-60 transition-opacity">Utforska alla sju smaker och hitta pairingen som passar din rätt →</Link>
            </p>
            <Button asChild variant="ghostLine" size="editorial">
              <a href={SHOP_URL} target="_blank" rel="noreferrer">Beställ via Mylla →</a>
            </Button>
          </div>
        </div>
      </article>

      <div className="container-editorial pb-16">
        <Link to="/journal" className="eyebrow link-underline text-muted-foreground">← Inspiration</Link>
      </div>

      <SiteFooter />
    </div>
  )
}

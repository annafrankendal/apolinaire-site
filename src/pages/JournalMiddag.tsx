import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SHOP_URL } from '@/data/products'
import { SEO } from '@/components/SEO'
import { imgSrc } from '@/lib/img'

const img = imgSrc('/images/glasen-bricka.jpg')

export default function JournalMiddag() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Hemma middag som sitter. Tre saker som avgör | Apolinaire"
        description="Om timing, rätt dryck och känslan när alla vid bordet är fullt med. Tre enkla saker som förvandlar en hemma middag till ett minne man bär med sig."
        canonical="https://apolinaire.se/journal/middagsupplevelse"
        image={img}
        type="article"
      />
      <SiteHeader />

      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src={img} alt="Tre glas Apolinaire på silverbricka, redo att serveras" className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ objectPosition: 'center center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.2), rgba(26,26,24,0.7))' }} />
        <div className="relative h-full container-editorial flex flex-col justify-end pb-16">
          <div className="fade-up max-w-2xl">
            <div className="eyebrow mb-4 text-bone/70">Middagar & dryck</div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
              Hemma middag som sitter.<br />Tre saker som gör kvällen.
            </h1>
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="container-editorial max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            De middagar man minns handlar sällan om vad som stod på menyn. De handlar om känslan – hur den byggdes upp, stund för stund. En hemma middag som sitter kräver inte mer planering. Den kräver rätt saker, i rätt ordning.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Det är tre saker som avgör om kvällen lyfter. Inte antalet rätter. Inte hur dukad bordet är. Tre saker som är enklare än du tror – och som märks mer än du anar.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">1. Glaset sätter tonen. Redan innan maten är serverad</h2>
          <p className="text-ink leading-relaxed mb-8">
            Häll upp drycken innan rätten är framme. Det är en av de enklaste saker ett värdskap kan göra – och en av de mest effektiva. Det signalerar att hemma middagen har börjat. På riktigt. Gästerna märker det utan att de vet om det.
          </p>
          <p className="text-ink leading-relaxed mb-8">
            Apolinaire är en gastronomisk smakförhöjare skapad för just den stunden. Med syra, kropp och intention. Inte ett ersättningsglas – ett eget val med ett eget uttryck.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">2. Ge hemma middagen ett eget tempo</h2>
          <p className="text-ink leading-relaxed mb-8">
            En bra middag är inte snabb. Det är ett av de mest underskattade insikterna om värdskap. Pausa mellan rätterna. Låt samtalet ta plats. Byt smak med rätten – en lättare till förrätten, ett djupare uttryck till varmrätten.
          </p>
          <h3 className="font-display text-xl text-ink mt-6 mb-4">Pausen är kvällens bästa del</h3>
          <p className="text-ink leading-relaxed mb-8">
            En paus med ett nytt glas i handen är inte väntan. Det är det ögonblicket samtalet rör sig dit det egentligen ville komma. Det är också ögonblicket hemma middagen sätter sig i minnet.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">3. Inkludera alla. Värdskap utan undantag</h2>
          <p className="text-ink leading-relaxed mb-8">
            Den som inte dricker alkohol förtjänar inte ett alternativ. De förtjänar ett val. Apolinaire ser till att alla vid bordet har ett glas med samma tanke och omsorg bakom sig. Det märks i känslan i rummet – och i hur kvällen pratas om dagen efter.
          </p>
          <p className="text-ink leading-relaxed mb-8">
            En hemma middag är inte en prestation. Det är ett tillfälle. Och det tillfället blir bättre när ingen sitter utanför.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Vill du veta hur du matchar drycken till rätten?{' '}
            <Link to="/journal/skaldjur" className="underline text-ink hover:opacity-60 transition-opacity">
              Läs vår guide: Pairing till mat →
            </Link>
          </p>

          <div className="border-t border-border mt-16 pt-12 text-center">
            <p className="font-display text-2xl text-ink mb-4">Där med dig. Sju smaker.</p>
            <p className="text-muted-foreground mb-8 text-sm">
              <Link to="/smaker" className="underline hover:opacity-60 transition-opacity">Hitta rätt Apolinaire bland alla sju smaker →</Link>
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

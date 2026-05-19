import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SHOP_URL } from '@/data/products'
import { SEO } from '@/components/SEO'

const img = '/images/fisk-pairing-bord.jpg'

export default function JournalFisk() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Dryck till fisk. Smakförhöjaren med precision | Apolinaire"
        description="Rätt dryck till fisk handlar om syra och precision. Apolinaire är en gastronomisk smakförhöjare skapad för att lyfta fiskmåltiden, inte ersätta vinet."
        canonical="https://apolinaire.se/journal/fisk"
        image={img}
        type="article"
      />
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={img} alt="Apolinaire No3 och No7 på dukat middagsbord med flera rätter" className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ objectPosition: 'center center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.2), rgba(26,26,24,0.7))' }} />
        <div className="relative h-full container-editorial flex flex-col justify-end pb-16">
          <div className="fade-up max-w-2xl">
            <div className="eyebrow mb-4 text-bone/70">Guide</div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
              Dryck till fisk.<br />Smakförhöjaren med precision.
            </h1>
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="container-editorial max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Det som skiljer en minnesvärd fiskmiddag från en vanlig är sällan rätten i sig. Det är detaljerna. Drycken är en av dem – och den rätta drycken till fisk gör att du smakar rätten djupare, inte annorlunda.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Fisk bär på mineralitet, havsluft och naturlig sälta. En dryck i det sammanhanget ska förstå det. Inte fylla en lucka – förstärka det som redan är där. Det är skillnaden mellan ett komplement och en gastronomisk smakförhöjare.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Varför syra är avgörande i valet av dryck till fisk</h2>
          <p className="text-ink leading-relaxed mb-8">
            Citronen du pressar över rätten är inte dekor – det är smakens start. En dryck som bär på samma syra fortsätter det arbetet: den skär igenom fiskens fett, rensar gommen och gör nästa tugga lika god som den första. En söt eller platt dryck gör raka motsatsen.
          </p>
          <p className="text-ink leading-relaxed mb-8">
            No3 · Äpple, Citron & Ingefära är skapad med den logiken. Citronets skärpa möter fisken precist, äpplet ger balans och ingefäran tillför ett kittlande avslut. Fungerar utmärkt till sushi, pocherad lax och heta skaldjursrätter.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Till mer aromatiska fiskrätter</h2>
          <h3 className="font-display text-xl text-ink mt-6 mb-4">Brynt smör, dill och mer komplexitet</h3>
          <p className="text-ink leading-relaxed mb-8">
            En helstekt torsk med brynt smör eller gravlax med dill har mer karaktär. Då passar No2 · Äpple, Citron & Rosmarin bättre som dryck till fisk. Rosmarinen tillför en mineralisk örtton som möter rättens komplexitet utan att ta kommandot från tallriken.
          </p>

          <h2 className="font-display text-3xl text-ink mt-12 mb-6">Temperatur och glas. Detaljerna som avgör helheten</h2>
          <p className="text-ink leading-relaxed mb-8">
            8–10°C. Stort vitvinsglas. Aromerna behöver utrymme för att öppna sig. Häll upp precis när rätten är serverad – det är i det ögonblicket smakförhöjaren gör sitt jobb: tyst, precist och med full effekt.
          </p>

          <p className="text-ink leading-relaxed mb-8">
            Vill du sätta hela kvällen – inte bara rätten?{' '}
            <Link to="/journal/middagsupplevelse" className="underline text-ink hover:opacity-60 transition-opacity">
              Läs vår guide: Hemma middag som sitter →
            </Link>
          </p>

          <div className="border-t border-border mt-16 pt-12 text-center">
            <p className="font-display text-2xl text-ink mb-2">No3 · Äpple, Citron & Ingefära</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/images/nobel-emblem.png" alt="Nobelmiddag 2025" style={{ height: '28px', width: 'auto' }} />
              <p className="text-muted-foreground text-sm">Bronsmedalj must-SM 2022</p>
            </div>
            <p className="text-muted-foreground mb-8 text-sm">
              <Link to="/smaker" className="underline hover:opacity-60 transition-opacity">Utforska alla sju smaker av Apolinaire →</Link>
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

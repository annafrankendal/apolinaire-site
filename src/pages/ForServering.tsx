import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SHOP_URL } from '@/data/products'
import { SEO } from '@/components/SEO'

const fordelar = [
  { nr: '01', title: 'Förhöjer maten', desc: 'Skapad för pairing. Syra, frukt och struktur som lyfter rätten utan att ta fokus från den. Gästen smakar mer av maten.' },
  { nr: '02', title: 'Serveras som vin', desc: 'Rätt temperatur, rätt glas, rätt timing. Ritualen är intakt. Gästen märker omsorgen, inte vad som saknas.' },
  { nr: '03', title: 'Hela bordet med i upplevelsen', desc: 'Varje gäst vid bordet får ett glas som hör hemma i måltiden. Ingen sitter utanför. Alla kan fokusera på maten och sällskapet.' },
]

const aterforsaljare = [
  'Martin & Servera',
  'Menigo',
  'Svensk Cater',
  'outofhome.se',
  'Wine Trade Sweden',
  'Stockfiller',
]

const imgHero = '/images/hero-servering-is.jpg'
const imgKok = '/images/nobel-servering.jpg'

export default function ForServering() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <SEO
        title="Alkoholfri dryck för restaurang och servering | Apolinaire"
        description="Apolinaire är en alkoholfri smakförhöjare för professionell servering. Pairing till varje rätt. Leverantör Nobelmiddag 2025. Beställ via Martin & Servera eller Menigo."
        canonical="https://apolinaire.se/foretag"
        image="/images/hero-servering-is.jpg"
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img src={imgHero} alt="Servitör bär bricka utomhus med Apolinaire No3 och glas med is"
          className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ objectPosition: 'center 48%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.1) 0%, rgba(26,26,24,0.15) 50%, rgba(26,26,24,0.75) 100%)' }} />
        <div className="relative h-full container-editorial flex flex-col items-center justify-end text-center pb-20">
          <div className="fade-up">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/30 rounded-full">
              <img src="/images/nobel-emblem.png" alt="Leverantör Nobelmiddag 2025" style={{ height: '20px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <span style={{ color: 'rgba(244,239,228,0.85)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
                Serverades på Nobelmiddagen 2025
              </span>
            </div>
            <h1 className="font-display text-bone" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.95 }}>
              Rätt glas<br />till varje gäst
            </h1>
            <p className="mt-8 text-bone/85 max-w-md mx-auto leading-relaxed">
              En smakförhöjare skapad för professionell servering. Förhöjer maten och ser till att varje gäst vid bordet är fullt med i upplevelsen.
            </p>
          </div>
        </div>
      </section>

      {/* FÖRDELAR */}
      <section className="py-24 md:py-36 border-b border-border">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6 text-muted-foreground">Varför Apolinaire</div>
            <h2 className="font-display text-ink" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              Drycken din<br />gäst minns
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {fordelar.map((f) => (
              <div key={f.nr} className="border-t border-border pt-8">
                <div className="eyebrow text-muted-foreground mb-4">{f.nr}</div>
                <h3 className="font-display text-2xl text-ink mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="https://mail.google.com/mail/?view=cm&to=bjorn@apolinaire.se" className="eyebrow text-ink link-underline">
              Hör av dig för ett samtal →
            </a>
          </div>
        </div>
      </section>

      {/* NOBEL */}
      <section className="py-20 bg-linen border-b border-border">
        <div className="container-editorial grid md:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center aspect-[4/3] bg-linen">
            <img src="/images/nobel-emblem-guld.png" alt="Leverantör Nobelmiddag 2025" style={{ width: '70%', height: 'auto' }} />
          </div>
          <div>
            <h2 className="font-display text-ink mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}>
              Vald till världens mest bevakade middag
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              På Nobelmiddagen 2025 satt Apolinaire vid varje bord. I ett av världens mest gastronomiskt krävande sammanhang. Det tydligaste beviset på att drycken hör hemma i professionell servering.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36 border-b border-border">
        <div className="container-editorial">
          <div className="text-center mb-20">
            <div className="eyebrow mb-6 text-muted-foreground">Så arbetar vi</div>
            <h2 className="font-display text-ink" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
              Från samtal<br />till servering
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border-t border-border max-w-4xl mx-auto">
            {[
              { nr: '01', title: 'Menygenomgång', desc: 'Vi sätter oss med kökschef och sommelier. Ni får ett skräddarsytt pairing-förslag baserat på er meny och era gäster.' },
              { nr: '02', title: 'Pairing-förslag', desc: 'Vi väljer rätt Apolinaire till varje kurs. Ni får ett komplett smakprogram, rätt för rätt, klart att presentera.' },
              { nr: '03', title: 'Servering & utbildning', desc: 'Vi tränar ert team. Ni får ett team som serverar Apolinaire med samma säkerhet och berättelse som vinet.' },
            ].map((s, i) => (
              <div key={i} className="pt-10 pb-8 md:pr-12 md:pl-4 first:pl-0 border-b md:border-b-0 md:border-r border-border last:border-r-0">
                <div className="eyebrow text-muted-foreground mb-6">{s.nr}</div>
                <h3 className="font-display text-ink mb-3" style={{ fontSize: '1.5rem', lineHeight: 1.1 }}>{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.9rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILDBRYTNING */}
      <div className="w-full overflow-hidden" style={{ height: '420px' }}>
        <img
          src="/images/bardisk-flaskor.jpg"
          alt="Apolinaire på bardisk – No3, No6 och No7 i restaurangmiljö"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 70%' }}
        />
      </div>

      {/* PAIRINGSGUIDE */}
      <section className="py-24 md:py-36 bg-bone">
        <div className="container-editorial">
          <div className="text-center mb-20">
            <div className="eyebrow mb-4 text-muted-foreground">Pairingsguide</div>
            <h2 className="font-display text-ink mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              Tre smaker för er meny
            </h2>
            <p className="text-muted-foreground max-w-sm mx-auto" style={{ fontSize: '0.9rem' }}>
              Apolinaire har sju smaker. Här är tre som passar de flesta menyer. Vi väljer rätt kombination för er tillsammans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                nr: 'No3',
                sub: 'Äpple, Citron & Ingefära',
                badge: 'Nobel',
                img: '/images/no3-render.jpg',
                ratter: ['Sushi & heta skaldjursrätter', 'Asiatiska smaker', 'Lättare fisk'],
              },
              {
                nr: 'No4',
                sub: 'Äpple, Lingon & Lime',
                badge: 'Silvermedalj must-SM 2022',
                img: '/images/no4-render.jpg',
                ratter: ['Lammrätter', 'Charkuterier', 'Smakrika ostar'],
              },
              {
                nr: 'No6',
                sub: 'Äpple, Svarta vinbär, Lime & Fänkål',
                badge: 'Silvermedalj must-SM 2022',
                img: '/images/no6-render.jpg',
                ratter: ['Vilt & mörkt kött', 'Gräddiga fiskgrytor', 'Rostade rotsaker'],
              },
            ].map((p) => (
              <div key={p.nr} className="flex flex-col">
                {/* Stor flaska */}
                <div className="flex items-end justify-center mb-8 overflow-hidden" style={{ height: '480px' }}>
                  <img
                    src={p.img}
                    alt={`Apolinaire ${p.nr}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                {/* Info */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="font-display text-ink mb-1" style={{ fontSize: '1.5rem' }}>{p.nr}</div>
                      <div className="text-muted-foreground" style={{ fontSize: '0.8rem' }}>{p.sub}</div>
                    </div>
                    {p.badge === 'Nobel' ? (
                      <img src="/images/nobel-emblem.png" alt="Nobelmiddag 2025" style={{ height: '36px', width: 'auto', flexShrink: 0 }} />
                    ) : (
                      <span className="eyebrow text-muted-foreground text-right" style={{ fontSize: '0.48rem', maxWidth: '80px' }}>★ {p.badge}</span>
                    )}
                  </div>
                  <div className="eyebrow text-muted-foreground mb-2 mt-4" style={{ fontSize: '0.5rem' }}>Passar till</div>
                  <ul className="space-y-1">
                    {p.ratter.map((r, i) => (
                      <li key={i} className="text-ink" style={{ fontSize: '0.85rem' }}>· {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MATKASSE */}
      <section className="bg-ink text-bone">
        <div className="grid md:grid-cols-2">
          {/* Bild */}
          <div className="overflow-hidden" style={{ minHeight: '520px' }}>
            <img
              src="/images/matkasse.webp"
              alt="Apolinaire No3 bredvid en premiumkasse med råvaror"
              className="w-full h-full object-cover"
              style={{ minHeight: '520px' }}
            />
          </div>
          {/* Text */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="eyebrow text-bone/40 mb-6">För er som erbjuder matkasse</div>
            <h2 className="font-display text-bone mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
              Drycken som<br />redan hör hemma<br />i premiumkassen
            </h2>
            <p className="text-bone/65 leading-relaxed mb-10" style={{ fontSize: '0.95rem' }}>
              Erbjuder er restaurang en matkasse? Apolinaire är smakförhöjaren som gör att era kunder kan njuta av hela matupplevelsen hemma, med rätt dryck till maten ni valt ut.
            </p>
            <div className="space-y-6 border-t border-bone/15 pt-8 mb-10">
              {[
                { nr: '01', title: 'Rätt pairing till er kasse', desc: 'Vi väljer rätt Apolinaire baserat på vad som är i er kasse den veckan. Kunden behöver inte tänka, bara njuta.' },
                { nr: '02', title: 'Levereras klart', desc: 'Apolinaire levereras kyld och redo. Inga extra steg för er eller kunden.' },
                { nr: '03', title: 'Förlänger er kvalitet', desc: 'Era kunder har valt er för att ni är bra. Apolinaire ser till att den känslan håller hela vägen till glaset.' },
              ].map((s) => (
                <div key={s.nr} className="flex gap-6">
                  <span className="eyebrow text-bone/30 flex-shrink-0 pt-1">{s.nr}</span>
                  <div>
                    <div className="font-display text-bone mb-1" style={{ fontSize: '1rem' }}>{s.title}</div>
                    <p className="text-bone/50 leading-relaxed" style={{ fontSize: '0.82rem' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://mail.google.com/mail/?view=cm&to=bjorn@apolinaire.se"
              className="eyebrow text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors self-start">
              Hör av dig för ett samtal →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ink text-bone text-center">
        <div className="container-editorial">
          <p className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, maxWidth: '40rem', margin: '0 auto' }}>
            Varje gäst förtjänar ett glas som hör hemma vid bordet.
          </p>
          <p className="text-bone/60 mt-6 max-w-sm mx-auto leading-relaxed" style={{ fontSize: '0.9rem' }}>
            Ta ett samtal med Björn. Ni går igenom er meny, väljer rätt smaker och sätter upp ett smakprogram. Utan förpliktelse.
          </p>
          <div className="mt-10">
            <Button asChild variant="quiet" size="editorialLg" className="border-bone text-bone hover:bg-bone hover:text-ink">
              <a href="https://mail.google.com/mail/?view=cm&to=bjorn@apolinaire.se">Boka ett samtal med Björn</a>
            </Button>
          </div>

          {/* Återförsäljarlista */}
          <div className="mt-16 border-t border-bone/15 pt-12 max-w-2xl mx-auto">
            <div className="eyebrow text-bone/40 mb-6">Eller beställ direkt via er grossist</div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6">
              {aterforsaljare.map((a) => (
                <span key={a} className="text-bone/70" style={{ fontSize: '0.88rem' }}>{a}</span>
              ))}
            </div>
            <p className="text-bone/40" style={{ fontSize: '0.8rem' }}>
              Finns inte er grossist?{' '}
              <a href="https://mail.google.com/mail/?view=cm&to=bjorn@apolinaire.se" className="text-bone/70 underline hover:text-bone transition-colors">
                Kontakta Björn direkt →
              </a>
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-1">
            <p className="eyebrow text-bone/50" style={{ fontSize: '0.6rem' }}>Björn Nilsson</p>
            <a href="https://mail.google.com/mail/?view=cm&to=bjorn@apolinaire.se" className="eyebrow text-bone/40 hover:text-bone transition-colors" style={{ fontSize: '0.6rem' }}>bjorn@apolinaire.se</a>
            <a href="tel:+46708208080" className="eyebrow text-bone/40 hover:text-bone transition-colors" style={{ fontSize: '0.6rem' }}>0708-208080</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

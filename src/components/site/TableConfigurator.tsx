import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SHOP_URL, getRecommendation, type Product } from '@/data/products'

const antalOptions = ['1–2 personer', '3–5 personer', '6+ personer']

const matOptions = [
  { label: 'Fisk & skaldjur', value: 'fisk skaldjur' },
  { label: 'Sushi & asiatiskt', value: 'sushi asiatiskt' },
  { label: 'Grillat', value: 'grillat' },
  { label: 'Kyckling', value: 'kyckling' },
  { label: 'Kött & vilt', value: 'kött vilt' },
  { label: 'Vegetariskt', value: 'vegetariskt' },
  { label: 'Husmanskost', value: 'husmanskost' },
  { label: 'Pasta & medelhav', value: 'pasta' },
  { label: 'Långkok & grytor', value: 'långkok soppa' },
  { label: 'Förrätt / lättare', value: 'forrätt' },
]

const stamningOptions = [
  { label: 'Romantisk kväll', value: 'romantisk' },
  { label: 'Festlig & social', value: 'fest' },
  { label: 'Exklusiv middag', value: 'exklusiv' },
  { label: 'Avslappnad hemkväll', value: 'avslappnad' },
  { label: 'Sommarfest', value: 'sommar fest' },
]

type Step = 'antal' | 'mat' | 'stamning' | 'email' | 'result'

export function TableConfigurator() {
  const [step, setStep] = useState<Step>('antal')
  const [antal, setAntal] = useState('')
  const [mat, setMat] = useState('')
  const [stamning, setStamning] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<Product | null>(null)
  const [emailError, setEmailError] = useState('')
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  const [showPolicy, setShowPolicy] = useState(false)

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Ange en giltig e-postadress')
      return
    }
    if (!consent) {
      setConsentError(true)
      return
    }
    setEmailError('')
    setConsentError(false)
    const rec = getRecommendation(mat, stamning)
    setResult(rec)
    setStep('result')
  }

  const reset = () => {
    setStep('antal')
    setAntal('')
    setMat('')
    setStamning('')
    setEmail('')
    setResult(null)
  }

  const stepLabels: Record<Step, string> = {
    antal: '01',
    mat: '02',
    stamning: '03',
    email: '04',
    result: '✓',
  }

  const steps: Step[] = ['antal', 'mat', 'stamning', 'email', 'result']
  const currentIndex = steps.indexOf(step)

  return (
    <section className="py-24 md:py-36 bg-linen">
      <div className="container-editorial">
        <div className="text-center mb-16">
          <div className="eyebrow mb-6 text-muted-foreground">Vi väljer åt dig</div>
          <h2 className="font-display text-ink" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.02 }}>
            Berätta vad du äter.<br />Vi fixar resten.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">
            Tre frågor. En rekommendation. Lägg drycken på oss. Fokusera på sällskapet.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Progress */}
          {step !== 'result' && (
            <div className="flex items-center gap-2 mb-12 justify-center">
              {(['antal', 'mat', 'stamning', 'email'] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] tracking-wider border transition-all ${
                    i <= currentIndex ? 'bg-ink text-bone border-ink' : 'bg-transparent text-muted-foreground border-border'
                  }`}>
                    {i < currentIndex ? '✓' : stepLabels[s]}
                  </div>
                  {i < 3 && <div className={`w-8 h-px transition-all ${i < currentIndex ? 'bg-ink' : 'bg-border'}`} />}
                </div>
              ))}
            </div>
          )}

          {/* STEG 1: Antal */}
          {step === 'antal' && (
            <div className="fade-up">
              <div className="eyebrow text-muted-foreground mb-3">Fråga 1 av 3</div>
              <h3 className="font-display text-3xl text-ink mb-8">Hur många ska äta?</h3>
              <div className="flex flex-col gap-3">
                {antalOptions.map((o) => (
                  <button key={o} onClick={() => { setAntal(o); setStep('mat') }}
                    className={`w-full text-left px-6 py-4 border text-sm transition-all hover:border-ink hover:bg-bone ${
                      antal === o ? 'bg-ink text-bone border-ink' : 'border-border text-ink bg-transparent'
                    }`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEG 2: Mat */}
          {step === 'mat' && (
            <div className="fade-up">
              <div className="eyebrow text-muted-foreground mb-3">Fråga 2 av 3</div>
              <h3 className="font-display text-3xl text-ink mb-8">Vad ska ni äta?</h3>
              <div className="grid grid-cols-2 gap-3">
                {matOptions.map((o) => (
                  <button key={o.value} onClick={() => { setMat(o.value); setStep('stamning') }}
                    className={`text-left px-5 py-3 border text-sm transition-all hover:border-ink hover:bg-bone ${
                      mat === o.value ? 'bg-ink text-bone border-ink' : 'border-border text-ink bg-transparent'
                    }`}>
                    {o.label}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('antal')} className="mt-6 eyebrow text-muted-foreground hover:text-ink transition-colors">
                ← Tillbaka
              </button>
            </div>
          )}

          {/* STEG 3: Stämning */}
          {step === 'stamning' && (
            <div className="fade-up">
              <div className="eyebrow text-muted-foreground mb-3">Fråga 3 av 3</div>
              <h3 className="font-display text-3xl text-ink mb-8">Vilken stämning?</h3>
              <div className="flex flex-col gap-3">
                {stamningOptions.map((o) => (
                  <button key={o.value} onClick={() => { setStamning(o.value); setStep('email') }}
                    className={`w-full text-left px-6 py-4 border text-sm transition-all hover:border-ink hover:bg-bone ${
                      stamning === o.value ? 'bg-ink text-bone border-ink' : 'border-border text-ink bg-transparent'
                    }`}>
                    {o.label}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('mat')} className="mt-6 eyebrow text-muted-foreground hover:text-ink transition-colors">
                ← Tillbaka
              </button>
            </div>
          )}

          {/* STEG 4: Email */}
          {step === 'email' && (
            <div className="fade-up">
              <div className="eyebrow text-muted-foreground mb-3">Sista steget</div>
              <h3 className="font-display text-3xl text-ink mb-3">Klart. Var skickar vi ditt val?</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Vi har gjort jobbet. Ange din e-post så skickar vi rätt Apolinaire till din kväll, med pairingstips och direktlänk.
              </p>
              <div className="bg-bone border border-border p-6 mb-8 text-sm text-muted-foreground">
                <div className="eyebrow mb-3 text-ink">Din kväll</div>
                <div className="grid grid-cols-3 gap-4">
                  <div><span className="eyebrow text-muted-foreground block mb-1">Sällskap</span>{antal}</div>
                  <div><span className="eyebrow text-muted-foreground block mb-1">Mat</span>{matOptions.find(m => m.value === mat)?.label}</div>
                  <div><span className="eyebrow text-muted-foreground block mb-1">Stämning</span>{stamningOptions.find(s => s.value === stamning)?.label}</div>
                </div>
              </div>
              <form onSubmit={handleEmail}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="din@email.se"
                  className="w-full border border-border bg-bone px-5 py-4 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink mb-4 transition-colors"
                  required
                />
                {emailError && <p className="text-sm mb-3" style={{ color: '#c0392b' }}>{emailError}</p>}

                {/* GDPR-samtycke */}
                <div className={`border p-4 mb-4 transition-colors ${consentError ? 'border-red-400 bg-red-50' : 'border-border bg-white/50'}`}>
                  <div className="eyebrow text-muted-foreground mb-3" style={{ fontSize: '0.55rem' }}>INTEGRITET & SAMTYCKE</div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={e => { setConsent(e.target.checked); setConsentError(false) }}
                      className="mt-0.5 flex-shrink-0 accent-[#1A1A18]"
                    />
                    <span className="text-xs leading-relaxed text-ink">
                      Jag godkänner att Apolinaire sparar min e-postadress för att skicka min dryckesrekommendation samt relevant kommunikation. Läs vår{' '}
                      <button
                        type="button"
                        onClick={() => setShowPolicy(true)}
                        className="underline hover:text-muted-foreground transition-colors"
                      >
                        integritetspolicy
                      </button>
                      .
                    </span>
                  </label>
                  {consentError && (
                    <p className="text-xs mt-2 ml-6" style={{ color: '#c0392b' }}>Du måste godkänna för att gå vidare.</p>
                  )}
                </div>

                {/* Modal: integritetspolicy */}
                {showPolicy && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6"
                    style={{ background: 'rgba(26,26,24,0.6)', backdropFilter: 'blur(4px)' }}
                    onClick={() => setShowPolicy(false)}
                  >
                    <div
                      className="bg-bone border border-border max-w-md w-full p-8 relative"
                      onClick={e => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => setShowPolicy(false)}
                        className="absolute top-4 right-5 text-muted-foreground hover:text-ink transition-colors text-lg leading-none"
                      >
                        ×
                      </button>
                      <div className="eyebrow text-muted-foreground mb-6" style={{ fontSize: '0.55rem' }}>INTEGRITETSPOLICY · APOLINAIRE</div>
                      <div className="space-y-4 text-xs leading-relaxed text-muted-foreground">
                        <p><span className="font-medium text-ink">Personuppgiftsansvarig</span><br />Apolinaire · hej@apolinaire.se</p>
                        <p><span className="font-medium text-ink">Vad vi samlar in</span><br />Din e-postadress.</p>
                        <p><span className="font-medium text-ink">Varför</span><br />För att skicka din dryckesrekommendation och, med ditt samtycke, relevant information om Apolinaires produkter.</p>
                        <p><span className="font-medium text-ink">Rättslig grund</span><br />Ditt frivilliga samtycke (GDPR artikel 6.1 a). Du kan återkalla det när som helst utan negativa konsekvenser.</p>
                        <p><span className="font-medium text-ink">Lagringstid</span><br />Tills du avslutar prenumerationen eller begär radering.</p>
                        <p><span className="font-medium text-ink">Dina rättigheter</span><br />Tillgång, rättelse, radering, begränsning och dataportabilitet. Kontakta oss på hej@apolinaire.se.</p>
                        <p><span className="font-medium text-ink">Tredje part</span><br />Vi delar inte dina uppgifter utan ditt medgivande.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPolicy(false)}
                        className="mt-8 eyebrow text-ink border-b border-ink pb-0.5 hover:opacity-60 transition-opacity text-xs"
                      >
                        Stäng
                      </button>
                    </div>
                  </div>
                )}

                <Button variant="ghostLine" size="editorial" className="w-full justify-center">
                  Visa vad vi valt åt dig →
                </Button>
              </form>
              <button onClick={() => setStep('stamning')} className="mt-6 eyebrow text-muted-foreground hover:text-ink transition-colors">
                ← Tillbaka
              </button>
            </div>
          )}

          {/* RESULTAT */}
          {step === 'result' && result && (
            <div className="fade-up text-center">
              <div className="eyebrow text-muted-foreground mb-4">Vi har valt åt dig</div>
              <div className="border border-border bg-bone p-10 mb-8">
                <div className="font-display text-6xl text-ink mb-2">{result.name}</div>
                <div className="font-display text-2xl text-ink mb-6">{result.sub}</div>
                {result.medal && (
                  <div className="eyebrow text-muted-foreground mb-6">★ {result.medal}</div>
                )}
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs mx-auto">{result.desc}</p>
                <div className="border-t border-border pt-6">
                  <div className="eyebrow text-muted-foreground mb-3">Passar till</div>
                  <p className="text-ink text-sm">{result.pairings.join(' · ')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild variant="ghostLine" size="editorial">
                  <a href={SHOP_URL} target="_blank" rel="noreferrer">
                    Beställ {result.name} via Mylla →
                  </a>
                </Button>
                <button onClick={reset} className="eyebrow text-muted-foreground hover:text-ink transition-colors mt-2">
                  Gör om guiden
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { SHOP_URL } from '@/data/products'
import { imgSrc } from '@/lib/img'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone py-20 border-t border-bone/10">
      <div className="container-editorial">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-display text-2xl mb-4">Apolinaire</div>
            <p className="text-sm text-bone/60 leading-relaxed max-w-xs">
              Gastronomisk smakförhöjare. Alkoholfritt för dem som väljer smaken.
            </p>
          </div>
          <div>
            <div className="eyebrow text-bone/40 mb-6">Navigation</div>
            <ul className="space-y-3">
              {[
                { label: 'Våra drycker', href: '/smaker' },
                { label: 'För företag', href: '/for-servering' },
                { label: 'Inspiration', href: '/journal' },
                { label: 'Beställ', href: SHOP_URL, external: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      className="text-sm text-bone/70 hover:text-bone transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="text-sm text-bone/70 hover:text-bone transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-bone/40 mb-6">Kontakt</div>
            <p className="text-sm text-bone/60">hej@apolinaire.se</p>
            <a href="https://www.instagram.com/apolinairedryck/" target="_blank" rel="noreferrer"
              className="text-sm text-bone/60 hover:text-bone transition-colors mt-3 inline-block">
              Instagram →
            </a>
            <div className="mt-6">
              <img src={imgSrc('/images/nobel-emblem.png')} alt="Leverantör Nobelmiddag 2025" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
            </div>
          </div>
        </div>
        <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eyebrow text-bone/30">© 2025 Apolinaire</p>
          <p className="eyebrow text-bone/30">Alkoholfri gastronomi</p>
        </div>
      </div>
    </footer>
  )
}

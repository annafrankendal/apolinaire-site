export const SHOP_URL = 'https://mylla.se/sv-se/products/brand/apolinaire'

export type Product = {
  id: string
  name: string
  sub: string
  desc: string
  pairings: string[]
  tags: string[]
  medal?: string
  nobel?: boolean
}

export const products: Product[] = [
  {
    id: 'no1',
    name: 'No1',
    sub: 'Äpple & Citron',
    desc: 'En blandning av utvalda äpplens sötma tillsammans med syra från citronjuice.',
    pairings: ['Rostat surdegsbröd med avokado, olivolja och örtsalt'],
    tags: ['lätt', 'vegetariskt', 'förrätt', 'frukost', 'frisk'],
  },
  {
    id: 'no2',
    name: 'No2',
    sub: 'Äpple, Citron & Rosmarin',
    desc: 'En komposition av noga utvalda äpplen, syra från citron och en pepprig twist av rosmarin.',
    pairings: ['Fisk', 'Grillad kyckling', 'Helstekt lamm med frisk potatissallad'],
    tags: ['fisk', 'kyckling', 'lamm', 'grillat', 'medelhav'],
  },
  {
    id: 'no3',
    name: 'No3',
    sub: 'Äpple, Citron & Ingefära',
    desc: 'Sommelierens favorit. Gjord på utvalda äpple, citron och ingefära. Hög syra och kittlande styrka.',
    pairings: ['Sushi', 'Heta fisk- och skaldjursrätter', 'Kyckling med thailändska smaker'],
    tags: ['sushi', 'skaldjur', 'fisk', 'asiatiskt', 'kyckling', 'stark', 'exklusiv'],
    medal: 'Bronsmedalj must-SM 2022',
    nobel: true,
  },
  {
    id: 'no4',
    name: 'No4',
    sub: 'Äpple, Lingon & Lime',
    desc: 'De söta tonerna hos äpplet balanseras med syrliga lingon och juice av lime. Ljusröd och frisk.',
    pairings: ['Torsk med riven pepparrot', 'Wallenbergare med ärtor och brynt smör'],
    tags: ['svensk', 'klassisk', 'fisk', 'kött', 'husmanskost', 'romantisk'],
  },
  {
    id: 'no5',
    name: 'No5',
    sub: 'Äpple, Blåbär, Lime & Mynta',
    desc: 'Blåbären tar plats medan limesaften och myntan bidrar med syra och en frisk örtton.',
    pairings: ['Texas chili', 'Smakrika långkok', 'Guacamole', 'Rostad majs och krispig sallad'],
    tags: ['stark', 'långkok', 'tex-mex', 'smakrik', 'fest', 'sällskap'],
    medal: 'Silvermedalj must-SM 2022',
  },
  {
    id: 'no6',
    name: 'No6',
    sub: 'Äpple, Svarta vinbär, Lime & Fänkål',
    desc: 'Svartvinbärens sura strävhet balanseras med sött äpple och lim. Fänkål ger en diskret lakritston.',
    pairings: ['Vilt', 'Gräddiga fiskgrytor', 'Rostade rotsaker med fetaostcreme'],
    tags: ['vilt', 'höst', 'rotsaker', 'vegetariskt', 'grytor', 'exklusiv', 'romantisk'],
    medal: 'Silvermedalj must-SM 2022',
  },
  {
    id: 'no7',
    name: 'No7',
    sub: 'Äpple, Blåbär, Citron & Dragon',
    desc: 'En av våra mest komplexa smaker. Äpple, blåbär, citron och dragon — en favorit på Apolinaire.',
    pairings: ['Grillat', 'Grillad halloumi', 'Potatis och grönsaker'],
    tags: ['grillat', 'vegetariskt', 'sommar', 'fest', 'halloumi', 'sällskap'],
    medal: 'Silvermedalj must-SM 2022',
  },
]

// Rekommendationsmotor
export function getRecommendation(mat: string, stamning: string): Product {
  const scores: Record<string, number> = {}
  products.forEach(p => { scores[p.id] = 0 })

  // Matpoäng
  const matMap: Record<string, string[]> = {
    fisk: ['no2', 'no3', 'no4'],
    skaldjur: ['no3', 'no2'],
    sushi: ['no3'],
    kyckling: ['no2', 'no3'],
    kött: ['no4', 'no6'],
    vilt: ['no6'],
    grillat: ['no7', 'no2'],
    vegetariskt: ['no7', 'no1', 'no6'],
    pasta: ['no2', 'no1'],
    soppa: ['no5', 'no6'],
    långkok: ['no5', 'no6'],
    husmanskost: ['no4'],
    asiatiskt: ['no3', 'no5'],
    forrätt: ['no1', 'no7'],
  }

  const stämningMap: Record<string, string[]> = {
    romantisk: ['no4', 'no6', 'no1'],
    fest: ['no5', 'no7'],
    exklusiv: ['no3', 'no6'],
    avslappnad: ['no1', 'no7'],
    sommar: ['no7', 'no4'],
  }

  const matKey = mat.toLowerCase()
  const stamningKey = stamning.toLowerCase()

  Object.entries(matMap).forEach(([key, ids]) => {
    if (matKey.includes(key)) ids.forEach((id, i) => { scores[id] += (3 - i) })
  })

  Object.entries(stämningMap).forEach(([key, ids]) => {
    if (stamningKey.includes(key)) ids.forEach((id, i) => { scores[id] += (2 - i) })
  })

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
  return products.find(p => p.id === best) || products[2]
}

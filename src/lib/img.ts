const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const imgSrc = (path: string) => `${base}${path}`

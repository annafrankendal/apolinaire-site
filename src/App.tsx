import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Index from '@/pages/Index'
import ForHemmet from '@/pages/ForHemmet'
import ForServering from '@/pages/ForServering'
import JournalFisk from '@/pages/JournalFisk'
import JournalMiddag from '@/pages/JournalMiddag'
import JournalSkaldjur from '@/pages/JournalSkaldjur'
import Smaker from '@/pages/Smaker'
import Journal from '@/pages/Journal'
import './index.css'

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/for-hemmet" element={<ForHemmet />} />
        <Route path="/foretag" element={<ForServering />} />
        <Route path="/journal/fisk" element={<JournalFisk />} />
        <Route path="/journal/middagsupplevelse" element={<JournalMiddag />} />
        <Route path="/journal/skaldjur" element={<JournalSkaldjur />} />
        <Route path="/smaker" element={<Smaker />} />
        <Route path="/inspiration" element={<Journal />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

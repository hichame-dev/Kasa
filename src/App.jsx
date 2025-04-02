import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Error404 from './pages/Error404'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="main-container">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </div>

      <Footer /> {/* En dehors de .main-container, donc pas impacté par le padding global */}
    </>
  )
}

export default App

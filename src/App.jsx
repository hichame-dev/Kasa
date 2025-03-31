// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Error404 from './pages/Error404'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  )
}

export default App

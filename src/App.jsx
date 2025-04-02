import React, { useState, useEffect } from 'react'; // Importe useState et useEffect
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/Error404';
import Layout from './components/Layout';
import Footer from './components/Footer';
import logementsData from './components/data/logements.json'; // Importe le fichier JSON des logements (vérifie le chemin !)




function App() {
  const [logements, setLogements] = useState([]); // State pour stocker les logements

  useEffect(() => {
    // Charge les données au montage de l'application
    setLogements(logementsData);
  }, []);

  return (
    <>
      <div className="main-container">
        <Layout>
          <Routes>
            <Route path="/" element={<Home logements={logements} />} /> {/* Passe la prop 'logements' à Home */}
            <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </div>
      <Footer />
    </>
  );
}

export default App;
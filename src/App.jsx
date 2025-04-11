import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/Error404';
import logementsData from './components/data/logements.json';
import APropos from './pages/APropos';

import { useEffect, useState } from 'react';

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home logements={logements} />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;

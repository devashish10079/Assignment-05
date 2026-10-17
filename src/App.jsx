
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import DrinkDetails from './Pages/DrinkDetails';
import Favourites from './Pages/Favourites';
import NotFound from './Pages/NotFound';

function App() {
  const [favourites, setFavourites] = useState([]);

  function toggleFavourite(drink) {
    setFavourites((current) =>
      current.some((item) => item.idDrink === drink.idDrink)
        ? current.filter((item) => item.idDrink !== drink.idDrink)
        : [...current, drink]
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/drinks"
          element={
            <Drinks
              favourites={favourites}
              onToggleFavourite={toggleFavourite}
            />
          }
        />

        <Route
          path="/drinks/:id"
          element={<DrinkDetails />}
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              onToggleFavourite={toggleFavourite}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

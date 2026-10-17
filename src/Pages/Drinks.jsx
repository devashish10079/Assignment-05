import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';
import Loading from '../components/Loading';

function Drinks({ favourites = [], onToggleFavourite = () => {} }) {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getDrinks() {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
        );

        if (!response.ok) {
          throw new Error('Failed to load mocktails.');
        }

        const data = await response.json();
        setDrinks(data.drinks || []);
      } catch (error) {
        setError('Failed to load mocktails. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    getDrinks();
  }, []);

  const filteredDrinks = drinks.filter((drink) =>
    drink.strDrink.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="page-container drinks-page">
      <section className="page-heading">
        <p className="eyebrow">THE MOCKTAIL COLLECTION</p>
        <h1>Find Your Perfect Sip</h1>
        <p>
          Refreshing recipes, beautiful flavours, and absolutely no alcohol.
        </p>
      </section>

      <div className="search-wrapper">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search mocktails by name..."
          aria-label="Search mocktails by name"
        />

        {search && (
          <button type="button" onClick={() => setSearch('')}>
            Clear
          </button>
        )}
      </div>

      {/* {loading && <p className="status-message">Loading mocktails...</p>} */}
      {loading && <Loading />}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <p className="results-heading">
            {filteredDrinks.length} mocktail
            {filteredDrinks.length !== 1 ? 's' : ''} found
          </p>

          {filteredDrinks.length > 0 ? (
            <div className="drinks-grid">
              {filteredDrinks.map((drink) => (
                <DrinkCard
                  key={drink.idDrink}
                  drink={drink}
                  isFavourite={favourites.some(
                    (item) => item.idDrink === drink.idDrink
                  )}
                  onToggleFavourite={onToggleFavourite}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No mocktails found 🥤</h2>
              <p>Try another name or clear your search.</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Drinks;

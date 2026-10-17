
import { Link } from 'react-router';
import DrinkCard from '../components/DrinkCard';

function Favourites({ favourites, onToggleFavourite }) {
  return (
    <main className="page-container">
      <h1 className="page-heading">Your Favourites ♥</h1>
      <p style={{ textAlign: 'center', color: '#66716a', marginBottom: '35px' }}>
        Your personal collection of refreshing mocktails.
      </p>

      {favourites && favourites.length > 0 ? (
        <div className="drinks-grid">
          {favourites.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              isFavourite={true}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div style={{ fontSize: '55px', marginBottom: '15px' }}>♡</div>
          <h2>No favourites yet</h2>
          <p>Explore the menu and save the mocktails you love.</p>
          <Link to="/drinks" className="primary-button">
            Explore the Menu →
          </Link>
        </div>
      )}
    </main>
  );
}

export default Favourites;

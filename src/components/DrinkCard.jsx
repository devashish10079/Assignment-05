
import { Link } from 'react-router';

function DrinkCard({ drink, isFavourite, onToggleFavourite }) {
  return (
    <article className="drink-card">
      <Link
        to={`/drinks/${drink.idDrink}`}
        className="drink-image-link"
      >
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="drink-image"
          loading="lazy"
        />
      </Link>

      <button
        type="button"
        className={`favourite-button ${isFavourite ? 'selected' : ''}`}
        onClick={() => onToggleFavourite(drink)}
        aria-label={
          isFavourite
            ? `Remove ${drink.strDrink} from favourites`
            : `Add ${drink.strDrink} to favourites`
        }
      >
        {isFavourite ? '❤️' : '💔'}
      </button>

      <div className="drink-card-content">
        <h3>
          <Link to={`/drinks/${drink.idDrink}`}>
            {drink.strDrink}
          </Link>
        </h3>

        <div className="drink-card-footer">
          <span>Alcohol-free</span>
          <Link
            to={`/drinks/${drink.idDrink}`}
            className="view-recipe"
          >
            View recipe →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DrinkCard;

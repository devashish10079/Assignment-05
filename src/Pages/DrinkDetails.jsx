import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getDrink() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error('Failed to load recipe.');
        }

        const data = await response.json();

        if (!data.drinks || data.drinks.length === 0) {
          throw new Error('Recipe not found.');
        }

        setDrink(data.drinks[0]);
      } catch (error) {
        setError('Failed to load recipe. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    getDrink();
  }, [id]);

  if (loading) {
    return (
      <main className="page-container">
        <p className="status-message">Loading recipe...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-container">
        <p className="error-message">{error}</p>
        <Link to="/drinks" className="primary-button">
          Back to Menu
        </Link>
      </main>
    );
  }

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const name = drink[`strIngredient${i}`]?.trim();
    const measure = drink[`strMeasure${i}`]?.trim();

    if (name) {
      ingredients.push({ name, measure });
    }
  }

  return (
    <main className="page-container recipe-page">
      <Link to="/drinks" className="back-link">
        ← Back to Menu
      </Link>

      <section className="recipe-layout">
        <div className="recipe-image-wrapper">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="recipe-image"
          />
        </div>

        <div className="recipe-info">
          <p className="eyebrow">YOUR NEXT FAVOURITE SIP</p>
          <h1>{drink.strDrink}</h1>

          <div className="recipe-tags">
            <span>{drink.strCategory || 'Mocktail'}</span>
            <span>{drink.strAlcoholic || 'Non-alcoholic'}</span>
          </div>

          <p>
            <strong>Glass:</strong> {drink.strGlass || 'Glass of your choice'}
          </p>

          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <span>{item.measure || 'As needed'}</span>
              </li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <p className="instructions">
            {drink.strInstructions || 'No instructions available.'}
          </p>
        </div>
      </section>
    </main>
  );
}

export default DrinkDetails;

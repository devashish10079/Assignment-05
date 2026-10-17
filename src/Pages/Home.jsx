
import { Link } from 'react-router';

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR MOMENT, YOUR MOCKTAIL</p>

          <h1>
            Sip Something
            <br />
            <span>Extraordinary.</span>
          </h1>

          <p className="hero-description">
            Discover refreshing, alcohol-free drinks made for
            every mood. Find your next favourite sip.
          </p>

          <Link to="/drinks" className="primary-button">
            Explore the Menu <span>→</span>
          </Link>

          <div className="hero-note">
            <span>✦</span> 100% alcohol-free inspiration
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <img
              src="https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=800"
              alt="Refreshing citrus mocktail"
            />
          </div>
          <div className="floating-label">Freshly inspired ✨</div>
        </div>
      </section>

      <section className="home-features">
        <article>
          <span>🍋</span>
          <h3>Fresh Inspiration</h3>
          <p>Explore drinks for every occasion.</p>
        </article>

        <article>
          <span>📖</span>
          <h3>Easy Recipes</h3>
          <p>Discover ingredients and instructions.</p>
        </article>

        <article>
          <span>♥</span>
          <h3>Your Favourites</h3>
          <p>Save drinks you want to try.</p>
        </article>
      </section>
    </main>
  );
}

export default Home;

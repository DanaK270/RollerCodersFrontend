import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="typing-effect" style={{ animation: 'bounceIn 5s ease forwards' }}>
        Welcome to Roller Coders
      </h1>
      <h3 style={{ animation: 'fadeIn 8s ease forwards', opacity: 0, animationDelay: '2s' }}>
        Your Guide to Theme Parks Around The World!
      </h3>
      <div className="textbox" style={{ animation: 'fadeIn 10s ease forwards', opacity: 0, animationDelay: '4s' }}>
        <p>
          Roller Coders is your go-to hub for discovering theme parks worldwide. Whether you're a roller coaster lover, a water park enthusiast, or just in search of family-friendly fun, we have everything you need. Explore our site to find new parks, learn about thrilling rides, and connect with fellow adventure seekers. Begin by browsing our list of parks!
        </p>
      </div>
    </div>
  );
};

export default Home;

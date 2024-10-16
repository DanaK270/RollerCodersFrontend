import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Rollerlogo from '../assets/12.png';
import '../App.css';
import audioFile from '../assets/audio.mp3'; // Adjust the path as necessary

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(currentMode);
    document.body.classList.toggle('dark-mode', currentMode);
    // Play audio when the component mounts
    audioRef.current.play().catch((error) => {
      console.log('Error playing audio:', error);
    });
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/parks?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={Rollerlogo}
            alt="RollerCoders Logo"
            style={{ height: '180px', width: 'auto' }}
          />
        </Link>
      </div>
      <div>
        <Link key="home" to="/">Home</Link>
        <Link key="about" to="/about">About</Link>
        <Link key="parks" to="/parks">Parks</Link>
        <Link key="addpark" to="/addpark">Add a Park</Link>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} 
          placeholder="Explore Parks..."
        />
        <button onClick={handleSearch}>Search</button>

        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>

        <button onClick={toggleAudio}>
          {audioRef.current && !audioRef.current.paused ? 'Pause' : 'Play'} Audio
        </button>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioFile} preload="auto" />
    </nav>
  );
};

export default Nav;

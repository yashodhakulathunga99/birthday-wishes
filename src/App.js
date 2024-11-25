import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [redirectToGallery, setRedirectToGallery] = useState(false);
  const audioRef = useRef(null); // Reference for the audio element

  useEffect(() => {
    // Autoplay the background music when the app loads
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setRedirectToGallery(true);
    }, 4000); // 4 seconds for animation
  };

  if (redirectToGallery) {
    return <Gallery />;
  }

  return (
    <div className="app">
      {/* Background music */}
      <audio ref={audioRef} loop>
        <source src="./music/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!showAnimation ? (
        <button className="birthday-button" onClick={handleClick}>
          Click Here!
        </button>
      ) : (
        <div className="animation">
          <h1 className="birthday-text">🎉 Happy Birthday Baba! 🎉</h1>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg",
    "img16.jpg",
    "img17.jpg",
    "img18.jpg",
    "img19.jpg",
    "img20.jpg",
    "img21.jpg",
    "img22.jpg",
    "img23.jpg",
    "img24.jpg",
    "img25.jpg",
    "img26.jpg",
    "img27.jpg",
    "img28.jpg",
    "img29.jpg",
    "img31.jpg",
  ];

  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the loading message
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowMessage(true); // Show the message after images are loaded
      }, 1000); // 1-second delay to show the message
    }, 2000); // 2 seconds for simulation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="gallery">
      {loading ? (
        <div className="loading-message">
          <h2>Waiting for our memories...</h2>
        </div>
      ) : (
        <>
          <h2>Our Memories!! Scroll Down!!</h2>
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={require(`./images/${img}`)} // Use the correct path to your images folder
                  alt={`Memory ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
          {showMessage && (
            <div className="birthday-message">
              <h3>
                Happy birthday chuti ayye!!! I wish you all the happiness in the
                whole universe. I know that sometimes I make you more annoy, but
                I love you to the moon and back. Though you blame me in vain,
                please know that you're always in my prayers and I always wish
                for you and stand by your side. I promise that I always would get
                your back! Enjoy your day and please enjoy my own little work
                for you!!! I wish you would gain more strength to handle my mood swings and tolerate me throughout your whole life!!!!
              </h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;

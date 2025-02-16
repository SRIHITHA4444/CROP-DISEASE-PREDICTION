import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.styles.css';

function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };
   
  const handleActionClick = (action) => {
    if (action === 'SignUp') {
      navigate('/signup'); 
      console.log(`${action} clicked`);
      // Add handling for other actions if needed
    }
    else if (action === 'Login') {
      navigate('/login'); 
      console.log(`${action} clicked`);
      // Add handling for other actions if needed
    }
  };
  

  return (
    <div className="App">
      <div className="parallax-background">
      <div
          className="geometric-pattern-layer-1"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)` }}
        ></div>
          <div
          className="geometric-pattern-layer-2"
          style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="geometric-pattern-layer-3"
          style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
        ></div>
      </div>
      
      <nav className="navbar">
        <div className="logo">CropSwasthya🌾</div>
            <div className="nav-buttons">
                {['home', 'about'].map((section) => (
                <button
                    key={section}
                    className={`nav-button ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                 >
                 {section.charAt(0).toUpperCase() + section.slice(1)}
                 </button>
              ))}
              {['SignUp', 'Login'].map((action) => (
              <button
                key={action}
                className="nav-button"
                onClick={() => handleActionClick(action)}
              >
              {action.replace('-', ' ')}
              </button>
          ))}
          </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1>Protect your crops from diseases </h1>
          <p>Your AI partner in resilient farming</p>
          <button 
          className="cta-button"
          onClick={() => navigate('/signup')}>
               Get Started
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section id="about" className="about-section">
        <div className="content-wrapper">
          <h2>What is CropSwasthya🌾?</h2>
          <div className="features">
            {[
              { description: 'Powerful AI model for crop disease detection.' },
              { description: 'Accurate analysis based on deep learning.' },
              { description: 'Providing insights to help farmers take action.' }
            ].map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            ))}
          </div>

        </div>
      </section>

      <section className="roadmap-section">
      <h2>How does it work?</h2>
        <div className="parallax-road" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="roadmap-container">
          <div className="roadmap-steps">
            <div className="road-step" style={{ left: '10%' }}>
              <div className="step-marker" style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)` }}>
                <div className="floating-icon">📸</div>
                <div className="pulse-effect"></div>
              </div>
              <div className="step-content">
                <p>Take a photo of your crop</p>
              </div>
            </div>

            <div className="road-step" style={{ left: '50%' }}>
              <div className="step-marker" style={{ transform: `translateY(${Math.sin(scrollY * 0.01 + 50) * 20}px)` }}>
                <div className="floating-icon">⬆️</div>
                <div className="pulse-effect"></div>
              </div>
              <div className="step-content">
                <p>Submit your image</p>
              </div>
            </div>

            <div className="road-step" style={{ left: '90%' }}>
              <div className="step-marker" style={{ transform: `translateY(${Math.sin(scrollY * 0.01 + 100) * 20}px)` }}>
                <div className="floating-icon">🤖</div>
                <div className="pulse-effect"></div>
              </div>
              <div className="step-content">
                <p>Get AI-powered results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="copyright">
          <p>© {new Date().getFullYear()} CropSwasthya🌾. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
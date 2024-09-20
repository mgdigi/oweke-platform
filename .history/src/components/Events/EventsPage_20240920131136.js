import React, { useState } from 'react';
import './EventsPage.css';
import EventHeroImage from '../../assets/event-hero.png';
import EventCardImage from '../../assets/event-card.png';

const eventsData = [
  {
    id: 1,
    title: "Rencontres : entre hommes et femmes",
    date: "2023-04-14",
    time: "20:00 à 22:00",
    ageRange: "45 à 54 ans",
    region: "Paris",
    category: "Men",
    genderPreference: "Mixed",
    price: 10,
    image: EventCardImage,
  },
  {
    id: 2,
    title: "Networking Event",
    date: "2023-05-20",
    time: "14:00 à 16:00",
    ageRange: "25 à 34 ans",
    region: "Lyon",
    category: "Women",
    genderPreference: "Women Only",
    price: 5,
    image: EventCardImage,
  },
];

const EventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGenderPreference, setSelectedGenderPreference] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [loading, setLoading] = useState(false);

  const regions = ["Paris", "Lyon", "Marseille"];
  const categories = ["Men", "Women"];
  const ageRanges = ["18 à 24 ans", "25 à 34 ans", "35 à 44 ans", "45 à 54 ans"];
  const genderPreferences = ["Mixed", "Men Only", "Women Only"];
  const priceRanges = ["0-5", "6-10", "11-20"];

  const handleFilterChange = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = eventsData;

      if (selectedRegion) {
        filtered = filtered.filter(event => event.region === selectedRegion);
      }

      if (selectedCategory) {
        filtered = filtered.filter(event => event.category === selectedCategory);
      }

      if (selectedAgeRange) {
        filtered = filtered.filter(event => event.ageRange === selectedAgeRange);
      }

      if (selectedDate) {
        filtered = filtered.filter(event => event.date === selectedDate);
      }

      if (selectedTime) {
        filtered = filtered.filter(event => event.time === selectedTime);
      }

      if (selectedGenderPreference) {
        filtered = filtered.filter(event => event.genderPreference === selectedGenderPreference);
      }

      if (selectedPriceRange) {
        const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
        filtered = filtered.filter(event => event.price >= minPrice && event.price <= maxPrice);
      }

      setFilteredEvents(filtered);
      setLoading(false);
    }, 500);
  };

  const handleResetFilters = () => {
    setSelectedRegion("");
    setSelectedCategory("");
    setSelectedAgeRange("");
    setSelectedDate("");
    setSelectedTime("");
    setSelectedGenderPreference("");
    setSelectedPriceRange("");
    setFilteredEvents(eventsData);
  };

  return (
    <div className="events-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo-text">OWEKE</h1>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/events">Community Events</a></li>
          <li><a href="/counseling">Conseiller Love</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-image">
          <img src={EventHeroImage} alt="Events" />
        </div>
      </header>

      <div className="content-container">
        {/* Sidebar for Filters */}
        <aside className="sidebar">
          <h3>Filter Events</h3>
          <div className="filter-item">
            <label>Région:</label>
            <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
              <option value="">Voir liste</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="filter-item">
            <label>Catégorie:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="">Voir liste</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="filter-item">
            <label>Tranches d'âges:</label>
            <select value={selectedAgeRange} onChange={e => setSelectedAgeRange(e.target.value)}>
              <option value="">Voir liste</option>
              {ageRanges.map(ageRange => (
                <option key={ageRange} value={ageRange}>{ageRange}</option>
              ))}
            </select>
          </div>
          <div className="filter-item">
            <label>Date:</label>
            <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Heure:</label>
            <input type="time" value={selectedTime} onChange={e => setSelectedTime(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Préférence de Genre:</label>
            <select value={selectedGenderPreference} onChange={e => setSelectedGenderPreference(e.target.value)}>
              <option value="">Voir liste</option>
              {genderPreferences.map(preference => (
                <option key={preference} value={preference}>{preference}</option>
              ))}
            </select>
          </div>
          <div className="filter-item">
            <label>Plage de Prix:</label>
            <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
              <option value="">Voir liste</option>
              {priceRanges.map(priceRange => (
                <option key={priceRange} value={priceRange}>{priceRange} €</option>
              ))}
            </select>
          </div>
          <button onClick={handleFilterChange} className="btn">Apply Filters</button>
          <button onClick={handleResetFilters} className="btn">Reset Filters</button>
        </aside>

        {/* Upcoming Events */}
        <main className="upcoming-events">
          <h3>Évènements à venir :</h3>
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <div className="events-list">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <div key={event.id} className="event-card">
                    <img src={event.image} alt={event.title} />
                    <h4>{event.title}</h4>
                    <p>Quand : {event.date}</p>
                    <p>Horraire : {event.time}</p>
                    <p>Tranches d'âges : {event.ageRange}</p>
                    <p>Prix : {event.price} €</p>
                    <button className="btn">Reserver Votre Ticket</button>
                    <button className="btn">En savoir plus</button>
                    <div className="advertisement">
                      <p>Publicité ici</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-events-message">No events found</p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="/live-dating">Live Dating</a></li>
              <li><a href="/events">Community Events</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
            <ul>
              <li><a href="/signin">Se connecter</a></li>
              <li><a href="/partners">Espace Partenaires</a></li>
              <li><a href="/signup">S’inscrire</a></li>
            </ul>
            <ul>
              <li><a href="/privacy">Politique de confidentialité</a></li>
              <li><a href="/terms">CGV</a></li>
            </ul>
          </div>
          <p>Copyright © 2023 Oweke</p>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
import React, { useState } from 'react';
import './EventsPage.css';
import EventCardImage from '../../assets/event-card.jpg';
import EventCard2Image from '../../assets/event-card2.jpg';

import Header from '../header';
import Footer from '../footer';

const eventsData = [
  {
    id: 1,
    title: "Rencontres : entre hommes et femmes",
    date: "2023-04-14",
    time: "20:00 à 22:00",
    ageRange: "45 à 54 ans",
    region: "Paris",
    category: "Homme",
    genderPreference: "Mixte",
    price: 10,
    image: EventCardImage,
  },
  {
    id: 2,
    title: "Événement de réseautage",
    date: "2023-05-20",
    time: "14:00 à 16:00",
    ageRange: "25 à 34 ans",
    region: "Lyon",
    category: "Femme",
    genderPreference: "Femmes uniquement",
    price: 5,
    image: EventCard2Image,
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
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [videoCallLink, setVideoCallLink] = useState("");

  const regions = ["Paris", "Lyon", "Marseille"];
  const categories = ["Homme", "Femme"];
  const ageRanges = ["18 à 24 ans", "25 à 34 ans", "35 à 44 ans", "45 à 54 ans"];
  const genderPreferences = ["Mixte", "Hommes uniquement", "Femmes uniquement"];
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

  const handleBooking = (eventId) => {
    setLoading(true); // Simulate booking process
    setTimeout(() => {
      const event = eventsData.find(e => e.id === eventId);
      setSelectedEvent(event);
      setBookingSuccess(true);

      // Generate dynamic video call link (you can use Zoom, Jitsi, etc.)
      const generatedVideoLink = `https://zoom.us/j/1234567890?event=${event.id}`; // Example Zoom link
      setVideoCallLink(generatedVideoLink);

      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Header />

      <section class="breadcrumb-section set-bg" data-setbg="img/event-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>Nos Evenements </h2>
                  
                    </div>
                </div>
            </div>
        </div>
    </section>

      <div className="content-container">
        <aside className="sidebar">
          <h3>Filtrer les événements</h3>
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
          <button onClick={handleFilterChange} className="btn">Appliquer les filtres</button>
          <button onClick={handleResetFilters} className="btn">Réinitialiser les filtres</button>
        </aside>

        <main className="upcoming-events">
          <h3>Événements à venir :</h3>
          {loading ? (
            <div className="loading-spinner">Chargement...</div>
          ) : bookingSuccess ? (
            <div className="booking-confirmation">
              <h3>Réservation réussie pour l'événement : {selectedEvent.title}</h3>
              <p>Date : {selectedEvent.date}</p>
              <p>Heure : {selectedEvent.time}</p>
              <p>Vous pouvez maintenant rejoindre l'appel vidéo :</p>
              <a href={videoCallLink} target="_blank" rel="noopener noreferrer">
                Cliquez ici pour rejoindre la réunion
              </a>
            </div>
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
                    <button className="btn" onClick={() => handleBooking(event.id)}>
                      Réserver votre billet
                    </button>
                    <button className="btn">En savoir plus</button>
                    <div className="advertisement">
                      <p>Publicité ici</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-events-message">Aucun événement trouvé</p>
              )}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
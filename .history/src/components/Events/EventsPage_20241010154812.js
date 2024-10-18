import React, { useState, useEffect } from 'react';
import './EventsPage.css';

// Sample event data (can be replaced with real API data)
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
    image: "https://via.placeholder.com/150",
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
    image: "https://via.placeholder.com/150",
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState(eventsData); // Initialize with sample data
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [videoCallLink, setVideoCallLink] = useState("");

  // Function to simulate booking an event
  const handleBooking = (eventId) => {
    setLoading(true); // Show loading while booking

    setTimeout(() => {
      const event = events.find(e => e.id === eventId);
      setSelectedEvent(event);
      setBookingSuccess(true);

      // Simulate generating a Zoom or Jitsi link dynamically
      const generatedVideoLink = `https://zoom.us/j/1234567890?event=${event.id}`; // Example Zoom link
      setVideoCallLink(generatedVideoLink);

      setLoading(false); // Stop loading
    }, 1000); // Simulate 1-second delay for booking process
  };

  return (
    <div className="events-page">
      <h3>Événements à venir :</h3>
      {loading ? (
        <div className="loading-spinner">Chargement...</div>
      ) : (
        <div className="events-list">
          {!bookingSuccess ? (
            events.map(event => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h4>{event.title}</h4>
                <p>Date : {event.date}</p>
                <p>Horaire : {event.time}</p>
                <p>Tranche d'âge : {event.ageRange}</p>
                <p>Prix : {event.price} €</p>
                <button className="btn" onClick={() => handleBooking(event.id)}>
                  Réserver votre billet
                </button>
              </div>
            ))
          ) : (
            <div className="booking-confirmation">
              <h3>Réservation réussie pour l'événement : {selectedEvent.title}</h3>
              <p>Date : {selectedEvent.date}</p>
              <p>Heure : {selectedEvent.time}</p>
              <p>Vous pouvez maintenant rejoindre l'appel vidéo :</p>
              <a href={videoCallLink} target="_blank" rel="noopener noreferrer">
                Cliquez ici pour rejoindre la réunion
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
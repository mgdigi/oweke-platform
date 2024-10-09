import React, { useState } from 'react';
import appointmentService from '../../services/appointmentService';

const AppointmentForm = ({ counselorId }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleSubmit = (e) => {
    e.preventDefault();
    appointmentService.bookAppointment(counselorId, selectedDate, paymentMethod)
      .then(response => alert('Appointment booked successfully!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <label>Payment Method:</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="online">Online</option>
        <option value="on-site">On-site</option>
      </select>
      <button type="submit">Réservez Votre Créneau Payant</button>
    </form>
  );
};

export default AppointmentForm;
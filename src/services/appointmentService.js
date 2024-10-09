const appointmentService = {
    bookAppointment: async (counselorId, date, paymentMethod) => {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ counselorId, date, paymentMethod }),
      });
      return await response.json();
    },
  };
  
  export default appointmentService;
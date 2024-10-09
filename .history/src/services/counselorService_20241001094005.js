const counselorService = {
    getAllCounselors: async () => {
      // Replace this with your actual backend call
      const response = await fetch('/api/counselors');
      return await response.json();
    },
  
    getCounselorById: async (id) => {
      const response = await fetch(`/api/counselors/${id}`);
      return await response.json();
    },
  
    searchBySpecialty: async (specialty) => {
      const response = await fetch(`/api/counselors/search?specialty=${specialty}`);
      return await response.json();
    },
  };
  
  export default counselorService;
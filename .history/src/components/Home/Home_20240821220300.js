/* General Styles */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #4A4A4A;
  margin: 0;
  padding: 0;
  background-color: #f8f9fc;  /* Background color from the image */
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
}

.logo img {
  height: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #4A4A4A;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b969d4; /* Hover color matching the design */
}

.get-app-button {
  background-color: #b969d4; /* Purple button background */
  color: #fff;
  padding: 10px 25px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-app-button:hover {
  background-color: #a155bc; /* Slightly darker purple on hover */
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px;
  background-color: #fff;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.hero-content {
  max-width: 600px;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

/* Content Sections */
section {
  padding: 60px 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

section h2, section h3 {
  font-size: 36px;
  color: #4A4A4A;
  margin-bottom: 20px;
}

section p {
  font-size: 18px;
  color: #6d6d6d;
  margin-bottom: 40px;
}

.section-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.cta-button {
  background-color: #b969d4;
  color: #fff;
  padding: 15px 40px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #a155bc;
}

/* Footer */
.footer {
  background-color: #4A4A4A;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
}

.footer-content h4 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-content p {
  font-size: 18px;
  margin-bottom: 20px;
}

.footer-links {
  margin-top: 20px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #b969d4;
}
.simple-use p {
  font-size: 16px;
  color: #6d6d6d;
  margin-bottom: 20px;
}

/* Section Title Underline */
.underline {
  position: relative;
  color: #2E2E2E; /* Text color */
}

.underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px; /* Adjust the position below the text */
  width: 100%;
  height: 2px; /* Adjust the thickness of the underline */
  background-color: #b969d4; /* Pink color */
  border-bottom: 3px solid #b969d4; /* Adds the pink border beneath */
}

/* Footer */
.footer {
  background-color: #12002B; /* Dark purple background */
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  border-radius: 40px 40px 0 0; /* Rounded top corners */
  margin-top: 40px;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer h4 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer p {
  font-size: 16px;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 60px; /* Increase gap for spacing between columns */
  margin-top: 20px;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #fff; /* Ensure text is white */
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #b969d4; /* Hover color */
}

/* Footer images */
.footer-image {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 200px; /* Adjust size as needed */
}

/* Newsletter Section */
.newsletter-section {
  background-color: #17002B; /* Use the same purple as the footer */
  padding: 80px 20px; /* Increased padding for more space */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.newsletter-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* Increased margin for more space */
  text-align: center;
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.newsletter-form input[type="email"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 250px;
}

.newsletter-form button {
  background-color: #FF6C3E;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.newsletter-form button:hover {
  background-color: #FF5430;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px; /* Increased margin for more space */
}

.social-icons a {
  background-color: #0D001A;
  padding: 10px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.social-icons a img {
  width: 24px;
  height: 24px;
}

/* Footer */
.footer {
  background-color: #17002B;
  color: white;
  padding: 80px 20px; /* Increased padding for more space */
  margin-top: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin-bottom: 20px;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 20px; /* Increased margin for more space */
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-image {
  margin-top: 20px;
}

.copyright {
  text-align: center;
  margin-top: 30px; /* Increased margin for more space */
  font-size: 14px;
  color: #ccc;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .hero-section, .community-events, .simple-use {
      flex-direction: column;
      align-items: flex-start;
  }

  .hero-content, .community-events .content, .simple-use .content {
      max-width: 100%;
      margin-bottom: 20px;
  }

  .hero-image img, .section-image, .simple-use .image {
      max-width: 100%;
      margin-left: 0;
  }

  .footer-links {
      flex-direction: column;
      align-items: center;
  }

  .footer-links ul {
      margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .navbar {
      flex-direction: column;
      align-items: flex-start;
  }

  .nav-links {
      flex-direction: column;
      gap: 10px;
  }

  .get-app-button {
      width: 100%;
      text-align: center;
  }

  .hero-content h1 {
      font-size: 28px;
  }

  .hero-content p {
      font-size: 16px;
  }

  .cta-button {
      width: 100%;
      text-align: center;
  }

  .footer {
      padding: 40px 20px;
  }

  .footer h4 {
      font-size: 20px;
  }

  .footer p {
      font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
      font-size: 24px;
  }

  .hero-content p {
      font-size: 14px;
  }

  .cta-button {
      padding: 10px 25px;
      font-size: 14px;
  }

  .footer h4 {
      font-size: 18px;
  }

  .footer p {
      font-size: 12px;
  }
}
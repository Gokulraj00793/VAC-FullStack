import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRvSEFM9Ul2v95zpCbn_F_uStEwlOja5M",
  authDomain: "vac-webdev.firebaseapp.com",
  projectId: "vac-webdev",
  storageBucket: "vac-webdev.firebasestorage.app",
  messagingSenderId: "956673015403",
  appId: "1:956673015403:web:762d387eefcc4181803b2e",
  measurementId: "G-E044EC7KL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Handle Form Submission
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    // Get form values
    const name = document.getElementById("appointment_name").value;
    const email = document.getElementById("appointment_email").value;
    const date = document.getElementById("appointment_date").value;

    const description = document.getElementById(
      "appointment_description"
    ).value;
    // Validate required fields
    if (!name || !email || !date || description) {
      alert("Please fill all required fields!");
      return;
    }
    // Create an object to store the appointment data
    const appointmentData = {
      name,
      email,
      date,
      description,
    };
    console.log("Appointment Data:", appointmentData);
    // Send data to Firebase
    const db = window.firebaseDB;
    const appointmentsRef = ref(db, "appointments"); // Create a reference to 'appointments'
    node;
    push(appointmentsRef, appointmentData)
      .then(() => {
        alert("Appointment booked successfully!");
        form.reset(); // Clear form after submission
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to book appointment. Please try again.");
      });
  });
});
console.log("Script connected successfully!");
console.log("Script loaded!");

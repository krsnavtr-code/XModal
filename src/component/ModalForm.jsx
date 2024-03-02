import React, { useState, useEffect } from "react";
import "./ModalForm.css";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    dob: "",
    phone: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Set custom validity for the email field
    if (name === "email") {
      const isValidEmail = value.includes("@");
      const emailInput = e.target;

      if (!isValidEmail) {
        emailInput.setCustomValidity(
          "Invalid email address. Please include the '@' symbol."
        );
      } else {
        emailInput.setCustomValidity("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const { email, username, dob, phone } = formData;

    if (email === "" || username === "" || dob === "" || phone === "") {
      alert("Please fill in all fields.");
    } else if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob) >= new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      alert("Form submitted successfully!");
      closeModal();
      // Reset form
      setFormData({
        email: "",
        username: "",
        dob: "",
        phone: "",
      });
    }
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  useEffect(() => {
    // Function to be called after the modal closes
    const handleModalClose = () => {
      // Your cleanup or additional logic after modal closes
    };

    // If the modal is closed, call the handleModalClose function
    if (!isOpen) {
      handleModalClose();
    }
  }, [isOpen]);

  return (
    <div className="container">
      <h2>User Details Modal</h2>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h3>Fill Details</h3>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;

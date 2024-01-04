import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const isFormValid = validateForm();

    if (isFormValid) {
      // Use emailjs for sending email
      try {
        await emailjs.sendForm('service_wrbegna', 'template_f80tx2g', form.current);
        setConfirmationMessage("Thank you for reaching out! Your message was sent, and I will get back to you as soon as possible.");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const validateForm = () => {
    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isMessageValid = formData.message.trim() !== "";

    setTouchedFields({
      name: true,
      email: true,
      message: true,
    });

    // Return true if all fields are valid
    return isNameValid && isEmailValid && isMessageValid;
  };

  return (
    <div>
      <h1>Contact</h1>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" />
        </label>
        <label>
          Email:
          <input type="text" name="Email" />
        </label>
        <label>
          Message:
          <textarea name="Message" rows="10"></textarea>
        </label>
        <button type="submit">Submit</button> {/* Replaced input with button for better clarity */}
        {confirmationMessage && <p className="success-message">{confirmationMessage}</p>}
      </form>
    </div>
  );
}

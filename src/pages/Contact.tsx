import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets via Apps Script webhook
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwJX5cmZirz1JTVAprejhlzBg81m5YwYpjxtBTD4MaVSUgifevvr-zZ1bquivx_bL6l/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            type: "general query",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
          redirect: "follow",
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        console.log("Contact form submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
      <section className="products">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you</p>
          </div>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "#2c5f72",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="email-input"
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "#2c5f72",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="email-input"
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "#2c5f72",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="email-input"
                  style={{
                    width: "100%",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="subscribe-button"
                style={{ marginTop: "1rem" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="modal-success" style={{ padding: "3rem" }}>
              <div className="success-icon">🌊</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;

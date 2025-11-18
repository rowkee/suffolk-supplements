import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
  productName: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, productName }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets via Apps Script webhook
      // Using text/plain content type to avoid CORS preflight
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwJX5cmZirz1JTVAprejhlzBg81m5YwYpjxtBTD4MaVSUgifevvr-zZ1bquivx_bL6l/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            type: "signup",
            email: email,
            productName: productName,
          }),
          redirect: "follow",
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        console.log(`Email subscription for ${productName}: ${email}`);

        // Analytics tracking
        if (window.gtag) {
          window.gtag("event", "email_signup", {
            event_category: "conversion",
            event_label: productName,
            value: 1,
          });
        }

        setIsSubmitted(true);

        // Auto-close after success message
        setTimeout(() => {
          onClose();
        }, 5000);
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("There was an error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <h3>Coming Soon!</h3>
              <div className="product-preview">
                <div className="coming-soon-icon">🚢</div>
                <h4>{productName} Supplements</h4>
              </div>
            </div>

            <div className="modal-body">
              <p>
                We're crafting the perfect {productName} supplements with care
                and quality. Sign up now and become one of our first customers
                with an <strong>exclusive discount</strong>.
              </p>

              <form onSubmit={handleSubmit} className="subscription-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="subscribe-button"
                >
                  {isSubmitting ? "Subscribing..." : "Sign me up!"}
                </button>
              </form>

              {/* <p className="privacy-notice">
                We respect your privacy. Unsubscribe at any time.
              </p> */}
            </div>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon">🌊</div>
            <h3>Welcome aboard!</h3>
            <p>
              Thanks for joining our journey. We'll let you know as soon as soon
              as the {productName} supplements are ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

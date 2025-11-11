import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="products">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>From the Suffolk Coast to Your Door</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Suffolk Supplements was born from a love of the Suffolk coast and a passion for natural wellness.
              Inspired by the vitality of coastal living, we set out to create premium supplements that harness
              the power of nature's finest ingredients.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Our journey began with a simple question: What if we could bottle the energy and clarity we feel
              by the sea? From this vision, we've crafted a collection of mushroom-based supplements that bring
              the benefits of functional fungi to your daily routine.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Every product is carefully sourced, tested, and formulated with the same care and quality that
              the Suffolk coast inspires in us. We believe in transparency, sustainability, and the power of
              nature to enhance our wellbeing.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Join us on our coastal journey to better health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;

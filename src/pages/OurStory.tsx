import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="story-page-wrapper">
      <section className="products">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
          </div>
          <div className="story-content">
            <p>Hello! I'm Rick, founder of Suffolk Supplements.</p>

            <p>
              I started this because the mushroom supplement industry has a
              dirty secret:{" "}
              <strong>
                most mushroom supplements don't contain the active compounds
                you're after.
              </strong>{" "}
              <br />
              <br />
              They're packed with mycelium grown on grain, which means you're
              basically paying for oats with minimal active compounds. The
              mushrooms never properly fruit, so the beneficial beta-glucans and
              triterpenes you're after? They're barely there.
            </p>

            <p>
              When I moved back to Suffolk from London, I finally had space to
              think clearly about what mattered. I wanted to build something
              meaningful that actually helped people. Not another bullshit
              wellness brand making empty promises.
            </p>

            <h2>So here's what we do differently:</h2>

            <ul>
              <li>
                We use 100% fruiting body extracts with verified active
                compounds
              </li>
              <li>Small batch production so we can control quality</li>
              <li>
                We are 💯 committed to only selling products that are proven to
                work
              </li>
            </ul>

            <p>
              The benefits of medicinal mushrooms are well established (I've
              linked some studies below). We're not here to convince you, we're
              here to give you a product that actually works so you can find out
              for yourself.
            </p>

            <h2>This is for you if you're:</h2>

            <ul>
              <li>Curious and like experimenting</li>
              <li>Sick of supplements that do nothing</li>
              <li>Want honest products from someone who gives a shit</li>
            </ul>

            <p>I answer all messages personally. Get in touch anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;

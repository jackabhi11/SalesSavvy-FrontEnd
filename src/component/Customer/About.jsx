import React from 'react'

function About() {
    return (
    <div className="about-container">
      <h2>About Sales Savvy</h2>

      <p className="about-text">
       Sales Savvy is an e-commerce platform offering quality products 🛍️, secure payments 🔒, and a smooth shopping experience ✨.
        Our mission is to deliver value 💎, trust 🤝, and convenience 🚀 to every customer. We focus on quality products ✅, secure payments 💳, and excellent customer support 📞.
      </p>

      <section className="contact-section">

        <form className="contact-form">
          <fieldset>
            <legend>Get in Touch</legend>

            <label>
              Full Name
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              Message
              <textarea
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </label>

            <button type="submit">Send</button>
          </fieldset>
        </form>
      </section>
    </div>
    )
}

export default About

import { type FunctionComponent, useState } from 'react';

import styles from './ContactSection12.module.css';

/**
 * A functional and accessible contact form component.
 * It manages form state, handles user input, and simulates form submission.
 */
const ProBlocksPricingSection4: FunctionComponent = () => {
  // Use a single state object to manage all form fields.
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    message: ''
  });

  // Handle changes to any input field.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default browser form submission (page reload).

    // Basic validation check.
    if (!formData.name || !formData.businessEmail || !formData.message) {
      alert('Please fill out the Name, Business Email, and Message fields.');
      return;
    }

    // Log the form data for demonstration. In a real application, you would send this to an API.
    console.log('Form Submitted:', formData);

    // Simulate an API call with a delay.
    setTimeout(() => {
      alert('Your audit request has been sent! We will contact you shortly.');

      // Reset the form fields to their initial empty state.
      setFormData({
        name: '',
        lastName: '',
        businessEmail: '',
        companyName: '',
        phoneNumber: '',
        message: ''
      });
    }, 1000); // 1-second delay
  };

  return (
    <div className={styles.proBlocksPricingSection}>
      <div className={styles.container}>
        <div className={styles.proBlocksSectionTitle}>
          <b className={styles.featureRichLayoutThat}>Ready to Build Your Digital Workforce?</b>
          <div className={styles.addAConcise}>Let&apos;s identify your top automation opportunities. Schedule a complimentary, no-obligation audit with our specialists here in Salalah.</div>
        </div>
        <div className={styles.flexVertical}>
          <div className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.subheadingWrapper}>
                <div className={styles.subheading}>Request Your Free Audit</div>
              </div>
              {/* The form element is essential for proper form submission behavior and accessibility */}
              <form onSubmit={handleSubmit}>
                {/* Each input is a controlled component with state managed by React */}
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required // HTML5 validation for a required field
                />
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className={styles.input}
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required // HTML5 validation
                />
                <input
                  className={styles.input}
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <input
                  className={styles.input}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} // Recommended for usability
                  required // HTML5 validation
                />
                {/* The button is a real HTML button, triggering the onSubmit event */}
                <button type="submit" className={styles.button}>
                  Schedule a My Free Audit
                </button>
              </form>
              <div className={styles.subheading1}>We&apos;ll respond within 24 hours to schedule your personalized consultation.</div>
            </div>
            {/* The right-hand card with contact info remains the same */}
            <div className={styles.card1}>
              <div className={styles.frameParent}>
                <div className={styles.subheadingContainer}>
                  <b className={styles.subheading2}>Why Schedule an Audit?</b>
                </div>
                <div className={styles.flexVertical1}>
                  <div className={styles.flex1}>
                    <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
                    <div className={styles.subheading3}>Pre-configured for common business roles</div>
                  </div>
                  <div className={styles.flex1}>
                    <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
                    <div className={styles.subheading3}>Rapid deployment and activation</div>
                  </div>
                  <div className={styles.flex1}>
                    <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
                    <div className={styles.subheading3}>24/7 monitoring and management</div>
                  </div>
                  <div className={styles.flex1}>
                    <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
                    <div className={styles.subheading3}>Performance analytics and reporting</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.subheadingContainer}>
                  <b className={styles.subheading2}>Get in Touch</b>
                </div>
                <div className={styles.flexVertical2}>
                  <div className={styles.flex1}>
                    <img className={styles.vuesaxlinearlocationIcon} alt="" src="location.svg" />
                    <div className={styles.subheading3}>Salalah, Sultanate of Oman</div>
                  </div>
                  <div className={styles.flex1}>
                    <img className={styles.phoneIcon} alt="" src="Phone.svg" />
                    <div className={styles.subheading3}>+968 7662 6636</div>
                  </div>
                  <div className={styles.flex1}>
                    <img className={styles.iconMail} alt="" src="Mail.svg" />
                    <div className={styles.subheading3}>info@rewan.com</div>
                  </div>
                </div>
              </div>
              <div className={styles.subheading11}>From our base in Salalah, we bring together global AI innovation and local market expertise. This combination ensures our rewan-powered solutions meet the exact needs of Omani businesses—securely, seamlessly, and with measurable impact.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProBlocksPricingSection4 };
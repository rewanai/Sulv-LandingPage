'use client';

import { useState, type FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';

const ProBlocksPricingSection4: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.businessEmail) {
      alert('Please fill out the Name and Business Email fields.');
      return;
    }
    alert('Submitted!');
  };

  return (
    <div id="contact" className={styles.proBlocksPricingSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <b className={styles.readyToBuild}>Ready to Build Your Digital Workforce?</b>
            <div className={styles.letsIdentifyYour}>
              Let&apos;s identify your top automation opportunities. Schedule a complimentary, no-obligation audit with our specialists here in Salalah.
            </div>
          </div>
          <div className={styles.flexVertical}>
            <div className={styles.flex}>
              <div className={styles.card}>
                <div className={styles.subheadingWrapper}>
                  <div className={styles.subheading}>Request Your Free Audit</div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className={styles.inputParent}>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className={styles.inputField}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    className={styles.inputField}
                    type="email"
                    name="businessEmail"
                    placeholder="Business Email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className={styles.inputField}
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <input
                    className={styles.inputField}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <textarea
                    className={styles.textareaField}
                    name="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                  <button type="submit" className={styles.button}>
                    Schedule a My Free Audit
                  </button>
                </form>
                <div className={styles.subheading1}>
                  We&apos;ll respond within 24 hours to schedule your personalized consultation.
                </div>
              </div>
              <div className={styles.card1}>
                <div className={styles.frameParent}>
                  <div className={styles.subheadingContainer}>
                    <b className={styles.subheading2}>Why Schedule an Audit?</b>
                  </div>
                  <div className={styles.flexVertical1}>
                    {[
                      'Pre-configured for common business roles',
                      'Rapid deployment and activation',
                      '24/7 monitoring and management',
                      'Performance analytics and reporting'
                    ].map((text, i) => (
                      <div className={styles.flex1} key={i}>
                        <Image
                          src="/CircleCheckBig.svg"
                          alt="Check"
                          width={24}
                          height={24}
                          className={styles.iconCirclecheckbig}
                        />
                        <div className={styles.subheading3}>{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.subheadingContainer}>
                    <b className={styles.subheading2}>Get in Touch</b>
                  </div>
                  <div className={styles.flexVertical2}>
                    <div className={styles.flex1}>
                      <Image
                        src="/location.svg"
                        alt="Location icon"
                        width={24}
                        height={24}
                        className={styles.vuesaxlinearlocationIcon}
                      />
                      <div className={styles.subheading3}>Salalah, Sultanate of Oman</div>
                    </div>
                    <div className={styles.flex1}>
                      <Image
                        src="/Phone.svg"
                        alt="Phone icon"
                        width={24}
                        height={24}
                        className={styles.phoneIcon}
                      />
                      <div className={styles.subheading3}>+968 7662 6636</div>
                    </div>
                    <div className={styles.flex1}>
                      <Image
                        src="/Mail.svg"
                        alt="Mail icon"
                        width={24}
                        height={24}
                        className={styles.iconMail}
                      />
                      <div className={styles.subheading3}>info@rewan.com</div>
                    </div>
                  </div>
                </div>
                <div className={styles.subheading11}>
                  From our base in Salalah, we bring together global AI innovation and local market expertise. This combination ensures our rewan-powered solutions meet the exact needs of Omani businesses—securely, seamlessly, and with measurable impact.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProBlocksPricingSection4 };
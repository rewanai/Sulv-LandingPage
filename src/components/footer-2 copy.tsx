"use client";

import { FunctionComponent } from 'react';
import React, { useState } from "react";
import Image from "next/image"; // ✅ Optimized image import
import styles from "./ContactSection1.module.css";

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.businessEmail) {
      alert('Please fill out the Name and Business Email fields.');
      return;
    }

    console.log('Form Submitted:', formData);
    alert('Your request has been sent successfully!');

    setFormData({
      name: '',
      lastName: '',
      businessEmail: '',
      companyName: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div id="contact" className={styles.proBlocksPricingSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <b className={styles.readyToBuild}>Ready to Build Your Digital Workforce?</b>
            <div className={styles.letsIdentifyYour}>
              Let&apos;s identify your top automation opportunities. Schedule a complimentary, no-obligation audit with our specialists here in Muscat.
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
              <div className={styles.card2}>
                <div className={styles.frameParent}>
                  <div className={styles.subheadingContainer}>
                    <div className={styles.subheading}>Why Schedule an Audit?</div>
                  </div>
                  <div className={styles.flexVertical1}>
                    {[
                      "Pre-configured for common business roles",
                      "Rapid deployment and activation",
                      "24/7 monitoring and management",
                      "Performance analytics and reporting"
                    ].map((text, i) => (
                      <div className={styles.flex1} key={i}>
                        <Image
                          className={styles.iconCirclecheckbig}
                          alt="Check icon"
                          src="/CircleCheckBig.svg"
                          width={24}
                          height={24}
                        />
                        <div className={styles.subheading3}>{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.subheadingContainer}>
                    <div className={styles.subheading}>Get in Touch</div>
                  </div>
                  <div className={styles.flexVertical2}>
                    <div className={styles.flex1}>
                      <Image
                        className={styles.vuesaxlinearlocationIcon}
                        alt="Location icon"
                        src="/location.svg"
                        width={24}
                        height={24}
                      />
                      <div className={styles.subheading3}>Salalah, Sultanate of Oman</div>
                    </div>
                    <div className={styles.flex1}>
                      <Image
                        className={styles.phoneIcon}
                        alt="Phone icon"
                        src="/Phone.svg"
                        width={24}
                        height={24}
                      />
                      <div className={styles.subheading3}>+968 7662 6636</div>
                    </div>
                    <div className={styles.flex1}>
                      <Image
                        className={styles.iconMail}
                        alt="Mail icon"
                        src="/Mail.svg"
                        width={24}
                        height={24}
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

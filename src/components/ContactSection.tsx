return (
  <div id="contact" className={styles.proBlocksPricingSection}>
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.proBlocksSectionTitle}>
          <b className={styles.readyToBuild}>Ready to Build Your Digital Workforce?</b>
          <div className={styles.letsIdentifyYour}>Let&apos;s identify your top automation opportunities. Schedule a complimentary, no-obligation audit with our specialists here in Salalah.</div>
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
              <div className={styles.subheading1}>We&apos;ll respond within 24 hours to schedule your personalized consultation.</div>
            </div>
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
export { ProBlocksPricingSection4};
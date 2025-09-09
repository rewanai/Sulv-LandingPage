import { FunctionComponent } from 'react';
import Image from 'next/image'; // ✅ Optimized image handling
import styles from './FooterSection12.module.css';

const ProBlocksFooter7: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFooter7}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <Image
            className={styles.groupIcon}
            alt="Company logo"
            src="/GroupW.svg"
            width={120}
            height={32}
          />
          <div className={styles.flex1}>
            <div className={styles.buildingAiPoweredCyber}>
              Building AI-powered Cyber Employees to automate operations and liberate human talent for what matters most. Made in Oman for the world.
            </div>
          </div>
          <div className={styles.flex1}>
            <div className={styles.buildingAiPoweredCyber}>
              Muscat, Sultanate of Oman
            </div>
          </div>
          <div className={styles.flex3}>
            <div className={styles.socialMediaIcon1}>
              <Image
                className={styles.vectorIcon1}
                alt="Instagram"
                src="/Social Media IconI.svg"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.socialMediaIcon}>
              <Image
                className={styles.vectorIcon2}
                alt="X (Twitter)"
                src="/Social Media IconX.svg"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.socialMediaIcon}>
              <Image
                className={styles.vectorIcon3}
                alt="YouTube"
                src="/Social Media IconY.svg"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.socialMediaIcon1}>
              <Image
                className={styles.vectorIcon4}
                alt="Website"
                src="/Social Media IconW.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className={styles.div}>
          <div className={styles.flexVertical}>
            <div className={styles.column}>
              <div className={styles.solutions}>Solutions</div>
              <div className={styles.flexVertical1}>
                <div className={styles.buildingAiPoweredCyber}>Cyber Employees</div>
                <div className={styles.buildingAiPoweredCyber}>Custom AI Applications</div>
                <div className={styles.buildingAiPoweredCyber}>Automation Audit</div>
                <div className={styles.buildingAiPoweredCyber}>Integration services</div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.solutions}>Company</div>
              <div className={styles.flexVertical1}>
                <div className={styles.buildingAiPoweredCyber}>Our Technology</div>
                <div className={styles.buildingAiPoweredCyber}>Success Stories</div>
                <div className={styles.buildingAiPoweredCyber}>Our Principle</div>
                <div className={styles.buildingAiPoweredCyber}>Contact</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.separator}>
          <div className={styles.separator1} />
        </div>

        <div className={styles.div1}>
          <div className={styles.flexVertical3}>
            <div className={styles.buildingAiPoweredCyber}>Privacy Policy</div>
            <div className={styles.buildingAiPoweredCyber}>Terms of Service</div>
            <div className={styles.buildingAiPoweredCyber}>Cookies Settings</div>
          </div>
          <div className={styles.buildingAiPoweredCyber}>© 2025 rewan. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default ProBlocksFooter7;

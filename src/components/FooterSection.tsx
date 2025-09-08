// src/components/FooterSection.tsx

import React, { useState, useEffect, FunctionComponent } from 'react';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const FooterSection: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768; // You can adjust this to match your design's breakpoint

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="footer">
      {windowWidth < breakpoint ? <FooterMobile /> : <FooterDesktop />}
    </div>
  );
};

export { FooterSection };
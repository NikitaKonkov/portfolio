import React from 'react';
import { aboutText } from './content';

const AboutText = () => (
  <>
    {aboutText.map((paragraph, index) => (
      <p key={index} className="text-sm md:text-base text-light-text/80 dark:text-dark-text/80 leading-relaxed mb-3 md:mb-0">
        {paragraph}
      </p>
    ))}
  </>
);

export default AboutText;
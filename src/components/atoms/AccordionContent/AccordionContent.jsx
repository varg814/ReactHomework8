import React from 'react';

const AccordionContent = ({ content, isActive }) => (
  <div className={`accordion-content ${isActive ? 'show' : ''}`}>
    {isActive && <p>{content}</p>}
  </div>
);

export default AccordionContent;

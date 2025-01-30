import React from 'react';

const AccordionButton = ({ title, onClick, isActive }) => (
  <button 
    className={`accordion-title ${isActive ? 'active' : ''}`} 
    onClick={onClick}
  >
    {title}
  </button>
);

export default AccordionButton;

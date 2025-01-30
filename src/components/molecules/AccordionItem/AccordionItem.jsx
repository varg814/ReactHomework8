import React from "react";
import AccordionButton from "../../atoms/AccordionButton/AccordionButton";
import AccordionContent from "../../atoms/AccordionContent/AccordionContent";

function AccordionItem({ title, content, isActive, onToggle }) {
  return (
    <>
      <div className="accordion-item">
        <AccordionButton title={title} onClick={onToggle} isActive={isActive} />
        <AccordionContent content={content} isActive={isActive} />
      </div>
    </>
  );
}

export default AccordionItem;

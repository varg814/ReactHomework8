import React, { useState } from "react";
import AccordionItem from "../../molecules/AccordionItem/AccordionItem";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: "How many team members can I invite?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "Can I cancel my subscription?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "Do you provide additional support?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
  ];

  function toggleAccordion(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="accordion">
      <h1>FAQ</h1>
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
          isActive={activeIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

import React, { useState, useEffect } from "react";
import AccordionItem from "../../molecules/AccordionItem/AccordionItem";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes.slice(0, 5));
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []); 

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
      {quotes.map((quote, index) => (
        <AccordionItem
          key={index}
          title={quote.author}
          content={quote.quote}
          isActive={activeIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

import React from "react";

export default function FAQ() {
  const FAQs = [
    {
      question: "Would you be willing to work onsite?",
      answer: "Unless it`s in Edinburgh or Glasgow, only occasionally",
    },
    {
      question: "How do you prefer to be contacted?",
      answer: "LinkedIn or Twitter, both links in the top right of this page!",
    },
    {
      question: "Can I call you?",
      answer: "Please get in touch via the above methods first",
    },
    {
      question: "What are your rates?",
      answer: "I'm not freelancing right now, but when I am it's £450 a day",
    },
  ];
  return (
    <div>
      {FAQs.map((faq) => {
        return (
          <div>
            <li>{faq.question}</li>
            <div>{faq.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
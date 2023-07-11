import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "./Data";
const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQS</h2>
          <p className="u-text-small u-text-dark">
            Social-X app has lorem ipsum dolor sit ametconsetor adispicing elit
            . sequi labore , halum officit error peaitur lopse
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              title={question.title}
              description={question.description}
              key={question.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

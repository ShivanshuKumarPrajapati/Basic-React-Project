import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import people from './data';
import {  FaQuoteRight } from 'react-icons/fa';

//forwardRef frwd reference from parent component to child component
const Review = forwardRef((props,ref) => {
  let [review, setReview] = useState(people[0]);
  let [curr, setCurr] = useState(1);
  
  useImperativeHandle(ref, () => ({
  
    handleSurprise()
    {
      let random = Math.floor(Math.random() * 10) % 4 + 1;
      if (random === curr)
        random = (random + 1) % 4 + 1;
      setCurr(random);
      const person = people.find((person)=> person.id == random);
      setReview(person)
    },
    handleprev()
    {
      let value = (curr - 1) % 4 ;
      if (value === 0)
        value = 4;
      setCurr(value);
      const person = people.find((person) => person.id == curr);
      setReview(person);
    },
    handleNext()
    {
      let value = (curr + 1) % 4;
      if (value === 0) value = 1;
      setCurr(value);
      const person = people.find((person) => person.id == curr);
      setReview(person);
    }
  }),
  )

  return (
    <div className="review section">
      <div className="img-container" key={review.id}>
        <img src={review.image} alt={review.name} className="person-img " />
        <FaQuoteRight
          style={{
            position: "relative",
            left: "-69px",
            top: "-124px",
            color: "black",
          }}
        />
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
    </div>
  );
});

export default Review;

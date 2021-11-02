import React  from 'react';
import { useRef } from 'react';
import Review from './Review';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const Surprise = () => {
   child.current.handleSurprise();
  }
  const prev = () => {
    child.current.handleprev();
  }
  const next = () => {
    child.current.handleNext();
  }
  //set up child component ref
  const child = useRef(null);
  return (
    <main >
      <div className="title">
        <h2>Reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="review">
        <Review ref={child }/>
        <div>
        <button className="prev-btn" onClick={()=> prev()}><FaChevronLeft/></button>
        <button className="next-btn" onClick = {()=> next()}><FaChevronRight/>
        </button>
        </div>
        <button className="random-btn" onClick={() =>Surprise() }>
          <h4>Surprise me </h4>
        </button>
      </div>
    </main>
  );
}

export default App;

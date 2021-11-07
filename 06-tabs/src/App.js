import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaLifeRing } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState([]);
  const [order, setOrder] = useState(3);
  const [jobItem,setJobItem] = useState({});
  
  const dataFetch = ( async() => {
    setLoading(true);
    const response =await fetch(url);
    const fetchedJob = await response.json();
    setJob(fetchedJob);
    setLoading(false);
  })
  
  //console.log(filterItem);
  useEffect(() => {
    dataFetch();
  }, []);
  if (loading) {
    return (
      <div className="section">
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
          <div className="btn-container">
          {
            job.map((item) => {
              return ( 
                  <button
                    key={item.id}
                    onClick={() => setOrder(item.order)}
                    className={`job-btn ${order==item.order && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
              );
          })
          }
          </div>
        <article className="job-info">
          {
            job.filter((item) => item.order == order).map(filterItem => {
              return (
                <div>
                <h3>{filterItem.title}</h3>
                <h4>{filterItem.company}</h4>
                  <p className="job-date">{filterItem.date}</p>
                    {
                      (filterItem.duties).map((duty) => {
                        return (
                          <div className="job-desc">
                            <span className="job-icon"><FaAngleDoubleRight/></span>
                            <p>{duty}</p>
                          </div>
                        );
                      })
                  }
                  <button className="btn">more info</button>
                </div>
              )
            })
          }
        </article>
      </div>
    </div>
  )
  
}

export default App

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tourList, setTourList] = useState([]);
  const fetchList = (() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) return resp.json();
        else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((data) => {
        setTourList(data);
        setLoading(false);
        setIsError(false);
      });
  });
  useEffect(() => {
    fetchList();
  }, []);
  if (isLoading) {
    return (
      <main >
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <main >
        <div>
          <h1>Error...</h1>
        </div>
      </main>
    );
  }
  
    return <main >
      <Tours tourList={tourList} fetchList={fetchList}/>
      </main>
  
}

export default App;

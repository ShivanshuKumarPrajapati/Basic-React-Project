import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaTimesCircle } from 'react-icons/fa';

function App() {
  const [item, setItem] = useState('');
  const [placeHolder, setPlaceHolder] = useState("eg. egg");
  const [alertMssg, setAlertMssg] = useState('');
  const [alertClass, setAlertClass] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const getItem = item;
    if (getItem === '')
    {
      setAlert(true);
      setAlertClass('alert-danger');
      setAlertMssg("Please Enter Value");
      }
    else
    {
      console.log(getItem);
      setAlert(true);
      setAlertMssg("Item Added To The List");
      setAlertClass("alert-success");
      }
    setItem('');
    setPlaceHolder('eg. egg');
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <div className="section-center">
      {alert ? <Alert class={alertClass} value={alertMssg} />:''}
      <form className="grocery-form">
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder={placeHolder}
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App

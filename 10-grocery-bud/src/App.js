import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaTimesCircle } from 'react-icons/fa';

const getlocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else
    return [];
}

function App() {
  const [item, setItem] = useState('');
  const [placeHolder, setPlaceHolder] = useState("eg. egg");
  const [alertMssg, setAlertMssg] = useState('');
  const [alertClass, setAlertClass] = useState('');
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState(getlocalStorage());
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === '')
    {
      setAlert(true);
      setAlertClass('alert-danger');
      setAlertMssg("Please Enter Value");
    }
    else if (item && edit)
    {
      list.map((element) => {
        if (element.id === id)
        {
          element.title = item;
          }
      })
      setAlert(true);
      setAlertMssg("Saved Changes");
      setAlertClass("alert-success");
      setId('');
      setEdit(false);
      }
    else
    {
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, newItem]);
      setAlert(true);

      setAlertMssg("Item Added To The List");
      setAlertClass("alert-success");
      }
    setItem('');
    setPlaceHolder('eg. egg');
  }
  const removeItem = (id) => {
    setAlert(true);
    setAlertClass('alert-danger');
    setAlertMssg('Item removed');
    setList(list.filter((item) => item.id != id));
  }

  const handleClear = () => {
    setAlert(true);
    setAlertClass('alert-danger');
    setAlertMssg('Empty List');
    setList([]);
  }
  const EditItem = (item) => {
    setItem(item.title);
    setEdit(true);
    setId(item.id);
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list])

  return (
    <div className="section-center">
      {alert ? <Alert class={alertClass} value={alertMssg} /> : ""}
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
            {edit ? `Save` : `Submit`}
          </button>
        </div>
      </form>

      {list.length ? (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} EditItem={EditItem}></List>{" "}
          <button className="clear-btn" onClick={handleClear}>
            Clear Item
          </button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App

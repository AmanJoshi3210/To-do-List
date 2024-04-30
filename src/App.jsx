import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [arr, setArr] = useState(() => {
    const l = localStorage.getItem('ar');
    return l ? JSON.parse(l) : []
  });
  function add() {
    let a = document.getElementById("inp");
    if (a.value.trim() !== "") {
      setArr([...arr, a.value]);
      a.value = "";
      console.log(arr.map(item => item));
    }
  }
  useEffect(() => {
    // Save data to local storage whenever the arr state changes
    localStorage.setItem('ar', JSON.stringify(arr));
  }, [arr]);
  function remove(element) {
    let newarr1 = arr.filter(item => item !== element);
    setArr(newarr1);
    // localStorage.setItem('ar', JSON.stringify(newarr1));
  }
  return (
    <>
      <div className="container">
        <div className="inputbox">
          <u><h1>To-Do List</h1></u>
          <input type="text" name="" id="inp"  placeholder='Click  here to Type '/>
          <button className='btn1' onClick={() => add()}>Add List</button>
        </div>
        <div className="lists">
          {arr.map((item,idx) => (
            <div className="List-data">
              <p className='par'><b>{idx+1}.   {item}</b></p>
              <button className='btn' onClick={() => remove(item)}>remove</button>
              </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default App

// import React, { createElement } from 'react'
import './components.css'
import { useState } from 'react';
export default function FuncMessage(props) {
  
  const [arr, setArr] = useState([props.setr]);
  let countArray =[];
  const onMouse = () => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.classList.add("pardisplay")
        // e.currentTarget.classList.toggle("pardisplay")
  }
  const handleClick = (e) =>{
    const paragraph = document.querySelector('.paragraph');
    paragraph.classList.remove("pardisplay");
    e.currentTarget.classList.toggle("headfunc");
    let copy = Object.assign([], arr);
    copy.push(copy.length);
    setArr(copy);
    let div = document.createElement('div')
    const place = document.querySelector('.order');
    place.append(div)
    div.className = 'numcall';
    div.innerHTML = `${copy.length-1}`;
    
    console.log(countArray);
   
   
  }

  return (
    <div>
        <h1 className='h1hover' onClick={handleClick} onMouseOver={onMouse}> Func component {props.name}</h1>
        <div className='order'>

        </div>
        <div> Всего Вы сделали изменение цвета: {arr.length-1} раз </div>
        <p className='paragraph'> Нажмите, чтобы изменить цвет </p>
    </div>
  )
}

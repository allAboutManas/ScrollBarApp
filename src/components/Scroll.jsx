import React from 'react'
import styles from './scroll.module.css'


export default function Scroll() {


    

    let arr =[];
    for(let i=0;i<40;i++){
        arr.push(i);
    }
    function handleLeft(e){
        e.preventDefault();
        document.getElementById("box").scrollLeft-=500;
    }
    function handleRight(e){
        e.preventDefault();
        document.getElementById("box").scrollLeft+=500;
    }


  return (
    <div>
     <div className={styles.outer}>
         <button className={styles.rightbtn} onClick={handleLeft}>L</button>
     <div className={styles.box} id='box'>
     {
         arr.map((item,index)=>(<div><div key={index} className={styles.innerbox}>{item}</div></div>))
        }
 </div>
        <button className={styles.leftbtn} onClick={handleRight}>R</button>
     </div>
    </div>
    
  )
}


import React, { useState } from 'react'
import './accordian.css'

const faqs = [
    {
        id: 1,
        header: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        header: "Where does it come from?",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        header: "Where can I get some?",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
]

function Accordin() {
      const [selc, setSelc] = useState(0);
      const toggle = (i) => {
        if(selc === i){
            return setSelc(0)
        }else{
            return setSelc(i)
        }
     }
  
    return (
    <div className='wrapper'>
        <div className='accordian'>
        {
            faqs.map((item,i)=> (
                <div className='item' key={item.id}>
                    <div className={selc === i ? 'hd act':'hd'} onClick={()=> toggle(i)}>{item.header}</div>
                    <div className={selc === i ? 'ctnt show':'ctnt'} >{item.text}</div> 
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Accordin
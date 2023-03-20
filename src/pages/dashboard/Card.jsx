import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

const Card = ({ three, six, img }) => {

    const [ban, setBan] = useState(true);

    const check = ()=>{
        setBan(false)
    }

    const checkOne = ()=>{
        setBan(true)
    }

    const handleSubmit = (e)=>{
       const docRef = doc(db, 'Buttons' )
        updateDoc(docRef, {ban})
        .then((response)=>{
            console.log(response)
            alert("success")
        }).catch(error =>{
            console.log(error.message)
            alert("error!")
        })
    }

    return (
        <>
            <div className='one'>
                <div className='left'>
                    <div className='pic'>
                        <img src={img} alt='' />
                    </div>
                    <div>
                        <h3> {three} </h3>
                        <h6> {six} </h6>
                    </div>
                </div>
                <div className='right'>
                    {ban ? <div className='ban' onClick={check}><button> Ban </button></div> 
                        : 
                        <div className='unban' onClick={checkOne}><button> Unban </button></div>
                    }
                    
                    
                </div>
            </div>
        </>
    )
}

export default Card
import React, { useEffect, useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import "./subscription.scss"
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillTrashFill } from 'react-icons/bs';

const Subscription = () => {

  const [open, setOpen] = useState(false)
  const [days, setDays] = useState()
  const [price, setPrice] = useState()

  const handle = () => {
    setOpen(!open)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (days === '' && price === '') {
      return
    }
    const movieCollRef = collection(db, 'Subscription')
    addDoc(movieCollRef, { days, price })
      .then((response) => {
        console.log(response)
        toast.success(`You are Subscribed ${days} days and price is ${price}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setDays('')
        setPrice('')
      }).catch((error) => {
        console.log(error.message)
      })
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(movies)
  }, [])

  const getCollectionRef = collection(db, "Subscription");
  useEffect(() => {

    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setMovies(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      unsubscribe();
    }
  });

  function deleteMovie(id) {
    const docRef = doc(db, 'Subscription', id)
    deleteDoc(docRef)
      .then(() => {
        console.log('Document Deleated')
      }).catch((error) => {
        console.log(error.message)
      })
  }
  
  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='sub' style={{ color: "#fff", padding: "40px" }}>
          <h2> Subscription </h2>
          <div className='form'>
            <div><input type="text" placeholder='how many days?' name='days' value={days} onChange={(e) => setDays(e.target.value)} /></div>
            <div><input type="num" placeholder='Price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} /></div>
          </div>
          <button onClick={handleSubmit} className="sub__btn"> Subscribe </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div className='box'>
            <ul>
              <li>
                {
                  movies.map((item) => (
                    <>
                      <div className='one__box'>
                        <div className='left'>
                          <h2> Days:  <span> {item.days} </span> </h2>
                          <h2> Price:  <span> {item.price} </span> </h2>
                        </div>
                        <div className='right'>
                          <button onClick={() => deleteMovie(item.id)}> <BsFillTrashFill /> Delete </button>
                        </div>
                      </div>
                    </>
                  ))
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription
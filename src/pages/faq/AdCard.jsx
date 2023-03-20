import React from 'react'

const AdCard = ({ img, title }) => {
  return (
    <>
        <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p className="card-text">{desc}</p> */}
                    {/* <div className='butns'>
                        <div className='de'> <button> Details </button> </div>
                        <div className='re'> <button> Remove </button> </div>
                    </div> */}
                    <button className='details' type="button" data-toggle="modal" data-target="#myModal"> Details </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                {/* <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title"> Shoes </h4>
                                </div> */}
                                <div className="modal-body">
                                    <img src={img} alt="img" />
                                    <h3> Shoes </h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p> $30.00 </p>
                                    <div className='btns'>
                                        <div><button className='btn-defaul ok'> Approve </button></div>
                                        <div><button className='btn-defaul'> Remove </button></div>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default AdCard
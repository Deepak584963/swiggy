import React from 'react'

function Card({restaurant}) {
    
    const {id  ,name,cloudinaryImageId ,costForTwoString} = restaurant.data
  return (

    <>
      <div
          className=" card rounded-2xl bg-slate-200 m-4 p-6 bg-slate-600-700 w-80  "
         
          >
            <img
              className="rounded-2xl m-"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
              }
              alt={name}
              />
            <h2 className="font-bold font-serif">{name}</h2>
            <p className="font-light">Ratings-5.0</p>
            <p className="font-light">{costForTwoString}</p>
          </div>
    </>
  )
}

export default Card

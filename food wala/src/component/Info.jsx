import React from 'react'

function Info({data}) {
  return (
    <>
      <div className=" w-[50rem] border-2">
          <img
            className="rounded-2xl "
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              data.cloudinaryImageId
            }
          />
          <h2 className=" font-bold text-2xl text-slate-700 mt-8">{data?.name}</h2>
          <p className="text-sm mt-2 border-t-2	">{data.cuisines}</p>
          <p className=" text-sm pb-3 border-dotted border-b-2 	">
            {data.areaName},{data.city},{data.sla?.lastMileTravelString}
          </p>
          <p className="text-sm mt-3	font-light">
            1.3 kms | ₹25 Delivery fee will apply
          </p>
          <p className="m-1">{data.locality}</p>
          <div className="flex justify-between ">
            <h3 className="font-bold bg-slate-200 p-2 my-5">
              {data.sla?.deliveryTime}Mins
            </h3>
            <h3 className="font-bold bg-slate-200 p-2 my-5">
              {data.costForTwoMessage}
            </h3>
            <h1 className="font-extrabold bg-slate-200 p-2 my-5">
              Rating {data.avgRating}
            </h1>
          </div>
        </div>
    </>
  )
}

export default Info

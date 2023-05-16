import React, { useState, useEffect } from "react";
import Simmer from "./Simmer";
import Card from "./Card";
import { Link } from "react-router-dom";
function AllRestaurant() {
  const [data, setData] = useState([]);
  const [filteredData,setfilteredData ] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    Getdata();
  }, []);

  async function Getdata() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const cards = json.data.cards[2].data.data.cards;
    setData(cards);
    setfilteredData(cards)
 
  }

  function FilterData(searchText, data) {
    const filtereddata = data.filter((d) => {
      return d.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    
    return filtereddata;
  }

  return filteredData.length==0?(
    <Simmer></Simmer>):(
    <>
      <div className="border-2 flex justify-center ">
        <div className=" border-2">
          <input
            className="border-2 rounded-md border-blue-200
            "
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
          <button
            className="font-sans p-[2px] m-1 bg-slate-200 rounded-md"
            onClick={() => {
              const newData = FilterData(searchText, data);
              setfilteredData(newData);
              
            }}
            >
            Search
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-around bg-white">
        {filteredData.map((restaurant) => {
        
          return <Link  key={restaurant.data.id} to={`/Restaurant/${restaurant.data.id}`}>
         <Card restaurant={restaurant}></Card>
         </Link>
})}
      </div>
      
    </>
  );
}

export default AllRestaurant;

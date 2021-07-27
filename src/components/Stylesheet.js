import React from 'react'
import './myStyle.css'
import JSONDATA from "./data.json" 
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhc2hhbmswNTEwIiwiYSI6ImNrcms3OW1rcTAwMzQycm1wNjZjMTFjbXoifQ.xXfUv1ofxJ0mjUwatr2PGQ';

function Stylesheet({ placeholder, data }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isLoading,setLoading]=useState(false);
    const handleFilter = (event) => 
    {
          const searchWord = event.target.value;
          setWordEntered(searchWord);
          // console.log(wordEntered);
          const newFilter =JSONDATA.cities.filter(
          (value) => 
          {
            return value.city.toLowerCase().includes(searchWord.toLowerCase());
            
          }
          );

          if (searchWord === "") 
          {
                setFilteredData([]);
          } 
          else 
          {
                setFilteredData(newFilter);
          }
          // console.log(filteredData);
    };
    useEffect(() => 
    {
        if (map.current) 
        {
          return;
        } // initialize map only once
        map.current = new mapboxgl.Map(
        {
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],
            zoom: zoom
      
        }
    );
    },[lng,lat]
    );
    const handleClick=(lan,lat)=>{
        setLng(lan);
        setLat(lat);
    }
    

    
   return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
            </style>
            <div>
                <div className="rectangle" id="maps">
                {isLoading ? <div><p className="image">🗺</p><p className="textdefault">Add a city to sneak a peek!</p></div>:<div><div ref={mapContainer} className="map-container" id="maps" /></div>
                }
            </div>
            <p className ="text">Incredible. <span className="text2">dev</span></p>
           
        
        </div>
        <div className="search">
          <div className="searchInputs">
             <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} className="SearchBars"></input> 
         {filteredData.length !== 0 && 
         (
           <div className="dataResult">
             {filteredData.slice(0, 15).map((value, key) => {
               console.log(value);
               return (
                  
                   <button className="dataItem" onClick={()=>handleClick(value.lan,value.lat)} value={value.city}> 
                     <p>{value.city}</p>
                 </button>
                
                 
                  
               );
             })}
           </div>
         )}
       </div>
       </div>
       </div>
       
    )
}


export default Stylesheet

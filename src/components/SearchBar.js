// import React, { useState } from "react";
// import JSONDATA from "./data.json" 
// import './myStyle.css'
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { useRef, useEffect,} from 'react';


// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhc2hhbmswNTEwIiwiYSI6ImNrcms3OW1rcTAwMzQycm1wNjZjMTFjbXoifQ.xXfUv1ofxJ0mjUwatr2PGQ';

// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter =JSONDATA.cities.filter((value) => {
//       return value.city.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };
//   const refresh = ()=>{
//     // it re-renders the component
//     setWordEntered({});


// }
//   useEffect(() => {
    
//   });



//   return (

//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//           className="SearchBars"
//         > 
//        </input> 
      
//       {filteredData.length !== 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem"  onclick="{refresh}" target="_blank" href=" "  >
//                 <p>{value.city}</p>
//               </a>
               
//             );
//           })}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default SearchBar;
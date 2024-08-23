// import { useState } from "react";
// import './styles.css'; // Make sure this CSS file includes styles for your stars

// // StarRating component with a default number of stars (5)
// export default function StarRating({ noOfStars =5 }) {
//   const [rating, setRating] = useState(0);  // State to track the currently selected rating
//   const [hover, setHover] = useState(0);  // State to track the currently hovered star

//   // Function to handle click on a star - sets the rating
//   function handleClick(getCurrentIndex) {
//     setRating(getCurrentIndex);
//   }

//   // Function to handle mouse enter on a star - sets the hover state
//   function handleMouseEnter(getCurrentIndex) {
//     setHover(getCurrentIndex);
//   }

//   // Function to handle mouse leave - resets the hover state to the current rating
//   function handleMouseLeave() {
//     setHover(rating);
//   }

//   return (
//     <div className="star-rating">
//       {/* Create an array with the length of noOfStars and map over it */}
//       {[...Array(noOfStars)].map((_, index) => {
//         // The first parameter (_) is usually the current element in the array.
//         // Here it’s named _ to signify that it is not being used (because the elements are undefined).
        
//         // Index starts at 0, so we increment by 1 to match the star number
//         index += 1;

//         return (
//           <span
//             key={index}  // Each star gets a unique key
//             className={index <= (hover || rating) ? "star active" : "star"} // Apply CSS class based on hover or rating state
//             onClick={() => handleClick(index)}  // Set rating on star click
//             onMouseMove={() => handleMouseEnter(index)}  // Set hover state on mouse move
//             onMouseLeave={() => handleMouseLeave()}  // Reset hover state on mouse leave
//           >
//             &#9733; {/* HTML entity for a star symbol */}
//           </span>
//         );
//       })}
//     </div>
//   );
// }

// import { useState } from "react"; // Importing the useState hook from React
// import { FaStar } from "react-icons/fa"; // Importing the FaStar icon from react-icons
// import './styles.css'; // Importing the CSS file for styling

// // StarRating component with a default number of stars (5)
// export default function StarRating({ noOfStars = 5 }) {
//   // State to track the currently selected rating
//   const [rating, setRating] = useState(0);
  
//   // State to track the currently hovered star
//   const [hover, setHover] = useState(0);

//   // Function to handle click on a star - sets the rating
//   function handleClick(getCurrentIndex) {
//     setRating(getCurrentIndex);
//   }

//   // Function to handle mouse enter on a star - sets the hover state
//   function handleMouseEnter(getCurrentIndex) {
//     setHover(getCurrentIndex);
//   }

//   // Function to handle mouse leave - resets the hover state to the current rating
//   function handleMouseLeave() {
//     setHover(rating);
//   }

//   return (
//     <div className="star-rating">
//       {/* Create an array with the length of noOfStars and map over it */}
//       {[...Array(noOfStars)].map((_, index) => {
//         // The first parameter (_) is usually the current element in the array.
//         // Here it’s named _ to signify that it is not being used (because the elements are undefined).
        
//         // Index starts at 0, so we increment by 1 to match the star number
//         index += 1;

//         return (
//           <FaStar
//             key={index} // Each star gets a unique key
//             className={index <= (hover || rating) ? "active" : "inactive"} // Apply CSS class based on hover or rating state
//             onClick={() => handleClick(index)} // Set rating on star click
//             onMouseMove={() => handleMouseEnter(index)} // Set hover state on mouse move
//             onMouseLeave={() => handleMouseLeave()} // Reset hover state on mouse leave
//             size={40} // Set size of the star icon
//           />
//         );
//       })}
//     </div>
//   );
// }


import { useState } from "react"; // Importing the useState hook from React
import { FaStar } from "react-icons/fa"; // Importing the FaStar icon from react-icons
import './styles.css'; // Importing the CSS file for styling
export default function StarRating({noofStars=5}) {

    const [rating, setRating] = useState(0); // Initializing the rating state with a
     const [hover, setHover] = useState(0); // Initializing the hover state with a


    return <div className="star-rating">
    {
        [...Array(noofStars)].map((_,index)=>{
              index = index + 1;

              return(<FaStar
              key={index}
              className={index <=(hover || rating) ? 'active' : 'inactive'}
              onClick={() => setRating(index)}
              onMouseMove={()=>setHover(index)}
              onMouseLeave={()=>setHover(rating)}
              />)
        })
    }
    </div>;
}
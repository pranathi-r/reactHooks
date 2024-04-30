// import React, { useState } from "react";

// const UseState = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// };

// export default UseState;

import React, { useState, useEffect } from "react";

const PopupMessage = ({ message }) => {
  return <div className="popup">{message}</div>;
};

const UseState = () => {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {showPopup && <PopupMessage message={`Count changed to: ${count}`} />}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseState;
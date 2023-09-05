import React, { useState } from "react";

function TenArr() {
  const [array, setArray] = useState([]);

  const handleButtonClick = () => {
    const newArray = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 9) + 1)
    );
    console.log(newArray);
    setArray(newArray);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>配列を表示</button>
      <table>
        <tbody>
          {array.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (                                                                                                                                                                                                                                                      
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TenArr;

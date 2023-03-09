import React from "react";

const Recepieindex = () => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return <>
    {
        alpha.map(i =>{
            return (
                <div className="numBox">
                    <h3>{i}</h3>
                </div>
            )
        })
    }
  </>;
};

export default Recepieindex;

import React, { useState } from "react";
import Counter from "./Counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { item: "mask", quantity: 3, price: 3.4 },
  ]);

  return counters.map((counter, index) => {
    <Counter key={index} counter={counter} />;
  });
};
export default Counters;

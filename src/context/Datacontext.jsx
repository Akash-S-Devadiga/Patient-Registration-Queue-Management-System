import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext()

const Datacontext = (props) => {
  const [value1, setvalue1] = useState("")
  const [value2, setvalue2] = useState("")
  const [total, settotal] = useState([])

  return (
    <DataContext.Provider value={{ value1, setvalue1, value2, setvalue2, total, settotal }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Datacontext
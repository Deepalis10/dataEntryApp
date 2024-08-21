import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState, useRef } from "react";

function App() {
  const [records, setRecords] = useState([
    {
      name: "Deepali",
      address: "Jabalpur",
      gender: "Female",
      age: "27",
    },
    {
      name: "Adarsh",
      address: "Jabalpur",
      gender: "male",
      age: "27",
    },
  ]);
  return (
    <div className="App">
      <Header setRecords={setRecords} />
      <Body records={records} setRecords={setRecords} />
    </div>
  );
}

export default App;

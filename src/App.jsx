import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-16">
      <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <Card number="ONE" />
        <Card number="TWO" />
        <Card number="THREE" />
        <Card number="FOUR" />
        <Card number="FIVE" />
        <Card number="SIX" />
        <Card number="SEVEN" />
        <Card number="EIGHT" />
        <Card number="NINE" />
        <Card number="TEN" />
        <Card number="ELEVEN" />
        <Card number="TWELVE" />
      </div>
    </div>
  );
}

export default App;

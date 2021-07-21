import React from "react";
import "./paletteTester.scss";

var array = ["one", "two", "three", "four", "five"];

const paletteTester = () => {
  array = randomizeOrder(array);
  return (
    <div>
      {array.map((color) => (
        <div id={color} />
      ))}
    </div>
  );
};

function randomizeOrder(array) {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default paletteTester;

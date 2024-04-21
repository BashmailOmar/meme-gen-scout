import React from "react";
import memesData from "../memesData";
export default function Meme() {
  let url;

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main className="p-9">
      <div className="grid grid-rows-2 grid-cols-2 items-center justify-center">
        <div>
          <label htmlFor="top">Top text</label>
          <input
            id="top"
            type="text"
            placeholder="Top text"
            className="rounded-md border shadow-md p-2 m-2 "
          />
        </div>
        <div>
          <label htmlFor="bottom">Bottom text</label>
          <input
            id="bottom"
            type="text"
            placeholder="Bottom text"
            className="rounded-md border shadow-md p-2 m-2"
          />
        </div>

        <button
          onClick={getMemeImage}
          className="col-span-2 bg-purple-800 text-white py-2 px-8 rounded-md m-2 shadow-md"
        >
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

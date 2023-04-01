import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Something() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJokeFromServer();
  }, []);

  async function getJokeFromServer() {
    const dadJokeUri = "https://icanhazdadjoke.com";
    try {
      const response = await axios.get(dadJokeUri, {
        headers: {
          Accept: "application/json",
          "User-Agent": "Dad Jokes (https://github.com/prajvalhl/dad-jokes)"
        }
      });
      setJoke(response.data.joke);
    } catch (e) {
      alert("Something wrong with the server! try again after sometime!");
    }
  }
  return (
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <h2 className="container text-2xl px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">{joke}</h2>
      <button className="items-center sm:flex-row flex-col border-2 border-dashed border-red-700" onClick={getJokeFromServer}>Tell me Another!</button>
    </div>
  );
}

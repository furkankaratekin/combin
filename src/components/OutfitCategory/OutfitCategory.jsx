import React, { useState } from "react";
import { category } from "./Data.jsx";

const OutfitCategory = () => {
  const [cinsiyett, setCinsiyett] = useState("Cinsiyet");
  const [tarzz, setTarzz] = useState("Tarz");
  const [ustt, setUstt] = useState("Üst");
  const [altt, setAltt] = useState("Alt");
  const [ustRenkk, setUstRenkk] = useState("Üst Renk");
  const [altRenkk, setAltRenkk] = useState("Alt Renk");

  const [tarz, setTarz] = useState([]);
  const [ust, setUst] = useState([]);
  const [alt, setAlt] = useState([]);

  const changeCinsiyet = (event) => {
    setCinsiyett(event.target.value);

    setTarz(
      category.find((cnsyt) => cnsyt.cinsiyet === event.target.value).tarz
    );
    setUst(category.find((cnsyt) => cnsyt.cinsiyet === event.target.value).ust);
    setAlt(category.find((cnsyt) => cnsyt.cinsiyet === event.target.value).alt);
  };
  const changeTarzz = (event) => {
    setTarzz(event.target.value);
  };
  const changeUstt = (event) => {
    setUstt(event.target.value);
  };
  const changeAltt = (event) => {
    setAltt(event.target.value);
  };
  const changeUstRenkk = (event) => {
    setUstRenkk(event.target.value);
  };
  const changeAltRenkk = (event) => {
    setAltRenkk(event.target.value);
  };

  return (
    <div className="m-10 w-screen max-w-screen-lg">
      <div className="flex flex-col">
        <div className="p-6">
          <form className="">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Cinsiyet
                </label>
                <select
                  value={cinsiyett}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={changeCinsiyet}
                >
                  {category.map((cnsyt) => (
                    <option value={cnsyt.cinsiyet}>{cnsyt.cinsiyet}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Tarz
                </label>
                <select
                  value={tarzz}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={changeTarzz}
                >
                  {tarz.map((tarzz) => (
                    <option value={tarzz.name}>{tarzz.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Üst
                </label>
                <select
                  value={ustt}
                  onChange={changeUstt}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {ust.map((ustt) => (
                    <option value={ustt.name}>{ustt.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Alt
                </label>
                <select
                  value={altt}
                  onChange={changeAltt}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {alt.map((altt) => (
                    <option value={altt.name}>{altt.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Üst Renk
                </label>
                <select
                  value={ustRenkk}
                  onChange={changeUstRenkk}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Üst Renk</option>
                  {category[0].ustRenk.map((renk) => (
                    <option key={renk.name} value={renk.name}>
                      {renk.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Alt Renk
                </label>
                <select
                  value={altRenkk}
                  onChange={changeAltRenkk}
                  className="mt-2 block w-full max-w-xs rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Alt Renk</option>
                  {category[0].altRenk.map((renk) => (
                    <option key={renk.name} value={renk.name}>
                      {renk.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 grid w-full  grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OutfitCategory;

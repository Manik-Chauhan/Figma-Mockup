import React, { useState } from "react";
import {
  ArrowDownCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar():JSX.Element {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <>
      <div className="flex flex-row mt-40 ml-24  bg-white font-poppins">
        <div className="relative column-1 w-1/4 h-screen bg-custom-blue justify-center overflow-scroll overscroll-contain ">
          <div className="flex flex-col items-center py-6  bg-blue-500 mb-10 font-mono text-xl font-black mr-20 rounded-lg">
            <h1>Perfios APIS</h1>
          </div>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4  bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 6</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 7</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 8</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 9</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 10</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 11</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 12</h1>
          </a>

          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer mr-20 rounded"
          >
            <h1>API 13</h1>
          </a>
        </div>
        <div className="flex flex-col md:flex-row w-11/12 ">
          <div className="column-2 w-full md:w-6/12 h-full border-2 border-solid md:mx-2 my-2 rounded-md divide-y divide-dashed">
            <div className="m-6 font-poppins">
              <h1 className="mb-2 text-4xl">Create Order</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                nibh tortor id aliquet lectus proin nibh nisl condimentum. Donec
                ultrices tincidunt arcu non. Tellus in hac habitasse platea
                dictumst vestibulum rhoncus est.
              </p>
            </div>

            <div className="m-6 font-poppins">
              <h1 className="mb-2 mt-2 text-2xl ">Sandbox and Production Endpoint</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                nibh tortor id aliquet lectus proin nibh nisl condimentum. Donec
                ultrices tincidunt arcu non. Tellus in hac habitasse platea
                dictumst vestibulum rhoncus est.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                nibh tortor id aliquet lectus proin nibh nisl condimentum. Donec
                ultrices tincidunt arcu non. Tellus in hac habitasse platea
                dictumst vestibulum rhoncus est.
              </p>
            </div>

            <div className="m-6 pt-2 pb-2 font-poppins">
              <h1 className="mb-2 text-2xl ">Response Codes</h1>
              <p>
                You can check the list of error codes sent by Cashfree here -
                Error Codes
              </p>
              <h3 className="pt-2 pb-2 text-xl">BODY PARAMS</h3>

              <div className="bg-[#D9D9D9]">


                <div  className="border-2 rounded-md p-2"><h1>Option 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sunt consequatur fugiat atque veritatis, cumque voluptates quaerat enim quisquam omnis vitae nemo deleniti est aliquam possimus! Dolore facilis similique quas.</p></div>
                <div  className="border-2 rounded-md p-2"><h1>Option 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sunt consequatur fugiat atque veritatis, cumque voluptates quaerat enim quisquam omnis vitae nemo deleniti est aliquam possimus! Dolore facilis similique quas.</p></div>
                <div  className="border-2 rounded-md p-2"><h1>Option 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sunt consequatur fugiat atque veritatis, cumque voluptates quaerat enim quisquam omnis vitae nemo deleniti est aliquam possimus! Dolore facilis similique quas.</p></div>
                <div className="border-2 rounded-md p-2"><h1>Option 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sunt consequatur fugiat atque veritatis, cumque voluptates quaerat enim quisquam omnis vitae nemo deleniti est aliquam possimus! Dolore facilis similique quas.</p></div>



              </div>

            </div>
          </div>
          <div className="column-3 w-full md:w-5/12 h-full  md:mx-2 my-2 rounded-md">
            <div className="m-6 font-poppins">
              <h1 className="mb-2 ">Language</h1>
              <div className="flex justify-centre ">
                <div className="border rounded p-6 m-2">Shell</div>
                <div className="border rounded p-6 m-2">Ruby</div>
                <div className="border rounded p-6 m-2">Node</div>
                <div className="border rounded p-6 m-2">Py</div>
              </div>
              <h1>URL</h1>
              <div>
                <input className="placeholder-white bg-slate-600 border" placeholder="Base url:"/>
              </div>

              <div className="mt-6  font-poppins">
                <input className="placeholder-white  pr-16 bg-[#354248] text-white" placeholder="Curl"/>
                <input className="placeholder-white  pr-16 pb-20 bg-[#354248] text-white" placeholder="Request"/>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

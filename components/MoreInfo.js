import React from "react";
import Image from "next/image";
import cv from "../public/resume.jpg";
import { saveAs } from "file-saver";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Link from "next/link";

const MoreInfo = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const resume = () => {
    saveAs(
      "https://drive.google.com/file/d/17xS10UWT-cNBBHZbeB1t_lW4m3gOyQLd/view?usp=sharing",
      "print.pdf"
    );
  };
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 text-center">
          <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white justify-center dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
              <div className=" text-white z-10 bg-[red] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                <h1>Resume</h1>
              </div>
              <div className="h-full w-full relative border-2 border-white rounded-2xl">
                <button onClick={resume}>
                  <Image
                    src={cv}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-2xl"
                  />
                </button>
              </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
              <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">
                More Information
              </p>
              <h1 className="m-2 text-4xl font-bold dark:text-white">
                Click on the image to access my Resume.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

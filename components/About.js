import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

const About = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 text-center">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={"red"}>
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                about me
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
          <div className="mt-9text-size-9 text-gray-800 dark:text-white contentbox">
            <br />
            <p className="mb-7 leading-loose text-2xl md:text-2xl font-semibold  mx-4">
              Hello!.. I am <b>Praveen</b> Nithiyananda, from Sri Lanka and I am
              currently working as a Software Engineer.
              <br />
              My interests lies in Cricket, Movies, Series, Books and I like
              learning new IT technologies
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

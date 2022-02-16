import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

function BaseCard(props) {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-10 lg:mt-12 text-center">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={"#6495ED"}>
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                connect with me
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
          <br></br>
          <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
            <div className=" pt-50 pr-2 pl-2 flex flex-row justify-around flex-wrap">
              <Link
                href={{
                  pathname: "mailto: sendprav@duck.com",
                }}
                target="_blank"
              >
                <div className="flex flex-row items-center m-5">
                  <button>
                    {" "}
                    <FaGoogle size={100} color="#61DBFB" />
                  </button>
                </div>
              </Link>
              <Link
                href={{
                  pathname: "https://www.linkedin.com/in/praveen-nithiyananda",
                }}
                target="_blank"
              >
                <div className="flex flex-row items-center m-5">
                  <button>
                    {" "}
                    <FaLinkedin size={100} color="#007acc" />
                  </button>
                </div>
              </Link>
              <Link
                href={{
                  pathname: "https://discord.com/users/HansenTom#1195",
                }}
                target="_blank"
              >
                <div className="flex flex-row items-center m-2">
                  <button>
                    {" "}
                    <FaDiscord size={100} className="dark:text-white" />
                  </button>
                </div>
              </Link>
              <Link
                href={{
                  pathname: "https://github.com/Praveen28j",
                }}
                target="_blank"
              >
                <div className="flex flex-row items-center m-2">
                  <button>
                    <FaGithub size={100} className="dark:text-white" />
                  </button>
                </div>
              </Link>
              {/* <div className="flex flex-row items-center m-2">
                <FaMedium size={100} className="dark:text-white" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div style={{ background: props.color, width: "100%", height: "100%" }} />
  );
}

export default function Links() {
  return (
    <div className="App">
      <BaseCard
        visible={4}
        spacing={6}
        ratio={0.3}
        children={<Box color="#aaa" />}
      />
    </div>
  );
}

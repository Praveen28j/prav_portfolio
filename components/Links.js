import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import ReactDOM from "react-dom";

function BaseCard(props) {
  return (
    // <div className="container px-4 mx-auto">
    //   <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
    //     <div className="lg:px-4 lg:mt-12 text-center">
    <div>
      <RoughNotationGroup show={true}>
        <RainbowHighlight color={"red"}>
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  text-center dark:text-white">
            about me
          </h1>
        </RainbowHighlight>
      </RoughNotationGroup>
      <div style={{ padding: 24 }}>
        <div
          style={{
            overflow: "hidden",
            margin: "0 -24px 12px",
          }}
        ></div>
      </div>
    </div>
    // </div>
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

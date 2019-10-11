import React, { useState } from "react";
import {
  useIntersect,
  UseIntersectConfig,
  Intersect,
  withIntersect
} from "../Intersect";

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const DummySpace = () => {
  return (
    <>
      {Array.from(Array(30).keys(), i => (
        <br />
      ))}
    </>
  );
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const config: UseIntersectConfig = {
    threshold: buildThresholdArray(),
    rootMargin: "10px",
    callback: (entry: IntersectionObserverEntry) => {
      const ratio = Math.ceil(entry.intersectionRatio * 100);
      if (ratio >= 100) setLoading(true);
      else setLoading(false);
      console.log(ratio);
    }
  };

  const NewDiv = withIntersect(config)(({ ref, entry }) => {
    console.log(typeof ref);

    return (
      <div style={{ backgroundColor: "red", height: "40vh" }} ref={ref}>
        Fie: {entry && entry.intersectionRatio}
      </div>
    );
  });
  const [ref, entry] = useIntersect(config);
  return (
    <>
      <DummySpace />
      <div>{loading ? "yeay loading" : "nooo!"}</div>
      <div style={{ backgroundColor: "red", height: "40vh" }} ref={ref}>
        Fie: {entry && entry.intersectionRatio}
      </div>
      <DummySpace />
      <Intersect config={config}>
        {(iref, ientry) => (
          <div style={{ backgroundColor: "red", height: "40vh" }} ref={iref}>
            Fie: {ientry && ientry.intersectionRatio}
          </div>
        )}
      </Intersect>
      <DummySpace />
      <NewDiv />
    </>
  );
};

export default App;

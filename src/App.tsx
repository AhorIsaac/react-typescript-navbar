import React from "react";
import Navbar from "./Navbar";

export interface IApp {}

const App: React.FC<IApp> = (): React.ReactElement => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;

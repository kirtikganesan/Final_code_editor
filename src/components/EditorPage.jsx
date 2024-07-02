import React from "react";
import Navbar from "../components/Navbar";
import Problem from "../components/Problem";
import CodeEditor from "./CodeEditor";


const EditorPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full">
          <Problem />
        </div>
        <div className="w-full">
          <CodeEditor/>
        </div>
      </div>
    </>
  );
};

export default EditorPage;

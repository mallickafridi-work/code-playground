import { useState, useEffect } from "react";
import Header from "../components/1_Header/Header";
import ContentWrapper from "../components/2_Content/ContentWrapper";

function App() {

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Header title="code-playground" />
      <ContentWrapper />
    </div >
  )
}

export default App
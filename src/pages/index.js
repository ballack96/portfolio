import React from "react";
import Header from "../components/header";
import Bio from "../components/Bio";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <Bio />
        <Carousel />
      </div>
      {/* Add other sections or components as needed */}
    </main>
  );
}

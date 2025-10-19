import React from "react";
import { assets } from "./assets/assets.js";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src={assets.BannerImg}
        alt="Banner"
        style={{
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

export default Home;



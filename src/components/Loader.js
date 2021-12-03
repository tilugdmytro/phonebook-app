import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner() {
  return (
    <div>
      <Loader
        type="Oval"
        color="#A9A9A9"
        height={80}
        width={80}
        timeout={3000}
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

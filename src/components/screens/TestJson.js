import React from "react";
import provinsi from "../Json/Provinsi";

function TestJson() {
  return (
    <div>
      <h1>Testing</h1>
      {provinsi.provinsi.map((provinsidetail, index) => {
        return <h1>{provinsidetail.nama}</h1>;
      })}
    </div>
  );
}

export default TestJson;

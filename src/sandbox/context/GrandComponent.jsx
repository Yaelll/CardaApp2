import React from "react";
import Dataprovider from "./DataProvider";
import FatherComponent from "./FatherComponent";

export default function GrandComponent() {
  return (
    <div>
      <Dataprovider>
        <FatherComponent />
      </Dataprovider>
    </div>
  );
}

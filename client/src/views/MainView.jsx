import { useState } from "react";
import React from "react";
import PropertyDisplay from "../components/PropertyDisplay.jsx";
import PropertyCreate from "../components/PropertyCreate.jsx";

const MainView = (props) => {
  const [propertyList, setPropertyList] = useState([]);

  return (
     <div className="main-view">
      <PropertyDisplay
        propertyList={propertyList}
        setPropertyList={setPropertyList}
      />
      <PropertyCreate
        propertyList={propertyList}
        setPropertyList={setPropertyList}
      />
    
    </div>
  );
};

export default MainView;

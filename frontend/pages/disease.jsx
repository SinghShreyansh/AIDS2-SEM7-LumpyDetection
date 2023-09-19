import React, { useState, useEffect } from "react";
import DiseaseForm from "components/DiseaseForm";
import Cow from "components/Cow";

export default function Disease() {
  const [loading, setLoading] = useState(false);



  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (

      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <DiseaseForm />
        </div>
      </div>
  );
}



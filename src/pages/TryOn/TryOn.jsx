import { useState } from "react";
import TryOnHero from "./components/TryOnHero";
import TryOnForm from "./components/TryOnForm";
import TryOnMeasurements from "./components/TryOnMeasurements";
import TryOnSilhouette from "./components/TryOnSilhouette";
import TryOnMotif from "./components/TryOnMotif";
import TryOnResult from "./components/TryOnResult";

const TryOn = () => {
  // Master State Management
  const [selectedForm, setSelectedForm] = useState(null);
  const [measurements, setMeasurements] = useState({ height: "", weight: "" });
  const [selectedSilhouette, setSelectedSilhouette] = useState(null);
  const [selectedMotif, setSelectedMotif] = useState(null);

  // Payload data for the final summary and future API checkout
  const currentSelections = {
    form: selectedForm,
    measurements: measurements,
    silhouette: selectedSilhouette,
    motif: selectedMotif
  };

  return (
    <div className="bg-[#FAF6F2] min-h-screen">
      <TryOnHero />
      
      <TryOnForm 
        selectedForm={selectedForm} 
        setSelectedForm={setSelectedForm} 
      />
      
      <TryOnMeasurements 
        measurements={measurements} 
        setMeasurements={setMeasurements} 
      />
      
      <TryOnSilhouette 
        selectedSilhouette={selectedSilhouette} 
        setSelectedSilhouette={setSelectedSilhouette} 
      />
      
      <TryOnMotif 
        selectedMotif={selectedMotif} 
        setSelectedMotif={setSelectedMotif} 
      />
      
      <TryOnResult 
        selections={currentSelections} 
      />
    </div>
  );
};

export default TryOn;
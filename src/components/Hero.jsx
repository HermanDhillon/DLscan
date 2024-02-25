import DLsamplePic from "../assets/DLsamplePic.jpg";
import WebcamModal from "./WebcamModal";
import Results from "./Results";
import { useState } from "react";

function Hero() {
  const [camPaused, setCamPaused] = useState(true); // state used for camera on/off
  const [result, setResult] = useState(undefined); // the parsed result of a barcode scan

  return (
    <>
      <WebcamModal
        camPaused={camPaused}
        setCamPaused={setCamPaused}
        setResult={setResult}
      />
      <div className="m-5 md:m-20">
        <div className="hero min-h-screen bg-base-300 rounded-lg">
          <div className="hero-content flex-col gap-20">
            <img
              src={DLsamplePic}
              className="max-w-sm rounded-2xl shadow-2xl w-[100%]"
            />
            <div className="md:mx-10">
              <h1 className="text-5xl font-bold">Scan your Driver License</h1>
              <p className="py-6">
                This simple application allows you to use your webcam to scan
                the barcode on your USA issued Driver License and extract
                information from it to use however you want. Information such
                as: Full name, Address, DL issuance & expiration dates, etc. Get
                started by clicking the "Scan License" button!
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  webcamModal.showModal(); // opens webcam/instruction modal on click
                  setCamPaused(false); // turns on webcam
                }}
                disabled={result ? true : false} // disable scan button if result is not reset
              >
                Scan License
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* conditionally render results display if result state is set after successful scan*/}
      {result != null && (
        <Results result={result} setResult={setResult} id="results" />
      )}
    </>
  );
}

export default Hero;

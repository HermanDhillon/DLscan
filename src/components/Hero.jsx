import DLsamplePic from "../assets/DLsamplePic.jpg";
import WebcamModal from "./WebcamModal";
import { useState } from "react";

function Hero() {
  const [camPaused, setCamPaused] = useState(true);
  const [result, setResult] = useState(null);

  return (
    <>
      <WebcamModal
        camPaused={camPaused}
        setCamPaused={setCamPaused}
        result={result}
        setResult={setResult}
      />
      <div className="m-5 md:m-20">
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={DLsamplePic}
              className="max-w-sm rounded-2xl shadow-2xl w-[100%]"
            />
            <div>
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
                  webcamModal.showModal();
                  setCamPaused(false);
                }}
              >
                Scan License
              </button>
            </div>
          </div>
        </div>
      </div>
      {result && (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Result</h1>
              <p className="py-6">{JSON.stringify(result)}</p>
              <button onClick={setResult(null)} className="btn btn-primary">
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;

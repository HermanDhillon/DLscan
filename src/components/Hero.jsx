import DLsamplePic from "../assets/DLsamplePic.jpg";
import WebcamModal from "./WebcamModal";

function Hero() {
  return (
    <>
      <WebcamModal />
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
                onClick={() => webcamModal.showModal()}
              >
                Scan License
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

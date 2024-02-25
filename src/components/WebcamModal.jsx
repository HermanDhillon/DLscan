import Scanner from "./Scanner";
import BarcodeExamplePic from "../assets/BarcodeExample.png";

function WebcamModal(props) {
  const { setCamPaused, setResult, camPaused } = props;

  function handleCam() {
    setCamPaused(true);
  }
  return (
    <>
      <dialog id="webcamModal" className="modal">
        <div className="modal-box p-0 max-w-[80rem]">
          <form method="dialog">
            <button
              onClick={handleCam}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50"
            >
              ✕
            </button>
          </form>
          <div className="card lg:card-side shadow-xl bg-slate-200">
            <Scanner
              setResult={setResult}
              camPaused={camPaused}
              setCamPaused={setCamPaused}
            />

            <div className="card-body">
              <ol className="text-lg font-semibold flex-col">
                <li className="mb-2">1. Ensure you have bright lighting.</li>
                <li>
                  2. Locate the barcode on the back of the license, similar to
                  the one in the green rectangle shown in the image below.
                </li>
                <img className="mx-auto mb-2" src={BarcodeExamplePic}></img>
                <li className="mb-2">
                  3. Bring barcode as close as possible to camera while also
                  making sure the entirety of it is in frame.
                </li>
                <li>
                  4. Allow the camera to focus, moving the card back and forth
                  if necessary.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCam}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default WebcamModal;

import Scanner from "./Scanner";
import { useState } from "react";

function WebcamModal() {
  const [result, setResult] = useState("");
  return (
    <>
      <dialog id="webcamModal" className="modal">
        <div className="modal-box p-0 max-w-6xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50">
              ✕
            </button>
          </form>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Scanner setResult={setResult} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Scan the large Barcode on the back of the License
              </h2>
              <p>{result}</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default WebcamModal;

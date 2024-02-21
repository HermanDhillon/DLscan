import { useState, useEffect } from "react";
import Quagga from "quagga";

function BarcodeScanner() {
  const [result, setResult] = useState("");

  useEffect(() =>
    Quagga.init(
      {
        locate: true,
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#webcam"), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    )
  );

  return (
    <>
      <video id="webcam" />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
}
export default BarcodeScanner;

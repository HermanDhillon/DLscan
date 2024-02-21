import { useMediaDevices } from "react-media-devices";
import { useZxing } from "react-zxing";
import Webcam from "react-webcam";

function BarcodeScanner() {
  return (
    <div>
      <Webcam />
    </div>
  );
}

export default BarcodeScanner;

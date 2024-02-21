import { useMediaDevices } from "react-media-devices";
import { useZxing } from "react-zxing";
import Webcam from "react-webcam";

function BarcodeScanner() {
  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
      />
    </div>
  );
}

export default BarcodeScanner;

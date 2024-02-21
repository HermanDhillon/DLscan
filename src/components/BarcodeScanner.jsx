import { useState } from "react";
import { useZxing } from "react-zxing";
import Webcam from "react-webcam";

function BarcodeScanner() {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });
  return (
    <div>
      <Webcam audio={false} height={720} width={1280} ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
}

export default BarcodeScanner;

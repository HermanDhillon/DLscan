import { useZxing } from "react-zxing";
import { Parser } from "driver-license-parser";

function Scanner(props) {
  const { setResult, setCamPaused, camPaused } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(Parser(result.getText()));
      setCamPaused(true);
      webcamModal.close();
    },
    paused: camPaused,
  });

  return <video ref={ref} />;
}

export default Scanner;

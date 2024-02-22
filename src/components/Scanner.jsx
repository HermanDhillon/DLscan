import { useZxing } from "react-zxing";
import { Parser } from "driver-license-parser";

function Scanner(props) {
  const { setResult, setCamPaused, camPaused } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(Parser(result.getText()));
      console.log(Parser(result.getText()));
      console.log("RAW: ", result.getText());
      setCamPaused(true);
      webcamModal.close();
    },
    paused: camPaused,
  });

  return <video ref={ref} />;
}

export default Scanner;

import { useZxing } from "react-zxing";
import { Parser } from "driver-license-parser";

function Scanner(props) {
  const { setResult } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(Parser(result.getText()));
    },
  });

  return <video ref={ref} />;
}

export default Scanner;

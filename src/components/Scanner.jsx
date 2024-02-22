import { useZxing } from "react-zxing";
import { Parser } from "driver-license-parser";

function Scanner(props) {
  const { setResult } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(Parser(result.getText()).parse());
      console.log(Parser(result.getText()).parse());
    },
  });

  return <video ref={ref} />;
}

export default Scanner;

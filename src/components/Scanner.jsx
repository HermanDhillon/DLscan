import { useZxing } from "react-zxing";
const { parse } = require("driver-license-parser");

function Scanner(props) {
  const { setResult } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(parse(result.getText()));
    },
  });

  return <video ref={ref} />;
}

export default Scanner;

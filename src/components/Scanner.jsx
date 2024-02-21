import { useZxing } from "react-zxing";

function Scanner(props) {
  const { setResult } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log("got result");
    },
  });

  return <video ref={ref} className=" w-full" />;
}

export default Scanner;

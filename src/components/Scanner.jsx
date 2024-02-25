import { useZxing } from "react-zxing"; // Barcode scanning library
import { Parser } from "driver-license-parser";

function Scanner(props) {
  const { setResult, setCamPaused, camPaused } = props;
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(Parser(result.getText()));
      setCamPaused(true);
      webcamModal.close();
      console.log(Parser(result.getText())); // Parsed license data available in console
      //timeout delay for smoother look and feel
      setTimeout(
        () =>
          document
            .getElementById("results")
            .scrollIntoView({ behavior: "smooth" }),
        250
      );
    },
    paused: camPaused,
  });

  return <video className="bg-black" ref={ref} />;
}

export default Scanner;

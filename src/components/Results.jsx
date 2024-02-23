function Results(props) {
  const { result, setResult } = props;
  const license = result["license"];
  const raw = result["raw"];
  let infoArray = [];
  delete license.country;
  for (const key in license) {
    if (license[key] !== "" && license[key] !== "//") {
      infoArray.push(
        <div className="card  card-compact w-96 m-4 bg-white text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className=" card-title text-black capitalize">{key}</h2>
            <p className="text-black">{license[key]}</p>
            <div className="card-actions justify-end right-0 ">
              <button className="btn btn-outline">Copy</button>
            </div>
          </div>
        </div>
      );
    }
    if (infoArray.length === 0) {
      infoArray.push(
        <>
          <p>Invalid Barcode</p>
          <p>Raw Data: {raw}</p>
        </>
      );
    }
  }

  return (
    <div className="m-5 md:m-20">
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl mb-10 font-bold">Results</h1>
            <div>{infoArray}</div>
            <button
              onClick={() => setResult(null)}
              className="btn mt-10 btn-primary"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;

function Results(props) {
  const { result, setResult } = props;
  const license = result.license;

  return (
    <section aria-label="scan results" id="results" className="m-5 md:m-20">
      <div className="hero min-h-screen bg-base-300 rounded-lg">
        <div className="hero-content text-center min-w-[60%]">
          <div className="">
            <h2 className="text-5xl mb-10 font-bold">
              Driver License Information
            </h2>
            <div>
              <div className="card card-normal  m-4 bg-white text-neutral-content">
                <div className="card-body flex-col md:flex-row md:justify-evenly text-left">
                  <div className=" min-w-[50%]">
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      First Name
                    </h3>
                    <p className="textarea  textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["firstName"]}
                    </p>
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      Middle Name
                    </h3>
                    <p className="textarea textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["middleName"]}
                    </p>
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      Last Name
                    </h3>
                    <p className="textarea textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["lastName"]}
                    </p>
                  </div>
                  <div className=" min-w-[50%]">
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      Issue Date
                    </h3>
                    <p className="textarea textarea-xs w-full max-w-xs text-lg text-black">
                      {license["issueDate"]}
                    </p>
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      Expiration date
                    </h3>
                    <p className="textarea textarea-xs w-full max-w-xs text-lg text-black">
                      {license["expirationDate"]}
                    </p>
                    <h3 className="label-text font-bold text-lg text-nowrap">
                      Address
                    </h3>
                    <p className="textarea textarea-xs w-full max-w-xs text-lg text-balance text-black">
                      {`${license["street"]} \n
                      ${license["city"]}, ${license["state"]} \n
                      ${license["zip"].slice(0, 5)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setResult(undefined)}
              className="btn mt-10 btn-primary"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;

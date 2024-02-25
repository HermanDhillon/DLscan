function Results(props) {
  const { result, setResult } = props;
  const license = result["license"];
  const raw = result["raw"];

  return (
    <div id="results" className="m-5 md:m-20">
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content text-center min-w-[60%]">
          <div className="">
            <h1 className="text-5xl mb-10 font-bold">Results</h1>
            <div>
              <div className="card card-normal  m-4 bg-white text-neutral-content">
                <div className="card-body flex-col gap-5 text-left">
                  <div className="gap-5">
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      First Name
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["firstName"]}
                    </p>
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      Middle Name
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["middleName"]}
                    </p>
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      Last Name
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black break-words">
                      {license["lastName"]}
                    </p>
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      Issue Date
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black">
                      {license["issueDate"]}
                    </p>
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      Expiration date
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black">
                      {license["expirationDate"]}
                    </p>
                    <h4 className="label-text font-bold text-lg text-nowrap">
                      Address
                    </h4>
                    <p className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg text-black">
                      {`${license["street"]} \n
                      ${license["city"]}, ${license["state"]} \n
                      ${license["zip"].slice(0, 6)}`}
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
    </div>
  );
}
/*

city
: 
""
country
: 
"Unknown"
dateOfBirth
: 
"//"
expirationDate
: 
"//"
firstName
: 
""
hairColor
: 
""
issueDate
: 
"//"
lastName
: 
""
middleName
: 
""
secondStreet
: 
""
state
: 
""
street
: 
""
zip
: 
""
*/
export default Results;

import DLsamplePic from "../assets/DLsamplePic.jpg";

function Hero() {
  return (
    <div className="m-5 md:m-20">
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={DLsamplePic}
            className="max-w-sm rounded-2xl shadow-2xl w-[100%]"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

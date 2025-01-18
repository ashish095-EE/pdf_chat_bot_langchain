import { Link } from "react-router";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="bg-[#FCF0EE] flex h-screen justify-center items-center px-6 md:px-12">
        <div className="flex flex-col justify-center gap-6 max-w-xl text-center md:text-left w-1/2">
          <h1 className="text-[64px] leading-tight font-bold text-gray-800 font-sans">
            Take the Work out of Workflow
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            More movement, less follow-ups: Lumin’s full-loop document workflow software means you can collaborate, edit, and get sign-off from one place.
          </p>

          <Link to="/upload">

            <button className="w-full bg-[#1E3342] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#355369] transition duration-300 text-lg">
                Get Started
            </button>
          
          
          </Link>
          
          
        </div>

        <div className="flex items-center justify-center w-1/2">
          <img
            src="image.png"
            alt="Workflow illustration"
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;

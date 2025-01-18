import { Link } from "react-router";

function Header() {
  return (
    <div className="flex justify-between p-4 bg-[#FEFEFE] items-center fixed top-0 left-0 w-full z-50">
      <div className="text-red-700 font-bold text-lg">Logo</div>
      <div className="flex w-1/3 justify-between text-black font-semibold">
        <Link to="/" className="hover:underline">HOME</Link>
        <Link to="/about" className="hover:underline">ABOUT</Link>
        <Link to="/contact" className="hover:underline">CONTACT</Link>
      </div>
      <Link to="/upload" className="flex gap-8 items-center">

        <h2 className="font-semibold">Github Repo</h2>
        <button className="bg-[#1E3342] text-white rounded-lg h-[40px] w-[126px] hover:bg-gray-800">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Header;

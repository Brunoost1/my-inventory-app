
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Search } from "../Search/Search";


const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <Link to="/" className="text-xl font-bold">
            <img src="./logo192.png" alt="" className="h-20" />
          </Link>
        </nav>
        <nav className="flex">
          <Search />{" "}
        </nav>
        <nav className="flex text-2xl">
          <Link to="/" className="mr-4">
            <FaHome />
          </Link>
          <Link to="/create">
            <IoMdAdd />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

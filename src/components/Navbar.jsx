import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-10 mt-2">
        <div>
          <h1 className="font-bold text-2xl text-blue-700"><Link to="/">
          BrotherStock
          </Link></h1>
        </div>
        <div className="flex justify-evenly">
          <Link to="/topstocks">
              Top Stocks
          </Link>
          <Link to="/news">
            News
          </Link>
          <Link to="/ourpicks">
            Our Picks
          </Link>
        </div>

        <div className="flex justify-end ">
          <Link to="/blog">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
              Blog
            </button>
          </Link>
          <Link to="/todo" className="ml-4">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg">
              Todos
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

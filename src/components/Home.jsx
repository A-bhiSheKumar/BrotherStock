const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-14 flex-col items-center text-center">
        <h1 className="text-[50px] font-bold">Make Better Investment</h1>
        <h1 className="text-[50px] mt-[-16px] font-bold">
          <span className="ml-6">Learn Risk Management Bro</span>
        </h1>

        <p className="text-gray-500 mt-4 mx-4 lg:w-2/3 xl:w-1/2">
          Welcome to the trading realm! Keep in mind, 99% of investors face
          losses. Avoid childlike behavior and always remember, success is not
          guaranteed.
        </p>
      </div>

      <form className=" flex justify-center items-center mt-8">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for Trade"
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="bg-blue-700 mr-[-10px] p-2 rounded-lg absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {/* Add your search icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Home;

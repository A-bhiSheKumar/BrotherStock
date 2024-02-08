import { useEffect, useState } from "react";

const Topstocks = () => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
    console.log("Data saved to localStorage:", input);
  }, [input]);
  

  useEffect(() => {
    const share = JSON.parse(localStorage.getItem('input'));
    if(share){
        setInput(share)
    }
    
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    setInput([]);
  };

  return (
    <>
      <div className="m-8">
        <h1 className="text-6xl font-bold">Future Stocks</h1>
        <div className="h-[200px] w-[300px] bg-red-50 mt-8"></div>
      </div>
      <div className="m-8">
        <h1 className="font-bold text-5xl">Add New Stocks</h1>
        <form onSubmit={handleSubmit}>
          {/* <input placeholder="Name of the Stock" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button> */}
          <label>
            Stock Name
            <textarea 
                placeholder="Enter the name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                
            />
                 
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Topstocks;

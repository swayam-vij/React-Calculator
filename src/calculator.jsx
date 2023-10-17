import React, { useState, useEffect } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const factorial = () => {
    const num = parseInt(result);
    if (!isNaN(num)) {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      setResult(result.toString());
    } else {
      setResult("Error");
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const squareRoot = () => {
    const num = parseFloat(result);
    if (!isNaN(num)) {
      setResult(Math.sqrt(num).toString());
    } else {
      setResult("Error");
    }
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.match(/[0-9\+\-\*\/\.\=]/)) {
        setResult(result + e.key);
      } else if (e.key === "Backspace") {
        backspace();
      } else if (e.key === "Enter" || e.key === "=") {
        calculate();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [result]);

  return (
    <div className="bg-black text-white w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-black rounded-2xl shadow-xl border-4 border-white">
        <div className="screen p-2">
          <input
            type="text"
            value={result}
            className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-100 text-2xl pt-10 w-full text-black"
            placeholder="0"
          />
        </div>

        <div className="brand flex justify-center mb-2 shadow-md text-black-500  bg-white-400 bg-opacity-10">
          <h1 className=" text-black-500 text-xs font-bold">Calculator</h1>
        </div>

        <div className="keyboard">
          <div className="m-2 flex justify-between">
            <input
              type="button"
              onClick={clearScreen}
              value="C"
              className="bg-green-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="BS"
              className="bg-green-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={backspace}
            />
            <input
              type="button"
              value="%"
              className="bg-blue-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="/"
              className="bg-blue-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
          </div>
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="<"
              className="bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value=">"
              className="bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="√"
              className="bg-yellow-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={squareRoot}
            />
            <input
              type="button"
              value="!"
              className="bg-yellow-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={factorial}
            />
          </div>
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="7"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="8"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="9"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="*"
              className="bg-red-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
          </div>

          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="4"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="5"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="6"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="-"
              className="bg-indigo-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
          </div>

          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="1"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="2"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="3"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="+"
              className="bg-purple-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
          </div>

          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="0"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="00"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="."
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              onClick={calculate}
              value="="
              className="bg-orange-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

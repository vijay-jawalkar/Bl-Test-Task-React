import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

export function SymptomsBox() {
  return (
    <div className="flex flex-col items-center py-4">
      {/* symptoms user image */}
      <div>
        <img
          src="https://img.freepik.com/free-vector/young-female-with-symptoms-coughing_23-2148486051.jpg?t=st=1709625023~exp=1709628623~hmac=25490dafca7f3603e63b592bbcf1fc72cec6258a4cc3a1d25b0f55d1e10eaf60&w=740"
          alt="symptom user"
          className="h-32 w-32 rounded-full"
        />
      </div>

      {/* symptoms info */}
      <div className="flex justify-between items-start gap-32">
        <div>
          <h3 className="text-md text-zinc-100 font-semibold">Symptoms</h3>
          <p className="text-xs text-zinc-200">read carefully 5 symptoms</p>
          <p className="text-xs text-zinc-200">of covid 19</p>
          <p className="text-[8px] flex text-zinc-200 pt-3">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </p>
        </div>

        <div className="text-xs text-zinc-200 pt-3">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

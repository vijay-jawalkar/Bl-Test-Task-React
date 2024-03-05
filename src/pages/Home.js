import React, { useEffect, useState } from "react";
import { BoxChart, BarChartBox, LiveUpdate, SymptomsBox, PieChartBox } from "../components";

function Home() {
  const [cases, setCases] = useState({
    cases: "1,218,087",
    death: "65,841",
    recovered: "253,817"
  });

  useEffect(() => {

    async function fetchData(){

      try{
        const response = await fetch("https://data.covid19india.org/data.json");
        const json = await response.json();
        
  
        setCases(prev => ({
          ...prev, cases: json.statewise[0].active,
          death: json.statewise[0].deaths,
          recovered: json.statewise[0].recovered,
        }))
      }catch(error){
       console.log("Error", error)
      }
    
    }
    fetchData()
  }, [])

 
  return (
    <main className="main h-[87vh] overflow-scroll lg:flex flex-wrap justify-start  gap-7  pe-3">
      {/* left */}
      <div className="w-full  lg:w-8/12 lg:h-full  ">
        {/* chart box -> cases, death and recovery */}
        <div className="flex flex-col lg:flex-row justify-start items-center gap-3 ">
          <div className="h-40 w-full lg:w-1/3  rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
            <BoxChart
              color={"rgb(13, 157, 197)"}
              count={cases.cases}
              title={"Cases"}
              percentage={"23%"}
            />
          </div>
          <div className="h-40 w-full lg:w-1/3 rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
            <BoxChart
              color={"rgb(239 68 68)"}
              count={cases.death}
              title={"Death"}
              percentage={"19%"}
            />
          </div>
          <div className="h-40 w-full lg:w-1/3  rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
            <BoxChart
              color={"rgb(101 163 13)"}
              count={cases.recovered}
              title={"Recovered"}
              percentage={"15%"}
            />
          </div>
        </div>

        {/* bar chart -> covide 19 statics */}
        <div className="h-96 w-full  my-3 rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
          <BarChartBox />
        </div>

        {/* world map */}
        <div className="lg-auto lg:h-80 w-full  my-3 rounded-2xl overflow-hidden shadow-md shadow-zinc-200"> 
          <PieChartBox/>
        </div>
      </div>

      {/* right */}
      <div className="w-full  lg:w-3/12 h-full   ">
        {/* live updates */}
        <div className="w-full h-auto overflow-hidden mb-4 rounded-2xl  shadow-md shadow-zinc-200 bg-white">
          {" "}
          <LiveUpdate />{" "}
        </div>

        {/* symptoms */}
        <div className="w-full h-[242px] rounded-2xl overflow-hidden  shadow-md shadow-zinc-200 bg-blue-700">
          {" "}
          <SymptomsBox />{" "}
        </div>
      </div>
    </main>
  );
}

export default Home;

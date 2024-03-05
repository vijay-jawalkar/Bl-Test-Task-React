import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { GoDotFill } from "react-icons/go";

export function PieChartBox() {

    const data = [
        {name: "Active",value:300, color: "#0088fe"},
        {name: "Death",value:100, color: "rgb(244 63 94)"},
        {name: "Recovered",value:250, color: "rgb(163 230 53)"},
      
    ];


  return (
    <div className='flex flex-col lg:flex-row lg:justify-around lg:items-start gap-2 h-full w-full px-5 py-4 bg-white' >
        {/* world info */}
        <div className='flex-3 pt-4 mx-auto'> 
        <h3 className=" px-2">
        <span className="text-lg font-semibold text-zinc-700 pe-1">
        World Map
        </span>
        <span className="text-xs"> view all </span>
      </h3>

      <ul className='list-none py-4'>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 311,637 </span>   <span className='text-zinc-500'> USA </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600'> 130,759 </span>   <span className='text-zinc-500'>  Spain </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 124,632 </span>   <span className='text-zinc-500'> Italy </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 96,471 </span>   <span className='text-zinc-500'> Germany </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 89,953 </span>   <span className='text-zinc-500'> France </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 81,699 </span>   <span className='text-zinc-500'> China </span> </li>
     <li className='flex gap-2'> <span className='text-md font-semibold text-zinc-600 '> 58,226 </span>   <span className='text-zinc-500'> Iran </span> </li>
      </ul>
        </div>

        {/* pie chart */}
        <div className=' h-full w-1/4 flex-1 flex flex-col mx-16 lg:mx-auto'>
            <div>
            <ResponsiveContainer width="99%" height={190}>
            <PieChart >
            <Tooltip
            contentStyle={{background: "white", borderRadius:"5px"}}/>
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell 
            key={item.name}
             fill={item.color} />
          ))}
        </Pie>
      </PieChart>
            </ResponsiveContainer>
            </div>
        
        <div className='mx-auto'>
        <ul >
         <li className='flex gap-20'> <p className='w-1/3 flex items-center gap-1'> <p style={{color: "rgb(244 63 94)"}}> <GoDotFill/> </p>  <p className='text-zinc-500'> Death </p> </p> <p style={{color: "rgb(244 63 94)"}}> 10% </p></li> 
         <li className='flex gap-20'> <p className='w-1/3 flex items-center gap-1'> <p style={{color: "rgb(163 230 53)"}}> <GoDotFill/> </p>  <p className='text-zinc-500'> Recovery </p> </p> <p style={{color: "rgb(163 230 53)"}}> 25% </p></li> 
         <li className='flex gap-20'> <p className='w-1/3 flex items-center gap-1'> <p style={{color: "#0088fe"}}> <GoDotFill/> </p>  <p className='text-zinc-500'> Active </p> </p> <p style={{color: "#0088fe"}}> 30% </p></li> 
            </ul>
        </div>
           
        </div>

         {/* map */}
         <div className='flex-1'> 
         <img src = "https://img.freepik.com/free-vector/illustration-global-icon_53876-9267.jpg?t=st=1709639172~exp=1709642772~hmac=97f01bcd418ae21cdbda1f59ae121140c8e0f1644181f0baf86f846906aa7dac&w=1060" alt = "map" className='h-full w-full' />
         </div>
    </div>
  )
}

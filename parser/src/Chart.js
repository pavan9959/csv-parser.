import React from "react" 
import Recharts from "recharts"
import {BarChart,Bar ,XAxis ,Tooltip,CartesianGrid,ResponsiveContainer,YAxis,Legend } from "recharts"

const Chart=(props)=>{
    const {data}=props
    

    return <div>
                <BarChart
                            width={750}
                            height={280}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="duration"/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="duration" fill="#8884d8"/>
                            </BarChart>
  </div>

    // return <BarChart
    //             width={400}
    //             height={400}
    //             data={data}
    //             margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    //         >
                
                
    //             <CartesianGrid stroke="#f5f5f5" />
    //             <XAxis dataKey="name" />
    //             <YAxix/>
    //             <Tooltip />
    //             <Bar  dataKey="pv" stroke="#ff7300" yAxisId={0} />
    //             <Bar  dataKey="uv" stroke="#387908" yAxisId={1} />
    //         </BarChart>
}

export default Chart 
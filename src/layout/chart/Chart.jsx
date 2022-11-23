import React from 'react'
import { LineChart, AreaChart,Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Chart = () => {
    return (
        <>
         {/* style={{position: "relative", width: "100%"}} */}
         {/* style={{position: "absolute", width: "100%"}} */}
          
                <ResponsiveContainer width="95%" height={150}>
                <LineChart data={data}>
                <defs>
                <linearGradient id='colorview' x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor='#ff4d6d' stopOpacity={0.4} />
                  <stop offset="85%" stopColor='#ff4d6d11' stopOpacity={0.2} />
                </linearGradient>
              </defs>
                    <Line type="monotone" dataKey="pv" stroke="#ffc107" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

             {/* <ResponsiveContainer width="95%" height={100}>
            <AreaChart data={data} margin={{top: 10}}>
              <defs>
                <linearGradient id='colorview' x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor='#ff4d6d' stopOpacity={0.4} />
                  <stop offset="85%" stopColor='#ff4d6d11' stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area type="monotone" dataKey="data2" stroke="#ee3b3b" fill='url(#colorview)' />
              <Area type="monotone" dataKey="data1" stroke="#ee3b3b" fill='url(#colorview)' />
            </AreaChart>
          </ResponsiveContainer> */}
               
        </>
    )
}

export default Chart
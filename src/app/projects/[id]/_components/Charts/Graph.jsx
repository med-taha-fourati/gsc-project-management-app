"use client";
import Link from 'next/link'
import React from 'react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const mockData = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 10 },
  { name: 'Mar', value: 5 },
  { name: 'Apr', value: 3 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 6 },
  { name: 'Jul', value: 2 },
];

const Graph = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-300 p-6 my-3 w-full max-w-9/10 hover:shadow-xl transition-shadow duration-300 overflow-scroll">
        <h2 className="text-2xl font-bold mb-4">Commit Graph in 2025</h2>
        <ResponsiveContainer width="100%" minWidth={500} height={300}>
          <AreaChart data={data ?? mockData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              activeDot={{ r: 8 }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Graph
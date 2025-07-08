"use client";

import React from 'react'

const IssuePercentageCard = ({totalIssues, closedIssues}) => {
    const v_totalIssues = totalIssues || 45;
    const v_closedIssues = closedIssues || 36;
  return (
    <>
    <div className="bg-white rounded-lg border border-gray-300 p-6 my-3 w-full max-w-9/10 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">Issue Tracker</h2>
        <div className='flex justify-center items-center mx-4 my-4'>
            <p className={`text-blue-500 text-8xl font-semibold animate-[counter_2s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]`}>%</p>
        </div>

        <div className="flex justify-between items-center text-center mx-4 my-2">
            <div className="w-1/2">
                <p className="text-gray-500">Total Issues: <span className="font-semibold">{v_totalIssues}</span></p>
            </div>
            <div className="w-1/2">
                <p className="text-gray-500">Closed Issues: <span className="font-semibold">{v_closedIssues}</span></p>
            </div>
        </div>
    </div>
    <style jsx>{`
        @property --num {
            syntax: "<integer>";
            initial-value: 0;
            inherits: false;
        }

        
        @keyframes counter {
            from {
                --num: 0;
            }
            to {
                --num: ${Math.round((v_closedIssues / v_totalIssues) * 100)};
            }
        }    
    `}</style>
    
    </>
  )
}

export default IssuePercentageCard
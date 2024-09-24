import React from 'react'

const Progressbar = ({ percentage }) => {
return (
    <div className="w-[120px] md:w-[200px] bg-slate-400 rounded-full h-2 md:h-3 m-3" >
    <div
    className="bg-blue-500 h-2 md:h-3 rounded-full"
    style={{ width: `${percentage}%` }}
    ></div>
</div>
)
}

export default Progressbar;

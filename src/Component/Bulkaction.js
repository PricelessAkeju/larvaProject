import React from 'react'

const bulkAction = () => {
    return (
        <div className="w-[230px] h-[150px] mx-[770px]  bg-white rounded-[20px]text-start -mt-14 flex-col justify-start items-start gap-[7px] pl-5 pt-5 pb-5 text-start inline-flex">
            <span className="justify-center items-center gap-2.5 inline-flex">
                <p className="w-[174px] text-[#484848] text-base font-semibold font-Roboto">Mark all as present</p>
            </span>
            <span className="justify-center items-center gap-2.5 inline-flex">
                <p className="w-[174px] text-[#484848] text-base font-semibold font-Roboto">Mark all as Absent</p>
            </span>
            <span className="justify-center items-center gap-2.5 inline-flex">
                <p className="text-[#484848] text-base font-semibold font-Roboto">Mark all as left</p>
            </span>
    </div>
      )
}

export default bulkAction
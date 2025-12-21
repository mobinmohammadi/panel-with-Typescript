import Chart from "./Chart"
export default function ChartCount() {
    return (
        <div className=''>
            <div className="flex font-Dana-Demi-bold dark:text-white dark:bg-[#212D45] bg-white sm:w-[408px] justify-center h-full flex-col gap-7 border-gray-300 rounded-2xl p-6 border text-neutral-600 text-xxs">

                <div className='flex gap-1 dark:text-white text-gray-800'>
                    <span>میانگین تشخیص و بهبود</span>
                    <span>(ماه جاری)</span>
                </div>
                <div className="flex items-center justify-center">
                    <Chart />
                </div>
                <div className="flex dark:text-white text-gray-800 text-xs text-center items-center justify-center gap-4">
                    <span> ۱۱۰ ویزیت نشده</span>
                    <span>۱۵۰ بهبودی کامل</span>
                    <span>۴۰ درمان نشده</span>
                </div>
            </div>
        </div>
    )
}

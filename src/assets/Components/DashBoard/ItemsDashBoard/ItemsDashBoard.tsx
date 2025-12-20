import React from "react";
type Props = {
  title: string;
  count: number;
};
export default function ItemsDashBoard({  title, count }: Props) {
  return (
    <div className="bg-slate-300  relative overflow-hidden dark:bg-[#212d45]  font-Dana-Demi-bold min-h-32 rounded-md flex flex-col p-5 text-right justify-between items ">
      <span className="absolute bg-[#f9c90d] w-15 h-15 -left-5 rounded-full -top-5"></span>
      <span className="absolute bg-[#3250ff] w-7 h-15 -right-5 rounded-full -bottom-5 "></span>
      <span className=" text-xs 2xs:text-xs dark:text-grey-800 dark:text-dark-menu">
        {title}
      </span>
      <div className="dark:text-white text-zinc-800">
        <span className="text-green-700 dark:text-amber-300">
          {count > 10000 ? count.toLocaleString() + " تومان " : count}
        </span>
      </div>
      <div className=" text-xs flex gap-1 ">
        <span className="dark:text-primary-dark text-gray-600">20</span>
        <span className="text-zinc-900 dark:text-white">درصد رشد بیشتر</span>
      </div>
    </div>
  );
}

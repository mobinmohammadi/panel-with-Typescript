import OfferHeader from "@/assets/Components/Offers/Components/OfferHeader";
import OfferTable from "@/assets/Components/Offers/Components/OfferTable";
import React from "react";

function Offers() {
  return (
    <div className="mr-3 flex flex-col gap-8 dark:text-white text-zinc-800 font-Dana-Demi-bold">
      <div className="dark:bg-secondary-dark bg-white  w-full rounded-sm font-Dana-Demi-bold p-5 space-y-2">
        <span className="dark:text-white text-gray-800">
          لیست تخفیف های محصولات
        </span>

        <OfferHeader />
      </div>
        <OfferTable />
    </div>
  );
}

export default Offers;

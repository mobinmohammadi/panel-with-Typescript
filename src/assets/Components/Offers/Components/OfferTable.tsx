import { useQueryOffers } from "../Hook/useQueryOffers"


export default function OfferTable() {
  const {data} = useQueryOffers()
  console.log(data);
  
  return (
    <div>
        <div className="dark:bg-secondary-dark bg-white  w-full rounded-sm font-Dana-Demi-bold p-5 space-y-2">
           <span className="dark:text-white text-gray-800">لیست تخفیف های محصولات</span>
        </div>
    </div>
  )
}

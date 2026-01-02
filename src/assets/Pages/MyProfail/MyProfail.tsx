import LeftContent from "@/assets/Components/MyProfail/Components/LeftContent";
import RightContent from "@/assets/Components/MyProfail/Components/RightContent";
import { AuthApi } from "@/Services/APi/Auth";
import { useEffect } from "react";

export default function MyProfail() {
  return (
    <div className="grid  sm:grid-cols-2  gap-2 dark:bg-secondary-dark text-white font-Dana-Demi-bold p-5 rounded-sm">
      <RightContent />
      <LeftContent />
    </div>
  );
}

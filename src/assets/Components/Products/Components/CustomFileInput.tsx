import React, { ChangeEvent, useRef, useState } from "react";

export default function CustomFileInput({ accept = "image/*" }) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handelImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file);
    }
  };

  return (
    <div className="flex flex-col gap-2 h-34 items-center justify-center ">
      <button
        type="button"
        onClick={handelImageUploadClick}
        className="text-gray-800 cursor-pointer w-12 text-[12px]  pb-2 hover:text-red-700 transition-all"
      >
        برای افرودن کلیک کنید
      </button>
      {imageFile && <span>فایل انتخاب شده: </span>}
      <input
        type="file"
        ref={fileInputRef}
        onChange={updateImage}
        className="hidden"
      />
    </div>
  );
}

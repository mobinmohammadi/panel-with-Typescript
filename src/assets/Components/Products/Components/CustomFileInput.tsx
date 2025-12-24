import React, { ChangeEvent, useRef, useState } from "react";

export default function CustomFileInput({ setValue }: any) {
  const [imageFile, setImageFile] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handelImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    setSelectedImage(URL.createObjectURL(file));

    setValue("main_image", file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center group ">
      {selectedImage ? (
        <div className="relative">
          <img src={selectedImage} alt="" />
          <div
            onClick={() => setSelectedImage("")}
            className="bg-white opacity-0 invisible group-hover:opacity-100 z-10 group-hover:visible transition-all absolute w-[10px] left-0 text-red-700 top-1"
          >
            <svg className="w-8 h-8">
              <use href="#trash "></use>
            </svg>
          </div>
          <div className="bg-black/30 w-full h-full absolute top-0"></div>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={handelImageUploadClick}
            className="text-gray-800 cursor-pointer w-12 h-34 text-[12px]  pb-2 hover:text-red-700 transition-all"
          >
            {!imageFile ? (
              <span> برای افرودن کلیک کنید</span>
            ) : (
              <span>فایل انتخاب شده: {imageFile.length} </span>
            )}
          </button>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={updateImage}
            className="hidden"
          />
        </>
      )}
    </div>
  );
}

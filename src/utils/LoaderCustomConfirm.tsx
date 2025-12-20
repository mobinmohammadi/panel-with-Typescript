

interface ILoaderCustomConfirmProps {
    title : string
}


export default function LoaderCustomConfirm({title} : ILoaderCustomConfirmProps) {
  return (
    <div className="flex justify-center items-center w-full h-92 dark:bg-[#212D45] bg-white text-gray-900 dark:text-white ">
      <span className="font-bold font-Dana-Demi-bold dark:text-white text-gray-900">
       {title}
      </span>
    </div>
  );
}

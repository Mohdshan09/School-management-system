import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="myshadow rounded-2xl  bg-white  p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-blue-600 px-2 py-1 rounded-full text-black">
          2025/26
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
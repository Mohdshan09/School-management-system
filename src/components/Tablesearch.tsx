import Image from "next/image"

const Tablesearch = () => {
    return (
        <div className="w-full md:w-auto flex items-center gap-2 py-1 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src={"/search.png"} alt="search" width={14} height={14}/>
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
        </div>
    )
}

export default Tablesearch
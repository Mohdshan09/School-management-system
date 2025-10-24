import Image from "next/image"

const page = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* Left */}
            <div className="w-full xl:w-2/3">
                {/* Top */}
                <div className="flex flex-col xl:flex-row gap-4">
                    {/* user info card */}
                    <div className="bg-white py-6 px-4 rounded-md flex-1 flex gap-4 ">
                        <div className="w-1/3">
                            <Image src={"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"} alt="teachImg" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3"></div>
                    </div>

                    {/* small card */}
                    <div className="flex-1 flex flex-col justify-between gap-4 ">
                        <h1 className="text-xl font-semibold ">Jayesh Sharma</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    </div>
                </div>

                {/* Bottom card */}
                <div>Schedule</div>


            </div>

            {/* Right */}
            <div className="w-full xl:w-1/3">
                m
            </div>
        </div>
    )
}

export default page
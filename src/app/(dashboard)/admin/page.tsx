import Usercards from "@/components/Usercards"
import Countchart from "@/components/Countchart"

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <Usercards type="student" />
          <Usercards type="teacher" />
          <Usercards type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <Countchart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">

          </div>
        </div>
      </div>


      {/* Right side */}
      <div className="w-full lg:w-1/3"></div>

    </div>
  )
}

export default page
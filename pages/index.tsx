export default function Home() {
  return (
  <div className="md:ml-80 md:my-40">
    <div id="container" className="md:flex flex-row h-full">
      <div id="left_col" className="md:basis-1/4 rounded  bg-[#172466]">
        <div className="md:flex flex-row md:my-16 h-2/3 ">
          <div id="line" className="md:basis-1/4 pl-14 pr-4">
            <h1 className="md:h-full w-1  bg-white md:mt-4"></h1>
          </div>
          <div id="about" className="md:basis-full flex flex-col pl-4 pr-8">
            
            <h1 className="font-body font-semibold text-3xl">Creating Course</h1>
            <h2 className="font-body">Fill course details and get closer to cuiculum completion.</h2>
           
          </div>
          </div>
        </div>
        
      <div id="right_col" className="md:basis-full bg-[#F9EEEE] md:px-52 md:py-16">
        <div className="md:flex md:flex-col">
          <div id="info" className="md:basis-full">
            <div className="flex flex-row">
              <div className="basis-full">
            <h1 className="font-body font-semibold text-3xl text-black">C<span className="text-2xl">OURSE</span> I<span className="text-2xl">NFORMATION</span></h1>
            </div>
            <div id="button_container" className="basis-1/3">
            <button className="text-[#172466] shadow-xl  bg-white rounded-full font-semibold font-body md:pl-4 md:pr-6 md:py-1">LOGIN</button>
            <button className="text-white shadow-xl  bg-[#172466] rounded-full font-semibold font-body md:px-4 md:py-1 md:-ml-5">LOGOUT</button>
            </div>
            </div>
          </div>
          <div id="form_section" className="md:basis-full mt-10"></div>
          <form>
            <div className="grid md:gap-6 md:mb-6">
              <div>
              <input type="text" id="course_name" className="bg-white shadow-xl  md:my-8 rounded-lg border border-gray-300 text-body block w-2/4 p-2.5 pl-6 dark:placeholder-[#948585] dark:text-black dark:focus:border-blue-500 font-body" placeholder="Course Name *" required></input>
              <input type="text" id="branch" className="bg-white shadow-xl  my-8 rounded-lg border border-gray-300 text-body block w-2/4 p-2.5 pl-6 dark:placeholder-[#948585] dark:text-black dark:focus:border-blue-500 font-body" placeholder="Branch" required></input>
              <input type="text" id="semester" className="bg-white shadow-xl  my-8 rounded-lg border border-gray-300 text-body block w-2/4 p-2.5 pl-6  dark:placeholder-[#948585] dark:text-black dark:focus:border-blue-500 font-body" placeholder="Semester *" required></input>
              <input type="text" id="course_code" className=" md:mr-60 shadow-xl  bg-white  my-8 rounded-lg border border-gray-300 text-body block w-2/4 p-2.5 pl-6 dark:placeholder-[#948585] dark:text-black dark:focus:border-blue-500 font-body" placeholder="Course Code *" required></input>
              <input type="text" id="session" className=" md:mr-60 bg-white my-8 shadow-xl   rounded-lg border border-gray-300 text-body block w-2/4 p-2.5 pl-6 dark:placeholder-[#948585] dark:text-black dark:focus:border-blue-500 font-body" placeholder="Session *" required></input>
              </div>
            </div>
            <button type="submit" className=" md:mb-20 shadow-xl text-white text-lg bg-[#172466] rounded-full font-semibold font-body md:px-4 md:py-1">Add Course</button>
          </form>
        </div>
        </div>
    </div>
  </div>
  );
}



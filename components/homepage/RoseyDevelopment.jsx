// ══════════ OTHER IMPORTS
const AppDevelopment = () => {
  return (
    <section className="flex justify-center items-center">

      <div className='w-full'>
            <div className="flex flex-row justify-between items-center" >

                <div className="flex items-center gap-2">
                    <i className="fi fi-br-book flex text-[28px]"></i>
                    <h1 className="font-extrabold text-[25px]"> HISTORY </h1>
                </div>

                <div className="bg-[#fafafa] dark:bg-[#222222] w-[45px] h-[45px] p-2 flex justify-center rounded-lg">
                        <i className="fi fi-br-guide-alt flex text-[28px]"></i>
                </div>
            </div>

            <p className="mt-2 font-normal text-[17px]"> Understanding how this idea came to be </p>
            <div className="mt-5 dark:bg-[#222222] shadow-md w-full h-auto rounded-md p-4">
                <h1 className="font-bold text-[20px] text-stone-600 dark:text-white" > DEVELOPMENT </h1>

            <div className="flex md:flex-row flex-col gap-2">
                <p className="mt-4 font-normal text-[16px]">
                    After I started watching anime daily, I realized how much I missed having an application specifically dedicated to anime. In 2019, I began planning the project and started using .NET (C#) technologies to develop the idea. The following year, I transitioned to WPF, which significantly enhanced my learning experience. Throughout this journey, I acquired valuable knowledge, including the design skills I possess today. I am passionate about bringing my idea to fruition because I believe it will be a tool I would personally use.
                </p>

                <img src="/dev.png" className='object-cover rounded-lg mt-2 mx-auto
                max-md:h-[100%] max-md:w-[100%] h-[180px] w-[180px] aspect-square'/>

            </div>

        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;

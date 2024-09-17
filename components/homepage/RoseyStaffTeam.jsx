const AppStaffTeam = () => {

  return (
    <section className="flex justify-center items-center">

      <div className="w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fi fi-br-poll-h flex text-[28px]"></i>
            <h1 className="font-extrabold text-[25px]"> COMPANY </h1>
          </div>

          <div className="bg-[#fafafa] dark:bg-[#222222] w-[45px] h-[45px] p-2 flex justify-center rounded-lg">
              <i className="fi fi-br-users flex text-[28px]"></i>
          </div>
        </div>

        <p className="mt-2 font-normal text-[17px]"> Our dedicated team behind the application. </p>

        <div className="mt-5 w-full gap-4 dark:bg-[#222222] shadow-md h-auto rounded-md p-4">
          <div className='flex md:flex-row flex-col gap-5'>
            <img src="https://i.pinimg.com/564x/1f/30/d0/1f30d0ee2c8555e2a9113e7ea1882798.jpg"
              className='object-cover rounded-lg h-[210px] md:w-[200px] aspect-square'/>

            <div className='md:mt-4 flex flex-col'>
              <h1 className="font-bold text-[20px]"> ANGELO JOHAO FIGUEROA MEJIA </h1>

              <p className="mt-1 font-bold text-[16px] text-stone-600 dark:text-white flex flex-row gap-1"
              > Roles: <span className='font-normal text-black dark:text-white'>Programmer & Designer / Musician</span> </p>

              <p className="mt-4 font-normal text-[16px]">
                From a young age, I've been captivated by technology, always eager to understand and create. My journey into programming and design began with a passion for innovation—if something didn’t exist, I would build it myself, often infusing my work with minimalist aesthetics and a black and gray tones.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStaffTeam;

const AdvancedHeader = ({ header, subheader, icon }) => {

  return (
    <section>
        <div className="flex flex-row justify-between items-center">

            <div className="flex flex-col">
                <h1 className="font-extrabold text-[25px]"> {header} </h1>
                <p className='mt-1 font-normal text-[16px]'> {subheader} </p>
            </div>

            <div className="bg-[#fafafa] dark:bg-[#222222] w-[45px] h-[45px] p-2 flex justify-center rounded-lg">
                <i className={`fi fi-br-${icon} flex text-[28px]`}></i>
            </div>

        </div>
    </section>
  );
};

export default AdvancedHeader;

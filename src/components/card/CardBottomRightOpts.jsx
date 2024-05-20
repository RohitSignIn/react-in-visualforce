function CardBottomRightOpts() {
  return (
    <div className="absolute right-[0.6rem] bottom-[0.6rem]">
      <div className="flex justify-center">
        <div className="mx-[-5px]">
          <button className="m-0 border-[1px] border-[#227a90] py-2 px-4 rounded-md text-lg text-[#227a90] font-medium">
            Migrate
          </button>
        </div>
        <div className="mx-[-5px]">
          <button className="m-0 border-[1px] border-[#227a90] py-2 px-4 rounded-md text-lg text-[#227a90] font-medium">
            Submission
          </button>
        </div>
        <div className="mx-[-5px]">
          <button className="m-0 border-[1px] border-[#227a90] py-2 px-4 rounded-md text-lg text-[#227a90] font-medium">
            Publish Options
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardBottomRightOpts;

import Illustration from "../assets/illustration-empty.svg";

export default function Results({ result }) {
  return (
    <section className="flex w-full lg:px-[2.5rem] lg:py-[2.5rem] px-[1.5rem] py-[2rem] flex-col items-center lg:gap-[2.5rem] gap-[1rem] justify-center lg:justify-start grow self-stretch lg:rounded-bl-[5rem] rounded-bl-none bg-slate-900">
      {!result ? (
        // Return empty state if result doesn't exist
        <div className="flex flex-col justify-center items-center gap-[1rem] grow self-stretch">
          <img src={Illustration} alt="" />
          <h2 className="text-[1.5rem] text-center font-semibold leading-[125%] text-white">
            Results shown here
          </h2>
          <p className="self-stretch text-slate-300 text-[1rem] font-medium leading-[150%] text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        // Return the result
        <div className="flex flex-col items-start md:gap-[2.5rem] gap-[1.5rem] ">
          <div className="flex flex-col items-start gap-[1rem] self-stretch">
            <h2 className="text-[1.5rem] font-semibold leading-[125%] text-white">
              Your Results
            </h2>
            <p className="self-stretch text-slate-300 text-[1rem] font-medium leading-[150%]">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>

          <div className="flex flex-col items-start lg:p-[2rem] md:p-[2rem] px-[1rem] py-[1.5rem] gap-[1rem] md:gap-[2rem] self-stretch rounded-[0.5rem] border-t-[4px] border-lime bg-black/25 ">
            <div className="flex flex-col items-start gap-[0.5rem]">
              <p className="self-stretch text-slate-300 text-[1rem] font-medium leading-[150%]">
                Your monthly repayments
              </p>
              <p className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-normal lg:leading-[125%] text-lime">
                £{result.monthlyRepayment}
              </p>
            </div>
            <hr className="h-[0.0625rem] self-stretch border-slate-50/25 " />
            <div className="flex flex-col items-start gap-[0.5rem]">
              <p className="self-stretch text-slate-300 text-[1rem] font-medium leading-[150%]">
                Total you'll repay over the term
              </p>
              <p className="self-stretch text-white text-[1.5rem] font-bold leading-[120%]">
                £{result.totalRepayment}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

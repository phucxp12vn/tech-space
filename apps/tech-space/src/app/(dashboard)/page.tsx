import { Button, ChartOne } from '@tech-space/ui';

export default function Overview() {
  return (
    <>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Overview
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
          <ChartOne />
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
              Top Missions
            </h2>
          </div>
          <div className="">
            <div className="relative flex">
              <Button
                label="View All Missions"
                link="/"
                customClasses="inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 bg-primary text-white py-[11px] px-6"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Recent Activities
          </h2>
        </div>
      </div>
    </>
  );
}

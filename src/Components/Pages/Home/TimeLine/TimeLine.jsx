const TimeLine = () => {
  return (
    <div>
      <section className="text-black">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-cyan-400">
                <h3 className="text-3xl font-semibold">EventGuchai Timeline</h3>
                <span className="text-sm font-bold tracki uppercase text-gray-400">
                  Stay updated with our journey
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-semibold tracki">
                    EventGuchai Launch
                  </h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    January 2025
                  </time>
                  <p className="mt-3">
                    The official launch of EventGuchai, introducing our
                    comprehensive event management solution to the world.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-semibold tracki">
                    Major Feature Update
                  </h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    June 2025
                  </time>
                  <p className="mt-3">
                    Introducing new features based on user feedback, enhancing
                    user experience and functionality.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-semibold tracki">
                    Global Expansion
                  </h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    September 2025
                  </time>
                  <p className="mt-3">
                    EventGuchai goes international, reaching new markets and
                    providing event management solutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLine;

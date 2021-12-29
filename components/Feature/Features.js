const Features = () => {
  return (
    <>
      <div className='py-12 bg-white'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mt-10'>
            <ul className='md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
              <li>
                <div className='ml-4 flex flex-col'>
                  <img className='h-24 my-8' src='/img/fp/fp-graphic-nodes.svg' />
                  <h3 className='text-xl leading-8 font-bold text-center'>
                    Cutting edge automation.
                    <br /> Pre-built workflows.
                  </h3>
                  <p className='mt-2 text-base mx-2 leading-6 text-gray-500 text-center'>
                    Built from the ground up in collaboration with industry leading MSPs, Krakbot comes with pre-built
                    MSP automation workflows ready to go.
                  </p>
                </div>
              </li>
              <li>
                <div className='ml-4 flex flex-col'>
                  <img className='h-24 my-8' src='/img/fp/fp-graphic-windows.svg' />
                  <h3 className='text-xl leading-8 font-bold text-center'>
                    The busy work.
                    <br /> Programmatically done.
                  </h3>
                  <p className='mt-2 text-base mx-2 leading-6 text-gray-500 text-center'>
                    Not just once off, Krakbot gets the busy work done. Automate regular, accuracy dependent tasks -
                    monthly, weekly and daily for as many clients as needed.
                  </p>
                </div>
              </li>
              <li>
                <div className='ml-4 flex flex-col'>
                  <img className='h-24 my-8' src='/img/fp/fp-graphic-diagram.svg' />
                  <h3 className='text-xl leading-8 font-bold text-center'>
                    Every system.
                    <br /> Working together.
                  </h3>
                  <p className='mt-2 text-base mx-2 leading-6 text-gray-500 text-center'>
                    Aggregate critical data across applications and platforms for adjustments, consolidation,
                    aggregation and distribution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

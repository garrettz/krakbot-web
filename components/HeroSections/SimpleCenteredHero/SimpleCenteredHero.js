import Background from '../../Background/Background';
import Button from '../../Button/Button';
import VideoOverlay from './VideoOverlay';

const SimpleCenteredHero = () => {
  return (
    <div className='w-full h-full bg-black'>
      <div className='w-full overflow-hidden' style={{ height: '80vh' }}>
        <div className='absolute top-0 w-full' style={{ zIndex: -1 }}>
          <Background />
        </div>
        <div className='max-w-7xl d-flex sm:flex-row md:flex-row xl:flex-col mx-auto'>
          <div className='sm:w-full md:w-full xl:w-3/6 h-2/4 l:h-2/4 xl:h-full'>
            <main className='mt-10 max-w-4xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28'>
              <h1 className='text-4xl text-center md:text-left pt-10 md:pt-0 racking-tight font-extrabold text-white leading-none md:text-6xl'>
                The automated
                <span className='text-primary-600'> MSP</span> is here
              </h1>
              <p className='mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Replace timely and repetitive engineering tasks with intelligent and adaptable robots
              </p>
              <div className='mt-5 max-w-md sm:flex sm:justify-left md:mt-8'>
                <div className='rounded-md shadow'>
                  <Button color='primary' size='xl' className='w-full'>
                    Request Demo
                  </Button>
                </div>
              </div>
            </main>
          </div>
          <div
            className='xl:w-3/6 absolute right-0 xl:top-20 xl:bottom-40'
            style={{ justifyContent: 'flex-end', alignItems: 'center', overlfow: 'hidden' }}
          >
            <VideoOverlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCenteredHero;

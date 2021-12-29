import Link from 'next/link';
import { companyInfo } from '../../assets/config/settings';

const Footer = () => {
  return (
    <>
      <div className='footer bg-white'>
        <div className='max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='xl:col-span-1'>
              <Link href='/'>
                <img className='h-10' src='/img/logo/logo-on-white.svg' alt={companyInfo.name} />
              </Link>
              <p className='mt-8 text-gray-500 text-base leading-6 test'>The Automated MSP is here.</p>
              <p>
                <i aria-hidden className='fas fa-envelope text-gray-400'></i>
                <span className='text-gray-500'>{` ${companyInfo.email}`}</span>
              </p>
            </div>
            <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'></div>
          </div>
          <div className='md:grid md:grid-cols-2 mt-12 border-t border-gray-200 pt-8'>
            <p className='text-base leading-6 text-gray-400 md:text-left'>
              Made with <i aria-hidden className='fas fa-robot hover:text-red-600'></i> on
              <i aria-hidden style={{ top: 2 }} className='relative fas fa-coffee hover:text-yellow-700'></i>.
            </p>
            <p className='text-base leading-6 text-gray-400 md:text-right'>
              &copy;
              {new Date().getFullYear()} <Link href='/'>{companyInfo.name}</Link>
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer::after {
            content: '';
            display: block;
            height: 10px;
            width: 100%;
            background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
          }
        `}
      </style>
    </>
  );
};

export default Footer;

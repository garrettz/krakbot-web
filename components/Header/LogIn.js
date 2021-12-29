import Modal from 'react-modal';
import { useAuthModal, useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider';
import LogInForm from '../Form/LogInForm';
import FacebookOAuth from '../utils/FacebookOAuth';
import GoogleOAuth from '../utils/GoogleOAuth';

export const LogInButton = ({ isMobile = false }) => {
  const dispatchAuthModal = useDispatchAuthModal();
  const openLogInModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' });
  };

  return (
    <button
      onClick={openLogInModal}
      type='button'
      className={
        isMobile
          ? 'block mt-1 px-4 py-2 hover:border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-primary font-semibold text-base transition duration-150 ease-in-out'
          : 'inline-flex items-center font-primary font-semibold uppercase hover:text-primary-600 h-10 px-3 py-2 text-sm leading-4 font-medium text-gray-900 transition ease-in-out duration-150'
      }
    >
      Log Ins
    </button>
  );
};

export const LogInModal = () => {
  const authModal = useAuthModal();
  const dispatchAuthModal = useDispatchAuthModal();
  const modalIsOpen = authModal.logInModal.active;
  const closeLogInModal = () => {
    dispatchAuthModal({ type: 'CLOSE_LOGIN_MODAL' });
  };
  const openSignUpModal = () => {
    dispatchAuthModal({ type: 'OPEN_SIGN_UP_MODAL' });
  };
  const openForgotPasswordModal = () => {
    dispatchAuthModal({ type: 'OPEN_FORGOT_PASSWORD_MODAL' });
  };

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next');

  const handleResponseFacebook = (response) => {
    const { email, id, name } = response;
    console.log(email);
  };

  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white rounded-lg'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeLogInModal}
      contentLabel='Log In Modal'
    >
      <div className='relative bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 min-w-40'>
        <div onClick={closeLogInModal} className='absolute top-0 right-0 pt-4 pr-4'>
          <button
            type='button'
            className='text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150'
            aria-label='Close'
          >
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='text-center pb-2'>
          <i className='text-primary-600 fas fa-sign-in-alt fa-3x'></i>
          <h2 className='text-gray-700 mt-4 text-3xl leading-9 font-extrabold'>Log In</h2>
        </div>
        <FacebookOAuth />
        <GoogleOAuth />
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300'></div>
          </div>
          <div className='relative flex justify-center text-sm leading-5'>
            <span className='px-6 bg-gray-50 text-gray-500'>or</span>
          </div>
        </div>
        <LogInForm />
        <div className='mt-3'>
          <div className='text-sm leading-5 justify-between flex'>
            <button
              onClick={openSignUpModal}
              className='font-medium text-gray-900 hover:text-primary-500 transition ease-in-out duration-150'
            >
              Create an account
            </button>
            <button
              onClick={openForgotPasswordModal}
              className='font-medium text-gray-900 hover:text-primary-500 transition ease-in-out duration-150'
            >
              Forgot password
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

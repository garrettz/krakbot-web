const UseCases = () => {
  return (
    <>
      <div className='py-12 bg-white'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mt-10 text-center'>
            <h2 className='text-3xl font-bold'>Leave the humans to the human work.</h2>
            <h3 className='text-xl font-medium'>Krakbot deploys robots for almost everything else.</h3>
            <p className='text-lg font-medium text-primary-600 mt-6'>Here are some early examples:</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-900'>
        <div className='max-w-screen overflow-auto lg:overflow-visible shadow-2xl rounded-3xl mx-3'>
          <div className='px-7'>
            <table style={{ borderSpacing: '0 15px', width: '812px' }}>
              <thead className='bg-gray-800 text-gray-500 border-b border-secondary-200 text-sm'>
                <tr>
                  <th className='p-3'>
                    <div style={{ minWidth: '300px' }}>Workflow</div>
                  </th>
                  <th className='p-3'>Tasks Per Month</th>
                  <th className='p-3'>Current hours</th>
                  <th className='p-3'>Savings</th>
                  <th className='p-3'>Hrly Rate</th>
                  <th className='p-3'>Monthly Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-800'>
                  <td className='p-3'>
                    <div className='flex whitespace-nowrap'>
                      <img className='w-30' src='/img/fp/icon-task.svg' />
                      <span className='pl-5'>Employee email&nbsp;on-boarding</span>
                    </div>
                  </td>
                  <td className='p-3 text-center'>207</td>
                  <td className='p-3 text-left'>
                    <div className='flex justify-start items-center whitespace-nowrap'>
                      0.5 <img className='ml-2 w-4' src='/img/fp/icon-half-circle.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      100% <img className='ml-2 w-4' src='/img/fp/icon-full-circle-green.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>$40</td>
                  <td className='p-3 text-right'>
                    <span className='text-green-500 font-bold'>$2,070</span>
                  </td>
                </tr>

                <tr className='bg-gray-800'>
                  <td className='p-3'>
                    <div className='flex whitespace-nowrap'>
                      <img className='w-30' src='/img/fp/icon-task.svg' />
                      <span className='pl-5'>Employee email&nbsp;off-boarding</span>
                    </div>
                  </td>
                  <td className='p-3 text-center'>90</td>
                  <td className='p-3 text-left'>
                    <div className='flex justify-start items-center whitespace-nowrap'>
                      0.5 <img className='ml-2 w-4' src='/img/fp/icon-half-circle.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      100% <img className='ml-2 w-4' src='/img/fp/icon-full-circle-green.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>$40</td>
                  <td className='p-3 text-right'>
                    <span className='text-green-500 font-bold'>$900</span>
                  </td>
                </tr>

                <tr className='bg-gray-800'>
                  <td className='p-3'>
                    <div className='flex whitespace-nowrap'>
                      <img className='w-30' src='/img/fp/icon-task.svg' />
                      <span className='pl-5'>Review Azure backup logs </span>
                    </div>
                  </td>
                  <td className='p-3 text-center'>30</td>
                  <td className='p-3 text-left'>
                    <div className='flex justify-start items-center whitespace-nowrap'>
                      2 <img className='ml-2 w-4' src='/img/fp/icon-full-circle.svg' />
                      <img className='ml-2 w-4' src='/img/fp/icon-full-circle.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      50% <img className='ml-2 w-4' src='/img/fp/icon-half-circle-green.svg' />
                    </div>
                  </td>
                  <td className='p-3 text-center'>$40</td>
                  <td className='p-3 text-right'>
                    <span className='text-green-500 font-bold'>$1,200</span>
                  </td>
                </tr>

                <tr className='bg-gray-800'>
                  <td className='p-3' colSpan='6'>
                    <span className='text-xs text-center w-full'>
                      Avg. cost saving of automated task = $825 per month
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCases;

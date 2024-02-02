import CustomButton from '../common/CustomButton';
import CustomFileUpload from '../common/CustomFileUpload';
import CustomTextarea from '../common/CustomTextarea';
import MainLayoutWrapper from '../layouts/MainLayoutWrapper';

const ImageToText = () => {
  return (
    <MainLayoutWrapper cls={'h-screen'}>
      <div className='flex flex-col items-center justify-between my-10'>
        <div className='grid grid-cols-2 gap-10 font-normal text-lg'>
          <CustomFileUpload />
          <CustomTextarea />
        </div>
        <CustomButton
          title='Convert Image To Text'
          cls={
            'text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center my-10'
          }
          currentStatus={'loading'}
        />
      </div>
    </MainLayoutWrapper>
  );
};

export default ImageToText;
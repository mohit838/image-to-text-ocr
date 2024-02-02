import { useState } from 'react';
import CustomButton from '../common/CustomButton';
import CustomFileUpload from '../common/CustomFileUpload';
import CustomTextarea from '../common/CustomTextarea';
import MainLayoutWrapper from '../layouts/MainLayoutWrapper';

const ImageToText = () => {
  const [newImage, setNewImage] = useState<Blob | undefined>(undefined);

  const handleSingleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log(files[0]);
      setNewImage(files[0]);
    }
  };

  return (
    <MainLayoutWrapper cls={'flex flex-col h-screen'}>
      <div className='flex flex-col items-center justify-center gap-y-10 mt-7 mb-5'>
        {/* Upload and get results components */}
        <div
          className={`${
            newImage ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          } grid place-items-center gap-10 font-normal text-lg`}
        >
          {/* Upload Image */}
          <CustomFileUpload
            handleSingleImageUpload={handleSingleImageUpload}
            imgPreview={newImage}
          />

          {/* Result */}
          {newImage && <CustomTextarea />}
        </div>

        {/* Converter Button */}
        <CustomButton
          title='Convert Image To Text'
          cls={
            'text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center my-5'
          }
          currentStatus={'loading'}
        />
      </div>
    </MainLayoutWrapper>
  );
};

export default ImageToText;

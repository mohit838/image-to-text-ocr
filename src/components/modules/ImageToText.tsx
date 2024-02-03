import { useCallback, useState } from 'react';
import { createWorker } from 'tesseract.js';
import CustomButton from '../common/CustomButton';
import CustomFileUpload from '../common/CustomFileUpload';
import CustomTextarea from '../common/CustomTextarea';
import MainLayoutWrapper from '../layouts/MainLayoutWrapper';

const ImageToText = () => {
  const [newImage, setNewImage] = useState<Blob | undefined>(undefined);
  const [newText, setNewText] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSingleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    console.log(files);

    if (files && files.length > 0) {
      console.log(files[0]);
      console.log(URL.createObjectURL(files[0]));
      setImageUrl(URL.createObjectURL(files[0]))
      setNewImage(files[0]);
    }
  };

  const handleConvertImageToText = useCallback(async () => {
    const worker = await createWorker('eng+chi_tra', 1, {
      logger: (m) => console.log(m),
    });
    const ret = await worker.recognize(
      imageUrl
    );
    console.log(ret.data.text);
    setNewText(ret.data.text);
    await worker.terminate();
  }, []);

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
          {newImage && <CustomTextarea newText={newText} />}
        </div>

        {/* Converter Button */}
        <CustomButton
          title='Convert Image To Text'
          cls={
            'text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center my-5'
          }
          currentStatus={'loading'}
          handleConvertImageToText={handleConvertImageToText}
        />
      </div>
    </MainLayoutWrapper>
  );
};

export default ImageToText;

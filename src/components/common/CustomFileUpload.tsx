import { CustomFileUploadPropsTypes } from '../../types/Types';

const CustomFileUpload = ({
  handleSingleImageUpload,
  imgPreview,
}: CustomFileUploadPropsTypes) => {
  return (
    <div className=''>
      {/* Upload Images */}
      <div className='border border-white border-dashed'>
        <input
          type='file'
          accept='image/jpeg, image/png, image/jpg'
          onChange={handleSingleImageUpload}
        ></input>
      </div>

      {/* Image Preview */}
      <div className='mt-5'>
        {imgPreview && (
          <div className='w-full'>
            <img
              src={URL.createObjectURL(imgPreview)}
              alt='Uploaded'
              className='w-full h-auto'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomFileUpload;

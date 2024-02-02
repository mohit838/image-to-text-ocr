/* eslint-disable @typescript-eslint/ban-ts-comment */
const CustomTextarea = () => {
  return (
    <div className='w-full'>
      <textarea
        name='convert-text'
        id='ocr'
        //@ts-ignore
        cols='30'
        //@ts-ignore
        rows='10'
      ></textarea>
    </div>
  );
};

export default CustomTextarea;

/* eslint-disable @typescript-eslint/ban-ts-comment */
const CustomTextarea = ({ newText }) => {
  console.log(newText);

  return (
    <div className='w-full text-white'>
      <textarea
        name='convert-text'
        value={newText}
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

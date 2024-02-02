const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className='text-center text-xl py-5'>{`Copyright © ${year} OCR | Image To Text Converter.`}</div>
  );
};

export default Footer;

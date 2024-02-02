import { ChildrenPropsTypes } from '../../types/Types';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayoutWrapper = ({ children, cls }: ChildrenPropsTypes) => {
  return (
    <div className={`main-container ${cls}`}>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayoutWrapper;

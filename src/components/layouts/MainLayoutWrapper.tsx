import { ChildrenPropsTypes } from '../../types/Types';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayoutWrapper = ({ children, cls }: ChildrenPropsTypes) => {
  return (
    <div className={`main-container ${cls}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoutWrapper;

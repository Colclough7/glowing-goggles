import React,{useRef} from 'react'
import Banner from '../../components/Banner/Banner'
import CartCounterButton from '../../components/CartCounterButton/CartCounterButton';
import Footer from '../../components/Footer/Footer';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import Menu from '../../components/Menu/Menu';
import { menuItemsData } from '../../components/Menu/data';

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeaderLogo />
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCounterButton />
    </div>
  );
};

export default Home;
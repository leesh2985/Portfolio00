import Header from './header/Header';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header theme={''} />
      <Outlet />
      <Footer />
    </>
  );
}

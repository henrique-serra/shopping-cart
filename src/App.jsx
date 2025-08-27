import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ShoppingCartProvider from './contexts/ShoppingCartProvider';

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {

  const productList = [
    {
      price: 1000,
      name: 'iPhone 7 Plus',
      quantity: 0
    },
    {
      price: 1200,
      name: 'iPhone 8 Plus',
      quantity: 0
    }
  ]

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
      <ProductList productList={productList} />
      </main>
      <Footer />
    </>
  );
}

export default App;

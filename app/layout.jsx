import '@/assets/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'CYBERIA',
    description: 'Company project list',
  };

const MainLayout = ({ children }) => {
    return (
      <html lang='en'>
        <body>
          <Header />
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    );
  };
  
  export default MainLayout;
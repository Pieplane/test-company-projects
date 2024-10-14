import '@/assets/styles/globals.css';
import Header from '@/components/Header';

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
        </body>
      </html>
    );
  };
  
  export default MainLayout;
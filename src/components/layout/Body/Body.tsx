import { Header, Footer } from 'components/layout';
import { Outlet } from 'react-router';

export function Body() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '25px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

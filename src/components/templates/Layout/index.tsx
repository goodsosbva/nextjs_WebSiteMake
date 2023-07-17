import Separator from "../../atoms/Separator";
import Box from "../../layout/Box";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;

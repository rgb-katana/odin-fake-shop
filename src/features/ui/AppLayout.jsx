import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function AppLayout() {
  const isLoading = useSelector((state) => state.shop.isLoading);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="mx-auto min-w-[300px] max-w-[1278px] self-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;

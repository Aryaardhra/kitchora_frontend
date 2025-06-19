import Seller from "../components/seller/Seller";
import { useAppContext } from "../context/AppContext";
import SellerLayout from "../pages/seller/SellerLayout";

const SellerRoute = () => {
  const { isSeller } = useAppContext();
  return isSeller ? <SellerLayout /> : <Seller/>;
};

export default SellerRoute;
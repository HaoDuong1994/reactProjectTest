import Footer from "../../user/HomePage/footer/footer";
import { useLocation } from "react-router-dom";
function ShopLayOut({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
export default ShopLayOut;

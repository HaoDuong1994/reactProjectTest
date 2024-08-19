import { memo } from "react";
import Header from "./Header/header";
import Body from "./homepage";
import Footer from "./footer/footer";
function MasterlayOut({ children, ...props }) {
  return (
    <>
      <Header {...props} />
      {children}
      <Footer />
    </>
  );
}

export default memo(MasterlayOut);

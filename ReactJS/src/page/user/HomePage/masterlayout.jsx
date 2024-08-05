import { memo } from "react";
import Header from "./header";
import Body from "./homepage";
import Footer from "./footer";
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

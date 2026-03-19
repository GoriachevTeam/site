import { FC, PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="mt-24">{children}</main>
    <Footer />
  </>
);

export default AppLayout;

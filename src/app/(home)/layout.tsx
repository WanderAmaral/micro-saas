import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>Hello</header>
      {children}
    </>
  );
};

export default Layout;

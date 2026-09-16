import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
  currentStep?: number;
  hideSidebar?: boolean;
};

function Layout({
  children,
  currentStep = 1,
  hideSidebar = false,
}: LayoutProps) {
  return (
    <div className="app-shell">
      <Header />

      <div className={hideSidebar ? "page-layout full-width" : "page-layout"}>
        {!hideSidebar && <Sidebar currentStep={currentStep} />}

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
import SideNav from '@/app/ui/dashboard/sidenav';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  firstpage: ReactNode;
  secondpage: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, firstpage, secondpage }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        {firstpage}
        {secondpage}
      </div>
    </div>
  );
};

export default Layout;

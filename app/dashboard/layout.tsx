import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({
  children,
  firstpage,
  secondpage,
}: {
  children: React.ReactNode;
  firstpage: React.ReactNode;
  secondpage: React.ReactNode;
}) {
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
}

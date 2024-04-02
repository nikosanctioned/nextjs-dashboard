import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';
import LikeButton from './ui/like-button';
import VipImage from './ui/personalui/vipimage';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        Nikolay?
        <LikeButton initialLikes={0} />
        <VipImage />
        {children}
      </body>
    </html>
  );
}

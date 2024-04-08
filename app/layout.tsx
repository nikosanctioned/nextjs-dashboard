import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';
import LikeButton from './ui/like-button';
import VipImage from './ui/personalui/vipimage';
import {
  GoogleTagManager,
  sendGTMEvent,
  GoogleAnalytics,
  GoogleMapsEmbed,
  YouTubeEmbed,
} from '@next/third-parties/google';

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
        <GoogleTagManager gtmId="GTM-5ZKQZJH" />
        <GoogleAnalytics gaId="G-123456" />
        <GoogleMapsEmbed
          apiKey="XYZ"
          height={200}
          width="100%"
          mode="place"
          q="Brooklyn+Bridge,New+York,NY"
        />
        <YouTubeEmbed
          videoid="i0aIx-IJI68"
          style="border: 1px solid black;"
          width={300}
        />
        {children}
      </body>
    </html>
  );
}

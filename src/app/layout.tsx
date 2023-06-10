import 'focus-visible';

import Script from 'next/script';
import '../styles/globals.css';
import { Inter, DM_Sans } from 'next/font/google';
import { GA_MEASUREMENT_ID } from '@/utils/gtag';
import { CLARITY_PROJECT_ID } from '@/utils/clarity';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const dm = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['400', '500', '700'],
});

export const metadata = {
  description: ' Building the DNA of the Future',
  metadataBase: new URL('https://helix.vc'),
  openGraph: {
    description: 'Coming soon...',
    images: ['images/social/social-share.png'],
    title: 'Helix Ventures',
    type: 'website',
    url: 'https://helix.vc',
  },
  title: 'Helix',
};

const isProduction = process.env.NODE_ENV === 'production' ?? true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dm.variable} scroll-smooth bg-white antialiased`}>
      <body>{children}</body>
      {isProduction && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* https://frontend-digest.com/using-nextjs-with-google-analytics-and-typescript-620ba2359dea */}
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <Script
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
          <Script
            id="microsoft-clarity-script"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `,
            }}
          />
        </>
      )}
    </html>
  );
}

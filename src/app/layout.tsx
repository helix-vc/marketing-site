import Script from 'next/script';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { GA_MEASUREMENT_ID } from '@/utils/gtag';
import { CLARITY_PROJECT_ID } from '@/utils/clarity';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  description: 'Dripp Ventures',
  metadataBase: new URL('https://dripp.vc'),
  openGraph: {
    description: 'Coming soon...',
    images: ['images/social/social-share.png'],
    title: 'Dripp Ventures',
    type: 'website',
    url: 'https://dripp.vc',
  },
  title: 'Dripp',
};

const isProduction = process.env.NODE_ENV === 'production' ?? true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth bg-gray-900 font-sans antialiased [font-feature-settings:'ss01']`}
    >
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

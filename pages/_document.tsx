import { Html, Head, Main, NextScript } from 'next/document';

const BODY_CLASS = "home wp-singular page-template page-template-elementor_header_footer page page-id-13 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-15 elementor-page elementor-page-13";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={BODY_CLASS}>
        <Main />
        <NextScript />
        {/* Immediately add e-lazyloaded class to all Elementor containers so background images + animations work */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function fixElementorLazy() {
              var els = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
              for (var i = 0; i < els.length; i++) {
                els[i].classList.add('e-lazyloaded');
              }
            }
            // Run immediately and again on DOMContentLoaded
            fixElementorLazy();
            document.addEventListener('DOMContentLoaded', fixElementorLazy);
          })();
        `}} />
      </body>
    </Html>
  );
}

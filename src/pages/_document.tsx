// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const setInitialTheme = `
      (function() {
        try {
          const darkMode = localStorage.getItem('darkMode');
          if (darkMode === 'true') {
            document.documentElement.classList.add('dark');
          } else if (darkMode === 'false') {
            document.documentElement.classList.remove('dark');
          } else {
            // If no preference is set, use the system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.classList.add('dark');
            }
          }
        } catch (e) {}
      })();
    `;
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

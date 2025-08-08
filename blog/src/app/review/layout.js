import "../globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className="god-rays">
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="light-source"></div>
        </div>
          {children}
      </body>
    </html>
  );
}

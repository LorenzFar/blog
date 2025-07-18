import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="god-rays">
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

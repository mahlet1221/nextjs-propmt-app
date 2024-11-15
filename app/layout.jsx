import "@styles/global.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "prompt-app",
  description: "discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

import "./globals.css";

export const metadata = {
  title: "Blog Apps",
  description: "Simple blog website apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

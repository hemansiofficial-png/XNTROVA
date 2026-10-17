import "./globals.css";
export const metadata = {
  title: "Best Digital Marketing Company in Delhi NCR | Xntrova",
  description: "Grow your business with Xntrova, a Delhi NCR digital marketing agency offering SEO, PPC, social media, content and web development services.",
  alternates: { canonical: "https://www.xntrova.com/" },
  openGraph: { title: "Xntrova | Digital Marketing Agency in Delhi NCR", url: "https://www.xntrova.com/", siteName: "Xntrova", type: "website" },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1b3a" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>);
}

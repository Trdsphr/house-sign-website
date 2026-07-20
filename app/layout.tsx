import "./globals.css";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "SignCraft 3D",
  description: "Custom Handmade House Signs"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}

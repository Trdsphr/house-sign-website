import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"SignCraft 3D | Custom Handmade House Signs",

description:
"Create personalised handmade house signs."

};


export default function RootLayout({

children,

}: {

children: React.ReactNode

}) {


return (

<html lang="en">

<body>

{children}

</body>

</html>

)

}

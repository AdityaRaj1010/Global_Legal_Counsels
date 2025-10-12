import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
title: "Global Legal Counsels",
description: "Legal Representation, Consultancy, Advisory and Assistance",
icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen font-sans text-gray-900 bg-gray-50">
<Header />
<div className="lg:mt-12"/>
{children}
<Footer />
</body>
</html>
);
}
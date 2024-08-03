// import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Proyetei Akanda",
//   description: "Software engineering professional portfoli made with Next.js",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} bg-[#020617] text-violet-200`}>
//         <div className=""> </div>
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyetei Akanda",
  description: "Software engineering professional portfolio made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#020617] text-slate-200`}>
        <div className="relative w-screen overflow-hidden">
          <div className="absolute top-[-50px] left-[-100px] h-[200px] w-[200px] bg-[#4F56FF] rounded-full blur-[200px] md:top-[-100px] md:left-[-100px] md:h-[400px] md:w-[400px]"></div>
          <div className="absolute top-[-50px] left-[100px] h-[150px] w-[150px] bg-[#FF4980] rounded-full blur-[200px] md:top-[-50px] md:left-[200px] md:h-[300px] md:w-[300px]"></div>
          <div className="absolute bottom-[-50px] right-[-20px] h-[150px] w-[200px] bg-[#4F56FF] rounded-full blur-[200px] md:bottom-[-50px] md:right-[100px] md:h-[300px] md:w-[300px]"></div>
          <div className="absolute bottom-[-50px] right-[-70px] h-[150px] w-[150px] bg-[#FF4980] rounded-full blur-[200px] md:bottom-[-100px] md:right-[-100px] md:h-[400px] md:w-[400px]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}


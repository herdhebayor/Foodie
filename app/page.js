 import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/HomePage'



export default function Home() {
  return (
    <div className="flex min-h-screen relative items-center justify-center bg-orange-50 font-sans">
      <HomePage/>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Navbar/>
      <section className="flex justify-around items-center">
        <div className="w-[30%] text-2xl"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quam nihil adipisci ullam doloribus aspernatur alias ad a id perferendis quisquam, magni nam! Ad nobis, impedit maiores corporis nihil neque.</h3></div>
        <div><Image src='/main-img.jpg' alt="main image" width={350} height={200}></Image></div>
      </section>
    </main>
  );
}

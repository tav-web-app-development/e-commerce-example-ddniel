import Image from "next/image"



export default function Page() {
  return (
    <section className="flex gap-9">
        <div className="text-center">
            <Image src='/glasses.jpg' alt="glasses" width={250} height={200}></Image>
            <button className="bg-blue-800 rounded-xl text-xl py-2 px-4 mt-4">Buy</button>
        </div>
        <div className="text-center">
            <Image src='/glasses.jpg' alt="glasses" width={250} height={200}></Image>
            <button className="bg-blue-800 rounded-xl text-xl py-2 px-4 mt-4">Buy</button>
        </div>
        <div className="text-center">
            <Image src='/glasses.jpg' alt="glasses" width={250} height={200}></Image>
            <button className="bg-blue-800 rounded-xl text-xl py-2 px-4 mt-4">Buy</button>
        </div>
    </section>
    
  )
}

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IconCodeDots, IconBinary, IconWorldWww } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="mt-16">
      <section className="md:flex md:items-center md:justify-center mx-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold">
            The best way to learn{" "}
            <span className="text-primary">programming</span>.
          </h1>
          <p className="mt-4">
            Interactive problem solving that&apos;s effective and fun. Master
            concepts in 5 minutes.
          </p>
        </div>
        <Image
          src="/undraw_education_f8ru.svg"
          height={256}
          width={353}
          className="hidden sm:block"
          alt="Education"
        />
      </section>
      <section className="flex items-center justify-around mt-24">
        <div className="flex flex-col items-center">
          <IconCodeDots size={72} />
          <p className="font-medium text-xl">Programming</p>
        </div>
        <div className="flex flex-col items-center">
          <IconBinary size={72} />
          <p className="font-medium text-xl">Bitwise operations</p>
        </div>
        <div className="flex flex-col items-center">
          <IconWorldWww size={72} />
          <p className="font-medium text-xl">Web Development</p>
        </div>
      </section>
    </main>
  );
}

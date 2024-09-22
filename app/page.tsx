import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex h-full flex-auto items-center justify-center">
      <div className="flex w-[85%] flex-col items-center justify-center gap-4">
        <div>
          <Image
            src="/commitment.svg"
            alt="Commitment logo"
            height={400}
            width={400}
            priority
          />
        </div>
        <div className="divide-y-2 divide-[#f25936ff]">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
            Commitment Accesories
          </h1>
          <p className="text-center font-[family-name:var(--font-geist-mono)] leading-7">
            All Kinds of Garments Accessories Manufacturer, Exporter & Supplier
          </p>
        </div>
      </div>
    </main>
  );
}

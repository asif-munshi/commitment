import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="w-7xl grid h-16 grid-cols-3 justify-items-center py-4">
        <Link href={"/"}>
          <Image
            className="bg-none"
            src="/commitment.svg"
            alt="commitment logo"
            width={48}
            height={48}
            priority
          />
        </Link>
        <ol className="col-span-2 flex flex-row justify-end gap-4">
          <Link
            href={"/"}
            className="text-center font-bold hover:text-orange-600"
          >
            Home
          </Link>
        </ol>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}

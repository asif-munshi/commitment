import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex min-h-10 items-center justify-center bg-[#f25936ff] text-white">
      <div className="my-4 flex w-full flex-col justify-between gap-4 px-4 py-2 md:my-0 md:w-[85%] md:flex-row md:py-4">
        <div>
          {"©2024 "}
          <strong>Commitment Accessories </strong>
          {"All Rights Reserved"}
        </div>

        <ul className="flex flex-row gap-4">
          <Link href={"#facebook"}>
            <Facebook />
          </Link>
          <Link href={"#youtube"}>
            <Youtube />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

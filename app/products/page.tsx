import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { MaxWidthWraper } from "@/components/layout/MaxWidthWraper";

export default function ProductsPage() {
  return (
    <MaxWidthWraper>
      <div className="flex items-center justify-center">
        <h2 className="mb-10 scroll-m-20 pb-2 pt-8 text-3xl font-semibold tracking-tight transition-colors md:mb-20">
          Products
        </h2>
      </div>

      <div className="mb-4 grid w-full grid-cols-1 place-items-center gap-y-3 md:mb-8 md:grid-cols-2 md:px-0 xl:grid-cols-4 xl:gap-4">
        <Card className="w-auto">
          <CardHeader className="p-1">
            <Image
              className="h-[324px] max-w-[324px]"
              src="/products/Bershka_Lather_Patch.jpg"
              alt="product1"
              height={324}
              width={324}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="w-auto">
          <CardHeader className="p-1">
            <Image
              className="h-[324px] max-w-[324px]"
              src="/products/PMPL Hang_Tag-2.jpg"
              alt="PMPL Hang_Tag-2"
              height={324}
              width={324}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="w-auto">
          <CardHeader className="p-1">
            <Image
              className="h-[324px] max-w-[324px]"
              src="/products/TPJ Hang_Tag.jpg"
              alt="TPJ Hang_Tag"
              height={324}
              width={324}
              priority
            />
          </CardHeader>
        </Card>
      </div>
    </MaxWidthWraper>
  );
}

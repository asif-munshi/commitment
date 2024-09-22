import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { MaxWidthWraper } from "@/components/layout/MaxWidthWraper";

export default function CapacitiesPage() {
  return (
    <MaxWidthWraper>
      <div className="flex items-center justify-center">
        <h2 className="mb-10 scroll-m-20 pb-2 pt-8 text-3xl font-semibold tracking-tight transition-colors md:mb-20">
          Capacities
        </h2>
      </div>

      <div className="grid grid-flow-row justify-items-center gap-4">
        <Card className="flex w-full flex-col justify-items-center md:w-[786px] md:flex-row">
          <CardHeader className="items-center p-1">
            <Image
              className="h-[324px] max-w-[324px]"
              src="/commitment.svg"
              alt="product1"
              height={324}
              width={324}
              priority
            />
          </CardHeader>
          <CardContent className="flex flex-col justify-start p-3 md:p-6">
            <h3 className="mt-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight md:text-start">
              Title
            </h3>
            <p className="text-justify leading-7 [&:not(:first-child)]:mt-6">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester.
            </p>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWraper>
  );
}

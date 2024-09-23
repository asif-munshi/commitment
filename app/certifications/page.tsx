import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MaxWidthWraper } from "@/components/layout/MaxWidthWraper";

export default function CertificationsPage() {
  return (
    <MaxWidthWraper>
      <div className="flex items-center justify-center">
        <h2 className="mb-10 scroll-m-20 pb-2 pt-8 text-3xl font-semibold tracking-tight transition-colors md:mb-20">
          Certifications
        </h2>
      </div>

      <div className="mb-4 grid h-auto w-full grid-cols-1 place-items-center gap-2 md:mb-8 md:grid-cols-2 md:px-0 xl:grid-cols-4 xl:gap-4">
        <Card className="w-[350px]">
          <CardHeader className="p-1">
            <Image
              className="h-[500px] w-auto"
              src="/certifications/BIN_Certification_For_Commitment.jpg"
              alt="Commitment Accessories ISO"
              height={500}
              width={300}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="flex h-[500px] w-[350px] items-center">
          <CardHeader className="p-1">
            <Image
              className="h-[350px] w-auto"
              src="/certifications/Commitment_Accessories_FSC_Chain_of_Custody_SCS.jpg"
              alt="Commitment Accessories FSC Chain of Custody SCS"
              height={500}
              width={300}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="w-[350px]">
          <CardHeader className="p-1">
            <Image
              className="h-[500px] w-auto"
              src="/certifications/Commitment_Accessories_ISO.jpg"
              alt="Commitment Accessories ISO"
              height={500}
              width={300}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="w-[350px]">
          <CardHeader className="p-1">
            <Image
              className="h-[500px] w-auto"
              src="/certifications/Commitment_Accessories-ERC.jpg"
              alt="Commitment Accessories ISO"
              height={500}
              width={300}
              priority
            />
          </CardHeader>
        </Card>

        <Card className="w-[350px]">
          <CardHeader className="p-1">
            <Image
              className="h-[500px] w-auto"
              src="/certifications/Tin_Cartificate_Commitment.jpg"
              alt="Commitment Accessories ISO"
              height={500}
              width={300}
              priority
            />
          </CardHeader>
        </Card>
      </div>
    </MaxWidthWraper>
  );
}

import { cn } from "@/lib/utils";

export const MaxWidthWraper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl flex-auto px-2.5 md:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

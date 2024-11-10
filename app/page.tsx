import HomePageAnimation from "@/components/animation/HomePageAnimation";

export default function HomePage() {
  return (
    <main className="flex h-full flex-auto items-center justify-center">
      <div className="flex w-[85%] flex-col items-center justify-center gap-4">
        <HomePageAnimation />
      </div>
    </main>
  );
}

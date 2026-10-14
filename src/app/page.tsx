"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { celebrations, type Celebration } from "@/data/celebrations";
import CelebrationDrawer from "@/components/CelebrationDrawer";
import CelebrationPackages from "@/components/CelebrationPackages";
import PriceList from "@/components/PriceList";

export default function Home() {
  const [selected, setSelected] = useState<Celebration | null>(null);
  // Kept separate so the drawer keeps its content while the close animation runs
  const [opened, setOpened] = useState(false);
  // Desktop shows the packages inline under the buttons; phones use the drawer
  const isDesktop = useMediaQuery("(min-width: 48em)");
  const detailsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isDesktop && selected) {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isDesktop, selected]);

  return (
    <main>
      <section className="relative flex flex-col items-center text-center px-4 pt-12 pb-14">
        {/* Soft glow behind the wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[min(36rem,90vw)] rounded-full bg-elma-pink/10 blur-3xl"
        />
        <h1 className="relative font-serif font-medium uppercase leading-none text-silver-100 [text-shadow:0_0_24px_rgba(230,230,240,0.45)]">
          <span className="block text-7xl sm:text-8xl tracking-[0.08em]">
            Elma
          </span>
          <span className="mt-3 block text-3xl sm:text-4xl tracking-[0.3em] pl-[0.3em]">
            Events
          </span>
        </h1>
        <p className="relative mt-8 max-w-xl font-serif text-xl sm:text-2xl text-silver-300">
          Організація та координація незабутніх подій
        </p>
      </section>

      <section className="flex flex-col items-center text-center px-4 pb-20">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium">
          Яке у вас свято?
        </h2>
        <div className="mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
          {/* Rows of three on desktop; on phones the rows dissolve
              ("contents") and the buttons wrap freely */}
          {rowsOfThree(celebrations).map((row) => (
            <div
              key={row[0].slug}
              className="contents md:flex md:w-full md:justify-center md:gap-4"
            >
              {row.map((item) => (
                <Button
                  key={item.slug}
                  radius="xl"
                  size="xl"
                  variant={
                    isDesktop && selected?.slug === item.slug
                      ? "white"
                      : "filled"
                  }
                  // Slightly smaller on phones so long names fit the screen
                  px={{ base: 20, sm: 32 }}
                  fz={{ base: "md", sm: "lg" }}
                  onClick={() => {
                    setSelected(item);
                    setOpened(true);
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {isDesktop && selected && (
        <section
          ref={detailsRef}
          className="mx-auto max-w-5xl scroll-mt-8 px-6 pb-24"
        >
          <h2 className="font-serif text-4xl font-semibold text-elma-pink">
            {selected.name}
          </h2>
          <div className="mt-4">
            <CelebrationPackages celebration={selected} />
          </div>
        </section>
      )}

      <PriceList />

      <CelebrationDrawer
        celebration={selected}
        opened={opened && !isDesktop}
        onClose={() => setOpened(false)}
      />
    </main>
  );
}

function rowsOfThree<T>(items: T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
  return rows;
}

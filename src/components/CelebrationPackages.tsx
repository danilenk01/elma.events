import { INSTAGRAM_URL, type Celebration } from "@/data/celebrations";

// Description + the three package cards; used both in the mobile drawer
// and inline on desktop
export default function CelebrationPackages({
  celebration,
}: {
  celebration: Celebration;
}) {
  if (celebration.packages.length === 0) {
    return (
      <div className="rounded-2xl bg-elma-pink-light p-8 text-center text-navy-900 shadow-lg">
        <p className="mx-auto max-w-xl text-lg leading-relaxed">
          Напишіть мені в Instagram, і я індивідуально розпишу, що входитиме в
          кожен з пакетів саме для вашого свята.
        </p>
        <p className="mt-3 font-semibold text-elma-pink">
          Ціни на пакети не залежать від свята.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-elma-pink px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#d95593]"
        >
          Написати в Instagram
        </a>
      </div>
    );
  }

  return (
    <>
      {celebration.description && (
        <p className="mb-6 text-silver-200 leading-relaxed">
          {celebration.description}
        </p>
      )}

      <div
        className={`grid gap-4 ${
          celebration.packages.length === 2
            ? "mx-auto max-w-3xl md:grid-cols-2"
            : "md:grid-cols-3"
        }`}
      >
        {celebration.packages.map((pkg, index) => {
          const isTop = index === celebration.packages.length - 1;
          return (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl p-6 shadow-lg ${
                isTop
                  ? "bg-elma-pink text-white"
                  : "bg-elma-pink-light text-navy-900"
              }`}
            >
              <h3
                className={`font-serif text-3xl font-bold ${
                  isTop ? "text-white" : "text-navy-900"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`mt-1 font-semibold ${
                  isTop ? "text-white" : "text-elma-pink"
                }`}
              >
                {pkg.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {pkg.includes.map((item) => {
                  const { text, note } =
                    typeof item === "string" ? { text: item, note: "" } : item;
                  return (
                    <li key={text} className="flex gap-2">
                      <span
                        className={isTop ? "text-white" : "text-elma-pink"}
                      >
                        ✦
                      </span>
                      <span>
                        {text}
                        {note && (
                          <span className="mt-0.5 block text-xs opacity-70">
                            ({note})
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

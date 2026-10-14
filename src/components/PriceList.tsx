import { packagePrices } from "@/data/celebrations";

export default function PriceList() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-24 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl font-medium">
        Вартість пакетів
      </h2>
      <p className="mt-3 text-silver-300">Однакова для будь-якого свята</p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {packagePrices.map((pkg, index) => {
          const isTop = index === packagePrices.length - 1;
          return (
            <div
              key={pkg.name}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg ${
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
              <p className="mt-6 font-serif text-4xl font-bold">{pkg.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

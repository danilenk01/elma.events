// A point can carry a smaller side note shown under the main text
export type PackageItem = string | { text: string; note: string };

export type Package = {
  name: string;
  summary: string;
  includes: PackageItem[];
};

export type Celebration = {
  slug: string;
  name: string;
  description?: string;
  packages: Package[];
};

export const INSTAGRAM_URL = "https://www.instagram.com/elma__events/";

// Prices are the same for every celebration, shown once at the bottom of the page
export const packagePrices = [
  { name: "Мінімальний", summary: "Координування", price: "7 000 грн" },
  {
    name: "Базовий",
    summary: "Координування + підбір підрядників",
    price: "15 000 грн",
  },
  { name: "Максимальний", summary: "Свято під ключ", price: "30 000 грн" },
];

type CelebrationOptions = {
  slug: string;
  name: string;
  description: string;
  // "у день весілля", "у день свята", ...
  onTheDay: string;
  // what the client is busy with while I check the contractors' work
  whileYouAre: string;
  // zones I check instead of the client
  zones: string;
  // extra points for the minimal package (inherited by the bigger ones)
  extraMinimal?: string[];
  // only where guests may stay over, e.g. weddings
  overnightStay?: boolean;
  // Smaller celebrations that don't need day-of coordination on its own:
  // Мінімальний = current minimal + basic points, Базовий = maximal points
  twoPackages?: boolean;
};

// All celebrations share the same package points; the wording is adapted
// per celebration through the options above
function celebration({
  slug,
  name,
  description,
  onTheDay,
  whileYouAre,
  zones,
  extraMinimal = [],
  overnightStay = false,
  twoPackages = false,
}: CelebrationOptions): Celebration {
  const coordinationItems: PackageItem[] = [
    `${capitalize(onTheDay)} я — ваша людина для всіх підрядників: з усіма питаннями вони йдуть до мене, а не до вас`,
    `Перевіряю роботу підрядників, поки ви ${whileYouAre}: чи підготовлені ${zones} саме так, як ви мріяли`,
    "Допомагаю ведучому, щоб свято йшло чітко за розкладом",
    ...extraMinimal,
    "Беру на себе всі форс-мажори",
    "Розраховуюся з підрядниками й відпускаю їх наприкінці свята, щоб ніщо не відволікало вас від вашого дня",
  ];
  const contractorItems: PackageItem[] = [
    "Підбираю фотографа, декоратора та інших підрядників саме під ваш стиль. Якщо мої перевірені не підійдуть, знайду тих, хто підійде",
    {
      text: "Знайомлю вас з усіма підрядниками й допомагаю розрахувати їжу та алкоголь",
      note: "наприклад, на зустрічі з ведучим чи на дегустації. Якщо алкоголь ваш, познайомлю з підрядником, який із ним допоможе",
    },
    "На зв'язку з моменту нашого знайомства до самого свята: якщо щось змінюється чи потрібна допомога в комунікації з підрядниками, я завжди поруч",
  ];
  const turnkeyItems: PackageItem[] = [
    "Ви ділитеся ідеєю та натхненням, наприклад картинками з Pinterest, а решту я беру на себе",
    "Підбираю локацію",
    "Сама знаходжу підрядників і веду з ними всю комунікацію",
    "Знайомлюся з кожним гостем, щоб з будь-якими питаннями вони зверталися до мене",
    "Організовую трансфер, прокладаю маршрути й надсилаю гостям усі деталі",
    ...(overnightStay
      ? ["Допомагаю з ночівлею для гостей, якщо локація це дозволяє"]
      : []),
    "Від вас потрібно лише погодити ціни та фінальні рішення",
  ];

  if (twoPackages) {
    return {
      slug,
      name,
      description,
      packages: [
        {
          name: "Мінімальний",
          summary: "Координування + підбір підрядників",
          includes: [...coordinationItems, ...contractorItems],
        },
        {
          name: "Базовий",
          summary: `${name} під ключ`,
          includes: ["Усе, що входить у мінімальний пакет", ...turnkeyItems],
        },
      ],
    };
  }

  return {
    slug,
    name,
    description,
    packages: [
      {
        name: "Мінімальний",
        summary: `Координування ${onTheDay}`,
        includes: coordinationItems,
      },
      {
        name: "Базовий",
        summary: "Координування + підбір підрядників",
        includes: ["Усе, що входить у мінімальний пакет", ...contractorItems],
      },
      {
        name: "Максимальний",
        summary: `${name} під ключ`,
        includes: ["Усе, що входить у базовий пакет", ...turnkeyItems],
      },
    ],
  };
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const celebrations: Celebration[] = [
  celebration({
    slug: "gender-party",
    name: "Гендер-паті",
    description:
      "Гендер-паті — момент, який ви запам'ятаєте назавжди. Я беру на себе підрядників, таймінг і всі форс-мажори, щоб майбутня мама ні про що не хвилювалася, а таємниця залишилася таємницею до самого оголошення.",
    onTheDay: "у день свята",
    whileYouAre: "зустрічаєте гостей",
    zones: "фотозона та декор",
    extraMinimal: [
      "Стежу, щоб ніхто не дізнався стать дитини раніше, ніж настане момент оголошення",
    ],
  }),
  celebration({
    slug: "wedding",
    name: "Весілля",
    description:
      "Весілля — це ваш день, і ви маєте його прожити, а не організовувати. Я беру на себе підрядників, таймінг і всі форс-мажори, щоб ви просто насолоджувалися кожною миттю.",
    onTheDay: "у день весілля",
    whileYouAre: "зайняті собою",
    zones: "фотозона та велком-зона",
    overnightStay: true,
  }),
  celebration({
    slug: "birthday",
    name: "День народження",
    description:
      "День народження — ваше свято, тож і відпочивати на ньому маєте ви. Я беру на себе підрядників, таймінг і всі дрібниці, щоб ви були з гостями, а не з організаційними питаннями.",
    onTheDay: "у день свята",
    whileYouAre: "готуєтеся до свята",
    zones: "фотозона та декор",
    extraMinimal: [
      "Організовую винос торта: щоб його винесли вчасно, запалили свічки й усе пройшло так, як ви задумали",
    ],
  }),
  celebration({
    slug: "opening",
    name: "Відкриття салону або магазину",
    description:
      "Відкриття — це перше враження про ваш бізнес. Я подбаю, щоб усе пройшло бездоганно, а ви могли спокійно знайомитися з гостями та першими клієнтами.",
    onTheDay: "у день відкриття",
    whileYouAre: "зустрічаєте гостей і клієнтів",
    zones: "оформлення входу та фотозона",
    twoPackages: true,
  }),
  celebration({
    slug: "corporate",
    name: "Корпоратив",
    description:
      "Корпоратив має об'єднувати команду, а не додавати роботи тому, хто його організовує. Я беру на себе підрядників, програму та форс-мажори, щоб відпочивали всі — і ви теж.",
    onTheDay: "у день корпоративу",
    whileYouAre: "з командою",
    zones: "сцена, фотозона та банкетна зона",
  }),
  celebration({
    slug: "graduation",
    name: "Випускний",
    description:
      "Випускний буває раз у житті, і він має запам'ятатися лише найкращими моментами. Я беру на себе підрядників, таймінг і форс-мажори, щоб випускники та батьки просто святкували.",
    onTheDay: "у день випускного",
    whileYouAre: "на урочистій частині",
    zones: "фотозона та декор зали",
    twoPackages: true,
  }),
  celebration({
    slug: "engagement",
    name: "Заручини",
    description:
      "Заручини — початок вашої спільної історії. Я подбаю про всі деталі, щоб цей день був легким і щасливим.",
    onTheDay: "у день заручин",
    whileYouAre: "готуєтеся до свята",
    zones: "фотозона та декор",
    twoPackages: true,
  }),
  celebration({
    slug: "bachelorette",
    name: "Дівич-вечір",
    description:
      "Дівич-вечір — велике свято нареченої з подругами перед весіллям. Я беру на себе організацію, щоб і наречена, і подруги просто веселилися.",
    onTheDay: "у день свята",
    whileYouAre: "готуєтеся до вечірки",
    zones: "фотозона та декор",
    twoPackages: true,
  }),
  // No fixed packages: the sheet asks to get in touch on Instagram instead
  { slug: "other", name: "Інше", packages: [] },
];

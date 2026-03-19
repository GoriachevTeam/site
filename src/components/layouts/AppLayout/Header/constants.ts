export const SERVICE_LINKS = [
  {
    name: "Лазерна корекція зору",
    url: "/posluhy/lazerna-korektsiya-zoru",
    img: "/img/laser-correction.jpeg",
  },
  {
    name: "Хірургія катаракти",
    url: "/posluhy/khirurgiya-katarakti",
    img: "/img/khirurgiya-katarakti.jpeg",
  },
  {
    name: "Хірургія захворювань сітківки",
    url: "/posluhy/khirurgiya-zakhvoryuvan-sitkivki",
    img: "/img/retina-surgery.jpeg",
  },
  {
    name: "Хірургія глаукоми",
    url: "/posluhy/khirurgiya-glaukomi",
    img: "/img/old-couple-in-love.jpeg",
  },
  // {
  //   name: "Лікування кератоконусу",
  //   url: "/posluhy/likuvannya-keratokonusu",
  //   img: "/img/kerato-treatment.jpeg",
  // },
  // {
  //   name: "Хірургія косоокості",
  //   url: "/posluhy/khirurgiya-kosookosti",
  //   img: "/img/strabismus.jpeg",
  // },
  // {
  //   name: "Лікування сухого ока",
  //   url: "/posluhy/likuvannya-sukhogo-oka",
  //   img: "/img/eye-water-fish.jpeg",
  // },
  {
    name: "Дитяча офтальмологія",
    url: "/posluhy/dityacha-oftalmologiya",
    img: "/img/child-ophtalmology.jpeg",
  },
  // {
  //   name: "Імплантація факічних лінз",
  //   url: "/posluhy/implantatsiya-fakichnikh-linz",
  //   img: "/img/fac-lens.jpeg",
  // },
];

export const MOBILE_LINKS = [
  { name: "Головна", url: "/" },
  ...SERVICE_LINKS,
  { name: "Лікарі", url: "/likari" },
  { name: "Ціни", url: "/tsiny" },
  {
    name: "Оптика",
    url: "/optyka",
  },
  { name: "Блог", url: "/blog" },
  { name: "Контакти", url: "/kontakty" },
];

export const DESKTOP_LINKS = [
  { name: "Головна", url: "/" },
  SERVICE_LINKS,
  { name: "Лікарі", url: "/likari" },

  { name: "Ціни", url: "/tsiny" },
  {
    name: "Оптика",
    url: "/optyka",
  },
  { name: "Блог", url: "/blog" },
  { name: "Контакти", url: "/kontakty" },
];

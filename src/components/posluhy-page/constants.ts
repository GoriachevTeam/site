import khirurgiyaGlaukomi from "./khirurgiya-glaukomi";
import khirurgiyaKatarakti from "./khirurgiya-katarakti";
import dityachaOftalmologiya from "./dityacha-oftalmologiya";
import lazernaKorektsiyaZoru from "./lazerna-korektsiya-zoru";
import khirurgiyaZakhvoryuvanSitkivki from "./khirurgiya-zakhvoryuvan-sitkivki";
import { SERVICE_LINKS } from "@/components/layouts/AppLayout/Header/constants";

import { EnumService } from "./interfaces";

const SERVICE_PRE_DATA = {
  [EnumService["lazerna-korektsiya-zoru"]]: {
    bannerTitle: "Лазерна корекція зору в Ужгороді",
    desc: "Мрії здійснюються — дозвольте собі бачити більше!",
    blocks: lazernaKorektsiyaZoru,
    seo: {
      title: "Лазерна корекція зору в Ужгороді | Центр Горячева",
      description:
        "Лазерна корекція зору в Ужгороді в Центрі Дмитра Горячева. Діагностика, підбір методу корекції, підготовка та післяопераційний супровід.",
    },
  },
  [EnumService["khirurgiya-katarakti"]]: {
    bannerTitle: "Хірургічне лікування катаракти в Ужгороді",
    desc: "Дивіться на світ без перешкод!",
    blocks: khirurgiyaKatarakti,
    seo: {
      title: "Лікування катаракти в Ужгороді | Центр Горячева",
      description:
        "Діагностика та хірургічне лікування катаракти в Ужгороді. Підбір інтраокулярної лінзи та консультація офтальмохірурга в Центрі Горячева.",
    },
  },
  [EnumService["khirurgiya-zakhvoryuvan-sitkivki"]]: {
    bannerTitle: "Лікування захворювань сітківки в Ужгороді",
    desc: "Ваш Зір — найбільша наша цінність!",
    blocks: khirurgiyaZakhvoryuvanSitkivki,
    seo: {
      title: "Лікування сітківки ока в Ужгороді | Центр Горячева",
      description:
        "Діагностика та лікування захворювань сітківки в Ужгороді. ОКТ, ангіо-ОКТ, лазерні та хірургічні методи лікування в Центрі Дмитра Горячева.",
    },
  },
  [EnumService["khirurgiya-glaukomi"]]: {
    bannerTitle: "Лікування глаукоми в Ужгороді",
    desc: "Збережіть зір та якість життя!",
    blocks: khirurgiyaGlaukomi,
    seo: {
      title: "Лікування глаукоми в Ужгороді | Центр Горячева",
      description:
        "Діагностика та лікування глаукоми в Ужгороді. Контроль внутрішньоочного тиску, лазерне та хірургічне лікування в Центрі Дмитра Горячева.",
    },
  },
  // [EnumService["likuvannya-keratokonusu"]]: {
  //   desc: "Кератоконус — не вирок!",
  //   blocks: likuvannyaKeratokonusu,
  // },
  // [EnumService["khirurgiya-kosookosti"]]: {
  //   desc: "Корекція косоокості: безпечна процедура для впевненого зору.",
  //   blocks: khirurgiyaKosookosti,
  // },
  // [EnumService["likuvannya-sukhogo-oka"]]: {
  //   desc: "Дивіться на світ навколо без дискомфорту!",
  //   blocks: likuvannyaSukhogoOka,
  // },
  [EnumService["dityacha-oftalmologiya"]]: {
    bannerTitle: "Дитячий офтальмолог в Ужгороді",
    desc: "Ваша дитина буде бачити навколишній світ у всій його красі!",
    blocks: dityachaOftalmologiya,
    seo: {
      title: "Дитячий офтальмолог в Ужгороді | Центр Горячева",
      description:
        "Дитячий офтальмолог в Ужгороді: профілактичні огляди, діагностика та лікування порушень зору у дітей в Центрі Дмитра Горячева.",
    },
  },
  // [EnumService["implantatsiya-fakichnikh-linz"]]: {
  //   desc: "Неможливе стає реальністю!",
  //   blocks: implantatsiyaFakichnikhLinz,
  // },
};

export const SERVICES = SERVICE_LINKS.map((link) => {
  const slug = link.url.split("/")[2] as EnumService;

  return {
    ...link,
    ...SERVICE_PRE_DATA[slug],
    slug,
  };
});

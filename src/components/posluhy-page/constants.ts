import khirurgiyaGlaukomi from "./khirurgiya-glaukomi";
import khirurgiyaKatarakti from "./khirurgiya-katarakti";
import dityachaOftalmologiya from "./dityacha-oftalmologiya";
import lazernaKorektsiyaZoru from "./lazerna-korektsiya-zoru";
import khirurgiyaZakhvoryuvanSitkivki from "./khirurgiya-zakhvoryuvan-sitkivki";
import { SERVICE_LINKS } from "@/components/layouts/AppLayout/Header/constants";

import { EnumService } from "./interfaces";

const SERVICE_PRE_DATA = {
  [EnumService["lazerna-korektsiya-zoru"]]: {
    desc: "Мрії здійснюються — дозвольте собі бачити більше!",
    blocks: lazernaKorektsiyaZoru,
  },
  [EnumService["khirurgiya-katarakti"]]: {
    desc: "Дивіться на світ без перешкод!",
    blocks: khirurgiyaKatarakti,
  },
  [EnumService["khirurgiya-zakhvoryuvan-sitkivki"]]: {
    desc: "Ваш Зір — найбільша наша цінність!",
    blocks: khirurgiyaZakhvoryuvanSitkivki,
  },
  [EnumService["khirurgiya-glaukomi"]]: {
    desc: "Збережіть зір та якість життя!",
    blocks: khirurgiyaGlaukomi,
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
    desc: "Ваша дитина буде бачити навколишній світ у всій його красі!",
    blocks: dityachaOftalmologiya,
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

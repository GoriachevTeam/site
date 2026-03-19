import { StepLabel, SurgeryStep } from "../../interfaces";

export const SURGERY_STEPS: Record<
  SurgeryStep,
  { label: string; labelType?: StepLabel }
> = {
  [SurgeryStep.anastezia]: {
    label: "Інстиляція капель для місцевої анестезії",
  },
  [SurgeryStep["open-eye"]]: {
    label: "Встановлення вікопоширювача",
  },
  [SurgeryStep["outrocot"]]: {
    label: "Хірург формує лоскут на поверхні ока за допомогою мікрокератома",
  },
  [SurgeryStep.prep4laser]: {
    label: "Таким чином відкривається ділянка для дії лазера",
  },
  [SurgeryStep["laser-retina-cut"]]: {
    label:
      "Лазер змінює форму рогівки так, щоб вона ідеально (чітко) фокусувала зображення на сітківку",
  },
  [SurgeryStep["cut-in-place"]]: {
    label: "По завершенні лазерної корекції лоскут повертається на місце",
  },
  [SurgeryStep.lens4sec]: {
    label: "Лікар ставить захисну контактну лінзу на 30 хвилин",
  },
  [SurgeryStep["close-eye"]]: {
    label: "Зняття вікопоширювача",
  },
  [SurgeryStep["miopia-eye"]]: {
    label: "короткозорість",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["astigmatism-eye"]]: {
    label: "астигматизм",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["longsight-eye"]]: {
    label: "далекозорість",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["cloudy-lens"]]: {
    label: "Помутнілий кришталик",
    labelType: StepLabel.danger,
  },
  [SurgeryStep.alcon]: {
    label: "Лікар робить розріз на рогівці до 2.2 мм",
  },
  [SurgeryStep.ultrasound]: {
    label: "За допомогою ультразвуку кришталик роздроблюється і видаляється",
  },
  [SurgeryStep.introlens]: {
    label: "Імплантація інтраокулярної лінзи (штучного кришталика)",
  },
  [SurgeryStep.afterlens]: {
    label:
      "Пацієнт відразу ж після операції встає і вже може бачити, і в цей самий день через годину повертається додому",
  },
  [SurgeryStep.retina]: {
    label: "Сітківка",
    labelType: StepLabel.danger,
  },
  [SurgeryStep.microneedle]: {
    label: "Введення препарату мікроголкою",
  },
  [SurgeryStep.massage]: {
    label: "Масаж місця введення",
  },
  [SurgeryStep.antibiotics]: {
    label: "Закрапування антибактеріальних крапель",
  },
  [SurgeryStep["konus-retina"]]: {
    label: "рогівка конусоподібної форми",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["ok-sight"]]: {
    label: "нормальний зір з відтоком внутрішньоочної рідини",
    labelType: StepLabel.success,
  },
  [SurgeryStep["2cut"]]: {
    label:
      "Виконання двох розтинів (доступів) рогівки - 1.4 мм, а навпроти 1,2 мм",
  },
  [SurgeryStep.zond]: {
    label:
      "Спеціальним зондом виконуються 6 мікроканалів через які рідина зможе без перешкод витікати",
  },
  [SurgeryStep["antibiotics-cure"]]: {
    label: "Закрапування антибіотика. Зняття повікопоширювача.",
  },
  [SurgeryStep["anastezia-90"]]: {
    label: "Інстиляція капель для місцевої анестезії",
  },
  [SurgeryStep["2much-fluid"]]: {
    label:
      "До процедури дренажний канал заблоковано. Надлишок рідини призводить до збільшення тиску в оці та пошкодження нерву",
  },
  [SurgeryStep["laser-clean"]]: {
    label: "Лікар очищає лазером дренажну зону",
  },
  [SurgeryStep.stabilization]: {
    label: "Покращується відтік внутрішньоочної рідини та стабілізує тиск",
  },
  [SurgeryStep["recomend-drops"]]: {
    label: "Після завершення процедури лікар призначає протизапальні краплі",
  },
  [SurgeryStep["anastezia-behind-eye"]]: {
    label: "Субтенонова Анестезія (канюлею вводиться анестетик «за око»)",
  },
  [SurgeryStep["laser-bake"]]: {
    label:
      "Лазерним наконечником проводиться «припікання» ціліарного тіла, яке продукує внутрішньоочну рідину",
  },
  [SurgeryStep["pressure-down"]]: {
    label: "В результаті зменшується внутрішньоочний тиск",
  },
  [SurgeryStep["close-eye-back"]]: {
    label: "Знімаємо повікопоширювач. Процедура завершена.",
  },
  [SurgeryStep["keratokonus-eye"]]: {
    label: "кератоконус",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["normal-sight"]]: {
    label: "нормальний зір",
    labelType: StepLabel.success,
  },
  [SurgeryStep["epiteli-cut"]]: {
    label:
      "Лазер знімає та вирівнює епітелій (верхній шар рогівки у 50-60 мкм)",
  },
  [SurgeryStep.riboflavin]: {
    label: "Протягом 30 хв на рогівку закапується розчин рибофлавіну",
  },
  [SurgeryStep["zailer-lamp"]]: {
    label: "Рогівка піддається опроміненню Лампою Зайлера",
  },
  [SurgeryStep["protective-lense"]]: {
    label:
      "На 5-6 днів ставиться захисна контактна лінза, яка допомагає відновитися поверхневому шару рогівки",
  },
  [SurgeryStep["eye-drops"]]: {
    label:
      "На поверхню ока ставиться кільце у яке закрапується розчин, що допомагає безболісно зняти поверхневий шар рогівки",
  },
  [SurgeryStep["lens4sec-cure"]]: {
    label:
      "На 1-2 дні ставиться захисна контактна лінза для пришвидшеної реабілітації",
  },
  [SurgeryStep["laser-50mkm"]]: {
    label: "Лазер знімає епітелій (верхній шар рогівки у 50 мкм)",
  },
  [SurgeryStep["enlarged-anastezia"]]: {
    label: "Інстиляція крапель для місцевої анестезії",
  },
  [SurgeryStep["lens-setup"]]: {
    label:
      "Постановка спеціальної контактної лінзи, завдяки якій лазерний промінь потрапляє на сітківку",
  },
  [SurgeryStep["laser-impuls"]]: {
    label:
      "Серія лазерних імпульсів —  нанесення коагулянтів лікарем, протягом 2-х тижнів сформується рубець між тканинами ока",
  },
  [SurgeryStep["lens-remove"]]: {
    label: "Зняття лінзи та закрапування протизапальних крапель",
  },
  [SurgeryStep["3cut"]]: {
    label: "Виконання трьох мікроскопічних розрізів",
  },
  [SurgeryStep["tools-in"]]: {
    label: "Введення хірургічних інструментів",
  },
  [SurgeryStep["vitreous-out"]]: {
    label: "Видалення склоподібного тіла",
  },
  [SurgeryStep["gas-in"]]: {
    label:
      "Заповнення порожнини ока повітряно газовою сумішшю чи силіконом у залежності від показів",
  },
  [SurgeryStep["retina-ok"]]: {
    label: "Відновлено анатомічне положення сітківки",
  },
  [SurgeryStep["operation-end"]]: {
    label:
      "Завершення операції, адаптація розтинів, зняття вікопоширювача, монокулярна пов’язка на око",
  },
  [SurgeryStep["strabismus-eye"]]: {
    label: "косоокість",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["no-strabismus"]]: {
    label: "нормальний зір",
    labelType: StepLabel.success,
  },
  [SurgeryStep["damaged-tear-film"]]: {
    label: "ушкоджена слізна плівка",
    labelType: StepLabel.danger,
  },
  [SurgeryStep["healthy-tear-film"]]: {
    label: "здорова слізна плівка",
    labelType: StepLabel.success,
  },
  [SurgeryStep.cleaning]: {
    label: "Зняття макіяжу та засобів догляду за шкірою",
  },
  [SurgeryStep["glasses-on"]]: {
    label:
      "Пацієнту одягають захисні окуляри на очі і наносять спеціальний гель на шкіру навколо очей",
  },
  [SurgeryStep.sparks]: {
    label:
      "Спеціальним наконечником лікар виконує 6 спалахів світла в периокулярній зоні",
  },
  [SurgeryStep.gel]: {
    label:
      "Нанесення додаткового гелю і повторне проходження наконечником по шкірі по щоках (від вуха до носа)",
  },
  [SurgeryStep["gel-off"]]: {
    label: "Зняття надлишків гелю і масаж повік",
  },
  [SurgeryStep.iol]: {
    label: "факічна інтраокулярна лінза",
  },
  [SurgeryStep["open-eye-fiksacia"]]: {
    label: "Фіксація вікопоширювача",
  },
  [SurgeryStep["anastezia-local"]]: {
    label: "Крапельна місцева анестезія",
  },
  [SurgeryStep["cut3-1"]]: {
    label: "Розтини 3.25 мм і 1.2 мм",
  },
  [SurgeryStep["placing-iol"]]: {
    label: "Імплантація в передню камеру факічної інтраокулярної лінзи",
  },
  [SurgeryStep.adaptation]: {
    label: "Адаптація розтину, краплі",
  },
};

import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import InfoBlock from "@/components/shared/InfoBlock";
import { PriceAccordions } from "@/components/prices-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Ціни на послуги офтальмолога в Ужгороді | Goriachev",
  description:
    "Актуальні ціни на діагностику зору, консультації, лазерну корекцію, лікування катаракти, глаукоми та інші офтальмологічні послуги.",
  img: "img/prices/prices-og.jpg",
  canonical: "tsiny",
});

export default function PricesPage() {
  return (
    <>
      <TopBanner
        title="Ціни на офтальмологічні послуги в Ужгороді"
        desc="Здоровий зір ближче, ніж здається"
        img={{ url: "/img/prices/prices-bg.jpg", alt: "Ціни" }}
      />
      <div className="container">
        <InfoBlock sectionClassName="pb-0" skipContainer>
          <p>
            В Офтальмологічному центрі Дмитра Горячева в Ужгороді ми пропонуємо
            комплексний підхід до діагностики, корекції та лікування захворювань
            очей із застосуванням сучасного діагностичного й хірургічного
            обладнання. На цій сторінці ви можете ознайомитися з актуальними
            цінами на консультації офтальмолога, комплексну діагностику зору,
            дитячу офтальмологію, лазерну корекцію зору, лікування катаракти,
            глаукоми, захворювань сітківки та інші офтальмологічні послуги.
          </p>
          <p>
            <b>Вартість обстеження та лікування</b> залежить від виду процедури,
            обсягу необхідної діагностики, обраного методу лікування й
            індивідуальних клінічних “показань.
          </p>
          <p>
            Нижче представлений детальний прайс на офтальмологічні послуги.
            Оберіть потрібний розділ, щоб переглянути перелік процедур та їхню
            вартість.
          </p>
        </InfoBlock>
        <PriceAccordions />
      </div>
    </>
  );
}

export default function MedicalClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://goriachev-uzh.clinic/#organization",
        name: "Офтальмологічний центр Дмитра Горячева",
        url: "https://goriachev-uzh.clinic/",
        telephone: "+380667900090",
        medicalSpecialty: "https://schema.org/Ophthalmology",
        description:
          "Офтальмологічний центр Дмитра Горячева в Ужгороді. Діагностика зору, лазерна корекція, лікування катаракти, глаукоми, захворювань сітківки та дитяча офтальмологія.",
        logo: "https://goriachev-uzh.clinic/share-og.png",
        image: "https://goriachev-uzh.clinic/share-og.png",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Лазерна корекція зору",
            url: "https://goriachev-uzh.clinic/posluhy/lazerna-korektsiya-zoru",
          },
          {
            "@type": "MedicalProcedure",
            name: "Хірургічне лікування катаракти",
            url: "https://goriachev-uzh.clinic/posluhy/khirurgiya-katarakti",
          },
          {
            "@type": "MedicalProcedure",
            name: "Лікування захворювань сітківки",
            url: "https://goriachev-uzh.clinic/posluhy/khirurgiya-zakhvoryuvan-sitkivki",
          },
          {
            "@type": "MedicalProcedure",
            name: "Лікування глаукоми",
            url: "https://goriachev-uzh.clinic/posluhy/khirurgiya-glaukomi",
          },
          {
            "@type": "MedicalTherapy",
            name: "Дитяча офтальмологія",
            url: "https://goriachev-uzh.clinic/posluhy/dityacha-oftalmologiya",
          },
        ],
        sameAs: [
          "https://www.instagram.com/goriachev_centruzh/",
          "https://www.facebook.com/goriachev.centruzh?locale=uk_UA",
        ],
        department: [
          { "@id": "https://goriachev-uzh.clinic/#fedyntsia" },
          { "@id": "https://goriachev-uzh.clinic/#petefi" },
          { "@id": "https://goriachev-uzh.clinic/#zankovetskoi" },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://goriachev-uzh.clinic/#fedyntsia",
        name: "Офтальмологічний центр Дмитра Горячева — Фединця",
        url: "https://goriachev-uzh.clinic/",
        telephone: "+380667900090",
        medicalSpecialty: "https://schema.org/Ophthalmology",
        parentOrganization: {
          "@id": "https://goriachev-uzh.clinic/#organization",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "вул. Фединця, 2",
          addressLocality: "Ужгород",
          addressRegion: "Закарпатська область",
          addressCountry: "UA",
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://goriachev-uzh.clinic/#petefi",
        name: "Офтальмологічний центр Дмитра Горячева — Петефі",
        url: "https://goriachev-uzh.clinic/",
        telephone: "+380667900090",
        medicalSpecialty: "https://schema.org/Ophthalmology",
        parentOrganization: {
          "@id": "https://goriachev-uzh.clinic/#organization",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "пл. Петефі, 1",
          addressLocality: "Ужгород",
          addressRegion: "Закарпатська область",
          addressCountry: "UA",
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://goriachev-uzh.clinic/#zankovetskoi",
        name: "Офтальмологічний центр Дмитра Горячева — Заньковецької",
        url: "https://goriachev-uzh.clinic/",
        telephone: "+380667900090",
        medicalSpecialty: "https://schema.org/Ophthalmology",
        parentOrganization: {
          "@id": "https://goriachev-uzh.clinic/#organization",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "вул. Заньковецької, 77г",
          addressLocality: "Ужгород",
          addressRegion: "Закарпатська область",
          addressCountry: "UA",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

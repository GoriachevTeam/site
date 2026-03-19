import { FC, PropsWithChildren } from "react";

import DoctorCard from "../DoctorCard";

import { fetchDoctors } from "@/lib/doctors";

import { DoctorsGridProps } from "./interfaces";

const DoctorsGrid: FC<PropsWithChildren<DoctorsGridProps>> = async ({
  title,
  maxToDispaly,
  children,
}) => {
  const doctors = await fetchDoctors();

  const mainDoctor = doctors[0];
  const otherDoctors = doctors.slice(1);
  const doctorsToDisplay = maxToDispaly
    ? otherDoctors.slice(0, maxToDispaly)
    : otherDoctors;

  return (
    <section className="container py-12 overflow-hidden grid h-fit">
      {title ? (
        <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-6">
          {title}
        </h2>
      ) : null}
      {mainDoctor ? (
        <DoctorCard
          className="[&_h3]:text-xl xl:[&_h3]:text-2xl [&_img]:text-xl md:[&_img]:max-w-190 xl:items-center gap-2 xl:gap-8 xl:grid xl:grid-cols-2"
          {...mainDoctor}
        />
      ) : null}
      <div className="grid h-fit gap-8 md:grid-cols-2 mt-8 xl:grid-cols-4">
        {doctorsToDisplay.map((doctor) => (
          <DoctorCard
            // className="md:[&_img]:h-57.5 lg:[&_img]:h-75 xl:[&_img]:h-45 2xl:[&_img]:h-55"
            {...doctor}
            key={doctor._id}
          />
        ))}
      </div>
      {children}
    </section>
  );
};

export default DoctorsGrid;

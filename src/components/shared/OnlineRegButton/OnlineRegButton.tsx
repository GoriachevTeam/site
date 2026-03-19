import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const OnlineRegButton: FC<PropsWithChildren> = ({ children }) => {
  // https://docs.google.com/forms/d/e/1FAIpQLSfKuDzxtVpAmGVrv5Vcp4bE51LJRfYg3Tn8l9O0IK_EWRrDEQ/viewform?usp=sf_link

  return (
    <Button variant="primaryFilled" asChild>
      <Link href="/application-form">
        {children || (
          <>
            Запис онлайн <ArrowRight />
          </>
        )}
      </Link>
    </Button>
  );
};

export default OnlineRegButton;

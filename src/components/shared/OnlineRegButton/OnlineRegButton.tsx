import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const OnlineRegButton: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  // https://docs.google.com/forms/d/e/1FAIpQLSfKuDzxtVpAmGVrv5Vcp4bE51LJRfYg3Tn8l9O0IK_EWRrDEQ/viewform?usp=sf_link

  return (
    <Button className={className} variant="primaryFilled" asChild>
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

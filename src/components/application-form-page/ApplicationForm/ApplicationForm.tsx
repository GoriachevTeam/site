"use client";

import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import SuccessCard from "./SuccessCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { FORM_SERVICES, schema, TypeFormData } from "./constants";

const ApplicationForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<TypeFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: "",
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: TypeFormData) {
    if (!executeRecaptcha) {
      console.error("Recaptcha not ready");
      return;
    }

    setLoading(true);

    try {
      const token = await executeRecaptcha("submit_form");
      const res = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...values }),
      });

      const data = await res.json();

      if (!data.success) {
        console.error("Recaptcha failed");
        return;
      }

      setIsSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      form.reset();
      setIsSuccess(false);
    };
  }, []);

  return (
    <>
      {isSuccess ? (
        <SuccessCard />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-lg"
            data-form-name="contact_form"
          >
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Оберіть послугу<sup className="text-red-500">*</sup>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Вибрати" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {FORM_SERVICES.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ваше імʼя<sup className="text-red-500">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Моя відповіть" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ваш номер телефону<sup className="text-red-500">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+380 444 555 0000"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading || isSuccess}
              type="submit"
              className="w-full rounded-md mt-2"
              data-gtm-event="form_submit"
              data-gtm-form="contact_form"
            >
              Відправити
            </Button>
          </form>
        </Form>
      )}
      {loading ? (
        <div className="absolute left-0 top-0 w-full h-full backdrop-blur-[1px] flex items-center justify-center">
          <Spinner className="size-10 block" />
        </div>
      ) : null}
    </>
  );
};

export default ApplicationForm;

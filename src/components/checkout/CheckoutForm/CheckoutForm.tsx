"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { FaHouse, FaWallet } from "react-icons/fa6";
import { toast } from "sonner";
import { placeOrderAction } from "@/actions/order.actions";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary/CheckoutSummary";
import type { Address } from "@/interfaces/address.interface";
import type { PopulatedCartItem } from "@/interfaces/cart.interface";
import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/schemas/checkout.schema";
import { FormSection } from "./FormSection";
import { PaymentMethods } from "./PaymentMethods";
import { SavedAddresses } from "./SavedAddresses";
import { ShippingFields } from "./ShippingFields";

interface CheckoutFormProps {
  addresses: Address[];
  defaultPhone: string;
  items: PopulatedCartItem[];
  subtotal: number;
  discount: number;
  total: number;
}

export const CheckoutForm = ({
  addresses,
  defaultPhone,
  items,
  subtotal,
  discount,
  total,
}: CheckoutFormProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState("new");

  // form
  const {
    register,
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    mode: "onTouched",
    defaultValues: {
      city: "",
      details: "",
      phone: defaultPhone,
      paymentMethod: "cash",
    },
  });

  const method = useWatch({ control, name: "paymentMethod" });

  // address actions
  const chooseAddress = (address: Address) => {
    const options = { shouldValidate: true };
    setSelected(address._id);
    setValue("city", address.city, options);
    setValue("details", address.details, options);
    setValue("phone", address.phone, options);
  };

  const chooseNew = () => {
    setSelected("new");
    setValue("city", "");
    setValue("details", "");
    setValue("phone", defaultPhone);
    clearErrors();
  };

  // submit
  const onSubmit = async (values: CheckoutFormValues) => {
    const result = await placeOrderAction(values);

    if (!result.ok) {
      toast.error(result.message);
      if (result.unauthorized) router.push("/login");
      return;
    }

    toast.success(result.message);

    if ("url" in result) {
      window.location.assign(result.url);
      return;
    }

    router.push("/orders");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Shipping */}
          <FormSection
            icon={<FaHouse />}
            title="Shipping Address"
            subtitle="Where should we deliver your order?"
          >
            <div className="space-y-5 p-6">
              <SavedAddresses
                addresses={addresses}
                selected={selected}
                onSelect={chooseAddress}
                onNew={chooseNew}
              />
              <ShippingFields
                register={register}
                errors={errors}
                isNew={selected === "new"}
              />
            </div>
          </FormSection>

          {/* Payment */}
          <FormSection
            icon={<FaWallet />}
            title="Payment Method"
            subtitle="Choose how you'd like to pay"
          >
            <PaymentMethods
              value={method}
              onChange={(value) => setValue("paymentMethod", value)}
            />
          </FormSection>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <CheckoutSummary
            items={items}
            subtotal={subtotal}
            discount={discount}
            total={total}
            method={method}
            submitting={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};
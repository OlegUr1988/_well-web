import { ReactNode } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

interface Props<T extends FieldValues> {
  children: ReactNode;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: (data: T) => void;
}

const FormContainer = <T extends FieldValues>({
  children,
  handleSubmit,
  onSubmit,
}: Props<T>) => {
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default FormContainer;

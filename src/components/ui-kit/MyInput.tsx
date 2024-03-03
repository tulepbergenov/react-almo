import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";

export const MyInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return <input className={classNames(className)} ref={ref} {...props} />;
  },
);

MyInput.displayName = "MyInput";

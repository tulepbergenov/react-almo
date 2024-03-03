import classNames from "classnames";
import { ComponentProps, ReactNode, forwardRef } from "react";

export const MyButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & {
    children: ReactNode;
  }
>(({ children, className, ...props }, ref) => {
  return (
    <button
      className={classNames("btn btn-primary", className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

MyButton.displayName = "MyButton";

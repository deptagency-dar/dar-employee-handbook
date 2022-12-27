import clsx from "clsx";

type BoundedSize = 'small' | 'base' | 'wide' | 'widest';

interface Props {
  as: keyof JSX.IntrinsicElements;
  size: BoundedSize;
  children: React.ReactNode;
  className?: string;
}

export const Bounded = ({
  as: Comp = "div",
  size = "base",
  className,
  children,
}: Props) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};

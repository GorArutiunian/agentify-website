import clsx from "clsx";

type Props = { 
  as?: keyof JSX.IntrinsicElements; 
  children: React.ReactNode; 
  className?: string;
};

export default function Headline({ as: Tag = "h2", children, className }: Props) {
  return (
    <Tag
        className={clsx(
            "font-bold text-white",
            "text-3xl sm:text-4xl lg:text-5xl",
            className
          )}
    >
      {children}
    </Tag>
  );
}

import { ReactElement } from "react";

export const CarouselItem = ({
  children,
  width,
}: {
  children: ReactElement;
  width?: string;
}) => {
  return (
    <div
      className="inline-flex items-center justify-center h-48 bg-primary text-fifth"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

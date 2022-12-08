import React, { useState, ReactElement } from "react";

const Carousel = ({ children }: { children: ReactElement[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="whitespace-nowrap transition transform duration-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="m-5"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex ? "bg-primary" : ""
              } w-full text-tertiary rounded m-3`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          className="m-5"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

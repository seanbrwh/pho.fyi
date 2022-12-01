import useTimeout from "../../hooks/useTimeout";

export const Toast = (props: any) => {
  useTimeout(props.close, 5000);

  return (
    <div className="absolute bottom-0 mb-5 z-[999] w-full">
      <div
        key={props.key}
        className="w-1/2 bg-red-600 mx-auto flex flex-col items-start rounded-md mt-2 animate-fadeIn"
      >
        <div className="p-2">
          <button onClick={props.close}>X</button>
        </div>
        <div className="w-full  p-5 flex justify-center items-center">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

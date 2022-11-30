import useTimeout from "../../hooks/useTimeout";

export const Toast = (props: any) => {
  useTimeout(props.close, 5000);

  return (
    <div key={props.key}>
      <div>{props.children}</div>
      <div>
        <button onClick={props.close}>X</button>
      </div>
    </div>
  );
};

export default function API() {
  let CheckboxArr = [
    {
      inputClassName: "mt-3",
      labelText: "Uppercase",
      labelCalssName: "text-light ms-1",
      inpID: "up-inp",
      inpArg: "uppercase",
    },
    {
      inputClassName: "mt-3 ms-3",
      labelText: "Lowercase",
      labelCalssName: "text-light ms-1",
      inpID: "lw-inp",
      inpArg: "lowercase",
    },
    {
      inputClassName: "mt-3 ms-3",
      labelText: "Numbers",
      labelCalssName: "text-light ms-1",
      inpID: "num-inp",
      inpArg: "numbers",
    },
    {
      inputClassName: "mt-3 ms-3",
      labelText: "Characters",
      labelCalssName: "text-light ms-1",
      inpID: "Char-inp",
      inpArg: "characters",
    },
  ];
  return CheckboxArr;
}

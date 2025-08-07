interface ItemCountProps {
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
}

export default function ItemCount({ count, setCount }: ItemCountProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 3) return;
    const numericValue = value.replace(/[^0-9]/g, "");
    setCount(numericValue);
  };

  return (
    <div className="count-body">
      <div
        className="minus-count"
        onClick={() => {
          setCount((prevCount) => {
            const countNumber = Number(prevCount);
            if (countNumber <= 0) return "0";
            return (countNumber - 1).toString();
          });
        }}
      >
        -
      </div>
      <input className="count-label" value={count} onChange={handleChange} />
      <div
        className="add-count"
        onClick={() => {
          setCount((prevCount) => {
            const countNumber = Number(prevCount);
            if (countNumber >= 999) return "999";
            const count = countNumber + 1;
            return count.toString();
          });
        }}
      >
        +
      </div>
    </div>
  );
}

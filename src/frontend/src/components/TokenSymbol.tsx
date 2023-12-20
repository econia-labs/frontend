export const TokenSymbol: React.FC<{
  symbol: string;
  smallSymbol?: boolean;
}> = ({ symbol, smallSymbol = false }) => {
  return (
    <span
      className={
        "text-neutral-600 " + (smallSymbol ? "text-[10px]" : "text-xs")
      }
    >
      {symbol || "-"}
    </span>
  );
};

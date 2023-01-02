export const transformPrice = (price: string) => {
  const transformed = Number(price).toFixed(2);
  const transformDecimal = transformed.replace(".", ",");
  const transformThousand = transformDecimal.replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    "."
  );
  return `R$ ${transformThousand}`;
};

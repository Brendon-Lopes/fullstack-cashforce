export const transformDate = (date: string) => {
  const transformed = new Date(date);

  return transformed.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

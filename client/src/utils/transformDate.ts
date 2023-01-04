export const transformDate = (date: string) => {
  const dateObject = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(dateObject);
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});


export const formatPublishDate = (date: Date) => {
  return dateFormatter.format(date);
};
 
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});


export const formatPublishDate = (date: Date) => {
  return dateFormatter.format(date);
};

export const getRandomColor = () => {
  const colors = ["#dc2626", "#ea580c", "#ca8a04", "#65a30d", "#0d9488", "#0891b2", "#7c3aed", "#db2777", "#e11d48", "#4f46e5"];
  return colors[Math.floor(Math.random() * 10)];
};
 
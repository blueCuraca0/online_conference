import i18next from "i18next";

export const getLocale = () => {
  return i18next.language === "en" ? "en-US" : "uk-UA";
};

export const clearDate = (date: Date) => {
  const formattedDate = date.toLocaleDateString(getLocale(), {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return formattedDate;
};

export const getToday = () => {
  return new Date().toLocaleDateString(getLocale(), { weekday: "long", month: "long", day: "numeric" });
};

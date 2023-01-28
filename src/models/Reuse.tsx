export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const dateFormateFunc = (date: string) => {
  const now: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const local: string = navigator.language;

  const formatDate: string = new Intl.DateTimeFormat(local, options).format(
    now
  );
  return formatDate;
};

export const dateFormateFuncWithOutTime = (date: string) => {
  const now: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const local: string = navigator.language;

  const formatDate: string = new Intl.DateTimeFormat(local, options).format(
    now
  );
  return formatDate;
};

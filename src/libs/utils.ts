export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const formatTweet = (str: string) => {
  if (str.length > 30) {
    return str.substring(0, 27) + "...";
  } else {
    return str;
  }
};

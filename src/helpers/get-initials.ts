export const getInitials = (name: string) => {
  if (name) {
    return name
      .split(/\s/)
      .reduce(
        (response: string, word: string) => (response += word.slice(0, 1)),
        ""
      );
  }
  return "";
};

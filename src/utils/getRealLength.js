export default value => {
  if (!value) {
    return undefined;
  }
  let length = value.length;
  const nickLength = value.split("[ALIAS]").length;
  nickLength > 1 && (length -= (nickLength - 1) * 3);

  const emojiLength = value.split(/\/:[A-Za-z0-9]{4}-[A-Za-z0-9]{4}:\//).length;
  emojiLength > 1 && (length -= (emojiLength - 1) * 9);
  return length;
};

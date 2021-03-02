const exchangeDateDashesForSlashes = (date: string): string => {
  date = date.replace(/-/gm, '/');
  return date;
};

export default { exchangeDateDashesForSlashes };

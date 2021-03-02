const exchangeExercisesDashesForMiddleDots = (exercises: string): string => {
  exercises = exercises.replace(/-/gm, '‣');
  return exercises;
};

export default { exchangeExercisesDashesForMiddleDots };

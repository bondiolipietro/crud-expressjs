import Workout from '../../model/Workout';
import exercisesUtil from './exercisesUtil';

const handleViewExercises = (workout_list: Array<Workout>): Array<Workout> => {
  workout_list.forEach((workout) => {
    workout.exercises = exercisesUtil.exchangeExercisesDashesForMiddleDots(workout.exercises);
    return;
  })
  return workout_list;
};

export default handleViewExercises;

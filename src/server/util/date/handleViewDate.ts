import Workout from '../../model/Workout';
import dateUtil from './dateUtil';

const handleViewDate = (workout_list: Array<Workout>): Array<Workout> => {
  workout_list.forEach((workout) => {
    workout.date = dateUtil.exchangeDateDashesForSlashes(workout.date);
    return;
  })
  return workout_list;
};

export default handleViewDate;

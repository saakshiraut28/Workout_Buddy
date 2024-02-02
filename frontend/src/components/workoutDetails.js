/** @format */

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="flex justify-between w-full workout-details bg-[#fff] px-6 md:px-20 py-3 my-2">
      <div className="py-2">
        <p className="font-medium text-lg ">{workout.title}</p>
        <p className="font-mediumm ">Load (kg): {workout.load}</p>
        <p className="font-mediumm ">Reps: {workout.reps}</p>
        <p className="font-medim text-sm text-[#727272]">
          ...{" "}
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <div className="py-2">
        <span className="text-[#ff6a6a]" onClick={handleClick}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetails;

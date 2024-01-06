/** @format */

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="Details grid bg-white border px-5 md:px-10 space-y-1 py-5 ">
      <p className="text-md font-bold text-[#1fb84e]">{workout.title}</p>
      <p className="text-sm font-regular text-gray-700">Reps: {workout.reps}</p>
      <p className="text-sm font-regular text-gray-700">
        Load (kgs): {workout.loads}
      </p>
      <p className="text-sm font-regular text-gray-500">
        Created At: {workout.createdAt}
      </p>
    </div>
  );
};

export default WorkoutDetails;

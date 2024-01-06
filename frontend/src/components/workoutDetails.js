/** @format */

const WorkoutDetails = ({ workout }) => {
  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = response.json();

    if (response.ok) {
      console.log("Workout deleted");
      window.location.reload(true);
    }
    if (!response.ok) {
      console.log(response);
    }
  };
  return (
    <div className="Details grid bg-white border px-5 md:px-10 space-y-1 py-5 my-4">
      <p className="text-md font-bold text-[#1fb84e]">{workout.title}</p>
      <p className="text-sm font-regular text-gray-700">Reps: {workout.reps}</p>
      <p className="text-sm font-regular text-gray-700">
        Load (kgs): {workout.loads}
      </p>
      <p className="text-sm font-regular text-gray-500">
        Created At: {workout.createdAt}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;

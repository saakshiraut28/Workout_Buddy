/** @format */

import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
    <div className="Details flex bg-white border px-5 md:px-10 space-y-1 py-5 my-4">
      <div className="flex w-1/2">
        <span>
          <p className="text-md font-bold text-[#1fb84e]">{workout.title}</p>
          <p className="text-sm font-regular text-gray-700">
            Reps: {workout.reps}
          </p>
          <p className="text-sm font-regular text-gray-700">
            Load (kgs): {workout.loads}
          </p>
          <p className="text-sm font-regular text-gray-500">
            Created At:{" "}
            {formatDistanceToNow(new Date(workout.createdAt), {
              addSuffix: true,
            })}
          </p>
        </span>
      </div>
      <div className="flex justify-end w-1/2">
        <button
          onClick={handleDelete}
          className="h-[32px] px-2 py-2 rounded-full bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;

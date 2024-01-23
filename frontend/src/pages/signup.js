/** @format */

const SignUp = () => {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="max-w-xl bg-[#fff] py-20 px-5 md:px-10 space-y-10">
        <p className="font-bold text-xl">Sign Up</p>
        <form className="space-y-6">
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Password"
            type="passworkd"
          />
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Confirm Password"
            type="passworkd"
          />
          <div className="mx-auto flex w-full justify-center items-center ">
            <button className="bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

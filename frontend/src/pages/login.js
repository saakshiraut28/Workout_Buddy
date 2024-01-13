/** @format */

function Login() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="max-w-xl bg-[#fff] py-20 px-5 md:px-10 space-y-10">
        <p className="font-bold text-xl">Login</p>
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
        </form>
      </div>
    </div>
  );
}

export default Login;

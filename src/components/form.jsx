const Form = () => {
  return (
    <div className="fixed bottom-0 top-0 right-0 left-0 flex justify-center align-middle items-center">
      {/* form section  */}

      <div className="flex flex-col space-y-3 p-3 rounded-md shadow-md shadow-gray-600 pt-10 w-[300px]">
        <div className="relative">
          <input
            className="peer w-full py-1 border-b-2 border-gray-400 text-xl focus:outline-none focus:border-purple-600 my-4 placeholder-transparent"
            type="text"
            placeholder="Email"
            id="email"
          />
          <label
            className="text-sm text-gray-400 absolute -top-2 left-0 peer-placeholder-shown:top-5 transition-all peer-placeholder-shown:text-xl
            peer-focus:text-sm
            peer-focus:-top-2"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            className="peer w-full py-1 border-b-2 border-gray-400 text-xl focus:outline-none focus:border-purple-600 my-4 placeholder-transparent"
            type="text"
            placeholder="Email"
            id="password"
          />
          <label
            className="text-sm text-gray-400 absolute -top-2 left-0 peer-placeholder-shown:top-5 transition-all peer-placeholder-shown:text-xl
            peer-focus:text-sm
            peer-focus:-top-2"
            htmlFor="password"
          >
            password
          </label>
        </div>

        <div className="flex justify-center align-middle items-center pt-6">
          <button className="px-2 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 text-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

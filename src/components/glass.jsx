const Glass = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gradient-to-tr from-blue-500 to-pink-400 flex justify-center align-middle items-center">
      <div className="w-[300px] h-auto rounded-md px-1 py-2 shadow-md bg-gradient-to-br from-gray-400 to-transparent">
        <h1 className="text-4xl font-semibold py-4">The title</h1>
        <h4 className="text-xl py-1">The sub title</h4>

        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in earum
          sit sunt assumenda debitis sed asperiores explicabo beatae fuga atque
          nobis provident, tempore id minus repudiandae laudantium maiores
          ipsam.
        </p>
      </div>

      <div className="w-40 h-40 rounded-full bg-purple-500 absolute -z-20 top-[250px] left-44"></div>
    </div>
  );
};

export default Glass;

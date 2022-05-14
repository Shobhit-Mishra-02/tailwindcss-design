const Bob = () => {
  return (
    <div className="flex justify-center align-middle items-center h-[500px]">
      <div className="relative w-52 h-52">
        <div className="w-60 h-60 rounded-full bg-pink-500 absolute top-0 -left-32 mix-blend-multiply  animate-move filter blur-2xl animation-delay-2000"></div>
        <div className="w-60 h-60 rounded-full bg-yellow-500 absolute top-0 -right-20 mix-blend-multiply  animate-move filter blur-2xl"></div>
        <div className="w-60 h-60 rounded-full bg-red-500 absolute -bottom-32 mix-blend-multiply  animate-move filter blur-2xl animation-delay-4000"></div>

        <div className="flex justify-center align-middle items-center h-full font-semibold text-7xl top-20">
          This is Heaven
        </div>
      </div>
    </div>
  );
};

export default Bob;

const InputFile = () => {
  return (
    <div className="flex justify-center align-middle items-center">
      <div className="w-64 h-60 rounded-md border-4 border-dashed border-gray-400">
        <label htmlFor="file">
          Select file
          <input type="file" className="sr-only" />
        </label>
      </div>
    </div>
  );
};
export default InputFile;

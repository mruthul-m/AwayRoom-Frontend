const FormInput = () => {
  return (
    <div className="flex flex-col  border-2 border-red-600 ">
      <label htmlFor="" className="text-left">
        Name
      </label>
      <input className="bg-transparent border-2 border-black rounded-lg p-1 outline-none text-lg w-3/5" />
    </div>
  );
};

export default FormInput;

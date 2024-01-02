const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-3xl font-semibold">Find by Sorting</h1>
      <section>
        <label className="font-thin text-lg">Category:</label>
        <input
          type="text"
          placeholder="Boys Room"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl px-2"
          readOnly
        />
      </section>
      <section>
        <label className="font-thin text-lg">City:</label>
        <input
          type="text"
          placeholder="city, area name"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl px-2"
        />
      </section>
      <button className="w-1/4 p-2 bg-slate-50 rounded-2xl text-blue-500 font-semibold">
        filter
      </button>
    </div>
  );
};

export default Sidebar;

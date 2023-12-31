const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-3xl font-semibold">Find by Sorting</h1>
      <section>
        <label className="font-thin text-lg">Category:</label>
        <input
          type="text"
          placeholder="Boys Room"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl "
          readOnly
        />
      </section>
      <section>
        <label className="font-thin text-lg">City:</label>
        <input
          type="text"
          placeholder="city, area name"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl"
        />
      </section>{" "}
      <section>
        <label className="font-thin text-lg">Category:</label>
        <input
          type="text"
          placeholder="Boys Room"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl"
        />
      </section>{" "}
      <section>
        <label className="font-thin text-lg">Category:</label>
        <input
          type="text"
          placeholder="Boys Room"
          className="rounded-sm py-1 block w-full outline-none text-black text-xl"
        />
      </section>
    </div>
  );
};

export default Sidebar;

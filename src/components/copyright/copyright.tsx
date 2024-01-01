function CopyRight() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-screen-xl  mx-auto py-2 font-thin">
      © Copyright preserve {year}
    </div>
  );
}

export default CopyRight;

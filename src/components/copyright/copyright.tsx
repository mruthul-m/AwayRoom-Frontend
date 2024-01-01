function CopyRight() {
  const year: number = new Date().getFullYear();

  return (
    <div className="max-w-screen-xl  mx-auto py-2 font-thin">
      © Copyright preserve {year}
    </div>
  );
}

export default CopyRight;

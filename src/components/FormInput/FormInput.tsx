interface Props {
  label: string;
  onChange: React.FC;
  id: number;
  type: string;
  inputProps: unknown;
  value: any;
  errorMessage: string;
}

const FormInput = (props: Props) => {
  const { label, errorMessage, onChange, id, type, ...inputProps } = props;

  return (
    <div className="flex flex-col ">
      <label htmlFor="" className="text-left text-neutral-500 italic">
        {label}
      </label>
      <input
        {...inputProps}
        type={type}
        className="  rounded-lg p-2 outline-none text-lg w-full mb-5 max-h-fit text-black font-normal"
        style={{ backgroundColor: "rgba(221,230,237,.4)" }}
        onChange={onChange}
        name={inputProps.name}
      />
    </div>
  );
};

export default FormInput;

interface InputProps {
  placeholder: string
  value?: string
  type?: string
  name?: string
  id?: string
  disabled?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  defaultValue?: string,
  label?: string
}

const Input = ({placeholder, value, type, disabled, id, name, onChange, onBlur, defaultValue, label}: InputProps) => {
  return (
    <div className="relative w-full min-w-[200px]">
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
      name={name}
      id={id}
      defaultValue={defaultValue}
      className="peer h-full min-h-[56px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
    ></input>
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">{label ? label : ""}</label>
  </div>
  )
}

export default Input
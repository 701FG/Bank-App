import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

const TextField = ({ label, hint, ...props }: TextFieldProps) => {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input className="field__input" {...props} />
      {hint ? <span className="field__hint">{hint}</span> : null}
    </label>
  );
};

export default TextField;

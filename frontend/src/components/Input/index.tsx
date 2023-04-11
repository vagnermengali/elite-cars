import { CustomInput, CustomLabel, ErrorSpan } from "./style";
import { FiAlertCircle } from "react-icons/fi";
import { InputProps } from "../../interfaces/InputProps/InputProps";
import React, { useContext } from "react";
import { MotorShopContext } from "../../context";

const Input = React.forwardRef(
  ({ label, value, register, error, name, ...rest }: InputProps, ref) => {
    const { setCep } = useContext(MotorShopContext);

    return (
      <>
        <CustomLabel>
          {label}
          {name === "cep" ? (
            <CustomInput
              {...rest}
              {...register("cep", {
                onChange: (event) => setCep(event.target.value),
              })}
            />
          ) : (
            <CustomInput {...rest} {...register(name)} />
          )}

          <ErrorSpan>
            {error?.message && <FiAlertCircle />}
            {error?.message && error.message}
          </ErrorSpan>
        </CustomLabel>
      </>
    );
  }
);

export default Input;

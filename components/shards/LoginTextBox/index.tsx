import { useMemo, useState } from "react";
import Icon from "../Icon";
import styles from "./loginTextBox.module.scss";

interface ILoginTextBoxProps {
  id: string;
  type: string;
  placeholder: string;
  iconClass: string;
  label: string;
  name: string;
  register: any;
  pwdShow?: boolean;
  pattern?: string;
  onInvalid?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

export default function LoginTextBox({
  iconClass,
  label,
  type,
  id,
  name,
  register,
  ...inputProps
}: ILoginTextBoxProps) {
  const [pwd, setPwd] = useState({
    show: false,
    type: "password",
  });

  const isPwd = type === "password";

  const handlePwdShowClick = () => {
    setPwd({
      show: !pwd.show,
      type: !pwd.show ? "text" : "password",
    });
  };

  const icon = useMemo(() => {
    return {
      openEyes: "fas fa-eye-slash fa-lg",
      closeEyes: "fas fa-eye fa-lg",
    };
  }, []);

  const passwordType = useMemo(() => {
    return pwd.show ? icon.closeEyes : icon.openEyes;
  }, [pwd.show, icon]);

  return (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <div className={styles.textBox}>
          <Icon iconName={iconClass} className={styles.icon}></Icon>
          <input
            {...register(name, {
              required: "This field is required",
            })}
            className={styles.input}
            type={isPwd ? pwd.type : type}
            {...inputProps}
            required
          />

          {isPwd && (
            <Icon
              className={styles.icon}
              iconName={passwordType}
              handleClick={handlePwdShowClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

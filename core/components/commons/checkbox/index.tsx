import React from "react";
import styles from "./styles.module.css";

// create props interface for component
interface Props {
  value: number;
  cb: (v: number) => void;
  checked: boolean;
  item?: any;
}

const CheckBox: React.FC<Props> = (props) => {
  const { checked, value, cb, item } = props;
  return (
    <div>
      <div className={`${styles.round} ${checked ? styles.checked : ''}`}>
        <input
          type="checkbox"
          id="checkbox"
          name={`checkbox.${value}.checked`}
          readOnly
          checked={checked}
        />
        <label htmlFor="checkbox" onClick={() => cb(value)} ></label>
      </div>
    </div>
  );
};

export default CheckBox;

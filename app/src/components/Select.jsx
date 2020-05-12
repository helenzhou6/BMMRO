/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import colors from "../materials/colors";
import ErrorMessage from "./ErrorMessage";

const Select = ({ name, label, onChange, onBlur, options, error }) => {
  const styles = {
    label: css`
      display: block;
      padding-bottom: 5px;
    `,
    input: css`
      margin-right: 5px;
      padding: 5px;
      font-size: 15px;
      border: 1px solid ${colors.darkBlue};
    `,
  };
  return (
    <Fragment>
      <label css={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        css={styles.input}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option key="none" value="">
          -- Please select option --
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {!!error && <ErrorMessage text={error} isInline={true} />}
    </Fragment>
  );
};

export default Select;
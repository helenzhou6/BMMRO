/** @jsx jsx */
import { Formik, Form } from "formik";
import { css, jsx } from "@emotion/core";
import TextInput from "./formFields/TextInput/TextInput";
import DateInput from "./formFields/DateInput/DateInput";
import Select from "./formFields/Select/Select";
import areaOptions from "../constants/areaOptions";
import speciesOptions from "../constants/speciesOptions";

const styles = {
  container: css`
    padding: 0 15px;
  `,
  formContainer: css`
    margin-bottom: 10px;

    @media (min-width: 500px) {
      display: grid;
      grid-template-columns: 45% 45%;
      grid-column-gap: 10%;
    }
  `,
};

const EncounterForm = () => {
  return (
    <div css={styles.container}>
      <h1>New Encounter</h1>
      <p>
        <small>
          <em>*required fields</em>
        </small>
      </p>

      <Formik
        initialValues={{
          sequenceNumber: "",
          date: new Date(),
          area: "",
          species: "",
        }}
      >
        <Form>
          <div css={styles.formContainer}>
            <TextInput
              name="sequenceNumber"
              labelText="Sequence Number*"
              isRequired={true}
            />
            <DateInput name="date" labelText="Date*" isRequired={true} />
            <Select
              name="area"
              labelText="Area*"
              options={areaOptions}
              isRequired={true}
            />
            <Select
              name="species"
              labelText="Species*"
              options={speciesOptions}
              isRequired={true}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EncounterForm;

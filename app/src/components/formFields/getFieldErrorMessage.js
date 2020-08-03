import { FormErrorType } from "../../constants/forms";

const getFieldErrorMessage = (type, params) => {
  switch (type) {
    case FormErrorType.MAX_CHAR_LENGTH:
      return {
        type: FormErrorType.MAX_CHAR_LENGTH,
        message: `Text cannot be longer than ${params.length} characters`,
      };
    case FormErrorType.MAX_VALUE:
      return {
        type: FormErrorType.MAX_VALUE,
        message: `Value must be less than or equal to ${params.value}`,
      };
    case FormErrorType.MIN_VALUE:
      return {
        type: FormErrorType.MIN_VALUE,
        message: `Value must be greater than or equal to ${params.value}`,
      };
    case FormErrorType.INVALID_NUMBER_FORMAT:
      return {
        type: FormErrorType.INVALID_NUMBER_FORMAT,
        message: "Invalid number format",
      };
    case FormErrorType.INVALID_POSITION_FORMAT:
      return {
        type: FormErrorType.INVALID_POSITION_FORMAT,
        message: "Invalid position format",
      };
    case FormErrorType.INVALID_TIME_FORMAT:
      return {
        type: FormErrorType.INVALID_TIME_FORMAT,
        message: `Time must be in the following format ${params.format}`,
      };
    case FormErrorType.EMPTY:
      return {
        type: FormErrorType.INVALID_TIME_FORMAT,
        message: "Required",
      };
    default:
      return {
        type: undefined,
        message: "",
      };
  }
};

export default getFieldErrorMessage;

module.exports = {
  MISSING_ENV_VAR:
    "Missing variable(s). Make sure you defined projectId, apiKey, email and password.",
  MISSING_ARG:
    "Missing script argument(s). Make sure you defined start date and and date.",
  INVALID_DATE_FORMAT: "Dates must be in format dd/MM/yyyy.",
  END_DATE_BEFORE_START_DATE: "End date must be after start date.",
  NO_DATA:
    "There were no entries within given time range, so no csv file will be created. " +
    "If you believe there should be data in your specified date range, please check your project id.",
  INVALID_CREDENTIALS: "Email or password is invalid.",
};

const parseDates = require("../parseDates");

describe("parseDates", () => {
  it("parses startDate and endDate", () => {
    const startDateString = "31/12/2018";
    const endDateString = "01/01/2019";

    const parseDatesStatus = parseDates(startDateString, endDateString);

    expect(parseDatesStatus.isSuccessful()).toBe(true);
    expect(parseDatesStatus.value).toEqual({
      startDate: new Date("12/31/2018"),
      endDate: new Date("01/01/2019"),
    });
  });

  it("ensures that startDate and endDate are passed", () => {
    const parseDatesStatus = parseDates("dummy endDateString");

    expect(parseDatesStatus.isSuccessful()).toBe(false);
    expect(parseDatesStatus.status).toEqual("MISSING_ARG");
  });

  it("validates date format for startDate", () => {
    const startDateString = "January-01-2019";
    const endDateString = "01/02/2019";

    const parseDatesStatus = parseDates(startDateString, endDateString);

    expect(parseDatesStatus.isSuccessful()).toBe(false);
    expect(parseDatesStatus.status).toEqual("INVALID_DATE_FORMAT");
  });

  it("validates date format for endDate", () => {
    const startDateString = "01/01/2019";
    const endDateString = "January-02-2019";

    const parseDatesStatus = parseDates(startDateString, endDateString);

    expect(parseDatesStatus.isSuccessful()).toBe(false);
    expect(parseDatesStatus.status).toEqual("INVALID_DATE_FORMAT");
  });

  it("validates that endDate is after startDate", () => {
    const startDateString = "01/01/2019";
    const endDateString = "31/12/2018";

    const parseDatesStatus = parseDates(startDateString, endDateString);

    expect(parseDatesStatus.isSuccessful()).toBe(false);
    expect(parseDatesStatus.status).toEqual("END_DATE_BEFORE_START_DATE");
  });
});

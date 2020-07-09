const checkMissingConfig = require("../checkMissingConfig");

describe("checkMissingConfig", () => {
  const projectId = "dummy";
  const apiKey = "dummy";
  const email = "dummy";
  const password = "dummy";

  it("returns a successful status if everything is defined", () => {
    const response = checkMissingConfig(projectId, apiKey, email, password);
    expect(response.status).toEqual("SUCCESS");
    expect(response.isSuccessful()).toBe(true);
  });

  it("returns MISSING_ENV_VAR if projectId is missing", () => {
    const response = checkMissingConfig(null, apiKey, email, password);
    expect(response.status).toEqual("MISSING_ENV_VAR");
    expect(response.isSuccessful()).toBe(false);
  });

  it("returns MISSING_ENV_VAR if apiKey is missing", () => {
    const response = checkMissingConfig(projectId, null, email, password);
    expect(response.status).toEqual("MISSING_ENV_VAR");
    expect(response.isSuccessful()).toBe(false);
  });

  it("returns MISSING_ENV_VAR if email is missing", () => {
    const response = checkMissingConfig(projectId, apiKey, null, password);
    expect(response.status).toEqual("MISSING_ENV_VAR");
    expect(response.isSuccessful()).toBe(false);
  });

  it("returns MISSING_ENV_VAR if password is missing", () => {
    const response = checkMissingConfig(projectId, apiKey, email, null);
    expect(response.status).toEqual("MISSING_ENV_VAR");
    expect(response.isSuccessful()).toBe(false);
  });
});

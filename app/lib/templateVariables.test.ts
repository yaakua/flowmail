import { describe, expect, it } from "vitest";
import { templateVariablesForDisplay } from "./templateVariables";

describe("template variable display", () => {
  it("shows contact full name and hides system-managed variables", () => {
    expect(templateVariablesForDisplay(JSON.stringify(["first_name", "company", "unsubscribe_url"]))).toEqual(["full_name"]);
  });

  it("keeps user-visible variables in order without duplicates", () => {
    expect(templateVariablesForDisplay(JSON.stringify(["full_name", "email", "first_name"]))).toEqual(["full_name", "email"]);
  });
});

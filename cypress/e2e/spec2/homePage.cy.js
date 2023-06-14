import element from "../fixtures/elements.json";

describe("home page", () => {
  it("successfull home page", () => {
    cy.visit("/");
    cy.get(element.homeNavDays).should("have.length", 7);
    cy.get(element.homeH1).contains(element.homeText).should("be.visible");
  });
});

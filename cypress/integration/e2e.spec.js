describe("Test todos", () => {
  it("Add todo", () => {
    cy.visit("/");

    cy.contains('[data-testid="navigation"] > a', "Todos Example").click();

    cy.get('[data-testid="todos"] > input')
      .type("Learn to test{enter}")
      .type("Practice{enter}")
      .type("Keep trying{enter}");

    cy.get(
      'label:contains("Learn to test") > input[type="checkbox"]'
    ).should("not.be.checked");
    cy.get(
      'label:contains("Practice") > input[type="checkbox"]'
    ).should("not.be.checked");
    cy.get(
      'label:contains("Keep trying") > input[type="checkbox"]'
    ).should("not.be.checked");
  });

  it("Check todo", () => {
    cy.visit("/");

    cy.contains('[data-testid="navigation"] > a', "Todos Example").click();

    cy.get('[data-testid="todos"] > input')
      .type("Learn to test{enter}")
      .type("Practice{enter}")
      .type("Keep trying{enter}");

    cy.contains('label', "Practice").click();

    cy.get(
      'label:contains("Learn to test") > input[type="checkbox"]'
    ).should("not.be.checked");
    cy.get(
      'label:contains("Practice") > input[type="checkbox"]'
    ).should("be.checked");
    cy.get(
      'label:contains("Keep trying") > input[type="checkbox"]'
    ).should("not.be.checked");
  });

  it("Delete todo", () => {
    cy.visit("/");

    cy.contains('[data-testid="navigation"] > a', "Todos Example").click();

    cy.get('[data-testid="todos"] > input')
      .type("Learn to test{enter}")
      .type("Practice{enter}")
      .type("Keep trying{enter}");

    cy.contains('label', "Practice")
      .siblings("button")
      .click();

    cy.get('[data-testid="todos-list"]').should(
      "have.descendants",
      'label:contains("Learn to test")'
    );
    cy.get('[data-testid="todos-list"]').should(
      "not.have.descendants",
      'label:contains("Practice")'
    );
    cy.get('[data-testid="todos-list"]').should(
      "have.descendants",
      'label:contains("Keep trying")'
    );
  });
});

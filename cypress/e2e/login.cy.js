/* eslint-disable no-undef */

beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("SANITY CHECK", () => {
  it("open sign up page", () => {
    cy.url().should("contain", "http://localhost:5173/");
  });
});

describe("SUCCESS", () => {
  it("open the login page", () => {
    cy.get('[data-cy="route-login1"]').as("loginLink1");
    cy.get("@loginLink1").click();
    cy.url().should("contain", "/Login");
  });

  it("open the login page", () => {
    cy.get('[data-cy = "signup-input-email"]').type("mahmutaktas.m@gmail.com");
    cy.get('[data-cy="route-login"]').as("loginLink");
    cy.get("@loginLink").click();
    cy.url().should("contain", "/Login");
  });

  it("submit form", () => {
    cy.get('[data-cy="route-login1"]').as("loginLink1");
    cy.get("@loginLink1").click();

    cy.get('[data-cy = "input-email"]').type("mahmutaktas.m@gmail.com");
    cy.get('[data-cy = "input-password"]').type("Ma221.asdas");
    cy.get('[data-cy = "input-terms"]').check();
    cy.get('[data-cy = "submit-login-form"]').click();
    cy.url().should("contain", "/welcome");
  });
});

describe("FAIL", () => {
  it("throws 3 errors if email, password are not correct and terms is not checked", () => {
    cy.get('[data-cy="route-login1"]').as("loginLink1");
    cy.get("@loginLink1").click();

    cy.get('[data-cy = "input-email"]').type("mahmutaktas.m@gmail");
    cy.get('[data-cy = "input-password"]').type("Ma221");
    cy.get('[data-cy = "input-terms"]').check();
    cy.get('[data-cy = "input-terms"]').uncheck();

    cy.get('[data-cy = "errors"]').should("have.length", 3);
  });
});

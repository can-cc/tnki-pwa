// https://docs.cypress.io/api/introduction/api.html

describe("Login Page Test", () => {
  it("Visits the login page url", () => {
    cy.visit("/login");
    cy.contains("账号密码登陆");
  });
});

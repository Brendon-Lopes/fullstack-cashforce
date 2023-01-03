describe("Main page", () => {
  it("renders properly", () => {
    cy.visit("http://localhost:5173");

    cy.wait(1000);

    cy.get(".logo").should("be.visible");

    cy.contains(".navigator-item-text", "Notas fiscais");

    cy.contains("h3", "Notas fiscais");

    cy.contains(".table-btn", "Dados do cedente");
  });
});

export {};

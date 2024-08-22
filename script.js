it("Testcase 1", () => {
    cy.visit("http://localhost:3000/");

    // Wait for the elements to ensure they are loaded
    cy.get(".price").should("exist");

    // Iterate over each price element and modify the content
    cy.get(".price").each(($a, ind) => {
        const newPrices = [55, 75, 100, 130, 50]; // New prices to be typed

        cy.wrap($a).invoke("attr", "contenteditable", "true").then(() => {
            cy.wrap($a).clear().type(newPrices[ind], { force: true });
        });
    });

    // Click the button to trigger the total calculation
    cy.get("button").click();

    // Assert the total price
    cy.get("#ans").should("contain", 410);
});

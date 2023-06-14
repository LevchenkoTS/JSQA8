import adminData from '../../fixtures/adminData.json'
import element from '../../fixtures/elements.json'


    it("notSuccessful booking" , () => {
        cy.visit('/admin/');
        cy.login(adminData.email, adminData.pass);
        cy.get(element.hall).invoke('text').then((text) => {
            cy.visit('/');
            cy.get(element.seanseDay).click();
            cy.contains(text).siblings(element.seanseList).find(element.seanceTime).click();
                cy.get('.buying-scheme__chair_standart.buying-scheme__chair_taken:first').click();
            
              cy.get(element.notExist).should('not.exist');
           

            
        })
    })

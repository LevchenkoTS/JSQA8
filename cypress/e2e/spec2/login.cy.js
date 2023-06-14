import adminData from '../../fixtures/adminData.json'
import element from '../../fixtures/elements.json'


describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/admin/');
  });

  it('successful login', () => {
     
    cy.login(adminData.email, adminData.pass);
    cy.get(element.adminSubtitle).should('have.text', element.adminText);
});
it('empty login', () => {
  
  cy.login(null, adminData.pass)

  cy.get(element.adminLogin).then((el) => {
    expect(el[0].checkValidity()).to.be.false;
    expect(el[0].validationMessage).to.be.eql(element.emptyFieldText);
  })
});

it('empty password', () => {

  cy.login(adminData.email, null)

  cy.get(element.adminPassword).then((el) => {
    expect(el[0].checkValidity()).to.be.false;
    expect(el[0].validationMessage).to.be.eql(element.emptyFieldText);
  })
})



})
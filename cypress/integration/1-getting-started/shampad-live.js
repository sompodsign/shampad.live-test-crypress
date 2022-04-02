/// <reference types="cypress" />



function login() {
  const email = 'sompod123@gmail.com'
  const password = '5946644S'

  // Let's get the input element and use the `type` command to
  // input our new list item. After typing the content of our item,
  // we need to type the enter key as well in order to submit the input.
  // This input has a data-test attribute so we'll use that to select the
  // element in accordance with best practices:
  // https://on.cypress.io/selecting-elements
  // cy.get('#email-address').type(`${newItem}{enter}`)
  cy.get('#email-address').type(`${email}`)
  cy.get('#password').type(`${password}`)
  cy.get('.group').click()
  cy.get('.justify-content-lg-between > .flex > :nth-child(1)').should('be.visible')
  cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Login Successful')
}

function randomWord() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

//random meaning generator
function randomMeaning() {
  var text = "";
  var possible = "অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function closeToast() {
  cy.get('.jodit-wysiwyg').click()
}


describe('Validate login page elements', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it.skip('displayes email and password fields', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#email-address').should('be.visible')

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('#password').first().should('be.visible')
    cy.get('.text-sm > .font-medium').last().should('be.visible')
    cy.get('.group').should('be.visible')
    cy.get(':nth-child(5) > [href="#/join"] > .font-medium').should('be.visible')
  })


  it.skip('Can login with valid credentials', () => {
    // We'll store our item text in a variable so we can reuse it
    const email = 'sompod123@gmail.com'
    const password = '5946644S'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    // cy.get('#email-address').type(`${newItem}{enter}`)
    cy.get('#email-address').type(`${email}`)
    cy.get('#password').type(`${password}`)
    cy.get('.group').click()
    cy.get('.justify-content-lg-between > .flex > :nth-child(1)').should('be.visible')
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
  })

  it.skip('can signup succssfully', () => {
    
    //random email generator
    function randomEmail() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text + '@gmail.com';
    }
    const password = "5946644S"
    //random firstname generator
    function randomFirstName() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
      }}
      cy.get('[href="#/join"] > .text-gray-300').click()

      cy.get('.text-sm > [href="#/login"] > .font-medium').click()
      cy.get('.mt-6').should('be.visible')
      cy.get('.text-sm > [href="#/join"] > .font-medium').click()

    cy.get('.bg-gray-900').click()
    cy.get('#fname').type(`${randomFirstName()}`)
    cy.get('#lname').type(`${randomFirstName()}`)
    cy.get('#email-address').type(`${randomEmail()}`)
    cy.get('#password').type(`${password}`)
    cy.get('#confirm-password').type(`${password}`)
    cy.get('.group').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Successful')

  })

  it.skip('Can search a word on vocabulary', () => {
      //random word generator

      const word = randomWord();
      login();
      cy.get('.Toastify__close-button > svg > path').click()
      cy.get('.me-lg-2 > .form-outline > #form1').type(`${word}`)
      cy.get('.mx-lg-2 > .form-outline > #form1').type(`${randomMeaning()}`)
      cy.get('div > .text-white').click()
      cy.get('.Toastify__toast-body').contains("Word saved successfully")
      cy.get('#formControlLg').type(`${word}`)
      cy.get('.border-b > :nth-child(2)').should('contain', word)

  })

  

    it.skip('Check quiz functionalities', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      login();
      cy.get('.justify-content-lg-between > .flex > :nth-child(1)').click()
      cy.get('.ripple').click()
      cy.contains('Generating').should('be.visible')
      cy.contains('Done').should('be.visible')
      cy.get('#formControlLg').type(5)
      cy.get('.mx-auto > .w-6 > path').click()
      cy.get('.ripple').should('be.visible')
      for (let i = 0; i < 5; i++) {
        cy.get(':nth-child(2) > .ripple').click()
      }
      cy.get('.modal-title').should('contain', 'Score')
    })

    it.skip('Check dictionary functionalities', () => {
      login()
      cy.get('.Toastify__close-button > svg > path').click()
      cy.get('[href="#/dictionary"] > .text-gray-300').click()

      // cy.get('.lg\:hidden > .ripple').click()
      // cy.get('a > .ripple').click()

      cy.get('#formControlLg').type('resent')
      cy.get('div > .text-white').click()
      cy.get('.card-body').should('be.visible')
      cy.get('.mt-3').click()
      cy.get('.m-lg-5').should('contain', 'Which meaning is more comprehensive to you?')

    })

    it.skip('Check tutorials functionalities', () => {
      login()
      cy.contains('Tutorials').click()
      cy.get('.container > .w-full').type('git')
      cy.get(':nth-child(3) > a > .post-header').should('contain', 'Installing Git and Configure')
      cy.get('.container > .w-full').clear()
      cy.contains('All').click()
      cy.get('[href="#/tutorials/filter/docker"] > a > .false').click()
      cy.get('h1[class="post-header"]').should('contain', 'docker')

    })


    // it('Check create post create', () => {
    //   login()
    //   cy.contains('Tutorials').click()
    //   cy.contains('CREATE POST').click()
    //   cy.get('.writing-snippet > :nth-child(1) > .w-full').type(randomWord())
    //   cy.get(':nth-child(2) > .w-full').type(randomWord())
    //   cy.get('.jodit-wysiwyg').type(randomWord())
    //   cy.get(':nth-child(4) > .w-full').type(`${randomMeaning()}, ${randomWord}`)
    //   cy.get('#root > :nth-child(1) > :nth-child(3) > :nth-child(2) > :nth-child(2)').click()
    //   cy.contains('Successfully').should('be.visible')
    // })


      it('Check create post functionality', function() {

        login()
        // closeToast()
    
         
            cy.viewport(1920, 943)
        
          //  cy.visit('https://shampad.live/#/vocabulary')
        
            cy.contains('Tutorials').click()
        
            cy.get('.mt-3 > .mt-16 > .flex > a > .btn').click()
        
            cy.get('div > .container > .writing-snippet > .mt-3:nth-child(1) > .w-full').click()
        
            cy.get('div > .container > .writing-snippet > .mt-3:nth-child(1) > .w-full').type('test post')
        
            cy.get('div > .container > .writing-snippet > .mt-3:nth-child(2) > .w-full').type('test sub')
            
            cy.wait(2)
        

        
            cy.get('div > .container > .writing-snippet > .mt-3:nth-child(4) > .w-full').type('test, tag')
        
            cy.get('div > div > .container > div > .btn').click()
        
        })
     

  })

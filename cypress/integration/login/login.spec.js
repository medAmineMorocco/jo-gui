import {sizes} from "../utils";

context("Login page", () => {
  const IDENTIFIER_REQUIRED = "Veuillez renseigner votre email";
  const PASSWORD_REQUIRED = "Veuillez renseigner votre Mot de passe";
  const CGU_ACCEPTATION_REQUIRED = "Vous devez accepter les conditions avant de soumettre";

  const IDENTIFIER_NOT_VALID = "Adresse email non valide";

  it("should show email and password and CGU required when not enter any field", () => {
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.visit("/");

      cy.get("form").submit();

      cy.get(`body:contains("${PASSWORD_REQUIRED}")`)
          .should("exist");
      cy.get(`body:contains("${CGU_ACCEPTATION_REQUIRED}")`)
          .should("exist");
      cy.get(`body:contains("${IDENTIFIER_REQUIRED}")`)
        .should("exist")
        .then(() => {
          cy.takeSnapshots("email is required", size);
        });
    });
  });

  it("should show email not valid when enter email not valid", () => {
    const notValidMails = [" ", "email", "email@gmail.com", "Id@paris2024/org"];
    cy.visit("/");

    notValidMails.forEach((notValidMail) => {
      cy.get("#login_email").clear().type(notValidMail);
      cy.get('#login_password').clear().type("password");
      cy.get('.ant-checkbox-input').check();

      cy.get("form").submit();

      cy.wait(500);
      cy.get(`body:contains("${IDENTIFIER_NOT_VALID}")`).should("exist");
    });
  });

  it("should not log user when backend refuses to log him", () => {
    cy.stubRequest("POST", "**/auth/signin", 400);
    cy.window().then((win) => {
      win.sessionStorage.clear();
      cy.visit("/");
      cy.get("#login_email").clear().type("email@paris2024.org");
      cy.get('#login_password').clear().type("password");
      cy.get('.ant-checkbox-input').check();

      cy.get("form").submit();

      cy.url().should("include", "/login");
      cy.get(`body:contains("${IDENTIFIER_NOT_VALID}")`).should("exist");
    });
  });

  it("should show notification error when backend return error", () => {
    cy.stubRequest("POST", "**/auth/signin", 401);
    cy.window().then((win) => {
      win.sessionStorage.clear();
      cy.visit("/");
      cy.get("#login_email").clear().type("email@paris2024.org");
      cy.get('#login_password').clear().type("password");
      cy.get('.ant-checkbox-input').check();

      cy.get("form").submit();

      cy.url().should("include", "/login");
      cy.get(
        `.ant-notification-notice-description:contains("Vous n\'êtes pas autorisé")`
      ).should("exist");
    });
  });

  it("should log user when enter a valid email", () => {
    const validMails = [
      "email@paris2024.org",
      "email65@paris2024.org",
      "email_65@paris2024.org",
      "email-65@paris2024.org",
    ];
    cy.stubRequest("POST", "**/auth/signin", 200, "signin.json", "signinJSON");

    cy.visit("/");

    validMails.forEach((validMail) => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.visit("/");
        cy.get("#login_email").clear().type(validMail);
        cy.get('#login_password').clear().type("password");
        cy.get('.ant-checkbox-input').check();

        cy.get("form").submit();

        cy.url().should("include", "/home");
      });
    });
  });

  it("should redirect logged user to home page when access application again", () => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
      win.sessionStorage.setItem(
        "currentUser",
        JSON.stringify({ token: "token" })
      );

      cy.visit("/");

      cy.get("#login_email").should("not.exist");
    });
  });

  it("should not access home page when user is not logged", () => {
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.visit("/");

        cy.url().should("not.include", "/home");
        cy.url()
          .should("include", "/login")
          .then(() => {
            cy.takeSnapshots("login page", size);
          });
      });
    });
  });

});

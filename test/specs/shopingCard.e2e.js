describe('Page', () => {

    it('should open shopping card', () => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
        browser.pause(2000);

        const emailField = $('#email');
        const passwordField = $('#passwd');
        const button = $('.icon-lock');

        emailField.setValue('jana.novak@czechitas.cz');
        passwordField.setValue('DA123');
        button.click();

        const shopingCard = $('.shopping_cart');
        shopingCard.click();
    });

});
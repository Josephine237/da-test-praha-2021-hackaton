
describe('Page', () => {

    it('should sign in', () => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
        browser.pause(2000);

        const emailField = $('#email');
        const passwordField = $('#passwd');
        const button = $('.icon-lock');

        expect(emailField).toBeDisplayed();
        expect(passwordField).toBeDisplayed();
        expect(button).toBeDisplayed();

        emailField.setValue('jana.novak@czechitas.cz');
        passwordField.setValue('DA123');
        button.click();
    });
        
});
describe('Page', () => {

    it('should create email', () => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
        browser.pause(5000);

        const emailField = $('#email_create');
        const button = $('#SubmitCreate');

        emailField.setValue('jan.novak@czechitas.cz');
        button.click();
    });
        
});
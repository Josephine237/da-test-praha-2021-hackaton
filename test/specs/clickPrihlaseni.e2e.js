describe('Page', () => {

    it('should open page', () => {
        browser.reloadSession();
        browser.url('/');
        browser.pause(5000);

        const button = $('.hide_xs');
        button.click();
    });

});
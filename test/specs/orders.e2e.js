describe('Page', () => {

    it('should open page', () => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
        browser.pause(2000);

        const emailField = $('#email');
        const passwordField = $('#passwd');
        const button = $('.icon-lock');

        emailField.setValue('jana.novak@czechitas.cz');
        passwordField.setValue('DA123');
        button.click();

        const orders = $('.icon-list-ol');
        orders.click();

        const rows = $('#center_column').$('tbody').$$('tr')
        expect(rows).toBeElementsArrayOfSize(5);

        rows.forEach(rows => {

            const cols = rows.$$('td');
            expect(cols[0].getText()).toMatch(/[A-Z]{3,}/);
            expect(cols[1].getText()).toMatch(/(\d{2}.\d{2}.\d{4})/);
            expect(cols[2].getText()).toMatch(/£ \d{1,3}(| \d{0,3})/);
            expect(cols[3].getText()).toMatch(/(Bank wire|Payment by check|Payment by card)/);
            expect(cols[4].getText()).toMatch(/(Awaiting check payment|Awaiting bank wire payment)/);

            // tabulka obsahuje jěště další dvě kolonky, ale třeba u invoice neni vůbec nic napsané, takže vůbec nevím co mam očekávat, že tam bude. Vzhledem k tomu, že je to faktura, tak tam asi bude jen číslo faktury, ale nevím.
            
        });
    });

});
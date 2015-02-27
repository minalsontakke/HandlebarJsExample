describe('Handlebars Tests', function() {
 
    var helpers = Handlebars.helpers;
	describe( 'The "button" markup helper', function()
    {
        it ( 'should be registered', function()
        {
            expect( helpers.agree_button ).toBeDefined();
        });
		it ( 'should return a Handlebars.SafeString', function()
        {
            var isSafeString = helpers.agree_button("") instanceof Handlebars.SafeString
            expect( isSafeString).toBeTruthy();
        });
    })
});
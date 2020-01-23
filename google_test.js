Feature('google');

Scenario('test something', (I) => {

I.amOnPage('https://www.google.co.uk/');
	  I.fillField('q', 'autotoptrader');
	 
          I.see('Google');
	  I.click('Google Search');

});

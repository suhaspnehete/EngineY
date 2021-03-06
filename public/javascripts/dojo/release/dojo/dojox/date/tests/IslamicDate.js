if(!dojo._hasResource["dojox.date.tests.IslamicDate"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.date.tests.IslamicDate"] = true;
dojo.provide("dojox.date.tests.IslamicDate");
dojo.require("dojox.date.IslamicDate");
dojo.require("dojo.date");

tests.register("dojox.date.tests.IslamicDate", 
	[
		{
			// Test formatting and parsing of dates in various locales pre-built in dojo.cldr
			// NOTE: we can't set djConfig.extraLocale before bootstrapping unit tests, so directly
			// load resources here for specific locales:

			name: "date.locale",
			setUp: function(){
				var partLocaleList = ["en-us"];

				dojo.forEach(partLocaleList, function(locale){
					dojo.requireLocalization("dojo.cldr", "islamic", locale, "");
				});
			},
			runTest: function(t){
			},
			tearDown: function(){
				//Clean up bundles that should not exist if
				//the test is re-run.
				delete dojo.cldr.nls.islamic;
			}
		},
		{
			name: "toGregorian",
			runTest: function(t){
				var dateIslamic = new dojox.date.IslamicDate(1429,11,20); // Dec 19, 2008 -- is this right??
				var dateGregorian = dateIslamic.toGregorian();
				t.is(0, dojo.date.compare(new Date(2008, 11, 19), dateGregorian, "date"));
				// add exhaustive tests here
			}
		}/*,
		{
			name: "fromGregorian",
			runTest: function(t){
				var dateIslamic = new dojox.date.IslamicDate();
				var dateGregorian = new Date(2008,10,12);
				dateIslamic.fromGregorian(dateGregorian);
				t.is(0, dojo.date.compare(new Date(...), dateIslamic, "date"));
				// add more tests here
			}
		}*/
	]
);

}

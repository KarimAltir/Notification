sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'notification/test/integration/FirstJourney',
		'notification/test/integration/pages/NotficationsSetList',
		'notification/test/integration/pages/NotficationsSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, NotficationsSetList, NotficationsSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('notification') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheNotficationsSetList: NotficationsSetList,
					onTheNotficationsSetObjectPage: NotficationsSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);
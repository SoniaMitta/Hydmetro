sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hydmetro/test/integration/FirstJourney',
		'hydmetro/test/integration/pages/trainList',
		'hydmetro/test/integration/pages/trainObjectPage'
    ],
    function(JourneyRunner, opaJourney, trainList, trainObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hydmetro') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetrainList: trainList,
					onThetrainObjectPage: trainObjectPage
                }
            },
            opaJourney.run
        );
    }
);
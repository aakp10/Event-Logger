/**
* getContextualAddon as specified in the add-on manifest
* @param {Object} event with the current open msg ID
* @returns {Cards[]}
* cardBuilder->cardHeader,section->widgets
*/

function getContextualAddOn(event)
{
    var card = CardService.newCardBuilder();
    
    //set the header to the cardBuilder
    var cardHeader = CardService.newCardHeader().setTitle("Schedule your appointments");
    card.setHeader(cardHeader);
    
    //get a new cardSection
    var appointmentSection = CardService.newCardSection();
    appointmentSection.addWidget(CardService.newTextInput()
                                            .setFieldName("Date")
                                            .setTitle("Date"));
    appointmentSection.addWidget(CardService.newTextInput()
                                            .setTitle("Time")
                                            .setFieldName("Time"));
    appointmentSection.addWidget(CardService.newTextInput()
                                            .setTitle("Description")
                                            .setFieldName("Description"));
    appointmentSection.addWidget(CardService.newTextInput()
                                            .setTitle("Calendar Invite")
                                            .setFieldName("Calendar Invite"));

    card.addSection(appointmentSection);

    return [card.build()];

}

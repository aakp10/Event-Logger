var ATTRIBUTES = ['Description',
                  "Date",
                  "Time",
                  "Invitees",
                  "Calendar Invite"];

function createInvite(inviteData, opt_status)
{    
    var inviteCardBuilder = CardService.newCardBuilder()
                                       .setHeader(
                                          CardService.newCardHeader()
                                                      .setTitle("GCal Invite"));
    //render the auto filled GCal Invite Card
    var inviteSection = getGCalInvite(inviteData,ATTRIBUTES);
    inviteCardBuilder.addSection(inviteSection);

    return inviteCardBuilder;
}

function getGCalInvite(inviteData, ATTRIBUTES)
{
    var inviteCardSection = CardService.newCardSection();

    for(var i = 0; i < ATTRIBUTES.length; i++)
    {
        var attr = CardService.newTextInput()
                              .setFieldName(ATTRIBUTES[i])
                              .setTitle(ATTRIBUTES[i]);
        attr.setValue(inviteData[i]);
        inviteCardSection.addWidget(attr);
    }
    return inviteCardSection;
}
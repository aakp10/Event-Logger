/**
* getContextualAddon as specified in the add-on manifest
* @param {Object} event with the current open msg ID
* @returns {Cards[]}
* cardBuilder->cardHeader,section->widgets
*/

function getContextualAddOn(event)
{
    //fetch the active mail
    var mail = getActiveMailContent(event);
    //parse this mail to get the field entries
    var inviteData = parseMail(mail);
    //populate the section widgets w/ the previous prefills
    var inviteCard = createInvite(inviteData/*, opt_status*/);
    return [inviteCard.build()];
}

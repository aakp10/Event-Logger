/**
* function for fetching the active mail's content using its metadata
*/

function getActiveMailContent(event)
{
    //seek grant to access the mail
    var accessToken = event.messageMetadata.accessToken;
    var messageId = event.messageMetadata.messageId;
    GmailApp.setCurrentMessageAccessToken(accessToken);
    //ready to read the mail content
    return GmailApp.getMessageById(messageId);
}
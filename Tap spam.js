var spam = false;

function chatReceiveHook(str, sender) {
if(str=="spam") {
spam = true;
clientMessage("Tap ground.");
}
}

function useItem(x, y, z, itemId, blockId, side){
if(spam)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("THIS IS SPAM!!!!!!!!\nSPAM SPAM SPAM\nSPAAM SPAAM spam");
}

var destroy = false;
var option = false;

function chatReceiveHook(str, sender) {
if(str=="Drop")option = true;
if(str=="NoDrop")option = false;
if(str=="on")destroy = true;
if(str=="off")destroy = false;
}

function modTick(){
Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), option);
}

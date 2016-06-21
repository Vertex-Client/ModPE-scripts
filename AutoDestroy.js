var destroy = false;
var option = false;

function chatReceiveHook(str, sender) {
  if(str=="Drop")option = true;
  if(str=="NoDrop")option = false;
  if(str=="on")destroy = true;
  if(str=="off")destroy = false;
}

function modTick(){
  if(destroy) {
    if(getTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ()) != 0) {
      Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), option);
    }
  }
}

var destory = false;
var option = false;

function chatReceiveHook(str, sender) {
if(str=="Drop")option = true;
if(str=="NoDrop")option = false;
	if(str=="Go") {
	destory = true;
	clientMessage("Tap ground.")
	}
}

function useItem(x, y, z, itemId, blockId, side){
if(destory){
	Level.destroyBlock(x +1, y, z +1, option);
	Level.destroyBlock(x +2, y, z +2, option);
	Level.destroyBlock(x +3, y, z +3, option);
	Level.destroyBlock(x +4, y, z +4, option);
	
    Level.destroyBlock(x, y, z, option);

	Level.destroyBlock(x -1, y, z -1, option);
	Level.destroyBlock(x -2, y, z -2, option);
	Level.destroyBlock(x -3, y, z -3, option);
	Level.destroyBlock(x -4, y, z -4, option);
}

}

var ent = false;

function chatReceiveHook(str, sender) {
	if(str=="EntSpawn") {
	ent = true;
	clientMessage("Tap ground.");
	}
}

function useItem(x, y, z, itemId, blockId, side){
	if(ent)Level.spawnMob(x, y, z, EntityType.LIGHTNING_BOLT);
}

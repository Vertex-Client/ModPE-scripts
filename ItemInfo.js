var iteminfo = false;

if(iteminfo) {
clientMessage("Item ID: " + Player.getCarriedItem());
clientMessage("Amount in hand: " + Player.getCarriedItemCount());
clientMessage("Data / damage: " + Player.getCarriedItemData());
}

function chatReceiveHook(str, sender) {
	if(str=="ItemInfo")iteminfo = true;
}

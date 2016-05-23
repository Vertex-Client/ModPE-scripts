//This just stops the sun at the time the reactor core is made and pigman spawn
function chatReceiveHook(str, sender) {
	if(str=="On")setNightMode(true);
	if(str=="Off")setNightMode(false);
	}

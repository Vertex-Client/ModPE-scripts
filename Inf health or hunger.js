var infhealth = false;
var infhunger = false;

function chatReceiveHook(str, sender) {
	if(str=="InfHealth")infhealth = true;
	if(str=="InfHunger")infhunger = true;
}

function modTick() {
if(infhealth)Player.setHealth(20);
if(infhungeer)Player.setHunger(20);
}

var fire = false;

function chatReceiveHook(str, sender) {
	if(str=="Start")fire = true;
}

function attackHook(attacker, victim) {
	if(fire) {
Entity.setFireTicks(victim, 5);
}
}

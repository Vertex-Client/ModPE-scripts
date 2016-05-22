//hence "1 hit" is all you can do so if you double tap the mob won't die.
var hit = false;

function chatReceiveHook(str, sender) {
	if(str=="KO")hit = true;
}

function attackHook(attacker, victim) {
if(hit)Entity.setHealth(victim, 1);
}

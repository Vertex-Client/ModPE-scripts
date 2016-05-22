var ride = false;

function chatReceiveHook(str, sender) {
	if(str=="Saddle") { 
	ride = true;
	clientMessage("Tap to ride, jump to get off.");
	}
}

function attackHook(attacker, victim) {
if(ride)rideAnimal(attacker, victim);
}

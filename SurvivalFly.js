function chatReceiveHook(str, sender) {
	if(str=="FlyOn")Player.setCanFly(1);
	if(str=="FlyOff")Player.setCanFly(0);
}

function chatHook(str) {
	if(str=="clear") {
		preventDefault();
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get().nativeSetTextboxText("");
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
		for(var i = 0; i <= 7; i++) {
			clientMessage(" " + "\n" + " ");
		}
	}
}

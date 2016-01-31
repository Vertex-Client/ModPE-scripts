function newLevel(){ 
clientMessage("Minecraft PE Version: " + ModPE.getMinecraftVersion());
clientMessage("World Name: " + Level.getWorldName());
clientMessage("Biome: " + Level.getBiomeName());
clientMessage("Gamemode: " + Level.getGameMode());
clientMessage("Time: " + Level.getTime());
clientMessage("Worlds Sunlight: " + Level.getBrightness(Player.getX(), Player.getY() - 1, Player.getZ()));
clientMessage("Lightning " + Level.getLightningLevel());
clientMessage("Rain/snow " + Level.getRainLevel());
}

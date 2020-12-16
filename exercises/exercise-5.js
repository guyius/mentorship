function battle() {
  return;
}

const orc = {
  attack: 3,
  health: 6,
  defense: 1,
  experience: 5,
  attackTypes: ["hit", "miss", "crit", "dodge"],
};

const troll = {
  attack: 4,
  health: 8,
  defense: 2,
  experience: 10,
  attackTypes: ["hit", "miss", "miss", "crit", "dodge", "dodge"],
};

const necromancer = {
  attack: 6,
  health: 4,
  defense: 0,
  experience: 15,
  attackTypes: ["hit", "miss", "crit", "dodge"],
};

const dragon = {
  attack: 8,
  health: 16,
  defense: 4,
  experience: 40,
  attackTypes: ["hit", "miss", "miss", "miss", "crit", "dodge", "dodge", "dodge"],
};

console.log(battle());
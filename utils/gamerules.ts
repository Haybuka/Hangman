const gamerules = [
  {
    id: 1,
    rule: 'The game starts with a hidden word represented by underscores (_ , _ , _), each corresponding to a letter in the word.',
  },
  {
    id: 2,
    rule: 'Player takes turn guessing one letter at a time.',
  },
  {
    id: 3,
    rule: 'If the guessed letter is in the word, all instances of that letter are revealed in their correct positions in green.',
  },
  {
    id: 4,
    rule: 'If the guessed letter is not in the word, the player loses a chance, and incorrect guess is displayed in red.',
  },
  {
    id: 5,
    rule: 'Players continue guessing until they either guess the word correctly or run out of chances.',
  },
  {
    id: 6,
    rule: 'The game ends when the word is fully revealed.',
  },
  {
    id: 7,
    rule: 'Only valid alphabetic characters are allowed as guesses. Repeating a previously guessed letter does not cost a chance.',
  },
  {
    id: 8,
    rule: 'The player wins if they guess the word before running out of chances. Otherwise, they lose.',
  },
  {
    id: 9,
    rule: '',
  },
];

export default gamerules;

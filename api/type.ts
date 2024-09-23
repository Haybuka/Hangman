export type DicitonaryList = Dictionary[];

export type Dictionary = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

export type License = {
  name: string;
  url: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: any[];
  antonyms: string[];
};

export type Definition = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example: string;
};

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

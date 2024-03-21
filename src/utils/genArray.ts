export interface Generation {
    name: string;
    number: number;
}

const genArray: Generation[] = [
    { name: 'Kanto', number: 1 },
    { name: "Johto", number: 2 },
    { name: "Hoenn", number: 3 },
    { name: "Sinnoh", number: 4 },
    { name: "Unova", number: 5 },
    { name: "Kalos", number: 6 },
    { name: "Alola", number: 7 },
    { name: "Galar", number: 8 }
];

export { genArray };
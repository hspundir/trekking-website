// Day 1 TypeScript Practice

const days: number = 7;
const trekName: string = "Kedarkantha Trek";
const isOpen: boolean = true;

const locations: string[] = ["Manali", "Leh", "Mussoorie"];

console.log({ trekName, days, isOpen, locations });

type Trek = {
  name: string;
  days: number;
  location: string;
};

const treks: Trek[] = [
  {
    name: "Roopkund Trek",
    days: 8,
    location: "Uttarakhand",
  },
];

console.log(treks);

export {};

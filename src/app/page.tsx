"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const allSharpNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  const allFlatNotes = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
  ];

  const cSharpNotes = [
    "A",
    "A#",
    "B",
    "B#",
    "C#",
    "D",
    "D#",
    "E",
    "E#",
    "F#",
    "G",
    "G#",
  ];

  const fSharpNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "E#",
    "F#",
    "G",
    "G#",
  ];

  const gFlatNotes = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "Fb",
    "F",
    "Gb",
    "G",
    "Ab",
  ];

  const indexToScale = {
    0: "I",
    1: "ii",
    2: "iii",
    3: "IV",
    4: "V",
    5: "vi",
    6: "vii°",
  };

  function getNotesForKey(note: string): string[] {
    const sharpKeys = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F#",
      "G",
      "G#",
    ];
    const flatKeys = ["Bb", "Db", "Eb", "F", "Gb", "Ab"];

    if (note === "C#") return cSharpNotes;
    if (note === "F#") return fSharpNotes;
    if (note === "Gb") return gFlatNotes;
    if (sharpKeys.includes(note)) return allSharpNotes;
    if (flatKeys.includes(note)) return allFlatNotes;

    return sharpKeys;
  }

  function createMajorKey(note: string): string[] {
    const allNotes = getNotesForKey(note);

    const noteIndex = allNotes.findIndex((value) => value === note);

    const firstHalf = allNotes.slice(noteIndex);
    const secondHalf = allNotes.slice(0, noteIndex);

    const orderedNotes = firstHalf.concat(secondHalf);

    const scale = [
      orderedNotes[0],
      orderedNotes[2],
      orderedNotes[4],
      orderedNotes[5],
      orderedNotes[7],
      orderedNotes[9],
      orderedNotes[11],
    ];

    return scale;
  }

  const [currentKey, setCurrentKey] = useState("A");
  let notes = createMajorKey(currentKey).join(",");
  console.log(currentKey);
  console.log(notes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Music Theory Tools
      </h1>
      <div>
        <span>Select a key</span>
        <select
          onChange={(e) => setCurrentKey(e.target.value)}
          value={currentKey}
        >
          {allSharpNotes.map((note) => (
            <option key={note} value={note}>
              {note}
            </option>
          ))}
        </select>
        <div>{notes}</div>
      </div>
    </main>
  );
}

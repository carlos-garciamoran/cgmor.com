# cgmor.com

This is the source code of the website hosted in [cgmor.com](https://cgmor.com).

## Muses Content

The `/muses` page is statically generated at build time from Vercel Edge Config.

- Edge Config keys: `books`, `films`
- Required env: `EDGE_CONFIG`
- The route fails the build if either Edge Config payload is missing or malformed

Because `/muses` is static, editing Edge Config does not update production immediately. After changing the `books` or `films` values in the Vercel dashboard, trigger a new deployment so the page rebuilds with the latest content.

Expected `books` payload:

```json
[
  {
    "id": "now",
    "title": "Currently...",
    "items": [
      { "title": "Hunger", "author": "Knut Hamsun" },
      { "title": "The Design of Everyday Things", "author": "Don Norman" },
      { "title": "Jony Ive", "author": "Leander Kahney" },
      { "title": "Thinking in Systems: A Primer", "author": "Donella H. Meadows" },
      { "title": "Zero: The Biography of a Dangerous Idea", "author": "Charles Seife" },
      { "title": "The Black Swan", "author": "Nassim Nicholas Taleb" },
      { "title": "The Secret Garden", "author": "Frances Hodgson Burnett" }
    ]
  },
  {
    "id": "philosophy",
    "title": "Philosophy",
    "items": [
      { "title": "Meditaciones", "author": "Marco Aurelio" },
      { "title": "The Sufis (The Islanders)", "author": "Idries Shah" },
      { "title": "El Extranjero", "author": "Albert Camus" },
      { "title": "El arte de tener razón", "author": "Arthur Schopenhauer" },
      { "title": "El arte de ser feliz", "author": "Arthur Schopenhauer" },
      { "title": "El Príncipe", "author": "Niccolo Machiavelli" },
      { "title": "El Arte de la Guerra", "author": "Sun Tzu" },
      { "title": "Así habló Zaratustra", "author": "Friedrich Nietzsche" },
      { "title": "El mundo de Sofía", "author": "Jostein Gaarder" }
    ]
  },
  {
    "id": "meditation",
    "title": "Meditation / Spirituality",
    "items": [
      { "title": "Zen Mind, Beginner’s Mind", "author": "Shunryu Suzuki" },
      { "title": "Biografía del silencio", "author": "Pablo d'Ors" },
      { "title": "Los Cuatro Acuerdos (Un libro de la sabiduría tolteca)", "author": "Don Miguel Ruiz" },
      { "title": "Be Here Now", "author": "Ram Dass" },
      { "title": "Think on These Things", "author": "Jiddu Krishnamurti" },
      { "title": "The Unthered Soul", "author": "Michael A. Singer" }
    ]
  },
  {
    "id": "fiction",
    "title": "Fiction",
    "items": [
      { "title": "El Alquimista", "author": "Paulo Coelho" },
      { "title": "Slaghterhouse-Five", "author": "Kurt Vonnegut" },
      { "title": "Siddhartha", "author": "Herman Hesse" },
      { "title": "El Lobo Estepario", "author": "Herman Hesse" },
      { "title": "Bajo las Ruedas", "author": "Herman Hesse" },
      { "title": "El hombre que fue jueves", "author": "G. K. Chesterton" },
      { "title": "Diario de un seductor", "author": "Søren Kierkegaard" },
      { "title": "La isla", "author": "Aldous Huxley" },
      { "title": "Un mundo feliz", "author": "Aldous Huxley" },
      { "title": "Momo", "author": "Michael Ende" },
      { "title": "Ensayo sobre la ceguera", "author": "José Saramago" }
    ]
  },
  {
    "id": "startup",
    "title": "Startup / Building",
    "items": [
      { "title": "Hackers & Painters", "author": "Paul Graham" },
      { "title": "Shoe Dog", "author": "Phil Knight" },
      { "title": "The Almanack Of Naval Ravikant", "author": "Eric Jorgenson" },
      { "title": "Zero to One", "author": "Peter Thiel" }
    ]
  },
  {
    "id": "engineering",
    "title": "Engineering",
    "items": [
      { "title": "The Pragmatic Programmer", "author": "Andrew Hunt" },
      { "title": "Superintelligence. Paths, dangers, strategies", "author": "Nick Bostrom" },
      { "title": "Practical Malware Analysis", "author": "Michael Sikorski, Andrew Honig" },
      { "title": "Hacking: The Art of Exploitation", "author": "Jon Erickson" }
    ]
  },
  {
    "id": "history",
    "title": "History",
    "items": [
      { "title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari" },
      { "title": "The Lessons of History", "author": "Will Durant, Ariel Durant" }
    ]
  },
  {
    "id": "misc",
    "title": "Misc",
    "items": [
      { "title": "Four Thousand Weeks: Time Management for Mortals", "author": "Oliver Burkeman" },
      { "title": "Nature", "author": "Ralph Waldo Emerson" },
      { "title": "The Creative Act", "author": "Rick Rubin" },
      { "title": "How to Win Friends and Influence People", "author": "Dale Carnegie" },
      { "title": "Atomic Habits", "author": "James Clear" }
    ]
  }
]
```

Expected `films` payload:

```json
[
  {
    "id": "movies",
    "title": "Movies",
    "items": [
      "Memento",
      "The Matrix",
      "The Departed",
      "Fight Club",
      "Interstellar",
      "Ex Machina",
      "Perfect Days",
      "Shutter Island",
      "Eyes Wide Shut",
      "The Tree of Life",
      "Mulholland Drive",
      "La grande bellezza"
    ]
  },
  {
    "id": "shows",
    "title": "Shows",
    "items": [
      "Silo",
      "Ozark",
      "Mr. Robot",
      "Succession",
      "WeCrashed",
      "Black Mirror",
      "Westworld, S1",
      "House of Cards",
      "The White Lotus",
      "True Detective, S1"
    ]
  }
]
```

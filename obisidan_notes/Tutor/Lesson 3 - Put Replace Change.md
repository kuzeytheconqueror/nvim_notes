---
tags:
  - nvim
  - tutor
lesson: 3
status: todo
---

# Lesson 3 · Put, Replace, Change

> [!abstract] Goal
> Paste what you deleted, fix single characters, and rewrite chunks with the change operator.

## 3.1 Put · `p`

Deleted text goes into a register. `p` puts it back **after** the cursor (a deleted line goes below the cursor line).

Reorder the lines with `dd` and `p`:

```text
✓  d) Can you learn too?
   b) Violets are blue,
   c) Intelligence is learned,
   a) Roses are red,
```

> [!tip] `P` (capital) puts **before** the cursor.

## 3.2 Replace · `r`

`r` + a character replaces the character under the cursor. No Insert mode, no `<Esc>` needed.

```text
✗  Whan this lime was tuoed in, someone presswd some wrojg keys!
✓  When this line was typed in, someone pressed some wrong keys!
```

> [!note] Learn by doing, not by memorising.

## 3.3 Change · `ce`

`ce` deletes to the end of the word **and** drops you into Insert mode.

```text
✗  This lubw has a few wptfd that mrrf changing usf the change operator.
✓  This line has a few words that need changing using the change operator.
```

## 3.4 Change with other motions · `c$`

The change operator uses the same motions as delete:

```
c   [number]   motion
```

```text
✗  The end of this line needs some help to make it like the second.
✓  The end of this line needs to be corrected using the c$ command.
```

> [!tip] Backspace works while typing in Insert mode.

## Summary

| Command | What it does |
|---------|--------------|
| `p` | put deleted text after the cursor |
| `P` | put deleted text before the cursor |
| `rX` | replace the character under the cursor with X |
| `ce` | change to the end of the word |
| `c$` | change to the end of the line |
| `c [n] motion` | change format, same as delete |

---

⬅️ [[Lesson 2 - Deleting]] · 🏠 [[nvim]] · ➡️ [[Lesson 4 - Navigation and Search]]

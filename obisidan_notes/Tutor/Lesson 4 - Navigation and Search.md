---
tags:
  - nvim
  - tutor
lesson: 4
status: todo
---

# Lesson 4 · Navigation, Search, Substitute

> [!abstract] Goal
> Jump anywhere in a file, search forwards and backwards, match brackets, and do find‑and‑replace.

## 4.1 Where am I? · `<C-g>` `G` `gg`

> [!warning] Read the whole lesson before doing it

| Keys | Effect |
|:----:|--------|
| `<C-g>` | show file name and cursor position at the bottom |
| `G` | jump to the **last** line |
| `gg` | jump to the **first** line |
| `42G` | jump to line 42 |

> [!note] With the `'ruler'` option set, the position also shows in the bottom‑right corner.

## 4.2 Search · `/` `?` `n` `N`

| Keys | Effect |
|:----:|--------|
| `/phrase` `<Enter>` | search **forward** |
| `?phrase` `<Enter>` | search **backward** |
| `n` | next match, same direction |
| `N` | next match, opposite direction |
| `<C-o>` | jump back to where you came from |
| `<C-i>` | jump forward again |

```text
"errroor" is not the way to spell error; errroor is an error.
```

> [!note] Wrapping
> When the search hits the end of the file it continues from the top, unless `'wrapscan'` is off.

## 4.3 Matching brackets · `%`

Cursor on any `(` `[` `{` (or their closing partner), press `%` to jump to the match.

```text
✓  This ( is a test line with ('s, ['s ] and {'s } in it. ))
```

> [!tip] Lifesaver when debugging unbalanced parentheses.

## 4.4 Substitute · `:s`

```vim
:s/thee/the/        " first match on this line
:s/thee/the/g       " every match on this line
```

```text
✗  Usually thee best time to see thee flowers is in thee spring.
```

Ranges:

```vim
:#,#s/old/new/g     " lines # to # (e.g. 1,3)
:%s/old/new/g       " whole file
:%s/old/new/gc      " whole file, confirm each one
```

> [!tip] You can also select lines in Visual mode first, then type `:s/...` — the range is filled in for you.

## Summary

| Command | What it does |
|---------|--------------|
| `<C-g>` | show location and file status |
| `G` / `gg` / `nG` | last line / first line / line n |
| `/x` / `?x` | search forward / backward |
| `n` / `N` | next / previous match |
| `<C-o>` / `<C-i>` | older / newer position |
| `%` | jump to matching bracket |
| `:s/old/new` | replace first on the line |
| `:s/old/new/g` | replace all on the line |
| `:#,#s/old/new/g` | replace in a line range |
| `:%s/old/new/g` | replace in the whole file |
| `:%s/old/new/gc` | …and confirm each one |

---

⬅️ [[Lesson 3 - Put Replace Change]] · 🏠 [[nvim]] · ➡️ [[Lesson 5 - Shell and Files]]

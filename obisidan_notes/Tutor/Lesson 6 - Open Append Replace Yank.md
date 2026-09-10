---
tags:
  - nvim
  - tutor
lesson: 6
status: todo
---

# Lesson 6 · Open, Append, Replace, Yank, Options

> [!abstract] Goal
> More ways into Insert mode, a real Replace mode, copy & paste, and your first options.

## 6.1 Open a line · `o` `O`

| Keys | Effect |
|:----:|--------|
| `o` | open a new line **below** and enter Insert mode |
| `O` | open a new line **above** and enter Insert mode |

```text
✓  After typing o the cursor is placed on the open line in Insert mode.
   Open up a line above this by typing O while the cursor is on this line.
```

## 6.2 Append · `a`

`a` inserts **after** the cursor. Use `e` to hop to the end of each broken word, then `a`.

```text
✗  This li will allow you to pract appendi text to a line.
✓  This line will allow you to practice appending text to a line.
```

> [!note] `a`, `i` and `A` all enter the same Insert mode
> They only differ in *where* the text goes: after cursor, before cursor, end of line.

## 6.3 Replace mode · `R`

`R` (capital) replaces character after character until `<Esc>`. The rest of the line is untouched.

```text
✗  Adding 123 to xxx gives you xxx.
✓  Adding 123 to 456 gives you 579.
```

## 6.4 Yank and put · `y` `p`

1. `v` to select, `y` to **yank** (copy).
2. `j$` to the end of the next line, `p` to put.

```text
✓  a) This is the first item.
   b)
```

| Keys | Effect |
|:----:|--------|
| `y` | yank the visual selection |
| `yw` | yank one word (`y` is an operator, like `d`) |
| `yy` | yank the whole line |
| `p` / `P` | put after / before the cursor |

## 6.5 Options · `:set`

```vim
:set ic           " ignore case when searching
:set hls is       " highlight matches + incremental search
:set noic         " turn an option off  → prefix "no"
:set invic        " flip an option      → prefix "inv"
:nohlsearch       " clear search highlighting
```

| Short | Long | Meaning |
|:-----:|------|---------|
| `ic` | `ignorecase` | case‑insensitive search |
| `is` | `incsearch` | show matches while typing |
| `hls` | `hlsearch` | highlight all matches |

> [!tip] Ignore case for one search only
> Append `\c` to the pattern: `/ignore\c`

## Summary

| Command | What it does |
|---------|--------------|
| `o` / `O` | open line below / above, Insert mode |
| `a` / `A` | insert after cursor / at end of line |
| `e` | move to end of word |
| `y` / `p` | yank / put |
| `R` … `<Esc>` | Replace mode |
| `:set xxx` | set option xxx |
| `:set noxxx` | unset it |
| `:set invxxx` | toggle it |

---

⬅️ [[Lesson 5 - Shell and Files]] · 🏠 [[nvim]] · ➡️ [[Lesson 7 - Help and Config]]

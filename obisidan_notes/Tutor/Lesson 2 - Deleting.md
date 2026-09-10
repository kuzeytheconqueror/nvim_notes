---
tags:
  - nvim
  - tutor
lesson: 2
status: todo
---

# Lesson 2 · Operators, Motions and Undo

> [!abstract] Goal
> Learn the grammar that makes Vim click: **operator + count + motion**.

## 2.1 Delete a word · `dw`

Cursor at the start of a word, then `dw`.

```text
✗  There are a some words fun that don't belong paper in this sentence.
```

## 2.2 Delete to end of line · `d$`

Cursor after the first `.`, then `d$`.

```text
✗  Somebody typed the end of this line twice. end of this line twice.
```

## 2.3 Operators and motions

> [!important] The formula
> ```
> d   motion
> ```
> `d` is the **operator** (what to do), the motion is **what to do it to**.

| Motion | Goes |
|:------:|------|
| `w` | to the start of the next word (excluding its first char) |
| `e` | to the end of the current word (including the last char) |
| `$` | to the end of the line (including the last char) |

So `de` deletes from the cursor to the end of the word.

> [!note] A motion on its own just moves the cursor
> `w` alone jumps a word forward. `dw` deletes it.

## 2.4 Counts for motions

A number before a motion repeats it.

| Keys | Effect |
|:----:|--------|
| `2w` | forward two words |
| `3e` | to the end of the third word |
| `0` | start of the line (that's a zero) |

```text
✓  This is just a line with words you can move around in.
```

## 2.5 Counts for operators

```
d   number   motion
```

`d2w` deletes two words. Cursor on the first UPPER CASE word, then delete each run with one command.

```text
✗  This ABC DE line FGHI JK LMN OP of words is Q RS TUV cleaned up.
```

## 2.6 Whole lines · `dd`

| Keys | Effect |
|:----:|--------|
| `dd` | delete the current line |
| `2dd` | delete two lines |

```text
1)  Roses are red,
2)  Mud is fun,
3)  Violets are blue,
4)  I have a car,
5)  Clocks tell time,
6)  Sugar is sweet
7)  And so are you.
```

## 2.7 Undo · `u` `U` `<C-r>`

| Keys | Effect |
|:----:|--------|
| `u` | undo the last change |
| `U` | undo **all** changes on the current line |
| `<C-r>` | redo (undo the undo) |

```text
✗  Fiix the errors oon thhis line and reeplace them witth undo.
```

## Summary

| Command | What it does |
|---------|--------------|
| `dw` | delete to the next word |
| `d$` | delete to the end of the line |
| `dd` | delete the whole line |
| `2w` | repeat a motion with a count |
| `0` | jump to the start of the line |
| `u` / `U` / `<C-r>` | undo / undo line / redo |

> [!important] The grammar
> ```
> operator   [number]   motion
> ```
> - **operator** – what to do, e.g. `d`
> - **number** – optional repeat count
> - **motion** – what to operate on, e.g. `w`, `$`

---

⬅️ [[Lesson 1 - Basics]] · 🏠 [[nvim]] · ➡️ [[Lesson 3 - Put Replace Change]]

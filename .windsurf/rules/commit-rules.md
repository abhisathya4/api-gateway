---
trigger: always_on
---

When committing changes. If the user says commit all current changes then you must:

- run git status to identify all files
- group files based on the changes made
- commit each group with a comprehensive commit message
- repeat until git status reveals not modified or untracked files

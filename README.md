---
Worst Comments is a static website (localhost) that will let the user write anything, while an AI gives feedback about it. Usually bad feedback
---

### DONE LIST:
- ~Add comments dinamically~ [DONE!]
2. Listen to textarea activity and set a threshold to add a new comment.
    - Add a screen warning in place of the AI call. (for now)
    - Variable timeout min-max - After this, check if the onchange trigger let call AI
    - Define when to trigger, related to the frequency of onchange event.

    :FLOW:
    1. The user writes something.
    2. Timeout starts: Randomly selects a waiting time between e.g. 30s and 2min
    3. Actively listen for the frequency of change: (The user may set this threshold) - e.g. 10 to 60 changes.
    5. Event for when the *waiting time* is over **and** there's an acceptable *frequency of changes*.
        - Call the AI, add the comment, show a warning about it. (User PurpleOwl commented.)
        - Reset the *frequency of change* variable.
        Else:
        - Don't call the AI, show a warning explaining why not.
        - Keep the *frequency of change* variable for the next flow. (As an optional parameter for a function).
    6. Return to the :FLOW: start.

3. Align the comment section to 2x2, vertical good-looking flex.

## Finish the first version: 7 days starting from 29/1/2026

### Next version:
- Give the user's text to an AI with prompt engineering
- Create a random possibility to nested comments.
- Save data in cache after reloading. (Try a hidden input box, just for fun).
- Add a notifier instead of warnings (a title && description || username && glimpse of text)
- Make the frequency of changes fixed until the flow restarts.
- Add comment nesting.
- Add a *remaining time* monitor for the next AI comment
- For saving the data in cache, let the user save different texts as different posts, one with it's own set of comments.
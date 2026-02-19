---
Worst Comments is a static website (localhost) that will let the user write anything, while an AI gives feedback about it. Usually bad feedback
---

### DONE LIST:
- [x] 1 ~Add comments dinamically~ 
- [x] 2. ~Listen to textarea activity and set a threshold to add a new comment.~ 
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

- [ ] 3. Align the comment section to 2xN, vertical good-looking flex.
    - Add the newest comments to the start of the list

## Finish the first version: 7 days starting from 29/1/2026

### Next version:
- Give the user's text to an AI with prompt engineering
- Add character counter and a minimum amount for AI generation.
- Get random usernames from API when generating comments.

- Add comment nesting.
- Create a random possibility to nested comments. (using methods to existing comments.)
- Add an optional *parent* parameter to the comment function, it shall add a comment *to* an already existing comment, refered by ID. Talking about IA, I shall make a prompt engineering for the AI to write a comment *as if* it was answering the existing comment's text AND using the post as reference. (change the generatedComments list to a Object for this.) --Happly, the prompt engineering looks the hardest part for me. :]

- Save data in cache after reloading. (Try a hidden input box, just for fun).
- For saving the data in cache, let the user save different texts as different posts, one with it's own set of comments.

- Add a notifier instead of warnings (a title && description || username && glimpse of text)
- Add a *remaining time* monitor for the next AI comment

- Make the frequency of changes fixed until the flow restarts.
- When the loop reaches it's end, and there isn't enough text, DON'T start another loop until the user start writing again.
- The writing **frequency** can be worth it's name, changing it from a counter to a mean, of characters written by timeout: **writing.frequency += value / timeout** -- to make it interesting.
- Instead of using a problematic *frequency* formula to verify if adding a comment is nedded, subtract 40 [threshold] at every generator IF the threshold has been reached, without modifying the *frequency* variable in other ways.

- Add a **START/STOP** Button.

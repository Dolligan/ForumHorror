ETA
  Game starts at: 3 am on 1 April 2025
  Turn length: 1 hour
END META

THREAD
  ID: thread_001
  Title: Introduce Yourself
  Starter post: alice_post_01
  Posts in order:
    - alice_post_01
    - bob_post_01
END THREAD

CHARACTER
  User name: Alice
  Avatar: avatars/alice.png
  Bio: A space‑faring engineer who loves star‑cruisers.
  Description: Alice supplies background lore for the ship‑building puzzle in Act 2.

  FORUM POST
    ID: alice_post_01
    Thread: thread_001
    Body: Hi everyone! I'm Alice and I build star‑cruisers for fun.
    Timing: Turn 1
  END FORUM POST

  FORUM POST
    ID: alice_post_02
    Thread: thread_002
    In reply to: bob_post_02
    Body: I can help if you share your warp logs.
    Trigger: The player’s post contains the keyword "warp logs" before turn 12.
    Timing: Two turns after the trigger.
  END FORUM POST

  PRIVATE MESSAGE
    ID: alice_pm_01
    Body: Welcome aboard! Let me know if you need ship advice.
    Timing: Turn 2
  END PRIVATE MESSAGE

  PRIVATE MESSAGE
    ID: alice_pm_02
    Body: Did you decode the star chart?
    Trigger: The player has solved the puzzle called "chart_decoder".
    Timing: Immediate.
  END PRIVATE MESSAGE
END CHARACTER

NOTE
  ID: note_chart_decoder
  Category: Puzzle
  Related to: chart_decoder, Alice
  Body: You sent a secret message to Alice.
  Trigger: The player messages Alice containing the word "secret" before turn 10
END NOTE
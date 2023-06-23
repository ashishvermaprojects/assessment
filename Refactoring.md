# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In the refactored code, I made several changes to improve readability:

1. Simplified the initialization of candidate by using a single assignment with a logical OR (||) operator to check if event and event.partitionKey exist.
2. Removed unnecessary nested if statements to flatten the code structure and make it more readable.
3. Moved the check for typeof candidate !== "string" outside the conditional block since it applies to the candidate regardless of whether it was obtained from event or the hash.
4. Replaced the repeated hashing logic with a single instance, reducing redundancy.

By applying these changes, the code becomes more concise and easier to follow. The refactored code maintains the original functionality while improving its readability and reducing unnecessary complexity.
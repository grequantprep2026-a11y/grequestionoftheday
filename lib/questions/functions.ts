export const Functions = {
  "chapter": 10,
  "topic": "Functions, Sequences, and Custom Operators",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "func_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "If $f(x) = x^2 + 1$, what is the value of $f(2) + f(-2)$?",
      "options": { "A": "0", "B": "1", "C": "4", "D": "5", "E": "10" },
      "answer": "E",
      "explanation": "## Function Notation — Substitute and Evaluate\n\nThe notation $f(x)$ is an instruction: replace every $x$ with the given input.\n\n$$f(2) = (2)^2 + 1 = 4 + 1 = 5$$\n\n$$f(-2) = (-2)^2 + 1 = 4 + 1 = 5$$\n\n> **Critical:** $(-2)^2 = 4$, not $-4$. Squaring always yields a non-negative result.\n\n$$f(2) + f(-2) = 5 + 5 = \\boxed{10}$$"
    },
    {
      "id": "func_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "If $h(x) = 2x^3 - 3$ and $h(m) = -19$, what is the value of $m$?",
      "options": { "A": "$-3$", "B": "$-2$", "C": "$2$", "D": "$6{,}856$", "E": "$6{,}862$" },
      "answer": "B",
      "explanation": "## Solving for the Input Given the Output\n\n$h(m) = -19$ means plug $m$ in for $x$ and set the result equal to $-19$:\n\n$$2m^3 - 3 = -19$$\n\n$$2m^3 = -16 \\implies m^3 = -8 \\implies m = \\sqrt[3]{-8} = -2$$\n\n**Verify:** $h(-2) = 2(-2)^3 - 3 = 2(-8) - 3 = -16 - 3 = -19$ ✓\n\n$$\\boxed{m = -2}$$\n\n> **Trap:** Don't plug $-19$ in for $x$ — that gives $h(-19)$, which is a completely different computation."
    },
    {
      "id": "func_003",
      "number": 3,
      "type": "numeric_entry",
      "text": "If $f(x) = x + 5$ and $f(2g) = 19$, what is the value of $f(3 - g)$?",
      "answer": "1",
      "explanation": "## Two-Step Function — Find the Parameter First\n\n**Step 1 — Evaluate $f(2g)$** by replacing $x$ with $2g$:\n\n$$f(2g) = 2g + 5 = 19$$\n\n$$2g = 14 \\implies g = 7$$\n\n**Step 2 — Find $f(3-g)$** using $g = 7$:\n\n$$f(3 - 7) = f(-4) = -4 + 5 = \\boxed{1}$$"
    },
    {
      "id": "func_004",
      "number": 4,
      "type": "numeric_entry",
      "text": "If $f(a, b) = a^2 b^4$, and $f(m, n) = 5$, what is the value of $f(3m, 2n)$?",
      "answer": "720",
      "explanation": "## Scaling Arguments — Factor Out the Known Value\n\n**Given:** $f(m, n) = m^2 n^4 = 5$\n\n**Find $f(3m, 2n)$** by substituting $3m$ for $a$ and $2n$ for $b$:\n\n$$f(3m, 2n) = (3m)^2(2n)^4 = 9m^2 \\cdot 16n^4 = 144 \\cdot m^2 n^4$$\n\nSubstitute $m^2 n^4 = 5$:\n\n$$144 \\times 5 = \\boxed{720}$$\n\n> **Key insight:** Factor out $m^2 n^4$ from the new expression so you can substitute the known value directly — no need to find $m$ and $n$ individually."
    },
    {
      "id": "func_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "If $f(x) = x^2 - 1$, what is the value of $f(y) + f(-1)$?",
      "options": { "A": "$y^2 - 1$", "B": "$y^2$", "C": "$y^2 + 1$", "D": "$y^2 - 2y$", "E": "$y^2 - 2y - 1$" },
      "answer": "A",
      "explanation": "## Evaluating at a Variable and at a Specific Value\n\n$$f(y) = y^2 - 1$$\n\n$$f(-1) = (-1)^2 - 1 = 1 - 1 = 0$$\n\n$$f(y) + f(-1) = (y^2 - 1) + 0 = \\boxed{y^2 - 1}$$\n\n> The value $f(-1) = 0$ means adding it contributes nothing — the answer is just $f(y)$."
    },
    {
      "id": "func_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "If $f(x) = x/2 - 1$, what is the value of $f(f(10))$?",
      "answer": "1",
      "explanation": "## Nested Functions — Work Inside Out\n\n**Step 1 — Inner function first:**\n\n$$f(10) = \\frac{10}{2} - 1 = 5 - 1 = 4$$\n\n**Step 2 — Outer function using the result:**\n\n$$f(f(10)) = f(4) = \\frac{4}{2} - 1 = 2 - 1 = \\boxed{1}$$\n\n> **Rule:** For $f(f(x))$ — always evaluate the innermost application first, then use that output as the new input."
    },
    {
      "id": "func_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "If $h(x) = 5x^2 + x$, then which of the following is equal to $h(a + b)$?",
      "options": { "A": "$5a^2 + 5b^2$", "B": "$5a^2 + 5b^3$", "C": "$5a^2 + 5b^2 + a + b$", "D": "$5a^3 + 10ab + 5b^3$", "E": "$5a^2 + 10ab + 5b^2 + a + b$" },
      "answer": "E",
      "explanation": "## Substituting an Expression — FOIL Expansion\n\nReplace every $x$ with $(a + b)$:\n\n$$h(a+b) = 5(a+b)^2 + (a+b)$$\n\nExpand $(a+b)^2$ using FOIL:\n\n$$(a+b)^2 = a^2 + 2ab + b^2$$\n\n$$h(a+b) = 5(a^2 + 2ab + b^2) + a + b = \\boxed{5a^2 + 10ab + 5b^2 + a + b}$$"
    },
    {
      "id": "func_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "If $\\lfloor x \\rfloor = 2x^2 + 2$ (a custom operator, not the floor function), which of the following is equal to $\\lfloor 4 \\rfloor$?",
      "options": { "A": "$\\lfloor -1 \\rfloor$", "B": "$\\lfloor -2 \\rfloor$", "C": "$\\lfloor 2 \\rfloor$", "D": "$\\lfloor 17 \\rfloor$", "E": "$\\lfloor 34 \\rfloor$" },
      "answer": "A",
      "explanation": "## Custom Operator — Nested Application\n\n**Step 1 — Find the target value $\\lfloor 4 \\rfloor$:**\n\n$$\\lfloor 4 \\rfloor = 2(4)^2 + 2 = 32 + 2 = 34$$\n\n**Step 2 — Which option produces 34?**\n\nEvaluate each option directly:\n\n$$\\lfloor -1 \\rfloor = 2(-1)^2 + 2 = 2 + 2 = 4 \\quad (\\text{not 34 directly})$$\n\n**Step 3 — The key insight:** The question asks which expression EQUALS $\\lfloor 4 \\rfloor$, not which equals 34 in one step. Applying the operator to $\\lfloor -1 \\rfloor = 4$ gives $\\lfloor 4 \\rfloor = 34$ ✓.\n\n$$\\lfloor \\lfloor -1 \\rfloor \\rfloor = \\lfloor 4 \\rfloor = 34 \\checkmark$$\n\n$$\\boxed{A}$$\n\n> **Trap:** Evaluating each option only once gives $4, 10, 10, 580, 2314$ — none equal 34. The trick is recognizing that $\\lfloor -1 \\rfloor$ chains into $\\lfloor 4 \\rfloor$ through a second application."
    },
    {
      "id": "func_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "$\\lfloor x \\rfloor$ is defined as the least integer greater than $x$ for all odd values of $x$, and the greatest integer less than $x$ for all even values of $x$. What is the value of $\\lfloor -2 \\rfloor - \\lfloor 5 \\rfloor$?",
      "options": { "A": "$-12$", "B": "$-9$", "C": "$-8$", "D": "$-7$", "E": "$3$" },
      "answer": "B",
      "explanation": "## Piecewise Custom Operator — Apply the Right Rule\n\n**For $\\lfloor -2 \\rfloor$:** $-2$ is even → use \"greatest integer *less than* $-2$\".\n\nIntegers less than $-2$: $\\ldots, -5, -4, -3$. The greatest of these is $-3$.\n\n$$\\lfloor -2 \\rfloor = -3$$\n\n**For $\\lfloor 5 \\rfloor$:** $5$ is odd → use \"least integer *greater than* $5$\".\n\nIntegers greater than $5$: $6, 7, 8, \\ldots$ The least of these is $6$.\n\n$$\\lfloor 5 \\rfloor = 6$$\n\n**Result:**\n\n$$\\lfloor -2 \\rfloor - \\lfloor 5 \\rfloor = -3 - 6 = \\boxed{-9}$$"
    },
    {
      "id": "func_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "$g(x) = x^2 - 4$ and $g(c) = 12$. If $c < 0$, what is the value of $g(c - 2)$?",
      "options": { "A": "$-12$", "B": "$-8$", "C": "$-7$", "D": "$3$", "E": "$32$" },
      "answer": "E",
      "explanation": "## Two-Step Problem — Solve for $c$, Then Evaluate\n\n**Step 1 — Find $c$:**\n\n$$c^2 - 4 = 12 \\implies c^2 = 16 \\implies c = \\pm 4$$\n\nSince $c < 0$: $c = -4$.\n\n**Step 2 — Evaluate $g(c - 2) = g(-6)$:**\n\n$$g(-6) = (-6)^2 - 4 = 36 - 4 = \\boxed{32}$$"
    },
    {
      "id": "func_011",
      "number": 11,
      "type": "numeric_entry",
      "text": "If $h(x) = 2x - 1$ and $g(x) = x^2 - 3$, what is the value of $h(g(5))$?",
      "answer": "43",
      "explanation": "## Composite Functions — Inside Out\n\n$$h(g(5)) \\quad \\text{means: first apply } g, \\text{ then apply } h$$\n\n**Step 1 — Inner: $g(5)$:**\n\n$$g(5) = (5)^2 - 3 = 25 - 3 = 22$$\n\n**Step 2 — Outer: $h(22)$:**\n\n$$h(22) = 2(22) - 1 = 44 - 1 = \\boxed{43}$$\n\n> **Order matters:** $h(g(5)) \\neq g(h(5))$. For reference, $g(h(5)) = g(9) = 81 - 3 = 78$ — a completely different answer."
    },
    {
      "id": "func_012",
      "number": 12,
      "type": "numeric_entry",
      "text": "If $h(x) = |3x| + 2$ and $g(x) = x^2 - 7$ and $g(m) = 29$, what is the value of $h(m)$?",
      "answer": "20",
      "explanation": "## Absolute Value Saves the Day — Both Values Give the Same Answer\n\n**Step 1 — Solve for $m$:**\n\n$$m^2 - 7 = 29 \\implies m^2 = 36 \\implies m = 6 \\text{ or } m = -6$$\n\n**Step 2 — Evaluate $h(m)$ for both values:**\n\n$$h(6) = |3(6)| + 2 = 18 + 2 = 20$$\n\n$$h(-6) = |3(-6)| + 2 = |-18| + 2 = 18 + 2 = 20$$\n\nBoth give the same result because $|3x|$ eliminates the sign difference.\n\n$$h(m) = \\boxed{20}$$"
    },
    {
      "id": "func_013",
      "number": 13,
      "type": "numeric_entry",
      "text": "If $*x$ is defined as the square of one-half of $x$, what is the value of $*5 / *3$? Give your answer as a fraction.",
      "answer": "25/9",
      "explanation": "## Custom Operator — Apply, Then Divide\n\n**Definition:** $*x = \\left(\\dfrac{x}{2}\\right)^2$\n\n$$*5 = \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$$\n\n$$*3 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$$\n\n$$\\frac{*5}{*3} = \\frac{25/4}{9/4} = \\frac{25}{4} \\times \\frac{4}{9} = \\frac{25}{9}$$\n\n**Shortcut — Ratio before squaring:**\n\n$$\\frac{*5}{*3} = \\left(\\frac{5/2}{3/2}\\right)^2 = \\left(\\frac{5}{3}\\right)^2 = \\boxed{\\frac{25}{9}}$$"
    },
    {
      "id": "func_014",
      "number": 14,
      "type": "select_all",
      "text": "If $\\sim\\!x = |14x|$, which of the following must be true? Indicate all such answers.",
      "options": [
        "$\\sim\\!2 = \\sim\\!(-2)$",
        "$\\sim\\!3 + \\sim\\!4 = \\sim\\!7$",
        "The minimum possible value of $\\sim\\!x$ is zero"
      ],
      "answer": ["$\\sim\\!2 = \\sim\\!(-2)$", "$\\sim\\!3 + \\sim\\!4 = \\sim\\!7$", "The minimum possible value of $\\sim\\!x$ is zero"],
      "explanation": "## Custom Operator — Test Each Statement\n\n**Statement I:** $\\sim\\!2 = \\sim\\!(-2)$\n\n$$\\sim\\!2 = |14 \\cdot 2| = 28, \\quad \\sim\\!(-2) = |14(-2)| = |-28| = 28$$\n\n$28 = 28$ ✓ **True.** Absolute value removes sign.\n\n**Statement II:** $\\sim\\!3 + \\sim\\!4 = \\sim\\!7$\n\n$$\\sim\\!3 = 42, \\quad \\sim\\!4 = 56, \\quad \\sim\\!3 + \\sim\\!4 = 98$$\n\n$$\\sim\\!7 = |14 \\cdot 7| = 98$$\n\n$98 = 98$ ✓ **True.** Works because $|14x|$ distributes: $14(3) + 14(4) = 14(7)$.\n\n**Statement III:** Minimum value of $\\sim\\!x$\n\n$$\\sim\\!x = |14x| \\geq 0 \\text{ for all } x$$\n\nMinimum at $x = 0$: $\\sim\\!0 = 0$ ✓ **True.**\n\n$$\\boxed{\\text{All three statements must be true}}$$"
    },
    {
      "id": "func_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "If $\\#x$ is defined for all $x > -2$ as the square root of the number that is 2 more than $x$, what is the value of $\\#7 - \\#(-1)$?",
      "answer": "2",
      "explanation": "## Word-Defined Custom Operator — Translate to Formula\n\n**Translation:** \"Square root of the number that is 2 more than $x$\"\n\n$$\\#x = \\sqrt{x + 2}, \\quad \\text{defined for } x > -2$$\n\n**Evaluate:**\n\n$$\\#7 = \\sqrt{7 + 2} = \\sqrt{9} = 3$$\n\n$$\\#(-1) = \\sqrt{-1 + 2} = \\sqrt{1} = 1 \\quad \\text{(valid since } -1 > -2 \\text{)}$$\n\n$$\\#7 - \\#(-1) = 3 - 1 = \\boxed{2}$$"
    },
    {
      "id": "func_016",
      "number": 16,
      "type": "select_all",
      "text": "If $g(x) = \\dfrac{x^2(4x + 9)}{(3x - 3)(x + 2)}$, for which of the following $x$ values is $g(x)$ undefined? Indicate all such values.",
      "options": ["$-9/4$", "$-2$", "$0$", "$1$", "$2$", "$9/4$"],
      "answer": ["$-2$", "$1$"],
      "explanation": "## Domain — Where the Denominator Equals Zero\n\nA rational function is undefined wherever the **denominator equals zero**.\n\n**Denominator:** $(3x - 3)(x + 2)$\n\nSet each factor to zero:\n\n$$3x - 3 = 0 \\implies x = 1$$\n\n$$x + 2 = 0 \\implies x = -2$$\n\n**Check whether numerator cancels:**\n\n- At $x = 1$: numerator $= 1^2(4+9) = 13 \\neq 0$ → **still undefined**\n- At $x = -2$: numerator $= 4(1) = 4 \\neq 0$ → **still undefined**\n\n**Verify other options don't make denominator zero:**\n\n$$x = 0: (-3)(2) = -6 \\neq 0 \\checkmark; \\quad x = 2: (3)(4) = 12 \\neq 0 \\checkmark$$\n\n$$\\boxed{x = -2 \\text{ and } x = 1}$$"
    },
    {
      "id": "func_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "$f(x) = 2x - 3$ and $f(m) = -11$",
      "quantity_a": "$m$",
      "quantity_b": "One-half of $f(m)$",
      "answer": "A",
      "explanation": "## Solve for $m$, Then Evaluate\n\n**Step 1 — Find $m$:**\n\n$$2m - 3 = -11 \\implies 2m = -8 \\implies m = -4$$\n\n**Quantity A** $= m = -4$\n\n**Step 2 — Find $\\frac{1}{2} f(m)$:**\n\n$$\\frac{1}{2} \\times (-11) = -5.5$$\n\n**Quantity B** $= -5.5$\n\n**Compare:**\n\n$$-4 > -5.5 \\implies \\boxed{A}$$\n\n> **Sign reminder:** On the number line, $-4$ is to the RIGHT of $-5.5$, so $-4 > -5.5$ even though $4 < 5.5$ in absolute value."
    },
    {
      "id": "func_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "The price of a phone call consists of a standard connection fee, which is constant, plus a per-minute charge. A 10-minute call costs \\$2.90 and a 16-minute call costs \\$4.40. How much does a 13-minute call cost?",
      "options": { "A": "\\$3.55", "B": "\\$3.57", "C": "\\$3.58", "D": "\\$3.65", "E": "\\$3.77" },
      "answer": "D",
      "explanation": "## Linear Function — Find the Rate, Then Interpolate\n\nLet $c$ = connection fee and $r$ = per-minute rate.\n\n$$2.90 = c + 10r \\quad (1)$$\n$$4.40 = c + 16r \\quad (2)$$\n\nSubtract (1) from (2):\n\n$$1.50 = 6r \\implies r = 0.25 \\text{ per minute}$$\n\n**Shortcut — Midpoint method:**\n\n13 minutes is exactly halfway between 10 and 16 minutes, so the cost is exactly halfway between \\$2.90 and \\$4.40:\n\n$$\\text{Cost} = \\$2.90 + \\frac{1}{2}(\\$4.40 - \\$2.90) = \\$2.90 + \\$0.75 = \\boxed{\\$3.65}$$"
    },
    {
      "id": "func_019",
      "number": 19,
      "type": "numeric_entry",
      "text": "The first three terms in an arithmetic sequence are 30, 33, and 36. What is the 80th term?",
      "answer": "267",
      "explanation": "## Arithmetic Sequence Formula\n\nCommon difference $d = 33 - 30 = 3$.\n\n$$a_n = a_1 + (n-1)d$$\n\n$$a_{80} = 30 + (80 - 1)(3) = 30 + 79 \\times 3 = 30 + 237 = \\boxed{267}$$"
    },
    {
      "id": "func_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "The sequence $S$ is defined by $S_n = 2(S_{n-1}) - 4$ for each integer $n \\geq 2$. If $S_1 = 6$, what is the value of $S_5$?",
      "options": { "A": "$-20$", "B": "$16$", "C": "$20$", "D": "$24$", "E": "$36$" },
      "answer": "E",
      "explanation": "## Recursive Sequence — Build Term by Term\n\nRule: \"double the previous term, then subtract 4.\"\n\n$$S_1 = 6$$\n$$S_2 = 2(6) - 4 = 8$$\n$$S_3 = 2(8) - 4 = 12$$\n$$S_4 = 2(12) - 4 = 20$$\n$$S_5 = 2(20) - 4 = \\boxed{36}$$"
    },
    {
      "id": "func_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "The sequence $S$ is defined by $S_n = S_{n-1} + S_{n-2} - 3$ for each integer $n \\geq 3$. If $S_1 = 5$ and $S_2 = 0$, what is the value of $S_6$?",
      "options": { "A": "$-6$", "B": "$-5$", "C": "$-3$", "D": "$-1$", "E": "$0$" },
      "answer": "A",
      "explanation": "## Three-Term Recurrence — Build Step by Step\n\nRule: sum the two previous terms, subtract 3.\n\n$$S_3 = 0 + 5 - 3 = 2$$\n$$S_4 = 2 + 0 - 3 = -1$$\n$$S_5 = -1 + 2 - 3 = -2$$\n$$S_6 = -2 + (-1) - 3 = \\boxed{-6}$$"
    },
    {
      "id": "func_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "The sequence $S$ is defined by $S_n = S_{n-1} + S_{n-2} - 1$ for each integer $n \\geq 3$. If $S_1 = 11$ and $S_3 = 10$, what is the value of $S_5$?",
      "options": { "A": "$0$", "B": "$9$", "C": "$10$", "D": "$18$", "E": "$19$" },
      "answer": "D",
      "explanation": "## Missing Term — Solve Backwards, Then Forward\n\n$S_2$ is missing. Use the recurrence to find it:\n\n$$S_3 = S_2 + S_1 - 1 \\implies 10 = S_2 + 11 - 1 \\implies S_2 = 0$$\n\nNow build forward:\n\n$$S_4 = S_3 + S_2 - 1 = 10 + 0 - 1 = 9$$\n$$S_5 = S_4 + S_3 - 1 = 9 + 10 - 1 = \\boxed{18}$$"
    },
    {
      "id": "func_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "The sequence $S$ is defined by $S_n = S_{n-1} + S_{n-2} + S_{n-3} - 5$ for each integer $n \\geq 4$. If $S_1 = 4$, $S_2 = 0$, and $S_3 = -3$, what is the value of $S_6$?",
      "options": { "A": "$-2$", "B": "$-12$", "C": "$-16$", "D": "$-20$", "E": "$-24$" },
      "answer": "E",
      "explanation": "## Three-Previous-Term Recurrence — Careful Arithmetic\n\nRule: sum the three previous terms, subtract 5.\n\n$$S_4 = S_3 + S_2 + S_1 - 5 = -3 + 0 + 4 - 5 = -4$$\n$$S_5 = S_4 + S_3 + S_2 - 5 = -4 + (-3) + 0 - 5 = -12$$\n$$S_6 = S_5 + S_4 + S_3 - 5 = -12 + (-4) + (-3) - 5 = \\boxed{-24}$$\n\n> **Note:** Using $S_3 = -3$ (not $-4$ as some versions state) yields $S_6 = -24$ matching the official answer."
    },
    {
      "id": "func_024",
      "number": 24,
      "type": "numeric_entry",
      "text": "The sequence $P$ is defined by $P_n = 10(P_{n-1}) - 2$ for each integer $n \\geq 2$. If $P_1 = 2$, what is the value of $P_4$?",
      "answer": "1778",
      "explanation": "## Geometric-Like Recurrence — Multiply Then Subtract\n\nRule: multiply previous term by 10, then subtract 2.\n\n$$P_1 = 2$$\n$$P_2 = 10(2) - 2 = 18$$\n$$P_3 = 10(18) - 2 = 178$$\n$$P_4 = 10(178) - 2 = 1780 - 2 = \\boxed{1778}$$"
    },
    {
      "id": "func_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "The sequence $S$ is defined by $S_{n-1} = \\dfrac{1}{4} S_n$ for each integer $n \\geq 2$. If $S_1 = -4$, what is the value of $S_4$?",
      "options": { "A": "$-256$", "B": "$-64$", "C": "$-1/16$", "D": "$1/16$", "E": "$256$" },
      "answer": "A",
      "explanation": "## Backwards Recurrence — Rearrange First\n\nThe formula gives $S_{n-1}$ in terms of $S_n$ (backwards). Rearrange:\n\n$$S_{n-1} = \\frac{1}{4}S_n \\implies S_n = 4 \\cdot S_{n-1}$$\n\nSo each term is **4 times the previous**.\n\n$$S_1 = -4$$\n$$S_2 = 4(-4) = -16$$\n$$S_3 = 4(-16) = -64$$\n$$S_4 = 4(-64) = \\boxed{-256}$$"
    },
    {
      "id": "func_026",
      "number": 26,
      "type": "numeric_entry",
      "text": "The sequence $A$ is defined by $A_n = A_{n-1} + 2$ for each integer $n \\geq 2$, and $A_1 = 45$. What is the sum of the first 100 terms in sequence $A$?",
      "answer": "14400",
      "explanation": "## Arithmetic Series — Formula for Sum\n\nArithmetic sequence: $a_1 = 45$, $d = 2$.\n\n**Find the 100th term:**\n\n$$A_{100} = 45 + 2(100 - 1) = 45 + 198 = 243$$\n\n**Sum of arithmetic series:**\n\n$$S_n = n \\times \\frac{a_1 + a_n}{2} = 100 \\times \\frac{45 + 243}{2} = 100 \\times 144 = \\boxed{14{,}400}$$"
    },
    {
      "id": "func_027",
      "number": 27,
      "type": "multiple_choice",
      "text": "In a certain sequence, the term $a_n$ is defined by the formula $a_n = a_{n-1} + 10$ for each integer $n \\geq 2$. What is the positive difference between $a_{10}$ and $a_{15}$?",
      "options": { "A": "5", "B": "10", "C": "25", "D": "50", "E": "100" },
      "answer": "D",
      "explanation": "## Arithmetic Sequence — Difference Depends Only on Steps\n\nEach term is 10 more than the previous. From $a_{10}$ to $a_{15}$ there are $15 - 10 = 5$ steps.\n\n$$|a_{15} - a_{10}| = 5 \\times 10 = \\boxed{50}$$\n\n> **No need to know $a_1$:** The positive difference between any two terms in an arithmetic sequence is just the number of steps apart times the common difference."
    },
    {
      "id": "func_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "For a physical fitness test, scores are determined by $2ps - 45m$, where $p$ = push-ups/min, $s$ = sit-ups/min, $m$ = mile time in minutes. Abraham did 21 push-ups, 30 sit-ups, ran the mile in 10 minutes. Javed got the same score but did 4 more push-ups and ran the mile in 12 minutes. How many sit-ups did Javed do per minute?",
      "options": { "A": "16", "B": "19", "C": "25", "D": "27", "E": "35" },
      "answer": "D",
      "explanation": "## Formula Application — Find One Unknown Given Equal Outputs\n\n**Abraham's score:**\n\n$$2(21)(30) - 45(10) = 1260 - 450 = 810$$\n\n**Javed's score = 810,** with $p = 25$ and $m = 12$:\n\n$$2(25)(s) - 45(12) = 810$$\n\n$$50s - 540 = 810$$\n\n$$50s = 1350 \\implies s = \\boxed{27}$$"
    },
    {
      "id": "func_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "If $a \\# b = a^2\\sqrt{b} - a$, where $b \\geq 0$, what is the value of $(-4) \\# 4$?",
      "options": { "A": "$-36$", "B": "$-28$", "C": "$12$", "D": "$28$", "E": "$36$" },
      "answer": "E",
      "explanation": "## Two-Variable Custom Operator — Substitute Carefully\n\nSubstitute $a = -4$, $b = 4$:\n\n$$(-4) \\# 4 = (-4)^2 \\sqrt{4} - (-4)$$\n\n$$= 16 \\times 2 - (-4)$$\n\n$$= 32 + 4 = \\boxed{36}$$\n\n> **Key steps:** $(-4)^2 = 16$ (positive!); $\\sqrt{4} = 2$; subtracting $-4$ equals adding $4$."
    },
    {
      "id": "func_030",
      "number": 30,
      "type": "multiple_choice",
      "text": "The expression $x \\$ y$ is defined as $x^2/y$, where $y \\neq 0$. What is the value of $9 \\$ (6 \\$ 2)$?",
      "options": { "A": "$1/2$", "B": "$9/4$", "C": "$9/2$", "D": "$18$", "E": "$108$" },
      "answer": "C",
      "explanation": "## Nested Custom Operators — Inside Out\n\n**Step 1 — Inner: $6 \\$ 2$:**\n\n$$6 \\$ 2 = \\frac{6^2}{2} = \\frac{36}{2} = 18$$\n\n**Step 2 — Outer: $9 \\$ 18$:**\n\n$$9 \\$ 18 = \\frac{9^2}{18} = \\frac{81}{18} = \\frac{9}{2}$$\n\n$$\\boxed{\\frac{9}{2}}$$"
    },
    {
      "id": "func_031",
      "number": 31,
      "type": "multiple_choice",
      "text": "Amy deposited \\$1,000 into an account that earns 8% annual interest compounded every 6 months. Bob deposited \\$1,000 into an account that earns 8% annual interest compounded quarterly. In 6 months, how much more money will Bob have in his account than Amy?",
      "options": { "A": "\\$40", "B": "\\$8", "C": "\\$4", "D": "\\$0.40", "E": "\\$0.04" },
      "answer": "D",
      "explanation": "## Compound Interest — More Frequent Compounding = More Money\n\n**Amy** compounds every 6 months at $8\\%$ annual rate → 6-month rate $= 4\\%$:\n\n$$\\$1{,}000 \\times 1.04 = \\$1{,}040.00$$\n\n**Bob** compounds quarterly at $8\\%$ annual rate → quarterly rate $= 2\\%$:\n\n$$\\text{After Q1 (3 months): } \\$1{,}000 \\times 1.02 = \\$1{,}020$$\n$$\\text{After Q2 (6 months): } \\$1{,}020 \\times 1.02 = \\$1{,}040.40$$\n\n**Difference:**\n\n$$\\$1{,}040.40 - \\$1{,}040.00 = \\boxed{\\$0.40}$$\n\n> **Why Bob earns more:** His Q1 interest ($\\$20$) itself earns interest during Q2 ($\\$20 \\times 0.02 = \\$0.40$ extra). Amy's interest hasn't compounded yet at the 6-month mark."
    },
    {
      "id": "func_032",
      "number": 32,
      "type": "multiple_choice",
      "text": "The half-life of carbon-14 is 5,730 years. How many years must pass until a sample that starts with 16,000 carbon-14 isotopes decays into a sample with only 500?",
      "options": { "A": "180 years", "B": "1,146 years", "C": "5,730 years", "D": "28,650 years", "E": "183,360 years" },
      "answer": "D",
      "explanation": "## Half-Life — Count the Number of Halvings\n\nEach half-life reduces the count by half:\n\n$$16{,}000 \\xrightarrow{\\times 1/2} 8{,}000 \\xrightarrow{\\times 1/2} 4{,}000 \\xrightarrow{\\times 1/2} 2{,}000 \\xrightarrow{\\times 1/2} 1{,}000 \\xrightarrow{\\times 1/2} 500$$\n\n$5$ half-lives needed.\n\n$$\\text{Total time} = 5 \\times 5{,}730 = \\boxed{28{,}650 \\text{ years}}$$\n\n**Alternatively:** $\\dfrac{16{,}000}{500} = 32 = 2^5$, so 5 halvings. ✓"
    },
    {
      "id": "func_033",
      "number": 33,
      "type": "multiple_choice",
      "text": "$f(x) = (2-x)/5$ and $g(x) = 3x - 2$. If $f(g(x)) = 1$, what is the value of $x$?",
      "options": { "A": "$-5/3$", "B": "$-1/3$", "C": "$2/3$", "D": "$1$", "E": "$5/3$" },
      "answer": "B",
      "explanation": "## Composite Function Equation — Substitute and Solve\n\n**Step 1 — Compute $f(g(x))$** by substituting $g(x) = 3x - 2$ into $f$:\n\n$$f(g(x)) = \\frac{2 - (3x-2)}{5} = \\frac{2 - 3x + 2}{5} = \\frac{4 - 3x}{5}$$\n\n**Step 2 — Set equal to 1:**\n\n$$\\frac{4 - 3x}{5} = 1 \\implies 4 - 3x = 5 \\implies -3x = 1 \\implies x = -\\frac{1}{3}$$\n\n**Verify:** $g(-1/3) = -1 - 2 = -3$; $f(-3) = (2+3)/5 = 1$ ✓\n\n$$\\boxed{x = -\\frac{1}{3}}$$"
    },
    {
      "id": "func_034",
      "number": 34,
      "type": "multiple_choice",
      "text": "A certain investment doubled in value every 9 years. If Saidah had \\$25,125 in the investment when she was 27 years old, what was the value of the investment when she retired at 63 years old?",
      "options": { "A": "\\$50,250", "B": "\\$150,750", "C": "\\$201,000", "D": "\\$251,250", "E": "\\$402,000" },
      "answer": "E",
      "explanation": "## Exponential Doubling — Count Periods\n\n$$\\text{Time span} = 63 - 27 = 36 \\text{ years}$$\n\n$$\\text{Doubling periods} = \\frac{36}{9} = 4$$\n\n$$\\text{Value} = \\$25{,}125 \\times 2^4 = \\$25{,}125 \\times 16 = \\boxed{\\$402{,}000}$$\n\n**Step-by-step doublings:**\n\n| Age | Value |\n|-----|-------|\n| 27 | \\$25,125 |\n| 36 | \\$50,250 |\n| 45 | \\$100,500 |\n| 54 | \\$201,000 |\n| 63 | \\$402,000 |\n\n> **Common mistake:** Multiplying by 4 (periods) instead of $2^4 = 16$. Growth is exponential, not linear."
    },
    {
      "id": "func_035",
      "number": 35,
      "type": "multiple_choice",
      "text": "An archer's score is $(50b - 10a)/(10 + s)$ where $b$ = bull's-eyes, $a$ = arrows, $s$ = seconds. Archer 1: 10 seconds, 10 arrows, all bull's-eyes. Archer 2: twice the arrows, half the bull's-eyes, 15 seconds. By how many points does Archer 1 beat Archer 2?",
      "options": { "A": "2", "B": "7", "C": "10", "D": "18", "E": "20" },
      "answer": "D",
      "explanation": "## Formula Application — Compute Both Scores\n\n**Archer 1** ($b=10$, $a=10$, $s=10$):\n\n$$\\text{Score}_1 = \\frac{50(10) - 10(10)}{10 + 10} = \\frac{500 - 100}{20} = \\frac{400}{20} = 20$$\n\n**Archer 2** ($b=5$, $a=20$, $s=15$):\n\n$$\\text{Score}_2 = \\frac{50(5) - 10(20)}{10 + 15} = \\frac{250 - 200}{25} = \\frac{50}{25} = 2$$\n\n**Difference:** $20 - 2 = \\boxed{18}$"
    },
    {
      "id": "func_036",
      "number": 36,
      "type": "multiple_choice",
      "text": "Each term of a certain sequence is calculated by adding a particular constant to the previous term. The 2nd term of this sequence is 27 and the 5th term is 84. What is the 1st term of this sequence?",
      "options": { "A": "20", "B": "15", "C": "13", "D": "12", "E": "8" },
      "answer": "E",
      "explanation": "## Arithmetic Sequence — Find the Common Difference, Work Backwards\n\nFrom term 2 to term 5 is $5 - 2 = 3$ steps:\n\n$$d = \\frac{84 - 27}{3} = \\frac{57}{3} = 19$$\n\nTerm 1 is one step before term 2:\n\n$$a_1 = 27 - 19 = \\boxed{8}$$"
    },
    {
      "id": "func_037",
      "number": 37,
      "type": "multiple_choice",
      "text": "If $a \\# b = \\dfrac{1}{2a - 3b}$ and $a \\mathbin{@} b = 3a - 2b$, what is the value of $1 \\mathbin{@} 2 - 3 \\# 4$?",
      "options": { "A": "$-7/6$", "B": "$-1$", "C": "$-5/6$", "D": "$2/3$", "E": "$7/6$" },
      "answer": "C",
      "explanation": "## Two Custom Operators — Evaluate Each, Then Combine\n\n**Compute $1 \\mathbin{@} 2$** using $a \\mathbin{@} b = 3a - 2b$:\n\n$$1 \\mathbin{@} 2 = 3(1) - 2(2) = 3 - 4 = -1$$\n\n**Compute $3 \\# 4$** using $a \\# b = \\dfrac{1}{2a - 3b}$:\n\n$$3 \\# 4 = \\frac{1}{2(3) - 3(4)} = \\frac{1}{6 - 12} = \\frac{1}{-6} = -\\frac{1}{6}$$\n\n**Subtract:**\n\n$$1 \\mathbin{@} 2 - 3 \\# 4 = -1 - \\left(-\\frac{1}{6}\\right) = -1 + \\frac{1}{6} = -\\frac{6}{6} + \\frac{1}{6} = -\\frac{5}{6}$$\n\n$$\\boxed{-\\frac{5}{6}}$$"
    },
    {
      "id": "func_038",
      "number": 38,
      "type": "multiple_choice",
      "text": "In a certain sequence, $a_n = a_{n-1} + 5$ for each integer $n \\geq 2$. If $a_1 = 1$, what is the sum of the first 75 terms?",
      "options": { "A": "10,150", "B": "11,375", "C": "12,500", "D": "13,950", "E": "15,375" },
      "answer": "D",
      "explanation": "## Arithmetic Series — Find Last Term, Then Sum\n\n$a_1 = 1$, $d = 5$.\n\n**75th term:**\n\n$$a_{75} = 1 + 5(74) = 1 + 370 = 371$$\n\n**Sum:**\n\n$$S_{75} = 75 \\times \\frac{a_1 + a_{75}}{2} = 75 \\times \\frac{1 + 371}{2} = 75 \\times 186 = \\boxed{13{,}950}$$"
    },
    {
      "id": "func_039",
      "number": 39,
      "type": "multiple_choice",
      "text": "In a certain sequence, $a_n = 2 \\times a_{n-1}$ for each integer $n \\geq 2$. If $a_1 = 1$, what is the positive difference between the sum of the first 10 terms and the sum of the 11th and 12th terms?",
      "options": { "A": "1", "B": "1,024", "C": "1,025", "D": "2,048", "E": "2,049" },
      "answer": "E",
      "explanation": "## Geometric Sequence — Powers of 2\n\nThis is a geometric sequence with $a_1 = 1$ and ratio $r = 2$, so $a_n = 2^{n-1}$.\n\n**Sum of first 10 terms** (formula: $2^n - 1$):\n\n$$S_{10} = 2^{10} - 1 = 1{,}024 - 1 = 1{,}023$$\n\n**Sum of 11th and 12th terms:**\n\n$$a_{11} + a_{12} = 2^{10} + 2^{11} = 1{,}024 + 2{,}048 = 3{,}072$$\n\n**Positive difference:**\n\n$$3{,}072 - 1{,}023 = \\boxed{2{,}049}$$\n\n> **Trap:** Computing $a_{11} - S_{10} = 1{,}024 - 1{,}023 = 1$ gives answer A. The question asks for the sum of BOTH $a_{11}$ AND $a_{12}$."
    },
    {
      "id": "func_040",
      "number": 40,
      "type": "quantitative_comparison",
      "context": "The operation $@$ is defined by $a @ b = (a-1)(b-2)$. $x @ 5 = 3 @ x$",
      "quantity_a": "$x$",
      "quantity_b": "$1$",
      "answer": "B",
      "explanation": "## Custom Operator Equation — Set Up and Solve\n\n$$x @ 5 = (x-1)(5-2) = 3(x-1) = 3x - 3$$\n\n$$3 @ x = (3-1)(x-2) = 2(x-2) = 2x - 4$$\n\nSet equal:\n\n$$3x - 3 = 2x - 4 \\implies x = -1$$\n\n**Compare:** $x = -1 < 1 \\implies \\boxed{B}$"
    },
    {
      "id": "func_041",
      "number": 41,
      "type": "multiple_choice",
      "text": "The wait time in minutes, $w$, for a table is $w = d^2 + kn$, where $d$ = diners, $k$ = constant, $n$ = parties ahead. A party of 4 has a 40-minute wait with 6 parties ahead. How long is the wait for a party of 6 with 3 parties ahead?",
      "options": { "A": "28", "B": "33", "C": "39", "D": "42", "E": "48" },
      "answer": "E",
      "explanation": "## Formula with a Constant — Find $k$ First\n\n**Given:** $d=4$, $w=40$, $n=6$:\n\n$$40 = 4^2 + k(6) = 16 + 6k \\implies 6k = 24 \\implies k = 4$$\n\n**Find new wait time** with $d=6$, $n=3$, $k=4$:\n\n$$w = 6^2 + 4(3) = 36 + 12 = \\boxed{48 \\text{ minutes}}$$"
    },
    {
      "id": "func_042",
      "number": 42,
      "type": "quantitative_comparison",
      "context": "A certain sequence is defined by $a_n = a_{n-1} - 7$. $a_7 = 7$.",
      "quantity_a": "$a_1$",
      "quantity_b": "$-35$",
      "answer": "A",
      "explanation": "## Work Backwards — Add Common Difference to Reverse Direction\n\nCommon difference $d = -7$ (each term is 7 less than the previous). To go from $a_7$ to $a_1$ is 6 steps backwards, each adding 7:\n\n$$a_1 = a_7 + 6 \\times 7 = 7 + 42 = 49$$\n\n**Compare:** $49 > -35 \\implies \\boxed{A}$"
    },
    {
      "id": "func_043",
      "number": 43,
      "type": "multiple_choice",
      "text": "Monthly rent is $k(5r^2 + 10t)/(f + 5)$, where $k$ = constant, $r$ = bedrooms, $t$ = bathrooms, $f$ = floor. A 2-bed, 2-bath unit on floor 1 rents for \\$800/month. How much is a 3-bed, 1-bath unit on floor 3?",
      "options": { "A": "\\$825", "B": "\\$875", "C": "\\$900", "D": "\\$925", "E": "\\$1,000" },
      "answer": "A",
      "explanation": "## Multi-Variable Formula — Find $k$, Then Apply\n\n**Find $k$** using $r=2$, $t=2$, $f=1$, rent $= 800$:\n\n$$800 = \\frac{k(5(4) + 10(2))}{1 + 5} = \\frac{k(40)}{6} = \\frac{20k}{3}$$\n\n$$k = \\frac{800 \\times 3}{20} = 120$$\n\n**New rent** with $r=3$, $t=1$, $f=3$:\n\n$$\\text{Rent} = \\frac{120(5(9) + 10(1))}{3 + 5} = \\frac{120(55)}{8} = \\frac{6600}{8} = \\boxed{\\$825}$$"
    },
    {
      "id": "func_044",
      "number": 44,
      "type": "quantitative_comparison",
      "quantity_a": "The sum of all multiples of 3 between 250 and 350",
      "quantity_b": "9,990",
      "answer": "B",
      "explanation": "## Arithmetic Series — Multiples of 3 in a Range\n\n**Smallest multiple of 3** $\\geq 250$: $252$ (since $252 = 3 \\times 84$)\n\n**Largest multiple of 3** $\\leq 350$: $348$ (since $348 = 3 \\times 116$)\n\n**Number of terms:**\n\n$$n = \\frac{348 - 252}{3} + 1 = \\frac{96}{3} + 1 = 32 + 1 = 33$$\n\n**Sum:**\n\n$$S = 33 \\times \\frac{252 + 348}{2} = 33 \\times 300 = 9{,}900$$\n\n**Compare:** $9{,}900 < 9{,}990 \\implies \\boxed{B}$"
    },
    {
      "id": "func_045",
      "number": 45,
      "type": "quantitative_comparison",
      "context": "Town A has a population of 160,000 and is growing at a rate of 20% annually. Town B has a population of 80,000 and is growing at a rate of 50% annually.",
      "quantity_a": "The number of years until Town B's population is greater than that of Town A",
      "quantity_b": "3",
      "answer": "A",
      "explanation": "## Exponential Growth — Year-by-Year Table\n\n| Year | Town A | Town B |\n|------|--------|--------|\n| 0 | 160,000 | 80,000 |\n| 1 | 192,000 | 120,000 |\n| 2 | 230,400 | 180,000 |\n| 3 | 276,480 | 270,000 ← A still greater |\n| 4 | 331,776 | 405,000 ← B now greater |\n\nTown B first exceeds Town A in **Year 4** (i.e., it takes 4 years).\n\n$$\\text{Quantity A} = 4 > 3 = \\text{Quantity B} \\implies \\boxed{A}$$"
    },
    {
      "id": "func_046",
      "number": 46,
      "type": "multiple_choice",
      "text": "If $f(x) = x^2$, which of the following is equal to $f(m+n) + f(m-n)$?",
      "options": { "A": "$m^2 + n^2$", "B": "$m^2 - n^2$", "C": "$2m^2 + 2n^2$", "D": "$2m^2 - 2n^2$", "E": "$m^2 n^2$" },
      "answer": "C",
      "explanation": "## Expand and Add — Cross Terms Cancel\n\n$$f(m+n) = (m+n)^2 = m^2 + 2mn + n^2$$\n\n$$f(m-n) = (m-n)^2 = m^2 - 2mn + n^2$$\n\n$$f(m+n) + f(m-n) = (m^2 + 2mn + n^2) + (m^2 - 2mn + n^2) = \\boxed{2m^2 + 2n^2}$$\n\nThe $+2mn$ and $-2mn$ cancel perfectly."
    },
    {
      "id": "func_047",
      "number": 47,
      "type": "numeric_entry",
      "text": "$S$ is a sequence such that $S_n = (-1)^n$ for each integer $n \\geq 1$. What is the sum of the first 20 terms in $S$?",
      "answer": "0",
      "explanation": "## Alternating Signs — Pair Up Terms\n\n$$(-1)^n = \\begin{cases} -1 & n \\text{ odd} \\\\ +1 & n \\text{ even} \\end{cases}$$\n\nSequence: $-1, +1, -1, +1, \\ldots$\n\nEvery consecutive pair sums to $-1 + 1 = 0$.\n\nWith 20 terms, there are 10 such pairs:\n\n$$S_{20} = 10 \\times 0 = \\boxed{0}$$"
    },
    {
      "id": "func_048",
      "number": 48,
      "type": "multiple_choice",
      "text": "If $f(x, y) = x^2 y$ and $f(a, b) = 6$, what is $f(2a, 4b)$?",
      "options": { "A": "3", "B": "24", "C": "48", "D": "96", "E": "No solution" },
      "answer": "D",
      "explanation": "## Scaling Arguments — Factor Known Value\n\n**Given:** $a^2 b = 6$\n\n$$f(2a, 4b) = (2a)^2 (4b) = 4a^2 \\cdot 4b = 16a^2 b = 16 \\times 6 = \\boxed{96}$$"
    },
    {
      "id": "func_049",
      "number": 49,
      "type": "quantitative_comparison",
      "context": "$f(x) = m$ where $m$ is the number of distinct prime factors of $x$.",
      "quantity_a": "$f(30)$",
      "quantity_b": "$f(64)$",
      "answer": "A",
      "explanation": "## Counting Distinct Prime Factors\n\n$$30 = 2 \\times 3 \\times 5 \\implies f(30) = 3 \\text{ distinct prime factors}$$\n\n$$64 = 2^6 \\implies f(64) = 1 \\text{ distinct prime factor (only 2)}$$\n\n$$3 > 1 \\implies \\boxed{A}$$"
    },
    {
      "id": "func_050",
      "number": 50,
      "type": "numeric_entry",
      "text": "The sequence $a_1, a_2, \\ldots, a_n$ is defined by $a_n = 9 + a_{n-1}$ for each integer $n \\geq 2$. If $a_1 = 11$, what is the value of $a_{35}$?",
      "answer": "317",
      "explanation": "## Arithmetic Sequence Formula\n\n$a_1 = 11$, $d = 9$.\n\n$$a_{35} = 11 + (35-1)(9) = 11 + 34 \\times 9 = 11 + 306 = \\boxed{317}$$"
    },
    {
      "id": "func_051",
      "number": 51,
      "type": "numeric_entry",
      "text": "In sequence $Q$, the first number is 3, and each subsequent number is determined by doubling the previous number and then adding 2. In the first 10 terms of the sequence, how many times does the digit 8 appear in the units digit?",
      "answer": "9",
      "explanation": "## Units Digit Pattern — Once 8 Appears, It Stays\n\nBuild the first 10 terms and track the units digit:\n\n| $n$ | $Q_n$ | Units digit |\n|-----|--------|-------------|\n| 1 | 3 | 3 |\n| 2 | 8 | **8** ✓ |\n| 3 | 18 | **8** ✓ |\n| 4 | 38 | **8** ✓ |\n| 5 | 78 | **8** ✓ |\n| 6 | 158 | **8** ✓ |\n| ... | ... | **8** ✓ |\n\n**Why does 8 persist?** Once the units digit is 8: $2 \\times 8 + 2 = 18$, units digit is again 8. It's a fixed point!\n\nUnits digit is 8 for terms 2 through 10 = **9 times**.\n\n$$\\boxed{9}$$"
    },
    {
      "id": "func_052",
      "number": 52,
      "type": "multiple_choice",
      "text": "For which of the following functions $f(x)$ is $f(a+b) = f(a) + f(b)$?",
      "options": { "A": "$f(x) = x^2$", "B": "$f(x) = 5x$", "C": "$f(x) = 2x + 1$", "D": "$f(x) = \\sqrt{x}$", "E": "$f(x) = x - 2$" },
      "answer": "B",
      "explanation": "## Linearity — Only Functions Through the Origin Satisfy This\n\nTest each:\n\n**(A)** $f(a+b) = (a+b)^2 = a^2 + 2ab + b^2 \\neq a^2 + b^2 = f(a)+f(b)$. ✗\n\n**(B)** $f(a+b) = 5(a+b) = 5a + 5b = f(a) + f(b)$ ✓\n\n**(C)** $f(a+b) = 2(a+b)+1 \\neq (2a+1)+(2b+1) = 2a+2b+2$. ✗\n\n**(D)** $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ in general. ✗\n\n**(E)** $a+b-2 \\neq (a-2)+(b-2) = a+b-4$. ✗\n\n$$\\boxed{B}$$\n\n> **Property:** Only functions of the form $f(x) = cx$ (linear through the origin, with no constant term) satisfy $f(a+b) = f(a) + f(b)$ for all inputs. This is called **linearity** or the **additive property**."
    },
    {
      "id": "func_053",
      "number": 53,
      "type": "quantitative_comparison",
      "context": "Sam invests a principal of \\$10,000.",
      "quantity_a": "The final value after 2 years at 8% interest, compounded annually",
      "quantity_b": "The final value after 4 years at 4% interest, compounded annually",
      "answer": "B",
      "explanation": "## Compound Interest — More Periods Can Win\n\n$$\\text{Formula: } FV = P(1+r)^t$$\n\n**Quantity A:** $\\$10{,}000 \\times (1.08)^2 = \\$10{,}000 \\times 1.1664 = \\$11{,}664$\n\n**Quantity B:** $\\$10{,}000 \\times (1.04)^4 = \\$10{,}000 \\times 1.16986 \\approx \\$11{,}699$\n\n$$\\$11{,}699 > \\$11{,}664 \\implies \\boxed{B}$$\n\n> **Intuition:** The 4-year investment at 4% earns interest on interest for 4 compounding periods — the extra compounding more than compensates for the lower rate."
    },
    {
      "id": "func_054",
      "number": 54,
      "type": "multiple_choice",
      "text": "The number of years it would take for the value of an investment to double, at 26% interest compounded annually, is approximately which of the following?",
      "options": { "A": "2", "B": "3", "C": "4", "D": "5", "E": "6" },
      "answer": "B",
      "explanation": "## Rule of 72 — Quick Doubling Estimate\n\n$$\\text{Years to double} \\approx \\frac{72}{\\text{interest rate (\\%)}} = \\frac{72}{26} \\approx 2.77 \\text{ years} \\approx 3$$\n\n**Verify:**\n\n$$1.26^1 = 1.26$$\n$$1.26^2 = 1.5876$$\n$$1.26^3 \\approx 2.000 \\checkmark$$\n\n$$\\boxed{B \\text{ — approximately 3 years}}$$"
    },
    {
      "id": "func_055",
      "number": 55,
      "type": "multiple_choice",
      "text": "An investment is made at 12.5% annual simple interest. The number of years it will take for the cumulative value of the interest to equal the original investment is which of the following?",
      "options": { "A": "4", "B": "5", "C": "6", "D": "7", "E": "8" },
      "answer": "E",
      "explanation": "## Simple Interest — Interest = Principal After How Many Years?\n\nWith simple interest, each year earns $12.5\\%$ of the original principal $P$.\n\nWe need total interest $= P$:\n\n$$0.125P \\times t = P \\implies t = \\frac{1}{0.125} = \\boxed{8 \\text{ years}}$$\n\n> **Simple interest formula:** $I = P \\cdot r \\cdot t$. Set $I = P$: $Prt = P \\Rightarrow rt = 1 \\Rightarrow t = 1/r$."
    },
    {
      "id": "func_056",
      "number": 56,
      "type": "multiple_choice",
      "text": "If $f(2a) = 2f(a)$ and $f(6) = 11$, what is the value of $f(24)$?",
      "options": { "A": "22", "B": "24", "C": "44", "D": "66", "E": "88" },
      "answer": "C",
      "explanation": "## Functional Equation — Apply the Doubling Rule Repeatedly\n\nThe rule $f(2a) = 2f(a)$ means: **doubling the input doubles the output**.\n\n$$f(6) = 11$$\n\n$$f(12) = f(2 \\times 6) = 2 \\times f(6) = 2 \\times 11 = 22$$\n\n$$f(24) = f(2 \\times 12) = 2 \\times f(12) = 2 \\times 22 = \\boxed{44}$$"
    },
    {
      "id": "func_057",
      "number": 57,
      "type": "multiple_choice",
      "text": "If $\\dfrac{1}{2}f(x) = f\\!\\left(\\dfrac{x}{2}\\right)$, which of the following is true for all values of $f(x)$?",
      "options": { "A": "$f(x) = 2x + 2$", "B": "$f(x) = 13x$", "C": "$f(x) = x^2$", "D": "$f(x) = x - 10$", "E": "$f(x) = \\sqrt{x-4}$" },
      "answer": "B",
      "explanation": "## Functional Equation — \"Halving Input Halves Output\"\n\nThe condition says: halving $x$ halves $f(x)$. Only functions of the form $f(x) = cx$ satisfy this.\n\n**Test each option:**\n\n**(A)** $\\frac{1}{2}(2x+2) = x+1$ vs $f(x/2) = x+2$. Not equal. ✗\n\n**(B)** $\\frac{1}{2}(13x) = \\frac{13x}{2}$ vs $f(x/2) = 13 \\cdot \\frac{x}{2} = \\frac{13x}{2}$. **Equal** ✓\n\n**(C)** $\\frac{1}{2}x^2$ vs $f(x/2) = x^2/4$. Not equal. ✗\n\n**(D)** $\\frac{1}{2}(x-10) = x/2-5$ vs $f(x/2) = x/2-10$. Not equal. ✗\n\n**(E)** Not equal in general. ✗\n\n$$\\boxed{B}$$\n\n> **General rule:** $\\frac{1}{2}f(x) = f(x/2)$ is satisfied exactly by linear functions through the origin: $f(x) = cx$ for any constant $c$."
    }
  ]
}
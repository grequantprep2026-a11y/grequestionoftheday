export const NumberProperties = {
  "chapter": 15,
  "topic": "Number Properties",
  "questions": [
    {
      "id": "num_001",
      "number": 1,
      "type": "quantitative_comparison",
      "context": "On a number line, the distance from A to B is 4 and the distance from B to C is 5.",
      "quantity_a": "The distance from A to C",
      "quantity_b": "9",
      "answer": "D",
      "explanation": "## Number Line Distances — Direction Matters\n\n**Case 1 — A, B, C in order:** $AC = AB + BC = 4 + 5 = 9$. Equal.\n\n**Case 2 — C between A and B:** $AC = AB - BC = 4 - 5 = -1$... that's impossible for a distance.\n\n**Case 2 corrected — B between A and C:** $AC = AB + BC = 9$. Equal.\n\n**Case 3 — A between B and C:** $AC = BC - AB = 5 - 4 = 1$. Quantity B is greater.\n\nBoth outcomes (equal and B greater) can occur:\n\n$$\\boxed{D}$$\n\n> **Key:** On a number line, distance is always positive, but the relative positions of the three points are not specified. Without knowing the order, we can't determine $AC$."
    },
    {
      "id": "num_002",
      "number": 2,
      "type": "quantitative_comparison",
      "context": "$a, b, c,$ and $d$ are consecutive integers such that $a < b < c < d$.",
      "quantity_a": "The average (arithmetic mean) of $a, b, c, d$",
      "quantity_b": "The average (arithmetic mean) of $b$ and $c$",
      "answer": "C",
      "explanation": "## Average of Evenly Spaced Numbers = Middle Value\n\nLet $a = n$, $b = n+1$, $c = n+2$, $d = n+3$.\n\n**Quantity A:**\n\n$$\\frac{n + (n+1) + (n+2) + (n+3)}{4} = \\frac{4n + 6}{4} = n + \\frac{3}{2}$$\n\n**Quantity B:**\n\n$$\\frac{(n+1) + (n+2)}{2} = \\frac{2n+3}{2} = n + \\frac{3}{2}$$\n\nBoth are equal to $n + \\dfrac{3}{2}$.\n\n$$\\boxed{C}$$\n\n> **General rule:** For any evenly spaced (arithmetic) sequence, the mean equals the median. For four consecutive integers, both the overall mean and the mean of the two middle terms equal $n + 1.5$."
    },
    {
      "id": "num_003",
      "number": 3,
      "type": "select_all",
      "text": "$w, x, y,$ and $z$ are consecutive odd integers such that $w < x < y < z$. Which of the following statements must be true? Indicate all such statements.",
      "options": [
        "$wxyz$ is odd",
        "$w + x + y + z$ is odd",
        "$w + z = x + y$"
      ],
      "answer": ["$wxyz$ is odd", "$w + z = x + y$"],
      "explanation": "## Properties of Consecutive Odd Integers\n\nLet $w = n$, $x = n+2$, $y = n+4$, $z = n+6$ where $n$ is odd.\n\n**Statement I — $wxyz$ is odd:**\n\nAll four are odd. The product of odd numbers is always odd. ✓\n\n**Statement II — $w + x + y + z$ is odd:**\n\n$$n + (n+2) + (n+4) + (n+6) = 4n + 12 = 4(n+3)$$\n\nThis is divisible by 4, hence **even**. ✗\n\n**Statement III — $w + z = x + y$:**\n\n$$w + z = n + (n+6) = 2n + 6$$\n\n$$x + y = (n+2) + (n+4) = 2n + 6$$\n\n$2n+6 = 2n+6$ ✓\n\n$$\\boxed{\\text{Statements I and III}}$$"
    },
    {
      "id": "num_004",
      "number": 4,
      "type": "quantitative_comparison",
      "quantity_a": "The sum of all the odd integers from 1 to 100, inclusive",
      "quantity_b": "The sum of all the even integers from 1 to 100, inclusive",
      "answer": "B",
      "explanation": "## Pairing Odds and Evens\n\nThe odd integers from 1 to 99: $1, 3, 5, \\ldots, 99$ — there are 50 of them.\n\nThe even integers from 2 to 100: $2, 4, 6, \\ldots, 100$ — there are 50 of them.\n\nPair them: $(2,1), (4,3), (6,5), \\ldots, (100, 99)$.\n\nEach even exceeds its odd pair by 1:\n\n$$\\text{Sum(even)} - \\text{Sum(odd)} = 50 \\times 1 = 50$$\n\n$$\\text{Sum(even)} > \\text{Sum(odd)} \\implies \\boxed{B}$$\n\n**Alternatively:**\n\n$$\\text{Sum(odd)} = 50^2 = 2{,}500$$\n\n$$\\text{Sum(even)} = 50 \\times 51 = 2{,}550$$\n\n$2{,}550 > 2{,}500$ ✓"
    },
    {
      "id": "num_005",
      "number": 5,
      "type": "quantitative_comparison",
      "context": "$x > 0 > y$",
      "quantity_a": "$x - y$",
      "quantity_b": "$(x + y)^2$",
      "answer": "D",
      "explanation": "## Test Values — Both Outcomes Possible\n\n**Test 1:** $x = 2$, $y = -2$\n\n$$\\text{QA} = 2 - (-2) = 4, \\quad \\text{QB} = (2+(-2))^2 = 0^2 = 0$$\n\nA wins.\n\n**Test 2:** $x = 100$, $y = -1$\n\n$$\\text{QA} = 100 - (-1) = 101, \\quad \\text{QB} = (100-1)^2 = 99^2 = 9{,}801$$\n\nB wins.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "num_006",
      "number": 6,
      "type": "quantitative_comparison",
      "context": "$a < b < c < d < 0$",
      "quantity_a": "$a - d$",
      "quantity_b": "$bc$",
      "answer": "B",
      "explanation": "## Signs When All Variables Are Negative\n\n**Quantity A:** $a - d$ where $a < d < 0$, so $a < d$, meaning $a - d < 0$. **Negative.**\n\n**Quantity B:** $bc$ where $b < 0$ and $c < 0$. Product of two negatives = **positive**.\n\n$$\\text{Positive} > \\text{Negative} \\implies \\boxed{B}$$"
    },
    {
      "id": "num_007",
      "number": 7,
      "type": "numeric_entry",
      "text": "If set $S$ consists of all positive integers that are multiples of both 2 and 7, how many numbers in set $S$ are between 140 and 240, inclusive?",
      "answer": "8",
      "explanation": "## Multiples of LCM — Count Integers in Range\n\nMultiples of both 2 and 7 = multiples of $\\text{LCM}(2,7) = 14$.\n\n**Smallest multiple of 14** $\\geq 140$: $140 = 14 \\times 10$ ✓\n\n**Largest multiple of 14** $\\leq 240$: $238 = 14 \\times 17$ ✓\n\n**Count:**\n\n$$n = 17 - 10 + 1 = \\boxed{8}$$\n\n**List:** $140, 154, 168, 182, 196, 210, 224, 238$ — indeed 8 numbers."
    },
    {
      "id": "num_008",
      "number": 8,
      "type": "quantitative_comparison",
      "context": "$ab > 0$ and $bc < 0$",
      "quantity_a": "$ac$",
      "quantity_b": "$0$",
      "answer": "B",
      "explanation": "## Chain of Sign Deductions\n\n**From $ab > 0$:** $a$ and $b$ have the **same sign**.\n\n**From $bc < 0$:** $b$ and $c$ have **opposite signs**.\n\nTherefore $a$ and $c$ have **opposite signs** (since $a$ matches $b$, and $c$ differs from $b$).\n\n$$ac = (\\text{pos})(\\text{neg}) \\text{ or } (\\text{neg})(\\text{pos}) < 0$$\n\n$$ac < 0 < \\text{Quantity B} \\implies \\boxed{B}$$"
    },
    {
      "id": "num_009",
      "number": 9,
      "type": "quantitative_comparison",
      "context": "$abc < 0$ and $b^2 c > 0$",
      "quantity_a": "$ab$",
      "quantity_b": "$0$",
      "answer": "B",
      "explanation": "## Two Constraints — Deduce Signs Step by Step\n\n**From $b^2 c > 0$:** $b^2 \\geq 0$ always, and for the product to be positive, $c > 0$ (and $b \\neq 0$).\n\n**From $abc < 0$ with $c > 0$:** $ab \\cdot c < 0$ with $c > 0$ → $ab < 0$.\n\n$$ab < 0 \\implies \\text{Quantity A} < 0 < \\text{Quantity B} \\implies \\boxed{B}$$"
    },
    {
      "id": "num_010",
      "number": 10,
      "type": "quantitative_comparison",
      "context": "$a$, $b$, and $c$ are integers such that $a < b < c$.",
      "quantity_a": "$\\dfrac{a + b + c}{3}$",
      "quantity_b": "$b$",
      "answer": "D",
      "explanation": "## Average vs Middle — Not Always Equal\n\n**Equally spaced** (e.g., $1, 2, 3$): average $= 2 = b$. Equal.\n\n**Skewed right** (e.g., $1, 2, 57$): average $= 20 > b = 2$. A wins.\n\n**Skewed left** (e.g., $-57, -1, 0$): average $\\approx -19 < b = -1$. B wins.\n\nAll three outcomes possible:\n\n$$\\boxed{D}$$\n\n> **Rule:** The average equals the median only for symmetric (evenly spaced) distributions. For skewed data, the mean can be anywhere relative to the median."
    },
    {
      "id": "num_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "If $0 < a < \\dfrac{1}{b} < 1$, then which of the following must be true?",
      "options": {
        "A": "$a^2 > a > b > b^2$",
        "B": "$b > a > a^2 > b^2$",
        "C": "$b^2 > a > a^2 > b$",
        "D": "$b^2 > a^2 > b > a$",
        "E": "$b^2 > b > a > a^2$"
      },
      "answer": "E",
      "explanation": "## Chained Inequality — Deduce All Relationships\n\nFrom $0 < a < \\dfrac{1}{b} < 1$:\n\n**Step 1:** $\\dfrac{1}{b} < 1 \\implies b > 1$ (since $b > 0$, flipping preserves this).\n\n**Step 2:** $b > 1 \\implies b^2 > b$ (squaring a number greater than 1 increases it).\n\n**Step 3:** $a < \\dfrac{1}{b} < b$ (since $b > 1 \\implies \\dfrac{1}{b} < 1 < b$), so $a < b$.\n\n**Step 4:** $0 < a < 1 \\implies a^2 < a$ (squaring a fraction between 0 and 1 decreases it).\n\n**Combined order:**\n\n$$a^2 < a < b < b^2$$\n\nReversed (greatest to least): $b^2 > b > a > a^2$\n\n$$\\boxed{E}$$"
    },
    {
      "id": "num_012",
      "number": 12,
      "type": "quantitative_comparison",
      "image": "/number_properties/numpr_012.svg",
      "context": "On a number line: $0 < a < b < c < d$ (all four are distinct positive points).",
      "quantity_a": "$a \\times c$",
      "quantity_b": "$b \\times d$",
      "answer": "B",
      "explanation": "## Products of Positive Numbers — Larger Factors Win\n\nSince $0 < a < b$ and $0 < c < d$:\n\n$$ac < bc < bd$$\n\n(First inequality: $a < b$ with $c > 0$. Second: $c < d$ with $b > 0$.)\n\n$$ac < bd \\implies \\boxed{B}$$\n\n> **General rule:** For positive numbers, if $a < b$ and $c < d$, then $ac < bd$."
    },
    {
      "id": "num_013",
      "number": 13,
      "type": "quantitative_comparison",
      "quantity_a": "The number of distinct positive factors of 32",
      "quantity_b": "The number of distinct positive factors of 20",
      "answer": "C",
      "explanation": "## Counting Factors — Prime Factorisation Method\n\n$$32 = 2^5 \\implies (5+1) = 6 \\text{ factors}: \\{1, 2, 4, 8, 16, 32\\}$$\n\n$$20 = 2^2 \\times 5 \\implies (2+1)(1+1) = 6 \\text{ factors}: \\{1, 2, 4, 5, 10, 20\\}$$\n\nBoth have exactly 6 distinct positive factors.\n\n$$\\boxed{C}$$\n\n> **Formula:** For $n = p_1^{a_1} p_2^{a_2} \\cdots$, the number of factors $= (a_1+1)(a_2+1)\\cdots$"
    },
    {
      "id": "num_014",
      "number": 14,
      "type": "select_all",
      "text": "If $y^2 = 4$ and $x^2 y = 18$, which of the following values could equal $x + y$? Indicate two such values.",
      "options": ["$-5$", "$-1$", "$1$", "$5$", "$6$"],
      "answer": ["$-1$", "$5$"],
      "explanation": "## System of Equations — Two Cases for $y$\n\n**From $y^2 = 4$:** $y = 2$ or $y = -2$.\n\n**Case 1 — $y = -2$:**\n\n$$x^2(-2) = 18 \\implies x^2 = -9$$\n\nImpossible for real $x$. ✗\n\n**Case 2 — $y = 2$:**\n\n$$x^2(2) = 18 \\implies x^2 = 9 \\implies x = 3 \\text{ or } x = -3$$\n\n**Possible values of $x + y$:**\n\n$$x + y = 3 + 2 = 5 \\checkmark$$\n\n$$x + y = -3 + 2 = -1 \\checkmark$$\n\n$$\\boxed{-1 \\text{ and } 5}$$"
    },
    {
      "id": "num_015",
      "number": 15,
      "type": "quantitative_comparison",
      "quantity_a": "The remainder when $10^{11}$ is divided by 2",
      "quantity_b": "The remainder when $3^{13}$ is divided by 3",
      "answer": "C",
      "explanation": "## Divisibility — Both Remainders Are Zero\n\n**Quantity A:** $10^{11}$ is a power of 10, which is even. Any even number divided by 2 gives remainder **0**.\n\n**Quantity B:** $3^{13}$ is a multiple of 3. Any multiple of 3 divided by 3 gives remainder **0**.\n\n$$0 = 0 \\implies \\boxed{C}$$"
    },
    {
      "id": "num_016",
      "number": 16,
      "type": "quantitative_comparison",
      "context": "$q$ is odd.",
      "quantity_a": "$(-1)^q$",
      "quantity_b": "$(-1)^{q+1}$",
      "answer": "B",
      "explanation": "## Powers of $-1$ — Even vs Odd Exponents\n\n$q$ is odd:\n\n$$(-1)^q = -1 \\quad \\text{(odd power)}$$\n\n$q + 1$ is even:\n\n$$(-1)^{q+1} = +1 \\quad \\text{(even power)}$$\n\n$$-1 < 1 \\implies \\boxed{B}$$"
    },
    {
      "id": "num_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "$n$ is a positive integer.",
      "quantity_a": "$(-1)^{4n} \\times (-1)^{202}$",
      "quantity_b": "$3^3 \\times (-5)^5$",
      "answer": "A",
      "explanation": "## Signs — Even Exponents Are Always Positive\n\n**Quantity A:**\n\n$4n$ is even → $(-1)^{4n} = 1$\n\n$202$ is even → $(-1)^{202} = 1$\n\n$$(-1)^{4n} \\times (-1)^{202} = 1 \\times 1 = 1 > 0$$\n\n**Quantity B:**\n\n$3^3 = 27 > 0$ but $(-5)^5 = -3{,}125 < 0$\n\n$$3^3 \\times (-5)^5 = 27 \\times (-3{,}125) < 0$$\n\n$$\\text{Positive} > \\text{Negative} \\implies \\boxed{A}$$"
    },
    {
      "id": "num_018",
      "number": 18,
      "type": "select_all",
      "text": "If $x$ is a positive integer, which of the following could be the remainder when $73^x$ is divided by 10? Indicate all such remainders.",
      "options": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      "answer": ["1", "3", "7", "9"],
      "explanation": "## Units Digit Cycle — Remainder When Divided by 10\n\nThe remainder when divided by 10 equals the **units digit**.\n\nThe units digit of $73^x$ is the same as the units digit of $3^x$ (only the units digit of the base matters).\n\nUnits digit of powers of 3 (cycle length = 4):\n\n| $x$ | $3^x$ units digit |\n|-----|-------------------|\n| 1 | **3** |\n| 2 | **9** |\n| 3 | **7** |\n| 4 | **1** |\n| 5 | **3** ← repeats |\n\nPossible remainders: $\\{1, 3, 7, 9\\}$\n\n$$\\boxed{1, 3, 7, 9}$$"
    },
    {
      "id": "num_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "If $x$, $y$, and $z$ are integers, $y + z = 13$, and $xz = 9$, which of the following must be true?",
      "options": {
        "A": "$x$ is even",
        "B": "$x = 3$",
        "C": "$y$ is odd",
        "D": "$y > 3$",
        "E": "$z < x$"
      },
      "answer": "D",
      "explanation": "## Parity Deduction + Range Constraint\n\n**From $xz = 9$:** Both $x$ and $z$ are integers with $xz = 9$. Factor pairs: $(1,9), (3,3), (9,1), (-1,-9), (-3,-3), (-9,-1)$. All factors of 9 are **odd**, so $x$ and $z$ are both odd.\n\n**From $y + z = 13$ (odd) with $z$ odd:** $y$ must be **even** (odd + even = odd; even + odd = odd ✓).\n\n**Range of $z$:** Integer factors of 9: $z \\in \\{-9, -3, -1, 1, 3, 9\\}$. Maximum $|z| = 9$, so minimum $y = 13 - 9 = 4 > 3$. Also $z = 9$ gives $y = 4$, $z = 3$ gives $y = 10$, etc. In all valid cases, $y \\geq 4 > 3$.\n\n$$\\boxed{D: y > 3}$$"
    },
    {
      "id": "num_020",
      "number": 20,
      "type": "quantitative_comparison",
      "quantity_a": "The least prime number greater than 13",
      "quantity_b": "The greatest prime number less than 16",
      "answer": "A",
      "explanation": "## Identifying Primes Near Given Values\n\n**Least prime $> 13$:**\n\n- 14 = $2 \\times 7$ ✗\n- 15 = $3 \\times 5$ ✗\n- **17** is prime ✓\n\n**Greatest prime $< 16$:**\n\n- 15 = $3 \\times 5$ ✗\n- 14 = $2 \\times 7$ ✗\n- **13** is prime ✓\n\n$$17 > 13 \\implies \\boxed{A}$$"
    },
    {
      "id": "num_021",
      "number": 21,
      "type": "numeric_entry",
      "text": "The average (arithmetic mean) of 11 integers is 35. What is the sum of all the integers?",
      "answer": "385",
      "explanation": "## Average × Count = Sum\n\n$$\\text{Sum} = \\text{Average} \\times n = 35 \\times 11 = \\boxed{385}$$"
    },
    {
      "id": "num_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "What is the sum of all the integers from 1 to 80, inclusive?",
      "options": { "A": "3,200", "B": "3,210", "C": "3,230", "D": "3,240", "E": "3,450" },
      "answer": "D",
      "explanation": "## Gauss Sum Formula\n\n$$S = \\frac{n(n+1)}{2} = \\frac{80 \\times 81}{2} = 40 \\times 81 = \\boxed{3{,}240}$$\n\n**Alternative — pair method:** Pair $1 + 80 = 81$, $2 + 79 = 81$, ..., making 40 pairs:\n\n$$40 \\times 81 = 3{,}240$$"
    },
    {
      "id": "num_023",
      "number": 23,
      "type": "numeric_entry",
      "text": "If $p$ is the sum of all the integers from 1 to 150, inclusive, and $q$ is the sum of all the integers from 1 to 148, inclusive, what is the value of $p - q$?",
      "answer": "299",
      "explanation": "## Difference of Two Sums — Only the Extra Terms Matter\n\n$$p - q = \\text{(sum 1 to 150)} - \\text{(sum 1 to 148)} = 149 + 150 = \\boxed{299}$$\n\nAll terms from 1 to 148 cancel. Only 149 and 150 remain."
    },
    {
      "id": "num_024",
      "number": 24,
      "type": "numeric_entry",
      "text": "If $m$ is the product of all the integers from 2 to 11, inclusive, and $n$ is the product of all the integers from 4 to 11, inclusive, what is the value of $n/m$? Give your answer as a fraction.",
      "answer": "1/6",
      "explanation": "## Ratio of Products — Cancel Common Factors\n\n$$m = 2 \\times 3 \\times 4 \\times 5 \\times \\cdots \\times 11$$\n\n$$n = 4 \\times 5 \\times 6 \\times \\cdots \\times 11$$\n\n$$\\frac{n}{m} = \\frac{4 \\times 5 \\times \\cdots \\times 11}{2 \\times 3 \\times 4 \\times 5 \\times \\cdots \\times 11} = \\frac{1}{2 \\times 3} = \\boxed{\\frac{1}{6}}$$"
    },
    {
      "id": "num_025",
      "number": 25,
      "type": "quantitative_comparison",
      "context": "$a$, $b$, and $c$ are positive even integers such that $8 > a > b > c$.",
      "quantity_a": "The range of $a$, $b$, and $c$",
      "quantity_b": "The average (arithmetic mean) of $a$, $b$, and $c$",
      "answer": "C",
      "explanation": "## Constrained Even Integers — Only One Possibility\n\nPositive even integers below 8: $\\{2, 4, 6\\}$.\n\nSince $a > b > c$ and all must be from this set:\n\n$$a = 6, \\quad b = 4, \\quad c = 2$$\n\n$$\\text{Range} = a - c = 6 - 2 = 4$$\n\n$$\\text{Average} = \\frac{6 + 4 + 2}{3} = \\frac{12}{3} = 4$$\n\n$$4 = 4 \\implies \\boxed{C}$$"
    },
    {
      "id": "num_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "If $x$ is a non-zero integer and $0 < y < 1$, which of the following must be greater than 1?",
      "options": { "A": "$x$", "B": "$x/y$", "C": "$xy^2$", "D": "$x^2 y$", "E": "$x^2/y$" },
      "answer": "E",
      "explanation": "## Division by a Fraction Less Than 1 — Always Enlarges\n\n**Key:** $0 < y < 1$ means $1/y > 1$. For any nonzero integer $x$: $x^2 \\geq 1$.\n\n$$\\frac{x^2}{y} = x^2 \\times \\frac{1}{y} \\geq 1 \\times 1 = 1$$\n\nSince $x \\neq 0$, $x^2 \\geq 1$ and $1/y > 1$, so $x^2/y > 1$. **Always.**\n\n$$\\boxed{E}$$\n\n**Why others fail:**\n- A: $x$ could be $-1 < 1$.\n- B: $x/y$ is negative if $x < 0$.\n- C, D: $xy^2$ or $x^2 y$ with $y < 1$ can be $< 1$."
    },
    {
      "id": "num_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "$a$, $b$, and $c$ are consecutive integers such that $a < b < c < 4$.",
      "quantity_a": "The range of $a$, $b$, and $c$",
      "quantity_b": "The average of $a$, $b$, and $c$",
      "answer": "D",
      "explanation": "## Range vs Average — Range Is Fixed But Average Varies\n\nFor **any** three consecutive integers $\\{n, n+1, n+2\\}$:\n\n$$\\text{Range} = (n+2) - n = 2 \\quad \\text{(always 2)}$$\n\n$$\\text{Average} = n + 1 \\quad \\text{(the middle term)}$$\n\n- If $n+1 = 2$ (e.g., $1,2,3$): average $= 2 =$ range. Equal.\n- If $n+1 = 100$ (e.g., $99,100,101$): average $= 100 >$ range $= 2$. B wins.\n- If $n+1 = -10$ (e.g., $-11,-10,-9$): average $= -10 <$ range $= 2$. A wins.\n\nAll three outcomes possible:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "num_028",
      "number": 28,
      "type": "quantitative_comparison",
      "context": "$\\sqrt{xy}$ is a prime number, $xy$ is even, and $x > 4y > 0$.",
      "quantity_a": "$y$",
      "quantity_b": "$1$",
      "answer": "B",
      "explanation": "## Constrained System — Find the Only Valid Solution\n\n$\\sqrt{xy}$ is prime → $xy$ is a perfect square of a prime → $xy = p^2$ for some prime $p$.\n\n$xy$ is even → $p$ must be the only even prime: $p = 2$, so $xy = 4$.\n\n**With $xy = 4$ and $x > 4y > 0$:**\n\n$$x > 4y \\implies \\frac{4}{y} > 4y \\implies 1 > y^2 \\implies y < 1$$\n\n(since $y > 0$: $0 < y < 1$)\n\n$$y < 1 \\implies \\text{Quantity B is greater} \\implies \\boxed{B}$$"
    },
    {
      "id": "num_029",
      "number": 29,
      "type": "quantitative_comparison",
      "context": "$x$ is even, $\\sqrt{x}$ is a prime number, and $x + y = 11$.",
      "quantity_a": "$x$",
      "quantity_b": "$y$",
      "answer": "B",
      "explanation": "## Only Even Prime — $\\sqrt{x} = 2 \\Rightarrow x = 4$\n\nThe only even prime is 2. So:\n\n$$\\sqrt{x} = 2 \\implies x = 4$$\n\n$$x + y = 11 \\implies y = 11 - 4 = 7$$\n\n**Compare:** Quantity A $= 4$, Quantity B $= 7$.\n\n$$4 < 7 \\implies \\boxed{B}$$"
    },
    {
      "id": "num_030",
      "number": 30,
      "type": "quantitative_comparison",
      "context": "The product of positive integers $f$, $g$, and $h$ is even and the product of integers $f$ and $g$ is odd.",
      "quantity_a": "The remainder when $f$ is divided by 2",
      "quantity_b": "The remainder when $h$ is divided by 2",
      "answer": "A",
      "explanation": "## Parity Deduction from Products\n\n**From $fg$ is odd:** Both $f$ and $g$ must be **odd** (product of integers is odd only if all factors are odd).\n\n**From $fgh$ is even with $fg$ odd:** $h$ must be **even** (odd × even = even).\n\n**Remainders when divided by 2:**\n\n- $f$ is odd → remainder $= 1$\n- $h$ is even → remainder $= 0$\n\n$$1 > 0 \\implies \\boxed{A}$$"
    },
    {
      "id": "num_031",
      "number": 31,
      "type": "quantitative_comparison",
      "context": "$x^2 > 25$ and $x + y < 0$",
      "quantity_a": "$x$",
      "quantity_b": "$y$",
      "answer": "D",
      "explanation": "## Two Constraints — Multiple Cases\n\nFrom $x^2 > 25$: $x > 5$ or $x < -5$.\n\n**Case 1:** $x = 6$, $y < -6$ (e.g., $y = -10$): $x = 6 > y = -10$. A wins.\n\n**Case 2:** $x = -6$, $y < 6$ (e.g., $y = 5$): $x = -6 < y = 5$. B wins.\n\nBoth outcomes possible:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "num_032",
      "number": 32,
      "type": "quantitative_comparison",
      "context": "$p$ and $w$ are single-digit prime numbers such that $p + w < 6$. $p^2$ is odd.",
      "quantity_a": "$w$",
      "quantity_b": "$3$",
      "answer": "B",
      "explanation": "## Narrowing Primes with Constraints\n\n**From $p^2$ is odd:** $p$ must be odd → $p$ is an odd prime. Single-digit odd primes: $3, 5, 7$.\n\n**From $p + w < 6$ with $p$ odd prime:**\n\n- If $p = 5$: $w < 1$ — no positive prime possible.\n- If $p = 7$: $w < -1$ — impossible.\n- If $p = 3$: $w < 3$ — single-digit prime $< 3$ → $w = 2$.\n\nSo $p = 3$, $w = 2$.\n\n$$w = 2 < 3 \\implies \\boxed{B}$$"
    },
    {
      "id": "num_033",
      "number": 33,
      "type": "quantitative_comparison",
      "context": "$x^2 > y^2$ and $x > -|y|$",
      "quantity_a": "$x$",
      "quantity_b": "$y$",
      "answer": "A",
      "explanation": "## Two Constraints — Pin Down the Sign and Magnitude\n\n**From $x^2 > y^2$:** $|x| > |y|$.\n\n**From $x > -|y|$:** This eliminates the case where $x$ is large and negative (e.g., $x = -5$, $|y| = 3$: $-5 > -3$ is false).\n\nSo $x$ must be positive with $|x| > |y|$:\n\n$$x > 0 \\geq -|y|, \\text{ and } |x| > |y| \\implies x > |y| \\geq y$$\n\nIn all valid cases, $x > y$:\n\n$$\\boxed{A}$$"
    },
    {
      "id": "num_034",
      "number": 34,
      "type": "quantitative_comparison",
      "context": "The sum of four consecutive integers is $-2$.",
      "quantity_a": "The smallest of the four integers",
      "quantity_b": "$-2$",
      "answer": "C",
      "explanation": "## Consecutive Integers — Solve for the Smallest\n\nLet the four consecutive integers be $n, n+1, n+2, n+3$:\n\n$$n + (n+1) + (n+2) + (n+3) = -2$$\n\n$$4n + 6 = -2 \\implies 4n = -8 \\implies n = -2$$\n\nThe smallest integer is $n = -2$.\n\n$$-2 = -2 \\implies \\boxed{C}$$"
    },
    {
      "id": "num_035",
      "number": 35,
      "type": "select_all",
      "text": "If $g$ is an integer and $x$ is a prime number, which of the following must be an integer? Indicate all such expressions.",
      "options": [
        "$\\dfrac{g^2 x + 5gx}{x}$",
        "$g^2 - x^2 \\cdot \\dfrac{1}{3}$",
        "$6 \\cdot \\dfrac{g}{2} - 100 \\left(\\dfrac{g}{2}\\right)^2$"
      ],
      "answer": ["$\\dfrac{g^2 x + 5gx}{x}$"],
      "explanation": "## Must Be an Integer — Test Each Expression\n\n**Option 1:** $\\dfrac{g^2 x + 5gx}{x}$\n\nFactor out $x$ from the numerator:\n\n$$\\frac{x(g^2 + 5g)}{x} = g^2 + 5g$$\n\nSince $g$ is an integer, $g^2$ and $5g$ are integers, so $g^2 + 5g$ is always an integer. ✓\n\n**Option 2:** $g^2 - \\dfrac{x^2}{3}$\n\n$x^2/3$ is an integer only if $3 \\mid x^2$, i.e., $3 \\mid x$, i.e., $x = 3$. For other primes (e.g., $x = 5$), $25/3$ is not an integer. ✗ Not always an integer.\n\n**Option 3:** $6 \\cdot \\dfrac{g}{2} - 100 \\left(\\dfrac{g}{2}\\right)^2$\n\nIf $g$ is odd, $g/2$ is not an integer, making this expression non-integer. ✗\n\n$$\\boxed{\\text{Option 1 only}}$$"
    }
  ]
}
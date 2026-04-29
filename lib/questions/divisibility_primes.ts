export const DivisibilityPrimes = {
  "chapter": 13,
  "topic": "Divisibility and Primes",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "div_001",
      "number": 1,
      "type": "numeric_entry",
      "text": "For how many positive integer values of x is 65/x an integer?",
      "answer": 4,
      "explanation": "## Counting Factors\n\nFor $\\frac{65}{x}$ to be an integer, $x$ must be a **positive factor** of $65$.\n\n**Step 1 — Prime factorize $65$:**\n\n$$65 = 5 \\times 13$$\n\n**Step 2 — Count factors using the formula:**\n\nIf $n = p^a \\times q^b$, the number of factors is $(a+1)(b+1)$.\n\n$$65 = 5^1 \\times 13^1 \\implies (1+1)(1+1) = 4 \\text{ factors}$$\n\n**Step 3 — List them:**\n\n$$1,\\ 5,\\ 13,\\ 65$$\n\n$$\\boxed{4}$$"
    },
    {
      "id": "div_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "If x is a number such that 0 < x ≤ 20, for how many values of x is 20/x an integer?",
      "options": { "A": "Four", "B": "Six", "C": "Eight", "D": "Ten", "E": "More than ten" },
      "answer": "E",
      "explanation": "## x Is a Number, Not an Integer\n\nThe key word is **number**, not *integer*. $x$ can be any positive real number.\n\nFor $\\frac{20}{x}$ to be an integer $n$, we need $x = \\frac{20}{n}$ for any positive integer $n$.\n\nSome valid values of $x$ (with $0 < x \\leq 20$):\n\n| $n$ | $x = 20/n$ | Valid? |\n|-----|-----------|--------|\n| 1 | 20 | ✓ |\n| 2 | 10 | ✓ |\n| 4 | 5 | ✓ |\n| 8 | 2.5 | ✓ |\n| 40 | 0.5 | ✓ |\n| 100 | 0.2 | ✓ |\n| 200 | 0.1 | ✓ |\n| $\\ldots$ | $\\ldots$ | ✓ |\n\nAs $n \\to \\infty$, $x = \\frac{20}{n} \\to 0^+$, always staying in $(0, 20]$. There are **infinitely many** valid values.\n\n$$\\boxed{E: \\ \\text{More than ten}}$$"
    },
    {
      "id": "div_003",
      "number": 3,
      "type": "quantitative_comparison",
      "quantity_a": "The number of distinct positive factors of 10",
      "quantity_b": "The number of distinct prime factors of 210",
      "answer": "C",
      "explanation": "## Factors vs. Prime Factors\n\n**Quantity A — All positive factors of $10$:**\n\n$$10 = 2 \\times 5$$\n\nFactors: $1, 2, 5, 10$ → **4 factors**\n\n**Quantity B — Prime factors only of $210$:**\n\n$$210 = 2 \\times 3 \\times 5 \\times 7$$\n\nDistinct primes: $\\{2, 3, 5, 7\\}$ → **4 prime factors**\n\n---\n\n> **Note the distinction:** Quantity A asks for ALL positive factors (including $1$ and composites). Quantity B asks only for PRIME factors. Here they both equal $4$ — a coincidence built into the problem.\n\n$$4 = 4 \\implies \\boxed{C}$$"
    },
    {
      "id": "div_004",
      "number": 4,
      "type": "quantitative_comparison",
      "quantity_a": "The least common multiple of 22 and 6",
      "quantity_b": "The greatest common factor of 66 and 99",
      "answer": "A",
      "explanation": "## LCM and GCF via Prime Factorization\n\n**Quantity A — LCM(22, 6):**\n\n$$22 = 2 \\times 11, \\quad 6 = 2 \\times 3$$\n\nLCM takes the **highest** power of each prime:\n\n$$\\text{LCM} = 2 \\times 3 \\times 11 = 66$$\n\n**Quantity B — GCF(66, 99):**\n\n$$66 = 2 \\times 3 \\times 11, \\quad 99 = 3^2 \\times 11$$\n\nGCF takes the **lowest** power of each **shared** prime:\n\n$$\\text{GCF} = 3 \\times 11 = 33$$\n\n---\n\n$$66 > 33 \\implies \\boxed{A}$$"
    },
    {
      "id": "div_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "The number of students who attend a school could be divided among 10, 12, or 16 buses, such that each bus transports an equal number of students. What is the minimum number of students that could attend the school?",
      "options": { "A": "120", "B": "160", "C": "240", "D": "320", "E": "480" },
      "answer": "C",
      "explanation": "## LCM = Minimum Shared Multiple\n\nThe student count must be divisible by all three: $10$, $12$, and $16$. The minimum such number is their LCM.\n\n**Prime factorize:**\n\n$$10 = 2 \\times 5, \\quad 12 = 2^2 \\times 3, \\quad 16 = 2^4$$\n\n**LCM = highest power of each prime:**\n\n$$\\text{LCM} = 2^4 \\times 3 \\times 5 = 16 \\times 15 = 240$$\n\n**Verify:**\n\n$$240 \\div 10 = 24 \\checkmark, \\quad 240 \\div 12 = 20 \\checkmark, \\quad 240 \\div 16 = 15 \\checkmark$$\n\n$$\\boxed{C: \\ 240}$$"
    },
    {
      "id": "div_006",
      "number": 6,
      "type": "quantitative_comparison",
      "quantity_a": "The number of distinct prime factors of 27",
      "quantity_b": "The number of distinct prime factors of 18",
      "answer": "B",
      "explanation": "## Exponents Don't Create New Primes\n\n**Quantity A — Prime factors of $27$:**\n\n$$27 = 3^3$$\n\nOnly one distinct prime: $\\{3\\}$ → count $= 1$\n\n**Quantity B — Prime factors of $18$:**\n\n$$18 = 2 \\times 3^2$$\n\nTwo distinct primes: $\\{2, 3\\}$ → count $= 2$\n\n---\n\n> **Key:** $3^3$ is still just **one** distinct prime. The exponent tells you how many times $3$ appears, but the set of distinct primes is still $\\{3\\}$ — size $1$.\n\n$$1 < 2 \\implies \\boxed{B}$$"
    },
    {
      "id": "div_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "How many factors greater than 1 do 120, 210, and 270 have in common?",
      "options": { "A": "One", "B": "Three", "C": "Six", "D": "Seven", "E": "Thirty" },
      "answer": "D",
      "explanation": "## Common Factors = Factors of the GCF\n\n**Step 1 — Find GCF(120, 210, 270):**\n\n$$120 = 2^3 \\times 3 \\times 5$$\n$$210 = 2 \\times 3 \\times 5 \\times 7$$\n$$270 = 2 \\times 3^3 \\times 5$$\n\n$$\\text{GCF} = 2^1 \\times 3^1 \\times 5^1 = 30$$\n\n**Step 2 — Count factors of 30 greater than 1:**\n\nAll factors of $30$: $1, 2, 3, 5, 6, 10, 15, 30$\n\nFactors greater than $1$: $2, 3, 5, 6, 10, 15, 30$ → **7 factors**\n\n---\n\n> **Rule:** Every common factor of multiple numbers must divide their GCF, and every factor of the GCF is a common factor.\n\n$$\\boxed{D: \\ \\text{Seven}}$$"
    },
    {
      "id": "div_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "Company H distributed $4,000 and 180 pencils evenly among its employees, with each employee getting an equal integer number of dollars and an equal integer number of pencils. What is the greatest number of employees that could work for company H?",
      "options": { "A": "9", "B": "10", "C": "20", "D": "40", "E": "180" },
      "answer": "C",
      "explanation": "## GCF = Maximum Number of Groups\n\nThe number of employees must divide **both** $4{,}000$ and $180$. The greatest such divisor is GCF$(4000, 180)$.\n\n**Prime factorize:**\n\n$$4{,}000 = 2^5 \\times 5^3$$\n$$180 = 2^2 \\times 3^2 \\times 5$$\n\n**GCF = lowest powers of shared primes:**\n\n$$\\text{GCF} = 2^2 \\times 5 = 4 \\times 5 = 20$$\n\n**Verify:**\n\n$$4{,}000 \\div 20 = \\$200 \\text{ per employee} \\checkmark$$\n$$180 \\div 20 = 9 \\text{ pencils per employee} \\checkmark$$\n\n$$\\boxed{C: \\ 20}$$"
    },
    {
      "id": "div_009",
      "number": 9,
      "type": "select_all",
      "text": "n is divisible by 14 and 3. Which of the following statements must be true? Indicate all such statements.",
      "options": ["12 is a factor of n", "21 is a factor of n", "n is a multiple of 42"],
      "answer": ["21 is a factor of n", "n is a multiple of 42"],
      "explanation": "## LCM Gives the Guaranteed Prime Content\n\n$n$ is divisible by $14 = 2 \\times 7$ and $3$.\n\n$$\\text{LCM}(14, 3) = 2 \\times 3 \\times 7 = 42$$\n\nSo $n$'s prime factorization contains **at least**: one $2$, one $3$, one $7$.\n\n---\n\n**① \"12 is a factor of $n$\":**\n\n$12 = 2^2 \\times 3$ requires **two** factors of $2$. $n$ only guarantees **one** factor of $2$.\n\nCounterexample: $n = 42$. $42 \\div 12 = 3.5$ — not an integer. ✗\n\n**② \"21 is a factor of $n$\":**\n\n$21 = 3 \\times 7$. $n$ has at least one $3$ and one $7$. So $21 \\mid n$. ✓\n\n**③ \"$n$ is a multiple of $42$\":**\n\nLCM$(14, 3) = 42$, so $n$ must be a multiple of $42$. ✓\n\n$$\\boxed{\\text{Statements ② and ③}}$$"
    },
    {
      "id": "div_010",
      "number": 10,
      "type": "numeric_entry",
      "text": "Positive integers a and b each have exactly four positive factors. If a is a one-digit number and b = a + 9, what is the value of a?",
      "answer": 6,
      "explanation": "## Numbers with Exactly 4 Factors\n\nA positive integer has exactly 4 factors in two cases:\n\n$$\\text{Form 1: } p^3 \\quad (\\text{factors: } 1, p, p^2, p^3)$$\n$$\\text{Form 2: } p \\times q \\quad (\\text{distinct primes, factors: } 1, p, q, pq)$$\n\n**One-digit numbers with 4 factors:**\n\n- $6 = 2 \\times 3$ → factors: $1, 2, 3, 6$ ✓\n- $8 = 2^3$ → factors: $1, 2, 4, 8$ ✓\n\n**Check $b = a + 9$:**\n\n- $a = 6$: $b = 15 = 3 \\times 5$ → factors: $1, 3, 5, 15$ → **4 factors** ✓\n- $a = 8$: $b = 17$ → prime, only $2$ factors ✗\n\n$$\\boxed{a = 6}$$"
    },
    {
      "id": "div_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "Ramon wants to cut a rectangular board into identical square pieces. If the board is 18 inches by 30 inches, what is the least number of square pieces he can cut without wasting any of the board?",
      "options": { "A": "4", "B": "6", "C": "9", "D": "12", "E": "15" },
      "answer": "E",
      "explanation": "## GCF = Largest Square Size → Minimum Count\n\nFor squares to tile the board perfectly, their side must divide both $18$ and $30$. To minimize the **count**, maximize the **side length** → use the GCF.\n\n**GCF(18, 30):**\n\n$$18 = 2 \\times 3^2, \\quad 30 = 2 \\times 3 \\times 5$$\n\n$$\\text{GCF} = 2 \\times 3 = 6$$\n\nSo each square is $6 \\times 6$ inches.\n\n**Number of squares:**\n\n$$\\frac{18}{6} \\times \\frac{30}{6} = 3 \\times 5 = 15$$\n\n$$\\boxed{E: \\ 15}$$"
    },
    {
      "id": "div_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "When the positive integer x is divided by 6, the remainder is 4. Each of the following could also be an integer EXCEPT x divided by which of the following?",
      "options": { "A": "x/2", "B": "x/3", "C": "x/7", "D": "x/11", "E": "x/17" },
      "answer": "B",
      "explanation": "## Remainder Analysis — What's Impossible?\n\n$x = 6k + 4$ for some non-negative integer $k$.\n\nSample values: $4, 10, 16, 22, 28, 34, \\ldots$\n\n**Key insight:** Modulo $3$:\n\n$$x = 6k + 4 \\equiv 0 + 1 \\equiv 1 \\pmod{3}$$\n\nSo $x$ always leaves remainder $1$ when divided by $3$ — it **can never be divisible by $3$**.\n\n**Check the others can work:**\n\n- $x/2$: $x = 10 = 2 \\times 5$ ✓\n- $x/7$: $x = 28 = 7 \\times 4$ ✓\n- $x/11$: $x = 22 = 11 \\times 2$ ✓\n- $x/17$: $x = 34 = 17 \\times 2$ ✓\n\n> Only $x/3$ can **never** be an integer, because $x \\equiv 1 \\pmod{3}$ always.\n\n$$\\boxed{B: \\ x/3}$$"
    },
    {
      "id": "div_013",
      "number": 13,
      "type": "select_all",
      "text": "If xʸ = 64 and x and y are positive integers, which of the following could be the value of x + y? Indicate all such values.",
      "options": ["2", "6", "7", "8", "10", "12"],
      "answer": ["7", "8", "10"],
      "explanation": "## All Integer Representations of 64 as a Power\n\nFind all ways to write $64 = x^y$ with positive integers $x, y$:\n\n$$2^6 = 64 \\implies x + y = 8 \\checkmark$$\n$$4^3 = 64 \\implies x + y = 7 \\checkmark$$\n$$8^2 = 64 \\implies x + y = 10 \\checkmark$$\n$$64^1 = 64 \\implies x + y = 65 \\text{ (not in options)}$$\n\n**Check remaining options:**\n\n- $x+y=2$: only $1^1=1 \\neq 64$ ✗\n- $x+y=6$: try $2^4=16$, $3^3=27$, $4^2=16$, $5^1=5$ — none equal $64$ ✗\n- $x+y=12$: $2^{10}=1024$, none work ✗\n\n$$\\boxed{7, \\ 8, \\ 10}$$"
    },
    {
      "id": "div_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "If k is a multiple of 24 but not a multiple of 16, which of the following cannot be an integer?",
      "options": { "A": "k/8", "B": "k/9", "C": "k/32", "D": "k/36", "E": "k/81" },
      "answer": "C",
      "explanation": "## Exact Factor Content\n\n$k$ is a multiple of $24 = 2^3 \\times 3$, so $k$ has **at least** three $2$'s and one $3$.\n\n$k$ is NOT a multiple of $16 = 2^4$, so $k$ has **exactly** three $2$'s.\n\n**Test each option:**\n\n- **A** ($k/8 = k/2^3$): $k$ has exactly $2^3$ → $k/8$ is an integer ✓\n- **B** ($k/9 = k/3^2$): $k$ could have two or more $3$'s (e.g., $k=72=2^3 \\times 3^2$). $72/9=8$ ✓\n- **C** ($k/32 = k/2^5$): needs five $2$'s; $k$ has exactly three. **Can never be an integer.** ✗\n- **D** ($k/36 = k/(2^2 \\times 3^2)$): $k=72$, $72/36=2$ ✓\n- **E** ($k/81 = k/3^4$): $k$ could be $24 \\times 81$, making $k/81=24$ ✓\n\n$$\\boxed{C: \\ k/32}$$"
    },
    {
      "id": "div_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "If a = 16b and b is a prime number greater than 2, how many positive distinct factors does a have?",
      "answer": 10,
      "explanation": "## Factor Count Formula\n\n$16 = 2^4$ and $b$ is an odd prime (since $b > 2$), so $b \\neq 2$.\n\nTherefore $b$ introduces a **new** prime factor:\n\n$$a = 2^4 \\times b^1$$\n\n**Number of factors:**\n\n$$\\text{Factors} = (4+1)(1+1) = 5 \\times 2 = 10$$\n\n**Verify with $b = 3$:** $a = 48 = 2^4 \\times 3$.\n\nFactors: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$ → $10$ factors ✓\n\n> The answer is the same for any odd prime $b$, because $b$ always contributes exactly one new prime.\n\n$$\\boxed{10}$$"
    },
    {
      "id": "div_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "If a and b are integers such that a > b > 1, which of the following cannot be a multiple of either a or b?",
      "options": { "A": "a – 1", "B": "b + 1", "C": "b – 1", "D": "a + b", "E": "ab" },
      "answer": "C",
      "explanation": "## The Value $b - 1$ Is Too Small\n\nSince $b > 1$, we have $b \\geq 2$, so $b - 1 \\geq 1$.\n\nA positive multiple of $b$ must be $\\geq b$. But $b - 1 < b$, so $b - 1$ **cannot be a positive multiple of $b$**.\n\nSince $a > b > 1$, we also have $a \\geq 3$ and $b - 1 < b < a$, so $b - 1$ cannot be a multiple of $a$ either.\n\n**Check others can work:**\n\n- **A** ($a - 1$): if $a=3, b=2$: $a-1=2=b$ ✓\n- **B** ($b+1$): if $a=3, b=2$: $b+1=3=a$ ✓\n- **D** ($a+b$): if $a=3, b=3$ — but $a > b$ required. Try $a=6, b=3$: $a+b=9=3b$ ✓\n- **E** ($ab$): always a multiple of both $a$ and $b$ ✓\n\n$$\\boxed{C: \\ b - 1}$$"
    },
    {
      "id": "div_017",
      "number": 17,
      "type": "numeric_entry",
      "text": "616 divided by 6 yields remainder p, and 525 divided by 11 yields remainder q. What is p + q?",
      "answer": 12,
      "explanation": "## Finding Remainders\n\n**Find $p$ (remainder when $616 \\div 6$):**\n\n$$616 = 6 \\times 102 + r$$\n$$6 \\times 102 = 612$$\n$$616 - 612 = 4 \\implies p = 4$$\n\n**Find $q$ (remainder when $525 \\div 11$):**\n\n$$525 = 11 \\times 47 + r$$\n$$11 \\times 47 = 517$$\n$$525 - 517 = 8 \\implies q = 8$$\n\n$$p + q = 4 + 8 = 12$$\n\n**Verify:** $6 \\times 102 + 4 = 616$ ✓ and $11 \\times 47 + 8 = 525$ ✓\n\n$$\\boxed{12}$$"
    },
    {
      "id": "div_018",
      "number": 18,
      "type": "select_all",
      "text": "If x is divisible by 18 and y is divisible by 12, which of the following statements must be true? Indicate all such statements.",
      "options": ["x + y is divisible by 6", "xy is divisible by 48", "x/y is divisible by 6"],
      "answer": ["x + y is divisible by 6"],
      "explanation": "## What's Guaranteed vs. Possible?\n\n$x = 18a = 2 \\times 3^2 \\times a$ and $y = 12b = 2^2 \\times 3 \\times b$.\n\n**① \"$x + y$ is divisible by $6$\":**\n\n$$18a = 6(3a) \\implies 6 \\mid x$$\n$$12b = 6(2b) \\implies 6 \\mid y$$\n$$6 \\mid (x + y) \\checkmark \\quad \\text{MUST be true}$$\n\n**② \"$xy$ is divisible by $48 = 2^4 \\times 3$\":**\n\n$x$ contributes at least $2^1$, $y$ contributes at least $2^2$. Total: at least $2^3$ — but $48$ needs $2^4$.\n\nCounterexample: $x=18, y=12 \\implies xy = 216 = 2^3 \\times 3^3$. $216 / 48 = 4.5$ ✗\n\n**③ \"$x/y$ is divisible by $6$\":**\n\n$x/y$ may not even be an integer. $x=18, y=12 \\implies 18/12 = 1.5$ ✗\n\n$$\\boxed{\\text{Only statement ①}}$$"
    },
    {
      "id": "div_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "If p is divisible by 7 and q is divisible by 6, pq must have at least how many factors greater than 1?",
      "options": { "A": "One", "B": "Three", "C": "Six", "D": "Seven", "E": "Eight" },
      "answer": "D",
      "explanation": "## Minimum Factor Count — Use Smallest Values\n\nTo minimize the factors of $pq$, use the **smallest** possible values.\n\n$$p = 7, \\quad q = 6 = 2 \\times 3$$\n\n$$pq = 42 = 2 \\times 3 \\times 7$$\n\n**All factors of $42$:**\n\n$$1, 2, 3, 6, 7, 14, 21, 42 \\implies 8 \\text{ total factors}$$\n\n**Factors greater than $1$:**\n\n$$2, 3, 6, 7, 14, 21, 42 \\implies \\mathbf{7} \\text{ factors}$$\n\nAny larger $p$ or $q$ would only add more factors, so $7$ is the minimum.\n\n$$\\boxed{D: \\ \\text{Seven}}$$"
    },
    {
      "id": "div_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "If r is divisible by 10 and s is divisible by 9, rs must have at least how many positive factors?",
      "options": { "A": "Two", "B": "Four", "C": "Twelve", "D": "Fourteen", "E": "Sixteen" },
      "answer": "C",
      "explanation": "## Minimum Factor Count — Factor Formula\n\nUse the smallest values:\n\n$$r = 10 = 2 \\times 5, \\quad s = 9 = 3^2$$\n\n$$rs = 90 = 2 \\times 3^2 \\times 5$$\n\n**Factor count formula:**\n\n$$(1+1)(2+1)(1+1) = 2 \\times 3 \\times 2 = 12$$\n\n**List factors:** $1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90$ → $12$ factors ✓\n\n$$\\boxed{C: \\ \\text{Twelve}}$$"
    },
    {
      "id": "div_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "If t is divisible by 12, what is the least possible integer value of a for which t²/2ᵃ might not be an integer?",
      "options": { "A": "2", "B": "3", "C": "4", "D": "5", "E": "6" },
      "answer": "D",
      "explanation": "## Tracking Exact Powers of 2\n\n$t$ is divisible by $12 = 2^2 \\times 3$. So $t$ has **at least** two factors of $2$ — but could have exactly two.\n\n**Use $t = 12 = 2^2 \\times 3$ (minimum factors of 2):**\n\n$$t^2 = 144 = 2^4 \\times 3^2$$\n\n$t^2$ has exactly **four** factors of $2$.\n\nFor $t^2 / 2^a$ to be an integer, we need $a \\leq 4$.\n\nFor $a = 5$:\n\n$$\\frac{144}{2^5} = \\frac{144}{32} = 4.5 \\quad \\text{(not an integer!)}$$\n\nSo $a = 5$ is the **least** value where $t^2/2^a$ might not be an integer.\n\n$$\\boxed{D: \\ 5}$$"
    },
    {
      "id": "div_022",
      "number": 22,
      "type": "select_all",
      "text": "If a, b, and c are multiples of 3 such that a > b > c > 0, which of the following values must be divisible by 3? Indicate all such values.",
      "options": ["a + b + c", "a – b + c", "abc/9"],
      "answer": ["a + b + c", "a – b + c", "abc/9"],
      "explanation": "## Multiples of 3 — All Expressions Are Divisible by 3\n\nWrite $a = 3x$, $b = 3y$, $c = 3z$ where $x > y > z > 0$.\n\n**① $a + b + c$:**\n\n$$3x + 3y + 3z = 3(x + y + z) \\implies \\text{divisible by 3} \\checkmark$$\n\n**② $a - b + c$:**\n\n$$3x - 3y + 3z = 3(x - y + z) \\implies \\text{divisible by 3} \\checkmark$$\n\n**③ $abc/9$:**\n\n$$\\frac{(3x)(3y)(3z)}{9} = \\frac{27xyz}{9} = 3xyz \\implies \\text{divisible by 3} \\checkmark$$\n\n$$\\boxed{\\text{All three statements}}$$"
    },
    {
      "id": "div_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "New cars leave a car factory in a repeating pattern of red, blue, black, and gray cars. If the first car to exit the factory was red, what color is the 463rd car to exit the factory?",
      "options": { "A": "Red", "B": "Blue", "C": "Black", "D": "Gray", "E": "It cannot be determined from the information given." },
      "answer": "C",
      "explanation": "## Cyclic Patterns — Use Remainders\n\nThe pattern repeats every **4** cars:\n\n| Position mod 4 | Color |\n|----------------|-------|\n| 1 | Red |\n| 2 | Blue |\n| 3 | Black |\n| 0 | Gray |\n\n**Find the position of the 463rd car:**\n\n$$463 \\div 4 = 115 \\text{ remainder } 3$$\n\nRemainder $3 \\to$ **Black**.\n\n$$\\boxed{C: \\ \\text{Black}}$$"
    },
    {
      "id": "div_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "Jason deposits money at a bank on a Tuesday and returns to the bank 100 days later to withdraw the money. On what day of the week did Jason withdraw the money from the bank?",
      "options": { "A": "Monday", "B": "Tuesday", "C": "Wednesday", "D": "Thursday", "E": "Friday" },
      "answer": "D",
      "explanation": "## Days of the Week — Modulo 7\n\nDays repeat every $7$. Find the remainder when $100 \\div 7$:\n\n$$100 = 7 \\times 14 + 2 \\implies 100 \\equiv 2 \\pmod{7}$$\n\nSo $100$ days later = same as $2$ days later.\n\n$$\\text{Tuesday} + 2 \\text{ days} = \\text{Thursday}$$\n\n**Verify:** $14$ complete weeks $= 98$ days (still Tuesday). Then $+2$ days $=$ Thursday ✓.\n\n$$\\boxed{D: \\ \\text{Thursday}}$$"
    },
    {
      "id": "div_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "x and h are both positive integers. When x is divided by 7, the quotient is h with a remainder of 3. Which of the following could be the value of x?",
      "options": { "A": "7", "B": "21", "C": "50", "D": "52", "E": "57" },
      "answer": "D",
      "explanation": "## Division with Remainder — the Equation Form\n\n$$x = 7h + 3 \\quad (h \\text{ is a positive integer})$$\n\n$x$ must be **3 more than a multiple of 7**.\n\nValid values: $10, 17, 24, 31, 38, 45, 52, 59, \\ldots$\n\n**Check each option:**\n\n- $7$: $7 = 7(1)+0$ — remainder $0$ ✗\n- $21$: $21 = 7(3)+0$ — remainder $0$ ✗\n- $50$: $50 = 7(7)+1$ — remainder $1$ ✗\n- $52$: $52 = 7(7)+3$ — remainder $3$ ✓\n- $57$: $57 = 7(8)+1$ — remainder $1$ ✗\n\n$$\\boxed{D: \\ 52}$$"
    },
    {
      "id": "div_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "When x is divided by 10, the quotient is y with a remainder of 4. If x and y are both positive integers, what is the remainder when x is divided by 5?",
      "options": { "A": "0", "B": "1", "C": "2", "D": "3", "E": "4" },
      "answer": "E",
      "explanation": "## Chained Remainders\n\n**From the given:** $x = 10y + 4$\n\n**Divide $x$ by $5$:**\n\n$$x = 10y + 4 = 5(2y) + 4$$\n\nSince $5(2y)$ is a multiple of $5$, the remainder when $x \\div 5$ is **always $4$**.\n\n---\n\n**Verify with numbers:**\n\n- $y=1$: $x = 14$. $14 \\div 5 = 2$ remainder $4$ ✓\n- $y=2$: $x = 24$. $24 \\div 5 = 4$ remainder $4$ ✓\n- $y=5$: $x = 54$. $54 \\div 5 = 10$ remainder $4$ ✓\n\n$$\\boxed{E: \\ 4}$$"
    },
    {
      "id": "div_027",
      "number": 27,
      "type": "numeric_entry",
      "text": "What is the remainder when 13¹⁷ + 17¹³ is divided by 10?",
      "answer": 0,
      "explanation": "## Units Digit = Remainder When Divided by 10\n\nThe remainder when a number is divided by $10$ is simply its **units digit**.\n\n**Units digit of $13^{17}$:**\n\nPowers of $3$ cycle with period $4$: $3, 9, 7, 1, 3, 9, \\ldots$\n\n$$17 \\div 4 = 4 \\text{ remainder } 1 \\implies \\text{same as } 3^1 \\implies \\text{units digit} = 3$$\n\n**Units digit of $17^{13}$:**\n\nPowers of $7$ cycle with period $4$: $7, 9, 3, 1, 7, 9, \\ldots$\n\n$$13 \\div 4 = 3 \\text{ remainder } 1 \\implies \\text{same as } 7^1 \\implies \\text{units digit} = 7$$\n\n**Sum of units digits:**\n\n$$3 + 7 = 10 \\implies \\text{units digit of total} = 0$$\n\n$$\\text{Remainder} = 0 \\implies \\boxed{0}$$"
    },
    {
      "id": "div_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "If n is an integer and n³ is divisible by 24, what is the largest number that must be a factor of n?",
      "options": { "A": "1", "B": "2", "C": "6", "D": "8", "E": "12" },
      "answer": "C",
      "explanation": "## Prime Factors of $n^3$ Come in Triples\n\n$24 = 2^3 \\times 3$.\n\nSince $n^3$ is divisible by $24$, $n^3$ must contain at least $2^3$ and $3^1$.\n\n**Key principle:** Every prime in $n^3$ appears in triples (since $n^3 = n \\times n \\times n$).\n\n- $n^3$ needs at least $2^3$: three $2$'s in $n^3$ → $n$ needs at least **one** $2$\n- $n^3$ needs at least $3^1$: one $3$ in $n^3$ → $n$ needs at least **one** $3$\n\nSo $n$ must be divisible by $2 \\times 3 = 6$.\n\n**Must $n$ be divisible by $8$?**\n\nTry $n = 6 = 2 \\times 3$: $n^3 = 216 = 2^3 \\times 3^3$. $216/24 = 9$ ✓. But $6$ is not divisible by $8$.\n\nSo $8$ doesn't have to be a factor of $n$.\n\n$$\\boxed{C: \\ 6}$$"
    },
    {
      "id": "div_029",
      "number": 29,
      "type": "quantitative_comparison",
      "context": "10! is divisible by 3ˣ × 5ʸ, where x and y are positive integers.",
      "quantity_a": "The greatest possible value for x",
      "quantity_b": "Twice the greatest possible value for y",
      "answer": "C",
      "explanation": "## Legendre's Formula — Counting Prime Factors in Factorials\n\n**Greatest power of $3$ in $10!$** (greatest possible $x$):\n\n$$\\left\\lfloor \\frac{10}{3} \\right\\rfloor + \\left\\lfloor \\frac{10}{9} \\right\\rfloor + \\left\\lfloor \\frac{10}{27} \\right\\rfloor = 3 + 1 + 0 = 4$$\n\n$$x = 4$$\n\n**Greatest power of $5$ in $10!$** (greatest possible $y$):\n\n$$\\left\\lfloor \\frac{10}{5} \\right\\rfloor + \\left\\lfloor \\frac{10}{25} \\right\\rfloor = 2 + 0 = 2$$\n\n$$y = 2$$\n\n---\n\nQuantity A $= x = 4$\n\nQuantity B $= 2y = 2 \\times 2 = 4$\n\n$$4 = 4 \\implies \\boxed{C}$$"
    },
    {
      "id": "div_030",
      "number": 30,
      "type": "quantitative_comparison",
      "quantity_a": "The number of distinct prime factors of 100,000",
      "quantity_b": "The number of distinct prime factors of 99,000",
      "answer": "B",
      "explanation": "## Factoring Round Numbers\n\n**Quantity A — Distinct primes of $100{,}000$:**\n\n$$100{,}000 = 10^5 = (2 \\times 5)^5 = 2^5 \\times 5^5$$\n\nDistinct primes: $\\{2, 5\\}$ → count $= 2$\n\n**Quantity B — Distinct primes of $99{,}000$:**\n\n$$99{,}000 = 99 \\times 1{,}000 = (9 \\times 11) \\times (8 \\times 125)$$\n\n$$= (3^2 \\times 11) \\times (2^3 \\times 5^3) = 2^3 \\times 3^2 \\times 5^3 \\times 11$$\n\nDistinct primes: $\\{2, 3, 5, 11\\}$ → count $= 4$\n\n---\n\n$$4 > 2 \\implies \\boxed{B}$$"
    },
    {
      "id": "div_031",
      "number": 31,
      "type": "select_all",
      "text": "Which of the following values times 12 is not a multiple of 64? Indicate all such values.",
      "options": ["6⁶", "12²", "18³", "30³", "22²"],
      "answer": ["18³", "30³", "22²"],
      "explanation": "## Count Factors of 2 in Each Product\n\n$64 = 2^6$ and $12 = 2^2 \\times 3$.\n\nFor each option $n$, the product $n \\times 12$ must have at least six $2$'s. Since $12$ contributes two $2$'s, $n$ must contribute at least **four** more $2$'s.\n\n| Option | Factored | $2$'s in option | Total $2$'s in $n \\times 12$ | Multiple of $64$? |\n|--------|----------|-----------------|-------------------------------|-------------------|\n| $6^6 = (2 \\times 3)^6$ | $2^6 \\times 3^6$ | $6$ | $6+2=8$ | ✓ |\n| $12^2 = (2^2 \\times 3)^2$ | $2^4 \\times 3^2$ | $4$ | $4+2=6$ | ✓ |\n| $18^3 = (2 \\times 3^2)^3$ | $2^3 \\times 3^6$ | $3$ | $3+2=5 < 6$ | ✗ |\n| $30^3 = (2 \\times 3 \\times 5)^3$ | $2^3 \\times \\ldots$ | $3$ | $3+2=5 < 6$ | ✗ |\n| $22^2 = (2 \\times 11)^2$ | $2^2 \\times 11^2$ | $2$ | $2+2=4 < 6$ | ✗ |\n\n$$\\boxed{18^3, \\ 30^3, \\ 22^2}$$"
    },
    {
      "id": "div_032",
      "number": 32,
      "type": "multiple_choice",
      "text": "If 3ˣ(5²) is divided by 3⁵(5³), the quotient terminates with one decimal digit. If x > 0, which of the following statements must be true?",
      "options": { "A": "x is even", "B": "x is odd", "C": "x < 5", "D": "x ≥ 5", "E": "x = 5" },
      "answer": "D",
      "explanation": "## Terminating Decimals Require Only 2s and 5s in the Denominator\n\nSimplify the expression:\n\n$$\\frac{3^x \\times 5^2}{3^5 \\times 5^3} = 3^{x-5} \\times 5^{2-3} = \\frac{3^{x-5}}{5}$$\n\nFor a terminating decimal, the denominator (after full simplification) must contain only powers of $2$ and $5$ — no factors of $3$.\n\n**If $x < 5$:** $3^{x-5} = \\frac{1}{3^{5-x}}$, introducing $3$ in the denominator → **non-terminating** ✗\n\n**If $x \\geq 5$:** $3^{x-5}$ is a positive integer. The expression becomes $\\frac{\\text{integer}}{5}$ → **terminates in one decimal place** ✓\n\n$$\\boxed{D: \\ x \\geq 5}$$"
    },
    {
      "id": "div_033",
      "number": 33,
      "type": "multiple_choice",
      "text": "abc is a three-digit number in which a is the hundreds digit, b is the tens digit, and c is the units digit. Let &(abc)& = (2ᵃ)(3ᵇ)(5ᶜ). For example, &(203)& = (2²)(3⁰)(5³) = 500. For how many three-digit numbers abc does the function &(abc)& yield a prime number?",
      "options": { "A": "Zero", "B": "One", "C": "Two", "D": "Three", "E": "Nine" },
      "answer": "B",
      "explanation": "## When Is $2^a \\times 3^b \\times 5^c$ Prime?\n\nA prime has exactly one prime factor raised to the first power, all others to the zero power.\n\nSo exactly one of $a, b, c$ must equal $1$ and the rest must equal $0$:\n\n**Case 1:** $a=1, b=0, c=0$\n\n$$2^1 \\times 3^0 \\times 5^0 = 2 \\quad \\text{(prime)}$$\n\n$abc = 100$ — a valid three-digit number ✓\n\n**Case 2:** $a=0, b=1, c=0$\n\n$$2^0 \\times 3^1 \\times 5^0 = 3$$\n\nBut $a = 0$ means the hundreds digit is $0$, making $abc = 010$ — **not** a three-digit number ✗\n\n**Case 3:** $a=0, b=0, c=1$\n\nSame issue — $a=0$ makes it not a three-digit number ✗\n\nOnly $abc = 100$ satisfies all conditions.\n\n$$\\boxed{B: \\ \\text{One}}$$"
    }
  ]
};
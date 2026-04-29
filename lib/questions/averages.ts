export const Averages = {
  "chapter": 21,
  "topic": "Averages, Weighted Average, Median & Mode",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "avg_001",
      "number": 1,
      "type": "numeric_entry",
      "text": "Husain and Dino had an average (arithmetic mean) of $20 each. Dino then won a cash prize, which increased the average amount of money they had to $80. If no other changes occurred, how many dollars did Dino win?",
      "answer": 120,
      "explanation": "## The Average–Total Relationship\n\nThe key formula is:\n\n$$\\text{Total} = \\text{Average} \\times \\text{Number of items}$$\n\n**Step 1 — Original total:**\n\n$$\\text{Total}_{\\text{before}} = 2 \\times \\$20 = \\$40$$\n\n**Step 2 — New total after prize:**\n\n$$\\text{Total}_{\\text{after}} = 2 \\times \\$80 = \\$160$$\n\n**Step 3 — Find the prize:**\n\nOnly Dino's amount changed (Husain's stayed the same), so:\n\n$$\\text{Prize} = \\$160 - \\$40 = \\$120$$\n\n---\n\n> **Key insight:** You don't need to know Husain's or Dino's individual amounts. Since the number of people didn't change, the entire increase in the total went to Dino.\n\n$$\\boxed{\\$120}$$"
    },
    {
      "id": "avg_002",
      "number": 2,
      "type": "quantitative_comparison",
      "context": "Janani is 6 centimeters taller than Preeti, who is 10 centimeters taller than Rey.",
      "quantity_a": "The average (arithmetic mean) height of the three people",
      "quantity_b": "The median height of the three people",
      "answer": "B",
      "explanation": "## Mean vs. Median in an Arithmetic Sequence\n\nAssign variables. Let Rey's height $= r$.\n\n$$\\text{Rey} = r, \\quad \\text{Preeti} = r + 10, \\quad \\text{Janani} = r + 16$$\n\nIn ascending order: $r,\\ r+10,\\ r+16$.\n\n---\n\n**Median** (middle of three values):\n\n$$\\text{Median} = r + 10$$\n\n**Mean:**\n\n$$\\text{Mean} = \\frac{r + (r+10) + (r+16)}{3} = \\frac{3r + 26}{3} = r + \\frac{26}{3}$$\n\n---\n\n**Compare Mean vs. Median:**\n\n$$r + \\frac{26}{3} \\quad \\text{vs.} \\quad r + 10$$\n\nSubtract $r$ from both sides:\n\n$$\\frac{26}{3} \\approx 8.67 \\quad \\text{vs.} \\quad 10$$\n\nSince $8.67 < 10$, the mean is less than the median.\n\n---\n\n> **Why?** The three values are NOT evenly spaced: the gap from Rey to Preeti is $10$ but from Preeti to Janani is only $6$. This asymmetry pulls the mean below the median.\n\n$$\\text{Mean} < \\text{Median} \\implies \\boxed{B}$$"
    },
    {
      "id": "avg_003",
      "number": 3,
      "type": "quantitative_comparison",
      "context": "The average (arithmetic mean) of x and y is 55. The average of y and z is 75.",
      "quantity_a": "z – x",
      "quantity_b": "40",
      "answer": "C",
      "explanation": "## Using Averages to Build Equations\n\nConvert each average statement to a sum:\n\n$$\\frac{x + y}{2} = 55 \\implies x + y = 110$$\n\n$$\\frac{y + z}{2} = 75 \\implies y + z = 150$$\n\n---\n\n**Find $z - x$ directly:**\n\nSubtract the first equation from the second:\n\n$$(y + z) - (x + y) = 150 - 110$$\n\n$$z - x = 40$$\n\n---\n\n> **Shortcut:** Notice that $y$ cancels perfectly. You never need to find the individual values — just subtract the equations.\n\n$$z - x = 40 = \\text{Quantity B} \\implies \\boxed{C}$$"
    },
    {
      "id": "avg_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "John bought 5 books with an average (arithmetic mean) price of $12. If John then buys another book with a price of $18, what is the average price of all 6 books?",
      "options": { "A": "$12.50", "B": "$13", "C": "$13.50", "D": "$14", "E": "$15" },
      "answer": "B",
      "explanation": "## Adding One Item to an Existing Average\n\n**Step 1 — Find the original total:**\n\n$$\\text{Total}_{5} = 5 \\times \\$12 = \\$60$$\n\n**Step 2 — Add the new book:**\n\n$$\\text{Total}_{6} = \\$60 + \\$18 = \\$78$$\n\n**Step 3 — New average:**\n\n$$\\bar{x} = \\frac{\\$78}{6} = \\$13$$\n\n---\n\n### Sanity Check\n\nThe new book costs $\\$18$, which is above the current average of $\\$12$. Adding a value above the mean must raise the mean — but only slightly since there are already 5 books. An increase from $\\$12$ to $\\$13$ is reasonable.\n\n$$\\boxed{B: \\ \\$13}$$"
    },
    {
      "id": "avg_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "Every week, Renee is paid $40 per hour for the first 40 hours she works, and $80 per hour for each hour she works after the first 40 hours. How many hours would Renee have to work in one week to earn an average (arithmetic mean) of $60 per hour that week?",
      "options": { "A": "60", "B": "65", "C": "70", "D": "75", "E": "80" },
      "answer": "E",
      "explanation": "## Setting Up a Pay Rate Equation\n\nLet $h$ = total hours worked (where $h > 40$).\n\n**Total earnings:**\n\n$$\\text{Earnings} = 40 \\times \\$40 + (h - 40) \\times \\$80$$\n\n$$= \\$1{,}600 + \\$80h - \\$3{,}200 = \\$80h - \\$1{,}600$$\n\n**Set average equal to $\\$60$:**\n\n$$\\frac{80h - 1{,}600}{h} = 60$$\n\n$$80h - 1{,}600 = 60h$$\n\n$$20h = 1{,}600$$\n\n$$h = 80$$\n\n---\n\n### Intuitive Check\n\nRenee earns $\\$40$/hr for the first 40 hours and $\\$80$/hr after. For an average of $\\$60$ (exactly halfway between $\\$40$ and $\\$80$), she must spend **equal time** at each rate:\n\n$$40 \\text{ hours at } \\$40 + 40 \\text{ hours at } \\$80 = 80 \\text{ total hours} \\checkmark$$\n\n$$\\boxed{E: \\ 80 \\text{ hours}}$$"
    },
    {
      "id": "avg_006",
      "number": 6,
      "type": "multiple_choice",
      "text": "What is the average (arithmetic mean) of x, x – 6, and x + 12?",
      "options": { "A": "x", "B": "x + 2", "C": "x + 9", "D": "3x + 6", "E": "It cannot be determined from the information given." },
      "answer": "B",
      "explanation": "## Average of Algebraic Expressions\n\n**Sum the three terms:**\n\n$$x + (x - 6) + (x + 12) = 3x + 6$$\n\n**Divide by 3:**\n\n$$\\text{Average} = \\frac{3x + 6}{3} = x + 2$$\n\n---\n\n### Method 2 — Use Deviations from $x$\n\nThe three terms are $x$, $x-6$, and $x+12$. Their deviations from $x$ are $0$, $-6$, and $+12$.\n\nAverage deviation from $x$:\n\n$$\\frac{0 + (-6) + 12}{3} = \\frac{6}{3} = +2$$\n\nSo the mean is $x + 2$. The constants combine to lift the average above $x$ by $2$.\n\n$$\\boxed{B: \\ x + 2}$$"
    },
    {
      "id": "avg_007",
      "number": 7,
      "type": "quantitative_comparison",
      "context": "ab < 0",
      "quantity_a": "(a + b) / 2",
      "quantity_b": "0",
      "answer": "D",
      "explanation": "## Opposite Signs — Average Can Go Either Way\n\n$ab < 0$ means $a$ and $b$ have **opposite signs** — one positive, one negative.\n\n**Test Case 1:** $a = 10,\\ b = -2$\n\n$$\\frac{10 + (-2)}{2} = \\frac{8}{2} = 4 > 0 \\quad \\text{(A greater)}$$\n\n**Test Case 2:** $a = 2,\\ b = -10$\n\n$$\\frac{2 + (-10)}{2} = \\frac{-8}{2} = -4 < 0 \\quad \\text{(B greater)}$$\n\n**Test Case 3:** $a = 5,\\ b = -5$\n\n$$\\frac{5 + (-5)}{2} = 0 \\quad \\text{(equal)}$$\n\n---\n\nAll three outcomes are possible — the sign depends on **which** number has the larger magnitude. Since the problem gives no such constraint, the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "avg_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "If x is negative, what is the median of the list 20, x, 7, 11, 3?",
      "options": { "A": "3", "B": "7", "C": "9", "D": "11", "E": "15.5" },
      "answer": "B",
      "explanation": "## Median with a Constrained Unknown\n\nSince $x < 0$, it is smaller than every other number in the list.\n\n**Sort in ascending order:**\n\n$$x,\\ 3,\\ 7,\\ 11,\\ 20$$\n\nWith 5 values, the **median is the 3rd value**:\n\n$$\\text{Median} = 7$$\n\n---\n\n> **Key:** You don't need to know the exact value of $x$ — only that it's negative. Any negative value goes to the front of the sorted list, pushing $7$ into the middle position.\n\n$$\\boxed{B: \\ 7}$$"
    },
    {
      "id": "avg_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "If the average (arithmetic mean) of n and 11 is equal to 2n, what is the average of n and 13/3?",
      "options": { "A": "4", "B": "8", "C": "11", "D": "14", "E": "19" },
      "answer": "A",
      "explanation": "## Solve for $n$, Then Find the New Average\n\n**Step 1 — Set up the equation:**\n\n$$\\frac{n + 11}{2} = 2n$$\n\n$$n + 11 = 4n$$\n\n$$11 = 3n \\implies n = \\frac{11}{3}$$\n\n**Step 2 — Find the average of $n$ and $\\frac{13}{3}$:**\n\n$$\\text{Average} = \\frac{\\frac{11}{3} + \\frac{13}{3}}{2} = \\frac{\\frac{24}{3}}{2} = \\frac{8}{2} = 4$$\n\n---\n\n> **Notice:** $\\frac{11}{3} + \\frac{13}{3} = \\frac{24}{3} = 8$. The fractions add to a clean integer, making the final step easy.\n\n$$\\boxed{A: \\ 4}$$"
    },
    {
      "id": "avg_010",
      "number": 10,
      "type": "quantitative_comparison",
      "context": "The average (arithmetic mean) of x, –3, x, x+3, x+4, and x+11 is equal to the median of x–3, x, x+3, x+4, and x+11.",
      "quantity_a": "The average (arithmetic mean) of x, –3, x, x+3, x+4, and x+11",
      "quantity_b": "The median of x–3, x, x+3, x+4, and x+11",
      "answer": "C",
      "explanation": "## Mean = Median — Solve for x\n\n**Compute the mean of the 6-term list** $\\{x,\\ -3,\\ x,\\ x+3,\\ x+4,\\ x+11\\}$:\n\n$$\\text{Sum} = x + (-3) + x + (x+3) + (x+4) + (x+11) = 5x + 15$$\n\n$$\\text{Mean} = \\frac{5x + 15}{6}$$\n\n**Compute the median of the 5-term list** $\\{x-3,\\ x,\\ x+3,\\ x+4,\\ x+11\\}$:\n\nThis is already sorted (assuming $x > 0$). The middle (3rd) value:\n\n$$\\text{Median} = x + 3$$\n\n**Set mean equal to median:**\n\n$$\\frac{5x + 15}{6} = x + 3$$\n\n$$5x + 15 = 6x + 18 \\implies x = -3$$\n\n**Evaluate at $x = -3$:**\n\n$$\\text{Mean} = \\frac{5(-3) + 15}{6} = \\frac{0}{6} = 0$$\n\n$$\\text{Median} = (-3) + 3 = 0$$\n\nBoth quantities equal $0$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "avg_011",
      "number": 11,
      "type": "quantitative_comparison",
      "context": "At a certain school, all 118 juniors have an average (arithmetic mean) final exam score of 88 and all 100 seniors have an average final exam score of 92.",
      "quantity_a": "The average (arithmetic mean) final exam score for all of the juniors and seniors combined",
      "quantity_b": "90",
      "answer": "B",
      "explanation": "## Weighted Average — Unequal Group Sizes\n\n**Compute the combined average directly:**\n\n$$\\text{Total juniors} = 118 \\times 88 = 10{,}384$$\n\n$$\\text{Total seniors} = 100 \\times 92 = 9{,}200$$\n\n$$\\text{Combined average} = \\frac{10{,}384 + 9{,}200}{118 + 100} = \\frac{19{,}584}{218} \\approx 89.84$$\n\n---\n\n### Intuitive Method (No Calculation Needed)\n\n$90$ is the simple midpoint between $88$ and $92$. For the weighted average to equal $90$, there would need to be **equal numbers** of juniors and seniors. But there are **more juniors** (118) than seniors (100).\n\nSince juniors scored lower ($88$), having more of them pulls the combined average **below** $90$.\n\n$$89.84 < 90 \\implies \\boxed{B}$$"
    },
    {
      "id": "avg_012",
      "number": 12,
      "type": "quantitative_comparison",
      "quantity_a": "The average (arithmetic mean) of x, y, and z",
      "quantity_b": "The average (arithmetic mean) of 0.5x, 0.5y, and 0.5z",
      "answer": "D",
      "explanation": "## Scaling a Set — The Sign of the Average Matters\n\n$$\\text{Qty A} = \\frac{x + y + z}{3}$$\n\n$$\\text{Qty B} = \\frac{0.5x + 0.5y + 0.5z}{3} = \\frac{0.5(x+y+z)}{3} = 0.5 \\times \\text{Qty A}$$\n\nSo Qty B is exactly **half** of Qty A. Now compare $\\text{A}$ to $\\frac{\\text{A}}{2}$:\n\n**Case 1:** $x + y + z > 0 \\implies \\text{Qty A} > 0 \\implies \\text{A} > \\frac{\\text{A}}{2}$ → A greater\n\n**Case 2:** $x + y + z = 0 \\implies \\text{Qty A} = 0 = \\text{Qty B}$ → equal\n\n**Case 3:** $x + y + z < 0 \\implies \\text{Qty A} < 0 \\implies \\text{A} < \\frac{\\text{A}}{2}$ → B greater\n\n*(Halving a negative number makes it less negative, i.e., larger.)*\n\nAll three outcomes are possible without constraints on $x, y, z$.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "avg_013",
      "number": 13,
      "type": "numeric_entry",
      "text": "Aaron's first three quiz scores were 75, 84, and 82. If his score on the fourth quiz reduced his average (arithmetic mean) quiz score to 74, what was his score on the fourth quiz?",
      "answer": 55,
      "explanation": "## Finding a Missing Score Using the Target Average\n\n**Step 1 — Required total for average of 74:**\n\n$$\\text{Target total} = 74 \\times 4 = 296$$\n\n**Step 2 — Actual total of first three:**\n\n$$75 + 84 + 82 = 241$$\n\n**Step 3 — Fourth quiz score:**\n\n$$\\text{Score}_4 = 296 - 241 = 55$$\n\n---\n\n### Sanity Check\n\nThe average dropped from $\\frac{241}{3} \\approx 80.3$ to $74$. A score of $55$ (well below the new average) makes sense as the drag that pulled the mean down.\n\n$$\\boxed{55}$$"
    },
    {
      "id": "avg_014",
      "number": 14,
      "type": "quantitative_comparison",
      "context": "Four people have an average (arithmetic mean) age of 18, and none of the people are older than 30.",
      "quantity_a": "The range of the four people's ages",
      "quantity_b": "25",
      "answer": "D",
      "explanation": "## Testing Multiple Scenarios\n\nTotal age $= 4 \\times 18 = 72$. Maximum age $= 30$.\n\n**Scenario 1 — Range $= 25$:**\n\nTry $\\{30, 30, 7, 5\\}$: total $= 72$ ✓, range $= 30 - 5 = 25$ → **equal**\n\n**Scenario 2 — Range $> 25$:**\n\nTry $\\{30, 30, 8, 4\\}$: total $= 72$ ✓, range $= 30 - 4 = 26 > 25$ → **A greater**\n\n**Scenario 3 — Range $< 25$:**\n\nTry $\\{18, 18, 18, 18\\}$: total $= 72$ ✓, range $= 0 < 25$ → **B greater**\n\n---\n\nAll three outcomes are achievable under the given constraints.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "avg_015",
      "number": 15,
      "type": "quantitative_comparison",
      "context": "Dataset A consists of 5 numbers which have an average (arithmetic mean) value of 43. Dataset B consists of 5 numbers.",
      "quantity_a": "The value of x if the average of x and the 5 numbers in dataset A is 46.",
      "quantity_b": "The average of dataset B if the average of the 10 numbers in datasets A and B combined is 52.",
      "answer": "C",
      "explanation": "## Two Independent Calculations That Converge\n\n**Quantity A — Find $x$:**\n\n$$\\text{Sum of A} = 5 \\times 43 = 215$$\n\nAverage of $x$ plus the 5 values of A (total 6 values) $= 46$:\n\n$$\\frac{215 + x}{6} = 46 \\implies 215 + x = 276 \\implies x = 61$$\n\n**Quantity B — Find average of B:**\n\n$$\\text{Combined total} = 10 \\times 52 = 520$$\n\n$$\\text{Sum of B} = 520 - 215 = 305$$\n\n$$\\text{Average of B} = \\frac{305}{5} = 61$$\n\n---\n\nBoth quantities equal $61$ — a coincidence built into the problem.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "avg_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "The average (arithmetic mean) of 7 numbers in a certain list is 12. The average of the 4 smallest numbers in this list is 8, while the average of the 4 greatest numbers in this list is 17. How much greater is the sum of the 3 greatest numbers in the list than the sum of the 3 smallest numbers in the list?",
      "options": { "A": "4", "B": "14", "C": "28", "D": "36", "E": "52" },
      "answer": "D",
      "explanation": "## Overlapping Groups — Find the Middle Value\n\n**Known sums:**\n\n$$\\text{Total} = 7 \\times 12 = 84$$\n\n$$\\text{Sum of 4 smallest} = 4 \\times 8 = 32$$\n\n$$\\text{Sum of 4 greatest} = 4 \\times 17 = 68$$\n\n**Find the middle value (4th element, shared by both groups):**\n\nThe 4th-smallest element appears in both the \"4 smallest\" and the \"4 greatest\" groups:\n\n$$32 + 68 = 100 = \\text{Total} + \\text{middle}$$\n\n$$100 = 84 + \\text{middle} \\implies \\text{middle} = 16$$\n\n**Find the target sums:**\n\n$$\\text{Sum of 3 smallest} = 32 - 16 = 16$$\n\n$$\\text{Sum of 3 greatest} = 68 - 16 = 52$$\n\n**Difference:**\n\n$$52 - 16 = 36$$\n\n$$\\boxed{D: \\ 36}$$"
    },
    {
      "id": "avg_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "If the average (arithmetic mean) of a, b, c, 5, and 6 is 6, what is the average of a, b, c, and 13?",
      "options": { "A": "8", "B": "8.5", "C": "9", "D": "9.5", "E": "It cannot be determined from the information given." },
      "answer": "A",
      "explanation": "## Replace Known Values to Find Unknown Sum\n\n**Step 1 — Find $a + b + c$:**\n\n$$\\text{Sum of 5 numbers} = 5 \\times 6 = 30$$\n\n$$a + b + c + 5 + 6 = 30 \\implies a + b + c = 19$$\n\n**Step 2 — New average with $13$ replacing $5$ and $6$:**\n\n$$\\text{New sum} = 19 + 13 = 32$$\n\n$$\\text{New average} = \\frac{32}{4} = 8$$\n\n---\n\n> **Notice:** We swapped out $5 + 6 = 11$ for $13$, gaining $2$ in the total but dividing by $4$ instead of $5$. Both changes contribute to the new average of $8$.\n\n$$\\boxed{A: \\ 8}$$"
    },
    {
      "id": "avg_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "A group consists of both men and women. The average (arithmetic mean) height of the women is 66 inches, and the average (arithmetic mean) height of the men is 72 inches. If the average (arithmetic mean) height of all the people in the group is 70 inches, what is the ratio of women to men in the group?",
      "options": { "A": "1 : 1", "B": "1 : 2", "C": "2 : 1", "D": "2 : 3", "E": "3 : 2" },
      "answer": "B",
      "explanation": "## Weighted Average — Find the Group Ratio\n\nLet $w$ = number of women, $m$ = number of men.\n\n**Set up the weighted average equation:**\n\n$$\\frac{66w + 72m}{w + m} = 70$$\n\n$$66w + 72m = 70w + 70m$$\n\n$$2m = 4w \\implies m = 2w$$\n\n$$\\frac{w}{m} = \\frac{1}{2}$$\n\n---\n\n### Method 2 — Alligation (Visual)\n\nThe overall average of $70$ is closer to the men's average ($72$) than the women's ($66$):\n\n- Distance from women to overall: $70 - 66 = 4$\n- Distance from men to overall: $72 - 70 = 2$\n\nThe ratio women : men $= 2 : 4 = 1 : 2$ (flip the distances).\n\n$$\\text{Women : Men} = 1 : 2 \\implies \\boxed{B}$$"
    },
    {
      "id": "avg_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "The average (arithmetic mean) of 13 numbers is 70. If the average of 10 of these numbers is 90, what is the average of the other 3 numbers?",
      "options": { "A": "–130", "B": "10/3", "C": "30", "D": "90", "E": "290" },
      "answer": "B",
      "explanation": "## Splitting a Group — The Remainder\n\n**Total sum of all 13:**\n\n$$13 \\times 70 = 910$$\n\n**Sum of the 10 selected numbers:**\n\n$$10 \\times 90 = 900$$\n\n**Sum of the remaining 3:**\n\n$$910 - 900 = 10$$\n\n**Average of the remaining 3:**\n\n$$\\frac{10}{3}$$\n\n---\n\n> **Warning:** The group of 10 averages $90$, but the total average is only $70$. The remaining 3 numbers must be pulling the mean WAY down — an average of $\\frac{10}{3} \\approx 3.33$ for those 3 makes sense.\n\n$$\\boxed{B: \\ \\frac{10}{3}}$$"
    },
    {
      "id": "avg_020",
      "number": 20,
      "type": "numeric_entry",
      "text": "Town A has 6,000 citizens and an average (arithmetic mean) of 2 radios per citizen. Town B has 10,000 citizens and an average of 4 radios per citizen. What is the average number of radios per citizen in both towns combined? Give your answer as a fraction.",
      "answer": "13/4",
      "explanation": "## Weighted Average of Two Towns\n\n**Total radios per town:**\n\n$$\\text{Town A: } 6{,}000 \\times 2 = 12{,}000 \\text{ radios}$$\n\n$$\\text{Town B: } 10{,}000 \\times 4 = 40{,}000 \\text{ radios}$$\n\n**Combined average:**\n\n$$\\text{Average} = \\frac{12{,}000 + 40{,}000}{6{,}000 + 10{,}000} = \\frac{52{,}000}{16{,}000} = \\frac{52}{16} = \\frac{13}{4}$$\n\n---\n\n> **Sanity check:** Town B is larger and has a higher average, so the combined average ($\\frac{13}{4} = 3.25$) should be closer to $4$ than to $2$. Indeed, $3.25$ is closer to $4$ — correct.\n\n$$\\boxed{\\frac{13}{4}}$$"
    },
    {
      "id": "avg_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "Fiber X cereal is 55% fiber. Fiber Max cereal is 70% fiber. Sheldon combines an amount of the two cereals in a single bowl of mixed cereal that is 65% fiber. If the bowl contains a total of 12 ounces of cereal, how much of the cereal, in ounces, is Fiber X?",
      "options": { "A": "3", "B": "4", "C": "6", "D": "8", "E": "9" },
      "answer": "B",
      "explanation": "## Mixture Problem — Weighted Average\n\nLet $x$ = ounces of Fiber X, so $(12 - x)$ = ounces of Fiber Max.\n\n**Fiber content equation:**\n\n$$0.55x + 0.70(12 - x) = 0.65 \\times 12$$\n\n$$0.55x + 8.4 - 0.70x = 7.8$$\n\n$$-0.15x = -0.6$$\n\n$$x = 4$$\n\n---\n\n### Method 2 — Alligation\n\nThe mixed cereal ($65\\%$) sits between $55\\%$ and $70\\%$:\n\n- Distance from Fiber X to mixture: $65 - 55 = 10$\n- Distance from Fiber Max to mixture: $70 - 65 = 5$\n\nRatio Fiber X : Fiber Max $= 5 : 10 = 1 : 2$ (flip the distances).\n\nFiber X $= \\frac{1}{3} \\times 12 = 4$ oz.\n\n$$\\boxed{B: \\ 4 \\text{ oz}}$$"
    },
    {
      "id": "avg_022",
      "number": 22,
      "type": "numeric_entry",
      "text": "The average (arithmetic mean) population in town X was recorded as 22,455 during the years 2000–2010, inclusive. However, an error was later uncovered: the figure for 2009 was erroneously recorded as 22,478, but should have been correctly recorded as 22,500. What was the average population in town X during the years 2000–2010, inclusive, once the error was corrected?",
      "answer": 22457,
      "explanation": "## Correcting a Data Error in an Average\n\nYears from 2000 to 2010 inclusive: $2010 - 2000 + 1 = 11$ years.\n\n**Original total:**\n\n$$22{,}455 \\times 11 = 247{,}005$$\n\n**Correction — the 2009 value increases by:**\n\n$$22{,}500 - 22{,}478 = 22$$\n\n**Corrected total:**\n\n$$247{,}005 + 22 = 247{,}027$$\n\n**Corrected average:**\n\n$$\\frac{247{,}027}{11} = 22{,}457$$\n\n---\n\n### Quick Method\n\nA total increase of $22$ spread over $11$ years raises the average by:\n\n$$\\frac{22}{11} = 2$$\n\nNew average $= 22{,}455 + 2 = 22{,}457$.\n\n$$\\boxed{22{,}457}$$"
    },
    {
      "id": "avg_023",
      "number": 23,
      "type": "quantitative_comparison",
      "context": "While driving from city A to city B, a car got 22 miles per gallon. While returning on the same road, the car got 30 miles per gallon.",
      "quantity_a": "The car's average gas mileage for the entire trip, in miles per gallon",
      "quantity_b": "26",
      "answer": "B",
      "explanation": "## Average Rate Over Equal Distances — Use the Harmonic Mean\n\nWhen the **same distance** is traveled at two different rates, the correct average is the **harmonic mean**, not the arithmetic mean.\n\n$$\\text{Average MPG} = \\frac{2}{ \\dfrac{1}{22} + \\dfrac{1}{30}} = \\frac{2 \\times 22 \\times 30}{22 + 30} = \\frac{1{,}320}{52} \\approx 25.38 \\text{ mpg}$$\n\n---\n\n### Why Not Simply Average 22 and 30?\n\nThe simple average would give $\\frac{22 + 30}{2} = 26$. But this is wrong because you use **more gallons** at 22 mpg (the slower rate) than at 30 mpg over the same distance — so the lower rate is weighted more heavily.\n\n**Verify with actual numbers:** Say the one-way distance is $330$ miles.\n\n$$\\text{Gallons going} = \\frac{330}{22} = 15, \\quad \\text{Gallons returning} = \\frac{330}{30} = 11$$\n\n$$\\text{Total MPG} = \\frac{330 + 330}{15 + 11} = \\frac{660}{26} \\approx 25.38$$\n\n$$25.38 < 26 \\implies \\boxed{B}$$"
    },
    {
      "id": "avg_024",
      "number": 24,
      "type": "quantitative_comparison",
      "context": "Sₙ = 3n + 3. Sequence S is defined for each integer n such that 0 < n < 10,000.",
      "quantity_a": "The median of sequence S",
      "quantity_b": "The mean of sequence S",
      "answer": "C",
      "explanation": "## Arithmetic Sequence — Mean Always Equals Median\n\n$S_n = 3n + 3$ for $n = 1, 2, 3, \\ldots, 9{,}999$.\n\n**Is this an arithmetic sequence?**\n\n$$S_{n+1} - S_n = [3(n+1)+3] - [3n+3] = 3$$\n\nYes — constant difference of $3$. ✓\n\n---\n\n**For any arithmetic sequence, mean $=$ median $=$ average of first and last terms:**\n\n$$S_1 = 3(1) + 3 = 6$$\n\n$$S_{9{,}999} = 3(9{,}999) + 3 = 30{,}000$$\n\n$$\\text{Mean} = \\text{Median} = \\frac{6 + 30{,}000}{2} = 15{,}003$$\n\n---\n\n> **Rule:** In any arithmetic (evenly spaced) sequence, the distribution is perfectly symmetric, so the mean and median are identical.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "avg_025",
      "number": 25,
      "type": "multiple_choice",
      "image": "/Averages/avg_025.svg",
      "text": "The bar graph displays the number of temperature readings at each value from a sample, measured in degrees Fahrenheit. The readings are: 110°F appears 2 times, 111°F appears 3 times, 112°F appears 5 times, 113°F appears 4 times, 114°F appears 3 times, 115°F appears 1 time. What was the average (arithmetic mean) temperature reading?",
      "options": { "A": "111.5°F", "B": "112°F", "C": "112.5°F", "D": "113°F", "E": "113.5°F" },
      "answer": "B",
      "explanation": "## Weighted Average from a Frequency Distribution\n\nMultiply each temperature by its frequency, sum the products, then divide by the total number of readings.\n\n| Temp | Freq | Product |\n|------|------|---------|\n| 110 | 2 | 220 |\n| 111 | 3 | 333 |\n| 112 | 5 | 560 |\n| 113 | 4 | 452 |\n| 114 | 3 | 342 |\n| 115 | 1 | 115 |\n\n$$\\text{Total sum} = 220 + 333 + 560 + 452 + 342 + 115 = 2{,}022$$\n\n$$\\text{Total readings} = 2 + 3 + 5 + 4 + 3 + 1 = 18$$\n\n$$\\text{Mean} = \\frac{2{,}022}{18} = 112.33^\\circ\\text{F}$$\n\nThe closest answer choice is $\\boxed{B: \\ 112°F}$.\n\n> **Tip:** When values cluster around a central number, try using deviations from that number to simplify arithmetic. Using $112$ as a base: deviations are $-2, -1, 0, +1, +2, +3$ weighted by $2, 3, 5, 4, 3, 1$ respectively. Net deviation $= \\frac{-4-3+0+4+6+3}{18} = \\frac{6}{18} = +0.33$, confirming mean $\\approx 112.33$."
    },
    {
      "id": "avg_026",
      "number": 26,
      "type": "numeric_entry",
      "context": "Score results on a college mathematics proficiency exam:\n- Freshmen: 120 students, average score 78 points\n- Sophomores: 80 students, average score 84 points",
      "text": "What was the average (arithmetic mean) score for all the freshmen and sophomores taking the exam? Give your answer rounded to the nearest 0.1 points.",
      "answer": 80.4,
      "explanation": "## Combined Weighted Average\n\n**Compute each group's total score:**\n\n$$\\text{Freshmen total} = 120 \\times 78 = 9{,}360$$\n\n$$\\text{Sophomores total} = 80 \\times 84 = 6{,}720$$\n\n**Combined average:**\n\n$$\\text{Average} = \\frac{9{,}360 + 6{,}720}{120 + 80} = \\frac{16{,}080}{200} = 80.4$$\n\n---\n\n### Sanity Check\n\nSince there are more freshmen ($120$) than sophomores ($80$), the combined average should be pulled **closer to $78$** than to $84$. The midpoint is $81$, and $80.4 < 81$ — correct, it leans toward the freshmen's score.\n\n$$\\boxed{80.4}$$"
    },
    {
      "id": "avg_027",
      "number": 27,
      "type": "select_all",
      "context": "Set A: 1, 3, 5, 7, 9. Set B: 6, 8, 10, 12, 14.",
      "text": "For the sets of numbers above, which of the following statements are true? Indicate all such statements.",
      "options": [
        "The mean of set B is greater than the mean of set A.",
        "The median of set B is greater than the median of set A.",
        "The standard deviation of set B is greater than the standard deviation of set A.",
        "The range of set B is greater than the range of set A."
      ],
      "answer": ["The mean of set B is greater than the mean of set A.", "The median of set B is greater than the median of set A."],
      "explanation": "## Shifted Set — What Changes and What Doesn't\n\nSet B is simply Set A with each element increased by $5$: $\\{1,3,5,7,9\\} + 5 = \\{6,8,10,12,14\\}$.\n\n**Mean:**\n\n$$\\bar{A} = \\frac{1+3+5+7+9}{5} = \\frac{25}{5} = 5$$\n\n$$\\bar{B} = \\frac{6+8+10+12+14}{5} = \\frac{50}{5} = 10$$\n\n$\\bar{B} > \\bar{A}$ ✓\n\n**Median:** Median of A $= 5$, Median of B $= 10$. Median B $>$ Median A ✓\n\n**Standard Deviation:**\n\nSD measures spread around the mean. Both sets have the same spacing: $-4, -2, 0, +2, +4$ from their respective means. The deviations are **identical**, so:\n\n$$\\text{SD}(A) = \\text{SD}(B)$$\n\nShifting all values by a constant doesn't change the spread. ✗\n\n**Range:**\n\n$$\\text{Range A} = 9 - 1 = 8, \\quad \\text{Range B} = 14 - 6 = 8$$\n\nRanges are equal. ✗\n\n> **Key rule:** Adding a constant to every element shifts the mean and median but does **not** change the standard deviation or range."
    },
    {
      "id": "avg_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "Three people have $32, $72, and $98, respectively. If they pool their money then redistribute it among themselves, what is the maximum possible value for the median amount of money?",
      "options": { "A": "$72", "B": "$85", "C": "$98", "D": "$101", "E": "$202" },
      "answer": "D",
      "explanation": "## Maximizing the Median of Three Values\n\n**Total pool:**\n\n$$\\$32 + \\$72 + \\$98 = \\$202$$\n\nAfter redistribution, the three values still sum to $\\$202$. The median is the **middle value** of the three.\n\n**Strategy to maximize the median:** minimize the smallest person's amount (give them $\\$0$), then split the rest as evenly as possible between the other two.\n\n$$\\text{Remaining} = \\$202 - \\$0 = \\$202$$\n\n$$\\text{Each of the other two} = \\frac{\\$202}{2} = \\$101$$\n\nDistribution: $\\$0,\\ \\$101,\\ \\$101$\n\nMedian $= \\$101$.\n\n---\n\n> **Why not give more to one person?** If we gave one person $\\$120$ and another $\\$82$, the median drops to $\\$82 < \\$101$. Equal splits maximize the median.\n\n$$\\boxed{D: \\ \\$101}$$"
    },
    {
      "id": "avg_029",
      "number": 29,
      "type": "multiple_choice",
      "context": "Weekly Revenue per Product Category at Office Supply Store X:\nPens: $164, Pencils: $111, Legal pads: $199, Erasers: $38. Average of categories: $128.\nHowever, the revenue for Pens is actually $176, not $164.",
      "text": "What is the new, correct average revenue per week per product category?",
      "options": { "A": "$130", "B": "$131", "C": "$132", "D": "$164", "E": "$176" },
      "answer": "B",
      "explanation": "## Correcting One Entry in an Average\n\n**Method 1 — Recompute from scratch:**\n\n$$\\text{Correct total} = \\$176 + \\$111 + \\$199 + \\$38 = \\$524$$\n\n$$\\text{New average} = \\frac{\\$524}{4} = \\$131$$\n\n---\n\n**Method 2 — Adjust the existing average:**\n\nOriginal total $= 4 \\times \\$128 = \\$512$\n\nPens increased by $\\$176 - \\$164 = \\$12$\n\nNew total $= \\$512 + \\$12 = \\$524$\n\nNew average $= \\frac{\\$524}{4} = \\$131$\n\n---\n\n> **Quick mental math:** The total increased by $\\$12$. Spread over $4$ categories, the average rises by $\\frac{12}{4} = \\$3$. New average $= \\$128 + \\$3 = \\$131$.\n\n$$\\boxed{B: \\ \\$131}$$",
      "image": "/Averages/avg_029.svg"
    },
    {
      "id": "avg_030",
      "number": 30,
      "type": "quantitative_comparison",
      "context": "Set M consists of 20 evenly spaced integers, 10 numbers of which are positive and 10 of which are negative.",
      "quantity_a": "The average (arithmetic mean) of all the numbers in set M",
      "quantity_b": "0",
      "answer": "D",
      "explanation": "## Evenly Spaced ≠ Symmetric About Zero\n\nFor an evenly spaced set, the mean equals the average of the first and last terms. However, having 10 positive and 10 negative integers does **not** guarantee symmetry about $0$.\n\n**Example 1 — Mean $= 0$:**\n\n$$\\{-19, -17, \\ldots, -1, 1, 3, \\ldots, 19\\} \\quad (\\text{spacing} = 2)$$\n\nFirst term $= -19$, last term $= 19$. Mean $= \\frac{-19+19}{2} = 0$. → **Equal**\n\n**Example 2 — Mean $> 0$:**\n\n$$\\{-1, 1, 3, 5, \\ldots, 37\\} \\quad (\\text{spacing} = 2)$$\n\nThis has $1$ negative and $19$ positive... doesn't satisfy the $10/10$ split.\n\nA valid example with $10$ negative and $10$ positive but non-zero mean:\n\n$$\\{-9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29\\}$$\n\nSpacing $= 2$. Negatives: $10$ ✓. Positives: $10$ ✓. Mean $= \\frac{-9+29}{2} = 10 > 0$ → **A greater**\n\nBoth outcomes are possible, so the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "avg_031",
      "number": 31,
      "type": "quantitative_comparison",
      "context": "The average (arithmetic mean) of 3x, x, and y is equal to 2x.",
      "quantity_a": "2x",
      "quantity_b": "y",
      "answer": "C",
      "explanation": "## Solve the Constraint\n\n$$\\frac{3x + x + y}{3} = 2x$$\n\n$$\\frac{4x + y}{3} = 2x$$\n\n$$4x + y = 6x$$\n\n$$y = 2x$$\n\nSo Quantity B ($y$) $= 2x =$ Quantity A.\n\n---\n\n> **Note:** This holds for **all** values of $x$, not just a specific one. There's no unique value for $x$ or $y$ — just the relationship $y = 2x$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "avg_032",
      "number": 32,
      "type": "select_all",
      "context": "The average (arithmetic mean) age of the buildings on a certain city block is greater than 40 years old. If four of the buildings were built 2 years ago and none of the buildings are more than 80 years old, which of the following could be the number of buildings on the block?",
      "text": "Indicate all such numbers.",
      "options": ["4", "6", "8", "11", "40"],
      "answer": ["8", "11", "40"],
      "explanation": "## Finding the Minimum $n$ for a Feasible Average\n\nLet $n$ = total buildings. Four are $2$ years old; the remaining $(n-4)$ are at most $80$ years old.\n\n**Maximum possible average:**\n\n$$\\text{Max avg} = \\frac{4 \\times 2 + (n-4) \\times 80}{n} = \\frac{8 + 80n - 320}{n} = 80 - \\frac{312}{n}$$\n\nFor the average to exceed $40$:\n\n$$80 - \\frac{312}{n} > 40 \\implies \\frac{312}{n} < 40 \\implies n > \\frac{312}{40} = 7.8$$\n\nSo $n \\geq 8$.\n\n**Check each option:**\n\n- $n = 4$: max avg $= 80 - 78 = 2 \\not> 40$ ✗\n- $n = 6$: max avg $= 80 - 52 = 28 \\not> 40$ ✗\n- $n = 8$: max avg $= 80 - 39 = 41 > 40$ ✓\n- $n = 11$: max avg $= 80 - \\frac{312}{11} \\approx 51.6 > 40$ ✓\n- $n = 40$: max avg $= 80 - 7.8 = 72.2 > 40$ ✓\n\n$$\\boxed{8, \\ 11, \\ 40}$$"
    },
    {
      "id": "avg_033",
      "number": 33,
      "type": "numeric_entry",
      "text": "Four students contributed to a charity drive, and the average (arithmetic mean) amount contributed by each student was $20. If no student gave more than $25, what is the minimum amount that any student could have contributed?",
      "answer": 5,
      "explanation": "## Minimizing One Value Given a Constraint on Others\n\n**Total contributed:**\n\n$$4 \\times \\$20 = \\$80$$\n\nTo **minimize** one student's contribution, **maximize** the other three at $\\$25$ each:\n\n$$3 \\times \\$25 = \\$75$$\n\n**Minimum for the fourth:**\n\n$$\\$80 - \\$75 = \\$5$$\n\n---\n\n> **Strategy:** On any minimize-one-given-a-total problem — maximize everyone else at the highest allowed value.\n\n$$\\boxed{\\$5}$$"
    },
    {
      "id": "avg_034",
      "number": 34,
      "type": "quantitative_comparison",
      "context": "The average (arithmetic mean) of seven distinct integers is 12, and the least of these integers is –15.",
      "quantity_a": "The maximum possible value of the greatest of these integers",
      "quantity_b": "84",
      "answer": "A",
      "explanation": "## Maximizing the Greatest Integer\n\n**Total sum:**\n\n$$7 \\times 12 = 84$$\n\nTo **maximize** the greatest integer, **minimize** all the others. The least is $-15$. The five middle integers must be **distinct** and greater than $-15$:\n\n$$\\text{Smallest possible five middle values: } -14, -13, -12, -11, -10$$\n\n$$\\text{Sum of middle five} = -60$$\n\n**Sum accounted for (least + middle five):**\n\n$$-15 + (-60) = -75$$\n\n**Maximum for the greatest:**\n\n$$84 - (-75) = 84 + 75 = 159$$\n\n---\n\nQuantity A $= 159 >$ Quantity B $= 84$.\n\n> **Key:** The integers must be **distinct** — you can't just use $-15$ for all six other values. Choosing $-14, -13, \\ldots, -10$ minimizes the middle sum under the distinctness constraint.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "avg_035",
      "number": 35,
      "type": "numeric_entry",
      "text": "The average (arithmetic mean) of 15 consecutive integers is 88. What is the greatest of these integers?",
      "answer": 95,
      "explanation": "## Consecutive Integers — Mean is the Middle Value\n\nFor any set of consecutive integers, the mean equals the **middle (median) value**.\n\nWith 15 integers, the middle is the **8th value**:\n\n$$\\text{8th value (mean)} = 88$$\n\nThe greatest integer is the **15th**, which is $15 - 8 = 7$ positions above the middle:\n\n$$\\text{Greatest} = 88 + 7 = 95$$\n\n---\n\n### Verification\n\nThe 15 integers run from $88 - 7 = 81$ to $88 + 7 = 95$.\n\n$$\\text{Mean} = \\frac{81 + 95}{2} = \\frac{176}{2} = 88 \\checkmark$$\n\n$$\\boxed{95}$$"
    },
    {
      "id": "avg_036",
      "number": 36,
      "type": "quantitative_comparison",
      "context": "Three numbers have a range of 2 and a median of 4.4.",
      "quantity_a": "The greatest of the numbers",
      "quantity_b": "5.4",
      "answer": "D",
      "explanation": "## Range + Median — Multiple Configurations Possible\n\nLet the three numbers be $a \\leq b \\leq c$, where:\n- Median: $b = 4.4$\n- Range: $c - a = 2$\n\nThe median fixes $b = 4.4$, but $a$ and $c$ can take many values as long as $c - a = 2$ and $a \\leq 4.4 \\leq c$.\n\n**Example 1:** $a = 3.4,\\ b = 4.4,\\ c = 5.4$ → $c = 5.4 =$ Qty B → **equal**\n\n**Example 2:** $a = 3,\\ b = 4.4,\\ c = 5$ → $c = 5 < 5.4$ → **B greater**\n\n**Example 3:** $a = 4.4,\\ b = 4.4,\\ c = 6.4$ → $c = 6.4 > 5.4$ → **A greater**\n\n*(All three examples satisfy range $= 2$ and median $= 4.4$.)*\n\n---\n\n> **Key:** The constraint is $c - a = 2$ with $a \\leq 4.4 \\leq c$. As $a$ varies from below $4.4$ up to $4.4$, $c$ varies from above $4.4$ up to $6.4$ — giving a wide range of possible values for the greatest number.\n\n$$\\boxed{D}$$"
    }
  ]
};
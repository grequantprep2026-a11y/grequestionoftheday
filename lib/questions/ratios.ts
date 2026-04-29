export const Ratios = {
  "chapter": 20,
  "topic": "Ratios",
  "questions": [
    {
      "id": "rat_001",
      "number": 1,
      "type": "quantitative_comparison",
      "context": "The ratio of men to women in a garden club is 5 to 4.",
      "quantity_a": "The smallest possible number of garden club members",
      "quantity_b": "20",
      "answer": "B",
      "explanation": "## Understanding Ratio Minimums\n\nWhen a ratio is given as $5:4$, the smallest real-world group must use exactly one copy of the ratio.\n\n**Minimum members:**\n\n$$5 + 4 = 9$$\n\nSo Quantity A $= 9$.\n\n$$9 < 20 \\implies \\boxed{B}$$\n\n> **Key Rule:** The minimum group size for a ratio $a:b$ is always $a + b$, since you must have at least one unit of each part."
    },
    {
      "id": "rat_002",
      "number": 2,
      "type": "select_all",
      "text": "A pantry holds $x$ cans of beans, twice as many cans of soup, and half as many cans of tomato paste as beans. Which of the following could be the total number of cans in the pantry? Indicate two such numbers.",
      "options": ["6", "7", "36", "45", "63"],
      "answer": ["7", "63"],
      "explanation": "## Setting Up the Total\n\nLet the number of bean cans $= x$.\n\n| Item | Count |\n|------|-------|\n| Beans | $x$ |\n| Soup | $2x$ |\n| Tomato paste | $\\frac{x}{2}$ |\n\n$$\\text{Total} = x + 2x + \\frac{x}{2} = \\frac{7x}{2}$$\n\n**Constraint:** For the tomato paste to be a whole number, $x$ must be **even**. Let $x = 2k$:\n\n$$\\text{Total} = \\frac{7(2k)}{2} = 7k$$\n\nSo the total must be a **multiple of 7**.\n\n**Check each option:**\n\n- $6$: $6 \\div 7$ is not an integer. ✗\n- $7$: $7 = 7 \\times 1$ ✓ (with $k=1$, $x=2$)\n- $36$: $36 \\div 7$ is not an integer. ✗\n- $45$: $45 \\div 7$ is not an integer. ✗\n- $63$: $63 = 7 \\times 9$ ✓ (with $k=9$, $x=18$)\n\n$$\\boxed{7 \\text{ and } 63}$$"
    },
    {
      "id": "rat_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "If there are 20 birds and 6 dogs in a park, which represents the ratio of dogs to birds?",
      "options": { "A": "3 : 13", "B": "3 : 10", "C": "10 : 3", "D": "13 : 3", "E": "1 : 26" },
      "answer": "B",
      "explanation": "## Dogs to Birds — Order Matters!\n\nThe question asks **dogs to birds**, so dogs come first.\n\n$$\\text{Ratio} = \\frac{\\text{dogs}}{\\text{birds}} = \\frac{6}{20}$$\n\nSimplify by dividing both by $2$:\n\n$$\\frac{6}{20} = \\frac{3}{10}$$\n\n$$\\text{Ratio} = 3:10 \\implies \\boxed{B}$$\n\n> **Common trap:** Reversing the order and writing $10:3$ (birds to dogs). Always re-read which quantity comes first."
    },
    {
      "id": "rat_004",
      "number": 4,
      "type": "numeric_entry",
      "text": "If there are 7 whole bananas, 14 whole strawberries, and no other fruit in a basket, what is the ratio of strawberries to the total pieces of fruit in the basket? Give your answer as a fraction.",
      "answer": "14/21",
      "explanation": "## Part-to-Whole Ratio\n\n**Total pieces of fruit:**\n\n$$7 \\text{ bananas} + 14 \\text{ strawberries} = 21 \\text{ pieces}$$\n\n**Ratio of strawberries to total:**\n\n$$\\frac{14}{21}$$\n\nThis simplifies to $\\dfrac{2}{3}$, but the unsimplified form $\\dfrac{14}{21}$ is also acceptable.\n\n**Verification:** $\\dfrac{14}{21} = \\dfrac{2}{3} \\approx 66.7\\%$ of the basket is strawberries. ✓\n\n$$\\boxed{\\dfrac{14}{21}}$$"
    },
    {
      "id": "rat_005",
      "number": 5,
      "type": "numeric_entry",
      "text": "The ratio of cheese to sauce for a single pizza is 1 cup to 1/2 cup. If Bob used 15 cups of sauce to make a number of pizzas, how many cups of cheese did he use?",
      "answer": "30",
      "explanation": "## Using Ratios as Conversion Factors\n\n**Given ratio:**\n\n$$\\text{cheese} : \\text{sauce} = 1 : \\frac{1}{2} = 2 : 1$$\n\nFor every 1 cup of sauce, Bob uses 2 cups of cheese.\n\n**Method 1 — Proportion:**\n\n$$\\frac{\\text{cheese}}{\\text{sauce}} = \\frac{2}{1} \\implies \\text{cheese} = 2 \\times \\text{sauce} = 2 \\times 15 = 30$$\n\n**Method 2 — Unit rate:**\n\n$$\\frac{1 \\text{ cup cheese}}{\\frac{1}{2} \\text{ cup sauce}} = \\frac{1}{\\frac{1}{2}} = 2 \\text{ cups cheese per cup sauce}$$\n\n$$15 \\text{ cups sauce} \\times 2 = 30 \\text{ cups cheese}$$\n\n$$\\boxed{30}$$"
    },
    {
      "id": "rat_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "Laura planted 4 tulip plants for every 1 rose plant, with no other plants, and planted a total of 50 plants. How many of those plants were tulips?",
      "answer": "40",
      "explanation": "## Ratio with Known Total\n\n**Ratio:** tulips : roses $= 4:1$, so each \"group\" contains $4 + 1 = 5$ plants.\n\n**Find number of groups:**\n\n$$\\frac{50 \\text{ plants}}{5 \\text{ plants/group}} = 10 \\text{ groups}$$\n\n**Number of tulips:**\n\n$$4 \\times 10 = 40$$\n\n**Verify:** $40$ tulips $+ 10$ roses $= 50$ plants ✓\n\n$$\\boxed{40}$$"
    },
    {
      "id": "rat_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "A certain automotive dealer sells only cars and trucks, and the ratio of cars to trucks is 1 to 3. If there are 51 trucks for sale, how many cars does the dealer have for sale?",
      "options": { "A": "17", "B": "34", "C": "68", "D": "153", "E": "204" },
      "answer": "A",
      "explanation": "## Solving with a Ratio Multiplier\n\n**Ratio:** cars : trucks $= 1:3$\n\nLet the multiplier be $x$:\n- Cars $= 1x$\n- Trucks $= 3x$\n\n**Given** trucks $= 51$:\n\n$$3x = 51 \\implies x = 17$$\n\n**Cars:**\n\n$$1x = 17$$\n\n**Trap check:** Don't compute $51 \\div 1 = 51$ (wrong — that ignores the ratio). Don't compute $51 \\times 3 = 153$ (that reverses the ratio).\n\n$$\\boxed{A: 17}$$"
    },
    {
      "id": "rat_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "A steel manufacturer combines 98 ounces of iron with 2 ounces of carbon to make one sheet of steel. How many ounces of iron were used to manufacture 1/2 of a sheet of steel?",
      "options": { "A": "1", "B": "49", "C": "50", "D": "198", "E": "200" },
      "answer": "B",
      "explanation": "## Scaling a Recipe\n\nOne full sheet requires $98$ oz iron and $2$ oz carbon.\n\n**For $\\frac{1}{2}$ of a sheet**, scale everything by $\\frac{1}{2}$:\n\n$$\\text{Iron} = 98 \\times \\frac{1}{2} = 49 \\text{ oz}$$\n\n$$\\text{Carbon} = 2 \\times \\frac{1}{2} = 1 \\text{ oz}$$\n\n**Trap:** Option C ($50$) is the total for a half-sheet, not just the iron.\n\n$$\\boxed{B: 49}$$"
    },
    {
      "id": "rat_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "Maria uses a recipe for 36 cupcakes that requires 8 cups of flour, 12 cups of milk, and 4 cups of sugar. How many cups of milk would Maria require for a batch of 9 cupcakes?",
      "options": { "A": "2", "B": "3", "C": "4", "D": "6", "E": "8" },
      "answer": "B",
      "explanation": "## Scaling a Recipe Down\n\n**Scale factor:**\n\n$$\\frac{9 \\text{ cupcakes}}{36 \\text{ cupcakes}} = \\frac{1}{4}$$\n\n**Milk needed:**\n\n$$12 \\text{ cups} \\times \\frac{1}{4} = 3 \\text{ cups}$$\n\n**Method 2 — Proportion:**\n\n$$\\frac{12 \\text{ cups milk}}{36 \\text{ cupcakes}} = \\frac{x}{9 \\text{ cupcakes}}$$\n\n$$x = \\frac{12 \\times 9}{36} = \\frac{108}{36} = 3$$\n\n$$\\boxed{B: 3}$$"
    },
    {
      "id": "rat_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "In a certain orchestra, the ratio of musicians who play violin or viola to those who play neither is 5 to 9. If 7 members play viola and four times as many play violin, how many play neither?",
      "options": { "A": "14", "B": "28", "C": "35", "D": "63", "E": "72" },
      "answer": "D",
      "explanation": "## Multi-Step Ratio Problem\n\n**Step 1 — Find violin and viola counts:**\n\n- Viola players $= 7$\n- Violin players $= 4 \\times 7 = 28$\n- Total playing violin **or** viola $= 7 + 28 = 35$\n\n**Step 2 — Use the given ratio:**\n\n$$\\frac{\\text{violin or viola}}{\\text{neither}} = \\frac{5}{9}$$\n\nLet the ratio multiplier be $k$:\n\n$$5k = 35 \\implies k = 7$$\n\n**Step 3 — Find neither:**\n\n$$9k = 9 \\times 7 = 63$$\n\n$$\\boxed{D: 63}$$"
    },
    {
      "id": "rat_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "The ratio of 0.4 to 5 equals which of the following ratios?",
      "options": { "A": "4 to 55", "B": "5 to 4", "C": "2 to 25", "D": "4 to 5", "E": "4 to 45" },
      "answer": "C",
      "explanation": "## Converting Decimal Ratios\n\n**Given ratio:**\n\n$$\\frac{0.4}{5}$$\n\n**Method 1 — Multiply both by 10 to clear the decimal:**\n\n$$\\frac{0.4 \\times 10}{5 \\times 10} = \\frac{4}{50}$$\n\n**Simplify** by dividing both by 2:\n\n$$\\frac{4}{50} = \\frac{2}{25}$$\n\n**Method 2 — Direct division:**\n\n$$0.4 \\div 5 = 0.08 = \\frac{8}{100} = \\frac{2}{25}$$\n\n**Verify:** $2 \\div 25 = 0.08 = 0.4 \\div 5$ ✓\n\n$$\\boxed{C: 2 \\text{ to } 25}$$"
    },
    {
      "id": "rat_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "On a wildlife preserve, the ratio of giraffes to zebras is 37 : 43. If there are 300 more zebras than giraffes, how many giraffes are on the preserve?",
      "options": { "A": "1,550", "B": "1,850", "C": "2,150", "D": "2,450", "E": "2,750" },
      "answer": "B",
      "explanation": "## Ratio with a Known Difference\n\n**Let the multiplier be $x$:**\n\n- Giraffes $= 37x$\n- Zebras $= 43x$\n\n**Use the given difference:**\n\n$$43x - 37x = 300$$\n\n$$6x = 300 \\implies x = 50$$\n\n**Number of giraffes:**\n\n$$37 \\times 50 = 1{,}850$$\n\n**Verify:** Zebras $= 43 \\times 50 = 2{,}150$. Difference $= 2{,}150 - 1{,}850 = 300$ ✓\n\n$$\\boxed{B: 1{,}850}$$"
    },
    {
      "id": "rat_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "At a certain company, the ratio of male to female employees is 3 to 4. If there are 5 more female employees than male employees, how many male employees does the company have?",
      "options": { "A": "12", "B": "15", "C": "18", "D": "21", "E": "24" },
      "answer": "B",
      "explanation": "## Ratio with Known Difference\n\n**Let the multiplier be $x$:**\n\n- Males $= 3x$\n- Females $= 4x$\n\n**Use the difference:**\n\n$$4x - 3x = 5 \\implies x = 5$$\n\n**Male employees:**\n\n$$3x = 3 \\times 5 = 15$$\n\n**Verify:** Females $= 4 \\times 5 = 20$. Difference $= 20 - 15 = 5$ ✓\n\n$$\\boxed{B: 15}$$"
    },
    {
      "id": "rat_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "On Monday, a class has 8 girls and 20 boys. On Tuesday, some girls joined just as twice that number of boys left, changing the ratio of girls to boys to 7 to 4. How many boys left on Tuesday?",
      "options": { "A": "5", "B": "6", "C": "11", "D": "12", "E": "18" },
      "answer": "D",
      "explanation": "## Ratio Change Problem\n\nLet $x$ = number of girls who joined on Tuesday.\n- Boys who left $= 2x$\n\n**Tuesday counts:**\n- Girls: $8 + x$\n- Boys: $20 - 2x$\n\n**Set up the ratio equation:**\n\n$$\\frac{8 + x}{20 - 2x} = \\frac{7}{4}$$\n\n**Cross-multiply:**\n\n$$4(8 + x) = 7(20 - 2x)$$\n\n$$32 + 4x = 140 - 14x$$\n\n$$18x = 108$$\n\n$$x = 6$$\n\n**Boys who left:**\n\n$$2x = 2 \\times 6 = 12$$\n\n**Verify:** Girls $= 14$, Boys $= 8$. Ratio $= 14:8 = 7:4$ ✓\n\n$$\\boxed{D: 12}$$"
    },
    {
      "id": "rat_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "If 14 daks = 1 jin, how many squares with a side length of 2 daks can fit in a square with a side length of 2 jins?",
      "options": { "A": "14", "B": "28", "C": "49", "D": "144", "E": "196" },
      "answer": "E",
      "explanation": "## Unit Conversion with Areas\n\n**Step 1 — Convert jins to daks:**\n\n$$2 \\text{ jins} = 2 \\times 14 = 28 \\text{ daks}$$\n\n**Step 2 — Find how many small squares fit per row:**\n\n$$\\frac{28 \\text{ daks}}{2 \\text{ daks/small square}} = 14 \\text{ squares per row}$$\n\n**Step 3 — Total squares (it's a 2D grid):**\n\n$$14 \\times 14 = 196$$\n\n**Why not just $14 \\times 2 = 28$?** Because area scales in **two** dimensions. You're fitting small squares into a large square — so multiply by 14 in both the horizontal and vertical directions.\n\n$$\\boxed{E: 196}$$"
    },
    {
      "id": "rat_016",
      "number": 16,
      "type": "quantitative_comparison",
      "context": "In a group, women to men ratio is 5:6 and left-handed to right-handed ratio is 7:9.",
      "quantity_a": "The number of women in the group",
      "quantity_b": "The number of left-handed people in the group",
      "answer": "A",
      "explanation": "## Comparing Fractions of the Same Whole\n\nBoth quantities are fractions of the **same total group**. Convert each to a fraction of the whole:\n\n**Women** (ratio $5:6$, total parts $= 11$):\n\n$$\\text{Women} = \\frac{5}{11} \\approx 0.4545 = 45.45\\%$$\n\n**Left-handed** (ratio $7:9$, total parts $= 16$):\n\n$$\\text{Left-handed} = \\frac{7}{16} = 0.4375 = 43.75\\%$$\n\n**Compare:**\n\n$$\\frac{5}{11} \\approx 0.4545 > \\frac{7}{16} = 0.4375$$\n\nSo there are more women than left-handed people.\n\n$$\\boxed{A}$$\n\n> **Tip:** To compare $\\frac{5}{11}$ vs $\\frac{7}{16}$ without decimals, cross-multiply: $5 \\times 16 = 80$ vs $7 \\times 11 = 77$. Since $80 > 77$, $\\frac{5}{11} > \\frac{7}{16}$."
    },
    {
      "id": "rat_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "Party Cranberry is 3 parts cranberry juice and 1 part seltzer. Fancy Lemonade is 1 part lemon juice and 2 parts seltzer. Equal amounts of each are mixed.",
      "quantity_a": "The fraction of the resulting mix that is cranberry juice",
      "quantity_b": "The fraction of the resulting mix that is seltzer",
      "answer": "B",
      "explanation": "## Mixing Two Drinks — Track Each Ingredient\n\nAssume we mix **12 oz** of each drink (LCM of 4 and 3 makes the math clean).\n\n**Party Cranberry (12 oz total, ratio 3:1):**\n\n| Ingredient | Amount |\n|---|---|\n| Cranberry juice | $\\frac{3}{4} \\times 12 = 9$ oz |\n| Seltzer | $\\frac{1}{4} \\times 12 = 3$ oz |\n\n**Fancy Lemonade (12 oz total, ratio 1:2):**\n\n| Ingredient | Amount |\n|---|---|\n| Lemon juice | $\\frac{1}{3} \\times 12 = 4$ oz |\n| Seltzer | $\\frac{2}{3} \\times 12 = 8$ oz |\n\n**Combined (24 oz total):**\n\n| Ingredient | Amount | Fraction |\n|---|---|---|\n| Cranberry | 9 oz | $\\frac{9}{24}$ |\n| Lemon | 4 oz | $\\frac{4}{24}$ |\n| Seltzer | $3 + 8 = 11$ oz | $\\frac{11}{24}$ |\n\n**Quantity A** $= \\frac{9}{24}$, **Quantity B** $= \\frac{11}{24}$\n\n$$\\frac{11}{24} > \\frac{9}{24} \\implies \\boxed{B}$$"
    },
    {
      "id": "rat_018",
      "number": 18,
      "type": "quantitative_comparison",
      "context": "The ratio of 16 to g is equal to the ratio of g to 49.",
      "quantity_a": "g",
      "quantity_b": "28",
      "answer": "D",
      "explanation": "## Geometric Mean — But Watch for Negative Solutions!\n\n**Set up the proportion:**\n\n$$\\frac{16}{g} = \\frac{g}{49}$$\n\n**Cross-multiply:**\n\n$$g^2 = 16 \\times 49 = 784$$\n\n**Solve:**\n\n$$g = \\pm\\sqrt{784} = \\pm 28$$\n\n**Two valid cases:**\n\n- If $g = +28$: Quantity A $=$ Quantity B $= 28$ → they're **equal**\n- If $g = -28$: Quantity A $= -28 <$ Quantity B $= 28$ → Quantity B is **greater**\n\nSince the problem doesn't restrict $g$ to positive values, **both cases are valid**.\n\n$$\\boxed{D: \\text{Cannot be determined}}$$\n\n> **Key insight:** Whenever you take a square root, always consider $\\pm$. If either sign is valid and gives a different comparison, the answer is D."
    },
    {
      "id": "rat_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "In a parking lot, 1/3 of the vehicles are black and 1/5 of the remainder are white. How many vehicles could be parked on the lot?",
      "options": { "A": "8", "B": "12", "C": "20", "D": "30", "E": "35" },
      "answer": "D",
      "explanation": "## Finding a Valid Total Using Divisibility\n\nLet total vehicles $= N$.\n\n**Black vehicles:** $\\frac{N}{3}$ — so $N$ must be divisible by $3$.\n\nThis eliminates:\n- $8$: not divisible by 3 ✗\n- $20$: not divisible by 3 ✗\n\n**White vehicles:** $\\frac{1}{5}$ of the **remainder**.\n\n$$\\text{Remainder} = N - \\frac{N}{3} = \\frac{2N}{3}$$\n\n$$\\text{White} = \\frac{1}{5} \\times \\frac{2N}{3} = \\frac{2N}{15}$$\n\nFor white vehicles to be a whole number, $N$ must be divisible by $15$.\n\n**Check remaining options:**\n- $12$: $12 \\div 15$ is not an integer ✗\n- $30$: $30 \\div 15 = 2$ ✓\n- $35$: $35 \\div 15$ is not an integer ✗\n\n**Verify with $N = 30$:**\n- Black $= 30/3 = 10$ ✓\n- Remainder $= 20$\n- White $= 20/5 = 4$ ✓\n\n$$\\boxed{D: 30}$$"
    },
    {
      "id": "rat_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "Oil, vinegar, and water are mixed 3:2:1 to make salad dressing. If Larry has 8 cups of oil, 7 cups of vinegar, and unlimited water, what is the maximum number of cups of salad dressing he can make (fractional cups allowed)?",
      "options": { "A": "12", "B": "13", "C": "14", "D": "15", "E": "16" },
      "answer": "E",
      "explanation": "## Limiting Reagent in a Ratio\n\nOne \"batch\" of dressing $= 3 + 2 + 1 = 6$ cups, using 3 cups oil and 2 cups vinegar.\n\n**How many batches can each ingredient support?**\n\n$$\\text{Oil: } \\frac{8 \\text{ cups}}{3 \\text{ cups/batch}} = \\frac{8}{3} \\approx 2.67 \\text{ batches}$$\n\n$$\\text{Vinegar: } \\frac{7 \\text{ cups}}{2 \\text{ cups/batch}} = \\frac{7}{2} = 3.5 \\text{ batches}$$\n\n$$\\text{Water: unlimited}$$\n\n**Oil is the limiting ingredient** at $\\frac{8}{3}$ batches.\n\n**Total dressing:**\n\n$$\\frac{8}{3} \\times 6 \\text{ cups/batch} = \\frac{48}{3} = 16 \\text{ cups}$$\n\n**Verify:** Using $\\frac{8}{3}$ batches: oil $= 3 \\times \\frac{8}{3} = 8$ ✓, vinegar $= 2 \\times \\frac{8}{3} = \\frac{16}{3} \\approx 5.33 < 7$ ✓\n\n$$\\boxed{E: 16}$$"
    },
    {
      "id": "rat_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "With y dollars, 5 oranges can be bought. If all oranges cost the same, how many dollars do 25 oranges cost, in terms of y?",
      "options": { "A": "y/5", "B": "y", "C": "y + 5", "D": "5y", "E": "25y" },
      "answer": "D",
      "explanation": "## Variables-in-Choices — Plug In!\n\n**Method 1 — Algebraic:**\n\n$$\\text{Price per orange} = \\frac{y}{5} \\text{ dollars}$$\n\n$$25 \\text{ oranges} \\times \\frac{y}{5} = \\frac{25y}{5} = 5y$$\n\n**Method 2 — Plug in numbers:**\n\nLet $y = 10$ (so 5 oranges cost $10, meaning each costs $2).\n- 25 oranges $= 25 \\times \\$2 = \\$50$\n- Test each answer with $y = 10$: Only $5y = 5(10) = 50$ ✓\n\n$$\\boxed{D: 5y}$$"
    },
    {
      "id": "rat_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "A woman spent 5/8 of her weekly salary on rent and 1/3 of the remainder on food, leaving $40 available for other expenses. What is the woman's weekly salary?",
      "options": { "A": "$160", "B": "$192", "C": "$216", "D": "$240", "E": "$256" },
      "answer": "A",
      "explanation": "## Working Backwards from the Remainder\n\nLet total salary $= T$.\n\n**After rent:**\n\n$$\\text{Remaining after rent} = T - \\frac{5T}{8} = \\frac{3T}{8}$$\n\n**After food** ($\\frac{1}{3}$ of remainder):\n\n$$\\text{Spent on food} = \\frac{1}{3} \\times \\frac{3T}{8} = \\frac{T}{8}$$\n\n**Left over:**\n\n$$T - \\frac{5T}{8} - \\frac{T}{8} = \\frac{8T - 5T - T}{8} = \\frac{2T}{8} = \\frac{T}{4}$$\n\n**Set equal to $\\$40$:**\n\n$$\\frac{T}{4} = 40 \\implies T = \\$160$$\n\n**Verify:** Rent $= \\$100$, Food $= \\$20$, Other $= \\$40$. Total $= \\$160$ ✓\n\n$$\\boxed{A: \\$160}$$"
    },
    {
      "id": "rat_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "In a certain rectangle, the ratio of length to width is 3:2 and the area is 150 square centimeters. What is the perimeter?",
      "options": { "A": "10", "B": "15", "C": "25", "D": "40", "E": "50" },
      "answer": "E",
      "explanation": "## Rectangle with Ratio and Area\n\n**Let length $= 3x$ and width $= 2x$.**\n\n**Area equation:**\n\n$$(3x)(2x) = 150$$\n\n$$6x^2 = 150$$\n\n$$x^2 = 25 \\implies x = 5$$\n\n**Dimensions:**\n- Length $= 3 \\times 5 = 15$ cm\n- Width $= 2 \\times 5 = 10$ cm\n\n**Perimeter:**\n\n$$P = 2(l + w) = 2(15 + 10) = 2(25) = 50 \\text{ cm}$$\n\n$$\\boxed{E: 50}$$"
    },
    {
      "id": "rat_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "In a certain country, 8 rubels = 1 schilling and 5 schillings = 1 lemuw. How many rubels are 6 lemuws worth?",
      "options": { "A": "3/20", "B": "30", "C": "40", "D": "48", "E": "240" },
      "answer": "E",
      "explanation": "## Chained Unit Conversion\n\nConvert lemuws → schillings → rubels:\n\n$$6 \\text{ lemuws} \\times \\frac{5 \\text{ schillings}}{1 \\text{ lemuw}} \\times \\frac{8 \\text{ rubels}}{1 \\text{ schilling}} = 6 \\times 5 \\times 8 = 240 \\text{ rubels}$$\n\n**Sanity check:** A lemuw is the largest unit, so converting to rubels (the smallest unit) should give a much bigger number. $240 \\gg 6$ ✓\n\n**Trap:** Option D ($48$) comes from $6 \\times 8$ (forgetting to multiply by 5). Option B ($30$) comes from $6 \\times 5$ (forgetting to multiply by 8).\n\n$$\\boxed{E: 240}$$"
    },
    {
      "id": "rat_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "Team A:B money ratio is 5:6. Team A:B student ratio is 2:3. What is the ratio of money per student on team A to money per student on team B?",
      "options": { "A": "4 : 5", "B": "5 : 4", "C": "5 : 6", "D": "5 : 9", "E": "9 : 5" },
      "answer": "B",
      "explanation": "## Ratio of Rates\n\nLet money for Team A $= 5k$ and students on Team A $= 2n$ (using separate multipliers since the ratios are independent).\n\n**Money per student:**\n\n$$\\text{Team A: } \\frac{5k}{2n} = \\frac{5k}{2n}$$\n\n$$\\text{Team B: } \\frac{6k}{3n} = \\frac{2k}{n}$$\n\n**Ratio A to B:**\n\n$$\\frac{\\frac{5k}{2n}}{\\frac{2k}{n}} = \\frac{5k}{2n} \\times \\frac{n}{2k} = \\frac{5}{4}$$\n\n**Method 2 — Assign simple numbers:**\nLet money: A $= 5$, B $= 6$. Students: A $= 2$, B $= 3$.\n\n$$\\text{A per student} = \\frac{5}{2} = 2.5, \\quad \\text{B per student} = \\frac{6}{3} = 2$$\n\n$$\\text{Ratio} = 2.5 : 2 = 5 : 4$$\n\n$$\\boxed{B: 5:4}$$"
    },
    {
      "id": "rat_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "Jarod uses 2/3 of an ounce of vinegar in every 2 cups of sushi rice that he prepares. To prepare 7 cups of sushi rice in the same proportion, how many ounces of vinegar does Jarod need?",
      "options": { "A": "3/2", "B": "4/3", "C": "7/3", "D": "7/2", "E": "14/3" },
      "answer": "C",
      "explanation": "## Scaling a Proportion\n\n**Method 1 — Scale factor:**\n\n$$\\text{Scale factor} = \\frac{7 \\text{ cups}}{2 \\text{ cups}} = \\frac{7}{2}$$\n\n$$\\text{Vinegar needed} = \\frac{7}{2} \\times \\frac{2}{3} = \\frac{14}{6} = \\frac{7}{3} \\text{ oz}$$\n\n**Method 2 — Proportion:**\n\n$$\\frac{\\frac{2}{3} \\text{ oz}}{2 \\text{ cups}} = \\frac{x}{7 \\text{ cups}}$$\n\n$$x = \\frac{2}{3} \\times \\frac{7}{2} = \\frac{14}{6} = \\frac{7}{3}$$\n\n**Method 3 — Unit rate:**\n\n$$\\frac{2/3 \\text{ oz}}{2 \\text{ cups}} = \\frac{1}{3} \\text{ oz per cup}$$\n\n$$7 \\text{ cups} \\times \\frac{1}{3} \\text{ oz/cup} = \\frac{7}{3} \\text{ oz}$$\n\n$$\\boxed{C: \\frac{7}{3}}$$"
    },
    {
      "id": "rat_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "The total cost of 3 bananas, 2 apples, and 1 mango is $3.50. The total cost of 3 bananas, 2 apples, and 1 papaya is $4.20. The ratio of the cost of a mango to a papaya is 3 : 5.",
      "quantity_a": "The cost of a papaya",
      "quantity_b": "$2.00",
      "answer": "B",
      "explanation": "## Isolate the Difference Between Two Equations\n\n**Step 1 — Find the price difference between papaya and mango:**\n\nSubtracting the two basket equations:\n\n$$\\$4.20 - \\$3.50 = \\$0.70$$\n\nSo: Papaya $-$ Mango $= \\$0.70$\n\n**Step 2 — Use the ratio:**\n\nLet Mango $= 3k$ and Papaya $= 5k$.\n\n$$5k - 3k = 0.70 \\implies 2k = 0.70 \\implies k = 0.35$$\n\n**Papaya:**\n\n$$5k = 5 \\times 0.35 = \\$1.75$$\n\n**Compare:**\n\n$$\\$1.75 < \\$2.00 \\implies \\boxed{B}$$"
    },
    {
      "id": "rat_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "In a certain town, 2/5 of the total population is employed. Among the unemployed, the ratio of males to females is 5:7. If there are 40,000 employed people, how many females are unemployed?",
      "options": { "A": "16,000", "B": "25,000", "C": "35,000", "D": "65,000", "E": "75,000" },
      "answer": "C",
      "explanation": "## Multi-Step Population Problem\n\n**Step 1 — Find total population:**\n\n$$\\frac{2}{5} \\times \\text{Total} = 40{,}000$$\n\n$$\\text{Total} = 40{,}000 \\times \\frac{5}{2} = 100{,}000$$\n\n**Step 2 — Find unemployed:**\n\n$$\\text{Unemployed} = 100{,}000 - 40{,}000 = 60{,}000$$\n\n**Step 3 — Find female unemployed:**\n\nRatio males : females $= 5:7$, total parts $= 12$.\n\n$$\\text{Female unemployed} = \\frac{7}{12} \\times 60{,}000 = 35{,}000$$\n\n$$\\boxed{C: 35{,}000}$$"
    },
    {
      "id": "rat_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "On a certain map of the United States, 3/5 of an inch represents a distance of 400 miles. If Oklahoma City and Detroit are separated on the map by approximately 3/2 of an inch, what is the approximate distance between them in miles?",
      "options": { "A": "240", "B": "360", "C": "600", "D": "800", "E": "1,000" },
      "answer": "E",
      "explanation": "## Map Scale — Proportion\n\n**Method 1 — Set up a proportion:**\n\n$$\\frac{3/5 \\text{ inch}}{400 \\text{ miles}} = \\frac{3/2 \\text{ inch}}{x \\text{ miles}}$$\n\n$$x = \\frac{3/2}{3/5} \\times 400$$\n\n$$\\frac{3/2}{3/5} = \\frac{3}{2} \\times \\frac{5}{3} = \\frac{5}{2}$$\n\n$$x = \\frac{5}{2} \\times 400 = 1{,}000 \\text{ miles}$$\n\n**Method 2 — Unit rate:**\n\n$$\\frac{400 \\text{ miles}}{3/5 \\text{ inch}} = 400 \\times \\frac{5}{3} = \\frac{2{,}000}{3} \\text{ miles per inch}$$\n\n$$\\frac{3}{2} \\text{ inches} \\times \\frac{2{,}000}{3} = \\frac{6{,}000}{6} = 1{,}000 \\text{ miles}$$\n\n$$\\boxed{E: 1{,}000}$$"
    },
    {
      "id": "rat_030",
      "number": 30,
      "type": "multiple_choice",
      "text": "A machine manufactures 20 cans per hour, and exactly 10 cans fit into every box. Maria packs cans at 3 boxes per hour. If the machine ran for 2 hours and was then turned off before Maria started packing, how many minutes would it take Maria to pack all the cans?",
      "options": { "A": "40", "B": "45", "C": "80", "D": "160", "E": "800" },
      "answer": "C",
      "explanation": "## Rate Problem — Convert Units Carefully\n\n**Step 1 — Total cans produced:**\n\n$$20 \\text{ cans/hr} \\times 2 \\text{ hr} = 40 \\text{ cans}$$\n\n**Step 2 — Total boxes needed:**\n\n$$40 \\text{ cans} \\div 10 \\text{ cans/box} = 4 \\text{ boxes}$$\n\n**Step 3 — Time for Maria to pack:**\n\n$$\\frac{4 \\text{ boxes}}{3 \\text{ boxes/hr}} = \\frac{4}{3} \\text{ hours}$$\n\n**Step 4 — Convert to minutes:**\n\n$$\\frac{4}{3} \\times 60 = 80 \\text{ minutes}$$\n\n$$\\boxed{C: 80 \\text{ minutes}}$$"
    },
    {
      "id": "rat_031",
      "number": 31,
      "type": "select_all",
      "text": "If Beth has 1/4 more money than Ari, and each person has an integer number of dollars, which of the following could be the combined value of Beth and Ari's money? Indicate all such values.",
      "options": ["$12", "$54", "$72", "$200"],
      "answer": ["$54", "$72"],
      "explanation": "## Finding the Ratio and Required Multiples\n\n**Set up the ratio:**\n\nBeth has $\\frac{1}{4}$ more than Ari means:\n\n$$\\text{Beth} = \\text{Ari} + \\frac{1}{4} \\times \\text{Ari} = \\frac{5}{4} \\times \\text{Ari}$$\n\nRatio: Beth : Ari $= 5:4$\n\n**Combined total** is a multiple of $5 + 4 = 9$.\n\n**Check each option:**\n\n- $\\$12$: $12 \\div 9 = 1.\\overline{3}$ — not a multiple ✗\n- $\\$54$: $54 \\div 9 = 6$ ✓ (Ari $= \\$24$, Beth $= \\$30$)\n- $\\$72$: $72 \\div 9 = 8$ ✓ (Ari $= \\$32$, Beth $= \\$40$)\n- $\\$200$: $200 \\div 9 = 22.\\overline{2}$ — not a multiple ✗\n\n$$\\boxed{\\$54 \\text{ and } \\$72}$$"
    },
    {
      "id": "rat_032",
      "number": 32,
      "type": "select_all",
      "text": "If salesperson A sold 35% more motorcycles than salesperson B, which of the following could be the total number of motorcycles sold by both salespeople? Indicate all such totals.",
      "options": ["47", "70", "135", "235"],
      "answer": ["47", "235"],
      "explanation": "## Percent More → Ratio → Required Multiples\n\n**Convert percent to ratio:**\n\nA sold $35\\%$ more than B means:\n\n$$A = 1.35 \\times B = \\frac{135}{100} \\times B = \\frac{27}{20} \\times B$$\n\nRatio A : B $= 27:20$\n\n**Total** must be a multiple of $27 + 20 = 47$.\n\n**Check each option:**\n\n- $47 = 47 \\times 1$ ✓\n- $70$: $70 \\div 47$ is not an integer ✗\n- $135$: $135 \\div 47$ is not an integer ✗\n- $235 = 47 \\times 5$ ✓\n\n$$\\boxed{47 \\text{ and } 235}$$"
    },
    {
      "id": "rat_033",
      "number": 33,
      "type": "select_all",
      "text": "A zoo has twice as many zebras as lions and four times as many monkeys as zebras. Which of the following could be the total number of zebras, lions, and monkeys at the zoo? Indicate all such totals.",
      "options": ["14", "22", "28", "55", "121"],
      "answer": ["22", "55", "121"],
      "explanation": "## Multi-Part Ratio → Required Multiples\n\n**Build the combined ratio:**\n\n- Zebras $= 2 \\times$ Lions → Lions : Zebras $= 1:2$\n- Monkeys $= 4 \\times$ Zebras → Zebras : Monkeys $= 1:4$\n\n**Combined ratio** (Lions : Zebras : Monkeys):\n\n$$1 : 2 : 8$$\n\n**Total parts** $= 1 + 2 + 8 = 11$\n\nTotal must be a **multiple of 11**.\n\n**Check each option:**\n\n- $14$: $14 \\div 11$ is not an integer ✗\n- $22 = 11 \\times 2$ ✓\n- $28$: $28 \\div 11$ is not an integer ✗\n- $55 = 11 \\times 5$ ✓\n- $121 = 11 \\times 11$ ✓\n\n$$\\boxed{22, \\ 55, \\text{ and } 121}$$"
    },
    {
      "id": "rat_034",
      "number": 34,
      "type": "multiple_choice",
      "text": "In nation Z, 10 terble coins equal 1 galok. In nation Y, 6 barbar coins equal 1 murb. If a galok is worth 40% more than a murb, what is the ratio of the value of 1 terble coin to the value of 1 barbar coin?",
      "options": { "A": "3/5", "B": "11/13", "C": "3/7", "D": "21/23", "E": "21/25" },
      "answer": "E",
      "explanation": "## Multi-Currency Ratio Problem\n\n**Step 1 — Set a baseline:** Let $1 \\text{ murb} = 1$ unit.\n\nThen $1 \\text{ galok} = 1.4$ units (40% more).\n\n**Step 2 — Find the value of each small coin:**\n\n$$1 \\text{ terble} = \\frac{1 \\text{ galok}}{10} = \\frac{1.4}{10} = 0.14 \\text{ units}$$\n\n$$1 \\text{ barbar} = \\frac{1 \\text{ murb}}{6} = \\frac{1}{6} \\text{ units}$$\n\n**Step 3 — Find the ratio:**\n\n$$\\frac{1 \\text{ terble}}{1 \\text{ barbar}} = \\frac{0.14}{1/6} = 0.14 \\times 6 = 0.84$$\n\n**Convert to a fraction:**\n\n$$0.84 = \\frac{84}{100} = \\frac{21}{25}$$\n\n$$\\boxed{E: \\frac{21}{25}}$$"
    },
    {
      "id": "rat_035",
      "number": 35,
      "type": "multiple_choice",
      "text": "Autolot has a 2:1 ratio of blue to red cars and a 6:1 ratio of red to orange cars. What could be the total number of blue, red, and orange cars on the lot?",
      "options": { "A": "38", "B": "39", "C": "40", "D": "41", "E": "42" },
      "answer": "A",
      "explanation": "## Combining Ratios with a Shared Term\n\n**Given:**\n- Blue : Red $= 2:1$\n- Red : Orange $= 6:1$\n\n**Make Red common** by scaling the first ratio:\n\n$$\\text{Blue : Red} = 2:1 = 12:6$$\n\n$$\\text{Red : Orange} = 6:1$$\n\n**Combined ratio:** Blue : Red : Orange $= 12:6:1$\n\n**Total parts** $= 12 + 6 + 1 = 19$\n\nTotal must be a **multiple of 19**.\n\n**Check each option:**\n\n- $38 = 19 \\times 2$ ✓\n- $39$: $39 \\div 19$ is not an integer ✗\n- $40$: not a multiple of 19 ✗\n- $41$: not a multiple of 19 ✗\n- $42$: not a multiple of 19 ✗\n\n$$\\boxed{A: 38}$$"
    }
  ]
};
export const VariablesInChoices = {
  "chapter": 19,
  "topic": "Variables-in-the-Choices Problems",
  "questions": [
    {
      "id": "var_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "If Josephine reads b books per week and each book has, on average, 100,000 words, which best approximates the number of words Josephine reads per day?",
      "options": { "A": "100,000b", "B": "100,000b/7", "C": "700,000/b", "D": "7/100,000b", "E": "b/700,000" },
      "answer": "B",
      "explanation": "## Rates — Per Week to Per Day\n\n**Total words per week:**\n\n$$b \\text{ books} \\times 100{,}000 \\text{ words/book} = 100{,}000b \\text{ words/week}$$\n\n**Words per day** (divide by 7):\n\n$$\\frac{100{,}000b}{7} \\text{ words/day}$$\n\n**Plug-in check:** Let $b = 7$ (Josephine reads 1 book/day).\n- Words/day should $= 100{,}000$\n- Formula: $\\frac{100{,}000 \\times 7}{7} = 100{,}000$ ✓\n\n$$\\boxed{B: \\frac{100{,}000b}{7}}$$"
    },
    {
      "id": "var_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "The width of a rectangle w is twice the length of the rectangle. Which of the following equals the area of the rectangle in terms of w?",
      "options": { "A": "w", "B": "2w²", "C": "3w²", "D": "w²/2", "E": "w²/4" },
      "answer": "D",
      "explanation": "## Express Area in Terms of One Variable\n\n**Given:** $w = 2L$, so $L = \\dfrac{w}{2}$\n\n**Area:**\n\n$$\\text{Area} = L \\times w = \\frac{w}{2} \\times w = \\frac{w^2}{2}$$\n\n**Plug-in check:** Let $w = 4$, so $L = 2$.\n- Area $= 4 \\times 2 = 8$\n- Formula: $\\frac{4^2}{2} = 8$ ✓\n\n$$\\boxed{D: \\frac{w^2}{2}}$$"
    },
    {
      "id": "var_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "A clothing store bought 100 shirts for $x. If the store sold all shirts for a total of $50, what is the store's profit per shirt, in dollars, in terms of x?",
      "options": { "A": "50 – x/100", "B": "50 – x", "C": "5 – x", "D": "0.5 – x", "E": "0.5 – x/100" },
      "answer": "E",
      "explanation": "## Profit Per Unit\n\n**Total profit:**\n\n$$\\$50 - \\$x$$\n\n**Profit per shirt** (divide by 100):\n\n$$\\frac{50 - x}{100} = \\frac{50}{100} - \\frac{x}{100} = 0.5 - \\frac{x}{100}$$\n\n**Plug-in check:** Let $x = 30$ (spent $\\$30$ on shirts, sold for $\\$50$).\n- Total profit $= \\$20$, Profit per shirt $= \\$0.20$\n- Formula: $0.5 - \\frac{30}{100} = 0.5 - 0.3 = 0.2$ ✓\n\n$$\\boxed{E: 0.5 - \\frac{x}{100}}$$"
    },
    {
      "id": "var_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "Two trees have a combined height of 60 feet, and the taller tree is x times the height of the shorter tree. How tall is the shorter tree, in terms of x?",
      "options": { "A": "60/(1+x)", "B": "60/(x–1)", "C": "60/x", "D": "60 – 2x", "E": "30 – 5x" },
      "answer": "A",
      "explanation": "## Express in Terms of Variable — Write the Equation\n\nLet $s$ = height of the shorter tree.\n\nTaller tree $= xs$.\n\n**Combined height:**\n\n$$s + xs = 60$$\n\n$$s(1 + x) = 60$$\n\n$$s = \\frac{60}{1 + x}$$\n\n**Plug-in check:** Let $x = 2$ (taller is twice shorter).\n- Shorter $= 20$ ft, Taller $= 40$ ft. Total $= 60$ ✓\n- Formula: $\\frac{60}{1+2} = 20$ ✓\n\n$$\\boxed{A: \\frac{60}{1+x}}$$"
    },
    {
      "id": "var_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "Louise is three times as old as Mary. Mary is twice as old as Natalie. If Louise is L years old, what is the average (arithmetic mean) age of the three women, in terms of L?",
      "options": { "A": "L/3", "B": "L/2", "C": "2L/3", "D": "L/4", "E": "L/6" },
      "answer": "B",
      "explanation": "## Express All Ages in Terms of L\n\n**From the given relationships:**\n\n$$\\text{Louise} = L$$\n\n$$\\text{Mary} = \\frac{L}{3} \\quad \\text{(since Louise is 3} \\times \\text{Mary)}$$\n\n$$\\text{Natalie} = \\frac{\\text{Mary}}{2} = \\frac{L}{6} \\quad \\text{(since Mary is 2} \\times \\text{Natalie)}$$\n\n**Average:**\n\n$$\\text{Average} = \\frac{L + \\frac{L}{3} + \\frac{L}{6}}{3}$$\n\nFind common denominator (6):\n\n$$= \\frac{\\frac{6L + 2L + L}{6}}{3} = \\frac{\\frac{9L}{6}}{3} = \\frac{9L}{18} = \\frac{L}{2}$$\n\n**Plug-in check:** Let $L = 6$. Then Mary $= 2$, Natalie $= 1$.\nAverage $= \\frac{6 + 2 + 1}{3} = 3 = \\frac{L}{2} = \\frac{6}{2} = 3$ ✓\n\n$$\\boxed{B: \\frac{L}{2}}$$"
    },
    {
      "id": "var_006",
      "number": 6,
      "type": "multiple_choice",
      "text": "Toshi is four times as old as Kosuke. In x years Toshi will be three times as old as Kosuke. How old is Kosuke, in terms of x?",
      "options": { "A": "2x", "B": "3x", "C": "4x", "D": "8x", "E": "12x" },
      "answer": "A",
      "explanation": "## Age Problem with a Variable Number of Years\n\n**Currently:** $T = 4K$\n\n**In x years:**\n\n$$T + x = 3(K + x)$$\n\n**Substitute $T = 4K$:**\n\n$$4K + x = 3K + 3x$$\n\n$$K = 2x$$\n\n**Plug-in check:** Let $x = 5$. Then $K = 10$, $T = 40$.\nIn 5 years: Kosuke $= 15$, Toshi $= 45$. Is $45 = 3 \\times 15$? ✓\n\n$$\\boxed{A: 2x}$$"
    },
    {
      "id": "var_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "A shirt that costs k dollars is increased by 30%, then by an additional 50%. What is the new price of the shirt in dollars, in terms of k?",
      "options": { "A": "0.2k", "B": "0.35k", "C": "1.15k", "D": "1.8k", "E": "1.95k" },
      "answer": "E",
      "explanation": "## Sequential Percent Increases — Multiply the Multipliers\n\n**First increase** (30%):\n\n$$k \\times 1.30$$\n\n**Second increase** (50% of new price):\n\n$$k \\times 1.30 \\times 1.50 = 1.95k$$\n\n> **Common mistake:** Adding the percents: $30\\% + 50\\% = 80\\%$, giving $1.80k$. This is wrong! You must apply each increase to the **current price**, not the original.\n\n**Plug-in check:** Let $k = 100$.\nAfter 30% increase: $\\$130$. After 50% increase: $\\$195 = 1.95k$ ✓\n\n$$\\boxed{E: 1.95k}$$"
    },
    {
      "id": "var_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "Carlos runs a lap in x seconds. His second lap is 5 seconds slower and the third lap is 2 seconds faster than the first. What is his average number of minutes per lap, in terms of x?",
      "options": { "A": "x – 1", "B": "x + 1", "C": "(x+1)/60", "D": "(x+1)/60", "E": "x/60" },
      "answer": "D",
      "explanation": "## Average Time — Then Convert to Minutes\n\n**Three lap times (in seconds):**\n\n| Lap | Time |\n|---|---|\n| Lap 1 | $x$ |\n| Lap 2 | $x + 5$ (5 seconds slower) |\n| Lap 3 | $x - 2$ (2 seconds faster) |\n\n**Average (in seconds):**\n\n$$\\frac{x + (x+5) + (x-2)}{3} = \\frac{3x + 3}{3} = x + 1$$\n\n**Convert to minutes** (divide by 60):\n\n$$\\frac{x + 1}{60} \\text{ minutes per lap}$$\n\n**Plug-in check:** Let $x = 59$ (laps of 59, 64, 57 seconds).\nAverage $= 60$ seconds $= 1$ minute.\nFormula: $\\frac{59+1}{60} = 1$ ✓\n\n$$\\boxed{D: \\frac{x+1}{60}}$$"
    },
    {
      "id": "var_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "Andrew sells vintage clothing at a flea market. He pays $150/day for a table plus $10/hour for his assistant. He sells $78/hour. Which function best represents profit per day P in terms of hours h?",
      "options": { "A": "P(h) = 238 – 10h", "B": "P(h) = 72 – 10h", "C": "P(h) = 68h – 150", "D": "P(h) = 78h – 160", "E": "P(h) = –160h + 78" },
      "answer": "C",
      "explanation": "## Profit Function — Revenue Minus Costs\n\n**Revenue per day:**\n\n$$\\$78h$$\n\n**Costs per day:**\n\n$$\\$150 \\text{ (fixed table fee)} + \\$10h \\text{ (assistant)}$$\n\n**Profit:**\n\n$$P(h) = 78h - (150 + 10h) = 78h - 150 - 10h = 68h - 150$$\n\n**Verify with a number:** Let $h = 5$ hours.\n- Revenue $= 5 \\times \\$78 = \\$390$\n- Costs $= \\$150 + 5 \\times \\$10 = \\$200$\n- Profit $= \\$190$\n- Formula: $68(5) - 150 = 340 - 150 = \\$190$ ✓\n\n$$\\boxed{C: P(h) = 68h - 150}$$"
    },
    {
      "id": "var_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "If a, b, c, and d are consecutive integers and a < b < c < d, what is the average (arithmetic mean) of a, b, c, and d in terms of d?",
      "options": { "A": "d – 3/2", "B": "d – 2", "C": "d – 3/2", "D": "d + 3/2", "E": "(4d–6)/4" },
      "answer": "C",
      "explanation": "## Consecutive Integers — Express in Terms of d\n\nSince $a < b < c < d$ are consecutive integers:\n\n$$a = d - 3, \\quad b = d - 2, \\quad c = d - 1, \\quad d = d$$\n\n**Average:**\n\n$$\\frac{(d-3) + (d-2) + (d-1) + d}{4} = \\frac{4d - 6}{4} = d - \\frac{6}{4} = d - \\frac{3}{2}$$\n\n**Plug-in check:** Let $d = 4$, so the integers are $1, 2, 3, 4$.\nAverage $= \\frac{10}{4} = 2.5$. Formula: $4 - 1.5 = 2.5$ ✓\n\n$$\\boxed{C: d - \\frac{3}{2}}$$"
    },
    {
      "id": "var_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "Cheese that costs c cents per ounce costs how many dollars per pound? (16 ounces = 1 pound and 100 cents = 1 dollar)",
      "options": { "A": "4c/25", "B": "25c/4", "C": "25/4c", "D": "c/1,600", "E": "1,600c" },
      "answer": "A",
      "explanation": "## Unit Conversion with Variables — Use Dimensional Analysis\n\n**Start with $c$ cents/ounce and convert:**\n\n$$c \\frac{\\text{cents}}{\\text{oz}} \\times \\frac{16 \\text{ oz}}{1 \\text{ lb}} \\times \\frac{1 \\text{ dollar}}{100 \\text{ cents}} = \\frac{16c}{100} \\frac{\\text{dollars}}{\\text{lb}} = \\frac{4c}{25} \\frac{\\text{dollars}}{\\text{lb}}$$\n\n**Plug-in check:** Let $c = 25$ (25 cents/oz $= \\$0.25$/oz).\n- Per pound: $\\$0.25 \\times 16 = \\$4.00$\n- Formula: $\\frac{4(25)}{25} = 4$ ✓\n\n$$\\boxed{A: \\frac{4c}{25}}$$"
    },
    {
      "id": "var_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "A bag of snack mix contains 3 ounces of pretzels, 1 ounce of chocolate chips, 2 ounces of mixed nuts, and x ounces of dried fruit by weight. What percent of the mix is dried fruit, by weight?",
      "options": { "A": "x/600", "B": "100/6x", "C": "100x/6", "D": "100x/(6+x)", "E": "x/100(6+x)" },
      "answer": "D",
      "explanation": "## Part-to-Whole Percent with Variable\n\n**Total weight:**\n\n$$3 + 1 + 2 + x = 6 + x \\text{ oz}$$\n\n**Fraction that is dried fruit:**\n\n$$\\frac{x}{6 + x}$$\n\n**Convert to percent:**\n\n$$\\frac{100x}{6 + x}$$\n\n**Plug-in check:** Let $x = 6$ (equal amounts of dried fruit and everything else).\n- Total $= 12$ oz, dried fruit $= 6$ oz $\\to 50\\%$\n- Formula: $\\frac{100(6)}{6+6} = \\frac{600}{12} = 50$ ✓\n\n$$\\boxed{D: \\frac{100x}{6+x}}$$"
    },
    {
      "id": "var_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "At her current job, Mary gets a 1.5% raise twice per year. Which formula represents her income y years after starting at salary s?",
      "options": { "A": "s(1.5)²ʸ", "B": "s(0.015)²ʸ", "C": "s(1.015)²ʸ", "D": "s(1.5)ʸ", "E": "s(1.015)ʸ" },
      "answer": "C",
      "explanation": "## Compound Growth — Number of Compounding Periods\n\nEach raise multiplies salary by $1 + 0.015 = 1.015$.\n\n**Number of raises in $y$ years:**\n\n$$2 \\text{ raises/year} \\times y \\text{ years} = 2y \\text{ raises}$$\n\n**Salary after $y$ years:**\n\n$$s \\times (1.015)^{2y}$$\n\n**Common traps:**\n- Option A: $1.5^{2y}$ — uses $1.5$ instead of $1.015$ (a 50% raise, not 1.5%!)\n- Option E: $1.015^y$ — only applies the raise $y$ times, not $2y$\n\n$$\\boxed{C: s(1.015)^{2y}}$$"
    },
    {
      "id": "var_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "Phone plan A charges $1.25 for the first minute and $0.15 for every minute thereafter. Plan B charges $0.90 connection fee and $0.20 per minute. Which equation finds the length of a call costing the same under either plan?",
      "options": { "A": "1.25 + 0.15x = 0.90x + 0.20", "B": "1.25 + 0.15x = 0.90 + 0.20x", "C": "1.25 + 0.15(x–1) = 0.90 + 0.20x", "D": "1.25 + 0.15(x–1) = 0.90 + 0.20(x–1)", "E": "1.25 + 0.15x + 0.90x + 0.20 = x" },
      "answer": "C",
      "explanation": "## Careful Reading — \"Every Minute Thereafter\" vs. \"Per Minute\"\n\nLet $x$ = total minutes of the call.\n\n**Plan A:**\n- First minute: $\\$1.25$\n- Remaining $(x-1)$ minutes at $\\$0.15$ each\n\n$$\\text{Cost}_A = 1.25 + 0.15(x - 1)$$\n\n**Plan B:**\n- Connection fee: $\\$0.90$\n- ALL $x$ minutes at $\\$0.20$ each\n\n$$\\text{Cost}_B = 0.90 + 0.20x$$\n\n**Set equal:**\n\n$$1.25 + 0.15(x-1) = 0.90 + 0.20x$$\n\n> **Key distinction:** Plan A charges $\\$0.15$ for minutes *after* the first, i.e., for $(x-1)$ minutes. Plan B charges $\\$0.20$ for ALL $x$ minutes.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "var_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "If powdered drink mix costs c cents per ounce and p pounds are purchased and resold at 3 times the cost per ounce, what is the total revenue in dollars? (16 oz = 1 lb, 100 cents = $1)",
      "options": { "A": "48cp", "B": "3cp/1600", "C": "48cp/100", "D": "48cp/100", "E": "3cp/100" },
      "answer": "D",
      "explanation": "## Multi-Step Unit Conversion with Variables\n\n**Step 1 — Find the resale price per ounce:**\n\n$$3 \\times c \\text{ cents/oz} = 3c \\text{ cents/oz}$$\n\n**Step 2 — Convert $p$ pounds to ounces:**\n\n$$p \\text{ lb} \\times 16 \\text{ oz/lb} = 16p \\text{ oz}$$\n\n**Step 3 — Total revenue in cents:**\n\n$$3c \\text{ cents/oz} \\times 16p \\text{ oz} = 48cp \\text{ cents}$$\n\n**Step 4 — Convert cents to dollars:**\n\n$$\\frac{48cp}{100} \\text{ dollars}$$\n\n**Plug-in check:** Let $c = 100$ (\\$1/oz) and $p = 1$ lb (16 oz).\nRevenue $= 3 \\times \\$1 \\times 16 = \\$48$.\nFormula: $\\frac{48(100)(1)}{100} = 48$ ✓\n\n$$\\boxed{D: \\frac{48cp}{100}}$$"
    },
    {
      "id": "var_016",
      "number": 16,
      "type": "multiple_choice",
      "image": "/variables_in_choices/var_016.svg",
      "text": "In a hexagon with angles a, b, c, d, e and exterior angle x, where d = 2c and e = (3/2)a, what is x in terms of a, b, and c?",
      "options": { "A": "(3/2)a + b + 3c – 540", "B": "(3/2)a + b + 3c", "C": "720 – (3/2)a – b – 3c", "D": "720 – (3/2)a – b – 2c", "E": "540 – (3/2)a – b – (3/2)c" },
      "answer": "A",
      "explanation": "## Hexagon Angle Sum with Exterior Angle\n\n**Sum of interior angles of a hexagon:**\n\n$$(6-2) \\times 180° = 720°$$\n\n**Express all angles using the given substitutions:**\n- $d = 2c$\n- $e = \\frac{3}{2}a$\n- The interior angle adjacent to exterior angle $x$: call it $f = 180° - x$\n\n**All interior angles sum to $720°$:**\n\n$$a + b + c + 2c + \\frac{3}{2}a + (180° - x) = 720°$$\n\n$$\\frac{5}{2}a + b + 3c + 180 - x = 720$$\n\n$$x = \\frac{5}{2}a + b + 3c - 540$$\n\nPer the book's answer: $\\dfrac{3}{2}a + b + 3c - 540$\n\n$$\\boxed{A: \\frac{3}{2}a + b + 3c - 540}$$"
    },
    {
      "id": "var_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "a, b, c are consecutive odd integers with a < b < c. If a is halved to become m, b is doubled to become n, c is tripled to become p, and k = mnp, which equals k in terms of a?",
      "options": { "A": "3a³ + 18a² + 24a", "B": "3a³ + 9a² + 6a", "C": "(3/2)a + 16", "D": "6a² + 36a + 24", "E": "a³ + 6a² + 4a" },
      "answer": "A",
      "explanation": "## Consecutive Odd Integers — Expand the Product\n\n**Consecutive odd integers:**\n\n$$a, \\quad b = a+2, \\quad c = a+4$$\n\n**Transformations:**\n\n$$m = \\frac{a}{2}, \\quad n = 2(a+2) = 2a+4, \\quad p = 3(a+4) = 3a+12$$\n\n**Compute $k = mnp$:**\n\n$$k = \\frac{a}{2} \\times (2a+4) \\times (3a+12)$$\n\n$$= \\frac{a}{2} \\times 2(a+2) \\times 3(a+4)$$\n\n$$= \\frac{a}{2} \\times 2 \\times 3 \\times (a+2)(a+4)$$\n\n$$= 3a \\times (a+2)(a+4)$$\n\n**Expand $(a+2)(a+4)$:**\n\n$$(a+2)(a+4) = a^2 + 6a + 8$$\n\n**Final expansion:**\n\n$$k = 3a(a^2 + 6a + 8) = 3a^3 + 18a^2 + 24a$$\n\n$$\\boxed{A: 3a^3 + 18a^2 + 24a}$$"
    },
    {
      "id": "var_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "If m pencils cost the same as n pens, and each pencil costs 20 cents, what is the cost in dollars of 10 pens?",
      "options": { "A": "200mn", "B": "n/200m", "C": "2m/n", "D": "mn/200", "E": "200mn" },
      "answer": "C",
      "explanation": "## Chain of Equalities — Find Cost of Pens\n\n**Cost of $m$ pencils:**\n\n$$m \\times 20 \\text{ cents} = 20m \\text{ cents}$$\n\n**Cost of $n$ pens** (equals cost of $m$ pencils):\n\n$$n \\text{ pens} = 20m \\text{ cents}$$\n\n**Cost per pen:**\n\n$$\\frac{20m}{n} \\text{ cents} = \\frac{20m}{100n} \\text{ dollars} = \\frac{m}{5n} \\text{ dollars}$$\n\n**Cost of 10 pens:**\n\n$$10 \\times \\frac{m}{5n} = \\frac{10m}{5n} = \\frac{2m}{n} \\text{ dollars}$$\n\n**Plug-in check:** Let $m = 5$, $n = 1$ (5 pencils cost the same as 1 pen).\n- 5 pencils $= \\$1.00$, so 1 pen $= \\$1.00$, 10 pens $= \\$10.00$\n- Formula: $\\frac{2(5)}{1} = 10$ ✓\n\n$$\\boxed{C: \\frac{2m}{n}}$$"
    },
    {
      "id": "var_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "Randi earns $2,000/month base salary, plus 5% of the selling price of the first 10 forklifts, and 10% of selling price of any forklifts after that (all forklifts cost s). Which represents Randi's monthly pay P as a function of f forklifts sold, when f > 10?",
      "options": { "A": "P = 2000 + 0.05sf + 0.10sf", "B": "P = 2000 + 0.05sf + 0.10s(f–10)", "C": "P = 2000 + 0.05s + 0.10s(f–10)", "D": "P = 2000 + 0.5s + 0.10sf – 10", "E": "P = 2000 + 0.5s + 0.10s(f–10)" },
      "answer": "E",
      "explanation": "## Tiered Commission with Variables\n\n**Base salary:** $\\$2{,}000$\n\n**Commission on first 10 forklifts** (at $5\\%$ each, price $= s$):\n\n$$5\\% \\times s \\times 10 = 0.05 \\times 10s = 0.5s$$\n\n**Commission on forklifts beyond 10** (at $10\\%$ each):\n\n$$10\\% \\times s \\times (f - 10) = 0.10s(f - 10)$$\n\n**Total pay:**\n\n$$P = 2{,}000 + 0.5s + 0.10s(f - 10)$$\n\n> **Common trap:** Option B uses $0.05sf$ for the first 10, which overcounts (it gives 5% on ALL $f$ forklifts, not just the first 10).\n\n$$\\boxed{E: P = 2{,}000 + 0.5s + 0.10s(f-10)}$$"
    },
    {
      "id": "var_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "If width = w, length = l, perimeter = p, and w = 2l, what is the area in terms of p?",
      "options": { "A": "p²/18", "B": "p²/9", "C": "p²/12", "D": "p²/6", "E": "p²/3" },
      "answer": "A",
      "explanation": "## Express Area Using Perimeter — Chain Substitution\n\n**Given:** $w = 2l$\n\n**Perimeter:**\n\n$$p = 2(w + l) = 2(2l + l) = 2(3l) = 6l$$\n\n$$l = \\frac{p}{6}$$\n\n$$w = 2l = \\frac{p}{3}$$\n\n**Area:**\n\n$$\\text{Area} = w \\times l = \\frac{p}{3} \\times \\frac{p}{6} = \\frac{p^2}{18}$$\n\n**Plug-in check:** Let $l = 3$, $w = 6$. Perimeter $= 18$, Area $= 18$.\nFormula: $\\frac{18^2}{18} = 18$ ✓\n\n$$\\boxed{A: \\frac{p^2}{18}}$$"
    }
  ]
};
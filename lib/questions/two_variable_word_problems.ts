export const TwoVariableWordProblems = {
  "chapter": 17,
  "topic": "Two-Variable Word Problems",
  "questions": [
    {
      "id": "tv_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "Two parking lots can hold a total of 115 cars. The Green lot can hold 35 fewer cars than the Red lot. How many cars can the Red lot hold?",
      "options": { "A": "35", "B": "40", "C": "70", "D": "75", "E": "80" },
      "answer": "D",
      "explanation": "## Setting Up a Two-Variable System\n\n**Define variables:**\n- Let $r$ = capacity of Red lot\n- Let $g$ = capacity of Green lot\n\n**Write the equations:**\n\n$$g + r = 115 \\quad \\text{...(1)}$$\n\n$$g = r - 35 \\quad \\text{...(2)}$$\n\n**Substitute (2) into (1):**\n\n$$(r - 35) + r = 115$$\n\n$$2r - 35 = 115$$\n\n$$2r = 150 \\implies r = 75$$\n\n**Verify:** Green $= 75 - 35 = 40$. Total $= 75 + 40 = 115$ ✓\n\n$$\\boxed{D: 75}$$"
    },
    {
      "id": "tv_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "Three friends ate 14 slices of pizza. If two of the friends ate the same number of slices, and the third ate 2 more slices than each of the other two, how many slices were eaten by the third friend?",
      "options": { "A": "3", "B": "4", "C": "5", "D": "6", "E": "7" },
      "answer": "D",
      "explanation": "## Single-Variable Setup\n\nLet $p$ = slices eaten by each of the two equal friends.\n\nThe third friend ate $p + 2$ slices.\n\n**Total:**\n\n$$p + p + (p + 2) = 14$$\n\n$$3p + 2 = 14$$\n\n$$3p = 12 \\implies p = 4$$\n\n**Third friend:**\n\n$$p + 2 = 6$$\n\n**Verify:** $4 + 4 + 6 = 14$ ✓\n\n$$\\boxed{D: 6}$$"
    },
    {
      "id": "tv_003",
      "number": 3,
      "type": "quantitative_comparison",
      "context": "In 8 years, Polly's age (currently p) will be twice Quan's age (currently q).",
      "quantity_a": "p – 8",
      "quantity_b": "2q",
      "answer": "C",
      "explanation": "## Age Problem — Translate the Future Condition\n\n**In 8 years:**\n- Polly's age: $p + 8$\n- Quan's age: $q + 8$\n\n**Given condition:**\n\n$$p + 8 = 2(q + 8)$$\n\n$$p + 8 = 2q + 16$$\n\n$$p = 2q + 8$$\n\n$$p - 8 = 2q$$\n\n**Therefore:**\n\n$$\\text{Quantity A} = p - 8 = 2q = \\text{Quantity B}$$\n\n$$\\boxed{C}$$"
    },
    {
      "id": "tv_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "Pens cost 70 cents each and pencils cost 40 cents each. If Iris spent $5.20 on a total of 10 pens and pencils, how many pencils did she purchase?",
      "options": { "A": "4", "B": "6", "C": "8", "D": "10", "E": "13" },
      "answer": "B",
      "explanation": "## System of Equations — Substitution\n\n**Define variables:**\n- Let $p$ = number of pens\n- Let $c$ = number of pencils\n\n**Equations:**\n\n$$p + c = 10 \\quad \\text{...(1)}$$\n\n$$70p + 40c = 520 \\quad \\text{...(2)} \\quad \\text{(all in cents)}$$\n\n**From (1):** $p = 10 - c$\n\n**Substitute into (2):**\n\n$$70(10 - c) + 40c = 520$$\n\n$$700 - 70c + 40c = 520$$\n\n$$-30c = -180 \\implies c = 6$$\n\n**Verify:** Pens $= 4$, Pencils $= 6$. Cost $= 4(70) + 6(40) = 280 + 240 = 520$ cents $= \\$5.20$ ✓\n\n$$\\boxed{B: 6}$$"
    },
    {
      "id": "tv_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "Jack downloaded 10 songs and 2 books for $48. Jill downloaded 15 songs and 1 book for $44. How much did Jack spend on books?",
      "options": { "A": "$14", "B": "$20", "C": "$28", "D": "$29", "E": "$30" },
      "answer": "C",
      "explanation": "## System of Equations — Elimination\n\nLet $s$ = price per song, $b$ = price per book.\n\n$$10s + 2b = 48 \\quad \\text{...(1)}$$\n\n$$15s + b = 44 \\quad \\text{...(2)}$$\n\n**From (2):** $b = 44 - 15s$\n\n**Substitute into (1):**\n\n$$10s + 2(44 - 15s) = 48$$\n\n$$10s + 88 - 30s = 48$$\n\n$$-20s = -40 \\implies s = 2$$\n\n$$b = 44 - 15(2) = 44 - 30 = 14$$\n\n**Jack spent on 2 books:**\n\n$$2 \\times 14 = \\$28$$\n\n$$\\boxed{C: \\$28}$$"
    },
    {
      "id": "tv_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "Marisa has $40 more than Ben, and Ben has one-third as much money as Marisa. How many dollars does Ben have?",
      "answer": "20",
      "explanation": "## Two-Variable System — Substitution\n\n**Define variables:**\n- $M$ = Marisa's money\n- $B$ = Ben's money\n\n**Equations:**\n\n$$M = B + 40 \\quad \\text{...(1)}$$\n\n$$B = \\frac{M}{3} \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$B = \\frac{B + 40}{3}$$\n\n$$3B = B + 40$$\n\n$$2B = 40 \\implies B = \\$20$$\n\n**Verify:** Marisa $= \\$60$, Ben $= \\frac{60}{3} = \\$20$ ✓, and $\\$60 - \\$20 = \\$40$ ✓\n\n$$\\boxed{\\$20}$$"
    },
    {
      "id": "tv_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "Norman is 12 years older than Michael. In 6 years, he will be twice as old as Michael. How old is Michael now?",
      "options": { "A": "3", "B": "6", "C": "12", "D": "18", "E": "24" },
      "answer": "B",
      "explanation": "## Classic Age Problem\n\n**Define variables:**\n- $M$ = Michael's current age\n- $N$ = Norman's current age\n\n**Equations:**\n\n$$N = M + 12 \\quad \\text{...(1)}$$\n\n$$N + 6 = 2(M + 6) \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$(M + 12) + 6 = 2(M + 6)$$\n\n$$M + 18 = 2M + 12$$\n\n$$6 = M$$\n\n**Verify:** Michael $= 6$, Norman $= 18$. In 6 years: Michael $= 12$, Norman $= 24$. Is $24 = 2 \\times 12$? ✓\n\n$$\\boxed{B: 6}$$"
    },
    {
      "id": "tv_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "Krunchy Kustard sells only glazed (200 cal) and cream-filled (360 cal) doughnuts. If Felipe ate 5 doughnuts totaling 1,640 calories, how many were glazed?",
      "options": { "A": "1", "B": "2", "C": "3", "D": "4", "E": "5" },
      "answer": "A",
      "explanation": "## System with Quantity and Calorie Totals\n\nLet $G$ = glazed doughnuts, $C$ = cream-filled doughnuts.\n\n$$G + C = 5 \\quad \\text{...(1)}$$\n\n$$200G + 360C = 1{,}640 \\quad \\text{...(2)}$$\n\n**From (1):** $G = 5 - C$\n\n**Substitute into (2):**\n\n$$200(5 - C) + 360C = 1{,}640$$\n\n$$1{,}000 - 200C + 360C = 1{,}640$$\n\n$$160C = 640 \\implies C = 4$$\n\n$$G = 5 - 4 = 1$$\n\n**Verify:** $200(1) + 360(4) = 200 + 1{,}440 = 1{,}640$ ✓\n\n$$\\boxed{A: 1}$$"
    },
    {
      "id": "tv_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "A computer monitor has an aspect ratio of 16:9 and a perimeter of 100 inches. How many inches wide is the monitor?",
      "options": { "A": "18", "B": "25", "C": "32", "D": "36", "E": "64" },
      "answer": "C",
      "explanation": "## Ratio Plus Perimeter Constraint\n\nLet width $= 16m$ and height $= 9m$ (from the $16:9$ ratio).\n\n**Perimeter of a rectangle:**\n\n$$2(16m + 9m) = 100$$\n\n$$2(25m) = 100$$\n\n$$50m = 100 \\implies m = 2$$\n\n**Width:**\n\n$$16m = 16 \\times 2 = 32 \\text{ inches}$$\n\n**Verify:** Height $= 9 \\times 2 = 18$. Perimeter $= 2(32 + 18) = 2(50) = 100$ ✓\n\n$$\\boxed{C: 32}$$"
    },
    {
      "id": "tv_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "Cindy bought 48 containers of soda (12-oz cans or 20-oz bottles). If the ounces in cans equaled the ounces in bottles, how many bottles did Cindy buy?",
      "options": { "A": "18", "B": "21", "C": "24", "D": "27", "E": "30" },
      "answer": "A",
      "explanation": "## Equal Quantity Constraint\n\nLet $b$ = bottles, $c$ = cans.\n\n$$b + c = 48 \\quad \\text{...(1)}$$\n\n$$20b = 12c \\quad \\text{...(2) (ounces in bottles = ounces in cans)}$$\n\n**From (2):** $c = \\dfrac{20b}{12} = \\dfrac{5b}{3}$\n\n**Substitute into (1):**\n\n$$b + \\frac{5b}{3} = 48$$\n\n$$\\frac{8b}{3} = 48 \\implies b = 18$$\n\n**Verify:** Cans $= 48 - 18 = 30$. Ounces in cans $= 30 \\times 12 = 360$. Ounces in bottles $= 18 \\times 20 = 360$ ✓\n\n$$\\boxed{A: 18}$$"
    },
    {
      "id": "tv_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "Two runners' race times sum to 170 seconds and one race time is 10 seconds less than twice the other. What is the faster race time, in seconds?",
      "options": { "A": "40", "B": "50", "C": "60", "D": "70", "E": "110" },
      "answer": "C",
      "explanation": "## Sum and Difference System\n\nLet the two times be $x$ and $y$ with $x > y$ (so $x$ is the slower time).\n\n$$x + y = 170 \\quad \\text{...(1)}$$\n\n$$x = 2y - 10 \\quad \\text{...(2)}$$\n\n**Substitute (2) into (1):**\n\n$$(2y - 10) + y = 170$$\n\n$$3y = 180 \\implies y = 60$$\n\n$$x = 2(60) - 10 = 110$$\n\n**The faster (smaller) time is $y = 60$ seconds.**\n\n**Verify:** $60 + 110 = 170$ ✓, and $110 = 2(60) - 10$ ✓\n\n$$\\boxed{C: 60}$$"
    },
    {
      "id": "tv_012",
      "number": 12,
      "type": "numeric_entry",
      "text": "Beth is 12 years younger than Alan. In 20 years, Beth will be 80% of Alan's age. How old is Beth now?",
      "answer": "28",
      "explanation": "## Age Problem with Future Percentages\n\n**Define variables:**\n- $A$ = Alan's current age\n- $B$ = Beth's current age\n\n**Equations:**\n\n$$B = A - 12 \\quad \\text{...(1)}$$\n\n$$B + 20 = 0.8(A + 20) \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$(A - 12) + 20 = 0.8A + 16$$\n\n$$A + 8 = 0.8A + 16$$\n\n$$0.2A = 8 \\implies A = 40$$\n\n$$B = 40 - 12 = 28$$\n\n**Verify:** In 20 years: Beth $= 48$, Alan $= 60$. Is $48 = 80\\%$ of $60$? $0.8 \\times 60 = 48$ ✓\n\n$$\\boxed{28}$$"
    },
    {
      "id": "tv_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "Rey is 12 years younger than Sebastian. Five years ago, Rey was half Sebastian's age. How old will Sebastian be next year?",
      "options": { "A": "15", "B": "20", "C": "25", "D": "30", "E": "35" },
      "answer": "D",
      "explanation": "## Age Problem — Past Condition\n\n**Define variables:**\n- $r$ = Rey's current age\n- $s$ = Sebastian's current age\n\n**Equations:**\n\n$$r = s - 12 \\quad \\text{...(1)}$$\n\n$$r - 5 = \\frac{s - 5}{2} \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$(s - 12) - 5 = \\frac{s - 5}{2}$$\n\n$$s - 17 = \\frac{s - 5}{2}$$\n\n$$2s - 34 = s - 5$$\n\n$$s = 29$$\n\n**Sebastian next year:**\n\n$$29 + 1 = 30$$\n\n**Verify:** Rey $= 17$. Five years ago: Rey $= 12$, Sebastian $= 24$. Is $12 = \\frac{24}{2}$? ✓\n\n$$\\boxed{D: 30}$$"
    },
    {
      "id": "tv_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "During a sale, the local outlet sold three times as many jeans as chinos. If they made twice as much profit per pair of chinos as per pair of jeans, what percent of profits came from chinos?",
      "options": { "A": "16 2/3%", "B": "20%", "C": "40%", "D": "60%", "E": "83 1/3%" },
      "answer": "C",
      "explanation": "## Ratio Problem — Assign Convenient Numbers\n\n**Assign numbers:**\n- Jeans sold $= 3$, Chinos sold $= 1$\n- Profit per jean $= \\$1$, Profit per chino $= \\$2$ (twice as much)\n\n**Calculate profits:**\n\n$$\\text{Jeans profit} = 3 \\times \\$1 = \\$3$$\n\n$$\\text{Chinos profit} = 1 \\times \\$2 = \\$2$$\n\n$$\\text{Total profit} = \\$3 + \\$2 = \\$5$$\n\n**Percent from chinos:**\n\n$$\\frac{\\$2}{\\$5} \\times 100 = 40\\%$$\n\n$$\\boxed{C: 40\\%}$$"
    },
    {
      "id": "tv_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "Marisol is twice as old as Vikram. Eight years ago, Marisol was 6 years younger than three times Vikram's age at that time. How old will Marisol be in 5 years?",
      "answer": "49",
      "explanation": "## Age Problem — Multiple Past Conditions\n\n**Define variables:**\n- $V$ = Vikram's current age\n- $M$ = Marisol's current age\n\n**Equations:**\n\n$$M = 2V \\quad \\text{...(1)}$$\n\n**Eight years ago:**\n\n$$M - 8 = 3(V - 8) - 6 \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$2V - 8 = 3V - 24 - 6$$\n\n$$2V - 8 = 3V - 30$$\n\n$$22 = V$$\n\n$$M = 2 \\times 22 = 44$$\n\n**Marisol in 5 years:**\n\n$$44 + 5 = 49$$\n\n**Verify:** 8 years ago: Marisol $= 36$, Vikram $= 14$. Three times Vikram's age minus 6 $= 42 - 6 = 36$ ✓\n\n$$\\boxed{49}$$"
    },
    {
      "id": "tv_016",
      "number": 16,
      "type": "numeric_entry",
      "text": "The length of a rectangle is 2 more than twice its width, and the area is 40. What is the rectangle's perimeter?",
      "answer": "28",
      "explanation": "## Rectangle — Area Gives a Quadratic, Then Find Perimeter\n\n**Define variables:**\n- $W$ = width\n- $L = 2W + 2$\n\n**Area equation:**\n\n$$L \\times W = 40$$\n\n$$(2W + 2) \\times W = 40$$\n\n$$2W^2 + 2W - 40 = 0$$\n\n$$W^2 + W - 20 = 0$$\n\n$$(W + 5)(W - 4) = 0$$\n\n$$W = 4 \\quad \\text{(reject } W = -5\\text{)}$$\n\n**Length:**\n\n$$L = 2(4) + 2 = 10$$\n\n**Perimeter:**\n\n$$P = 2(L + W) = 2(10 + 4) = 28$$\n\n**Verify:** Area $= 10 \\times 4 = 40$ ✓\n\n$$\\boxed{28}$$"
    },
    {
      "id": "tv_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "Marcy bought one pair of jeans at 70% off and one blouse at 40% off. If she paid $12 more for the blouse than for the jeans, and spent $84 total, what was the original price of the jeans?",
      "options": { "A": "$76", "B": "$96", "C": "$100", "D": "$120", "E": "$124" },
      "answer": "D",
      "explanation": "## Discount Prices — Set Up from Sale Prices\n\nLet $J$ = original jeans price, $B$ = original blouse price.\n\n**Sale prices:**\n- Jeans at $70\\%$ off: $0.30J$\n- Blouse at $40\\%$ off: $0.60B$\n\n**Equations:**\n\n$$0.60B = 0.30J + 12 \\quad \\text{...(1) (blouse costs \\$12 more)}$$\n\n$$0.30J + 0.60B = 84 \\quad \\text{...(2) (total spent)}$$\n\n**Substitute (1) into (2):**\n\n$$0.30J + (0.30J + 12) = 84$$\n\n$$0.60J = 72 \\implies J = \\$120$$\n\n**Verify:** Jeans sale price $= 0.30(120) = \\$36$. Blouse sale price $= \\$36 + \\$12 = \\$48$. Total $= \\$84$ ✓. Original blouse price $= \\frac{48}{0.60} = \\$80$ ✓\n\n$$\\boxed{D: \\$120}$$"
    },
    {
      "id": "tv_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "Wall-to-wall carpeting costs $4.25 per sq ft. The perimeter (feet) equals 44% of the area (sq ft) and the hallway is 50 feet long. How much did the carpeting cost?",
      "options": { "A": "$182.50", "B": "$212.50", "C": "$505.25", "D": "$1,062.50", "E": "$1,100.00" },
      "answer": "D",
      "explanation": "## Perimeter-Area Relationship for a Rectangle\n\nLet $L = 50$ ft (length) and $W$ = width.\n\n**Perimeter and Area:**\n\n$$\\text{Perimeter} = 2(50 + W) = 100 + 2W$$\n\n$$\\text{Area} = 50W$$\n\n**Given condition:** Perimeter $= 44\\%$ of Area:\n\n$$100 + 2W = 0.44 \\times 50W$$\n\n$$100 + 2W = 22W$$\n\n$$100 = 20W \\implies W = 5$$\n\n**Area:**\n\n$$50 \\times 5 = 250 \\text{ sq ft}$$\n\n**Cost:**\n\n$$250 \\times \\$4.25 = \\$1{,}062.50$$\n\n$$\\boxed{D: \\$1{,}062.50}$$"
    },
    {
      "id": "tv_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "Jamal got three monthly electric bills. If his average monthly bill was $44 more than the median, and the sum of the largest and smallest bills was $412, what was the total of all three bills?",
      "options": { "A": "$456", "B": "$552", "C": "$600", "D": "$824", "E": "$1,000" },
      "answer": "B",
      "explanation": "## Average vs. Median — Algebraic Setup\n\nLet the three bills (in order) be $S \\leq M \\leq L$.\n\n**Median** $= M$ (the middle value)\n\n**Average** $= \\dfrac{S + M + L}{3}$\n\n**Given:** Average $= M + 44$\n\n$$\\frac{S + M + L}{3} = M + 44$$\n\n$$S + M + L = 3M + 132$$\n\n$$S + L = 2M + 132 \\quad \\text{...(1)}$$\n\n**Also given:** $S + L = 412$\n\n**Substitute:**\n\n$$412 = 2M + 132 \\implies 2M = 280 \\implies M = 140$$\n\n**Total:**\n\n$$S + M + L = 412 + M = 412 + 140 = \\$552$$\n\n$$\\boxed{B: \\$552}$$"
    },
    {
      "id": "tv_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "A dog kennel houses only collies, labs, and golden retrievers. The ratio of collies to labs is 5:9, there are 66 golden retrievers, and 12 more golden retrievers than labs. What percent of the dogs are collies?",
      "options": { "A": "5%", "B": "9%", "C": "12%", "D": "20%", "E": "25%" },
      "answer": "D",
      "explanation": "## Multi-Step Percent Problem\n\n**Step 1 — Find number of labs:**\n\n$$\\text{Labs} = 66 - 12 = 54$$\n\n**Step 2 — Find number of collies using the ratio:**\n\n$$\\frac{\\text{Collies}}{\\text{Labs}} = \\frac{5}{9}$$\n\n$$\\text{Collies} = \\frac{5}{9} \\times 54 = 30$$\n\n**Step 3 — Total dogs:**\n\n$$30 + 54 + 66 = 150$$\n\n**Step 4 — Percent collies:**\n\n$$\\frac{30}{150} \\times 100 = 20\\%$$\n\n$$\\boxed{D: 20\\%}$$"
    },
    {
      "id": "tv_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "If Mason is now twice as old as Gunther was 10 years ago, and G is Gunther's current age, which of the following represents the sum of Mason and Gunther's ages 4 years from now?",
      "options": { "A": "G/2 + 3", "B": "3G + 28", "C": "3G – 12", "D": "8 – G", "E": "14 – G/2" },
      "answer": "C",
      "explanation": "## Variables-in-Choices — Express Everything in Terms of G\n\n**Mason's current age:**\n\n$$M = 2(G - 10) = 2G - 20$$\n\n**Sum of ages in 4 years:**\n\n$$(M + 4) + (G + 4) = M + G + 8$$\n\n$$= (2G - 20) + G + 8$$\n\n$$= 3G - 12$$\n\n**Plug-in check:** Let $G = 20$. Then $M = 2(10) = 20$.\nIn 4 years: Mason $= 24$, Gunther $= 24$. Sum $= 48$.\nTest $3G - 12 = 3(20) - 12 = 48$ ✓\n\n$$\\boxed{C: 3G - 12}$$"
    },
    {
      "id": "tv_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "A baker made chocolate chip cookies in batches of 7 and peanut butter cookies in batches of 6. If he made exactly 95 cookies, what is the minimum possible number of chocolate chip cookies?",
      "options": { "A": "7", "B": "14", "C": "21", "D": "28", "E": "35" },
      "answer": "E",
      "explanation": "## Integer Solutions — Find the Minimum\n\nLet $x$ = batches of chocolate chip, $y$ = batches of peanut butter.\n\n$$7x + 6y = 95$$\n\nWe want to **minimize** $7x$ (chocolate chip cookies), which means minimizing $x$.\n\n**Rearrange:**\n\n$$6y = 95 - 7x \\implies y = \\frac{95 - 7x}{6}$$\n\nFor $y$ to be a **positive integer**, $(95 - 7x)$ must be divisible by $6$:\n\n$$95 - 7x \\equiv 0 \\pmod{6}$$\n\n$$95 \\equiv 5 \\pmod{6} \\quad \\text{and} \\quad 7x \\equiv x \\pmod{6}$$\n\n$$x \\equiv 5 \\pmod{6}$$\n\nSmallest positive $x \\equiv 5 \\pmod{6}$: $x = 5$\n\n**Check:** $y = \\frac{95 - 35}{6} = \\frac{60}{6} = 10$ ✓\n\n**Minimum chocolate chip cookies:**\n\n$$7x = 7 \\times 5 = 35$$\n\n$$\\boxed{E: 35}$$"
    },
    {
      "id": "tv_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "Anke has 5 fewer candies than Conrad. If Anke gives Conrad 5 candies, Conrad will then have 4 times as many as Anke. How many candies does Anke have?",
      "options": { "A": "5", "B": "10", "C": "15", "D": "20", "E": "25" },
      "answer": "B",
      "explanation": "## Before-and-After Problem\n\n**Currently:**\n- Anke $= A$, Conrad $= C$, with $A = C - 5$, i.e., $C = A + 5$\n\n**After Anke gives Conrad 5:**\n- Anke $= A - 5$\n- Conrad $= C + 5 = A + 10$\n\n**Condition:**\n\n$$A + 10 = 4(A - 5)$$\n\n$$A + 10 = 4A - 20$$\n\n$$30 = 3A \\implies A = 10$$\n\n**Verify:** Conrad $= 15$. After transfer: Anke $= 5$, Conrad $= 20$. Is $20 = 4 \\times 5$? ✓\n\n$$\\boxed{B: 10}$$"
    },
    {
      "id": "tv_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "Lou has daughters Wen, Mildred, and Tyla. Three years ago when Lou was twice as old as Tyla, he was 30 years older than Mildred. Now he is 47 years older than Wen. In 4 years, Wen will be half as old as Tyla. What is the sum of their current ages?",
      "options": { "A": "138", "B": "144", "C": "154", "D": "166", "E": "181" },
      "answer": "A",
      "explanation": "## Multi-Person Age System\n\nLet current ages be: Lou $= L$, Wen $= W$, Mildred $= M$, Tyla $= T$.\n\n**Equation 1** — Three years ago, Lou was twice Tyla's age:\n\n$$L - 3 = 2(T - 3) \\implies L = 2T - 3 \\quad \\text{...(1)}$$\n\n**Equation 2** — Three years ago, Lou was 30 years older than Mildred:\n\n$$(L - 3) = (M - 3) + 30 \\implies L = M + 30 \\quad \\text{...(2)}$$\n\n**Equation 3** — Lou is 47 years older than Wen:\n\n$$L = W + 47 \\quad \\text{...(3)}$$\n\n**Equation 4** — In 4 years, Wen will be half Tyla's age:\n\n$$W + 4 = \\frac{T + 4}{2} \\implies 2W + 8 = T + 4 \\implies T = 2W + 4 \\quad \\text{...(4)}$$\n\n**Solve:** From (3): $W = L - 47$. From (4): $T = 2(L-47) + 4 = 2L - 90$.\n\nSubstitute into (1): $L = 2(2L - 90) - 3 = 4L - 183$\n\n$$3L = 183 \\implies L = 61$$\n\n$$W = 14, \\quad T = 32, \\quad M = L - 30 = 31$$\n\n**Sum:**\n\n$$61 + 14 + 31 + 32 = 138$$\n\n$$\\boxed{A: 138}$$"
    },
    {
      "id": "tv_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "Dwayne planted 70 acres with navy and pinto beans. Each acre of navy beans yielded 27 bushels; pinto beans yielded 36 bushels per acre. If Dwayne grew twice as many bushels of pinto beans as navy beans, how many acres of pinto beans did he plant?",
      "options": { "A": "28", "B": "30", "C": "35", "D": "40", "E": "42" },
      "answer": "E",
      "explanation": "## Yield and Total Acreage System\n\nLet $p$ = pinto acres, $n$ = navy acres.\n\n$$p + n = 70 \\implies n = 70 - p \\quad \\text{...(1)}$$\n\n**Bushel condition** (pinto yield $= 2 \\times$ navy yield):\n\n$$36p = 2 \\times 27n = 54n \\quad \\text{...(2)}$$\n\n**Substitute (1) into (2):**\n\n$$36p = 54(70 - p)$$\n\n$$36p = 3{,}780 - 54p$$\n\n$$90p = 3{,}780 \\implies p = 42$$\n\n**Verify:** Navy $= 28$ acres. Pinto yield $= 42 \\times 36 = 1{,}512$ bushels. Navy yield $= 28 \\times 27 = 756$ bushels. Is $1{,}512 = 2 \\times 756$? ✓\n\n$$\\boxed{E: 42}$$"
    }
  ]
};
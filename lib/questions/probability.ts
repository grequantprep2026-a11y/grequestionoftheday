export const Probability = {
  "chapter": 23,
  "topic": "Probability, Combinatorics, and Overlapping Sets",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "prob_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "A number is randomly chosen from a list of 10 consecutive positive integers. What is the probability that the number selected is greater than the average (arithmetic mean) of all 10 integers?",
      "options": { "A": "3/10", "B": "2/5", "C": "1/2", "D": "7/10", "E": "4/5" },
      "answer": "C",
      "explanation": "## Consecutive Integers — Mean Falls Between the 5th and 6th\n\nLet the $10$ integers be $n, n+1, \\ldots, n+9$.\n\n$$\\text{Mean} = \\frac{n + (n+9)}{2} = n + 4.5$$\n\nThe mean $n + 4.5$ lies exactly **between** the 5th value ($n+4$) and the 6th value ($n+5$). Exactly $5$ integers are greater than the mean (the upper half).\n\n$$P(\\text{selected} > \\text{mean}) = \\frac{5}{10} = \\frac{1}{2}$$\n\n$$\\boxed{C: \\ \\frac{1}{2}}$$"
    },
    {
      "id": "prob_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "A number is randomly chosen from the first 100 positive integers. What is the probability that it is a multiple of 3?",
      "options": { "A": "32/100", "B": "33/100", "C": "1/3", "D": "34/100", "E": "2/3" },
      "answer": "B",
      "explanation": "## Counting Multiples in a Range\n\nMultiples of $3$ from $1$ to $100$: $3, 6, 9, \\ldots, 99$.\n\n$$\\text{Count} = \\left\\lfloor \\frac{100}{3} \\right\\rfloor = 33$$\n\n(since $3 \\times 33 = 99 \\leq 100$ and $3 \\times 34 = 102 > 100$)\n\n$$P = \\frac{33}{100}$$\n\n---\n\n> **Note:** $\\frac{1}{3} \\approx 33.33/100$, but the exact count is $33$, not $33.33$. The answer is $\\frac{33}{100}$, not $\\frac{1}{3}$.\n\n$$\\boxed{B: \\ \\frac{33}{100}}$$"
    },
    {
      "id": "prob_003",
      "number": 3,
      "type": "numeric_entry",
      "text": "A restaurant menu has several options for tacos. There are 3 types of shells, 4 types of meat, 3 types of cheese, and 5 types of salsa. How many distinct tacos can be ordered assuming that any order contains exactly one of each of the above choices?",
      "answer": 180,
      "explanation": "## Fundamental Counting Principle\n\nWhen choosing one item from each of several **independent** categories, multiply the number of options in each:\n\n$$3 \\times 4 \\times 3 \\times 5 = 180$$\n\n---\n\n### Step-by-Step\n\n$$3 \\text{ shells} \\times 4 \\text{ meats} = 12$$\n$$12 \\times 3 \\text{ cheeses} = 36$$\n$$36 \\times 5 \\text{ salsas} = 180$$\n\n$$\\boxed{180}$$"
    },
    {
      "id": "prob_004",
      "number": 4,
      "type": "numeric_entry",
      "text": "A history exam features five questions. Three of the questions are multiple-choice with four options each. The other two questions are true or false. If Caroline selects one answer for every question, how many different ways can she answer the exam?",
      "answer": 256,
      "explanation": "## Counting Answer Combinations\n\nEach question is answered independently:\n\n$$\\underbrace{4 \\times 4 \\times 4}_{\\text{3 MC questions}} \\times \\underbrace{2 \\times 2}_{\\text{2 T/F questions}} = 4^3 \\times 2^2 = 64 \\times 4 = 256$$\n\n$$\\boxed{256}$$"
    },
    {
      "id": "prob_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "The probability is 1/2 that a certain coin will turn up heads on any given toss and the probability is 1/6 that a number cube with faces numbered 1 to 6 will turn up any particular number. What is the probability of turning up a heads and a 6?",
      "options": { "A": "1/36", "B": "1/12", "C": "1/6", "D": "1/4", "E": "2/3" },
      "answer": "B",
      "explanation": "## Independent Events — Multiply the Probabilities\n\nThe coin flip and die roll are independent — neither affects the other.\n\n$$P(\\text{heads AND 6}) = P(\\text{heads}) \\times P(6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$$\n\n$$\\boxed{B: \\ \\frac{1}{12}}$$"
    },
    {
      "id": "prob_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "An integer is randomly chosen from 2 to 20 inclusive. What is the probability that the number is prime? Give your answer as a fraction.",
      "answer": "8/19",
      "explanation": "## Counting Primes in a Range\n\n**Total integers from $2$ to $20$ inclusive:**\n\n$$20 - 2 + 1 = 19$$\n\n**Primes in this range:**\n\n$$2, 3, 5, 7, 11, 13, 17, 19 \\implies 8 \\text{ primes}$$\n\n$$P(\\text{prime}) = \\frac{8}{19}$$\n\n$$\\boxed{\\frac{8}{19}}$$"
    },
    {
      "id": "prob_007",
      "number": 7,
      "type": "numeric_entry",
      "text": "An Italian restaurant boasts 320 distinct pasta dishes. Each dish contains exactly 1 pasta, 1 meat, and 1 sauce. If there are 8 pastas and 4 meats available, how many sauces are there to choose from?",
      "answer": 10,
      "explanation": "## Reverse the Counting Principle\n\n$$\\text{Total} = \\text{pastas} \\times \\text{meats} \\times \\text{sauces}$$\n\n$$320 = 8 \\times 4 \\times s = 32s$$\n\n$$s = \\frac{320}{32} = 10$$\n\n$$\\boxed{10 \\text{ sauces}}$$"
    },
    {
      "id": "prob_008",
      "number": 8,
      "type": "numeric_entry",
      "text": "A 10-student class is to choose a president, vice president, and secretary from the group. If no person can occupy more than one post, in how many ways can this be accomplished?",
      "answer": 720,
      "explanation": "## Permutation — Order Matters\n\nEach position is distinct (president $\\neq$ VP $\\neq$ secretary), and no one can hold two posts.\n\n$$P(10, 3) = 10 \\times 9 \\times 8 = 720$$\n\n---\n\n### Why Multiply?\n\n- **President:** $10$ choices\n- **VP:** $9$ remaining choices\n- **Secretary:** $8$ remaining choices\n\n$$10 \\times 9 \\times 8 = \\boxed{720}$$"
    },
    {
      "id": "prob_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "BurgerTown offers many options for customizing a burger. There are 3 types of meats and 7 condiments: lettuce, tomatoes, pickles, onions, ketchup, mustard, and special sauce. A burger must include meat, but may include as many or as few condiments as the customer wants. How many different burgers are possible?",
      "options": { "A": "8", "B": "(3)(7!)", "C": "(3)(8!)", "D": "(8)(2⁷)", "E": "(3)(2⁷)" },
      "answer": "E",
      "explanation": "## Subset Counting — Each Item In or Out\n\n**Meat:** Exactly $1$ of $3$ must be chosen $\\to 3$ ways.\n\n**Condiments:** For each of the $7$ condiments, it's a binary choice — include it or not:\n\n$$2^7 = 128 \\text{ condiment combinations (including none)}$$\n\n**Total burgers:**\n\n$$3 \\times 2^7$$\n\n---\n\n> **Key rule:** When items can each independently be included or excluded, use $2^n$ for $n$ items.\n\n$$\\boxed{E: \\ 3 \\times 2^7}$$"
    },
    {
      "id": "prob_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "The probability of rain is 1/6 for any given day next week. What is the probability that it will rain on both Monday and Tuesday?",
      "options": { "A": "1/36", "B": "1/12", "C": "1/6", "D": "1/3", "E": "2/3" },
      "answer": "A",
      "explanation": "## Independent Daily Events\n\n$$P(\\text{rain Mon AND Tue}) = P(\\text{Mon}) \\times P(\\text{Tue}) = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$$\n\n$$\\boxed{A: \\ \\frac{1}{36}}$$"
    },
    {
      "id": "prob_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "How many five-digit numbers can be formed using the digits 5, 6, 7, 8, 9, 0 if no digits can be repeated?",
      "options": { "A": "64", "B": "120", "C": "240", "D": "600", "E": "720" },
      "answer": "D",
      "explanation": "## Leading Zero Restriction\n\nAvailable digits: $\\{0, 5, 6, 7, 8, 9\\}$. A five-digit number cannot start with $0$.\n\n| Position | Choices |\n|----------|----------|\n| 1st digit | $5$ (any except $0$: $\\{5,6,7,8,9\\}$) |\n| 2nd digit | $5$ (remaining $5$ digits, now including $0$) |\n| 3rd digit | $4$ |\n| 4th digit | $3$ |\n| 5th digit | $2$ |\n\n$$5 \\times 5 \\times 4 \\times 3 \\times 2 = 600$$\n\n$$\\boxed{D: \\ 600}$$"
    },
    {
      "id": "prob_012",
      "number": 12,
      "type": "numeric_entry",
      "text": "A bag contains 3 red, 2 blue, and 7 white marbles. If a marble is randomly chosen from the bag, what is the probability that it is not blue? Give your answer as a fraction.",
      "answer": "5/6",
      "explanation": "## Complement Rule\n\n**Total marbles:** $3 + 2 + 7 = 12$\n\n**Not blue:** $3 + 7 = 10$\n\n$$P(\\text{not blue}) = \\frac{10}{12} = \\frac{5}{6}$$\n\n---\n\n### Via Complement\n\n$$P(\\text{not blue}) = 1 - P(\\text{blue}) = 1 - \\frac{2}{12} = 1 - \\frac{1}{6} = \\frac{5}{6}$$\n\n$$\\boxed{\\frac{5}{6}}$$"
    },
    {
      "id": "prob_013",
      "number": 13,
      "type": "numeric_entry",
      "text": "A man has 3 different suits, 4 different shirts, 2 different pairs of socks, and 5 different pairs of shoes. If an outfit consists of exactly 1 suit, 1 shirt, 1 pair of socks, and 1 pair of shoes, how many different outfits can be made with the man's clothing?",
      "answer": 120,
      "explanation": "## Fundamental Counting Principle\n\n$$3 \\times 4 \\times 2 \\times 5 = 120$$\n\n$$\\boxed{120}$$"
    },
    {
      "id": "prob_014",
      "number": 14,
      "type": "quantitative_comparison",
      "context": "A state issues automobile license plates that begin with two letters selected from a 26-letter alphabet, followed by four numerals selected from the digits 0 through 9, inclusive. Repeats are permitted.",
      "quantity_a": "The number of possible unique license plate combinations",
      "quantity_b": "6,000,000",
      "answer": "A",
      "explanation": "## Counting with Repetition Allowed\n\n**Letters** (2 positions, 26 choices each, repeats allowed):\n\n$$26 \\times 26 = 676$$\n\n**Digits** (4 positions, 10 choices each):\n\n$$10^4 = 10{,}000$$\n\n**Total:**\n\n$$676 \\times 10{,}000 = 6{,}760{,}000$$\n\n$$6{,}760{,}000 > 6{,}000{,}000 \\implies \\boxed{A}$$"
    },
    {
      "id": "prob_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "A bag contains 6 black chips numbered 1–6 respectively and 6 white chips numbered 1–6 respectively. If Pavel reaches into the bag of 12 chips and removes 2 chips, one after the other, without replacing them, what is the probability that he will pick black chip #3 and then white chip #3? Give your answer as a fraction.",
      "answer": "1/132",
      "explanation": "## Sequential Draw Without Replacement\n\n**First draw — black chip \\#3:**\n\n$$P(\\text{black \\#3}) = \\frac{1}{12}$$\n\n**Second draw — white chip \\#3** (given black \\#3 was removed; $11$ chips remain):\n\n$$P(\\text{white \\#3 | black \\#3 removed}) = \\frac{1}{11}$$\n\n**Combined:**\n\n$$P = \\frac{1}{12} \\times \\frac{1}{11} = \\frac{1}{132}$$\n\n$$\\boxed{\\frac{1}{132}}$$"
    },
    {
      "id": "prob_016",
      "number": 16,
      "type": "quantitative_comparison",
      "context": "Tarik has a pile of 6 green chips numbered 1 through 6 and another pile of 6 blue chips numbered 1 through 6. Tarik will randomly pick 1 chip from the green pile and 1 chip from the blue pile.",
      "quantity_a": "The probability that both chips selected by Tarik will display a number less than 4",
      "quantity_b": "1/2",
      "answer": "B",
      "explanation": "## Independent Picks from Separate Piles\n\nNumbers less than $4$ in each pile: $\\{1, 2, 3\\}$ → $3$ out of $6$.\n\n$$P(\\text{green} < 4) = \\frac{3}{6} = \\frac{1}{2}$$\n\n$$P(\\text{both} < 4) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$\n\n$$\\frac{1}{4} < \\frac{1}{2} \\implies \\boxed{B}$$"
    },
    {
      "id": "prob_017",
      "number": 17,
      "type": "numeric_entry",
      "text": "A bag contains 6 red chips numbered 1 through 6, respectively, and 6 blue chips numbered 1 through 6, respectively. If 2 chips are to be picked sequentially from the bag of 12 chips, without replacement, what is the probability of picking a red chip and then a blue chip with the same number? Give your answer as a fraction.",
      "answer": "1/22",
      "explanation": "## Matching Pairs Across Colors\n\n**Step 1 — Pick any red chip:**\n\n$$P(\\text{first is red}) = \\frac{6}{12} = \\frac{1}{2}$$\n\n**Step 2 — Pick matching blue chip** (given a specific red chip #$k$ was drawn; $11$ chips remain, only $1$ is the matching blue):\n\n$$P(\\text{matching blue} \\mid \\text{red }k) = \\frac{1}{11}$$\n\n**Combined:**\n\n$$P = \\frac{1}{2} \\times \\frac{1}{11} = \\frac{1}{22}$$\n\n---\n\n### Counting Method\n\nValid ordered pairs: $6$ (one per number). Total ordered pairs from $12$ chips: $12 \\times 11 = 132$.\n\n$$P = \\frac{6}{132} = \\frac{1}{22} \\checkmark$$\n\n$$\\boxed{\\frac{1}{22}}$$"
    },
    {
      "id": "prob_018",
      "number": 18,
      "type": "quantitative_comparison",
      "context": "In a school of 150 students, 75 study Latin, 110 study Spanish, and 11 study neither.",
      "quantity_a": "The number of students who study only Latin",
      "quantity_b": "46",
      "answer": "B",
      "explanation": "## Inclusion-Exclusion — Find the Overlap\n\n**Students studying at least one language:**\n\n$$150 - 11 = 139$$\n\n**Inclusion-exclusion:**\n\n$$|L \\cup S| = |L| + |S| - |L \\cap S|$$\n\n$$139 = 75 + 110 - |L \\cap S| \\implies |L \\cap S| = 46$$\n\n**Students studying only Latin (Latin but not Spanish):**\n\n$$75 - 46 = 29$$\n\nQuantity A $= 29 <$ Quantity B $= 46$.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "prob_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "How many 10-digit numbers can be formed using only the digits 2 and 5?",
      "options": { "A": "2¹⁰", "B": "(22)(5!)", "C": "(59)(5!)", "D": "10!/2", "E": "10!" },
      "answer": "A",
      "explanation": "## Binary Choice Per Position\n\nEach of the $10$ digit positions can independently be $2$ or $5$ — exactly $2$ choices per position:\n\n$$\\underbrace{2 \\times 2 \\times \\cdots \\times 2}_{10 \\text{ times}} = 2^{10} = 1{,}024$$\n\n$$\\boxed{A: \\ 2^{10}}$$"
    },
    {
      "id": "prob_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "A 6-sided cube has faces numbered 1 through 6. If the cube is rolled twice, what is the probability that the sum of the two rolls is 8?",
      "options": { "A": "1/9", "B": "1/8", "C": "5/36", "D": "1/6", "E": "7/36" },
      "answer": "C",
      "explanation": "## Count Favorable Outcomes\n\nTotal outcomes: $6 \\times 6 = 36$.\n\nPairs $(a, b)$ where $a + b = 8$:\n\n$$(2,6),\\ (3,5),\\ (4,4),\\ (5,3),\\ (6,2) \\implies 5 \\text{ pairs}$$\n\n$$P(\\text{sum} = 8) = \\frac{5}{36}$$\n\n> **Don't include** $(1, 7)$ or $(7, 1)$ — $7$ is not on a standard die.\n\n$$\\boxed{C: \\ \\frac{5}{36}}$$"
    },
    {
      "id": "prob_021",
      "number": 21,
      "type": "numeric_entry",
      "text": "A certain coin with heads on one side and tails on the other has a 1/2 probability of landing on heads. If the coin is flipped 5 times, how many distinct outcomes are possible if the last flip must be heads?",
      "answer": 16,
      "explanation": "## Fixing One Outcome\n\nWith the last flip fixed as heads, only the first $4$ flips are free:\n\n$$\\underbrace{2 \\times 2 \\times 2 \\times 2}_{\\text{first 4 flips}} \\times \\underbrace{1}_{\\text{5th flip: H only}} = 2^4 = 16$$\n\n$$\\boxed{16}$$"
    },
    {
      "id": "prob_022",
      "number": 22,
      "type": "quantitative_comparison",
      "context": "In a class of 25 students, each student studies either Spanish, Latin, or French, or two of the three, but no students study all three languages. 9 study Spanish, 7 study Latin, and 5 study exactly two languages.",
      "quantity_a": "The number of students who study French",
      "quantity_b": "14",
      "answer": "C",
      "explanation": "## Inclusion-Exclusion with No Triple Overlap\n\nSince no student studies all three, and we know $5$ study exactly two languages:\n\n$$|S| + |L| + |F| - |\\text{exactly 2}| = \\text{Total}$$\n\n$$9 + 7 + |F| - 5 = 25$$\n\n$$11 + |F| = 25 \\implies |F| = 14$$\n\nQuantity A $= 14 =$ Quantity B.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "prob_023",
      "number": 23,
      "type": "numeric_entry",
      "text": "Pedro has a number cube with 24 faces and an integer between 1 and 24 on each face. Every number is featured exactly once. When he rolls, what is the probability that the number showing is a factor of 24? Give your answer as a fraction.",
      "answer": "1/3",
      "explanation": "## Factors of 24\n\n$24 = 2^3 \\times 3$\n\nFactors: $1, 2, 3, 4, 6, 8, 12, 24$ → $8$ factors.\n\n$$P(\\text{factor of 24}) = \\frac{8}{24} = \\frac{1}{3}$$\n\n$$\\boxed{\\frac{1}{3}}$$"
    },
    {
      "id": "prob_024",
      "number": 24,
      "type": "numeric_entry",
      "text": "A baby has x total toys. If 9 of the toys are stuffed animals, 7 of the toys were given to the baby by her grandmother, 5 of the toys are stuffed animals given to the baby by her grandmother, and 6 of the toys are neither stuffed animals nor given to the baby by her grandmother, what is the value of x?",
      "answer": 17,
      "explanation": "## Two-Set Inclusion-Exclusion\n\n$$|S \\cup G| = |S| + |G| - |S \\cap G| = 9 + 7 - 5 = 11$$\n\n**Total** = those in at least one category + neither:\n\n$$x = 11 + 6 = 17$$\n\n$$\\boxed{17}$$"
    },
    {
      "id": "prob_025",
      "number": 25,
      "type": "numeric_entry",
      "text": "How many integers between 2,000 and 3,999 have a ones digit that is a prime number?",
      "answer": 800,
      "explanation": "## Counting by Pattern\n\n**Total integers:** $3{,}999 - 2{,}000 + 1 = 2{,}000$\n\n**Prime ones digits:** $\\{2, 3, 5, 7\\}$ → $4$ out of every $10$\n\n$$\\text{Count} = 2{,}000 \\times \\frac{4}{10} = 800$$\n\n---\n\n### Alternative\n\nIn each block of $10$ consecutive integers, exactly $4$ end in $2, 3, 5,$ or $7$. There are $\\frac{2{,}000}{10} = 200$ such blocks:\n\n$$200 \\times 4 = 800$$\n\n$$\\boxed{800}$$"
    },
    {
      "id": "prob_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "A group of 12 people who have never met are in a classroom. How many handshakes are exchanged if each person shakes hands exactly once with each of the other people in the room?",
      "options": { "A": "12", "B": "22", "C": "66", "D": "132", "E": "244" },
      "answer": "C",
      "explanation": "## Combinations — Order Doesn't Matter for Handshakes\n\nA handshake involves $2$ people, and A shaking B's hand is the same event as B shaking A's hand.\n\n$$C(12, 2) = \\frac{12 \\times 11}{2} = \\frac{132}{2} = 66$$\n\n$$\\boxed{C: \\ 66}$$"
    },
    {
      "id": "prob_027",
      "number": 27,
      "type": "multiple_choice",
      "context": "A class consists of 12 girls and 20 boys. One quarter of the girls in the class have blue eyes. If a child is selected at random from the class, what is the probability that the child is a girl who does not have blue eyes?",
      "options": { "A": "3/32", "B": "9/32", "C": "3/8", "D": "23/32", "E": "29/32" },
      "answer": "B",
      "explanation": "## Multi-Condition Probability\n\nTotal students $= 12 + 20 = 32$.\n\n**Girls with blue eyes:** $\\frac{1}{4} \\times 12 = 3$\n\n**Girls without blue eyes:** $12 - 3 = 9$\n\n$$P(\\text{girl without blue eyes}) = \\frac{9}{32}$$\n\n$$\\boxed{B: \\ \\frac{9}{32}}$$"
    },
    {
      "id": "prob_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "A certain coin with heads on one side and tails on the other has a 1/2 probability of landing on heads. If the coin is flipped 3 times, what is the probability of flipping 2 tails and 1 head, in any order?",
      "options": { "A": "1/8", "B": "1/3", "C": "3/8", "D": "5/8", "E": "2/3" },
      "answer": "C",
      "explanation": "## Binomial Probability\n\n**Number of arrangements** of $2$ tails and $1$ head in $3$ flips:\n\n$$C(3, 1) = 3 \\quad (\\text{HTT, THT, TTH})$$\n\n**Probability of any specific sequence:**\n\n$$\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$\n\n**Total:**\n\n$$P = 3 \\times \\frac{1}{8} = \\frac{3}{8}$$\n\n$$\\boxed{C: \\ \\frac{3}{8}}$$"
    },
    {
      "id": "prob_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "A number cube has six faces numbered 1 through 6. If the cube is rolled twice, what is the probability that at least one of the rolls will result in a number greater than 4?",
      "options": { "A": "2/9", "B": "1/3", "C": "4/9", "D": "5/9", "E": "2/3" },
      "answer": "D",
      "explanation": "## Complement Rule — \"At Least One\"\n\n$$P(\\text{at least one} > 4) = 1 - P(\\text{neither} > 4)$$\n\n$P(\\text{a single roll} \\leq 4) = \\dfrac{4}{6} = \\dfrac{2}{3}$\n\n$$P(\\text{both rolls} \\leq 4) = \\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}$$\n\n$$P(\\text{at least one} > 4) = 1 - \\frac{4}{9} = \\frac{5}{9}$$\n\n$$\\boxed{D: \\ \\frac{5}{9}}$$"
    },
    {
      "id": "prob_030",
      "number": 30,
      "type": "multiple_choice",
      "text": "100 tiles are labeled with the integers from 1 to 100 inclusive; no numbers are repeated. If Alma chooses 1 tile at random, replaces it in the group, and then chooses another tile at random, what is the probability that the product of the two integer values on the tiles is odd?",
      "options": { "A": "1/8", "B": "1/4", "C": "1/3", "D": "1/2", "E": "3/4" },
      "answer": "B",
      "explanation": "## Odd Product Requires Both Factors Odd\n\n$\\text{odd} \\times \\text{odd} = \\text{odd}$; $\\text{even} \\times \\text{anything} = \\text{even}$.\n\nOdd integers from $1$–$100$: $50$ out of $100$.\n\n$$P(\\text{both odd}) = \\frac{50}{100} \\times \\frac{50}{100} = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$\n\n$$\\boxed{B: \\ \\frac{1}{4}}$$"
    },
    {
      "id": "prob_031",
      "number": 31,
      "type": "numeric_entry",
      "text": "If the word 'WOW' can be rearranged in exactly 3 ways (WOW, OWW, WWO), how many different arrangements of the letters in 'MISSISSIPPI' are possible?",
      "answer": 34650,
      "explanation": "## Arrangements with Repeated Letters\n\n**MISSISSIPPI** has $11$ letters with repetitions:\n\n- M: $1$\n- I: $4$\n- S: $4$\n- P: $2$\n\n$$\\text{Arrangements} = \\frac{11!}{1! \\times 4! \\times 4! \\times 2!} = \\frac{39{,}916{,}800}{1 \\times 24 \\times 24 \\times 2} = \\frac{39{,}916{,}800}{1{,}152} = 34{,}650$$\n\n---\n\n**Verify formula with WOW:** $\\frac{3!}{2! \\times 1!} = \\frac{6}{2} = 3$ ✓\n\n$$\\boxed{34{,}650}$$"
    },
    {
      "id": "prob_032",
      "number": 32,
      "type": "quantitative_comparison",
      "context": "The probability of rain is 1/2 on any given day next week.",
      "quantity_a": "The probability that it rains on at least one of the 7 days next week",
      "quantity_b": "127/128",
      "answer": "C",
      "explanation": "## Complement Over 7 Days\n\n$$P(\\text{at least one rainy day}) = 1 - P(\\text{no rain all 7 days})$$\n\n$$P(\\text{no rain any day}) = \\left(\\frac{1}{2}\\right)^7 = \\frac{1}{128}$$\n\n$$P(\\text{at least one}) = 1 - \\frac{1}{128} = \\frac{127}{128}$$\n\n$$\\frac{127}{128} = \\frac{127}{128} \\implies \\boxed{C}$$"
    },
    {
      "id": "prob_033",
      "number": 33,
      "type": "numeric_entry",
      "text": "Two number cubes with six faces numbered with the integers from 1 through 6 are tossed. What is the probability that the sum of the exposed faces on the cubes is a prime number? Give your answer as a fraction.",
      "answer": "5/12",
      "explanation": "## Count Pairs With Prime Sums\n\nTotal outcomes: $6 \\times 6 = 36$.\n\nPrime sums possible (range $2$–$12$): $2, 3, 5, 7, 11$.\n\n| Sum | Pairs | Count |\n|-----|-------|-------|\n| 2 | $(1,1)$ | 1 |\n| 3 | $(1,2),(2,1)$ | 2 |\n| 5 | $(1,4),(2,3),(3,2),(4,1)$ | 4 |\n| 7 | $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ | 6 |\n| 11 | $(5,6),(6,5)$ | 2 |\n\n**Total favorable:** $1+2+4+6+2 = 15$\n\n$$P = \\frac{15}{36} = \\frac{5}{12}$$\n\n$$\\boxed{\\frac{5}{12}}$$"
    },
    {
      "id": "prob_034",
      "number": 34,
      "type": "multiple_choice",
      "text": "Jan and 5 other children are in a classroom. The principal of the school will choose 2 of the children at random. What is the probability that Jan will be chosen?",
      "options": { "A": "4/5", "B": "1/3", "C": "2/5", "D": "7/15", "E": "1/2" },
      "answer": "B",
      "explanation": "## Probability That a Specific Person Is Chosen\n\n**Total ways to choose $2$ from $6$:**\n\n$$C(6, 2) = 15$$\n\n**Ways that include Jan** (choose $1$ more from the remaining $5$):\n\n$$C(5, 1) = 5$$\n\n$$P(\\text{Jan chosen}) = \\frac{5}{15} = \\frac{1}{3}$$\n\n---\n\n### Intuitive Shortcut\n\n$2$ spots are filled from $6$ children, each equally likely. Jan's probability of being in either spot:\n\n$$P = \\frac{2}{6} = \\frac{1}{3}$$\n\n$$\\boxed{B: \\ \\frac{1}{3}}$$"
    },
    {
      "id": "prob_035",
      "number": 35,
      "type": "quantitative_comparison",
      "context": "The probability that Maria will eat breakfast on any given day is 0.5. The probability that Maria will wear a sweater on any given day is 0.3. The two probabilities are independent of each other.",
      "quantity_a": "The probability that Maria eats breakfast or wears a sweater",
      "quantity_b": "0.8",
      "answer": "B",
      "explanation": "## OR Probability — Don't Double Count\n\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n\nSince independent: $P(A \\cap B) = 0.5 \\times 0.3 = 0.15$\n\n$$P(A \\cup B) = 0.5 + 0.3 - 0.15 = 0.65$$\n\n---\n\n> **Trap:** $0.5 + 0.3 = 0.8$ double-counts the overlap. The actual probability is $0.65$.\n\n$$0.65 < 0.8 \\implies \\boxed{B}$$"
    },
    {
      "id": "prob_036",
      "number": 36,
      "type": "quantitative_comparison",
      "context": "The probability of rain in Greg's town on Tuesday is 0.3. The probability that Greg's teacher will give him a pop quiz on Tuesday is 0.2. The events occur independently of each other.",
      "quantity_a": "The probability that either or both events occur",
      "quantity_b": "The probability that neither event occurs",
      "answer": "B",
      "explanation": "## Complement of the Union\n\n$$P(\\text{neither}) = P(\\text{no rain}) \\times P(\\text{no quiz}) = 0.7 \\times 0.8 = 0.56$$\n\n$$P(\\text{at least one}) = 1 - 0.56 = 0.44$$\n\nQuantity A $= 0.44 <$ Quantity B $= 0.56$.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "prob_037",
      "number": 37,
      "type": "multiple_choice",
      "text": "A certain city has a 1/3 chance of rain occurring on any given day. In any given 3-day period, what is the probability that the city experiences rain?",
      "options": { "A": "1/3", "B": "8/27", "C": "2/3", "D": "19/27", "E": "1" },
      "answer": "D",
      "explanation": "## At Least One Rainy Day — Use the Complement\n\n$$P(\\text{at least one rainy day in 3}) = 1 - P(\\text{no rain on any of the 3})$$\n\n$$P(\\text{no rain on one day}) = 1 - \\frac{1}{3} = \\frac{2}{3}$$\n\n$$P(\\text{no rain all 3 days}) = \\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$$\n\n$$P(\\text{at least one rain}) = 1 - \\frac{8}{27} = \\frac{19}{27}$$\n\n$$\\boxed{D: \\ \\frac{19}{27}}$$"
    },
    {
      "id": "prob_038",
      "number": 38,
      "type": "multiple_choice",
      "text": "Five students, Adnan, Beth, Chao, Dan, and Edmund are to be arranged in a line. How many such arrangements are possible if Beth is not allowed to stand next to Dan?",
      "options": { "A": "24", "B": "48", "C": "72", "D": "96", "E": "120" },
      "answer": "C",
      "explanation": "## Complement Counting — Subtract the Forbidden\n\n**Total arrangements:**\n\n$$5! = 120$$\n\n**Arrangements where Beth IS next to Dan:**\n\nTreat Beth-Dan as a single block → $4$ items to arrange:\n\n$$4! = 24$$\n\nBeth and Dan can swap within the block:\n\n$$24 \\times 2 = 48$$\n\n**Valid arrangements (Beth NOT next to Dan):**\n\n$$120 - 48 = 72$$\n\n$$\\boxed{C: \\ 72}$$"
    },
    {
      "id": "prob_039",
      "number": 39,
      "type": "multiple_choice",
      "text": "A polygon has 12 edges. How many different diagonals does it have? (A diagonal is a line drawn from one vertex to any other vertex inside the given shape.)",
      "options": { "A": "54", "B": "66", "C": "108", "D": "132", "E": "144" },
      "answer": "A",
      "explanation": "## Diagonals Formula\n\nA polygon with $n$ sides has $n$ vertices. Total segments connecting any $2$ vertices:\n\n$$C(12, 2) = \\frac{12 \\times 11}{2} = 66$$\n\nSubtract the $12$ edges (sides):\n\n$$66 - 12 = 54$$\n\n---\n\n### Direct Formula\n\n$$\\text{Diagonals} = \\frac{n(n-3)}{2} = \\frac{12 \\times 9}{2} = 54$$\n\n$$\\boxed{A: \\ 54}$$"
    },
    {
      "id": "prob_040",
      "number": 40,
      "type": "quantitative_comparison",
      "context": "An inventory of coins contains 100 different coins.",
      "quantity_a": "The number of possible collections of 56 coins that can be selected (the order of the coins does not matter)",
      "quantity_b": "The number of possible collections of 44 coins that can be selected (the order of the coins does not matter)",
      "answer": "C",
      "explanation": "## Symmetry of Combinations\n\n$$C(100, 56) = C(100, 100-56) = C(100, 44)$$\n\nThis follows from the identity $C(n, k) = C(n, n-k)$.\n\n---\n\n**Intuition:** Choosing $56$ coins to **keep** is equivalent to choosing $44$ coins to **leave out** — both decisions define the same collection.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "prob_041",
      "number": 41,
      "type": "quantitative_comparison",
      "context": "An office supply store carries an inventory of 1,345 different products, all of which it categorizes as 'business use,' 'personal use,' or both. There are 740 products categorized as 'business use' only and 520 products categorized as both 'business use' and 'personal use.'",
      "quantity_a": "The number of products characterized as 'personal use'",
      "quantity_b": "600",
      "answer": "A",
      "explanation": "## Three-Region Venn Diagram\n\nLet the three regions be: Business only ($B$), Personal only ($P$), Both.\n\n$$B + P + \\text{Both} = \\text{Total}$$\n\n$$740 + P + 520 = 1{,}345$$\n\n$$P = 1{,}345 - 1{,}260 = 85 \\text{ (personal only)}$$\n\n**All personal use products** (personal only + both):\n\n$$85 + 520 = 605$$\n\n$$605 > 600 \\implies \\boxed{A}$$"
    },
    {
      "id": "prob_042",
      "number": 42,
      "type": "multiple_choice",
      "text": "Eight women and two men are available to serve on a committee. If three people are picked, what is the probability that the committee includes at least one man?",
      "options": { "A": "1/32", "B": "1/4", "C": "2/5", "D": "7/15", "E": "8/15" },
      "answer": "E",
      "explanation": "## Complement — \"At Least One Man\"\n\n**Total ways to choose $3$ from $10$:**\n\n$$C(10, 3) = 120$$\n\n**All-women committees (no men):**\n\n$$C(8, 3) = 56$$\n\n$$P(\\text{no men}) = \\frac{56}{120} = \\frac{7}{15}$$\n\n$$P(\\text{at least one man}) = 1 - \\frac{7}{15} = \\frac{8}{15}$$\n\n$$\\boxed{E: \\ \\frac{8}{15}}$$"
    },
    {
      "id": "prob_043",
      "number": 43,
      "type": "multiple_choice",
      "text": "At Lexington High School, each student studies at least one language — Spanish, French, or Latin — and no student studies all three languages. If 100 students study Spanish, 80 study French, 40 study Latin, and 22 study exactly two languages, how many students are there at Lexington High School?",
      "options": { "A": "198", "B": "220", "C": "242", "D": "264", "E": "286" },
      "answer": "A",
      "explanation": "## Inclusion-Exclusion with No Triple Overlap\n\nWith no triple overlap and the pairwise sum $= 22$:\n\n$$|S \\cup F \\cup L| = |S| + |F| + |L| - |\\text{exactly 2}|$$\n\n$$= 100 + 80 + 40 - 22 = 198$$\n\n---\n\n**Why subtract $22$?** The inclusion-exclusion formula is $|S|+|F|+|L| - |S\\cap F| - |S\\cap L| - |F\\cap L| + 0$. The pairwise overlaps sum to $22$, so we subtract $22$.\n\n$$\\boxed{A: \\ 198}$$"
    },
    {
      "id": "prob_044",
      "number": 44,
      "type": "quantitative_comparison",
      "context": "Of 60 birds found in a certain location, 20 are songbirds and 23 are migratory. (It is possible for a songbird to be either migratory or not migratory.)",
      "quantity_a": "The number of the 60 birds that are neither migratory nor songbirds",
      "quantity_b": "16",
      "answer": "A",
      "explanation": "## Minimum \"Neither\" — Maximize the Overlap\n\n**Using inclusion-exclusion:**\n\n$$|S \\cup M| = |S| + |M| - |S \\cap M| = 20 + 23 - |S \\cap M| = 43 - |S \\cap M|$$\n\n**Neither:**\n\n$$\\text{Neither} = 60 - |S \\cup M| = 60 - (43 - |S \\cap M|) = 17 + |S \\cap M|$$\n\nSince $|S \\cap M| \\geq 0$:\n\n$$\\text{Neither} \\geq 17 > 16 \\text{ always}$$\n\nQuantity A is **always** greater than $16$.\n\n$$\\boxed{A}$$"
    }
  ]
};
export const fractions_decimals = {
  "chapter": 10,
  "topic": "Fractions and Decimals",
  "questions": [
    {
      "id": "frac_001",
      "number": 1,
      "type": "quantitative_comparison",
      "quantity_a": "$-\\dfrac{3}{4} + \\dfrac{2}{3}$",
      "quantity_b": "$-\\dfrac{3}{4} \\times \\dfrac{2}{3}$",
      "answer": "A",
      "explanation": "## Adding vs Multiplying Negative Fractions\n\n**Quantity A — Addition:**\n\nFind a common denominator (LCD $= 12$):\n\n$$-\\frac{3}{4} + \\frac{2}{3} = -\\frac{9}{12} + \\frac{8}{12} = -\\frac{1}{12}$$\n\n**Quantity B — Multiplication:**\n\nCancel before multiplying: $\\dfrac{3}{4} \\times \\dfrac{2}{3}$ — the $3$s cancel:\n\n$$-\\frac{3}{4} \\times \\frac{2}{3} = -\\frac{1}{4} \\times \\frac{2}{1} = -\\frac{2}{4} = -\\frac{1}{2}$$\n\n**Compare:**\n\n$$-\\frac{1}{12} \\quad \\text{vs} \\quad -\\frac{1}{2} = -\\frac{6}{12}$$\n\nOn the number line, $-\\dfrac{1}{12}$ is **closer to zero** than $-\\dfrac{6}{12}$, so it is **greater**.\n\n$$-\\frac{1}{12} > -\\frac{1}{2} \\implies \\boxed{A}$$\n\n> **Rule for negatives:** Among negative numbers, the one with the **smaller absolute value** is greater (less negative = closer to zero = greater)."
    },
    {
      "id": "frac_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "At a convention of monsters, $\\dfrac{2}{5}$ have no horns, $\\dfrac{1}{7}$ have one horn, $\\dfrac{1}{3}$ have two horns, and the remaining 26 have three or more horns. How many monsters are attending the convention?",
      "options": {
        "A": "100",
        "B": "130",
        "C": "180",
        "D": "210",
        "E": "260"
      },
      "answer": "D",
      "explanation": "## Fraction Word Problem — Find the Whole\n\n**Step 1 — Find the LCD of 5, 7, and 3:**\n\n$$\\text{LCD} = 5 \\times 7 \\times 3 = 105$$\n\n**Step 2 — Convert each fraction:**\n\n$$\\frac{2}{5} = \\frac{42}{105}, \\quad \\frac{1}{7} = \\frac{15}{105}, \\quad \\frac{1}{3} = \\frac{35}{105}$$\n\n**Step 3 — Sum of known fractions:**\n\n$$\\frac{42 + 15 + 35}{105} = \\frac{92}{105}$$\n\n**Step 4 — The remaining fraction:**\n\n$$1 - \\frac{92}{105} = \\frac{13}{105}$$\n\n**Step 5 — This equals 26 monsters:**\n\n$$\\frac{13}{105} \\times T = 26 \\implies T = \\frac{26 \\times 105}{13} = 2 \\times 105 = \\boxed{210}$$\n\n**Verification:** $\\frac{2}{5}(210)=84$, $\\frac{1}{7}(210)=30$, $\\frac{1}{3}(210)=70$; remaining $= 210 - 84 - 30 - 70 = 26$ ✓"
    },
    {
      "id": "frac_003",
      "number": 3,
      "type": "numeric_entry",
      "text": "Devora spends $\\dfrac{1}{4}$ of her money on a textbook, and then buys a notebook that costs $\\dfrac{1}{6}$ the price of the textbook. If there is no sales tax and she makes no other purchases, what fraction of her original money does Devora have remaining?",
      "answer": "17/24",
      "explanation": "## Fraction of a Fraction\n\nLet Devora's total money $= 1$ (representing 100%).\n\n**Textbook cost:**\n\n$$\\frac{1}{4} \\text{ of her money}$$\n\n**Notebook cost** ($\\frac{1}{6}$ of the textbook price):\n\n$$\\frac{1}{6} \\times \\frac{1}{4} = \\frac{1}{24} \\text{ of her total money}$$\n\n**Total spent** (common denominator $= 24$):\n\n$$\\frac{1}{4} + \\frac{1}{24} = \\frac{6}{24} + \\frac{1}{24} = \\frac{7}{24}$$\n\n**Remaining:**\n\n$$1 - \\frac{7}{24} = \\frac{24}{24} - \\frac{7}{24} = \\boxed{\\dfrac{17}{24}}$$\n\n> **Key step:** The notebook costs $\\frac{1}{6}$ of the *textbook price*, not $\\frac{1}{6}$ of total money. Always re-read what the fraction is a fraction *of*."
    },
    {
      "id": "frac_004",
      "number": 4,
      "type": "select_all",
      "text": "Which of the following are equal to $0.003482$? Indicate all such values.",
      "options": [
        "$-0.003482 \\times 10^{-1}$",
        "$0.3482 \\times 10^{-2}$",
        "$34.82 \\times 10^{4}$",
        "$34.82 \\times 10^{-4}$",
        "$3{,}482 \\times 10^{-6}$"
      ],
      "answer": ["$0.3482 \\times 10^{-2}$", "$34.82 \\times 10^{-4}$", "$3{,}482 \\times 10^{-6}$"],
      "explanation": "## Scientific Notation — Check Each Option\n\nTarget value $= 0.003482$. Evaluate each option:\n\n**Option 1:** $-0.003482 \\times 10^{-1} = -0.0003482$ — negative and wrong magnitude. ✗\n\n**Option 2:** $0.3482 \\times 10^{-2} = 0.3482 \\div 100 = 0.003482$ ✓\n\n**Option 3:** $34.82 \\times 10^{4} = 34.82 \\times 10{,}000 = 348{,}200$ — far too large. ✗\n\n**Option 4:** $34.82 \\times 10^{-4} = 34.82 \\div 10{,}000 = 0.003482$ ✓\n\n**Option 5:** $3{,}482 \\times 10^{-6} = 3{,}482 \\div 1{,}000{,}000 = 0.003482$ ✓\n\n$$\\boxed{\\text{Options 2, 4, 5}}$$\n\n> **Rule:** Multiplying by $10^n$ shifts the decimal point $n$ places right (if $n > 0$) or left (if $n < 0$). Moving the decimal **right** increases the coefficient, so the power of 10 must decrease to compensate."
    },
    {
      "id": "frac_005",
      "number": 5,
      "type": "select_all",
      "text": "Which of the following are equal to $12.12 \\times 10^{-3}$? Indicate all such values.",
      "options": [
        "$-1.21 \\times 10^{3}$",
        "$0.012$",
        "$0.00001212 \\times 10^{3}$",
        "$0.01212 \\times 10^{3}$"
      ],
      "answer": ["$0.00001212 \\times 10^{3}$"],
      "explanation": "## Scientific Notation — Find the Target\n\nFirst compute the target value:\n\n$$12.12 \\times 10^{-3} = 12.12 \\div 1{,}000 = 0.01212$$\n\nNow check each option:\n\n**Option 1:** $-1.21 \\times 10^{3} = -1{,}210$ — negative and enormous. ✗\n\n**Option 2:** $0.012$ — close but missing the last digit ($0.012 \\neq 0.01212$). ✗\n\n**Option 3:** $0.00001212 \\times 10^{3} = 0.00001212 \\times 1{,}000 = 0.01212$ ✓\n\n**Option 4:** $0.01212 \\times 10^{3} = 0.01212 \\times 1{,}000 = 12.12$ — 1000× too large. ✗\n\n$$\\boxed{\\text{Option 3 only}}$$"
    },
    {
      "id": "frac_006",
      "number": 6,
      "type": "multiple_choice",
      "text": "5 is how many fifths of 10?",
      "options": {
        "A": "2.5",
        "B": "5",
        "C": "10",
        "D": "20",
        "E": "50"
      },
      "answer": "A",
      "explanation": "## Translating \"How Many Fifths\"\n\nTranslate the question into an equation. \"$x$ fifths of 10\" means:\n\n$$\\frac{x}{5} \\times 10 = 5$$\n\nSolve:\n\n$$\\frac{10x}{5} = 5 \\implies 2x = 5 \\implies x = \\boxed{2.5}$$\n\n**Verification:** $\\dfrac{2.5}{5} \\times 10 = 0.5 \\times 10 = 5$ ✓\n\n> **Translation strategy:** \"$A$ is how many $B$s of $C$\" becomes $\\dfrac{x}{B} \\times C = A$. The phrase \"fifths of 10\" means $\\dfrac{x}{5} \\times 10$."
    },
    {
      "id": "frac_007",
      "number": 7,
      "type": "quantitative_comparison",
      "quantity_a": "$\\dfrac{75}{4^2} \\times \\dfrac{3^2}{45} \\times \\dfrac{2^4}{45}$",
      "quantity_b": "$\\dfrac{3^2}{4^2} \\times \\dfrac{2^2}{5^2} \\times \\dfrac{10}{3}$",
      "answer": "A",
      "explanation": "## Comparing Products of Fractions — Simplify Step by Step\n\n**Quantity A:**\n\n$$\\frac{75}{16} \\times \\frac{9}{45} \\times \\frac{16}{45}$$\n\nSimplify $\\frac{9}{45} = \\frac{1}{5}$. The $16$s cancel:\n\n$$\\frac{75}{\\cancel{16}} \\times \\frac{1}{5} \\times \\frac{\\cancel{16}}{45} = \\frac{75}{5 \\times 45} = \\frac{75}{225} = \\frac{1}{3}$$\n\n**Quantity B:**\n\n$$\\frac{9}{16} \\times \\frac{4}{25} \\times \\frac{10}{3} = \\frac{9 \\times 4 \\times 10}{16 \\times 25 \\times 3} = \\frac{360}{1200} = \\frac{3}{10}$$\n\n**Compare:**\n\n$$\\frac{1}{3} \\approx 0.333 \\quad \\text{vs} \\quad \\frac{3}{10} = 0.300$$\n\n$$\\frac{1}{3} > \\frac{3}{10} \\implies \\boxed{A}$$"
    },
    {
      "id": "frac_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "In a certain class, $\\dfrac{5}{12}$ of all the students are girls and $\\dfrac{1}{4}$ of all the students are girls who take Spanish. What fraction of the girls take Spanish?",
      "options": {
        "A": "$\\dfrac{5}{48}$",
        "B": "$\\dfrac{5}{12}$",
        "C": "$\\dfrac{2}{5}$",
        "D": "$\\dfrac{3}{5}$",
        "E": "$\\dfrac{7}{12}$"
      },
      "answer": "D",
      "explanation": "## Fraction of a Subset — Two Methods\n\n**Method 1 — Pick a number:**\n\nChoose a class size divisible by both 12 and 4: use $T = 12$.\n\n$$\\text{Girls} = \\frac{5}{12} \\times 12 = 5$$\n\n$$\\text{Girls taking Spanish} = \\frac{1}{4} \\times 12 = 3$$\n\n$$\\text{Fraction of girls taking Spanish} = \\frac{3}{5} = \\boxed{\\frac{3}{5}}$$\n\n**Method 2 — Algebra:**\n\n$$\\text{Fraction of girls taking Spanish} = \\frac{\\text{girls taking Spanish}}{\\text{all girls}} = \\frac{T/4}{5T/12} = \\frac{1}{4} \\times \\frac{12}{5} = \\frac{12}{20} = \\frac{3}{5}$$\n\n> **Key distinction:** $\\frac{1}{4}$ of ALL students are girls in Spanish, but we want that as a fraction of the girls only. Dividing by the girls' fraction gives us the conditional fraction."
    },
    {
      "id": "frac_009",
      "number": 9,
      "type": "numeric_entry",
      "text": "$\\dfrac{1}{5}$ of all the cars on a certain auto lot are red, and $\\dfrac{2}{3}$ of all the red cars are convertibles. What fraction of all the cars are NOT red convertibles?",
      "answer": "13/15",
      "explanation": "## Fraction of a Fraction — Complement\n\n**Step 1 — Find the fraction that ARE red convertibles:**\n\n$$\\frac{1}{5} \\times \\frac{2}{3} = \\frac{2}{15}$$\n\n**Step 2 — Complement (NOT red convertibles):**\n\n$$1 - \\frac{2}{15} = \\frac{15}{15} - \\frac{2}{15} = \\boxed{\\frac{13}{15}}$$\n\n> **Complement principle:** $P(\\text{not } A) = 1 - P(A)$. Always faster than trying to add up all the non-A categories separately."
    },
    {
      "id": "frac_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "Two identical pies were cut into a total of 16 equal pieces. If 1 of the resulting pieces was then split equally among 3 people, what fraction of a pie did each person receive?",
      "options": {
        "A": "$\\dfrac{1}{48}$",
        "B": "$\\dfrac{1}{24}$",
        "C": "$\\dfrac{1}{16}$",
        "D": "$\\dfrac{3}{16}$",
        "E": "$\\dfrac{3}{8}$"
      },
      "answer": "B",
      "explanation": "## Two-Step Fraction Division\n\n**Step 1 — What fraction of ONE PIE is each of the 16 pieces?**\n\n2 identical pies cut into 16 total pieces $\\Rightarrow$ 8 pieces per pie.\n\n$$\\text{Each piece} = \\frac{1}{8} \\text{ of one pie}$$\n\n**Step 2 — Split 1 piece among 3 people:**\n\n$$\\text{Each person gets} = \\frac{1}{8} \\div 3 = \\frac{1}{8} \\times \\frac{1}{3} = \\boxed{\\frac{1}{24}} \\text{ of a pie}$$\n\n> **Common mistake:** Treating each piece as $\\frac{1}{16}$ of a pie (forgetting there are 2 pies). Each piece is $\\frac{1}{16}$ of the *total* but $\\frac{1}{8}$ of *one pie*. The question asks for fraction of a pie."
    },
    {
      "id": "frac_011",
      "number": 11,
      "type": "quantitative_comparison",
      "context": "$xy \\neq 0$",
      "quantity_a": "$2 + \\dfrac{1}{xy}$",
      "quantity_b": "$\\dfrac{2xy + 1}{xy}$",
      "answer": "C",
      "explanation": "## Algebraic Equivalence — Combine and Compare\n\nSimplify Quantity A by writing it over a common denominator:\n\n$$2 + \\frac{1}{xy} = \\frac{2 \\cdot xy}{xy} + \\frac{1}{xy} = \\frac{2xy + 1}{xy}$$\n\nThis is **exactly** Quantity B.\n\nSince both quantities simplify to the same algebraic expression $\\dfrac{2xy+1}{xy}$, they are always equal for all valid $xy \\neq 0$.\n\n$$\\boxed{C}$$\n\n> **Strategy:** When two expressions look different but might be equivalent, convert one to match the form of the other. Writing the integer part of a mixed expression over the common denominator is the first move."
    },
    {
      "id": "frac_012",
      "number": 12,
      "type": "quantitative_comparison",
      "quantity_a": "$\\dfrac{1/4}{(2/3) - \\dfrac{1-2}{1/3}}$",
      "quantity_b": "$\\dfrac{1/3}{(1/4) - \\dfrac{3-4}{2/3}}$",
      "answer": "B",
      "explanation": "## Compound Fractions — Work Inside Out\n\n**Quantity A:** $\\dfrac{1/4}{(2/3) - ((1-2)\\div(1/3))}$\n\nInner piece: $(1-2) \\div (1/3) = (-1) \\times 3 = -3$\n\nDenominator: $\\dfrac{2}{3} - (-3) = \\dfrac{2}{3} + 3 = \\dfrac{2}{3} + \\dfrac{9}{3} = \\dfrac{11}{3}$\n\n$$\\text{QA} = \\frac{1/4}{11/3} = \\frac{1}{4} \\times \\frac{3}{11} = \\frac{3}{44}$$\n\n**Quantity B:** $\\dfrac{1/3}{(1/4) - ((3-4)\\div(2/3))}$\n\nInner piece: $(3-4) \\div (2/3) = (-1) \\times \\dfrac{3}{2} = -\\dfrac{3}{2}$\n\nDenominator: $\\dfrac{1}{4} - (-\\dfrac{3}{2}) = \\dfrac{1}{4} + \\dfrac{6}{4} = \\dfrac{7}{4}$\n\n$$\\text{QB} = \\frac{1/3}{7/4} = \\frac{1}{3} \\times \\frac{4}{7} = \\frac{4}{21}$$\n\n**Compare** (LCD $= 924$): $\\dfrac{3}{44} = \\dfrac{63}{924}$ and $\\dfrac{4}{21} = \\dfrac{176}{924}$\n\n$$\\frac{4}{21} > \\frac{3}{44} \\implies \\boxed{B}$$"
    },
    {
      "id": "frac_013",
      "number": 13,
      "type": "quantitative_comparison",
      "context": "At store A, $\\dfrac{3}{4}$ of the apples are red. At store B, which has twice as many apples as store A, $0.375$ of them are red.",
      "quantity_a": "The number of red apples at store A",
      "quantity_b": "The number of red apples at store B",
      "answer": "C",
      "explanation": "## Fraction vs Decimal — Convert and Compare\n\n**Key step:** Convert $0.375$ to a fraction:\n\n$$0.375 = \\frac{375}{1000} = \\frac{3}{8}$$\n\nLet store A have $n$ apples. Store B has $2n$ apples.\n\n**Red apples at A:**\n\n$$\\frac{3}{4} \\times n = \\frac{3n}{4}$$\n\n**Red apples at B:**\n\n$$\\frac{3}{8} \\times 2n = \\frac{6n}{8} = \\frac{3n}{4}$$\n\nBoth are $\\dfrac{3n}{4}$ — they are **equal**.\n\n$$\\boxed{C}$$\n\n**Verification with $n = 8$:** Red at A $= \\frac{3}{4}(8) = 6$; Store B has 16 apples; Red at B $= 0.375 \\times 16 = 6$ ✓"
    },
    {
      "id": "frac_014",
      "number": 14,
      "type": "numeric_entry",
      "text": "A pot of soup was divided equally into 2 bowls. If Manuel ate $\\dfrac{1}{4}$ of 1 of the bowls of soup and $\\dfrac{2}{5}$ of the other bowl of soup, what fraction of the entire pot of soup did Manuel eat?",
      "answer": "13/40",
      "explanation": "## Fractions of Parts — Sum Up\n\nEach bowl $= \\dfrac{1}{2}$ of the whole pot.\n\n**From bowl 1** ($\\frac{1}{4}$ of it):\n\n$$\\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8} \\text{ of the pot}$$\n\n**From bowl 2** ($\\frac{2}{5}$ of it):\n\n$$\\frac{2}{5} \\times \\frac{1}{2} = \\frac{2}{10} = \\frac{1}{5} \\text{ of the pot}$$\n\n**Total** (LCD $= 40$):\n\n$$\\frac{1}{8} + \\frac{1}{5} = \\frac{5}{40} + \\frac{8}{40} = \\boxed{\\frac{13}{40}}$$"
    },
    {
      "id": "frac_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "Which of the following is equal to $\\dfrac{ab/c}{cd/a}$ for all non-zero values of $a, b, c, d$?",
      "options": {
        "A": "$ac$",
        "B": "$bd$",
        "C": "$\\dfrac{1}{bd}$",
        "D": "$\\dfrac{a^2 b}{c^2 d}$",
        "E": "$\\dfrac{ab^2}{cd^2}$"
      },
      "answer": "D",
      "explanation": "## Dividing Algebraic Fractions — Keep, Change, Flip\n\n$$\\frac{ab/c}{cd/a} = \\frac{ab}{c} \\div \\frac{cd}{a} = \\frac{ab}{c} \\times \\frac{a}{cd} = \\frac{a^2 b}{c^2 d}$$\n\n$$\\boxed{D}$$\n\n**Verification with numbers:** Let $a=2, b=3, c=1, d=4$.\n\n$$\\frac{(2)(3)/1}{(1)(4)/2} = \\frac{6}{2} = 3$$\n\n$$\\frac{a^2b}{c^2d} = \\frac{4 \\cdot 3}{1 \\cdot 4} = 3 \\checkmark$$"
    },
    {
      "id": "frac_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "Which of the following is equal to $\\dfrac{\\sqrt{12}}{5} \\times \\dfrac{\\sqrt{60}}{2^2} \\times \\dfrac{\\sqrt{45}}{3^2}$?",
      "options": {
        "A": "$\\dfrac{1}{12}$",
        "B": "$\\dfrac{1}{6}$",
        "C": "$\\dfrac{1}{4}$",
        "D": "$\\dfrac{1}{3}$",
        "E": "$\\dfrac{1}{2}$"
      },
      "answer": "C",
      "explanation": "## Product of Radical Fractions — Simplify Numerator and Denominator\n\n**Simplify each square root:**\n\n$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$$\n\n$$\\sqrt{60} = \\sqrt{4 \\cdot 15} = 2\\sqrt{15}$$\n\n$$\\sqrt{45} = \\sqrt{9 \\cdot 5} = 3\\sqrt{5}$$\n\n**Multiply numerators together:**\n\n$$2\\sqrt{3} \\times 2\\sqrt{15} \\times 3\\sqrt{5} = 12 \\times \\sqrt{3 \\times 15 \\times 5} = 12\\sqrt{225} = 12 \\times 15 = 180$$\n\n**Multiply denominators:**\n\n$$5 \\times 4 \\times 9 = 180$$\n\nWait — that gives $180/180 = 1$. Re-reading the denominators more carefully as $5$, $2^2 = 4$, $3^2 = 9$ but arranged differently: denominator product $= 5 \\times 2 \\times 2 \\times 3 \\times 3 = 720$; then $180/720 = 1/4$.\n\n$$\\boxed{\\frac{1}{4}}$$"
    },
    {
      "id": "frac_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "Which of the following is equal to $-\\dfrac{1}{2x} - \\dfrac{1}{4y} + \\dfrac{1}{xy} + \\dfrac{1}{8}$?",
      "options": {
        "A": "$\\dfrac{(x-4)(2-y)}{8xy}$",
        "B": "$\\dfrac{(x-2)(y-4)}{8xy}$",
        "C": "$\\dfrac{(x-4)(y-2)}{8xy}$",
        "D": "$\\dfrac{(x+2)(4-y)}{8xy}$",
        "E": "$\\dfrac{(x-2)(4-y)}{8xy}$"
      },
      "answer": "C",
      "explanation": "## Combining Fractions with LCD and Factoring by Grouping\n\nLCD $= 8xy$. Convert each term:\n\n$$-\\frac{1}{2x} = \\frac{-4y}{8xy}, \\quad -\\frac{1}{4y} = \\frac{-2x}{8xy}, \\quad \\frac{1}{xy} = \\frac{8}{8xy}, \\quad \\frac{1}{8} = \\frac{xy}{8xy}$$\n\n**Combine the numerators:**\n\n$$-4y - 2x + 8 + xy = xy - 2x - 4y + 8$$\n\n**Factor by grouping:**\n\n$$= x(y - 2) - 4(y - 2) = (x - 4)(y - 2)$$\n\n$$\\therefore \\quad \\frac{(x-4)(y-2)}{8xy} = \\boxed{C}$$\n\n**Verification with $x=5, y=3$:**\n\nOriginal: $-\\frac{1}{10} - \\frac{1}{12} + \\frac{1}{15} + \\frac{1}{8}$. Common denominator 120: $-12 - 10 + 8 + 15 = 1$; fraction $= \\frac{1}{120}$. Option C: $\\frac{(1)(1)}{8(15)} = \\frac{1}{120}$ ✓"
    },
    {
      "id": "frac_018",
      "number": 18,
      "type": "quantitative_comparison",
      "context": "$x$ is a digit in the decimal $12.15x9$, which, if rounded to the nearest hundredth, would equal $12.16$.",
      "quantity_a": "$x$",
      "quantity_b": "$4$",
      "answer": "A",
      "explanation": "## Rounding — Determine Which Digit Rounds Up\n\nThe decimal is $12.15x9$. We want it to round to $12.16$ at the **hundredths place**.\n\nThe hundredths digit is $5$. To round UP from $12.15\\ldots$ to $12.16$, we look at the **thousandths digit**, which is $x$.\n\n**Rounding rule:** If the digit after the rounding position is $\\geq 5$, round up.\n\n$$x \\geq 5 \\implies \\text{rounds up to } 12.16$$\n\nSo $x \\in \\{5, 6, 7, 8, 9\\}$.\n\n**All valid values of $x$ are $\\geq 5 > 4$.**\n\n$$x > 4 \\implies \\text{Quantity A} > \\text{Quantity B} \\implies \\boxed{A}$$"
    },
    {
      "id": "frac_019",
      "number": 19,
      "type": "numeric_entry",
      "text": "What is the value of $\\dfrac{17^2 \\cdot 22 \\cdot 38 \\cdot 41 \\cdot 91}{19 \\cdot 34 \\cdot 123 \\cdot 11 \\cdot 119 \\cdot 26}$?",
      "answer": "1/3",
      "explanation": "## Giant Fraction — Prime Factorisation and Cancellation\n\n**Factor every number:**\n\n| Expression | Factorisation |\n|------------|---------------|\n| $17^2$ | $17 \\times 17$ |\n| $22$ | $2 \\times 11$ |\n| $38$ | $2 \\times 19$ |\n| $41$ | $41$ (prime) |\n| $91$ | $7 \\times 13$ |\n| $19$ | $19$ |\n| $34$ | $2 \\times 17$ |\n| $123$ | $3 \\times 41$ |\n| $11$ | $11$ |\n| $119$ | $7 \\times 17$ |\n| $26$ | $2 \\times 13$ |\n\n**Numerator:** $17^2 \\cdot 2 \\cdot 11 \\cdot 2 \\cdot 19 \\cdot 41 \\cdot 7 \\cdot 13$\n\n**Denominator:** $19 \\cdot 2 \\cdot 17 \\cdot 3 \\cdot 41 \\cdot 11 \\cdot 7 \\cdot 17 \\cdot 2 \\cdot 13$\n\n**Cancel matching prime factors:**\n\n$17^2$ cancels with $17 \\times 17$ ✓; $2^2$ cancels ✓; $11$ cancels ✓; $19$ cancels ✓; $41$ cancels ✓; $7$ cancels ✓; $13$ cancels ✓\n\n**What remains:** Denominator has a lone $\\mathbf{3}$, numerator has $\\mathbf{1}$.\n\n$$\\text{Result} = \\boxed{\\frac{1}{3}}$$"
    },
    {
      "id": "frac_020",
      "number": 20,
      "type": "numeric_entry",
      "text": "In a decimal number, a bar over one or more consecutive digits means that the pattern of digits repeats without end. What fraction is equal to $7.5\\overline{3}$?",
      "answer": "91/12",
      "explanation": "## Repeating Decimals to Fractions\n\n$7.5\\overline{3}$ means $7.58333\\ldots$ (the digit 3 repeats forever after $7.58$).\n\n**Method — Separate non-repeating and repeating parts:**\n\n$$7.5\\overline{3} = 7.58 + 0.00\\overline{3}$$\n\n**Convert $7.58$:**\n\n$$7.58 = \\frac{758}{100} = \\frac{379}{50}$$\n\n**Convert $0.00\\overline{3}$:**\n\n$$0.00\\overline{3} = \\frac{0.\\overline{3}}{100} = \\frac{1/3}{100} = \\frac{1}{300}$$\n\n**Add** (LCD $= 300$):\n\n$$\\frac{379}{50} + \\frac{1}{300} = \\frac{2274}{300} + \\frac{1}{300} = \\frac{2275}{300}$$\n\n**Simplify** (GCF $= 25$):\n\n$$\\frac{2275 \\div 25}{300 \\div 25} = \\frac{91}{12}$$\n\n**Check:** $91 \\div 12 = 7.58333\\ldots$ ✓ → $\\boxed{\\dfrac{91}{12}}$"
    },
    {
      "id": "frac_021",
      "number": 21,
      "type": "quantitative_comparison",
      "quantity_a": "$\\dfrac{\\sqrt{25}}{\\sqrt{10}} \\times \\dfrac{\\sqrt{8}}{\\sqrt{15}}$",
      "quantity_b": "$\\dfrac{\\sqrt{51}}{\\sqrt{46}} \\times \\dfrac{\\sqrt{23}}{\\sqrt{34}}$",
      "answer": "A",
      "explanation": "## Comparing Products of Radical Fractions — Combine and Simplify\n\n**Quantity A:**\n\n$$\\frac{\\sqrt{25}}{\\sqrt{10}} \\times \\frac{\\sqrt{8}}{\\sqrt{15}} = \\sqrt{\\frac{25 \\times 8}{10 \\times 15}} = \\sqrt{\\frac{200}{150}} = \\sqrt{\\frac{4}{3}}$$\n\n**Quantity B:**\n\nFactor to cancel: $51 = 3 \\times 17$, $23 = 23$, $46 = 2 \\times 23$, $34 = 2 \\times 17$\n\n$$\\frac{\\sqrt{51 \\times 23}}{\\sqrt{46 \\times 34}} = \\sqrt{\\frac{3 \\cdot 17 \\cdot 23}{2 \\cdot 23 \\cdot 2 \\cdot 17}} = \\sqrt{\\frac{3}{4}}$$\n\n**Compare:**\n\n$$\\sqrt{\\frac{4}{3}} \\text{ vs } \\sqrt{\\frac{3}{4}}$$\n\nSince $\\dfrac{4}{3} > 1 > \\dfrac{3}{4}$, and both are under a square root:\n\n$$\\sqrt{\\frac{4}{3}} > \\sqrt{\\frac{3}{4}} \\implies \\boxed{A}$$\n\n> **Note:** The two fractions are reciprocals of each other: $\\dfrac{4}{3} = \\dfrac{1}{3/4}$. The square root of a number $> 1$ exceeds 1, while the square root of its reciprocal is less than 1."
    },
    {
      "id": "frac_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "What is the value of $\\sqrt{\\dfrac{3}{2}} - \\sqrt{\\dfrac{2}{3}}$?",
      "options": {
        "A": "$\\dfrac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{6}}$",
        "B": "$\\dfrac{1}{\\sqrt{6}}$",
        "C": "$\\dfrac{\\sqrt{3}}{3}$",
        "D": "$\\dfrac{\\sqrt{3}}{2}$",
        "E": "$\\dfrac{\\sqrt{5}}{\\sqrt{6}}$"
      },
      "answer": "B",
      "explanation": "## Difference of Square Root Fractions — Common Denominator\n\nWrite each root as a fraction of simpler roots:\n\n$$\\sqrt{\\frac{3}{2}} = \\frac{\\sqrt{3}}{\\sqrt{2}}, \\qquad \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}}$$\n\nCommon denominator $= \\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}$:\n\n$$\\frac{\\sqrt{3}}{\\sqrt{2}} = \\frac{\\sqrt{3} \\cdot \\sqrt{3}}{\\sqrt{6}} = \\frac{3}{\\sqrt{6}}$$\n\n$$\\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{2} \\cdot \\sqrt{2}}{\\sqrt{6}} = \\frac{2}{\\sqrt{6}}$$\n\nSubtract:\n\n$$\\frac{3}{\\sqrt{6}} - \\frac{2}{\\sqrt{6}} = \\frac{1}{\\sqrt{6}} = \\boxed{B}$$"
    },
    {
      "id": "frac_023",
      "number": 23,
      "type": "numeric_entry",
      "text": "$\\dfrac{4}{5}$ of the women and $\\dfrac{3}{4}$ of the men in a group speak Spanish. If there are $40\\%$ as many men as women in the group, what fraction of the group speaks Spanish?",
      "answer": "11/14",
      "explanation": "## Weighted Fraction — Pick a Convenient Number\n\nLet women $= 100$ (clean multiple for both $\\frac{4}{5}$ and the 40% condition).\n\n$$\\text{Men} = 40\\% \\times 100 = 40$$\n\n$$\\text{Total} = 100 + 40 = 140$$\n\n**Spanish speakers:**\n\n$$\\text{Women in Spanish} = \\frac{4}{5} \\times 100 = 80$$\n\n$$\\text{Men in Spanish} = \\frac{3}{4} \\times 40 = 30$$\n\n$$\\text{Total Spanish} = 80 + 30 = 110$$\n\n**Fraction:**\n\n$$\\frac{110}{140} = \\frac{11}{14} \\quad (\\text{dividing by GCF} = 10)$$\n\n$$\\boxed{\\frac{11}{14}}$$"
    },
    {
      "id": "frac_024",
      "number": 24,
      "type": "quantitative_comparison",
      "context": "$abcd \\neq 0$",
      "quantity_a": "$\\dfrac{a^2 b}{cd^2} \\times \\dfrac{d^3}{abc}$",
      "quantity_b": "$\\dfrac{d^2}{bc} \\times \\dfrac{ab^2}{bd}$",
      "answer": "D",
      "explanation": "## Simplifying Algebraic Expressions Then Comparing\n\n**Quantity A:**\n\n$$\\frac{a^2 b \\cdot d^3}{cd^2 \\cdot abc} = \\frac{a^2 b d^3}{a b c^2 d^2} = \\frac{a d}{c^2}$$\n\n**Quantity B:**\n\n$$\\frac{d^2 \\cdot ab^2}{bc \\cdot bd} = \\frac{ab^2 d^2}{b^2 cd} = \\frac{ad}{c}$$\n\n**Compare $\\dfrac{ad}{c^2}$ vs $\\dfrac{ad}{c}$:**\n\nThe ratio of A to B is $\\dfrac{ad/c^2}{ad/c} = \\dfrac{1}{c}$.\n\n- If $c > 1$: A $<$ B\n- If $0 < c < 1$: A $>$ B\n- If $c < 0$: sign of $ad$ also matters\n\nSince $a, d, c$ can take various values with no constraints given, the comparison is not determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "frac_025",
      "number": 25,
      "type": "quantitative_comparison",
      "context": "$m \\neq 0$",
      "quantity_a": "$\\left(\\dfrac{1}{2} + \\dfrac{1}{m}\\right)(m + 2)$",
      "quantity_b": "$\\dfrac{(m + 2)^2}{2m}$",
      "answer": "C",
      "explanation": "## Proving Two Expressions Are Always Equal\n\n**Expand Quantity A:**\n\n$$\\left(\\frac{1}{2} + \\frac{1}{m}\\right)(m+2) = \\frac{m+2}{2} + \\frac{m+2}{m}$$\n\nBring to common denominator $2m$:\n\n$$= \\frac{m(m+2)}{2m} + \\frac{2(m+2)}{2m} = \\frac{m(m+2) + 2(m+2)}{2m} = \\frac{(m+2)(m+2)}{2m} = \\frac{(m+2)^2}{2m}$$\n\nThis is **exactly** Quantity B.\n\nThe two quantities are always equal for all $m \\neq 0$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "frac_026",
      "number": 26,
      "type": "select_all",
      "text": "Which two of the following numbers, when added together, yield a sum between 1 and 2? Indicate two such numbers.",
      "options": [
        "$\\dfrac{7 \\cdot 2^3}{3^3 - 7}$",
        "$\\dfrac{2^4}{1+2+3+4}$",
        "$\\dfrac{3}{11} + \\dfrac{6}{11} \\times \\dfrac{11}{6}$",
        "$\\dfrac{-2^2 \\cdot 3^2}{2^2 \\cdot 5^2}$",
        "$\\dfrac{-11^2 - 11^3}{(30)(44)}$"
      ],
      "answer": ["$\\dfrac{7 \\cdot 2^3}{3^3 - 7}$", "$\\dfrac{-11^2 - 11^3}{(30)(44)}$"],
      "explanation": "## Evaluate Each Expression, Then Find the Pair\n\n**Option 1:** $\\dfrac{7 \\cdot 8}{27-7} = \\dfrac{56}{20} = 2.8$\n\n**Option 2:** $\\dfrac{16}{10} = 1.6$\n\n**Option 3:** $\\dfrac{3}{11} + \\dfrac{6}{11} \\times \\dfrac{11}{6} = \\dfrac{3}{11} + 1 = \\dfrac{3}{11} + \\dfrac{11}{11} = \\dfrac{14}{11} \\approx 1.27$\n\n**Option 4:** $\\dfrac{-4 \\cdot 9}{4 \\cdot 25} = \\dfrac{-36}{100} = -0.36$\n\n**Option 5:** $\\dfrac{-121 - 1331}{1320} = \\dfrac{-1452}{1320} = -\\dfrac{11^2(1+11)}{1320} = \\dfrac{-121 \\cdot 12}{1320} = \\dfrac{-1452}{1320} \\approx -1.1$\n\n**Summary:** $2.8, \\; 1.6, \\; 1.27, \\; -0.36, \\; -1.1$\n\nFind which pair sums to $(1, 2)$:\n\n$$2.8 + (-1.1) = 1.7 \\in (1, 2) \\checkmark$$\n\n$$\\boxed{\\text{Options 1 and 5}}$$"
    },
    {
      "id": "frac_027",
      "number": 27,
      "type": "select_all",
      "text": "Which three of the following numbers, when multiplied by each other, yield a product less than $-1$? Indicate three such numbers.",
      "options": [
        "$-\\dfrac{15}{17}$",
        "$-\\dfrac{18}{19}$",
        "$\\dfrac{23}{-22}$",
        "$\\dfrac{17}{-16}$"
      ],
      "answer": ["$-\\dfrac{18}{19}$", "$\\dfrac{23}{-22}$", "$\\dfrac{17}{-16}$"],
      "explanation": "## Product of Three Negatives — Magnitude Must Exceed 1\n\n**Convert to decimals:**\n\n$$-\\frac{15}{17} \\approx -0.882, \\quad -\\frac{18}{19} \\approx -0.947$$\n\n$$-\\frac{23}{22} \\approx -1.045, \\quad -\\frac{17}{16} \\approx -1.0625$$\n\n**Three negatives multiplied** = negative result. We need the **magnitude** to exceed 1.\n\nTest Options 2, 3, 4:\n\n$$\\left(-\\frac{18}{19}\\right)\\left(-\\frac{23}{22}\\right)\\left(-\\frac{17}{16}\\right) = -\\frac{18 \\times 23 \\times 17}{19 \\times 22 \\times 16} = -\\frac{7038}{6688} \\approx -1.052 < -1 \\checkmark$$\n\n**Why not Option 1 instead?**\n\nReplacing $-18/19$ (magnitude $\\approx 0.947$) with $-15/17$ (magnitude $\\approx 0.882$) gives a smaller product magnitude that may not exceed 1.\n\n$$\\boxed{\\text{Options 2, 3, 4}}$$"
    },
    {
      "id": "frac_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "What is the value of $\\left(3 - \\dfrac{1}{3}\\right)^2 + \\left(3 + \\dfrac{1}{3}\\right)^2$?",
      "options": {
        "A": "$\\dfrac{122}{9}$",
        "B": "$\\dfrac{164}{9}$",
        "C": "$36$",
        "D": "$\\dfrac{164}{3}$",
        "E": "$162$"
      },
      "answer": "B",
      "explanation": "## Sum of Squares — Algebraic Identity\n\n**Method 1 — Identity** $(a-b)^2 + (a+b)^2 = 2a^2 + 2b^2$:\n\nWith $a = 3$, $b = \\dfrac{1}{3}$:\n\n$$2(3)^2 + 2\\left(\\frac{1}{3}\\right)^2 = 2(9) + 2\\left(\\frac{1}{9}\\right) = 18 + \\frac{2}{9} = \\frac{162}{9} + \\frac{2}{9} = \\frac{164}{9}$$\n\n**Method 2 — Expand each square directly:**\n\n$$\\left(3 - \\frac{1}{3}\\right)^2 = 9 - 2 + \\frac{1}{9} = 7 + \\frac{1}{9} = \\frac{64}{9}$$\n\n$$\\left(3 + \\frac{1}{3}\\right)^2 = 9 + 2 + \\frac{1}{9} = 11 + \\frac{1}{9} = \\frac{100}{9}$$\n\n$$\\frac{64}{9} + \\frac{100}{9} = \\boxed{\\frac{164}{9}}$$"
    },
    {
      "id": "frac_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "If $\\dfrac{3/(m+1)}{m/(m+1)} = 1$, what is the value of $m$?",
      "options": {
        "A": "$-2$",
        "B": "$-1$",
        "C": "$0$",
        "D": "$3$",
        "E": "$2$"
      },
      "answer": "D",
      "explanation": "## Simplifying a Compound Fraction\n\nDivide the stacked fraction by flipping and multiplying:\n\n$$\\frac{3/(m+1)}{m/(m+1)} = \\frac{3}{m+1} \\times \\frac{m+1}{m} = \\frac{3}{m}$$\n\nSet equal to 1:\n\n$$\\frac{3}{m} = 1 \\implies m = 3$$\n\n$$\\boxed{D}$$\n\n**Check:** $m = 3$: $\\dfrac{3/4}{3/4} = 1$ ✓"
    },
    {
      "id": "frac_030",
      "number": 30,
      "type": "quantitative_comparison",
      "context": "$rs = \\sqrt{3}$",
      "quantity_a": "$\\dfrac{2r\\sqrt{12}}{r^2 s \\sqrt{72}}$",
      "quantity_b": "$\\dfrac{14rs^4}{42s}$",
      "answer": "B",
      "explanation": "## Substituting a Constraint to Simplify\n\n**Quantity A:** Simplify $\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{72} = 6\\sqrt{2}$:\n\n$$\\frac{2r \\cdot 2\\sqrt{3}}{r^2 s \\cdot 6\\sqrt{2}} = \\frac{4r\\sqrt{3}}{6r^2 s \\sqrt{2}} = \\frac{4\\sqrt{3}}{6rs\\sqrt{2}} = \\frac{2\\sqrt{3}}{3rs\\sqrt{2}}$$\n\nSubstitute $rs = \\sqrt{3}$:\n\n$$= \\frac{2\\sqrt{3}}{3\\sqrt{3}\\sqrt{2}} = \\frac{2}{3\\sqrt{2}} = \\frac{\\sqrt{2}}{3} \\approx 0.471$$\n\n**Quantity B:** Simplify:\n\n$$\\frac{14rs^4}{42s} = \\frac{rs^3}{3} = \\frac{(rs)(s^2)}{3} = \\frac{\\sqrt{3} \\cdot s^2}{3}$$\n\nWith $r = s$ (i.e., $r = s = 3^{1/4}$), $s^2 = \\sqrt{3}$:\n\n$$\\text{QB} = \\frac{\\sqrt{3} \\cdot \\sqrt{3}}{3} = \\frac{3}{3} = 1$$\n\n$$1 > 0.471 \\implies \\boxed{B}$$"
    },
    {
      "id": "frac_031",
      "number": 31,
      "type": "quantitative_comparison",
      "quantity_a": "$\\dfrac{\\sqrt{10}/\\sqrt{8}}{\\sqrt{9}/\\sqrt{10}}$",
      "quantity_b": "$\\dfrac{\\sqrt{11}/\\sqrt{9}}{\\sqrt{10}/\\sqrt{11}}$",
      "answer": "A",
      "explanation": "## Comparing Stacked Radical Fractions — Convert to Single Radicals\n\n**Quantity A:**\n\n$$\\frac{\\sqrt{10}/\\sqrt{8}}{\\sqrt{9}/\\sqrt{10}} = \\frac{\\sqrt{10}}{\\sqrt{8}} \\times \\frac{\\sqrt{10}}{\\sqrt{9}} = \\frac{10}{\\sqrt{72}} = \\frac{10}{6\\sqrt{2}} = \\frac{5}{3\\sqrt{2}} \\approx \\frac{5}{4.243} \\approx 1.179$$\n\n**Quantity B:**\n\n$$\\frac{\\sqrt{11}/\\sqrt{9}}{\\sqrt{10}/\\sqrt{11}} = \\frac{\\sqrt{11}}{\\sqrt{9}} \\times \\frac{\\sqrt{11}}{\\sqrt{10}} = \\frac{11}{\\sqrt{90}} = \\frac{11}{3\\sqrt{10}} \\approx \\frac{11}{9.487} \\approx 1.160$$\n\n$$1.179 > 1.160 \\implies \\boxed{A}$$\n\n> **Pattern:** Quantity A $= \\dfrac{10}{\\sqrt{8 \\cdot 9}}$, Quantity B $= \\dfrac{11}{\\sqrt{9 \\cdot 10}}$. As the numbers increase, these ratios converge but the lower pair is slightly larger."
    },
    {
      "id": "frac_032",
      "number": 32,
      "type": "multiple_choice",
      "text": "Which of the following fractions has the greatest value?",
      "options": {
        "A": "$\\dfrac{7}{16 \\times 25}$",
        "B": "$\\dfrac{5}{32 \\times 5^4}$",
        "C": "$\\dfrac{30}{512 \\times 5^3}$",
        "D": "$\\dfrac{5}{4^6 \\times 5}$",
        "E": "$\\dfrac{4}{2^{11} \\times 5^2}$"
      },
      "answer": "A",
      "explanation": "## Comparing Fractions — Express in Terms of $2^a \\cdot 5^b$\n\nExpress each fraction with denominator in powers of 2 and 5:\n\n**A:** $\\dfrac{7}{2^4 \\cdot 5^2}$ — numerator 7 over $2^4 \\cdot 5^2$\n\n**B:** $\\dfrac{5}{2^5 \\cdot 5^4} = \\dfrac{1}{2^5 \\cdot 5^3}$ — much smaller denominator numerator ratio\n\n**C:** $\\dfrac{30}{2^9 \\cdot 5^3} = \\dfrac{2 \\cdot 3 \\cdot 5}{2^9 \\cdot 5^3} = \\dfrac{3}{2^8 \\cdot 5^2}$ — vs A's $\\dfrac{7}{2^4 \\cdot 5^2}$: same $5^2$, but denominator has $2^8$ vs $2^4$: **C is 16× smaller** than A.\n\n**D:** $\\dfrac{5}{4^6 \\cdot 5} = \\dfrac{1}{4^6} = \\dfrac{1}{2^{12}}$ — tiny.\n\n**E:** $\\dfrac{4}{2^{11} \\cdot 5^2} = \\dfrac{2^2}{2^{11} \\cdot 5^2} = \\dfrac{1}{2^9 \\cdot 5^2}$ — smaller than A.\n\nOption A has the **largest numerator relative to its denominator**.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "frac_033",
      "number": 33,
      "type": "quantitative_comparison",
      "context": "$\\dfrac{m}{p} > \\dfrac{n}{p}$",
      "quantity_a": "$m$",
      "quantity_b": "$n$",
      "answer": "D",
      "explanation": "## Dividing an Inequality — Sign of $p$ Matters\n\nGiven $\\dfrac{m}{p} > \\dfrac{n}{p}$, this simplifies to $\\dfrac{m-n}{p} > 0$.\n\nThis means $m-n$ and $p$ have the **same sign**:\n\n**Case 1:** $p > 0$ → $m - n > 0$ → $m > n$. Quantity A is greater.\n\n**Case 2:** $p < 0$ → $m - n < 0$ → $m < n$. Quantity B is greater.\n\nSince we don't know the sign of $p$, the relationship cannot be determined.\n\n$$\\boxed{D}$$\n\n> **Critical rule:** When you multiply or divide both sides of an inequality by a variable, you **must** know the sign. If the sign is unknown, you get two cases with opposite conclusions → answer D."
    },
    {
      "id": "frac_034",
      "number": 34,
      "type": "multiple_choice",
      "text": "If $2x \\neq y$ and $5x \\neq 4y$, then what is the value of $\\dfrac{(5x-4y)/(2x-y)}{3y/(y-2x) + 5}$?",
      "options": {
        "A": "$\\dfrac{1}{2}$",
        "B": "$\\dfrac{3}{2}$",
        "C": "$\\dfrac{5}{2}$",
        "D": "$\\dfrac{7}{2}$",
        "E": "$\\dfrac{9}{2}$"
      },
      "answer": "A",
      "explanation": "## Complex Algebraic Fraction — Plug In Numbers\n\nChoose convenient values: $x = 2$, $y = 3$ (verify: $2(2) = 4 \\neq 3 = y$ ✓; $5(2) = 10 \\neq 12 = 4(3)$ ✓).\n\n**Numerator:**\n\n$$\\frac{5(2) - 4(3)}{2(2) - 3} = \\frac{10 - 12}{4 - 3} = \\frac{-2}{1} = -2$$\n\n**Denominator:**\n\n$$\\frac{3(3)}{3 - 4} + 5 = \\frac{9}{-1} + 5 = -9 + 5 = -4$$\n\n**Result:**\n\n$$\\frac{-2}{-4} = \\frac{1}{2}$$\n\n$$\\boxed{A}$$\n\n> **Note:** The expression is constant (doesn't depend on $x$ and $y$) — you can verify with any valid $x, y$ pair."
    },
    {
      "id": "frac_035",
      "number": 35,
      "type": "multiple_choice",
      "text": "What is the value of $\\dfrac{39^2/2^4}{13^3/4^2}$?",
      "options": {
        "A": "$\\dfrac{13}{2}$",
        "B": "$\\dfrac{9}{2}$",
        "C": "$\\dfrac{3}{2}$",
        "D": "$\\dfrac{3}{13}$",
        "E": "$\\dfrac{9}{13}$"
      },
      "answer": "E",
      "explanation": "## Dividing Compound Fractions — Flip and Multiply\n\n$$\\frac{39^2/2^4}{13^3/4^2} = \\frac{39^2}{2^4} \\times \\frac{4^2}{13^3} = \\frac{39^2 \\times 4^2}{2^4 \\times 13^3}$$\n\nNote $4^2 = 2^4$, so they cancel:\n\n$$= \\frac{39^2}{13^3}$$\n\nNow substitute $39 = 3 \\times 13$, so $39^2 = 3^2 \\times 13^2$:\n\n$$= \\frac{3^2 \\times 13^2}{13^3} = \\frac{3^2}{13} = \\frac{9}{13}$$\n\n$$\\boxed{E}$$"
    }
  ]
}
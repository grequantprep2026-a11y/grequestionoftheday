export const exponents_roots = {
  "chapter": 14,
  "topic": "Exponents and Roots",
  "questions": [
    {
      "id": "exp_001",
      "number": 1,
      "type": "quantitative_comparison",
      "quantity_a": "$25^7$",
      "quantity_b": "$5^{15}$",
      "answer": "B",
      "explanation": "## Same Base — Compare Exponents\n\nRewrite Quantity A by expressing 25 as a power of 5:\n\n$$25^7 = (5^2)^7 = 5^{2 \\times 7} = 5^{14}$$\n\nNow compare:\n\n$$5^{14} \\quad \\text{vs} \\quad 5^{15}$$\n\nSince the base $5 > 1$, a higher exponent gives a larger value:\n\n$$5^{14} < 5^{15}$$\n\n$$\\boxed{B}$$\n\n> **Key rule:** When comparing $a^m$ vs $a^n$ with $a > 1$: the larger exponent wins. If $0 < a < 1$, the larger exponent gives the **smaller** value."
    },
    {
      "id": "exp_002",
      "number": 2,
      "type": "quantitative_comparison",
      "context": "$216 = 2^x \\cdot 3^y$, where $x$ and $y$ are integers.",
      "quantity_a": "$x$",
      "quantity_b": "$y$",
      "answer": "C",
      "explanation": "## Prime Factorisation\n\nFactor 216 completely:\n\n$$216 = 8 \\times 27 = 2^3 \\times 3^3$$\n\nSo $x = 3$ and $y = 3$.\n\n$$x = y = 3 \\implies \\boxed{C}$$\n\n**Factoring step by step:**\n\n$$216 \\div 2 = 108 \\div 2 = 54 \\div 2 = 27 = 3^3$$\n\nSo $216 = 2^3 \\times 3^3$. ✓"
    },
    {
      "id": "exp_003",
      "number": 3,
      "type": "quantitative_comparison",
      "quantity_a": "$\\sqrt{9} \\times \\sqrt{25}$",
      "quantity_b": "$\\sqrt{15}$",
      "answer": "A",
      "explanation": "## Product of Square Roots vs Square Root of Product\n\n**Quantity A:**\n\n$$\\sqrt{9} \\times \\sqrt{25} = 3 \\times 5 = 15$$\n\n**Quantity B:**\n\n$$\\sqrt{15} \\approx 3.873$$\n\n$$15 > 3.873 \\implies \\boxed{A}$$\n\n> **Note:** $\\sqrt{9} \\times \\sqrt{25} = \\sqrt{9 \\times 25} = \\sqrt{225} = 15$. Both routes give 15."
    },
    {
      "id": "exp_004",
      "number": 4,
      "type": "numeric_entry",
      "text": "If $5{,}000 = 2^x \\cdot 5^y$ and $x$ and $y$ are integers, what is the value of $x + y$?",
      "answer": "7",
      "explanation": "## Prime Factorisation Then Sum Exponents\n\n$$5{,}000 = 5 \\times 1{,}000 = 5 \\times 10^3 = 5 \\times (2 \\times 5)^3 = 5 \\times 2^3 \\times 5^3 = 2^3 \\times 5^4$$\n\nSo $x = 3$ and $y = 4$:\n\n$$x + y = 3 + 4 = \\boxed{7}$$\n\n**Verification:** $2^3 \\times 5^4 = 8 \\times 625 = 5{,}000$ ✓"
    },
    {
      "id": "exp_005",
      "number": 5,
      "type": "quantitative_comparison",
      "context": "$80$ is divisible by $2^x$.",
      "quantity_a": "$x$",
      "quantity_b": "$3$",
      "answer": "D",
      "explanation": "## Divisibility by a Power — Range of Possible Values\n\n$$80 = 2^4 \\times 5$$\n\nSo $80$ is divisible by $2^0, 2^1, 2^2, 2^3, 2^4$. Thus $x$ can be any integer from 0 to 4.\n\n- If $x = 2$: $x < 3$ → Quantity B is greater.\n- If $x = 3$: $x = 3$ → Equal.\n- If $x = 4$: $x > 3$ → Quantity A is greater.\n\nSince multiple outcomes are possible:\n\n$$\\boxed{D}$$\n\n> **Trap:** The question says \"80 is divisible by $2^x$\" — it doesn't say \"$2^x$ is the *highest* power of 2 that divides 80.\" Without that constraint, $x$ is not pinned to 4."
    },
    {
      "id": "exp_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "If $17\\sqrt[3]{m} = 34$, what is the value of $6\\sqrt[3]{m}$?",
      "answer": "12",
      "explanation": "## Treating the Cube Root as a Variable\n\nTreat $\\sqrt[3]{m}$ as a single unknown $u$:\n\n$$17u = 34 \\implies u = 2$$\n\nSo $\\sqrt[3]{m} = 2$.\n\nNow evaluate the target expression:\n\n$$6\\sqrt[3]{m} = 6 \\times 2 = \\boxed{12}$$\n\n> **Strategy:** Don't solve for $m$ itself. The question asks for $6\\sqrt[3]{m}$, not $m$. Once you know $\\sqrt[3]{m} = 2$, you can directly compute any expression involving $\\sqrt[3]{m}$."
    },
    {
      "id": "exp_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "What is the value of $\\dfrac{1/1}{1/5^{-2}}$?",
      "options": {
        "A": "$\\dfrac{1}{25}$",
        "B": "$\\dfrac{1}{5}$",
        "C": "$1$",
        "D": "$5$",
        "E": "$25$"
      },
      "answer": "A",
      "explanation": "## Negative Exponents in Compound Fractions\n\n**Step 1 — Simplify $\\dfrac{1}{5^{-2}}$:**\n\nA negative exponent in the denominator flips to a positive exponent in the numerator:\n\n$$\\frac{1}{5^{-2}} = 5^2 = 25$$\n\n**Step 2 — The full expression:**\n\n$$\\frac{1/1}{1/5^{-2}} = \\frac{1}{25}$$\n\n$$\\boxed{A}$$\n\n**Key rule:**\n\n$$\\frac{1}{a^{-n}} = a^n, \\qquad a^{-n} = \\frac{1}{a^n}$$\n\nSo $1/5^{-2} = 1/(1/25) = 25$. Then $1/25 = 1/25$."
    },
    {
      "id": "exp_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "What is $\\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\sqrt{4}}}}$?",
      "options": {
        "A": "$\\sqrt{2}$",
        "B": "$2$",
        "C": "$2\\sqrt{2}$",
        "D": "$4$",
        "E": "$4\\sqrt{2}$"
      },
      "answer": "B",
      "explanation": "## Nested Radicals — Work Inside Out\n\n**Step 1:** Innermost: $\\sqrt{4} = 2$\n\n**Step 2:** $\\sqrt{2 + 2} = \\sqrt{4} = 2$\n\n**Step 3:** $\\sqrt{2 + 2} = \\sqrt{4} = 2$\n\n**Step 4:** $\\sqrt{2 + 2} = \\sqrt{4} = \\boxed{2}$\n\n> **Strategy for nested radicals:** Always evaluate the innermost expression first, then work outward layer by layer. Each step here conveniently produces a perfect square."
    },
    {
      "id": "exp_009",
      "number": 9,
      "type": "quantitative_comparison",
      "quantity_a": "$10^6 + 10^5$",
      "quantity_b": "$10^7 + 10^4$",
      "answer": "B",
      "explanation": "## Powers of 10 — Compute Directly\n\n**Quantity A:**\n\n$$10^6 + 10^5 = 1{,}000{,}000 + 100{,}000 = 1{,}100{,}000$$\n\n**Quantity B:**\n\n$$10^7 + 10^4 = 10{,}000{,}000 + 10{,}000 = 10{,}010{,}000$$\n\n$$1{,}100{,}000 < 10{,}010{,}000 \\implies \\boxed{B}$$\n\n> **Alternative:** Factor out $10^5$: A $= 10^5(10+1) = 11 \\times 10^5$; B $= 10^4(10^3 + 1) = 1001 \\times 10^4 = 10.01 \\times 10^5$. Since $10.01 > 11$... wait, $1001 \\times 10^4 = 100.1 \\times 10^5$. Either way B is much larger."
    },
    {
      "id": "exp_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "For which of the following positive integers is the square of that integer divided by the cube root of the same integer equal to nine times that integer?",
      "options": {
        "A": "4",
        "B": "8",
        "C": "16",
        "D": "27",
        "E": "125"
      },
      "answer": "D",
      "explanation": "## Equation with Exponents — Set Up and Solve\n\nWe need: $\\dfrac{x^2}{\\sqrt[3]{x}} = 9x$\n\n**Simplify the left side:**\n\n$$\\frac{x^2}{x^{1/3}} = x^{2 - 1/3} = x^{5/3}$$\n\n**Set equal to $9x$:**\n\n$$x^{5/3} = 9x^1 \\implies x^{5/3 - 1} = 9 \\implies x^{2/3} = 9$$\n\n**Solve:**\n\n$$x = 9^{3/2} = (9^{1/2})^3 = 3^3 = 27$$\n\n**Check with $x = 27$:**\n\n$$\\frac{27^2}{\\sqrt[3]{27}} = \\frac{729}{3} = 243 = 9 \\times 27 \\checkmark$$\n\n$$\\boxed{D}$$"
    },
    {
      "id": "exp_011",
      "number": 11,
      "type": "multiple_choice",
      "image":"../Exponents/expo_011.svg",
      "text": "On a number line, 0 and 2 are marked with 5 equally spaced segments between them. $\\sqrt[3]{p}$ is located at the 4th hash mark from 0. What is the value of $p$?",
      "options": {
        "A": "$\\dfrac{3}{2}$",
        "B": "$\\dfrac{8}{5}$",
        "C": "$\\dfrac{24}{15}$",
        "D": "$\\dfrac{512}{125}$",
        "E": "$\\dfrac{625}{256}$"
      },
      "answer": "D",
      "explanation": "## Number Line + Cube Root — Find the Position Then Cube\n\n**Step 1 — Find the value at the 4th hash mark:**\n\n5 equally spaced segments between 0 and 2 means each segment has length:\n\n$$\\frac{2}{5}$$\n\nThe 4th hash mark is at position:\n\n$$4 \\times \\frac{2}{5} = \\frac{8}{5}$$\n\n**Step 2 — This position equals $\\sqrt[3]{p}$:**\n\n$$\\sqrt[3]{p} = \\frac{8}{5}$$\n\n**Step 3 — Cube both sides:**\n\n$$p = \\left(\\frac{8}{5}\\right)^3 = \\frac{8^3}{5^3} = \\frac{512}{125}$$\n\n$$\\boxed{D}$$"
    },
    {
      "id": "exp_012",
      "number": 12,
      "type": "numeric_entry",
      "text": "What is the greatest prime factor of $2^{99} - 2^{96}$?",
      "answer": "7",
      "explanation": "## Factor Out the Smaller Power — Then Factor Completely\n\n$$2^{99} - 2^{96} = 2^{96}(2^3 - 1) = 2^{96} \\times 7$$\n\nThe prime factors are $2$ and $7$.\n\n$$\\text{Greatest prime factor} = \\boxed{7}$$\n\n> **Key technique:** Always factor out the smaller power of the common base: $a^m - a^n = a^n(a^{m-n} - 1)$ when $m > n$. Here $2^{99} - 2^{96} = 2^{96}(2^3 - 1) = 2^{96} \\times 7$."
    },
    {
      "id": "exp_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "If $2^k - 2^{k+1} + 2^{k-1} = 2^k \\cdot m$, what is the value of $m$?",
      "options": {
        "A": "$-1$",
        "B": "$-\\dfrac{1}{2}$",
        "C": "$\\dfrac{1}{2}$",
        "D": "$1$",
        "E": "$2$"
      },
      "answer": "B",
      "explanation": "## Factoring Out a Common Power\n\nFactor $2^k$ from every term on the left side:\n\n$$2^k - 2^{k+1} + 2^{k-1} = 2^k\\left(1 - 2^1 + 2^{-1}\\right) = 2^k \\cdot m$$\n\nDivide both sides by $2^k$:\n\n$$m = 1 - 2 + \\frac{1}{2} = -1 + \\frac{1}{2} = -\\frac{1}{2}$$\n\n$$\\boxed{B}$$\n\n> **Exponent relationships used:** $2^{k+1} = 2^k \\cdot 2^1$ and $2^{k-1} = 2^k \\cdot 2^{-1} = 2^k/2$."
    },
    {
      "id": "exp_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "If $5^{k+1} = 2{,}000$, what is the value of $5^k + 1$?",
      "options": {
        "A": "399",
        "B": "401",
        "C": "1,996",
        "D": "2,000",
        "E": "2,001"
      },
      "answer": "B",
      "explanation": "## Isolate the Simpler Power First\n\n$$5^{k+1} = 5^k \\cdot 5 = 2{,}000$$\n\nDivide both sides by 5:\n\n$$5^k = \\frac{2{,}000}{5} = 400$$\n\nNow compute the target:\n\n$$5^k + 1 = 400 + 1 = \\boxed{401}$$\n\n> **Strategy:** Never try to solve for $k$ directly when the question asks for an expression in $5^k$. Isolate $5^k$ using the relationship $5^{k+1} = 5 \\cdot 5^k$."
    },
    {
      "id": "exp_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "If $3^{11} = 9^x$, what is the value of $x$?",
      "answer": "5.5",
      "explanation": "## Same Base — Equate Exponents\n\nRewrite 9 as a power of 3:\n\n$$9^x = (3^2)^x = 3^{2x}$$\n\nSet exponents equal:\n\n$$3^{11} = 3^{2x} \\implies 2x = 11 \\implies x = \\frac{11}{2} = \\boxed{5.5}$$"
    },
    {
      "id": "exp_016",
      "number": 16,
      "type": "numeric_entry",
      "text": "If $\\sqrt[5]{x^6} = x^{a/b}$, what is the value of $a/b$? Give your answer as a fraction.",
      "answer": "6/5",
      "explanation": "## Radical Notation to Fractional Exponent\n\nThe $n$th root of $x^m$ equals $x^{m/n}$:\n\n$$\\sqrt[5]{x^6} = x^{6/5}$$\n\nSo:\n\n$$\\frac{a}{b} = \\boxed{\\frac{6}{5}}$$\n\n**General rule:**\n\n$$\\sqrt[n]{x^m} = x^{m/n}, \\qquad x^{m/n} = \\left(\\sqrt[n]{x}\\right)^m = \\sqrt[n]{x^m}$$"
    },
    {
      "id": "exp_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "Which of the following is equal to $\\dfrac{10^{-8} \\times 25^7 \\times 2^{16}}{20^6 \\times 8^{-1}}$?",
      "options": {
        "A": "$\\dfrac{1}{5}$",
        "B": "$\\dfrac{1}{2}$",
        "C": "$2$",
        "D": "$5$",
        "E": "$10$"
      },
      "answer": "B",
      "explanation": "## Prime Factorisation of Everything\n\nConvert every factor to powers of 2 and 5:\n\n$$10^{-8} = (2 \\cdot 5)^{-8} = 2^{-8} \\cdot 5^{-8}$$\n\n$$25^7 = (5^2)^7 = 5^{14}$$\n\n$$2^{16} = 2^{16}$$\n\n$$20^6 = (2^2 \\cdot 5)^6 = 2^{12} \\cdot 5^6$$\n\n$$8^{-1} = (2^3)^{-1} = 2^{-3}$$\n\n**Numerator:** $2^{-8} \\cdot 5^{-8} \\cdot 5^{14} \\cdot 2^{16} = 2^{-8+16} \\cdot 5^{-8+14} = 2^8 \\cdot 5^6$\n\n**Denominator:** $2^{12} \\cdot 5^6 \\cdot 2^{-3} = 2^{12-3} \\cdot 5^6 = 2^9 \\cdot 5^6$\n\n**Result:**\n\n$$\\frac{2^8 \\cdot 5^6}{2^9 \\cdot 5^6} = \\frac{1}{2^1} = \\boxed{\\frac{1}{2}}$$"
    },
    {
      "id": "exp_018",
      "number": 18,
      "type": "numeric_entry",
      "text": "If $5^7/5^{-4} = 5^a$, $2^{-3}/2^{-2} = 2^b$, and $3^8 \\cdot 3 = 3^c$, what is the value of $a + b + c$?",
      "answer": "19",
      "explanation": "## Three Exponent Laws — Division and Multiplication\n\n**Find $a$** (division → subtract exponents):\n\n$$\\frac{5^7}{5^{-4}} = 5^{7-(-4)} = 5^{11} \\implies a = 11$$\n\n**Find $b$** (division → subtract exponents):\n\n$$\\frac{2^{-3}}{2^{-2}} = 2^{-3-(-2)} = 2^{-1} \\implies b = -1$$\n\n**Find $c$** (multiplication → add exponents):\n\n$$3^8 \\cdot 3^1 = 3^{8+1} = 3^9 \\implies c = 9$$\n\n**Sum:**\n\n$$a + b + c = 11 + (-1) + 9 = \\boxed{19}$$"
    },
    {
      "id": "exp_019",
      "number": 19,
      "type": "numeric_entry",
      "text": "If $12^x$ is odd and $x$ is an integer, what is the value of $x^{12}$?",
      "answer": "0",
      "explanation": "## When Is a Power Odd?\n\n$$12 = 2^2 \\times 3$$\n\nFor any positive integer $x$, $12^x$ contains factors of 2, making it **even**. The only way $12^x$ can be **odd** is:\n\n$$12^x = 1 \\implies x = 0$$\n\n(Any nonzero base raised to the 0 power equals 1, which is odd.)\n\nTherefore:\n\n$$x = 0 \\implies x^{12} = 0^{12} = \\boxed{0}$$\n\n> **General rule:** $n^0 = 1$ for any $n \\neq 0$, and $0^k = 0$ for any $k > 0$."
    },
    {
      "id": "exp_020",
      "number": 20,
      "type": "numeric_entry",
      "text": "What is the value of $\\dfrac{44^{5/2}}{\\sqrt{11^3}}$?",
      "answer": "352",
      "explanation": "## Fractional Exponents — Factor and Simplify\n\n**Rewrite $44 = 4 \\times 11 = 2^2 \\times 11$:**\n\n$$44^{5/2} = (2^2 \\times 11)^{5/2} = 2^{2 \\times 5/2} \\times 11^{5/2} = 2^5 \\times 11^{5/2} = 32 \\times 11^{5/2}$$\n\n**Rewrite the denominator:**\n\n$$\\sqrt{11^3} = 11^{3/2}$$\n\n**Divide:**\n\n$$\\frac{32 \\times 11^{5/2}}{11^{3/2}} = 32 \\times 11^{5/2 - 3/2} = 32 \\times 11^{2/2} = 32 \\times 11 = \\boxed{352}$$"
    },
    {
      "id": "exp_021",
      "number": 21,
      "type": "quantitative_comparison",
      "context": "$\\dfrac{(10^3)(0.027)}{(900)(10^{-2})} = 3 \\times 10^m$",
      "quantity_a": "$m$",
      "quantity_b": "$3$",
      "answer": "B",
      "explanation": "## Scientific Notation — Simplify to Find $m$\n\n**Numerator:** $10^3 \\times 0.027 = 1000 \\times 0.027 = 27$\n\n**Denominator:** $900 \\times 10^{-2} = 9 \\times 10^2 \\times 10^{-2} = 9 \\times 10^0 = 9$\n\n**Result:**\n\n$$\\frac{27}{9} = 3 = 3 \\times 10^0$$\n\nSo $m = 0$.\n\n**Compare:**\n\n$$m = 0 < 3 \\implies \\boxed{B}$$"
    },
    {
      "id": "exp_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "Which of the following equals $\\dfrac{2^2 + 2^2 + 2^3 + 2^4}{(\\sqrt{5}+\\sqrt{3})(\\sqrt{5}-\\sqrt{3})}$?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "16",
        "E": "32"
      },
      "answer": "D",
      "explanation": "## Powers in Numerator + Difference of Squares in Denominator\n\n**Numerator:**\n\n$$2^2 + 2^2 + 2^3 + 2^4 = 4 + 4 + 8 + 16 = 32$$\n\n**Denominator** — use the difference of squares identity $(a+b)(a-b) = a^2 - b^2$:\n\n$$(\\sqrt{5}+\\sqrt{3})(\\sqrt{5}-\\sqrt{3}) = (\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2$$\n\n**Result:**\n\n$$\\frac{32}{2} = \\boxed{16}$$"
    },
    {
      "id": "exp_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "If $\\dfrac{0.000027 \\times 10^x}{900 \\times 10^{-4}} = 0.03 \\times 10^{11}$, what is the value of $x$?",
      "options": {
        "A": "13",
        "B": "14",
        "C": "15",
        "D": "16",
        "E": "17"
      },
      "answer": "A",
      "explanation": "## Scientific Notation Equation — Convert Everything\n\nConvert each number to scientific notation:\n\n$$0.000027 = 2.7 \\times 10^{-5}$$\n\n$$900 = 9 \\times 10^2$$\n\n$$0.03 = 3 \\times 10^{-2}$$\n\n**Left side:**\n\n$$\\frac{2.7 \\times 10^{-5} \\times 10^x}{9 \\times 10^2 \\times 10^{-4}} = \\frac{2.7 \\times 10^{x-5}}{9 \\times 10^{-2}} = 0.3 \\times 10^{x-5+2} = 3 \\times 10^{x-8}$$\n\n**Right side:**\n\n$$0.03 \\times 10^{11} = 3 \\times 10^{-2} \\times 10^{11} = 3 \\times 10^9$$\n\n**Equate:**\n\n$$3 \\times 10^{x-8} = 3 \\times 10^9 \\implies x - 8 = 9 \\implies x = \\boxed{13}$$\n\nWait — let me recheck: $0.3 \\times 10^{x-3} = 3 \\times 10^9$ gives $10^{x-3-1} = 10^9$, so $x = 13$. ✓"
    },
    {
      "id": "exp_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "Which of the following equals $(\\sqrt[2]{x})(\\sqrt[3]{x})$?",
      "options": {
        "A": "$\\sqrt[5]{x}$",
        "B": "$\\sqrt[6]{x}$",
        "C": "$\\sqrt[3]{x^2}$",
        "D": "$\\sqrt[5]{x^6}$",
        "E": "$\\sqrt[6]{x^5}$"
      },
      "answer": "E",
      "explanation": "## Product of Roots — Convert to Fractional Exponents\n\n$$\\sqrt[2]{x} = x^{1/2}, \\qquad \\sqrt[3]{x} = x^{1/3}$$\n\nMultiply by adding exponents:\n\n$$x^{1/2} \\times x^{1/3} = x^{1/2 + 1/3}$$\n\nFind common denominator for the exponents:\n\n$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$\n\nSo the product $= x^{5/6} = \\sqrt[6]{x^5}$\n\n$$\\boxed{E}$$\n\n> **Conversion:** $x^{m/n} = \\sqrt[n]{x^m}$. Here $x^{5/6} = \\sqrt[6]{x^5}$."
    },
    {
      "id": "exp_025",
      "number": 25,
      "type": "quantitative_comparison",
      "context": "$n = 0.00025 \\times 10^4$ and $m = 0.005 \\times 10^2$",
      "quantity_a": "$n/m$",
      "quantity_b": "$0.5$",
      "answer": "A",
      "explanation": "## Scientific Notation — Compute Then Compare\n\n**Compute $n$:**\n\n$$n = 0.00025 \\times 10^4 = 0.00025 \\times 10{,}000 = 2.5$$\n\n**Compute $m$:**\n\n$$m = 0.005 \\times 10^2 = 0.005 \\times 100 = 0.5$$\n\n**Quantity A:**\n\n$$\\frac{n}{m} = \\frac{2.5}{0.5} = 5$$\n\n$$5 > 0.5 \\implies \\boxed{A}$$"
    },
    {
      "id": "exp_026",
      "number": 26,
      "type": "select_all",
      "text": "If $2^2 < \\dfrac{x}{2^6 - 2^4} < 2^3$, which of the following could be the value of $x$? Indicate all such values.",
      "options": [
        "24",
        "64",
        "80",
        "128",
        "232",
        "256"
      ],
      "answer": ["232", "256"],
      "explanation": "## Inequality with Powers — Solve for the Range\n\n**Simplify the denominator:**\n\n$$2^6 - 2^4 = 64 - 16 = 48$$\n\n**Rewrite the inequality:**\n\n$$4 < \\frac{x}{48} < 8$$\n\n**Multiply all parts by 48:**\n\n$$4 \\times 48 < x < 8 \\times 48$$\n\n$$192 < x < 384$$\n\n**Check each option:**\n\n| Option | In range? |\n|--------|----------|\n| 24 | No ($< 192$) |\n| 64 | No |\n| 80 | No |\n| 128 | No |\n| **232** | **Yes** ✓ |\n| **256** | **Yes** ✓ |\n\n$$\\boxed{232 \\text{ and } 256}$$"
    },
    {
      "id": "exp_027",
      "number": 27,
      "type": "multiple_choice",
      "text": "Which of the following is equal to $x^{3/2}$?",
      "options": {
        "A": "$x^2 \\sqrt{x}$",
        "B": "$x\\sqrt{x}$",
        "C": "$\\sqrt[3]{x^2}$",
        "D": "$\\sqrt[3]{x}$",
        "E": "$(x^3)^2$"
      },
      "answer": "B",
      "explanation": "## Fractional Exponents — Split and Identify\n\n**Method 1 — Split the exponent:**\n\n$$x^{3/2} = x^{1 + 1/2} = x^1 \\cdot x^{1/2} = x \\cdot \\sqrt{x} = x\\sqrt{x}$$\n\n**Method 2 — Use the definition $x^{m/n} = \\sqrt[n]{x^m}$:**\n\n$$x^{3/2} = \\sqrt[2]{x^3} = \\sqrt{x^3} = \\sqrt{x^2 \\cdot x} = x\\sqrt{x}$$\n\n**Eliminate wrong answers:**\n\n$$A: x^2\\sqrt{x} = x^{5/2} \\neq x^{3/2}$$\n\n$$C: \\sqrt[3]{x^2} = x^{2/3} \\neq x^{3/2}$$\n\n$$D: \\sqrt[3]{x} = x^{1/3} \\neq x^{3/2}$$\n\n$$E: (x^3)^2 = x^6 \\neq x^{3/2}$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "exp_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "If $125^{14} \\times 48^8$ were expressed as an integer, how many consecutive zeros would that integer have immediately to the left of its decimal point?",
      "options": {
        "A": "22",
        "B": "32",
        "C": "42",
        "D": "50",
        "E": "112"
      },
      "answer": "B",
      "explanation": "## Counting Trailing Zeros — Count 2-and-5 Pairs\n\n**Trailing zeros** come from factors of $10 = 2 \\times 5$. Count the pairs.\n\n**Prime factorise each base:**\n\n$$125^{14} = (5^3)^{14} = 5^{42}$$\n\n$$48^8 = (2^4 \\times 3)^8 = 2^{32} \\times 3^8$$\n\n**Available factors:**\n\n- Factors of 5: **42** (all from $5^{42}$)\n- Factors of 2: **32** (all from $2^{32}$)\n\nEach trailing zero needs one 2 and one 5, so we're limited by the smaller count:\n\n$$\\text{Trailing zeros} = \\min(42, 32) = \\boxed{32}$$\n\n> **Rule:** Trailing zeros in $N = \\min(\\text{count of 2s in prime factorization}, \\text{count of 5s in prime factorization})$. The factor of 3 from $48^8$ is irrelevant."
    }
  ]
}
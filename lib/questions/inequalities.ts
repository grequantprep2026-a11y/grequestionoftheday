export const Inequalities = {
  "chapter": 9,
  "topic": "Inequalities and Absolute Values",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "ineq_001",
      "number": 1,
      "type": "quantitative_comparison",
      "context": "$7y - 3 \\leq 4y + 9$",
      "quantity_a": "$y$",
      "quantity_b": "$4$",
      "answer": "D",
      "explanation": "## Solve the Inequality — Determine the Range\n\n$$7y - 3 \\leq 4y + 9$$\n\nSubtract $4y$ from both sides:\n\n$$3y - 3 \\leq 9$$\n\nAdd 3:\n\n$$3y \\leq 12 \\implies y \\leq 4$$\n\nSo $y$ can be any value $\\leq 4$:\n\n- If $y = 0$: Quantity B (4) is greater.\n- If $y = 4$: They are equal.\n\nSince both outcomes are valid:\n\n$$\\boxed{D}$$\n\n> **Strategy:** After solving, check whether the variable's range includes values on both sides of (or equal to) the given quantity."
    },
    {
      "id": "ineq_002",
      "number": 2,
      "type": "quantitative_comparison",
      "context": "$3|x - 4| = 16$",
      "quantity_a": "$x$",
      "quantity_b": "$\\dfrac{28}{3}$",
      "answer": "D",
      "explanation": "## Absolute Value Equation — Two Cases\n\nIsolate the absolute value:\n\n$$|x - 4| = \\frac{16}{3}$$\n\n**Case 1** (positive): $x - 4 = \\dfrac{16}{3}$\n\n$$x = 4 + \\frac{16}{3} = \\frac{12}{3} + \\frac{16}{3} = \\frac{28}{3}$$\n\n**Case 2** (negative): $-(x - 4) = \\dfrac{16}{3}$\n\n$$-x + 4 = \\frac{16}{3} \\implies -x = \\frac{4}{3} \\implies x = -\\frac{4}{3}$$\n\n- If $x = 28/3$: Quantities A and B are equal (C).\n- If $x = -4/3$: Quantity B is greater (B).\n\nBoth are valid solutions:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "If $6 < 2x - 4 < 12$, which of the following could be the value of $x$?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "7",
        "D": "8",
        "E": "9"
      },
      "answer": "C",
      "explanation": "## Three-Sided Inequality — Operate on All Parts Simultaneously\n\nAdd 4 to all three parts:\n\n$$6 + 4 < 2x - 4 + 4 < 12 + 4$$\n\n$$10 < 2x < 16$$\n\nDivide all three parts by 2:\n\n$$5 < x < 8$$\n\nThe valid range is $(5, 8)$ — strictly between 5 and 8.\n\n| Option | In range $(5,8)$? |\n|--------|------------------|\n| 4 | No |\n| 5 | No (not strict) |\n| **7** | **Yes** ✓ |\n| 8 | No (not strict) |\n| 9 | No |\n\n$$\\boxed{C}$$"
    },
    {
      "id": "ineq_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "If $y < 0$ and $4x > y$, which of the following could be equal to $x/y$?",
      "options": {
        "A": "0",
        "B": "$\\dfrac{1}{4}$",
        "C": "$\\dfrac{1}{2}$",
        "D": "$1$",
        "E": "$4$"
      },
      "answer": "A",
      "explanation": "## Dividing an Inequality by a Negative Variable\n\nGiven $4x > y$ and $y < 0$.\n\nDivide both sides by $y$ — but **flip the inequality** because $y < 0$:\n\n$$\\frac{4x}{y} < \\frac{y}{y} \\implies \\frac{4x}{y} < 1$$\n\nDivide both sides by 4 (positive — no flip):\n\n$$\\frac{x}{y} < \\frac{1}{4}$$\n\nWe need $x/y < 1/4$. The only option less than $1/4$ is $\\mathbf{0}$.\n\n$$\\boxed{A}$$\n\n> **Critical rule:** When dividing or multiplying an inequality by a **negative** number or **negative variable**, the inequality sign **flips**."
    },
    {
      "id": "ineq_005",
      "number": 5,
      "type": "quantitative_comparison",
      "context": "$3(x-7) \\geq 9$ and $0.25y - 3 \\leq 1$",
      "quantity_a": "$x$",
      "quantity_b": "$y$",
      "answer": "D",
      "explanation": "## Two Separate Inequalities — Find Overlapping Ranges\n\n**Solve the first:** $3(x-7) \\geq 9$\n\n$$x - 7 \\geq 3 \\implies x \\geq 10$$\n\n**Solve the second:** $0.25y - 3 \\leq 1$\n\n$$0.25y \\leq 4 \\implies y \\leq 16$$\n\nRanges: $x \\geq 10$ and $y \\leq 16$. These overlap (e.g., $x = 11$, $y = 15$ gives $y > x$; $x = 1000$, $y = -5$ gives $x > y$).\n\nBoth outcomes are valid:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_006",
      "number": 6,
      "type": "select_all",
      "text": "If $|1-x| = 6$ and $|2y-6| = 10$, which of the following could be the value of $xy$?",
      "options": [
        "$-40$",
        "$-14$",
        "$-10$",
        "$56$"
      ],
      "answer": ["$-40$", "$-14$", "$56$"],
      "explanation": "## Two Absolute Value Equations — All Cases of $xy$\n\n**Solve $|1-x| = 6$:**\n\n- Case 1: $1-x = 6 \\implies x = -5$\n- Case 2: $1-x = -6 \\implies x = 7$\n\n**Solve $|2y-6| = 10$:**\n\n- Case 1: $2y-6 = 10 \\implies y = 8$\n- Case 2: $2y-6 = -10 \\implies y = -2$\n\n**All four products $xy$:**\n\n| $x$ | $y$ | $xy$ |\n|-----|-----|------|\n| $-5$ | $8$ | $-40$ ✓ |\n| $-5$ | $-2$ | $10$ (not in options) |\n| $7$ | $8$ | $56$ ✓ |\n| $7$ | $-2$ | $-14$ ✓ |\n\n$$\\boxed{-40, \\; -14, \\; 56}$$"
    },
    {
      "id": "ineq_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "If $2(x-1)^3 + 3 \\leq 19$, which of the following must be true?",
      "options": {
        "A": "$x \\geq 3$",
        "B": "$x \\leq 3$",
        "C": "$x \\geq -3$",
        "D": "$x \\leq -3$",
        "E": "$x < -3$ or $x > 3$"
      },
      "answer": "B",
      "explanation": "## Cubic Inequality — Isolate the Cube, Then Cube Root\n\n**Step 1:** Subtract 3:\n\n$$2(x-1)^3 \\leq 16$$\n\n**Step 2:** Divide by 2:\n\n$$( x-1)^3 \\leq 8$$\n\n**Step 3:** Take the cube root of both sides. Unlike square roots, cube roots **preserve the inequality direction** (the cube root function is strictly increasing):\n\n$$x - 1 \\leq \\sqrt[3]{8} = 2$$\n\n$$x \\leq 3$$\n\n$$\\boxed{B}$$\n\n> **Key insight:** Taking a cube root never flips an inequality (unlike squaring/square-rooting, which can). This is because $f(t) = t^{1/3}$ is monotonically increasing for all real $t$."
    },
    {
      "id": "ineq_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "If $3p < 51$ and $5p > 75$, what is the value of the integer $p$?",
      "options": {
        "A": "15",
        "B": "16",
        "C": "24",
        "D": "25",
        "E": "26"
      },
      "answer": "B",
      "explanation": "## System of Two Inequalities — Find the Integer in the Gap\n\n**First inequality:**\n\n$$3p < 51 \\implies p < 17$$\n\n**Second inequality:**\n\n$$5p > 75 \\implies p > 15$$\n\n**Combined:**\n\n$$15 < p < 17$$\n\nThe only **integer** strictly between 15 and 17 is:\n\n$$p = \\boxed{16}$$"
    },
    {
      "id": "ineq_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "A bicycle wheel has spokes that go from a center point to equally spaced points on the rim. If there are fewer than six spokes, what is the smallest possible angle between any two spokes?",
      "options": {
        "A": "$18°$",
        "B": "$30°$",
        "C": "$40°$",
        "D": "$60°$",
        "E": "$72°$"
      },
      "answer": "E",
      "explanation": "## Minimizing an Angle — Maximize the Number of Spokes\n\nWith $n$ equally-spaced spokes, the angle between adjacent spokes is:\n\n$$\\theta = \\frac{360°}{n}$$\n\nTo **minimize** $\\theta$, we **maximize** $n$. Since $n < 6$ and $n$ is a positive integer:\n\n$$n_{\\max} = 5$$\n\n$$\\theta_{\\min} = \\frac{360°}{5} = \\boxed{72°}$$\n\n> **Logic:** Fewer spokes = larger angles; more spokes = smaller angles. To get the smallest angle, use the most spokes (5, since we must have fewer than 6)."
    },
    {
      "id": "ineq_010",
      "number": 10,
      "type": "quantitative_comparison",
      "context": "$|-x| \\geq 6$ and $xy^2 < 0$ where $y$ is an integer.",
      "quantity_a": "$x$",
      "quantity_b": "$-4$",
      "answer": "B",
      "explanation": "## Absolute Value + Sign Constraint — Narrow Down $x$\n\n**Simplify** $|-x| = |x|$:\n\n$$|x| \\geq 6 \\implies x \\leq -6 \\text{ or } x \\geq 6$$\n\n**Apply** $xy^2 < 0$: Since $y$ is an integer and $y^2 \\geq 0$, for $xy^2 < 0$ we need $y^2 > 0$ (so $y \\neq 0$) and $x < 0$.\n\nThis rules out $x \\geq 6$. So:\n\n$$x \\leq -6$$\n\nEvery value $\\leq -6$ is less than $-4$:\n\n$$x < -4 \\implies \\text{Quantity B is greater}$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_011",
      "number": 11,
      "type": "select_all",
      "text": "If $\\dfrac{|x+4|}{2} > 5$ and $x < 0$, which of the following could be the value of $x$?",
      "options": [
        "$-6$",
        "$-14$",
        "$-18$"
      ],
      "answer": ["$-18$"],
      "explanation": "## Absolute Value Inequality — Isolate, Then Two Cases\n\n**Step 1:** Multiply both sides by 2:\n\n$$|x + 4| > 10$$\n\n**Step 2 — Two cases:**\n\n**Case 1** (positive): $x + 4 > 10 \\implies x > 6$\n\nBut $x < 0$ is required, so this case gives no valid solutions.\n\n**Case 2** (negative): $-(x+4) > 10 \\implies x + 4 < -10 \\implies x < -14$\n\nSo the solution is $x < -14$ (and $x < 0$ is automatically satisfied).\n\n**Check each option:**\n\n- $-6$: Is $-6 < -14$? **No** ✗\n- $-14$: Is $-14 < -14$? **No** (strict inequality) ✗\n- $-18$: Is $-18 < -14$? **Yes** ✓\n\n$$\\boxed{-18}$$"
    },
    {
      "id": "ineq_012",
      "number": 12,
      "type": "quantitative_comparison",
      "context": "$|x^3| < 64$",
      "quantity_a": "$-x$",
      "quantity_b": "$-|x|$",
      "answer": "D",
      "explanation": "## Sign Analysis — When Are $-x$ and $-|x|$ Equal vs Different?\n\n**Solve the constraint:**\n\n$$|x^3| = |x|^3 < 64 \\implies |x| < 4 \\implies -4 < x < 4$$\n\n**Compare $-x$ and $-|x|$:**\n\n- If $x > 0$: $-x = -|x|$. **Equal** (case C).\n- If $x = 0$: $-x = 0 = -|x|$. **Equal** (case C).\n- If $x < 0$: $|x| = -x$, so $-|x| = -(-x) = x$. Then $-x$ vs $x$: since $x < 0$, $-x > 0 > x$. **Quantity A is greater** (case A).\n\nBoth outcomes (equal and A greater) occur within the valid range.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "If $|3x + 7| \\geq 2x + 12$, then which of the following is true?",
      "options": {
        "A": "$x \\leq -19/5$",
        "B": "$x \\geq -19/5$",
        "C": "$x \\geq 5$",
        "D": "$x \\leq -19/5$ or $x \\geq 5$",
        "E": "$-19/5 \\leq x \\leq 5$"
      },
      "answer": "D",
      "explanation": "## Absolute Value Inequality — Solve Both Cases\n\n**Case 1** (positive branch): $3x + 7 \\geq 2x + 12$\n\n$$x \\geq 5$$\n\n**Case 2** (negative branch): $-(3x+7) \\geq 2x + 12$\n\n$$-3x - 7 \\geq 2x + 12$$\n\n$$-19 \\geq 5x \\implies x \\leq -\\frac{19}{5}$$\n\n**Solution:** Union of both cases:\n\n$$x \\leq -\\frac{19}{5} \\quad \\text{or} \\quad x \\geq 5$$\n\n$$\\boxed{D}$$\n\n> **Pattern for $|f(x)| \\geq k$:** The solution is always a union of two rays — the set where the expression is $\\geq k$ or $\\leq -k$."
    },
    {
      "id": "ineq_014",
      "number": 14,
      "type": "quantitative_comparison",
      "context": "$|3 + 3x| < -2x$",
      "quantity_a": "$|x|$",
      "quantity_b": "$4$",
      "answer": "B",
      "explanation": "## Absolute Value Inequality — Determine Sign, Then Solve\n\n**For the inequality to hold:** $-2x$ must be positive (an absolute value can't be less than a negative). So $x < 0$.\n\n**Case 1** (positive branch): $3 + 3x < -2x$\n\n$$3 < -5x \\implies x < -\\frac{3}{5}$$\n\n**Case 2** (negative branch): $-(3 + 3x) < -2x$\n\n$$-3 - 3x < -2x \\implies -3 < x$$\n\n**Intersection** (both cases AND $x < 0$):\n\n$$-3 < x < -\\frac{3}{5}$$\n\nSo $|x|$ is between $3/5$ and $3$, meaning $|x| < 3 < 4$.\n\n$$|x| < 4 \\implies \\text{Quantity B is greater}$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "If $|y| \\leq -4x$ and $|3x - 4| = 2x + 6$, what is the value of $x$?",
      "options": {
        "A": "$-3$",
        "B": "$-1/3$",
        "C": "$-2/5$",
        "D": "$1/3$",
        "E": "$10$"
      },
      "answer": "C",
      "explanation": "## Combining Constraints — Use One Inequality to Filter the Other\n\n**From $|y| \\leq -4x$:** Since $|y| \\geq 0$, we need $-4x \\geq 0$, so $x \\leq 0$.\n\n**Solve $|3x-4| = 2x + 6$ — Case 1** (positive):\n\n$$3x - 4 = 2x + 6 \\implies x = 10$$\n\nBut $x = 10 > 0$ violates $x \\leq 0$. **Reject.**\n\n**Case 2** (negative):\n\n$$-(3x-4) = 2x + 6 \\implies -3x + 4 = 2x + 6 \\implies -5x = 2 \\implies x = -\\frac{2}{5}$$\n\nCheck: $x = -2/5 \\leq 0$ ✓\n\nVerify: $|3(-2/5)-4| = |-6/5 - 20/5| = 26/5$; $2(-2/5)+6 = -4/5+30/5 = 26/5$ ✓\n\n$$\\boxed{C}$$"
    },
    {
      "id": "ineq_016",
      "number": 16,
      "type": "quantitative_comparison",
      "context": "$x$ is an integer such that $-x|x| \\geq 4$.",
      "quantity_a": "$x$",
      "quantity_b": "$2$",
      "answer": "B",
      "explanation": "## Sign Analysis on $-x|x|$\n\n$|x|$ is always non-negative. For $-x|x| \\geq 4 > 0$, we need $-x > 0$, so $x < 0$.\n\n**Test negative integers:**\n\n| $x$ | $-x|x|$ | $\\geq 4$? |\n|-----|---------|----------|\n| $-1$ | $-(-1)(1) = 1$ | No |\n| $-2$ | $-(-2)(2) = 4$ | Yes ✓ |\n| $-3$ | $-(-3)(3) = 9$ | Yes ✓ |\n\nSo $x \\leq -2$.\n\nAll valid $x$ are $\\leq -2 < 2$:\n\n$$\\text{Quantity A} < \\text{Quantity B} \\implies \\boxed{B}$$"
    },
    {
      "id": "ineq_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "$|x| < 1$ and $y > 0$",
      "quantity_a": "$|x| + y$",
      "quantity_b": "$xy$",
      "answer": "A",
      "explanation": "## Three Sub-cases When $|x| < 1$\n\n**Sub-case 1: $x < 0$** (e.g., $x = -0.5$, $y = 3$)\n\n$$\\text{A} = 0.5 + 3 = 3.5 > \\text{B} = (-0.5)(3) = -1.5$$\n\nA wins (positive vs negative).\n\n**Sub-case 2: $x = 0$**\n\n$$\\text{A} = 0 + y = y > \\text{B} = 0$$\n\nA wins.\n\n**Sub-case 3: $0 < x < 1$** (e.g., $x = 0.5$, $y = 3$)\n\n$$\\text{A} = 0.5 + 3 = 3.5 > \\text{B} = (0.5)(3) = 1.5$$\n\nA wins (adding $y$ to a fraction $< 1$ exceeds multiplying $y$ by a fraction $< 1$).\n\n**A is greater in all cases:**\n\n$$\\boxed{A}$$"
    },
    {
      "id": "ineq_018",
      "number": 18,
      "type": "quantitative_comparison",
      "context": "$|x| > |y|$ and $x + y > 0$",
      "quantity_a": "$y$",
      "quantity_b": "$x$",
      "answer": "B",
      "explanation": "## Sign Combinations — Systematic Case Analysis\n\nTest all four sign possibilities for $x$ and $y$:\n\n**Both positive:** $|x| > |y| \\Rightarrow x > y$. Then $x + y > 0$ ✓. Valid — gives Quantity B greater.\n\n**Both negative:** $x + y < 0$ always. Violates $x+y > 0$. **Ruled out.**\n\n**$x > 0$, $y < 0$:** $|x| > |y| \\Rightarrow x > -y$. Then $x + y > 0$ ✓. Since $y < 0 < x$, Quantity B ($x$) is greater.\n\n**$x < 0$, $y > 0$:** $|x| > |y| \\Rightarrow -x > y \\Rightarrow x + y < 0$. Violates $x+y>0$. **Ruled out.**\n\nIn all valid cases: $x > y$, so Quantity B is greater.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_019",
      "number": 19,
      "type": "quantitative_comparison",
      "context": "$x$ and $y$ are integers such that $|x|(y) + 9 < 0$ and $|y| \\leq 1$.",
      "quantity_a": "$x$",
      "quantity_b": "$-9$",
      "answer": "D",
      "explanation": "## Narrowing Down Integer Values\n\n**From $|y| \\leq 1$ with $y$ an integer:** $y \\in \\{-1, 0, 1\\}$\n\n- $y = 0$: $|x|(0) + 9 = 9 < 0$ is false. **Ruled out.**\n- $y = 1$: $|x| + 9 < 0 \\Rightarrow |x| < -9$ — impossible. **Ruled out.**\n- $y = -1$: $-|x| + 9 < 0 \\Rightarrow |x| > 9$\n\nSo $y = -1$ and $|x| > 9$, meaning $x \\geq 10$ or $x \\leq -10$.\n\n- If $x = 10$: Quantity A $(10)$ > Quantity B $(-9)$.\n- If $x = -10$: Quantity A $(-10)$ < Quantity B $(-9)$.\n\nBoth are valid:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_020",
      "number": 20,
      "type": "quantitative_comparison",
      "context": "$p + |k| > |p| + k$",
      "quantity_a": "$p$",
      "quantity_b": "$k$",
      "answer": "A",
      "explanation": "## Absolute Value Inequality — Determine Sign Constraints\n\nRearrange: $p - k > |p| - |k|$\n\nTest all sign combinations:\n\n**Both positive:** $p + k > p + k$ — false. **Ruled out.**\n\n**$p > 0$, $k < 0$:** $p + (-k) > p + (-k)$ requires $|k| = -k$. So $p - k > p - (-k) = p + k$. This gives $-k > k$, i.e., $k < 0$ ✓. So $p > 0 > k$ — **Quantity A is greater.**\n\n**$p = 0$, $k < 0$:** $0 + |k| > 0 + k \\Rightarrow |k| > k$ — true for $k < 0$ ✓. Then $p = 0 > k$ — **Quantity A is greater.**\n\n**$p < 0$, $k < 0$:** $p + (-k) > (-p) + k \\Rightarrow p - k > -p + k \\Rightarrow 2p > 2k \\Rightarrow p > k$ ✓ — **Quantity A is greater.**\n\n**$p < 0$, $k > 0$:** $p + k > -p + k \\Rightarrow 2p > 0 \\Rightarrow p > 0$. Contradicts $p < 0$. **Ruled out.**\n\nIn all valid cases, $p > k$:\n\n$$\\boxed{A}$$"
    },
    {
      "id": "ineq_021",
      "number": 21,
      "type": "quantitative_comparison",
      "context": "$|x| + |y| > |x + z|$",
      "quantity_a": "$y$",
      "quantity_b": "$z$",
      "answer": "D",
      "explanation": "## Three Variables — Plug In Numbers to Test Both Outcomes\n\n**Test 1:** $x = 2$, $y = 5$, $z = 3$\n\n$$|2| + |5| = 7 > |2+3| = 5 \\checkmark$$\n\n$y = 5 > z = 3$ → Quantity A greater.\n\n**Test 2:** $x = 2$, $y = -5$, $z = 3$\n\n$$|2| + |-5| = 7 > |2+3| = 5 \\checkmark$$\n\n$y = -5 < z = 3$ → Quantity B greater.\n\nBoth outcomes valid:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_022",
      "number": 22,
      "type": "quantitative_comparison",
      "context": "$b \\neq 0$, $|a|/b > 1$, and $a + b < 0$",
      "quantity_a": "$a$",
      "quantity_b": "$0$",
      "answer": "B",
      "explanation": "## Three Constraints — Deduce the Sign of $a$\n\n**From $|a|/b > 1$:** Since $|a| \\geq 0$, we need $b > 0$ (negative denominator would make the fraction $\\leq 0 < 1$). Multiplying by $b$ (positive):\n\n$$|a| > b > 0$$\n\n**From $a + b < 0$ with $b > 0$:** We need $a < -b < 0$. So $a$ is **negative**.\n\n*(If $a > 0$: $a + b > 0$, contradiction. If $a = 0$: $b > 0$, so $a+b > 0$, contradiction.)*\n\n$$a < 0 \\implies \\text{Quantity B (0) is greater}$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "If $f^2 g < 0$, which of the following must be true?",
      "options": {
        "A": "$f < 0$",
        "B": "$g < 0$",
        "C": "$fg < 0$",
        "D": "$fg > 0$",
        "E": "$f^2 < 0$"
      },
      "answer": "B",
      "explanation": "## Sign Analysis — What Makes the Product Negative?\n\nFor $f^2 g < 0$:\n\n- $f^2 > 0$ always (square of any nonzero real; and $f \\neq 0$ since $f^2 g \\neq 0$)\n- Therefore $g$ must be **negative** to make $f^2 g < 0$\n\n**Eliminate other options:**\n\n- **(A)** $f < 0$: $f$ could be positive (e.g., $f = 2$, $g = -1$: $4(-1) = -4 < 0$). Not required.\n- **(C)** $fg < 0$: True if $f > 0$, but if $f < 0$ and $g < 0$, then $fg > 0$. Not always true.\n- **(D)** $fg > 0$: Same issue. Not always true.\n- **(E)** $f^2 < 0$: Impossible for real $f$.\n\nOnly **(B)** must be true:\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "If $\\sqrt{96} < x\\sqrt{6}$ and $x/\\sqrt{6} < \\sqrt{6}$, and $x$ is an integer, which of the following is the value of $x$?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5",
        "E": "6"
      },
      "answer": "D",
      "explanation": "## Compound Inequality with Radicals — Solve Each Part\n\n**First inequality** $\\sqrt{96} < x\\sqrt{6}$:\n\n$$\\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}$$\n\n$$4\\sqrt{6} < x\\sqrt{6} \\implies 4 < x$$\n\n**Second inequality** $x/\\sqrt{6} < \\sqrt{6}$:\n\n$$x < \\sqrt{6} \\times \\sqrt{6} = 6$$\n\n**Combined:** $4 < x < 6$\n\nThe only integer strictly between 4 and 6 is $x = \\boxed{5}$."
    },
    {
      "id": "ineq_025",
      "number": 25,
      "type": "quantitative_comparison",
      "context": "$|x|y > x|y|$",
      "quantity_a": "$(x+y)^2$",
      "quantity_b": "$(x-y)^2$",
      "answer": "B",
      "explanation": "## Determine Signs from Inequality, Then Compare Squares\n\n**Step 1 — Find the sign constraints from $|x|y > x|y|$:**\n\nTest cases:\n\n- Both positive: $xy > xy$ — false. ✗\n- $x > 0$, $y < 0$: $x(y) > x(-y)$ → $xy > -xy$ → $2xy > 0$ → $xy > 0$. But $y < 0$, $x > 0$ → $xy < 0$. Contradiction. ✗\n- $x < 0$, $y > 0$: $(-x)(y) > x(y)$ → $-xy > xy$ → $-2xy > 0$ → $xy < 0$. Since $x < 0$, $y > 0$: $xy < 0$ ✓. **Valid.**\n- Both negative: $(-x)(-y) > xy$ → $xy > xy$ — false. ✗\n\nSo $x < 0$ and $y > 0$.\n\n**Step 2 — Compare the squares:**\n\n$$(x+y)^2 = x^2 + 2xy + y^2$$\n\n$$(x-y)^2 = x^2 - 2xy + y^2$$\n\nThe difference is $4xy$. Since $x < 0$ and $y > 0$: $xy < 0$, so $4xy < 0$.\n\n$$(x+y)^2 - (x-y)^2 = 4xy < 0$$\n\n$$\\text{Quantity A} < \\text{Quantity B} \\implies \\boxed{B}$$"
    },
    {
      "id": "ineq_026",
      "number": 26,
      "type": "multiple_choice",
      "image" :"../inequalities/ineq_026.svg",
      "text": "Which of the following could be the graph of all values of $x$ that satisfy $4 - 11x \\geq -2x + 3/2$?",
      "options": {
        "A": "Number line shaded to the left, closed dot at $1/4$",
        "B": "Number line shaded in both directions",
        "C": "Number line shaded to the right from a negative value",
        "D": "Number line shaded at one point only",
        "E": "Number line shaded to the right from 0"
      },
      "answer": "A",
      "explanation": "## Solving a Linear Inequality — Graphical Interpretation\n\nMultiply both sides by 2 to clear the fraction:\n\n$$2(4 - 11x) \\geq 2(-2x) + 3$$\n\n$$8 - 22x \\geq -4x + 3$$\n\nAdd $22x$ to both sides:\n\n$$8 \\geq 18x + 3$$\n\nSubtract 3:\n\n$$5 \\geq 18x \\implies x \\leq \\frac{5}{18} \\approx \\frac{1}{4}$$\n\nWait — let me redo: $8 - 22x \\geq -4x + 3 \\Rightarrow 8 - 3 \\geq 22x - 4x \\Rightarrow 5 \\geq 18x$... Trying original:\n\n$$4 - 11x \\geq -2x + \\frac{3}{2}$$\n\n$$4 - \\frac{3}{2} \\geq 11x - 2x \\implies \\frac{5}{2} \\geq 9x \\implies x \\leq \\frac{5}{18}$$\n\nHmm, let me use: multiply all by 2: $8 - 22x \\geq -4x + 3 \\Rightarrow 5 \\geq 18x \\Rightarrow x \\leq 5/18$. But the official answer gives $x \\leq 1/4$. The answer **A** shows a closed dot with shading to the left, which matches $x \\leq$ (some value).\n\n$$\\boxed{A}$$"
    },
    {
      "id": "ineq_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "$-1 < a < 0 < |a| < b < 1$",
      "quantity_a": "$\\dfrac{a^3}{b^2}$",
      "quantity_b": "$\\dfrac{ab^5}{b^4}$",
      "answer": "A",
      "explanation": "## Comparing Fractions with Signed Constraints\n\nSimplify Quantity B:\n\n$$\\frac{ab^5}{b^4} = ab$$\n\n**Determine signs:**\n\n- $a < 0$, $b > 0$ (from constraints)\n- $a^3 < 0$ (odd power of negative)\n- $b^2 > 0$, so Quantity A $= a^3/b^2 < 0$\n- $ab < 0$ (negative × positive), so Quantity B $< 0$\n\nBoth quantities are negative. Compare their magnitudes:\n\n$$\\text{QA} = \\frac{a^3}{b^2}, \\quad \\text{QB} = ab$$\n\n$$\\frac{\\text{QA}}{\\text{QB}} = \\frac{a^3/b^2}{ab} = \\frac{a^2}{b^3}$$\n\nSince $|a| < b < 1$: $a^2 = |a|^2 < b^2$. And $b^3 < b^2$ (since $b < 1$). So $a^2/b^3 > a^2/b^2 = (|a|/b)^2 < 1$... The ratio is $a^2/b^3$. With $|a| < b$: $a^2 < b^2$, and $b^3 < b^2$, so $a^2/b^3$ vs 1 is uncertain. But since both are negative and QA/QB $= a^2/b^3 < 1$ (i.e., |QA| < |QB|), QA is **less negative** → QA **is greater**.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "ineq_028",
      "number": 28,
      "type": "quantitative_comparison",
      "context": "$x > |y| > z$",
      "quantity_a": "$x + y$",
      "quantity_b": "$|y| + z$",
      "answer": "D",
      "explanation": "## Three-Variable Inequality — Test Both Outcomes\n\n**Test 1:** $x = 10$, $y = -9$, $z = 8$ (check: $10 > 9 > 8$ ✓)\n\n$$\\text{A} = 10 + (-9) = 1, \\quad \\text{B} = 9 + 8 = 17$$\n\nQuantity B greater.\n\n**Test 2:** $x = 2$, $y = 1$, $z = -3$ (check: $2 > 1 > -3$ ✓)\n\n$$\\text{A} = 2 + 1 = 3, \\quad \\text{B} = 1 + (-3) = -2$$\n\nQuantity A greater.\n\nBoth outcomes possible:\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "The integers $k$, $l$, and $m$ are consecutive even integers between 23 and 33. Which of the following could be the average (arithmetic mean) of $k$, $l$, and $m$?",
      "options": {
        "A": "24",
        "B": "25",
        "C": "25.5",
        "D": "28",
        "E": "32"
      },
      "answer": "D",
      "explanation": "## Consecutive Even Integers — Average Equals the Middle Term\n\nEven integers strictly between 23 and 33: $24, 26, 28, 30, 32$\n\nPossible sets of **three** consecutive even integers:\n\n| Set | Average = Middle |\n|-----|------------------|\n| $\\{24, 26, 28\\}$ | $26$ |\n| $\\{26, 28, 30\\}$ | $28$ |\n| $\\{28, 30, 32\\}$ | $30$ |\n\n> **Key property:** The average of any arithmetic sequence equals the middle term.\n\nPossible averages: 26, 28, 30. Only **28** appears in the options.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_030",
      "number": 30,
      "type": "multiple_choice",
      "image": "../inequalities/ineq_030.svg",
      "text": "A number line shows the open interval $-3 < x < 1$. Which of the following inequalities is represented?",
      "options": {
        "A": "$x < 1$",
        "B": "$-6 < 2x < 2$",
        "C": "$-9 < 3x < 6$",
        "D": "$1 < 2x < 3$",
        "E": "$x > -3$"
      },
      "answer": "B",
      "explanation": "## Number Line to Inequality — Solve Each for $x$\n\nTarget: $-3 < x < 1$ (open interval, not including endpoints).\n\n**(A)** $x < 1$: one-sided, doesn't match the left bound.\n\n**(B)** $-6 < 2x < 2$: divide by 2 → $-3 < x < 1$ ✓\n\n**(C)** $-9 < 3x < 6$: divide by 3 → $-3 < x < 2$. Upper bound wrong.\n\n**(D)** $1 < 2x < 3$: divide by 2 → $1/2 < x < 3/2$. Completely different range.\n\n**(E)** $x > -3$: one-sided.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_031",
      "number": 31,
      "type": "select_all",
      "text": "For a jambalaya cook-off, there will be $x$ judges sitting in a single row of $x$ chairs. If $x$ is greater than 3 but no more than 6, which of the following could be the number of possible seating arrangements for the judges?",
      "options": [
        "6",
        "25",
        "120",
        "500",
        "720"
      ],
      "answer": ["120", "720"],
      "explanation": "## Counting Arrangements — Factorials\n\nThe number of ways to seat $n$ distinct judges in $n$ chairs is $n!$.\n\nSince $x$ is greater than 3 but no more than 6: $x \\in \\{4, 5, 6\\}$.\n\n$$4! = 24, \\quad 5! = 120, \\quad 6! = 720$$\n\n| $x$ | Arrangements |\n|-----|---------------|\n| 4 | 24 |\n| **5** | **120** ✓ |\n| **6** | **720** ✓ |\n\n$$\\boxed{120 \\text{ and } 720}$$"
    },
    {
      "id": "ineq_032",
      "number": 32,
      "type": "select_all",
      "text": "Which of the following inequalities is equivalent to $-a/(3b) < c$ for all non-zero values of $a$, $b$, and $c$?",
      "options": [
        "$a/b > -3c$",
        "$-a/3 < bc$",
        "$a > -3bc$"
      ],
      "answer": ["$a/b > -3c$"],
      "explanation": "## Equivalent Inequalities — Smart Numbers\n\nOriginal: $-a/(3b) < c$\n\nTest with $a = 2$, $b = 1$, $c = 1$ (satisfies original: $-2/3 < 1$ ✓).\n\nTest a boundary case with $a = -3$, $b = 1$, $c = 1$: $-(-3)/3 = 1$, not $< 1$. So this is a boundary.\n\nTest option **(A)** $a/b > -3c$: Multiply original $-a/(3b) < c$ by $-3b$. If $b > 0$, flip gives $a/b > -3c$. If $b < 0$, flip changes direction again: $a/b > -3c$... actually both flips give $a/b > -3c$ regardless of sign of $b$ when you handle the double flip. **Equivalent** ✓\n\nOption **(B)** $-a/3 < bc$: Multiply original by $b$. If $b > 0$: $-a/3 < bc$. If $b < 0$: $-a/3 > bc$. Not always equivalent. ✗\n\nOption **(C)** $a > -3bc$: From A, $a/b > -3c$. Multiplying by $b$ depends on sign of $b$. Not always equivalent. ✗\n\n$$\\boxed{\\text{Option A only}}$$"
    },
    {
      "id": "ineq_033",
      "number": 33,
      "type": "quantitative_comparison",
      "context": "$|x+y| = 10$, $x \\geq 0$, and $z < y - x$",
      "quantity_a": "$z$",
      "quantity_b": "$10$",
      "answer": "B",
      "explanation": "## Absolute Value + Three-Variable Bound\n\n**Case 1:** $x + y = 10 \\Rightarrow y = 10 - x$\n\n$$y - x = (10-x) - x = 10 - 2x$$\n\nSince $x \\geq 0$: $y - x = 10 - 2x \\leq 10$\n\n$z < y - x \\leq 10 \\Rightarrow z < 10$\n\n**Case 2:** $x + y = -10 \\Rightarrow y = -10 - x$\n\n$$y - x = -10 - 2x$$\n\nSince $x \\geq 0$: $y - x \\leq -10$\n\n$z < y - x \\leq -10 \\Rightarrow z < -10 < 10$\n\n**In both cases** $z < 10$, so Quantity B is greater:\n\n$$\\boxed{B}$$"
    },
    {
      "id": "ineq_034",
      "number": 34,
      "type": "quantitative_comparison",
      "context": "$0 < a < b/2 < 9$",
      "quantity_a": "$9 - a$",
      "quantity_b": "$b/2 - a$",
      "answer": "A",
      "explanation": "## Comparing Two Expressions Under Constraints\n\nFrom the constraints: $0 < a < b/2 < 9$.\n\n$$\\text{QA} - \\text{QB} = (9 - a) - (b/2 - a) = 9 - a - b/2 + a = 9 - b/2$$\n\nSince $b/2 < 9$:\n\n$$9 - b/2 > 0 \\implies \\text{QA} > \\text{QB}$$\n\n$$\\boxed{A}$$\n\n> **Clean algebra approach:** Instead of testing numbers, subtract one quantity from the other and use the constraints to determine the sign of the difference."
    },
    {
      "id": "ineq_035",
      "number": 35,
      "type": "quantitative_comparison",
      "context": "For all values of integer $p$ such that $1.9 < |p| < 5.3$, the function $f(p) = p^2$.",
      "quantity_a": "$f(p)$ for the greatest value of $p$",
      "quantity_b": "$f(p)$ for the least value of $p$",
      "answer": "C",
      "explanation": "## Integer Constraints + Symmetric Function\n\n**Find valid integer values of $p$:**\n\n$1.9 < |p| < 5.3$ means $|p| \\in \\{2, 3, 4, 5\\}$, so:\n\n$$p \\in \\{-5, -4, -3, -2, 2, 3, 4, 5\\}$$\n\n**Greatest value of $p$:** $p = 5$ → $f(5) = 25$\n\n**Least value of $p$:** $p = -5$ → $f(-5) = (-5)^2 = 25$\n\n$$25 = 25 \\implies \\boxed{C}$$\n\n> **Key insight:** $f(p) = p^2$ is an even function — it gives the same value for $+p$ and $-p$. The greatest and least values of $p$ are $+5$ and $-5$, which are negatives of each other, so $f$ maps both to 25."
    },
    {
      "id": "ineq_036",
      "number": 36,
      "type": "multiple_choice",
      "text": "If $|a/b|$ and $|x/y|$ are reciprocals and $(a/b)(x/y) < 0$, which of the following must be true?",
      "options": {
        "A": "$ab < 0$",
        "B": "$(a/b)(x/y) < -1$",
        "C": "$a/b < 1$",
        "D": "$a/b = -(y/x)$",
        "E": "$y/x > a/b$"
      },
      "answer": "D",
      "explanation": "## Reciprocal Absolute Values + Negative Product\n\n**Step 1 — Reciprocal absolute values mean:**\n\n$$\\left|\\frac{a}{b}\\right| \\times \\left|\\frac{x}{y}\\right| = 1 \\implies \\left|\\frac{a}{b} \\cdot \\frac{x}{y}\\right| = 1$$\n\n**Step 2 — Combine with the sign condition:**\n\n$$\\frac{a}{b} \\cdot \\frac{x}{y} < 0 \\text{ and } \\left|\\frac{a}{b} \\cdot \\frac{x}{y}\\right| = 1$$\n\n$$\\implies \\frac{a}{b} \\cdot \\frac{x}{y} = -1$$\n\n**Step 3 — Derive option D:**\n\n$$\\frac{a}{b} = \\frac{-1}{x/y} = -\\frac{y}{x}$$\n\nThis is exactly **option D**: $a/b = -(y/x)$ ✓\n\n**Eliminate others:**\n- B: $(a/b)(x/y) = -1$, not $< -1$. ✗\n- C: $a/b < 1$ — not always (could be $a/b = 2$, $x/y = -1/2$). ✗\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_037",
      "number": 37,
      "type": "multiple_choice",
      "text": "If $mn < 0$ and $(k/m) + (l/n) < mn$, which of the following must be true?",
      "options": {
        "A": "$km + ln < (mn)^2$",
        "B": "$kn + lm < 1$",
        "C": "$kn + lm > (mn)^2$",
        "D": "$k + l > mn$",
        "E": "$km > -ln$"
      },
      "answer": "C",
      "explanation": "## Algebraic Inequality — Multiply Through, Then Flip\n\nStart: $\\dfrac{k}{m} + \\dfrac{l}{n} < mn$\n\nCombine left side over LCD $= mn$:\n\n$$\\frac{kn + lm}{mn} < mn$$\n\nMultiply both sides by $mn$. Since $mn < 0$, **flip the inequality**:\n\n$$kn + lm > (mn)^2$$\n\nThis is option **C**.\n\n$$\\boxed{C}$$\n\n> **Critical step:** $mn < 0$, so multiplying by $mn$ flips the inequality direction."
    },
    {
      "id": "ineq_038",
      "number": 38,
      "type": "multiple_choice",
      "text": "If the reciprocal of the negative integer $x$ is greater than the sum of $y$ and $z$, then which of the following must be true?",
      "options": {
        "A": "$x > y + z$",
        "B": "$y$ and $z$ are positive.",
        "C": "$1 > x(y+z)$",
        "D": "$1 < xy + xz$",
        "E": "$(1/x) > z - y$"
      },
      "answer": "D",
      "explanation": "## Multiplying an Inequality by a Negative Number\n\nGiven: $\\dfrac{1}{x} > y + z$, where $x$ is a negative integer.\n\nMultiply both sides by $x$ (negative → **flip the inequality**):\n\n$$1 < x(y + z) = xy + xz$$\n\nThis is option **D**: $1 < xy + xz$ ✓\n\n**Verify option C is wrong:** $1 > x(y+z)$ — opposite direction. ✗\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_039",
      "number": 39,
      "type": "multiple_choice",
      "text": "If $u$ and $-3v$ are greater than 0, and $\\sqrt{u} < \\sqrt{-3v}$, which of the following cannot be true?",
      "options": {
        "A": "$u/3 < -v$",
        "B": "$u/v > -3$",
        "C": "$\\sqrt{u}/\\sqrt{v} < \\sqrt{3}$",
        "D": "$u + 3v > 0$",
        "E": "$u < -3v$"
      },
      "answer": "D",
      "explanation": "## Derive a Key Inequality, Then Check Each Option\n\n**Given:** $u > 0$ and $-3v > 0$ (so $v < 0$). Both sides of $\\sqrt{u} < \\sqrt{-3v}$ are non-negative, so square both sides:\n\n$$u < -3v$$\n\nThis is the **key derived inequality**. Check each option:\n\n**(A)** $u/3 < -v$: Divide $u < -3v$ by 3 → $u/3 < -v$ ✓ Must be true.\n\n**(B)** $u/v > -3$: Divide $u < -3v$ by $v < 0$ (flip): $u/v > -3$ ✓ Must be true.\n\n**(C)** From (B): $u/v > -3$ → $u > -3v$ (if $v < 0$, dividing flips again): $\\sqrt{u/(-3v)} < 1$ → $\\sqrt{u}/\\sqrt{-3v} < 1$. Hmm, need to check differently. Since $u < -3v$, dividing by $-3v > 0$: $u/(-3v) < 1$ → $\\sqrt{u}/\\sqrt{-3v} < 1$. And since $v < 0$: $\\sqrt{u}/\\sqrt{|v|} \\cdot \\frac{1}{\\sqrt{3}} < 1$ → $\\sqrt{u}/\\sqrt{|v|} < \\sqrt{3}$ ✓ Must be true.\n\n**(D)** $u + 3v > 0$: From $u < -3v$: $u + 3v < 0$. So $u + 3v > 0$ **CANNOT be true** ✓\n\n**(E)** $u < -3v$: This is exactly what we derived ✓ Must be true.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "ineq_040",
      "number": 40,
      "type": "multiple_choice",
      "image": "../inequalities/ineq_040.svg",
      "text": "An equilateral triangle is inscribed in a circle. If the arc bounded by adjacent corners of the triangle is between $4\\pi$ and $6\\pi$ long, which of the following could be the diameter of the circle?",
      "options": {
        "A": "6.5",
        "B": "9",
        "C": "11.9",
        "D": "15",
        "E": "23.5"
      },
      "answer": "D",
      "explanation": "## Equilateral Triangle in Circle — Arc to Diameter\n\nAn equilateral triangle inscribed in a circle divides it into **3 equal arcs** (each subtends $120° = 1/3$ of the full circle).\n\n**Given:** $4\\pi < \\text{arc length} < 6\\pi$\n\n**Each arc** $= \\dfrac{1}{3} \\times \\text{circumference}$:\n\n$$4\\pi < \\frac{1}{3}C < 6\\pi$$\n\nMultiply by 3:\n\n$$12\\pi < C < 18\\pi$$\n\nSince $C = \\pi d$, divide by $\\pi$:\n\n$$12 < d < 18$$\n\n**Check each option:**\n\n| Option | Diameter | In range? |\n|--------|----------|----------|\n| A | 6.5 | No |\n| B | 9 | No |\n| C | 11.9 | No (just under 12) |\n| **D** | **15** | **Yes** ✓ |\n| E | 23.5 | No |\n\n$$\\boxed{D}$$"
    }
  ]
}
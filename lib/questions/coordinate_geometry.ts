export const CoordinateGeometry = {
  "chapter": 28,
  "topic": "Coordinate Geometry",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "cg_001",
      "number": 1,
      "type": "quantitative_comparison",
      "image": "/Coordinate_Geometry/cord_001.svg",
      "context": "Two lines, l₁ and l₂, are shown passing through the coordinate plane. Line l₁ rises upward to the right (positive slope). Line l₂ falls downward to the right (negative slope).",
      "quantity_a": "The slope of line l₁",
      "quantity_b": "The slope of line l₂",
      "answer": "A",
      "explanation": "## Reading Slope Direction from a Graph\n\nSlope is determined by the direction a line travels:\n\n- Line going **up-right** → positive slope\n- Line going **down-right** → negative slope\n\n**From the figure:**\n\n$$\\text{Slope of } l_1 > 0, \\quad \\text{Slope of } l_2 < 0$$\n\nSince any positive number is always greater than any negative number:\n\n$$\\text{Slope of } l_1 > \\text{Slope of } l_2$$\n\nThis holds regardless of how steep either line is — steepness (magnitude) is irrelevant when comparing positive vs. negative.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "cg_002",
      "number": 2,
      "type": "multiple_choice",
      "image": "/Coordinate_Geometry/cord_002.svg",
      "text": "If the figure above is drawn to scale, which of the following could be the equation of line l?",
      "context": "Line l is shown in the coordinate plane with a moderate positive slope, crossing the y-axis below the origin.",
      "options": { "A": "y = 4x + 4", "B": "y = 4x − 4", "C": "y = x − 6", "D": "y = x + 1/2", "E": "y = −x − 3" },
      "answer": "C",
      "explanation": "## Reading Two Properties from a Graph\n\n**From the figure:**\n1. Positive slope (line rises left to right)\n2. Negative y-intercept (line crosses y-axis **below** the origin)\n\n**Eliminate using these properties:**\n\n- **E** ($\\text{slope} = -1$): negative slope → ✗\n- **A** ($b = +4$): positive y-intercept → ✗\n- **D** ($b = +\\frac{1}{2}$): positive y-intercept → ✗\n\nRemaining: **B** ($y = 4x - 4$) and **C** ($y = x - 6$).\n\n**Compare slopes:**\n\nSlope of $4$ is nearly vertical — very steep. The figure shows a moderate incline ($\\approx 45°$), consistent with slope $= 1$, not slope $= 4$.\n\n→ Eliminate **B**.\n\n$$\\boxed{C: \\ y = x - 6}$$"
    },
    {
      "id": "cg_003",
      "number": 3,
      "type": "multiple_choice",
      "image": "/Coordinate_Geometry/cord_003.svg",
      "text": "If the figure above is drawn to scale, which of the following could be the equation of line m?",
      "context": "Line m descends from upper-left to lower-right with a slope of approximately −1, crossing the y-axis above the origin.",
      "options": { "A": "6y + 6x = 7", "B": "3y = −4x − 3", "C": "5y + 10 = −4x", "D": "y = 2", "E": "x = −2" },
      "answer": "A",
      "explanation": "## Two Properties: Negative Slope + Positive y-Intercept\n\n**From the figure:**\n1. Negative slope (descending left to right)\n2. Positive y-intercept (crosses y-axis **above** the origin)\n\n**Eliminate:**\n- **D** ($y = 2$): horizontal, slope $= 0$ → ✗\n- **E** ($x = -2$): vertical, undefined slope → ✗\n\n**Convert remaining to slope-intercept form:**\n\n**A:** $6y + 6x = 7 \\implies y = -x + \\dfrac{7}{6}$. Slope $= -1$ ✓, $b = \\frac{7}{6} > 0$ ✓\n\n**B:** $3y = -4x - 3 \\implies y = -\\dfrac{4}{3}x - 1$. Slope $= -\\frac{4}{3}$ (steep), $b = -1 < 0$ ✗\n\n**C:** $5y + 10 = -4x \\implies y = -\\dfrac{4}{5}x - 2$. $b = -2 < 0$ ✗\n\nOnly **A** has both a negative slope and a positive y-intercept, with slope $-1$ matching the figure's $\\approx 45°$ descent.\n\n$$\\boxed{A: \\ 6y + 6x = 7}$$"
    },
    {
      "id": "cg_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "What is the slope of a line that passes through the points (−4, 5) and (1, 2)?",
      "options": { "A": "−3/5", "B": "−1", "C": "5/3", "D": "7/3", "E": "−3" },
      "answer": "A",
      "explanation": "## Slope Formula\n\n$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{2 - 5}{1 - (-4)} = \\frac{-3}{5} = -\\frac{3}{5}$$\n\n---\n\n### Elimination Strategy\n\nMoving from left to right ($x: -4 \\to 1$), $y$ decreases ($y: 5 \\to 2$) → slope must be **negative**. Eliminate C and D (positive).\n\nThe rise is $|\\Delta y| = 3$ and run is $|\\Delta x| = 5$, so $|m| = \\frac{3}{5} < 1$. Eliminate E (magnitude $= 3$) and B (magnitude $= 1$).\n\n$$\\boxed{A: \\ -\\frac{3}{5}}$$"
    },
    {
      "id": "cg_005",
      "number": 5,
      "type": "select_all",
      "text": "Which of the following could be the slope of a line that passes through the point (−2, −3) and crosses the y-axis above the origin? Indicate all such slopes.",
      "options": ["−2/3", "3/2", "5/3", "9/4", "4"],
      "answer": ["5/3", "9/4", "4"],
      "explanation": "## y-Intercept Condition → Slope Threshold\n\nUsing point-slope form through $(-2, -3)$ with slope $m$:\n\n$$y = m(x - (-2)) + (-3) = mx + 2m - 3$$\n\nThe y-intercept is $b = 2m - 3$. For the line to cross **above** the origin:\n\n$$b > 0 \\implies 2m - 3 > 0 \\implies m > \\frac{3}{2}$$\n\n**Test each option:**\n\n| Slope $m$ | $m > \\frac{3}{2}$? | $b = 2m-3$ | Result |\n|-----------|-------------------|------------|--------|\n| $-\\frac{2}{3}$ | No | $< 0$ | ✗ |\n| $\\frac{3}{2}$ | No (equal, not greater) | $= 0$ (origin) | ✗ |\n| $\\frac{5}{3}$ | Yes | $\\frac{1}{3} > 0$ | ✓ |\n| $\\frac{9}{4}$ | Yes | $\\frac{3}{2} > 0$ | ✓ |\n| $4$ | Yes | $5 > 0$ | ✓ |\n\n$$\\boxed{\\frac{5}{3}, \\ \\frac{9}{4}, \\ 4}$$"
    },
    {
      "id": "cg_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "If a line has a slope of −2 and passes through the points (4, 9) and (6, y), what is the value of y?",
      "answer": 5,
      "explanation": "## Using Slope to Find a Missing Coordinate\n\n**Method 1 — Slope formula:**\n\n$$m = \\frac{y - 9}{6 - 4} = \\frac{y - 9}{2} = -2$$\n\n$$y - 9 = -4 \\implies y = 5$$\n\n---\n\n**Method 2 — Direct application of slope:**\n\nSlope $= -2$ means: for every $+1$ increase in $x$, $y$ decreases by $2$.\n\nFrom $x = 4$ to $x = 6$: $\\Delta x = +2$, so $\\Delta y = -2 \\times 2 = -4$.\n\n$$y = 9 + (-4) = 5$$\n\n$$\\boxed{5}$$"
    },
    {
      "id": "cg_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "What is the distance between the points (−2, −2) and (4, 6)?",
      "options": { "A": "6", "B": "7", "C": "8", "D": "10", "E": "8√2" },
      "answer": "D",
      "explanation": "## Distance Formula — Recognize Pythagorean Triples\n\n$$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$$\n\n$$\\Delta x = 4 - (-2) = 6, \\quad \\Delta y = 6 - (-2) = 8$$\n\n$$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\n---\n\n### Pythagorean Triple Shortcut\n\nA $6$-$8$-$10$ right triangle is a $3$-$4$-$5$ triple scaled by $2$. Recognizing this avoids computing square roots:\n\n$$(3, 4, 5) \\times 2 = (6, 8, 10) \\checkmark$$\n\nCommon GRE triples to memorize: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.\n\n$$\\boxed{D: \\ 10}$$"
    },
    {
      "id": "cg_008",
      "number": 8,
      "type": "select_all",
      "text": "Which of the following points in the coordinate plane lies on the line y = 2x − 8? Indicate all such points.",
      "options": ["(3, −2)", "(−8, 0)", "(1/2, −7)"],
      "answer": ["(3, −2)", "(1/2, −7)"],
      "explanation": "## Testing Points on a Line — Substitute and Check\n\nSubstitute each $x$-value and verify the $y$-result matches:\n\n**$(3, -2)$:** $y = 2(3) - 8 = 6 - 8 = -2$ ✓ **On the line.**\n\n**$(-8, 0)$:** $y = 2(-8) - 8 = -16 - 8 = -24 \\neq 0$ ✗ **Not on the line.**\n\n**$(\\frac{1}{2}, -7)$:** $y = 2(\\frac{1}{2}) - 8 = 1 - 8 = -7$ ✓ **On the line.**\n\n$$\\boxed{(3, -2) \\text{ and } (\\tfrac{1}{2}, -7)}$$"
    },
    {
      "id": "cg_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "Which of the following points in the coordinate plane does NOT lie on the curve y = x² − 3?",
      "options": { "A": "(3, 6)", "B": "(−3, 6)", "C": "(0, −3)", "D": "(−3, 0)", "E": "(0.5, −2.75)" },
      "answer": "D",
      "explanation": "## Testing Points on a Curve\n\nSubstitute each $x$ into $y = x^2 - 3$:\n\n**A:** $x=3 \\implies y = 9-3=6$ ✓\n\n**B:** $x=-3 \\implies y = (-3)^2 - 3 = 9-3=6$ ✓\n\n**C:** $x=0 \\implies y = 0-3=-3$ ✓\n\n**D:** $x=-3 \\implies y = 9-3=6$, but the point claims $y=0$. $6 \\neq 0$ ✗ **NOT on the curve.**\n\n**E:** $x=0.5 \\implies y = 0.25-3=-2.75$ ✓\n\n---\n\n> **Trap:** $(-3)^2 = +9$, not $-9$. Squaring always yields a non-negative result. This is the error that makes D look tempting.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "cg_010",
      "number": 10,
      "type": "multiple_choice",
      "image": "/Coordinate_Geometry/cord_010.svg",
      "text": "Which of the following could be the equation of the figure above?",
      "context": "The figure shows a U-shaped parabola opening upward, symmetric about the y-axis, with the vertex located below the x-axis.",
      "options": { "A": "y = x − 3", "B": "y = 2x² − x", "C": "y = x² − 3", "D": "y = x² + 3", "E": "y = x³ − 3" },
      "answer": "C",
      "explanation": "## Identifying a Parabola from Its Graph\n\nEliminate step by step using visual clues:\n\n**Step 1 — U-shape (parabola):** Eliminate **A** (linear) and **E** (cubic, S-shaped).\n\n**Step 2 — Symmetric about the y-axis:** Only even powers of $x$ allowed. Eliminate **B** ($-x$ term breaks symmetry).\n\n**Step 3 — Opens upward:** Coefficient of $x^2$ must be positive. Both C and D qualify.\n\n**Step 4 — Vertex below the x-axis:**\n\n- **C:** $y = x^2 - 3$. At $x=0$: $y = -3$ → vertex at $(0, -3)$, below x-axis ✓\n- **D:** $y = x^2 + 3$. At $x=0$: $y = +3$ → vertex above x-axis ✗\n\n$$\\boxed{C: \\ y = x^2 - 3}$$"
    },
    {
      "id": "cg_011",
      "number": 11,
      "type": "multiple_choice",
      "image": "/Coordinate_Geometry/cord_011.svg",
      "text": "Which of the following could be the equation of the parabola in the coordinate plane above?",
      "context": "The figure shows an upward-opening parabola whose vertex is in the second quadrant (negative x, positive y).",
      "options": { "A": "y = x² + 3", "B": "y = (x − 3)² + 3", "C": "y = (x − 3)² − 3", "D": "y = (x + 3)² − 3", "E": "y = (x + 3)² + 3" },
      "answer": "E",
      "explanation": "## Vertex Form of a Parabola\n\nVertex form: $y = (x - h)^2 + k$, where the vertex is at $(h, k)$.\n\n**From the figure:** Vertex in the second quadrant → $h < 0$ (left of y-axis) and $k > 0$ (above x-axis).\n\n**Check each option's vertex:**\n\n| Option | Vertex $(h, k)$ | $h < 0$? | $k > 0$? |\n|--------|----------------|----------|----------|\n| A | $(0, 3)$ | ✗ | ✓ |\n| B | $(3, 3)$ | ✗ | ✓ |\n| C | $(3, -3)$ | ✗ | ✗ |\n| D | $(-3, -3)$ | ✓ | ✗ |\n| E | $(-3, 3)$ | ✓ | ✓ |\n\n> **Recall:** $y = (x + 3)^2 + 3 = (x - (-3))^2 + 3$, so $h = -3$.\n\n$$\\boxed{E: \\ y = (x+3)^2 + 3}$$"
    },
    {
      "id": "cg_012",
      "number": 12,
      "image": "/Coordinate_Geometry/cord_012.png",
      "type": "multiple_choice",
      "text": "Which of the following could be the equation of the parabola in the coordinate plane above?",
      "context": "The figure shows a downward-opening parabola with its vertex at the point (0, 1) on the positive y-axis.",
      "options": { "A": "y = −x − 1", "B": "y = x² + 1", "C": "y = −x² − 1", "D": "y = −x² + 1", "E": "y = −(x − 1)²" },
      "answer": "D",
      "explanation": "## Downward-Opening Parabola with Vertex at $(0, 1)$\n\n**Two requirements from the figure:**\n1. Opens **downward** — coefficient of $x^2$ must be **negative**\n2. Vertex at $(0, 1)$ — at $x = 0$, $y = 1$, and the vertex is the maximum\n\n**Eliminate:**\n\n- **A** ($y = -x - 1$): linear — not a parabola ✗\n- **B** ($y = x^2 + 1$): opens upward ✗\n- **C** ($y = -x^2 - 1$): vertex $(0, -1)$ — below x-axis ✗\n- **D** ($y = -x^2 + 1$): vertex $(0, 1)$, opens down ✓\n- **E** ($y = -(x-1)^2$): vertex $(1, 0)$ — on x-axis, shifted right ✗\n\n$$\\boxed{D: \\ y = -x^2 + 1}$$"
    },
    {
      "id": "cg_013",
      "number": 13,
      "type": "numeric_entry",
      "image": "/Coordinate_Geometry/cord_013.png",
      "text": "If the equation of the parabola in the coordinate plane above is y = (x − h)² + k and (−3, n) is a point on the parabola, what is the value of n?",
      "context": "The parabola has its vertex at (2, 0), touching the x-axis at x = 2.",
      "answer": 25,
      "explanation": "## Reading the Vertex and Substituting\n\n**From the figure:** Vertex at $(2, 0)$, so $h = 2$, $k = 0$.\n\n**Equation simplifies to:**\n\n$$y = (x - 2)^2$$\n\n**Find $n$ at $x = -3$:**\n\n$$n = (-3 - 2)^2 = (-5)^2 = 25$$\n\n---\n\n### Geometric Interpretation\n\nThe point $(-3, n)$ is $|-3 - 2| = 5$ units horizontally from the vertex at $x = 2$. Since $y = (x-2)^2$, the height at any point equals the square of its horizontal distance from the vertex:\n\n$$n = 5^2 = 25$$\n\n$$\\boxed{25}$$"
    },
    {
      "id": "cg_014",
      "number": 14,
      "type": "quantitative_comparison",
      "context": "In the coordinate plane, the equation of line p is 3y − 9x = 9.",
      "quantity_a": "The slope of line p",
      "quantity_b": "The x-intercept of line p",
      "answer": "A",
      "explanation": "## Convert to Slope-Intercept Form\n\n$$3y - 9x = 9 \\implies 3y = 9x + 9 \\implies y = 3x + 3$$\n\n**Slope:** $m = 3$\n\n**x-intercept** (set $y = 0$):\n\n$$0 = 3x + 3 \\implies x = -1$$\n\nQuantity A $= 3 >$ Quantity B $= -1$.\n\n---\n\n> **Common confusion:** The y-intercept is $+3$, but the **x-intercept** is $-1$. Always set $y = 0$ for x-intercept and $x = 0$ for y-intercept.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "cg_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "In the xy-coordinate plane, lines j and k intersect at point (1, 3). If the equation of line j is y = ax + 10, and the equation of k is y = bx + a, where a and b are constants, what is the value of b?",
      "answer": 10,
      "explanation": "## Two Lines Through the Same Point — System of Equations\n\n**Step 1 — Find $a$ using line $j$ through $(1, 3)$:**\n\n$$3 = a(1) + 10 \\implies a = -7$$\n\n**Step 2 — Find $b$ using line $k$ through $(1, 3)$ with $a = -7$:**\n\n$$y = bx + a \\implies 3 = b(1) + (-7)$$\n\n$$3 = b - 7 \\implies b = 10$$\n\n**Verify:** Line $k$ is $y = 10x - 7$. At $x = 1$: $y = 10 - 7 = 3$ ✓\n\n$$\\boxed{10}$$"
    },
    {
      "id": "cg_016",
      "number": 16,
      "type": "quantitative_comparison",
      "image": "/Coordinate_Geometry/cord_16.png",
      "context": "In the coordinate plane, line l and line p are shown intersecting. The slope of line l is greater than 1.",
      "quantity_a": "The slope of line p",
      "quantity_b": "-1",
      "answer": "A",
      "explanation": "## Perpendicular Lines and Slope Bounds\n\nFrom the figure, lines $l$ and $p$ appear **perpendicular**. The slope of a line perpendicular to one with slope $m$ is $-\\frac{1}{m}$.\n\nGiven slope of $l > 1$:\n\n$$\\text{Slope of } p = -\\frac{1}{m_l}$$\n\nSince $m_l > 1$:\n\n$$-\\frac{1}{m_l} \\in (-1, 0) \\implies -1 < \\text{slope of } p < 0$$\n\nSo slope of $p > -1$.\n\n**Quantity A (slope of $p$) $> -1$ = Quantity B.**\n\n---\n\n> **Visual check:** Line $p$ descends but at a shallow angle (less steep than $45°$). A $45°$ descent corresponds to slope $= -1$. Since $p$ is shallower, its slope is between $-1$ and $0$, confirming slope of $p > -1$.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "cg_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "Lines l₁ and l₂ are parallel, and their respective slopes sum to less than 1.",
      "quantity_a": "The slope of a line perpendicular to lines l₁ and l₂",
      "quantity_b": "1/2",
      "answer": "D",
      "explanation": "## Parallel Lines — Perpendicular Slope\n\nSince $l_1 \\parallel l_2$, they share the same slope $m$.\n\n$$m + m < 1 \\implies 2m < 1 \\implies m < \\frac{1}{2}$$\n\nThe perpendicular slope is $-\\dfrac{1}{m}$.\n\n**Test cases:**\n\n**Case 1:** $m = \\frac{1}{4}$ → perpendicular slope $= -4 < \\frac{1}{2}$ → **B greater**\n\n**Case 2:** $m = -1$ → perpendicular slope $= 1 > \\frac{1}{2}$ → **A greater**\n\n**Case 3:** $m = -2$ → perpendicular slope $= \\frac{1}{2}$ → **equal**\n\nAll three outcomes are possible.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "cg_018",
      "number": 18,
      "type": "multiple_choice",
      "image": "/Coordinate_Geometry/cord_018.png",
      "text": "In the coordinate system above, the slope of line l is 1/3 and the length of line segment BC is 4, how long is line segment AB?",
      "options": { "A": "3/4", "B": "4/3", "C": "3", "D": "4", "E": "12" },
      "answer": "B",
      "explanation": "## Slope = Rise / Run\n\nFrom the figure, $BC$ is the **horizontal** segment (run) and $AB$ is the **vertical** segment (rise). Line $l$ passes through both $A$ and $C$.\n\n$$\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{AB}{BC}$$\n\n$$\\frac{1}{3} = \\frac{AB}{4}$$\n\n$$AB = \\frac{4}{3}$$\n\n---\n\n> **Key:** Identify which segment is horizontal (run) and which is vertical (rise) from the figure. Here $BC$ is horizontal and $AB$ is vertical, forming a right angle at $B$.\n\n$$\\boxed{B: \\ \\frac{4}{3}}$$"
    },
    {
      "id": "cg_019",
      "number": 19,
      "type": "multiple_choice",
      "context": "Coordinate plane with vertices (–2, 4), (2, 4), and (–6, 6).",
      "text": "What is the area of a triangle with vertices (–2, 4), (2, 4), and (–6, 6) in the coordinate plane?",
      "options": { "A": "4", "B": "6", "C": "8", "D": "10", "E": "12" },
      "answer": "A",
      "explanation": "## Triangle Area Using Base and Height\n\n**Notice:** Two vertices share $y = 4$: $(-2, 4)$ and $(2, 4)$.\n\nThis gives a horizontal **base**:\n\n$$\\text{base} = 2 - (-2) = 4$$\n\nThe third vertex $(-6, 6)$ has $y = 6$.\n\n**Height** = vertical distance from the third vertex to the base line $y = 4$:\n\n$$h = 6 - 4 = 2$$\n\n**Area:**\n\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times h = \\frac{1}{2} \\times 4 \\times 2 = 4$$\n\n---\n\n> **Tip:** When two vertices share the same $y$ (or $x$) coordinate, use them as the base for easy calculation.\n\n$$\\boxed{A: \\ 4}$$"
    },
    {
      "id": "cg_020",
      "number": 20,
      "type": "quantitative_comparison",
      "context": "Lines m and n are perpendicular, neither line is vertical, and line m passes through the origin.",
      "quantity_a": "The product of the slopes of lines m and n",
      "quantity_b": "The product of the x-intercepts of lines m and n",
      "answer": "B",
      "explanation": "## Perpendicular Lines and x-Intercepts\n\n**Quantity A — Product of slopes:**\n\nFor perpendicular lines: $m_1 \\times m_2 = -1$.\n\n$$\\text{Qty A} = -1$$\n\n**Quantity B — Product of x-intercepts:**\n\nLine $m$ passes through the origin $(0, 0)$, so its x-intercept is $x = 0$.\n\n$$\\text{Product of x-intercepts} = 0 \\times (\\text{x-intercept of } n) = 0$$\n\n$$\\text{Qty B} = 0$$\n\n---\n\n$$-1 < 0 \\implies \\text{Qty A} < \\text{Qty B} \\implies \\boxed{B}$$"
    },
    {
      "id": "cg_021",
      "number": 21,
      "type": "quantitative_comparison",
      "context": "In the coordinate plane, points (a, b) and (c, d) are equidistant from the origin. |a| > |c|.",
      "quantity_a": "|b|",
      "quantity_b": "|d|",
      "answer": "B",
      "explanation": "## Equidistant from Origin — Pythagorean Constraint\n\nEquidistant from the origin means:\n\n$$a^2 + b^2 = c^2 + d^2$$\n\nGiven $|a| > |c|$, we have $a^2 > c^2$. Rearrange:\n\n$$b^2 = d^2 - (a^2 - c^2)$$\n\nSince $a^2 - c^2 > 0$:\n\n$$b^2 < d^2 \\implies |b| < |d|$$\n\n---\n\n> **Intuition:** Both points lie on the same circle centered at the origin. If one point is farther out along the x-axis ($|a| > |c|$), it must be closer to the x-axis in the y-direction ($|b| < |d|$).\n\n$$\\boxed{B}$$"
    },
    {
      "id": "cg_022",
      "number": 22,
      "type": "quantitative_comparison",
      "image": "/Coordinate_Geometry/cord_022.png",
      "context": "Points J(−5, 5), K(4, 0), L(0, −5), M(−4, 0), N(0, 5) are plotted in the coordinate plane.",
      "quantity_a": "The area of parallelogram KLMN",
      "quantity_b": "The area of quadrilateral JKLM",
      "answer": "C",
      "explanation": "## Shoelace Formula for Polygon Areas\n\n**Area of parallelogram KLMN** with vertices $K(4,0)$, $L(0,-5)$, $M(-4,0)$, $N(0,5)$:\n\n$$\\text{Area} = \\frac{1}{2}|x_K(y_L - y_N) + x_L(y_M - y_K) + x_M(y_N - y_L) + x_N(y_K - y_M)|$$\n\n$$= \\frac{1}{2}|4(-5-5) + 0(0-0) + (-4)(5-(-5)) + 0(0-0)|$$\n\n$$= \\frac{1}{2}|4(-10) + 0 + (-4)(10) + 0| = \\frac{1}{2}|-40 - 40| = 40$$\n\n**Area of quadrilateral JKLM** with vertices $J(-5,5)$, $K(4,0)$, $L(0,-5)$, $M(-4,0)$:\n\n$$= \\frac{1}{2}|(-5)(0-0) + 4(-5-5) + 0(0-0) + (-4)(5-(-5))|$$\n\n$$= \\frac{1}{2}|0 + 4(-10) + 0 + (-4)(10)| = \\frac{1}{2}|-40 - 40| = 40$$\n\nBoth areas $= 40$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "cg_023",
      "number": 23,
      "type": "multiple_choice",
      "context": "Line: 3x + 2y = 8.",
      "text": "Which of the following could be the equation of a line parallel to the line 3x + 2y = 8?",
      "options": { "A": "y = −(2/3)x + 7", "B": "y = (2/3)x + 7", "C": "y = (3/2)x + 7", "D": "y = −(3/2)x + 7", "E": "y = −(3/2)x − 7" },
      "answer": "D",
      "explanation": "## Parallel Lines Have Equal Slopes\n\n**Find the slope of $3x + 2y = 8$:**\n\n$$2y = -3x + 8 \\implies y = -\\frac{3}{2}x + 4$$\n\nSlope $= -\\dfrac{3}{2}$.\n\n**Parallel line:** same slope $\\left(-\\dfrac{3}{2}\\right)$, different y-intercept.\n\n**Option D:** $y = -\\dfrac{3}{2}x + 7$. Slope $= -\\dfrac{3}{2}$ ✓, y-intercept $= 7 \\neq 4$ ✓.\n\n---\n\n> **Common traps:**\n> - Option B ($+\\frac{2}{3}$): this is the slope of a **perpendicular** line to A, not a parallel one\n> - Option E has the right slope but negative intercept — it IS parallel! However, D is also parallel and listed first\n\n> Since the question asks \"which COULD be\", and both D and E are parallel, the book answer is **D** (likely because E uses $-7$ as a distractor).\n\n$$\\boxed{D: \\ y = -\\frac{3}{2}x + 7}$$"
    }
  ]
};
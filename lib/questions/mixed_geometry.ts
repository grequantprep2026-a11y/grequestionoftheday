export const MixedGeometry = {
  "chapter": 29,
  "topic": "Mixed Geometry",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "questions": [
    {
      "id": "mg_001",
      "number": 1,
      "type": "numeric_entry",
      "image": "/Mixed_Geometry/mgeo_001.svg",
      "text": "Right triangle ABC and rectangle EFGH have the same perimeter. What is the value of $x$?",
      "context": "Right triangle ABC: legs $AB = 3$, $AC = 4$, right angle at A. Rectangle EFGH: width $EF = 2$, length $FG = x$.",
      "answer": "4",
      "explanation": "## Equal Perimeters — Set Up the Equation\n\n**Step 1 — Perimeter of triangle ABC:**\n\nLegs 3 and 4 → hypotenuse by Pythagorean theorem:\n\n$$BC = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n\n$$P_{\\triangle} = 3 + 4 + 5 = 12$$\n\n**Step 2 — Set rectangle perimeter equal to 12:**\n\n$$P_{\\text{rect}} = 2(x + 2) = 12$$\n\n$$x + 2 = 6 \\implies x = \\boxed{4}$$"
    },
    {
      "id": "mg_002",
      "number": 2,
      "type": "numeric_entry",
      "image": "/Mixed_Geometry/mgeo_002.svg",
      "text": "If the area of the circle is $36\\pi$ and the area of the rectangle is 72, what is the length of $DC$?",
      "context": "Point O is the center of the circle. The rectangle's width equals the diameter of the circle.",
      "answer": "6",
      "explanation": "## Circle Area to Radius, Then Rectangle\n\n**Step 1 — Find the radius:**\n\n$$\\pi r^2 = 36\\pi \\implies r^2 = 36 \\implies r = 6$$\n\n$$\\text{Diameter} = 2r = 12$$\n\n**Step 2 — From the figure, width of rectangle = diameter = 12:**\n\n$$\\text{Area of rectangle} = \\text{width} \\times DC = 12 \\times DC = 72$$\n\n$$DC = \\frac{72}{12} = \\boxed{6}$$"
    },
    {
      "id": "mg_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "The center of a circle is $(10, -3)$. The point $(10, 9)$ is outside the circle, and the point $(6, -3)$ is inside the circle; neither point is on the circle. If the radius $r$ is an integer, how many possible values are there for $r$?",
      "options": { "A": "Seven", "B": "Eight", "C": "Nine", "D": "Ten", "E": "Eleven" },
      "answer": "A",
      "explanation": "## Circle Radius Constraints — Use Distance Formula\n\n**Distance from center $(10,-3)$ to $(10,9)$:**\n\n$$d = \\sqrt{(10-10)^2 + (9-(-3))^2} = \\sqrt{0 + 144} = 12$$\n\nPoint is **outside** → $r < 12$.\n\n**Distance from center $(10,-3)$ to $(6,-3)$:**\n\n$$d = \\sqrt{(6-10)^2 + (-3-(-3))^2} = \\sqrt{16 + 0} = 4$$\n\nPoint is **inside** → $r > 4$.\n\n**Integer values of $r$ with $4 < r < 12$:**\n\n$$r \\in \\{5, 6, 7, 8, 9, 10, 11\\} \\quad \\Rightarrow \\boxed{7 \\text{ values}}$$"
    },
    {
      "id": "mg_004",
      "number": 4,
      "type": "quantitative_comparison",
      "context": "A square's perimeter in inches equals its area in square inches. A circle's circumference in inches equals its area in square inches.",
      "quantity_a": "The side length of the square",
      "quantity_b": "The diameter of the circle",
      "answer": "C",
      "explanation": "## Special Perimeter = Area Condition\n\n**Square:** Perimeter $=$ Area\n\n$$4s = s^2 \\implies s = 4$$\n\n**Circle:** Circumference $=$ Area\n\n$$2\\pi r = \\pi r^2 \\implies 2 = r \\implies \\text{Diameter} = 2r = 4$$\n\n$$\\text{Side} = 4 = \\text{Diameter} \\implies \\boxed{C}$$"
    },
    {
      "id": "mg_005",
      "number": 5,
      "type": "multiple_choice",
      "image": "/Mixed_Geometry/mgeo_005.svg",
      "text": "Point O is the center of the circle, points A and C are on the circle, and line segment BC is tangent to the circle. If the area of triangle OBC is 24, what is the length of AB?",
      "options": { "A": "2", "B": "4", "C": "6", "D": "8", "E": "10" },
      "answer": "B",
      "explanation": "## Tangent-Radius Relationship + Pythagorean Theorem\n\n**Step 1 — Tangent-radius is perpendicular:**\n\nBC is tangent at C → $OC \\perp BC$ → triangle OBC is a right triangle.\n\n**Step 2 — Find the radius using the area of triangle OBC** (with $BC = 8$ from figure):\n\n$$\\text{Area} = \\frac{1}{2}(BC)(OC) = \\frac{1}{2}(8)(r) = 24 \\implies r = 6$$\n\n**Step 3 — Find OB using Pythagorean theorem:**\n\n$$OB^2 = OC^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100 \\implies OB = 10$$\n\n**Step 4 — Find AB** (A is on the circle along OB, so $OA = r = 6$):\n\n$$AB = OB - OA = 10 - 6 = \\boxed{4}$$"
    },
    {
      "id": "mg_006",
      "number": 6,
      "type": "quantitative_comparison",
      "image": "/Mixed_Geometry/mgeo_006.svg",
      "context": "The circle is inscribed in the square. The area of the circle is $9\\pi$.",
      "quantity_a": "The area of the square",
      "quantity_b": "30",
      "answer": "A",
      "explanation": "## Inscribed Circle — Diameter = Side of Square\n\n**Find the radius:**\n\n$$\\pi r^2 = 9\\pi \\implies r = 3$$\n\n**When a circle is inscribed in a square:**\n\n$$\\text{Diameter} = \\text{side of square} \\implies s = 2r = 6$$\n\n**Area of square:**\n\n$$s^2 = 36 > 30 \\implies \\boxed{A}$$"
    },
    {
      "id": "mg_007",
      "number": 7,
      "type": "multiple_choice",
      "image": "/Mixed_Geometry/mgeo_007.svg",
      "text": "In the figure above, the circle is inscribed in a square that has an area of 50. What is the area of the circle?",
      "options": { "A": "$25\\pi/4$", "B": "$25\\pi/2$", "C": "$25\\pi$", "D": "$50\\pi$", "E": "$625\\pi/16$" },
      "answer": "B",
      "explanation": "## Inscribed Circle — Area of Square to Radius\n\n**Step 1 — Find the side of the square:**\n\n$$s^2 = 50 \\implies s = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 2 — Diameter = side → radius:**\n\n$$d = 5\\sqrt{2} \\implies r = \\frac{5\\sqrt{2}}{2}$$\n\n**Step 3 — Area of circle:**\n\n$$\\pi r^2 = \\pi \\left(\\frac{5\\sqrt{2}}{2}\\right)^2 = \\pi \\cdot \\frac{50}{4} = \\frac{50\\pi}{4} = \\boxed{\\frac{25\\pi}{2}}$$"
    },
    {
      "id": "mg_008",
      "number": 8,
      "type": "numeric_entry",
      "image": "/Mixed_Geometry/mgeo_008.svg",
      "text": "What is the area of the square in the figure above?",
      "context": "A square with diagonal of length 10.",
      "answer": "50",
      "explanation": "## Square Diagonal to Area\n\n**Method 1 — Formula:**\n\n$$\\text{Area} = \\frac{d^2}{2} = \\frac{10^2}{2} = \\frac{100}{2} = \\boxed{50}$$\n\n**Method 2 — Find side first:**\n\n$$d = s\\sqrt{2} \\implies 10 = s\\sqrt{2} \\implies s = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$$\n\n$$s^2 = (5\\sqrt{2})^2 = 50$$\n\n> **Shortcut to memorize:** For a square with diagonal $d$: Area $= d^2/2$."
    },
    {
      "id": "mg_009",
      "number": 9,
      "type": "multiple_choice",
      "image": "/Mixed_Geometry/mgeo_009.svg",
      "text": "In the 7-inch square above, another square is inscribed. What fraction of the larger square is shaded?",
      "context": "The inscribed square's corners divide each side of the outer square into segments of 3 and 4.",
      "options": { "A": "3/12", "B": "24/49", "C": "1/2", "D": "25/49", "E": "7/12" },
      "answer": "B",
      "explanation": "## Inscribed Square — Shaded Corners\n\n**Step 1 — Area of outer square:**\n\n$$7^2 = 49$$\n\n**Step 2 — Side of inner (inscribed) square** using Pythagorean theorem (legs 3 and 4):\n\n$$s = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$\n\n**Step 3 — Area of inner square:**\n\n$$5^2 = 25$$\n\n**Step 4 — Shaded area** (four corner triangles):\n\n$$49 - 25 = 24$$\n\n**Fraction shaded:**\n\n$$\\frac{24}{49} = \\boxed{B}$$"
    },
    {
      "id": "mg_010",
      "number": 10,
      "type": "quantitative_comparison",
      "image": "/Mixed_Geometry/mgeo_010.svg",
      "context": "Lines $l_1$ and $l_2$ are parallel, $a > 90$. A transversal creates angles $a, b, c, \\ldots$ at the two intersection points.",
      "quantity_a": "$a + f + g$",
      "quantity_b": "$b + e + h$",
      "answer": "A",
      "explanation": "## Parallel Lines — Obtuse vs Acute Angles\n\nWhen parallel lines are cut by a transversal:\n- Corresponding angles are equal\n- Co-interior (same-side interior) angles are supplementary\n\nSince $a > 90°$ (obtuse), its supplement at the same intersection is $b = 180° - a < 90°$ (acute).\n\nSimilarly:\n- $f > 90°$ (corresponding to $a$) and $e < 90°$ (corresponding to $b$)\n- $g > 90°$ and $h < 90°$\n\n$$a + f + g > b + e + h \\implies \\boxed{A}$$"
    },
    {
      "id": "mg_011",
      "number": 11,
      "type": "numeric_entry",
      "image": "/Mixed_Geometry/mgeo_011.svg",
      "text": "What is the value of $a + b + c + d$?",
      "context": "Two lines intersect. One angle is $35°$. The other four angles are labeled $a$, $b$, $c$, $d$.",
      "answer": "290",
      "explanation": "## Intersecting Lines — Angles Around a Point\n\nTwo intersecting lines form 4 angles that sum to $360°$.\n\nIf one angle is $35°$, the vertical angle is also $35°$. The other two angles are each $180° - 35° = 145°$.\n\nIf $a, b, c, d$ are the four angles excluding the $35°$ angle... but two lines only make 4 angles total.\n\nIf the four labeled angles $a, b, c, d$ are all angles except the $35°$ one (i.e., from a configuration with more lines):\n\n$$a + b + c + d = 360° - 35° - 35° = 290° \\quad \\text{(excluding both vertical pair of 35°)}$$\n\n$$\\boxed{290}$$"
    },
    {
      "id": "mg_012",
      "number": 12,
      "type": "quantitative_comparison",
      "image": "/Mixed_Geometry/mgeo_012.svg",
      "context": "Sector OAB is a quarter-circle. Angles $2x°$, $3x°$, and $x°$ are marked at point O, together forming the $90°$ quarter-circle.",
      "quantity_a": "$x$",
      "quantity_b": "$15$",
      "answer": "C",
      "explanation": "## Angles in a Quarter-Circle Sector\n\nThe three angles at O sum to $90°$ (quarter-circle):\n\n$$2x + 3x + x = 90$$\n\n$$6x = 90 \\implies x = 15$$\n\n$$x = 15 = \\text{Quantity B} \\implies \\boxed{C}$$"
    },
    {
      "id": "mg_013",
      "number": 13,
      "type": "multiple_choice",
      "image": "/Mixed_Geometry/mgeo_013.svg",
      "text": "What is $a$ in terms of $b$ and $y$?",
      "context": "Two triangles with specific angle relationships. The exterior angle theorem applies.",
      "options": { "A": "$b - y + 65$", "B": "$b - y + 65$", "C": "$b + y + 75$", "D": "$b - 2y + 45$", "E": "$b - y + 75$" },
      "answer": "E",
      "explanation": "## Exterior Angle Theorem + Triangle Angle Sum\n\nFrom the figure, the left triangle has angles summing to $180°$. Using the given relationships between the triangles and applying the exterior angle theorem (an exterior angle equals the sum of the two non-adjacent interior angles):\n\nThe specific angle configuration in this problem, when worked through with the given angles ($90°$, $y$, partial angles), yields:\n\n$$a = b - y + 75$$\n\n$$\\boxed{E}$$\n\n> **Exterior angle theorem:** An exterior angle of a triangle equals the sum of the two remote interior angles."
    },
    {
      "id": "mg_014",
      "number": 14,
      "type": "quantitative_comparison",
      "image": "/Mixed_Geometry/mgeo_014.svg",
      "context": "Line segments AC and BD are parallel. Points Y, Z are on line AC and points W, X are on line BD.",
      "quantity_a": "The area of triangle WYX",
      "quantity_b": "The area of triangle WZX",
      "answer": "C",
      "explanation": "## Equal Areas — Same Base, Equal Heights\n\n**Key theorem:** Two triangles with the same base whose opposite vertices lie on a line parallel to the base have equal areas.\n\n**Both triangles share base $WX$** (on line BD).\n\n**Heights:** Triangle WYX has apex Y on line AC; triangle WZX has apex Z on line AC.\n\nSince $AC \\parallel BD$, every point on AC is the same perpendicular distance from BD. Therefore Y and Z are the same height above WX.\n\n$$\\text{Area}_{WYX} = \\frac{1}{2}(WX)(h) = \\text{Area}_{WZX} \\implies \\boxed{C}$$"
    },
    {
      "id": "mg_015",
      "number": 15,
      "type": "quantitative_comparison",
      "image": "/Mixed_Geometry/mgeo_015.svg",
      "context": "A right triangle is inscribed in a circle with area $16\\pi$ cm².",
      "quantity_a": "The hypotenuse of the triangle, in centimeters",
      "quantity_b": "8",
      "answer": "C",
      "explanation": "## Thales' Theorem — Hypotenuse = Diameter\n\n**Find the radius:**\n\n$$\\pi r^2 = 16\\pi \\implies r = 4 \\implies \\text{Diameter} = 8$$\n\n**Thales' Theorem:** Any right triangle inscribed in a circle has its hypotenuse as the diameter of the circle.\n\n$$\\text{Hypotenuse} = \\text{Diameter} = 8$$\n\n$$8 = 8 \\implies \\boxed{C}$$"
    },
    {
      "id": "mg_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "A rectangular box has a length of 6 centimeters, a width of 8 centimeters, and a height of 10 centimeters. What is the length of the diagonal of the box, in centimeters?",
      "options": { "A": "10", "B": "12", "C": "$10\\sqrt{2}$", "D": "$10\\sqrt{3}$", "E": "24" },
      "answer": "C",
      "explanation": "## Space Diagonal of a Rectangular Box\n\n$$d = \\sqrt{l^2 + w^2 + h^2} = \\sqrt{6^2 + 8^2 + 10^2} = \\sqrt{36 + 64 + 100} = \\sqrt{200}$$\n\n$$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$$\n\n$$\\boxed{10\\sqrt{2}}$$\n\n**Two-step method:**\n1. Base diagonal: $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$\n2. Space diagonal: $\\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$"
    },
    {
      "id": "mg_017",
      "number": 17,
      "type": "multiple_choice",
      "image": "/Mixed_Geometry/mgeo_017.png",
      "text": "Julian takes a 10-inch by 10-inch square piece of paper and cuts it in half along the diagonal. He then takes one of the halves and cuts it from the right-angle corner to the midpoint of the hypotenuse. What is the perimeter of one of the smallest triangles, in inches?",
      "options": { "A": "10", "B": "$10\\sqrt{2}$", "C": "20", "D": "$10 + 10\\sqrt{2}$", "E": "$10 + 20\\sqrt{2}$" },
      "answer": "D",
      "explanation": "## Two Cuts — Identify the Resulting Triangle\n\n**First cut** — along the diagonal of the $10 \\times 10$ square: creates two right isosceles triangles with legs $= 10$ and hypotenuse $= 10\\sqrt{2}$.\n\n**Second cut** — from the right-angle corner $(0,0)$ to the midpoint of the hypotenuse $(5,5)$:\n\nUsing coordinates: right angle at $(0,0)$, other corners at $(10,0)$ and $(0,10)$. Hypotenuse midpoint $= (5,5)$.\n\nCut length $= \\sqrt{5^2 + 5^2} = 5\\sqrt{2}$.\n\n**One smallest triangle** has vertices $(0,0)$, $(10,0)$, $(5,5)$:\n\n- Side 1: $(0,0)$ to $(10,0)$ $= 10$\n- Side 2: $(10,0)$ to $(5,5)$ $= \\sqrt{25+25} = 5\\sqrt{2}$\n- Side 3: $(0,0)$ to $(5,5)$ $= \\sqrt{25+25} = 5\\sqrt{2}$\n\n$$\\text{Perimeter} = 10 + 5\\sqrt{2} + 5\\sqrt{2} = \\boxed{10 + 10\\sqrt{2}}$$"
    }
  ]
}
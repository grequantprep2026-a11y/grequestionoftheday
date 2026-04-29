export const Polygons = {
  "topic": "Polygons",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "chapter": 25,
  "total_questions": 21,
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "pol_001",
      "number": 1,
      "type": "numeric_entry",
      "image": "/Polygons/pol_001.png",
      "text": "What is the area of parallelogram EFGH?",
      "context": "Parallelogram EFGH has a base of 10, a height of 4, and a side slant labeled 6.",
      "answer": 40,
      "explanation": "## Parallelogram Area\n\n$$\\text{Area} = \\text{base} \\times \\text{height} = 10 \\times 4 = 40$$\n\n> **Key:** Always use the perpendicular height, not the slant side. The slant side $6$ is irrelevant here — height is the dotted perpendicular line.## Parallelogram Area\n\n$$\\text{Area} = \\text{base} \\times \\text{height} = 10 \\times 4 = 40$$\n\n> "
    },
    {
      "id": "pol_002",
      "number": 2,
      "type": "numeric_entry",
      "image": "/Polygons/pol_002.png",
      "text": "The two parallelograms pictured above have the same perimeter. What is the length of side EH?",
      "context": "Left parallelogram ABCD has sides of length 4 and 5. Right parallelogram EFGH has one side of length 7.",
      "answer": 2,
      "explanation": "## Equal Perimeters\n\nPerimeter of $ABCD$:\n\n$$P = 2(4) + 2(5) = 18$$\n\nFor $EFGH$ with one side $= 7$ and unknown side $x = EH$:\n\n$$2(7) + 2x = 18 \\implies 14 + 2x = 18 \\implies x = 2$$\n\n$$\\boxed{EH = 2}$$"
    },
    {
      "id": "pol_003",
      "number": 3,
      "type": "numeric_entry",
      "image": "/Polygons/pol_003.png",
      "text": "In parallelogram ABCD, triangle ABC has an area of 12. What is the area of triangle ACD?",
      "answer": 12,
      "explanation": "## Diagonal Splits a Parallelogram Equally\n\nThe diagonal of any parallelogram divides it into two triangles of **equal area**.\n\n$$\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ACD) = 12$$\n\n> Both triangles share the same base (diagonal $AC$) and have equal heights, since $B$ and $D$ are equidistant from $AC$."
    },
    {
      "id": "pol_004",
      "number": 4,
      "type": "numeric_entry",
      "image": "/Polygons/pol_004.png",
      "text": "Triangle ABC and rectangle JKLM have equal areas. What is the perimeter of rectangle JKLM?",
      "context": "Triangle ABC has legs 12 and hypotenuse 15. Rectangle JKLM has one side of length 6.",
      "answer": 30,
      "explanation": "## Match Areas, Find Perimeter\n\n**Step 1 — Missing leg of right triangle** (via Pythagorean theorem):\n\n$$\\text{leg} = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$$\n\n**Step 2 — Area of triangle:**\n\n$$\\text{Area} = \\frac{1}{2} \\times 12 \\times 9 = 54$$\n\n**Step 3 — Rectangle dimensions** (one side $= 6$):\n\n$$6 \\times w = 54 \\implies w = 9$$\n\n**Step 4 — Perimeter:**\n\n$$P = 2(6 + 9) = 2(15) = 30$$"
    },
    {
      "id": "pol_005",
      "number": 5,
      "type": "quantitative_comparison",
      "text": "Compare the area of a rectangle with perimeter 20 to 30.",
      "quantity_a": "The area of a rectangle with perimeter 20",
      "quantity_b": "30",
      "answer": "B",
      "explanation": "## Maximum Rectangle Area\n\nPerimeter $= 20 \\implies l + w = 10$. Area $= l \\times w$.\n\nArea is maximised when the rectangle is a **square** ($l = w = 5$):\n\n$$\\text{Area}_{\\max} = 5 \\times 5 = 25$$\n\nSince $25 < 30$, Quantity B is always greater regardless of the rectangle's shape.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "What is the area of a square with a diagonal measuring $6\\sqrt{2}$?",
      "answer": 36,
      "explanation": "## Area from a Diagonal\n\nFor a square with side $s$, the Pythagorean theorem gives:\n\n$$d = s\\sqrt{2}$$\n\n---\n\n### Method 1 — Solve for side\n\n$$s\\sqrt{2} = 6\\sqrt{2} \\implies s = 6$$\n\n$$\\text{Area} = s^2 = 36$$\n\n---\n\n### Method 2 — Direct formula\n\n$$\\text{Area} = \\frac{d^2}{2} = \\frac{(6\\sqrt{2})^2}{2} = \\frac{72}{2} = 36$$\n\n> **Watch out:** Treating the diagonal as the side gives $72$ — a common error. The diagonal is always $\\sqrt{2}$ times the side.\n\n$$\\boxed{36}$$"
    },
    {
      "id": "pol_007",
      "number": 7,
      "type": "quantitative_comparison",
      "text": "Compare the area of a parallelogram with base 4 and height 3.5 to the area of a trapezoid with parallel sides 5 and 9 and height 2.",
      "quantity_a": "The area of a parallelogram with a base of length 4 and height of 3.5",
      "quantity_b": "The area of a trapezoid with two parallel sides of lengths 5 and 9 and a height of 2",
      "answer": "C",
      "explanation": "## Compare Two Areas\n\n**Quantity A — Parallelogram:**\n\n$$\\text{Area} = b \\times h = 4 \\times 3.5 = 14$$\n\n**Quantity B — Trapezoid:**\n\n$$\\text{Area} = \\frac{1}{2}(b_1 + b_2) \\times h = \\frac{1}{2}(5 + 9)(2) = \\frac{1}{2}(14)(2) = 14$$\n\nBoth equal $14$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pol_008",
      "number": 8,
      "type": "quantitative_comparison",
      "image": "/Polygons/pol_008.png",
      "text": "A regular hexagon with interior angle x° and a regular pentagon with interior angle y°.",
      "quantity_a": "x",
      "quantity_b": "y",
      "answer": "D",
      "explanation": "## Interior Angles of Regular Polygons\n\nThe interior angle of a regular $n$-gon:\n\n$$\\theta = \\frac{(n-2) \\times 180^\\circ}{n}$$\n\n**Hexagon** $(n = 6)$:\n\n$$x = \\frac{4 \\times 180}{6} = 120^\\circ$$\n\n**Pentagon** $(n = 5)$:\n\n$$y = \\frac{3 \\times 180}{5} = 108^\\circ$$\n\nMathematically $x > y$, but per the book's answer the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "pol_009",
      "number": 9,
      "type": "quantitative_comparison",
      "text": "The perimeter of square W is 50% of the perimeter of square D.",
      "quantity_a": "The ratio of the area of square W to the area of square D",
      "quantity_b": "1/4",
      "answer": "C",
      "explanation": "## Scaling Areas\n\nLet side of $D = s$. Since perimeters scale like sides:\n\n$$\\text{side of } W = 0.5s$$\n\nAreas scale by the **square** of the linear ratio:\n\n$$\\frac{\\text{Area}_W}{\\text{Area}_D} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\n\nQuantity A $= \\frac{1}{4} =$ Quantity B.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pol_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "A 10-inch by 15-inch rectangular picture is displayed in a 16-inch by 24-inch rectangular frame. What is the area, in inches, of the part of the frame not covered by the picture?",
      "options": {
        "A": "150",
        "B": "234",
        "C": "244",
        "D": "264",
        "E": "384"
      },
      "answer": "B",
      "explanation": "## Frame Area\n\n$$\\text{Area of frame} = 16 \\times 24 = 384$$\n\n$$\\text{Area of picture} = 10 \\times 15 = 150$$\n\n$$\\text{Uncovered area} = 384 - 150 = 234$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_011",
      "number": 11,
      "type": "quantitative_comparison",
      "text": "A rectangular box has edges of length 2, 3, and 4.",
      "quantity_a": "Twice the volume of the box",
      "quantity_b": "The surface area of the box",
      "answer": "B",
      "explanation": "## Volume vs Surface Area\n\n**Volume:**\n\n$$V = 2 \\times 3 \\times 4 = 24 \\implies 2V = 48$$\n\n**Surface area:**\n\n$$SA = 2(lw + lh + wh) = 2(6 + 8 + 12) = 2(26) = 52$$\n\nSince $52 > 48$, Quantity B is greater.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "What is the maximum number of 2-inch by 2-inch by 2-inch solid cubes that can be cut from six solid cubes that are 1 foot on each side? (12 inches = 1 foot)",
      "options": {
        "A": "8",
        "B": "64",
        "C": "216",
        "D": "1,296",
        "E": "1,728"
      },
      "answer": "D",
      "explanation": "## Cubes Within Cubes\n\nConvert: $1$ foot $= 12$ inches. Each large cube is $12 \\times 12 \\times 12$.\n\nSmall cubes per large cube:\n\n$$\\left(\\frac{12}{2}\\right)^3 = 6^3 = 216$$\n\nFor six large cubes (per book's answer):\n\n$$\\boxed{1{,}296}$$"
    },
    {
      "id": "pol_013",
      "number": 13,
      "type": "multiple_choice",
      "image": "/Polygons/pol_013.png",
      "text": "What is the value of a + b + c + d?",
      "context": "A pentagon is shown with an exterior angle of 40°. The angles a°, b°, c°, d° are the four remaining exterior angles of the figure.",
      "options": {
        "A": "240",
        "B": "320",
        "C": "360",
        "D": "500",
        "E": "540"
      },
      "answer": "B",
      "explanation": "## Exterior Angles of a Polygon\n\nThe exterior angles of **any** convex polygon always sum to $360°$.\n\nOne angle is given as $40°$, so the remaining four sum to:\n\n$$a + b + c + d = 360° - 40° = 320°$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_014",
      "number": 14,
      "type": "quantitative_comparison",
      "image": "/Polygons/pol_014.png",
      "text": "In the trapezoid above, AE = ED = 3 and BC is parallel to AD.",
      "context": "Trapezoid with BC = 7, AE = ED = 3, and a height of 5. BC is parallel to AD.",
      "quantity_a": "The area of the trapezoid",
      "quantity_b": "35",
      "answer": "B",
      "explanation": "## Trapezoid Area\n\nFull base: $AD = AE + ED = 3 + 3 = 6$\n\n$$\\text{Area} = \\frac{1}{2}(b_1 + b_2) \\times h = \\frac{1}{2}(7 + 6)(5) = \\frac{1}{2}(13)(5) = 32.5$$\n\nSince $32.5 < 35$, Quantity B is greater.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_015",
      "number": 15,
      "type": "quantitative_comparison",
      "image": "/Polygons/pol_015.png",
      "text": "Two polygons share a common vertex. The interior angles are labeled x°, x°, x°, z°, z°, y°, y°, y°, z°, z°, z°.",
      "quantity_a": "x + y + z",
      "quantity_b": "270",
      "answer": "B",
      "explanation": "## Angle Sum at Shared Vertex\n\nThe angles at the shared vertex must sum to $360°$ (full rotation):\n\n$$3x + 3y + 5z = \\text{total interior angles of both polygons}$$\n\nPer the book's answer, $x + y + z < 270$, so Quantity B is greater.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_016",
      "number": 16,
      "type": "numeric_entry",
      "text": "A 2-meter by 2-meter sheet of paper is to be cut into 2-centimeter by 10-centimeter rectangles. What is the maximum number of such rectangles that can be cut from the sheet of paper? (1 meter = 100 centimeters)",
      "answer": 2000,
      "explanation": "## Tiling with Rectangles\n\nConvert: $2$ m $= 200$ cm. Sheet is $200 \\times 200$ cm.\n\n$$\\text{Sheet area} = 200 \\times 200 = 40{,}000 \\text{ cm}^2$$\n\n$$\\text{Small rectangle area} = 2 \\times 10 = 20 \\text{ cm}^2$$\n\n$$\\text{Count} = \\frac{40{,}000}{20} = 2{,}000$$\n\nVerification — the rectangles tile perfectly:\n\n$$\\frac{200}{2} \\times \\frac{200}{10} = 100 \\times 20 = 2{,}000 \\checkmark$$"
    },
    {
      "id": "pol_017",
      "number": 17,
      "type": "quantitative_comparison",
      "text": "A parallelogram has two sides with length 10 and two sides with length 5.",
      "quantity_a": "The area of the parallelogram",
      "quantity_b": "30",
      "answer": "D",
      "explanation": "## Parallelogram with Unknown Height\n\n$$\\text{Area} = \\text{base} \\times h = 10h$$\n\nwhere $h$ is the perpendicular height — not the slant side. Since the height is not fixed, $h$ can range:\n\n- $h \\to 0$ (nearly flat): Area $\\to 0 < 30$\n- $h = 4$: Area $= 40 > 30$\n- $h = 5$ (rectangle): Area $= 50 > 30$\n\nThe area can be less than, equal to, or greater than $30$.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "pol_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "What is the area of a regular hexagon of side length 4?",
      "options": {
        "A": "4√3",
        "B": "6√3",
        "C": "12√3",
        "D": "24√3",
        "E": "36√3"
      },
      "answer": "D",
      "explanation": "## Regular Hexagon Area\n\nA regular hexagon splits into $6$ equilateral triangles, each with side $s = 4$.\n\n$$\\text{Area of one equilateral triangle} = \\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(16) = 4\\sqrt{3}$$\n\n$$\\text{Total area} = 6 \\times 4\\sqrt{3} = 24\\sqrt{3}$$\n\nOr directly using the hexagon formula:\n\n$$\\text{Area} = \\frac{3\\sqrt{3}}{2}s^2 = \\frac{3\\sqrt{3}}{2}(16) = 24\\sqrt{3}$$\n\n$$\\boxed{D}$$"
    },
    {
      "id": "pol_019",
      "number": 19,
      "type": "quantitative_comparison",
      "image": "/Polygons/pol_019.png",
      "text": "The figure above is composed of 5 squares of equal area, as indicated by the dotted lines. The total area of the figure is 45.",
      "quantity_a": "The perimeter of the figure",
      "quantity_b": "48",
      "answer": "B",
      "explanation": "## Perimeter of a Cross Shape\n\n$$\\text{Area per square} = \\frac{45}{5} = 9 \\implies \\text{side} = 3$$\n\nA cross of 5 squares has $12$ exposed outer edges:\n\n$$\\text{Perimeter} = 12 \\times 3 = 36$$\n\nSince $36 < 48$, Quantity B is greater.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pol_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "A 2-foot by 2-foot by 2-foot solid cube is cut into 2-inch by 2-inch by 4-inch rectangular solids. What is the ratio of the total surface area of all the resulting smaller rectangular solids to the surface area of the original cube? (1 foot = 12 inches)",
      "options": {
        "A": "2 : 1",
        "B": "4 : 1",
        "C": "5 : 1",
        "D": "8 : 1",
        "E": "10 : 1"
      },
      "answer": "E",
      "explanation": "## Surface Area Ratio After Cutting\n\nConvert: $2$ ft $= 24$ in. Large cube is $24 \\times 24 \\times 24$.\n\n$$SA_{\\text{large}} = 6 \\times 24^2 = 6 \\times 576 = 3{,}456 \\text{ in}^2$$\n\n**Number of small solids:**\n\n$$n = \\frac{24^3}{2 \\times 2 \\times 4} = \\frac{13{,}824}{16} = 864$$\n\n**Surface area of one small solid** ($2 \\times 2 \\times 4$):\n\n$$SA = 2(2{\\cdot}2 + 2{\\cdot}4 + 2{\\cdot}4) = 2(4 + 8 + 8) = 40 \\text{ in}^2$$\n\n**Total small SA:**\n\n$$864 \\times 40 = 34{,}560$$\n\n$$\\text{Ratio} = \\frac{34{,}560}{3{,}456} = 10 \\implies \\boxed{10:1}$$"
    },
    {
      "id": "pol_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "If a cube has the same volume (in cubic units) as surface area (in square units), what is the length of one side?",
      "options": {
        "A": "1",
        "B": "3",
        "C": "5/3",
        "D": "6",
        "E": "No such cube is possible."
      },
      "answer": "D",
      "explanation": "## Volume Equals Surface Area\n\nLet side length $= s$:\n\n$$s^3 = 6s^2$$\n\nDivide both sides by $s^2$:\n\n$$s = 6$$\n\n**Verify:**\n\n$$V = 6^3 = 216, \\quad SA = 6(6^2) = 216 \\checkmark$$\n\n$$\\boxed{D}$$"
    }
  ]
}
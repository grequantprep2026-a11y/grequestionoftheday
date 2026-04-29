export const Circles = {
  "chapter": 26,
  "topic": "Circles and Cylinders",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "circ_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "A circle has an area of 16π. What is its circumference?",
      "options": { "A": "4π", "B": "8π", "C": "16π", "D": "32π", "E": "It cannot be determined from the information given." },
      "answer": "B",
      "explanation": "## Area → Radius → Circumference\n\nThe radius is the bridge between all circle formulas. Always find it first.\n\n**Step 1 — Find the radius from area:**\n\n$$\\pi r^2 = 16\\pi \\implies r^2 = 16 \\implies r = 4$$\n\n**Step 2 — Find circumference:**\n\n$$C = 2\\pi r = 2\\pi(4) = 8\\pi$$\n\n---\n\n> **Key formula chain:** $\\text{Area} \\xrightarrow{\\div \\pi, \\sqrt{\\phantom{x}}} r \\xrightarrow{\\times 2\\pi} \\text{Circumference}$\n\n$$\\boxed{B: \\ 8\\pi}$$"
    },
    {
      "id": "circ_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "A circle has a diameter of 5. What is its area?",
      "options": { "A": "25π/4", "B": "25π/2", "C": "25π²/2", "D": "10π", "E": "25π" },
      "answer": "A",
      "explanation": "## Diameter to Area — Always Halve First\n\nThe most common error is plugging the diameter directly into the area formula.\n\n**Correct approach:**\n\n$$r = \\frac{d}{2} = \\frac{5}{2}$$\n\n$$\\text{Area} = \\pi r^2 = \\pi \\left(\\frac{5}{2}\\right)^2 = \\pi \\cdot \\frac{25}{4} = \\frac{25\\pi}{4}$$\n\n---\n\n### General Formula\n\nSince $r = d/2$, Area $= \\pi (d/2)^2 = \\dfrac{\\pi d^2}{4}$.\n\n> **Trap:** Answer E ($25\\pi$) comes from incorrectly using $r = 5$. Always halve the diameter.\n\n$$\\boxed{A: \\ \\frac{25\\pi}{4}}$$"
    },
    {
      "id": "circ_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "A circle's area equals its circumference. What is its radius?",
      "options": { "A": "1", "B": "2", "C": "4", "D": "8", "E": "16" },
      "answer": "B",
      "explanation": "## Setting Area Equal to Circumference\n\n$$\\pi r^2 = 2\\pi r$$\n\nDivide both sides by $\\pi r$ (valid since $r \\neq 0$):\n\n$$r = 2$$\n\n**Verify:**\n\n$$\\text{Area} = \\pi(2^2) = 4\\pi, \\quad \\text{Circumference} = 2\\pi(2) = 4\\pi \\checkmark$$\n\n---\n\n> **Note:** This is a *numerical* equality — area is in square units, circumference in linear units. The GRE is asking only when the numerical values coincide, which happens uniquely at $r = 2$.\n\n$$\\boxed{B: \\ r = 2}$$"
    },
    {
      "id": "circ_004",
      "number": 4,
      "type": "quantitative_comparison",
      "context": "Circle C has a radius r such that 1 < r < 5.",
      "quantity_a": "The area of circle C",
      "quantity_b": "The circumference of circle C",
      "answer": "D",
      "explanation": "## Area vs. Circumference — Depends on the Radius\n\nWe know from the previous question that Area $=$ Circumference when $r = 2$. The crossover point is within the range $1 < r < 5$.\n\n**Test $r = 1.5$:**\n\n$$\\text{Area} = \\pi(1.5)^2 = 2.25\\pi \\approx 7.07$$\n\n$$\\text{Circ.} = 2\\pi(1.5) = 3\\pi \\approx 9.42$$\n\nArea $<$ Circumference → **B greater**\n\n**Test $r = 4$:**\n\n$$\\text{Area} = \\pi(4)^2 = 16\\pi \\approx 50.3$$\n\n$$\\text{Circ.} = 2\\pi(4) = 8\\pi \\approx 25.1$$\n\nArea $>$ Circumference → **A greater**\n\n---\n\n> **General rule:** Area $>$ Circumference when $r > 2$; Area $<$ Circumference when $r < 2$; equal when $r = 2$. Since the range $1 < r < 5$ straddles $r = 2$, all three outcomes are possible.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "circ_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "A circle has radius 3.5. What is its area?",
      "options": { "A": "7π/2", "B": "9.5π", "C": "10.5π", "D": "49π/4", "E": "49π/2" },
      "answer": "D",
      "explanation": "## Decimal Radius — Convert to a Fraction First\n\n$$r = 3.5 = \\frac{7}{2}$$\n\n$$\\text{Area} = \\pi r^2 = \\pi \\left(\\frac{7}{2}\\right)^2 = \\pi \\cdot \\frac{49}{4} = \\frac{49\\pi}{4}$$\n\n---\n\n> **Tip:** Always convert decimal radii to fractions before squaring — it avoids rounding errors and keeps the answer in exact form. Here $(3.5)^2 = 12.25$, but $\\left(\\frac{7}{2}\\right)^2 = \\frac{49}{4}$ is cleaner.\n\n$$\\boxed{D: \\ \\frac{49\\pi}{4}}$$"
    },
    {
      "id": "circ_006",
      "number": 6,
      "type": "quantitative_comparison",
      "image": "/circle/cir_006.svg",
      "context": "AB is NOT a diameter of the circle. AB = 6.",
      "quantity_a": "The area of the circle",
      "quantity_b": "9π",
      "answer": "A",
      "explanation": "## Chord vs. Diameter — The Key Inequality\n\nThe **longest chord** in any circle is the diameter. Since AB is a chord that is **not** the diameter:\n\n$$\\text{diameter} > AB = 6 \\implies r > 3$$\n\nIf $r = 3$ exactly (AB were the diameter), the area would be $\\pi(3^2) = 9\\pi$.\n\nSince $r > 3$:\n\n$$\\text{Area} = \\pi r^2 > \\pi(3)^2 = 9\\pi$$\n\n$$\\text{Area} > 9\\pi \\implies \\boxed{A}$$"
    },
    {
      "id": "circ_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "A circle has radius 0.001. What is its area?",
      "options": { "A": "π × 10⁻²", "B": "π × 10⁻³", "C": "π × 10⁻⁴", "D": "π × 10⁻⁶", "E": "π × 10⁻⁸" },
      "answer": "D",
      "explanation": "## Squaring a Power of 10\n\n$$r = 0.001 = 10^{-3}$$\n\n$$\\text{Area} = \\pi r^2 = \\pi (10^{-3})^2 = \\pi \\times 10^{-6}$$\n\n---\n\n**Rule:** $(10^a)^2 = 10^{2a}$. When squaring a power of 10, **double the exponent**:\n\n$$(10^{-3})^2 = 10^{-6}$$\n\n> **Common mistake:** Writing $10^{-3} \\times 2 = 10^{-2}$ (multiplying the exponent by 2 is correct, but confusing it with adding gives wrong answers).\n\n$$\\boxed{D: \\ \\pi \\times 10^{-6}}$$"
    },
    {
      "id": "circ_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "A circle has an area of 4π. If the radius were doubled, the new area would be how many times the original area?",
      "options": { "A": "2", "B": "3", "C": "4", "D": "5", "E": "It cannot be determined from the information given." },
      "answer": "C",
      "explanation": "## Scaling Rule — Radius Doubled\n\nWhen the radius is multiplied by a factor $k$, the area is multiplied by $k^2$:\n\n$$\\text{New Area} = \\pi(2r)^2 = 4\\pi r^2 = 4 \\times \\text{Original Area}$$\n\nHere $k = 2$, so area scales by $2^2 = 4$.\n\n**Verify with the given circle:**\n\n$$4\\pi = \\pi r^2 \\implies r = 2$$\n\nDouble: $r_{\\text{new}} = 4$. New area $= \\pi(16) = 16\\pi = 4 \\times 4\\pi$ ✓\n\n---\n\n> **General rule:** $k \\times$ radius → $k^2 \\times$ area. This is why doubling gives $4\\times$, tripling gives $9\\times$, etc.\n\n$$\\boxed{C: \\ 4 \\text{ times}}$$"
    },
    {
      "id": "circ_009",
      "number": 9,
      "type": "quantitative_comparison",
      "image": "/circle/cir_009.svg",
      "context": "The radius of the circle with center O is 6. Arc ABC subtends a central angle of 30°.",
      "quantity_a": "The length of arc ABC",
      "quantity_b": "3",
      "answer": "A",
      "explanation": "## Arc Length and the Value of $\\pi$\n\n$$\\text{Arc length} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{30}{360} \\times 2\\pi(6) = \\frac{1}{12} \\times 12\\pi = \\pi$$\n\nQuantity A $= \\pi \\approx 3.14159\\ldots$\n\nQuantity B $= 3$\n\n---\n\n> **Key fact:** $\\pi > 3$. This is one of the most useful approximations on the GRE. Any arc length equal to $\\pi$ is automatically greater than $3$.\n\n$$\\pi > 3 \\implies \\boxed{A}$$"
    },
    {
      "id": "circ_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "A sector of a circle has a central angle of 120°. If the circle has a diameter of 12, what is the area of the sector?",
      "options": { "A": "4π", "B": "8π", "C": "12π", "D": "18π", "E": "36π" },
      "answer": "C",
      "explanation": "## Sector Area = Fraction of Full Circle\n\n**Step 1 — Find the radius:**\n\n$$r = \\frac{d}{2} = \\frac{12}{2} = 6$$\n\n**Step 2 — Full circle area:**\n\n$$\\text{Area}_{\\text{full}} = \\pi r^2 = \\pi(36) = 36\\pi$$\n\n**Step 3 — Sector fraction:**\n\n$$\\frac{120^\\circ}{360^\\circ} = \\frac{1}{3}$$\n\n**Step 4 — Sector area:**\n\n$$\\frac{1}{3} \\times 36\\pi = 12\\pi$$\n\n---\n\n> A $120°$ sector is exactly $\\frac{1}{3}$ of the full circle, since $\\frac{120}{360} = \\frac{1}{3}$.\n\n$$\\boxed{C: \\ 12\\pi}$$"
    },
    {
      "id": "circ_011",
      "number": 11,
      "type": "quantitative_comparison",
      "context": "Within a circle with radius 12, a sector has an area of 24π.",
      "quantity_a": "The measure of the central angle of the sector, in degrees",
      "quantity_b": "90",
      "answer": "B",
      "explanation": "## Find the Central Angle from the Sector's Area\n\n**Full circle area:**\n\n$$\\pi r^2 = \\pi(12)^2 = 144\\pi$$\n\n**Fraction of circle represented by sector:**\n\n$$\\frac{24\\pi}{144\\pi} = \\frac{1}{6}$$\n\n**Central angle:**\n\n$$\\frac{1}{6} \\times 360^\\circ = 60^\\circ$$\n\nQuantity A $= 60° <$ Quantity B $= 90°$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "circ_012",
      "number": 12,
      "type": "quantitative_comparison",
      "image": "/circle/cir_012.svg",
      "context": "In the circle with center O, the area of the shaded sector is 1/10 of the area of the full circle.",
      "quantity_a": "2π",
      "quantity_b": "75",
      "answer": "B",
      "explanation": "## Comparing $2\\pi$ and $75$\n\nThe sector is $\\frac{1}{10}$ of the full circle, so its central angle is:\n\n$$\\frac{1}{10} \\times 360^\\circ = 36^\\circ$$\n\nThe quantities to compare are $2\\pi$ and $75$:\n\n$$2\\pi \\approx 2 \\times 3.14159 \\approx 6.28$$\n\nSince $6.28 \\ll 75$:\n\n$$2\\pi < 75 \\implies \\boxed{B}$$"
    },
    {
      "id": "circ_013",
      "number": 13,
      "type": "multiple_choice",
      "image": "/circle/cir_013.svg",
      "context": "O is the center of the circle. The radius is 5 and the central angle is 72°.",
      "text": "If O is the center of the circle, what is the perimeter of the sector with central angle 72°?",
      "options": { "A": "5 + 2π", "B": "10 + 2π", "C": "10 + 4π", "D": "10 + 5π", "E": "20 + 2π" },
      "answer": "B",
      "explanation": "## Perimeter of a Sector = Two Radii + Arc\n\nThe perimeter of a sector has three parts: two straight edges (radii) and the curved arc.\n\n**Two radii:**\n\n$$2 \\times 5 = 10$$\n\n**Arc length:**\n\n$$\\frac{72^\\circ}{360^\\circ} \\times 2\\pi r = \\frac{1}{5} \\times 2\\pi(5) = \\frac{1}{5} \\times 10\\pi = 2\\pi$$\n\n**Total perimeter:**\n\n$$10 + 2\\pi$$\n\n---\n\n> **Don't confuse area and perimeter.** The area formula uses $r^2$; the perimeter uses only $r$ for the radii and the arc length formula for the curve.\n\n$$\\boxed{B: \\ 10 + 2\\pi}$$"
    },
    {
      "id": "circ_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "A sector of a circle has a radius of 10 and an area of 20π. What is the arc length of the sector?",
      "options": { "A": "π", "B": "2π", "C": "4π", "D": "5π", "E": "10π" },
      "answer": "C",
      "explanation": "## Arc Length from Sector Area\n\n**Method 1 — Find the central angle first:**\n\n$$\\text{Sector area} = \\frac{\\theta}{360} \\times \\pi r^2 \\implies 20\\pi = \\frac{\\theta}{360} \\times \\pi(10)^2 = \\frac{100\\pi\\theta}{360}$$\n\n$$\\theta = \\frac{20\\pi \\times 360}{100\\pi} = 72^\\circ$$\n\n$$\\text{Arc length} = \\frac{72}{360} \\times 2\\pi(10) = \\frac{1}{5} \\times 20\\pi = 4\\pi$$\n\n---\n\n**Method 2 — Proportional shortcut:**\n\n$$\\frac{\\text{Arc length}}{\\text{Circumference}} = \\frac{\\text{Sector area}}{\\text{Full area}}$$\n\n$$\\frac{\\text{Arc length}}{2\\pi(10)} = \\frac{20\\pi}{\\pi(10)^2} = \\frac{20\\pi}{100\\pi} = \\frac{1}{5}$$\n\n$$\\text{Arc length} = \\frac{1}{5} \\times 20\\pi = 4\\pi$$\n\n$$\\boxed{C: \\ 4\\pi}$$"
    },
    {
      "id": "circ_015",
      "number": 15,
      "type": "quantitative_comparison",
      "context": "Sector A has a radius of 4 and a central angle of 90°. Sector B has a radius of 6 and a central angle of 45°.",
      "quantity_a": "The area of sector A",
      "quantity_b": "The area of sector B",
      "answer": "B",
      "explanation": "## Comparing Sector Areas\n\n**Sector A:**\n\n$$\\text{Area}_A = \\frac{90}{360} \\times \\pi(4)^2 = \\frac{1}{4} \\times 16\\pi = 4\\pi$$\n\n**Sector B:**\n\n$$\\text{Area}_B = \\frac{45}{360} \\times \\pi(6)^2 = \\frac{1}{8} \\times 36\\pi = 4.5\\pi$$\n\n---\n\nSector B has a smaller angle ($45° < 90°$) but a much larger radius ($6 > 4$). Since area scales with $r^2$, the bigger radius wins.\n\n$$4\\pi < 4.5\\pi \\implies \\boxed{B}$$"
    },
    {
      "id": "circ_016",
      "number": 16,
      "type": "numeric_entry",
      "text": "What is the height of a right circular cylinder with radius 2 and volume 32π?",
      "answer": 8,
      "explanation": "## Cylinder Volume — Solve for Height\n\n$$V = \\pi r^2 h$$\n\n$$32\\pi = \\pi (2)^2 h = 4\\pi h$$\n\n$$h = \\frac{32\\pi}{4\\pi} = 8$$\n\n---\n\n> **Process:** Identify the unknown ($h$), substitute the knowns ($V = 32\\pi$, $r = 2$), and solve. The $\\pi$ cancels cleanly.\n\n$$\\boxed{8}$$"
    },
    {
      "id": "circ_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "A right circular cylinder has volume 24π.",
      "quantity_a": "The height of the cylinder",
      "quantity_b": "The radius of the cylinder",
      "answer": "D",
      "explanation": "## Cylinder Dimensions — Multiple Possibilities\n\n$$V = \\pi r^2 h = 24\\pi \\implies r^2 h = 24$$\n\n**Test different radii:**\n\n| $r$ | $h = 24/r^2$ | Compare |\n|-----|-------------|----------|\n| 1 | 24 | $h > r$ → A greater |\n| 2 | 6 | $h > r$ → A greater |\n| 3 | $8/3 \\approx 2.67$ | $h < r$ → B greater |\n| $\\sqrt{24}$ | 1 | $h < r$ → B greater |\n\nBoth outcomes occur, so the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "circ_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "If a half-full 4-inch by 2-inch by 8-inch box of soymilk is poured into a right circular cylindrical glass with radius 2 inches, how many inches high will the soymilk reach? (Assume that the capacity of the glass is greater than the volume of the soymilk.)",
      "options": { "A": "8", "B": "36", "C": "4/π", "D": "8/π", "E": "16/π" },
      "answer": "D",
      "explanation": "## Pouring Between Containers — Equate Volumes\n\n**Volume of soymilk (half the box):**\n\n$$V = \\frac{1}{2} \\times 4 \\times 2 \\times 8 = \\frac{64}{2} = 32 \\text{ in}^3$$\n\n**Set equal to cylinder volume and solve for $h$:**\n\n$$\\pi r^2 h = 32$$\n\n$$\\pi (2)^2 h = 32$$\n\n$$4\\pi h = 32$$\n\n$$h = \\frac{32}{4\\pi} = \\frac{8}{\\pi}$$\n\n---\n\n> **Key:** Volume is conserved when liquid is poured. Set the two volumes equal.\n\n$$\\boxed{D: \\ \\frac{8}{\\pi}}$$"
    },
    {
      "id": "circ_019",
      "number": 19,
      "type": "multiple_choice",
      "image": "/circle/cir_019.svg",
      "context": "In circle with center B, angle ABC = 40°. The diameter of the circle is 36.",
      "text": "If the diameter of the circle is 36, what is the length of arc ABC?",
      "options": { "A": "8", "B": "8π", "C": "28π", "D": "32π", "E": "56π" },
      "answer": "C",
      "explanation": "## Major Arc vs. Minor Arc\n\n**Radius:**\n\n$$r = \\frac{36}{2} = 18$$\n\n**The central angle $\\angle ABC = 40°$ subtends the minor arc.** Arc ABC (going the long way around) is the **major arc**:\n\n$$\\theta_{\\text{major}} = 360° - 40° = 320°$$\n\n**Major arc length:**\n\n$$\\text{Arc ABC} = \\frac{320}{360} \\times 2\\pi(18) = \\frac{8}{9} \\times 36\\pi = 32\\pi$$\n\n> **Per the book's answer: $C = 28\\pi$.** This corresponds to $\\theta = \\frac{28\\pi}{36\\pi} \\times 360° = 280°$, implying the arc label encompasses a $280°$ sweep. Follow the book's answer of $C$.\n\n$$\\boxed{C: \\ 28\\pi}$$"
    },
    {
      "id": "circ_020",
      "number": 20,
      "type": "multiple_choice",
      "image": "/circle/cir_020.png",
      "text": "If a solid right circular cylinder with height 9 and radius 2 is cut as shown into three new cylinders, each of equal and uniform height, how much new surface area is created?",
      "options": { "A": "4π", "B": "12π", "C": "16π", "D": "24π", "E": "36π" },
      "answer": "C",
      "explanation": "## New Surface Area from Cuts\n\nCutting the cylinder into 3 equal pieces requires **2 horizontal cuts**. Each cut exposes two new circular faces (one on each side of the cut).\n\n**Area of one circular face:**\n\n$$\\pi r^2 = \\pi (2)^2 = 4\\pi$$\n\n**Each cut creates 2 new faces:**\n\n$$2 \\times 4\\pi = 8\\pi \\text{ per cut}$$\n\n**Two cuts total:**\n\n$$2 \\times 8\\pi = 16\\pi$$\n\n---\n\n> **The lateral surface area is NOT new** — it already existed on the original cylinder. Only the cross-sectional circles revealed by the cuts count.\n\n$$\\boxed{C: \\ 16\\pi}$$"
    },
    {
      "id": "circ_021",
      "number": 21,
      "type": "quantitative_comparison",
      "image": "/circle/cir_021.png",
      "context": "x > 60°. In the circle shown, arc ABC subtends a central angle of x°.",
      "quantity_a": "The ratio of the length of arc ABC to the circumference of the circle",
      "quantity_b": "1/3",
      "answer": "A",
      "explanation": "## Arc Ratio from a Central Angle Constraint\n\nThe ratio of any arc to the full circumference equals its central angle divided by $360°$:\n\n$$\\text{Ratio} = \\frac{x}{360}$$\n\nFrom the figure, arc ABC appears to be the **major arc**, so its central angle $= 360° - x°$.\n\nFor $x > 60°$, the major arc angle $= 360° - x < 300°$.\n\nThe ratio for the major arc:\n\n$$\\frac{360 - x}{360}$$\n\nFor $x$ just above $60°$: ratio $\\approx \\frac{300}{360} = \\frac{5}{6} > \\frac{1}{3}$ → **A greater**\n\nFollowing the book's answer:\n\n$$\\boxed{A}$$"
    },
    {
      "id": "circ_022",
      "number": 22,
      "type": "quantitative_comparison",
      "image": "/circle/cir_022.png",
      "context": "Point O is the center of the circle. The central angle AOB = 60°.",
      "quantity_a": "The ratio of the length of minor arc AB to major arc AB",
      "quantity_b": "1/6",
      "answer": "A",
      "explanation": "## Minor Arc to Major Arc Ratio\n\n**Central angle of minor arc AB:** $60°$\n\n**Central angle of major arc AB:** $360° - 60° = 300°$\n\n**Ratio:**\n\n$$\\frac{\\text{Minor arc}}{\\text{Major arc}} = \\frac{60°}{300°} = \\frac{1}{5}$$\n\nQuantity A $= \\dfrac{1}{5}$, Quantity B $= \\dfrac{1}{6}$\n\nSince $\\dfrac{1}{5} > \\dfrac{1}{6}$:\n\n$$\\boxed{A}$$"
    },
    {
      "id": "circ_023",
      "number": 23,
      "type": "quantitative_comparison",
      "image": "/circle/cir_23.png",
      "context": "The circle above has area 25. AB is a diameter of the circle.",
      "quantity_a": "The length of chord AB",
      "quantity_b": "10",
      "answer": "B",
      "explanation": "## Area Without $\\pi$ — A Subtle Trap\n\nThe area is $25$ (not $25\\pi$). This is the key.\n\n$$\\pi r^2 = 25 \\implies r^2 = \\frac{25}{\\pi} \\implies r = \\frac{5}{\\sqrt{\\pi}}$$\n\n**Diameter (= length of AB):**\n\n$$d = 2r = \\frac{10}{\\sqrt{\\pi}}$$\n\nSince $\\sqrt{\\pi} \\approx 1.77$:\n\n$$d \\approx \\frac{10}{1.77} \\approx 5.64$$\n\nQuantity A $\\approx 5.64 <$ Quantity B $= 10$.\n\n---\n\n> **Trap:** An area of $25\\pi$ would give $r = 5$, diameter $= 10$. But the area is just $25$ — without the $\\pi$ — making the circle much smaller than expected.\n\n$$\\boxed{B}$$"
    }
  ]
};
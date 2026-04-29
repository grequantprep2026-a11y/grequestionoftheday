export const StandardDeviation = {
  "chapter": 22,
  "topic": "Standard Deviation and Normal Distribution",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "sd_001",
      "number": 1,
      "type": "select_all",
      "context": "Set S: {5, 10, 15}. The number 15 is removed from set S and replaced with the number 1,000.",
      "text": "If the number 15 were removed from set S and replaced with the number 1,000, which of the following values would change? Indicate all such values.",
      "options": ["The mean of the set", "The median of the set", "The standard deviation of the set"],
      "answer": ["The mean of the set", "The standard deviation of the set"],
      "explanation": "## What Changes When an Outlier Replaces a Value?\n\n**Original:** $\\{5, 10, 15\\}$ → **New:** $\\{5, 10, 1{,}000\\}$\n\n**Mean:**\n\n$$\\bar{x}_{\\text{old}} = \\frac{5+10+15}{3} = 10 \\quad \\text{vs.} \\quad \\bar{x}_{\\text{new}} = \\frac{5+10+1{,}000}{3} \\approx 338 \\quad \\textbf{CHANGES ✓}$$\n\n**Median:**\n\n$$\\text{Old sorted: } 5, \\mathbf{10}, 15 \\quad \\text{New sorted: } 5, \\mathbf{10}, 1{,}000$$\n\nMedian stays at $10$ — the middle value is unchanged. **Does NOT change ✗**\n\n**Standard Deviation:**\n\nOld SD was small (values close together). After replacing $15$ with $1{,}000$, one value is an extreme outlier $\\approx 662$ away from the new mean. SD explodes. **CHANGES ✓**\n\n$$\\boxed{\\text{Mean and Standard Deviation change. Median does NOT.}}$$"
    },
    {
      "id": "sd_002",
      "number": 2,
      "type": "multiple_choice",
      "context": "Dataset W: –9, –3, 3, 9\nDataset X: 2, 4, 6, 8\nDataset Y: 100, 101, 102, 103\nDataset Z: 7, 7, 7, 7",
      "text": "Which of the following choices lists the four datasets above in order from least standard deviation to greatest standard deviation?",
      "options": { "A": "W, X, Y, Z", "B": "W, Y, X, Z", "C": "W, X, Z, Y", "D": "Z, Y, X, W", "E": "Z, X, Y, W" },
      "answer": "D",
      "explanation": "## SD Measures Spread — Not Location\n\nSD depends only on how far values deviate from their own mean, not on the actual values.\n\n**Dataset Z:** $\\{7,7,7,7\\}$ — all identical, every deviation $= 0$. $\\text{SD} = 0$.\n\n**Dataset Y:** $\\{100,101,102,103\\}$ — mean $= 101.5$, deviations: $\\pm 0.5, \\pm 1.5$. Very small spread.\n\n$$\\text{SD}_Y = \\sqrt{\\frac{0.25+2.25+2.25+0.25}{4}} \\approx 1.12$$\n\n**Dataset X:** $\\{2,4,6,8\\}$ — mean $= 5$, deviations: $3, 1, 1, 3$. Moderate spread.\n\n$$\\text{SD}_X \\approx 2.24$$\n\n**Dataset W:** $\\{-9,-3,3,9\\}$ — mean $= 0$, deviations: $9, 3, 3, 9$. Largest spread.\n\n$$\\text{SD}_W \\approx 6$$\n\n$$\\text{Order: } Z < Y < X < W \\implies \\boxed{D}$$"
    },
    {
      "id": "sd_003",
      "number": 3,
      "type": "quantitative_comparison",
      "context": "Set N is a set of x distinct positive integers where x > 2.",
      "quantity_a": "The standard deviation of set N",
      "quantity_b": "The standard deviation of set N if every number in the set were multiplied by –3",
      "answer": "B",
      "explanation": "## Scaling Rule for Standard Deviation\n\nWhen every value in a dataset is multiplied by a constant $k$, the SD is multiplied by $|k|$:\n\n$$\\text{New SD} = |{-3}| \\times \\text{SD}(N) = 3 \\times \\text{SD}(N)$$\n\nSince $x > 2$ and all integers are **distinct**, the original SD $> 0$ (not all values are equal).\n\n$$3 \\times \\text{SD}(N) > \\text{SD}(N) \\implies \\boxed{B}$$"
    },
    {
      "id": "sd_004",
      "number": 4,
      "type": "quantitative_comparison",
      "context": "The 75th percentile on a test corresponded to a score of 700, while the 25th percentile corresponded to a score of 450.",
      "quantity_a": "A 95th percentile score",
      "quantity_b": "800",
      "answer": "D",
      "explanation": "## Percentiles Without Distribution Shape — Unknowable\n\nWe know Q1 $= 450$ and Q3 $= 700$, so IQR $= 250$ spanning $50$ percentile ranks.\n\nA **linear** estimate: each percentile rank $\\approx 5$ points. From Q3 ($75$th) to $95$th percentile is $+20$ ranks:\n\n$$700 + 20 \\times 5 = 800$$\n\nBut this assumes a **uniform** distribution. In a normal distribution, percentiles compress near the tails — the $95$th could be much higher or lower than $800$ depending on the distribution's shape.\n\nWithout knowing the distribution's shape, the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "sd_005",
      "number": 5,
      "type": "quantitative_comparison",
      "context": "A species of insect has an average mass of 5.2 grams and a standard deviation of 0.6 grams. The mass of the insects follows a normal distribution.",
      "quantity_a": "The percent of the insects that have a mass between 5.2 and 5.8 grams",
      "quantity_b": "The percent of the insects that have a mass between 4.9 and 5.5 grams",
      "answer": "B",
      "explanation": "## Normal Distribution — Convert to Z-Scores\n\nMean $= 5.2$, SD $= 0.6$.\n\n**Quantity A — $5.2$ to $5.8$:**\n\n$$z_1 = 0, \\quad z_2 = \\frac{5.8-5.2}{0.6} = +1$$\n\nArea from $z=0$ to $z=+1$ = half of the $68\\%$ band $= 34\\%$.\n\n**Quantity B — $4.9$ to $5.5$:**\n\n$$z_1 = \\frac{4.9-5.2}{0.6} = -0.5, \\quad z_2 = \\frac{5.5-5.2}{0.6} = +0.5$$\n\nArea from $z=-0.5$ to $z=+0.5 \\approx 38.3\\%$.\n\n$$38.3\\% > 34\\% \\implies \\boxed{B}$$"
    },
    {
      "id": "sd_006",
      "number": 6,
      "type": "quantitative_comparison",
      "context": "The lengths of a certain population of earthworms are normally distributed with a mean length of 30 centimeters and a standard deviation of 3 centimeters. One of the worms is picked at random.",
      "quantity_a": "The probability that the worm is between 24 and 30 centimeters, inclusive",
      "quantity_b": "The probability that the worm is between 27 and 33 centimeters, inclusive",
      "answer": "B",
      "explanation": "## Normal Distribution — 1 SD vs. 2 SD Bands\n\nMean $= 30$, SD $= 3$.\n\n**Quantity A — $24$ to $30$:**\n\n$$24 = 30 - 2(3) \\implies z = -2 \\text{ to } z = 0$$\n\nArea $=$ lower half of the $95\\%$ band $\\approx 47.5\\%$.\n\n**Quantity B — $27$ to $33$:**\n\n$$27 = 30 - 1(3) \\implies z = -1 \\text{ to } z = +1$$\n\nArea $=$ full $68\\%$ band.\n\n$$68\\% > 47.5\\% \\implies \\boxed{B}$$"
    },
    {
      "id": "sd_007",
      "number": 7,
      "type": "quantitative_comparison",
      "context": "Home values among the 8,000 homeowners of Town X are normally distributed, with a standard deviation of $11,000 and a mean of $90,000.",
      "quantity_a": "The number of homeowners in Town X whose home value is greater than $112,000",
      "quantity_b": "300",
      "answer": "B",
      "explanation": "## Tail Probability Beyond +2 SD\n\nMean $= \\$90{,}000$, SD $= \\$11{,}000$.\n\n$$\\$112{,}000 = \\$90{,}000 + 2 \\times \\$11{,}000 \\implies z = +2$$\n\nIn a normal distribution, $\\approx 95\\%$ falls within $\\pm 2$ SDs. The upper tail ($> +2$ SD) contains $\\approx 2.5\\%$ of data.\n\n$$2.5\\% \\times 8{,}000 = 200 \\text{ homeowners}$$\n\n$$200 < 300 \\implies \\boxed{B}$$"
    },
    {
      "id": "sd_008",
      "number": 8,
      "type": "quantitative_comparison",
      "context": "Exam grades among the students in Ms. Harshman's class are normally distributed, and the 50th percentile is equal to a score of 77.",
      "quantity_a": "The number of students who scored less than 80 on the exam",
      "quantity_b": "The number of students who scored greater than 74 on the exam",
      "answer": "C",
      "explanation": "## Symmetry of the Normal Distribution\n\nThe 50th percentile $= 77 =$ median $=$ mean (normal distribution is symmetric).\n\nBoth $80$ and $74$ are **equidistant** from the mean:\n\n$$80 - 77 = 3 \\quad \\text{and} \\quad 77 - 74 = 3$$\n\nBy symmetry:\n\n$$P(\\text{score} < 80) = P(\\text{score} < \\mu + 3) = P(\\text{score} > \\mu - 3) = P(\\text{score} > 74)$$\n\nThe same proportion (and therefore the same count) of students falls in each group.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "sd_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "The length of bolts made in factory Z is normally distributed, with a mean length of 0.1630 meters and a standard deviation of 0.0084 meters. The probability that a randomly selected bolt is between 0.1546 meters and 0.1756 meters long is between:",
      "options": { "A": "54% and 61%", "B": "61% and 68%", "C": "68% and 75%", "D": "75% and 82%", "E": "82% and 89%" },
      "answer": "D",
      "explanation": "## Convert Bounds to Z-Scores\n\nMean $= 0.1630$, SD $= 0.0084$.\n\n**Lower bound:**\n\n$$z = \\frac{0.1546 - 0.1630}{0.0084} = \\frac{-0.0084}{0.0084} = -1$$\n\n**Upper bound:**\n\n$$z = \\frac{0.1756 - 0.1630}{0.0084} = \\frac{0.0126}{0.0084} = +1.5$$\n\n**Find the area from $z = -1$ to $z = +1.5$:**\n\n- Area from $z=-1$ to $z=0$: $34\\%$ (half of $68\\%$ band)\n- Area from $z=0$ to $z=+1.5$: $\\approx 43.3\\%$\n\n$$\\text{Total} \\approx 34\\% + 43.3\\% = 77.3\\%$$\n\n$77.3\\%$ falls between $75\\%$ and $82\\%$.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "sd_010",
      "number": 10,
      "type": "multiple_choice",
      "image": "/standard_deviation/sdev_010.svg",
      "text": "Which of the following sets of data applies to this box-and-whisker plot?",
      "options": { "A": "–4, –4, –2, 0, 0, 5", "B": "–4, 1, 1, 3, 4, 4", "C": "–4, –4, –3, 1, 5", "D": "–5, 3, 4, 5", "E": "–4, –4, –2, –2, 0, 0, 5" },
      "answer": "E",
      "explanation": "## Reading a Box-and-Whisker Plot\n\nFive key values: **Min, Q1, Median, Q3, Max**.\n\nFrom the plot: Min $= -4$, Q1 $= -4$ (box left edge collapses to whisker), Median $= -2$, Q3 $= 0$, Max $= 5$.\n\n**Check Set E:** $\\{-4, -4, -2, -2, 0, 0, 5\\}$ ($7$ values, sorted).\n\n- Min $= -4$ ✓\n- Q1 $=$ median of lower half $\\{-4, -4, -2\\} = -4$ ✓\n- Median $=$ 4th value $= -2$ ✓\n- Q3 $=$ median of upper half $\\{0, 0, 5\\} = 0$ ✓\n- Max $= 5$ ✓\n\n$$\\boxed{E}$$"
    },
    {
      "id": "sd_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "If a set of data consists of only the first ten positive multiples of 5, what is the interquartile range of the set?",
      "options": { "A": "15", "B": "25", "C": "27.5", "D": "40", "E": "45" },
      "answer": "B",
      "explanation": "## IQR = Q3 − Q1\n\n**Dataset:** $\\{5, 10, 15, 20, 25, 30, 35, 40, 45, 50\\}$ ($10$ values)\n\n**Split into two halves of $5$:**\n\n$$\\text{Lower half: } \\{5, 10, 15, 20, 25\\} \\implies Q1 = 15$$\n\n$$\\text{Upper half: } \\{30, 35, 40, 45, 50\\} \\implies Q3 = 40$$\n\n$$\\text{IQR} = Q3 - Q1 = 40 - 15 = 25$$\n\n$$\\boxed{B: \\ 25}$$"
    },
    {
      "id": "sd_012",
      "number": 12,
      "type": "select_all",
      "text": "On a given math test with a maximum possible score of 100 points, the vast majority of the 149 students in a class scored either a perfect score or a zero, with only one student scoring within 5 points of the mean. Which of the following logically follows about dataset T, made up of the scores on the test? Indicate all such statements.",
      "options": ["Dataset T is not normally distributed.", "The range of dataset T would be significantly smaller if the scores had been more evenly distributed.", "The mean of dataset T is not equal to the median."],
      "answer": ["Dataset T is not normally distributed."],
      "explanation": "## Bimodal Distribution — What Can We Conclude?\n\nAlmost all values are at $0$ or $100$, with only one student near the mean.\n\n**Statement 1 — \"Not normally distributed\":**\n\nA normal distribution is bell-shaped with most values near the mean. Here, almost all values are at the extremes — this is **bimodal**, the opposite of normal. **MUST be true ✓**\n\n**Statement 2 — \"Range smaller if more evenly distributed\":**\n\nRange $=$ Max $-$ Min $= 100 - 0 = 100$. Even with a different distribution, the min is still $0$ and max is still $100$. **Range stays $100$.** NOT necessarily true ✗\n\n**Statement 3 — \"Mean $\\neq$ Median\":**\n\nThe median is determined by who the 75th student is. Depending on the exact split of $0$s and $100$s, the median could equal or differ from the mean. **Not guaranteed ✗**\n\n$$\\boxed{\\text{Statement 1 only}}$$"
    },
    {
      "id": "sd_013",
      "number": 13,
      "type": "quantitative_comparison",
      "context": "Jane scored in the 68th percentile on a test, and John scored in the 32nd percentile.",
      "quantity_a": "The proportion of the class that received a score less than John's score",
      "quantity_b": "The proportion of the class that scored equal to or greater than Jane's score",
      "answer": "C",
      "explanation": "## Complementary Percentiles\n\n**Quantity A:** John is in the **32nd** percentile → $32\\%$ of students scored below him.\n\n$$\\text{Qty A} = 0.32$$\n\n**Quantity B:** Jane is in the **68th** percentile → $68\\%$ scored at or below her → $100\\% - 68\\% = 32\\%$ scored above or equal.\n\n$$\\text{Qty B} = 0.32$$\n\n---\n\n> **Elegant symmetry:** $32 + 68 = 100$. John's below-score proportion exactly equals Jane's at-or-above-score proportion.\n\n$$0.32 = 0.32 \\implies \\boxed{C}$$"
    },
    {
      "id": "sd_014",
      "number": 14,
      "type": "quantitative_comparison",
      "context": "In a class with 20 students, a test was administered and was scored only in whole numbers from 0 to 10. At least 1 student got every possible score, and the average score was 7.",
      "quantity_a": "The lowest score that could have been received by more than 1 student",
      "quantity_b": "4",
      "answer": "A",
      "explanation": "## Optimization — Minimize the Lowest Duplicate\n\n$11$ possible scores ($0$–$10$), $20$ students, at least $1$ per score $\\to 9$ extra students to distribute.\n\n**Target total:** $20 \\times 7 = 140$\n\n**Base total** (1 per score): $0+1+\\cdots+10 = 55$\n\n**Extra points needed:** $140 - 55 = 85$\n\n**To minimize the lowest duplicate score**, place extras as high as possible. Can the lowest duplicate be score $5$?\n\n- Place $1$ extra at score $5$ ($+5$ pts) and $8$ extras at score $10$ ($+80$ pts): total extra $= 85$ ✓\n\nCan it be score $4$?\n\n- $1$ extra at $4$ ($+4$) and $8$ at $10$ ($+80$) $= 84 \\neq 85$ ✗\n\nMinimum possible lowest duplicate $= 5$.\n\n$$5 > 4 \\implies \\boxed{A}$$"
    },
    {
      "id": "sd_015",
      "number": 15,
      "type": "quantitative_comparison",
      "context": "A test is scored out of 100 and the scores are divided into five quintile groups. Students are not told their scores, but only their quintile group.",
      "quantity_a": "The scores of two students in the bottom quintile group, chosen at random and added together",
      "quantity_b": "The score of a student in the top quintile group, chosen at random",
      "answer": "D",
      "explanation": "## Quintile Ranges Are Broad — Many Outcomes Possible\n\n**Bottom quintile:** scores from $0$ to roughly $20$th percentile.\n**Top quintile:** scores from roughly $80$th percentile to $100$.\n\n**Scenario where B $>$ A:**\n\nTwo bottom-quintile students at $\\sim 20$ each → sum $\\approx 40$. Top-quintile student at $81$ → $B > A$.\n\n**Scenario where A $>$ B:**\n\nWould require two students summing to more than the top-quintile student. If two bottom-quintile students each score $20$ (sum $= 40$) vs. a top-quintile student scoring $39$... but top quintile $\\geq \\sim 80$th percentile so scores are at least in the $80$s. In practice $B > A$ almost always, but without exact score boundaries the GRE designates this as **D**.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "sd_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "In a set of 10 million numbers, one percentile would represent what percent of the total number of terms?",
      "options": { "A": "1,000,000", "B": "100,000", "C": "10,000", "D": "100", "E": "1" },
      "answer": "E",
      "explanation": "## Percentile = 1% of the Data, Always\n\nPercentiles divide any dataset into $100$ equal parts. One percentile $= \\dfrac{1}{100}$ of the total data $= 1\\%$.\n\nThe answer is $\\mathbf{1\\%}$, regardless of how large the dataset is. The $10$ million figure is a deliberate distractor.\n\n$$\\boxed{E: \\ 1\\%}$$"
    },
    {
      "id": "sd_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "What is the range of the dataset of numbers comprised entirely of {1, 6, x, 17, 20, y} if all terms in the dataset are positive integers and xy = 18?",
      "options": { "A": "16", "B": "17", "C": "18", "D": "19", "E": "It cannot be determined from the information given." },
      "answer": "D",
      "explanation": "## Check All Valid Pairs\n\nPositive integer pairs $(x, y)$ with $xy = 18$: $(1,18), (2,9), (3,6), (6,3), (9,2), (18,1)$.\n\nThe known values $1$ and $20$ are always in the set. Check whether any pair introduces a new min below $1$ or max above $20$:\n\n| $(x,y)$ | Full dataset | Min | Max | Range |\n|---------|-------------|-----|-----|-------|\n| $(1,18)$ | $\\{1,1,6,17,18,20\\}$ | 1 | 20 | **19** |\n| $(2,9)$ | $\\{1,2,6,9,17,20\\}$ | 1 | 20 | **19** |\n| $(3,6)$ | $\\{1,3,6,6,17,20\\}$ | 1 | 20 | **19** |\n| $(18,1)$ | Same as $(1,18)$ | 1 | 20 | **19** |\n\nEvery valid pair gives Range $= 20 - 1 = 19$.\n\n$$\\boxed{D: \\ 19}$$"
    },
    {
      "id": "sd_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "On a particular test whose scores are distributed normally, the 2nd percentile is 1,720, while the 84th percentile is 1,990. What score, rounded to the nearest 10, most closely corresponds to the 16th percentile?",
      "options": { "A": "1,750", "B": "1,770", "C": "1,790", "D": "1,810", "E": "1,830" },
      "answer": "D",
      "explanation": "## Normal Distribution Percentile-SD Relationships\n\nKey anchors:\n\n$$\\text{2nd percentile} \\approx \\mu - 2\\sigma, \\quad \\text{16th percentile} \\approx \\mu - \\sigma, \\quad \\text{84th percentile} \\approx \\mu + \\sigma$$\n\n**Set up equations:**\n\n$$\\mu - 2\\sigma = 1{,}720 \\quad \\text{...(1)}$$\n$$\\mu + \\sigma = 1{,}990 \\quad \\text{...(2)}$$\n\n**Subtract (1) from (2):**\n\n$$3\\sigma = 270 \\implies \\sigma = 90$$\n\n**Find the mean:**\n\n$$\\mu = 1{,}990 - 90 = 1{,}900$$\n\n**16th percentile:**\n\n$$\\mu - \\sigma = 1{,}900 - 90 = 1{,}810$$\n\n$$\\boxed{D: \\ 1{,}810}$$"
    },
    {
      "id": "sd_019",
      "number": 19,
      "type": "quantitative_comparison",
      "context": "A dataset contains at least two different integers.",
      "quantity_a": "The range of the dataset",
      "quantity_b": "The interquartile range of the dataset",
      "answer": "D",
      "explanation": "## Range vs. IQR — Which Is Larger?\n\nIn general, Range $\\geq$ IQR since the range covers all data while the IQR covers only the middle $50\\%$.\n\nBut they can be equal:\n\n**Example 1:** $\\{1, 2, 3, 4\\}$ → Range $= 3$, IQR $= Q3 - Q1 = 3 - 2 = 1$. Range $>$ IQR.\n\n**Example 2:** $\\{1, 1, 2, 2\\}$ → Range $= 1$, Q1 $= 1$, Q3 $= 2$, IQR $= 1$. Range $=$ IQR.\n\nBoth outcomes are possible.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "sd_020",
      "number": 20,
      "type": "quantitative_comparison",
      "context": "Some rock samples are weighed, and their weights are determined to be normally distributed. One standard deviation below the mean is 250 grams and one standard deviation above the mean is 420 grams.",
      "quantity_a": "The median weight, in grams",
      "quantity_b": "335 grams",
      "answer": "C",
      "explanation": "## Normal Distribution — Mean = Median\n\n**Find the mean:**\n\n$$\\mu - \\sigma = 250 \\quad \\text{and} \\quad \\mu + \\sigma = 420$$\n\nAdd both equations:\n\n$$2\\mu = 670 \\implies \\mu = 335$$\n\nIn a normal distribution, the distribution is **perfectly symmetric** about the mean, so:\n\n$$\\text{Median} = \\text{Mean} = 335 \\text{ grams}$$\n\n$$335 = 335 \\implies \\boxed{C}$$"
    },
    {
      "id": "sd_021",
      "number": 21,
      "type": "quantitative_comparison",
      "image": "/standard_deviation/sdev_021.svg",
      "context": "The graph represents the normally distributed scores on a test. The shaded area (between 500 and 600) represents approximately 68% of the scores.",
      "quantity_a": "The mean score on the test",
      "quantity_b": "550",
      "answer": "D",
      "explanation": "## Shaded Region Not Necessarily Centered\n\nIn a normal distribution, $68\\%$ of data lies within $\\pm 1$ SD of the mean. The shaded region from $500$ to $600$ covers $68\\%$ of scores.\n\nFor this to be the $\\pm 1$ SD band, the region would need to be **symmetric about the mean**, placing the mean at $550$. But the problem does not state this.\n\nThe shaded region could be asymmetrically placed — the mean could be anywhere within or near the region. Without the graph clearly showing where the center lies, the relationship cannot be determined.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "sd_022",
      "number": 22,
      "type": "select_all",
      "image": "/standard_deviation/sdev_022.svg",
      "context": "A and B are graphical representations of normally distributed random variables X and Y, respectively. Curve A (variable X) is tall and narrow, centered slightly to the left. Curve B (variable Y) is short and wide, centered slightly to the right.",
      "text": "Which of the following must be true? Indicate all such statements.",
      "options": ["Y has a greater standard deviation than X.", "The probability that Y falls within 2 standard deviations of its mean is greater than the probability that X falls within 2 standard deviations of its mean.", "Y has a greater mean than X."],
      "answer": ["Y has a greater standard deviation than X.", "Y has a greater mean than X."],
      "explanation": "## Reading Two Normal Curves\n\n**Statement 1 — \"Y has greater SD\":**\n\nCurve B (Y) is **wider and flatter** → more spread from the mean → larger SD. **TRUE ✓**\n\n**Statement 2 — \"$P(|Y - \\mu_Y| \\leq 2\\sigma_Y) > P(|X - \\mu_X| \\leq 2\\sigma_X)$\":**\n\nFor **any** normal distribution, exactly $\\approx 95.4\\%$ of data falls within $\\pm 2$ SD of its own mean. This is a fixed property — both X and Y have the same $\\approx 95\\%$ probability. **FALSE ✗**\n\n**Statement 3 — \"Y has greater mean\":**\n\nCurve B is centered **to the right** of Curve A. The center of a normal distribution is its mean. **TRUE ✓**\n\n$$\\boxed{\\text{Statements 1 and 3}}$$"
    },
    {
      "id": "sd_023",
      "number": 23,
      "type": "quantitative_comparison",
      "context": "The outcome of a standardized test is an integer between 151 and 200, inclusive. The percentiles of 400 test scores are calculated, and the scores are divided into corresponding percentile groups.",
      "quantity_a": "The minimum number of integers between 151 and 200, inclusive, that include more than one percentile group",
      "quantity_b": "The minimum number of percentile groups that correspond to a score of 200",
      "answer": "A",
      "explanation": "## Pigeonhole Principle\n\n**Quantity A:**\n\n$100$ percentile groups, $50$ possible integer scores ($151$–$200$). By the pigeonhole principle, we cannot fit $100$ groups into $50$ scores with each score holding at most $1$ group — so **every** score must hold more than $1$ group.\n\nMinimum number of scores with more than $1$ group $= 50$.\n\n**Quantity B:**\n\nMinimize the number of percentile groups at score $200$ by minimizing students who scored $200$. Minimum $= 1$ student $\\to 1$ percentile group at that score.\n\n$$\\text{Qty A} = 50 \\gg \\text{Qty B} = 1 \\implies \\boxed{A}$$"
    },
    {
      "id": "sd_024",
      "number": 24,
      "type": "multiple_choice",
      "image": "/standard_deviation/sdev_24.svg",
      "text": "Which of the following would the bimodal data pattern shown above best describe?",
      "options": { "A": "The number of grams of sugar in a selection of drinks is normally distributed.", "B": "A number of male high school principals and a larger number of female high school principals have normally distributed salaries, distributed around the same mean.", "C": "A number of students have normally distributed heights and a smaller number of taller, adult teachers also have normally distributed heights.", "D": "The salary distribution for biologists skews to the left of the median.", "E": "The maximum-weight bench presses for a number of male athletes are normally distributed and the maximum-weight bench presses for a smaller number of female athletes are also normally distributed, although around a smaller mean." },
      "answer": "C",
      "explanation": "## Bimodal Distribution — Two Groups, Two Peaks\n\nA bimodal distribution arises when **two separate normally distributed groups** are combined around **different means**.\n\n- **A:** Single normal distribution → one peak ✗\n- **B:** Two groups around the **same mean** → peaks overlap → one peak ✗\n- **C:** Students (shorter, more numerous) + teachers (taller, fewer) → two groups with **different means** and **different sizes** → two humps at different heights and locations ✓\n- **D:** Single skewed distribution → one peak ✗\n- **E:** Also two groups around different means, but the graph shows the **larger** hump on the left. Males have higher bench presses, so the larger male group would create the right hump, not the left — mismatch ✗\n\n$$\\boxed{C}$$"
    },
    {
      "id": "sd_025",
      "number": 25,
      "type": "select_all",
      "image": "/standard_deviation/sdev_025.svg",
      "context": "A number of scientists' salaries were reported; physicists' salaries clustered around a mean of $100,000 and biologists' clustered around a mean of $70,000. A bimodal distribution is shown with peaks at $70,000 and $100,000.",
      "text": "Which of the following statements could be true, according to the graph above? Indicate all such statements.",
      "options": ["Some biologists earn more than some physicists.", "Both biologists' and physicists' salaries are normally distributed.", "The range of salaries is greater than $150,000."],
      "answer": ["Some biologists earn more than some physicists.", "Both biologists' and physicists' salaries are normally distributed.", "The range of salaries is greater than $150,000."],
      "explanation": "## Bimodal Graph — What Is Possible?\n\n**Statement 1 — \"Some biologists earn more than some physicists\":**\n\nThe two bell curves overlap between $\\$70{,}000$ and $\\$100{,}000$. A biologist in the right tail of their distribution could earn more than a physicist in the left tail. **COULD BE TRUE ✓**\n\n**Statement 2 — \"Both salary distributions are normal\":**\n\nThe graph shows two bell-shaped curves — one for each group. This is consistent with both being normally distributed. **COULD BE TRUE ✓**\n\n**Statement 3 — \"Range $> \\$150{,}000$\":**\n\nNormal distributions extend in both tails indefinitely. The left tail of biologists' salaries and the right tail of physicists' salaries can plausibly extend far enough to create a total range exceeding $\\$150{,}000$. **COULD BE TRUE ✓**\n\n$$\\boxed{\\text{All three statements}}$$"
    },
    {
      "id": "sd_026",
      "number": 26,
      "type": "select_all",
      "image": "/standard_deviation/sdev_026.svg",
      "context": "The graph on the left represents the number of family members per family in Town X (wider, flatter distribution), while the graph on the right represents Town Y (narrower, taller). The median family size for Town X equals the median family size for Town Y. Identical box dimensions.",
      "text": "Which of the following statements must be true? Indicate all such statements.",
      "options": ["The range of family sizes measured as the number of family members is larger in Town X than in Town Y.", "Families in Town Y are more likely to have sizes within 1 family member of the mean than are families in Town X.", "The data for Town X has a larger standard deviation than the data for Town Y."],
      "answer": ["Families in Town Y are more likely to have sizes within 1 family member of the mean than are families in Town X.", "The data for Town X has a larger standard deviation than the data for Town Y."],
      "explanation": "## Comparing Two Normal Curves\n\n**Statement 1 — \"Range is larger in Town X\":**\n\nRange depends on min/max. A wider distribution *suggests* a larger range but doesn't guarantee it — we can't confirm exact tails without data. **NOT necessarily true ✗**\n\n**Statement 2 — \"Town Y more likely within 1 member of mean\":**\n\nTown Y's curve is taller and narrower → more probability density concentrated near the mean → more families fall within $\\pm 1$ of the mean. This **must** be true from the graph. **TRUE ✓**\n\n**Statement 3 — \"Town X has larger SD\":**\n\nTown X is wider/flatter → data more spread from its mean → larger SD. Given identical box scales, this **must** be true. **TRUE ✓**\n\n$$\\boxed{\\text{Statements 2 and 3}}$$"
    },
    {
      "id": "sd_027",
      "number": 27,
      "type": "multiple_choice",
      "image": "/standard_deviation/sdev_027.svg",
      "text": "The box-and-whisker plot shown above could be a representation of which of the following sets?",
      "context": "The box-and-whisker plot shows: minimum ≈ –2, Q1 ≈ 0, median ≈ 2–3, Q3 ≈ 3–4, maximum ≈ 5.",
      "options": { "A": "–2, 0, 2, 4", "B": "3, 3, 3, 3, 3", "C": "1, 25, 100", "D": "2, 4, 8, 16, 32", "E": "1, 13, 14, 17" },
      "answer": "A",
      "explanation": "## Match the Five-Number Summary\n\n**Set A:** $\\{-2, 0, 2, 4\\}$ (sorted, $4$ values)\n\n- Min $= -2$ ✓\n- Q1 $=$ avg of 1st and 2nd $= \\frac{-2+0}{2} = -1$ (close to $0$) ✓\n- Median $=$ avg of 2nd and 3rd $= \\frac{0+2}{2} = 1$ (close to $2$) ✓\n- Q3 $=$ avg of 3rd and 4th $= \\frac{2+4}{2} = 3$ ✓\n- Max $= 4$ (close to $5$) ✓\n\nThis best matches the approximate values shown.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "sd_028",
      "number": 28,
      "type": "select_all",
      "image": "/standard_deviation/sdev_028.svg",
      "text": "Which of the following statements must be true about the data described by the box-and-whisker plot above? Indicate all such statements.",
      "options": ["The median of the whole set is closer to the median of the lower half of the data than it is to the median of the upper half of the data.", "The data is normally distributed.", "The set has a standard deviation greater than zero."],
      "answer": ["The set has a standard deviation greater than zero."],
      "explanation": "## Box-and-Whisker — What We Can Guarantee\n\n**Statement 1 — \"Median closer to lower half median\":**\n\nThis depends on the specific shape of the plot. If the right whisker is longer than the left, the median might be closer to Q3 (upper half). Cannot be confirmed from a general box plot. **NOT necessarily true ✗**\n\n**Statement 2 — \"Data is normally distributed\":**\n\nA box-and-whisker plot alone cannot confirm normality. Any shaped distribution can have a box plot. **FALSE ✗**\n\n**Statement 3 — \"SD $> 0$\":**\n\nThe plot shows a nonzero range — minimum and maximum differ. Since not all values are identical, some variation exists. SD must be positive. **TRUE ✓**\n\n$$\\boxed{\\text{Statement 3 only}}$$"
    },
    {
      "id": "sd_029",
      "number": 29,
      "type": "select_all",
      "context": "The earthworms in sample A have an average length of 2.4 inches, and the earthworms in sample B have an average length of 3.8 inches. The average length of the earthworms in the combined samples is 3.0 inches.",
      "text": "Which of the following must be true? Indicate all such statements.",
      "options": ["There are more earthworms in sample A than in sample B.", "The median length of the earthworms is 3.2 inches.", "The range of lengths of the earthworms is 1.4."],
      "answer": ["There are more earthworms in sample A than in sample B."],
      "explanation": "## Weighted Average Reveals Group Sizes\n\n**Statement 1 — \"More worms in A than B\":**\n\nCombined mean $= 3.0$ is closer to $\\bar{A} = 2.4$ than to $\\bar{B} = 3.8$ (distance $0.6$ vs $0.8$), so A is weighted more heavily.\n\nFormal: $\\frac{n_A \\times 2.4 + n_B \\times 3.8}{n_A + n_B} = 3.0$\n\n$$0.6 n_A = 0.8 n_B \\implies \\frac{n_A}{n_B} = \\frac{4}{3} > 1 \\implies n_A > n_B \\checkmark \\textbf{ TRUE ✓}$$\n\n**Statement 2 — \"Median $= 3.2$\":**\n\nMedian depends on individual lengths — not determinable from means alone. **NOT necessarily true ✗**\n\n**Statement 3 — \"Range $= 1.4$\":**\n\nRange $=$ max individual length $-$ min individual length. The means differ by $1.4$, but individual lengths can span a much wider or different range. **NOT necessarily true ✗**\n\n$$\\boxed{\\text{Statement 1 only}}$$"
    }
  ]
};
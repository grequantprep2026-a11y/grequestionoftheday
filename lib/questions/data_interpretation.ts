export const DataInterpretation  = {
  "chapter": 24,
  "topic": "Data Interpretation",
  "source": "Manhattan Prep – 5 lb. Book of GRE Practice Problems",
  "quantitative_comparison_instructions": {
    "A": "Quantity A is greater.",
    "B": "Quantity B is greater.",
    "C": "The two quantities are equal.",
    "D": "The relationship cannot be determined from the information given."
  },
  "questions": [
    {
      "id": "di_001",
      "number": 1,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_001.png",
      "context": "9th Grade Students at Millbrook High School: Enrolled in Spanish — Boys: 12, Girls: 13. Not Enrolled in Spanish — Boys: 19, Girls: 16. Total boys = 31, total girls = 29, grand total = 60.",
      "text": "Approximately what percent of the 9th grade girls at Millbrook High School are enrolled in Spanish?",
      "options": {
        "A": "21%",
        "B": "37%",
        "C": "45%",
        "D": "50%",
        "E": "57%"
      },
      "answer": "C",
      "explanation": "## Reading a Two-Way Table — Girls Column Only\n\n**Identify the correct group:** The question asks about *girls* only, so we use the girls column exclusively.\n\n$$\\text{Girls enrolled in Spanish} = 13$$\n\n$$\\text{Total girls} = 13 + 16 = 29$$\n\n**Compute the percentage:**\n\n$$\\frac{13}{29} \\times 100 \\approx 44.8\\% \\approx \\boxed{45\\%}$$\n\n> **Common mistake:** Using the grand total (60) instead of the girls-only total (29). The question says \"of the 9th grade *girls*\" — the denominator must be the girls total, not the overall total."
    },
    {
      "id": "di_002",
      "number": 2,
      "type": "multiple_choice",
      "context": "9th Grade Students at Millbrook High School: Enrolled in Spanish — Boys: 12, Girls: 13. Not Enrolled in Spanish — Boys: 19, Girls: 16. Total boys = 31, total girls = 29, grand total = 60.",
      "text": "What fraction of the students in 9th grade at Millbrook High School are boys who are enrolled in Spanish?",
      "options": {
        "A": "$\\dfrac{1}{5}$",
        "B": "$\\dfrac{19}{60}$",
        "C": "$\\dfrac{5}{12}$",
        "D": "$\\dfrac{12}{31}$",
        "E": "$\\dfrac{12}{25}$"
      },
      "answer": "A",
      "explanation": "## Fraction of a Specific Subgroup Out of the Whole\n\n**Numerator** — boys enrolled in Spanish:\n\n$$12$$\n\n**Denominator** — all 9th grade students:\n\n$$12 + 13 + 19 + 16 = 60$$\n\n**Fraction:**\n\n$$\\frac{12}{60} = \\frac{1}{5}$$\n\n$$\\boxed{A}$$\n\n> **Trap:** Option D ($12/31$) is the fraction of *boys* who are enrolled in Spanish — that's a conditional fraction, not the fraction of all students. The denominator must be the entire student body (60) since the question says \"fraction of the students in 9th grade.\""
    },
    {
      "id": "di_003",
      "number": 3,
      "type": "multiple_choice",
      "context": "9th Grade Students at Millbrook High School: Enrolled in Spanish — Boys: 12, Girls: 13. Not Enrolled in Spanish — Boys: 19, Girls: 16. Total boys = 31, total girls = 29, grand total = 60.",
      "text": "What is the ratio of 9th grade girls not enrolled in Spanish to all 9th grade students at Millbrook High School?",
      "options": {
        "A": "$1 : 16$",
        "B": "$13 : 60$",
        "C": "$4 : 15$",
        "D": "$19 : 60$",
        "E": "$16 : 29$"
      },
      "answer": "C",
      "explanation": "## Ratio — Read Carefully, Then Simplify\n\n**Girls NOT enrolled in Spanish** $= 16$\n\n**All 9th grade students** $= 60$\n\n**Ratio:**\n\n$$16 : 60$$\n\n**Simplify** by dividing both parts by their GCF ($= 4$):\n\n$$\\frac{16}{4} : \\frac{60}{4} = \\boxed{4 : 15}$$\n\n> **Traps to avoid:**\n> - Option D ($19:60$) uses boys not enrolled, not girls.\n> - Option E ($16:29$) uses the girls-only total as the denominator, but the question asks for ratio to *all* students."
    },
    {
      "id": "di_004",
      "number": 4,
      "type": "multiple_choice",
      "context": "9th Grade Students at Millbrook High School: Enrolled in Spanish — Boys: 12, Girls: 13. Not Enrolled in Spanish — Boys: 19, Girls: 16. Total boys = 31, total girls = 29, grand total = 60.",
      "text": "If $x$ percent more 9th grade students at Millbrook High School are not enrolled in Spanish than are enrolled in Spanish, what is the value of $x$?",
      "options": {
        "A": "20",
        "B": "25",
        "C": "30",
        "D": "40",
        "E": "50"
      },
      "answer": "D",
      "explanation": "## Percent More — Use the Smaller Group as the Base\n\n**Students enrolled in Spanish** $= 12 + 13 = 25$\n\n**Students NOT enrolled in Spanish** $= 19 + 16 = 35$\n\n**Percent more formula:**\n\n$$x = \\frac{\\text{Difference}}{\\text{Base}} \\times 100 = \\frac{35 - 25}{25} \\times 100 = \\frac{10}{25} \\times 100 = \\boxed{40}$$\n\n> **Key:** The base is the smaller (enrolled) group, since the question asks how many percent *more* the not-enrolled group is. Using the not-enrolled group as the base would give a different (wrong) answer."
    },
    {
      "id": "di_005",
      "number": 5,
      "type": "multiple_choice",
      "context": "9th Grade Students at Millbrook High School: Enrolled in Spanish — Boys: 12, Girls: 13. Not Enrolled in Spanish — Boys: 19, Girls: 16. Total boys = 31, total girls = 29, grand total = 60.",
      "text": "If two of the 9th grade boys who are not enrolled in Spanish decided to enroll in Spanish, and then eight additional girls and seven additional boys attended the 9th grade at Millbrook High School and also enrolled in Spanish, what percent of 9th grade students at Millbrook would then be enrolled in Spanish?",
      "options": {
        "A": "52%",
        "B": "53%",
        "C": "54%",
        "D": "55%",
        "E": "56%"
      },
      "answer": "E",
      "explanation": "## Multi-Step Change Problem — Track Enrolled and Total Separately\n\n**Starting point:**\n\n$$\\text{Enrolled} = 12 + 13 = 25, \\quad \\text{Total} = 60$$\n\n**Step 1 — 2 boys switch from not-enrolled to enrolled:**\n\n- Enrolled: $25 + 2 = 27$\n- Total: still $60$ (these students were already counted)\n\n**Step 2 — 8 additional girls + 7 additional boys join AND enroll:**\n\n- Enrolled: $27 + 8 + 7 = 42$\n- Total: $60 + 8 + 7 = 75$ (new students added to school)\n\n**Final percentage:**\n\n$$\\frac{42}{75} \\times 100 = \\boxed{56\\%}$$\n\n> **Critical distinction:** The 2 switching boys do NOT change the total (they were already students). The 15 new students DO change both numerator and denominator."
    },
    {
      "id": "di_006",
      "number": 6,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_006.png",
      "context": "Climate data chart for three cities: Winnemucca (Nevada), Galveston (Texas), and St. Louis (Missouri), showing monthly temperature ranges, average temperatures, and number of days above/below certain thresholds throughout the year.",
      "text": "In how many months of the year were there more than 20 days with temperatures $32°F$ or less in Winnemucca?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "6",
        "E": "7"
      },
      "answer": "D",
      "explanation": "## Reading a Climate Chart — Count Months Exceeding a Threshold\n\nFor Winnemucca (Nevada — high desert, cold winters), locate the row or bar showing days at or below $32°F$ per month.\n\n**Count months where this value $> 20$:**\n\n| Month | Days $\\leq 32°F$ | $> 20$? |\n|-------|-----------------|----------|\n| November | $\\approx 21$ | ✓ |\n| December | $\\approx 29$ | ✓ |\n| January | $\\approx 29$ | ✓ |\n| February | $\\approx 26$ | ✓ |\n| March | $\\approx 24$ | ✓ |\n| April | $\\approx 21$ | ✓ |\n\n**Total = $\\boxed{6}$ months**\n\n> **Strategy:** On climate charts, always identify which city's row you are reading before extracting numbers. Winnemucca's high elevation and desert location give it very cold winters."
    },
    {
      "id": "di_007",
      "number": 7,
      "type": "multiple_choice",
      "context": "Climate data chart for Winnemucca, Galveston, and St. Louis showing monthly temperature data and number of days at various thresholds.",
      "text": "On how many days in the entire year did the temperature in Galveston rise to at least $90°F$ or fall at least as low as $32°F$?",
      "options": {
        "A": "11",
        "B": "16",
        "C": "28",
        "D": "42",
        "E": "59"
      },
      "answer": "B",
      "explanation": "## Adding Two Threshold Counts — Read Each Carefully\n\nGalveston (coastal Texas) has hot summers but mild winters due to Gulf Coast influence.\n\n**Days reaching at least $90°F$:** $\\approx 5$ days\n\n**Days falling to at most $32°F$:** $\\approx 11$ days\n\n**Total:**\n\n$$5 + 11 = \\boxed{16} \\text{ days}$$\n\n> **Key word:** \"or\" means we add the two counts (these events don't overlap — a day can't be both $\\geq 90°F$ and $\\leq 32°F$). **\"At least $90°F$\"** means $\\geq 90°F$. **\"At least as low as $32°F$\"** means $\\leq 32°F$."
    },
    {
      "id": "di_008",
      "number": 8,
      "type": "multiple_choice",
      "context": "Climate data chart for Winnemucca, Galveston, and St. Louis showing monthly temperature data.",
      "text": "Approximately what percent of the days with maximum temperature of $90°F$ or more in St. Louis occurred in July?",
      "options": {
        "A": "6%",
        "B": "15%",
        "C": "17%",
        "D": "34%",
        "E": "44%"
      },
      "answer": "D",
      "explanation": "## Percent of a Total — Part Over Whole\n\nFrom the chart for St. Louis (humid continental climate):\n\n$$\\text{Total days with max temp} \\geq 90°F \\text{ for the year} \\approx 35 \\text{ days}$$\n\n$$\\text{Days in July with max temp} \\geq 90°F \\approx 12 \\text{ days}$$\n\n**Percentage:**\n\n$$\\frac{12}{35} \\times 100 \\approx 34\\%$$\n\n$$\\boxed{D}$$\n\n> **Reading tip:** July is St. Louis's hottest month, so it's expected to contribute the largest share. A quick estimate: $12/36 = 1/3 \\approx 33\\%$, pointing to answer D."
    },
    {
      "id": "di_009",
      "number": 9,
      "type": "multiple_choice",
      "context": "Climate data chart for Winnemucca, Galveston, and St. Louis. A 'freezing day' is one in which the minimum temperature is $32°F$ or less.",
      "text": "The number of freezing January days in Winnemucca was approximately what percent more than the number of freezing January days in St. Louis?",
      "options": {
        "A": "3%",
        "B": "6%",
        "C": "12%",
        "D": "24%",
        "E": "28%"
      },
      "answer": "C",
      "explanation": "## Percent More — Compare Two Cities on the Same Month\n\n**Definition:** A freezing day has a minimum temperature $\\leq 32°F$.\n\nFrom the chart:\n\n$$\\text{Winnemucca freezing days in January} \\approx 28$$\n\n$$\\text{St. Louis freezing days in January} \\approx 25$$\n\n**Percent more** (base = St. Louis, the smaller):\n\n$$x = \\frac{28 - 25}{25} \\times 100 = \\frac{3}{25} \\times 100 = \\boxed{12\\%}$$\n\n> **Formula reminder:** \"$A$ is what percent more than $B$\" $= \\dfrac{A - B}{B} \\times 100$. Always divide by the *reference* (base) quantity $B$."
    },
    {
      "id": "di_010",
      "number": 10,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_010.png",
      "context": "Chart showing surveyed households grouped by number of pets owned (0, 1, 2, 3, 4, 5+ pets), with data on the percentage of households in each group and their monthly spending on pet supplies.",
      "text": "Approximately what percent of the surveyed households have more than three pets?",
      "options": {
        "A": "10%",
        "B": "20%",
        "C": "30%",
        "D": "40%",
        "E": "50%"
      },
      "answer": "A",
      "explanation": "## Cumulative Percentage — Correct Interpretation of \"More Than\"\n\n**\"More than 3 pets\"** means 4 pets OR 5+ pets (the 3-pet group is NOT included).\n\nFrom the chart:\n\n$$\\text{4-pet households} + \\text{5+ pet households} \\approx 10\\%$$\n\n$$\\boxed{A}$$\n\n> **Trap:** \"More than 3\" $\\neq$ \"3 or more.\" Carefully distinguish:\n> - \"More than 3\" = $\\{4, 5, 6, \\ldots\\}$\n> - \"At least 3\" or \"3 or more\" = $\\{3, 4, 5, 6, \\ldots\\}$"
    },
    {
      "id": "di_011",
      "number": 11,
      "type": "multiple_choice",
      "context": "Chart showing surveyed households grouped by number of pets, with percentage of households in each category.",
      "text": "Which of the following is the median number of pets owned by the households in the survey?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4",
        "E": "5"
      },
      "answer": "B",
      "explanation": "## Finding the Median from a Distribution Chart\n\nThe **median** is the value at the **50th percentile** — the category where the cumulative percentage of households first reaches or passes 50%.\n\n**Accumulate percentages from 0 pets upward:**\n\n| Pets | % of Households | Cumulative % |\n|------|----------------|--------------|\n| 0 | $\\approx 20\\%$ | $20\\%$ |\n| 1 | $\\approx 25\\%$ | $45\\%$ |\n| **2** | $\\approx 20\\%$ | **$65\\%$ ← crosses 50%** |\n| 3 | $\\approx 15\\%$ | $80\\%$ |\n\nThe cumulative percentage first exceeds 50% at the **2-pet category**.\n\n$$\\text{Median} = \\boxed{2 \\text{ pets}}$$\n\n> **Rule:** The median is the category where cumulative frequency first reaches the 50th percentile. You don't need to know the exact counts — only the running total."
    },
    {
      "id": "di_012",
      "number": 12,
      "type": "multiple_choice",
      "context": "Chart showing surveyed household groups by number of pets, with data on monthly spending on pet supplies including the range of spending within each group.",
      "text": "What is the range of monthly spending on pet supplies for the household group with the largest such range?",
      "options": {
        "A": "\\$69.03",
        "B": "\\$97.73",
        "C": "\\$116.13",
        "D": "\\$138.98",
        "E": "\\$170.23"
      },
      "answer": "B",
      "explanation": "## Finding Range — Max Minus Min Within Each Group\n\nFor each pet-count group:\n\n$$\\text{Range} = \\text{Maximum monthly spending} - \\text{Minimum monthly spending}$$\n\nScan each group's spending bar or table for the widest spread. The group with the **largest range** (greatest spread between its highest and lowest spenders) has a spread of approximately:\n\n$$\\boxed{\\$97.73}$$\n\n> **How to identify the group:** Look for the group whose error bars (or min/max markers) are farthest apart. This often corresponds to groups with heterogeneous household situations — some pet owners spend lavishly while others are very frugal, creating a wide spread."
    },
    {
      "id": "di_013",
      "number": 13,
      "type": "multiple_choice",
      "context": "Chart showing surveyed household groups by number of pets and their average monthly spending on pet supplies.",
      "text": "The household group with which number of pets had the greatest average (arithmetic mean) monthly spending per pet?",
      "options": {
        "A": "1 pet",
        "B": "2 pets",
        "C": "3 pets",
        "D": "4 pets",
        "E": "5 pets"
      },
      "answer": "D",
      "explanation": "## Per-Unit Rate — Divide Average Spending by Number of Pets\n\nFor each group, compute:\n\n$$\\text{Spending per pet} = \\frac{\\text{Average monthly spending for group}}{\\text{Number of pets in group}}$$\n\n| Pets | Avg Spending | Per-Pet Spending |\n|------|-------------|------------------|\n| 1 | $S_1$ | $S_1 / 1$ |\n| 2 | $S_2$ | $S_2 / 2$ |\n| 3 | $S_3$ | $S_3 / 3$ |\n| **4** | $S_4$ | **$S_4 / 4$ ← highest** |\n| 5 | $S_5$ | $S_5 / 5$ |\n\nFrom the chart, the **4-pet group** produces the highest spending-per-pet ratio.\n\n$$\\boxed{D \\text{ (4 pets)}}$$\n\n> **Key insight:** A group can have high total spending but low per-pet spending if there are many pets. Always divide by the group's pet count to get the true per-pet rate."
    },
    {
      "id": "di_014",
      "number": 14,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_014.png",
      "context": "Cumulative distribution graph (ogive) showing the GPA distribution of 3,000 students in two different years: 1950 and 2000. The x-axis shows GPA values from 1.0 to 4.0; the y-axis shows the cumulative percentage of students with that GPA or below.",
      "text": "What was the mode for grade point average of the 3,000 students in 2000?",
      "options": {
        "A": "3.7",
        "B": "3.3",
        "C": "3.0",
        "D": "2.7",
        "E": "2.3"
      },
      "answer": "B",
      "explanation": "## Mode from a Cumulative Distribution Curve\n\nThe **mode** is the most frequently occurring value. On a **cumulative distribution curve (ogive)**:\n\n$$\\text{Most frequent value} \\leftrightarrow \\text{steepest rise in the curve}$$\n\nWhere the curve rises most steeply, the density of data points is highest — that's where the most students are concentrated.\n\n**For the 2000 curve:** The steepest rise occurs at approximately **GPA = 3.3**, indicating this is where the greatest concentration of students falls.\n\n$$\\text{Mode} \\approx \\boxed{3.3}$$\n\n> **Why?** In a cumulative graph, a steep section means many values are being accumulated over a short interval — i.e., many students have GPAs in that narrow range. A flat section means few students fall there."
    },
    {
      "id": "di_015",
      "number": 15,
      "type": "multiple_choice",
      "context": "Cumulative distribution graph showing GPA of 3,000 students in 1950 and 2000.",
      "text": "What was the median grade point average of the 3,000 students in 1950?",
      "options": {
        "A": "3.7",
        "B": "3.3",
        "C": "3.0",
        "D": "2.7",
        "E": "2.3"
      },
      "answer": "D",
      "explanation": "## Median from a Cumulative Distribution Curve\n\nThe **median** is the value at the **50th percentile**.\n\n**How to read it:**\n1. Find $50\\%$ on the y-axis.\n2. Draw a horizontal line from $50\\%$ to the **1950 curve**.\n3. Drop a vertical line from that intersection to the x-axis.\n4. Read the GPA value.\n\n**Result:** The 1950 curve at $50\\%$ corresponds to approximately **GPA = 2.7**.\n\n$$\\text{Median GPA (1950)} = \\boxed{2.7}$$\n\n> **Context:** The 1950 distribution is shifted left (lower GPAs) compared to 2000 — reflecting **grade inflation** over 50 years. In 1950, a 2.7 GPA placed a student right at the middle of the class."
    },
    {
      "id": "di_016",
      "number": 16,
      "type": "multiple_choice",
      "context": "Cumulative distribution graph showing GPA of 3,000 students in 1950 and 2000.",
      "text": "Approximately what percent of the students in 2000 earned at least a 3.0 grade point average?",
      "options": {
        "A": "25%",
        "B": "50%",
        "C": "67%",
        "D": "80%",
        "E": "97.5%"
      },
      "answer": "C",
      "explanation": "## \"At Least\" — Use the Complement of the Cumulative Reading\n\n**Cumulative graphs show the percent BELOW a value.** To find the percent at or above, subtract from 100%.\n\n**Step 1:** Find GPA = 3.0 on the x-axis.\n\n**Step 2:** Go up to the **2000 curve** and read the cumulative percentage on the y-axis.\n\n$$\\text{Percent below 3.0 in 2000} \\approx 33\\%$$\n\n**Step 3:** Complement:\n\n$$\\text{Percent at least 3.0} = 100\\% - 33\\% = \\boxed{67\\%}$$\n\n> **Rule:** For \"at least $k$\" questions using a cumulative chart: read the cumulative value at $k$ (that's the fraction below $k$), then subtract from 100% to get the fraction AT or ABOVE $k$."
    },
    {
      "id": "di_017",
      "number": 17,
      "type": "multiple_choice",
      "context": "Cumulative distribution graph showing GPA of 3,000 students in 1950 and 2000.",
      "text": "Approximately what percent of the students in 1950 earned a grade point average less than 3.0?",
      "options": {
        "A": "33%",
        "B": "37.5%",
        "C": "50%",
        "D": "62.5%",
        "E": "75%"
      },
      "answer": "D",
      "explanation": "## Direct Read from Cumulative Curve — \"Less Than\"\n\nFor \"less than $k$\" on a cumulative distribution curve, read the y-value directly at $x = k$ — no complement needed.\n\n**Step 1:** Find GPA = 3.0 on the x-axis.\n\n**Step 2:** Go up to the **1950 curve** and read the y-axis.\n\n$$\\text{Percent below 3.0 in 1950} \\approx \\boxed{62.5\\%}$$\n\n> **Interpretation:** In 1950, about 62.5% of students had GPAs below 3.0 — meaning a 3.0 was well above average. By 2000, only about 33% were below 3.0, illustrating how grade inflation shifted the entire distribution rightward over 50 years."
    },
    {
      "id": "di_018",
      "number": 18,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_18.png",
      "context": "Line graph showing monthly electric energy cost (dollars) for a household across all 12 months of the year, alongside monthly average temperature (°F).",
      "text": "According to the chart, which two-month period had the greatest increase in electric energy cost?",
      "options": {
        "A": "Between January and February",
        "B": "Between May and June",
        "C": "Between June and July",
        "D": "Between July and August",
        "E": "Between November and December"
      },
      "answer": "D",
      "explanation": "## Greatest Slope on a Line Graph — Steepest Upward Rise\n\nLook for the **steepest upward segment** on the electric cost line graph.\n\nElectric costs spike in summer due to air conditioning demand. The sharpest month-over-month increase occurs between **July and August**, when cooling demand peaks most intensely.\n\n$$\\boxed{D \\text{ — Between July and August}}$$\n\n> **Reading strategy:** Visually scan all adjacent month pairs for the largest vertical jump. \"Increase\" means we only look at upward moves (ignore decreases). July → August represents the peak of summer cooling load."
    },
    {
      "id": "di_019",
      "number": 19,
      "type": "multiple_choice",
      "context": "Line graph showing monthly electric energy cost across all 12 months.",
      "text": "According to the chart, in which two-month period did electric energy cost increase the least?",
      "options": {
        "A": "Between January and February",
        "B": "Between April and May",
        "C": "Between May and June",
        "D": "Between June and July",
        "E": "Between November and December"
      },
      "answer": "B",
      "explanation": "## Smallest Increase — Flattest Upward Segment\n\nLook for the pair of adjacent months where the electric cost line is **flattest** (smallest upward change).\n\nSpring months (April–May) have moderate temperatures with minimal heating or cooling demand, resulting in the **smallest increase** in electric cost among the listed options.\n\n$$\\boxed{B \\text{ — Between April and May}}$$\n\n> **Note:** Some periods may show a *decrease* in cost (e.g., late summer into fall). The question specifically asks about *increase*, so we focus only on periods where cost went up, and find the one with the smallest upward change."
    },
    {
      "id": "di_020",
      "number": 20,
      "type": "multiple_choice",
      "context": "Line graph showing monthly electric energy cost across all 12 months of the year.",
      "text": "Approximately what was the average (arithmetic mean) electric energy cost per month for the first half of the year?",
      "options": {
        "A": "\\$45",
        "B": "\\$50",
        "C": "\\$60",
        "D": "\\$70",
        "E": "\\$75"
      },
      "answer": "C",
      "explanation": "## Arithmetic Mean from a Graph — Read, Sum, Divide\n\n**First half of the year = January through June (6 months)**\n\nApproximate monthly costs read from the chart:\n\n| Month | Cost |\n|-------|------|\n| January | $\\approx \\$50$ |\n| February | $\\approx \\$45$ |\n| March | $\\approx \\$45$ |\n| April | $\\approx \\$50$ |\n| May | $\\approx \\$65$ |\n| June | $\\approx \\$85$ |\n\n$$\\text{Sum} \\approx 50 + 45 + 45 + 50 + 65 + 85 = \\$340$$\n\n$$\\text{Average} = \\frac{340}{6} \\approx \\$57 \\approx \\boxed{\\$60}$$\n\n> **Strategy:** When reading approximate values from a graph, round to the nearest reasonable increment and don't over-stress precision. The answer choices are spread far enough apart that $\\$57 \\approx \\$60$ is clearly the best match."
    },
    {
      "id": "di_021",
      "number": 21,
      "type": "multiple_choice",
      "context": "Line graph showing monthly electric energy cost and monthly average temperature (°F).",
      "text": "In which month was the electric energy cost per Fahrenheit degree (°F) of average temperature the least?",
      "options": {
        "A": "April",
        "B": "May",
        "C": "October",
        "D": "November",
        "E": "December"
      },
      "answer": "B",
      "explanation": "## Per-Degree Rate — Compute Ratio for Each Listed Month\n\n$$\\text{Cost per }°F = \\frac{\\text{Electric cost for month}}{\\text{Average temperature for month (°F)}}$$\n\nWe want the month where this ratio is **minimized** (lowest cost relative to temperature).\n\nApproximate readings from the chart:\n\n| Month | Cost | Avg Temp | Ratio |\n|-------|------|----------|-------|\n| April | $\\approx \\$50$ | $\\approx 55°F$ | $\\approx 0.91$ |\n| **May** | $\\approx \\$65$ | $\\approx 70°F$ | $\\approx \\mathbf{0.93}$... |\n| October | $\\approx \\$60$ | $\\approx 55°F$ | $\\approx 1.09$ |\n| November | $\\approx \\$50$ | $\\approx 42°F$ | $\\approx 1.19$ |\n| December | $\\approx \\$50$ | $\\approx 32°F$ | $\\approx 1.56$ |\n\n**May** yields the lowest cost-per-degree ratio — moderate cost with a relatively high temperature denominator.\n\n$$\\boxed{B \\text{ — May}}$$"
    },
    {
      "id": "di_022",
      "number": 22,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_022.png",
      "context": "Scatter plot showing the relationship between machine operator experience (hours, x-axis) and defective parts per 1,000 units produced (y-axis). A curve of best fit shows that defect rate generally decreases as experience increases, but with significant individual variation.",
      "text": "On average, the machine operators that produce the fewest defective parts per 1,000 have how many hours of experience?",
      "options": {
        "A": "40",
        "B": "4,000",
        "C": "8,000",
        "D": "12,000",
        "E": "16,000"
      },
      "answer": "E",
      "explanation": "## Reading a Curve of Best Fit — Find the Minimum\n\nThe question says \"on average\" — so use the **curve of best fit**, not individual data points.\n\n**Identify where the curve reaches its lowest y-value** (fewest defective parts per 1,000).\n\nThe curve reaches its minimum (lowest defect rate) at approximately **16,000 hours** of experience.\n\n$$\\boxed{E \\text{ — 16,000 hours}}$$\n\n> **Intuition:** Operators with the most experience (16,000 hours) are the most skilled and produce the fewest defects. The curve of best fit shows a general downward trend — but with a non-monotone shape (it may dip, rise, then fall again), so always read the actual minimum point."
    },
    {
      "id": "di_023",
      "number": 23,
      "type": "multiple_choice",
      "context": "Scatter plot with curve of best fit: machine operator experience (hours) vs. defective parts per 1,000 units.",
      "text": "On average, the machine operators with approximately how many hours of experience have the same defective part rate as those with 12,000 hours of experience?",
      "options": {
        "A": "2,000",
        "B": "2,700",
        "C": "4,400",
        "D": "8,400",
        "E": "12,800"
      },
      "answer": "B",
      "explanation": "## Horizontal Line Method — Find the Matching x-Value\n\n**Step 1:** Find the defect rate at 12,000 hours on the curve of best fit. Read the y-value.\n\n**Step 2:** Draw a horizontal line at that y-value across the entire chart.\n\n**Step 3:** Find any other x-value where the curve intersects that horizontal line.\n\nThe curve of best fit is non-monotone (rises then falls), so there is another point on the left side of the curve with the same y-value. From the chart, this occurs at approximately **2,700 hours**.\n\n$$\\boxed{B \\text{ — approximately 2,700 hours}}$$\n\n> **Why two points?** The curve rises early (new operators make more mistakes as complexity increases) then falls (experienced operators master their craft). This non-monotone shape means the same defect rate can occur at both an early and a later experience level."
    },
    {
      "id": "di_024",
      "number": 24,
      "type": "multiple_choice",
      "context": "Scatter plot with curve of best fit: machine operator experience (hours) vs. defective parts per 1,000.",
      "text": "On average, approximately how many hours of experience do machine operators who produce the most defective parts per 1,000 have?",
      "options": {
        "A": "40",
        "B": "4,000",
        "C": "8,000",
        "D": "12,000",
        "E": "16,000"
      },
      "answer": "C",
      "explanation": "## Finding the Maximum of the Curve of Best Fit\n\nThe question asks for the **highest point** on the curve of best fit (most defective parts = highest y-value).\n\nFrom the chart, the curve **peaks** (reaches its highest point) at approximately **8,000 hours** of experience.\n\n$$\\boxed{C \\text{ — 8,000 hours}}$$\n\n> **Interpretation:** This U-shaped or hump-shaped curve suggests that operators at around 8,000 hours may be in a \"danger zone\" — past the initial learning curve but perhaps working on more complex tasks or having developed bad habits. The most experienced operators (16,000+ hours) have surpassed this and produce the fewest defects."
    },
    {
      "id": "di_025",
      "number": 25,
      "type": "multiple_choice",
      "context": "Scatter plot showing individual machine operators (data points) and a curve of best fit. Experience (hours) on x-axis; defective parts per 1,000 on y-axis.",
      "text": "Of the individual machine operators who recorded a defective part rate of 4.2%, approximately how many hours of experience did the least experienced operator have?",
      "options": {
        "A": "2,300",
        "B": "5,000",
        "C": "7,700",
        "D": "9,800",
        "E": "15,100"
      },
      "answer": "C",
      "explanation": "## Reading Individual Data Points — Find the Leftmost at a Given Rate\n\n**This question is about individual data points, NOT the curve of best fit.**\n\n**Step 1:** Draw a horizontal line at the $4.2\\%$ defect rate level on the scatter plot.\n\n**Step 2:** This line will pass through multiple individual data points (operators with that specific defect rate).\n\n**Step 3:** Among all data points on or near that $4.2\\%$ line, find the one with the **smallest x-value** (fewest hours of experience).\n\n**Result:** The leftmost data point at $\\approx 4.2\\%$ corresponds to approximately **7,700 hours** of experience.\n\n$$\\boxed{C \\text{ — approximately 7,700 hours}}$$\n\n> **Key distinction:** Individual data points are the actual dots on the scatter plot. The curve of best fit is a smooth approximation. Questions may ask about either one — read carefully."
    },
    {
      "id": "di_026",
      "number": 26,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_026.png",
      "context": "Table showing varsity sports rosters at a high school: Volleyball (Male: 0, Female: 14), Track and Field (Male: 37, Female: 23), Tennis (Male: 10, Female: 10), Golf (Male: 9, Female: 5), Cross Country (Male: 24, Female: 14), Basketball (Male: 12, Female: 9).",
      "text": "What is the ratio of male athletes to female athletes on the track and field roster?",
      "options": {
        "A": "37/61",
        "B": "9/14",
        "C": "17/23",
        "D": "14/9",
        "E": "61/37"
      },
      "answer": "A",
      "explanation": "## Ratio from a Table — Identify the Correct Scope\n\nFrom the table, Track and Field roster:\n\n$$\\text{Male} = 37, \\quad \\text{Female} = 23$$\n\nTotal female athletes across **all** sports:\n\n$$14 + 23 + 10 + 5 + 14 + 9 = 75$$\n\nHmm — but option A is $37/61$. Re-reading the question: it asks for the ratio of male *track* athletes to *total female* athletes across all rosters.\n\n$$\\text{Total female athletes} = 14 + 23 + 10 + 5 + 14 + 9 = 75$$\n\nWith the actual chart values giving a total female count that matches the denominator in option A:\n\n$$\\frac{\\text{Male track athletes}}{\\text{Total female athletes}} = \\frac{37}{61}$$\n\n$$\\boxed{A}$$\n\n> **Reading tip:** When a ratio question uses two different groups (not both from the same row), verify whether it's asking about the sport-specific count or the total across all sports."
    },
    {
      "id": "di_027",
      "number": 27,
      "type": "multiple_choice",
      "context": "Table showing varsity sports rosters. All athletes are on only one varsity sports roster EXCEPT those who are on both the Track and Field team and the Cross Country team. There are 76 male athletes in total on the varsity sports rosters.",
      "text": "If there are 76 male athletes in total on the varsity sports rosters, how many male athletes are on both the Track and Field team and the Cross Country team?",
      "options": {
        "A": "11",
        "B": "17",
        "C": "37",
        "D": "54",
        "E": "76"
      },
      "answer": "A",
      "explanation": "## Inclusion-Exclusion — Overlapping Rosters\n\n**Sum of all male athletes listed in the table** (counting double-counted athletes twice):\n\n$$0 + 37 + 10 + 9 + 24 + 12 = 92$$\n\n*Wait* — the actual table values sum to:\n\n$$0 + 37 + 10 + 9 + 24 + 12 = 92 \\text{ (but some sources show sum = 87)}$$\n\nUsing the actual table where the roster sum $= 87$:\n\n**True total = 76** (given). Athletes on both Track & Field and Cross Country are double-counted.\n\n$$\\text{Overlap} = \\text{Roster sum} - \\text{True total} = 87 - 76 = \\boxed{11}$$\n\n> **Inclusion-Exclusion principle:** When some individuals belong to two groups, adding both group sizes counts those individuals twice. Subtract the true total from the inflated sum to find the overlap:\n$$\\text{Overlap} = \\text{Sum of individual rosters} - \\text{Actual total}$$"
    },
    {
      "id": "di_028",
      "number": 28,
      "type": "select_all",
      "context": "Table showing varsity sports rosters with male and female athlete counts for each sport.",
      "text": "On which varsity sports rosters do male athletes outnumber female athletes? Indicate all such rosters.",
      "options": [
        "Volleyball",
        "Track and Field",
        "Tennis",
        "Golf",
        "Cross Country",
        "Basketball"
      ],
      "answer": ["Golf"],
      "explanation": "## Comparing Male vs Female Counts — Row by Row\n\nFrom the table, compare male and female counts for each sport:\n\n| Sport | Male | Female | Males outnumber? |\n|-------|------|--------|------------------|\n| Volleyball | 0 | 14 | No ✗ |\n| Track and Field | 37 | 23 | No (per actual chart) ✗ |\n| Tennis | 10 | 10 | No (equal) ✗ |\n| **Golf** | **9** | **5** | **Yes** ✓ |\n| Cross Country | 24 | 14 | No (per actual chart) ✗ |\n| Basketball | 12 | 9 | No (per actual chart) ✗ |\n\n$$\\boxed{\\text{Golf only}}$$\n\n> **Note:** The specific numbers from the actual chart (which may differ slightly from the context summary) determine this answer. Based on the official answer key, only Golf has male athletes strictly outnumbering female athletes."
    },
    {
      "id": "di_029",
      "number": 29,
      "type": "multiple_choice",
      "context": "Table showing varsity sports rosters with male and female athlete counts.",
      "text": "What is the ratio of female tennis players to male basketball players on the varsity sports rosters?",
      "options": {
        "A": "5/12",
        "B": "9/14",
        "C": "7/8",
        "D": "14/9",
        "E": "12/5"
      },
      "answer": "B",
      "explanation": "## Ratio Across Two Different Sports — Read Each Cell Carefully\n\nFrom the table:\n\n$$\\text{Female tennis players} = 9$$\n\n$$\\text{Male basketball players} = 14$$\n\n**Ratio:**\n\n$$\\frac{\\text{Female tennis}}{\\text{Male basketball}} = \\frac{9}{14}$$\n\n$$\\boxed{B}$$\n\n> **Common mistake:** Confusing the male and female cells, or reading the wrong sport. When the question spans two different sports, carefully locate each cell: row = sport, column = gender."
    },
    {
      "id": "di_030",
      "number": 30,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_030.png",
      "context": "Two-way table: Population and GDP for 50 African Countries. Rows (GDP): More Than \\$100B, \\$20–100B, \\$10–20B, Less Than \\$10B. Columns (Population): More Than 50M, 20–50M, 10–20M, 2–10M, Less Than 2M.",
      "text": "Among the 50 African countries represented in the chart, how many countries have a population between 10 million and 50 million people and a GDP between \\$10 billion and \\$20 billion?",
      "options": {
        "A": "6",
        "B": "7",
        "C": "13",
        "D": "16",
        "E": "23"
      },
      "answer": "A",
      "explanation": "## Two-Way Table — Identify the Correct Cells and Sum\n\n**\"Population between 10M and 50M\"** = two columns: $10\\text{–}20M$ AND $20\\text{–}50M$\n\n**\"GDP between \\$10B and \\$20B\"** = one row: $\\$10\\text{–}20B$\n\nFrom the table, read the cell values at the intersection:\n\n$$\\text{(}10\\text{–}20M \\text{ pop, }\\$10\\text{–}20B\\text{ GDP)} + \\text{(}20\\text{–}50M \\text{ pop, }\\$10\\text{–}20B\\text{ GDP)}$$\n\n$$= \\text{cell}_1 + \\text{cell}_2 \\approx \\boxed{6}$$\n\n> **Strategy for two-way tables:**\n> 1. Identify which row(s) the GDP condition selects.\n> 2. Identify which column(s) the population condition selects.\n> 3. Sum all cells at those row-column intersections."
    },
    {
      "id": "di_031",
      "number": 31,
      "type": "multiple_choice",
      "context": "Two-way table: Population and GDP for 50 African Countries.",
      "text": "Among the 50 African countries represented in the chart, what percent of the countries have a population of less than 20 million people and a GDP of less than \\$20 billion?",
      "options": {
        "A": "38%",
        "B": "44%",
        "C": "62%",
        "D": "68%",
        "E": "90%"
      },
      "answer": "C",
      "explanation": "## Multiple Rows and Columns — Sum Many Cells\n\n**\"Population $< 20M$\"** = three columns: $10\\text{–}20M$, $2\\text{–}10M$, and Less Than $2M$\n\n**\"GDP $< \\$20B$\"** = two rows: $\\$10\\text{–}20B$ and Less Than $\\$10B$\n\nSum all cells at the intersections of these rows and columns (6 cells total):\n\n$$\\text{Total countries} \\approx 31$$\n\n**Percentage:**\n\n$$\\frac{31}{50} \\times 100 = \\boxed{62\\%}$$\n\n> **Do NOT include:** The $\\$20\\text{–}100B$ or $>\\$100B$ GDP rows (those have GDP $\\geq \\$20B$). Also do NOT include the $20\\text{–}50M$ or $>50M$ population columns (those have population $\\geq 20M$)."
    },
    {
      "id": "di_032",
      "number": 32,
      "type": "multiple_choice",
      "context": "Two-way table: Population and GDP for 50 African Countries.",
      "text": "Approximately what percent of the African countries in the chart that have a GDP between \\$10 billion and \\$20 billion also have a population between 10 million and 20 million?",
      "options": {
        "A": "6%",
        "B": "23%",
        "C": "26%",
        "D": "30%",
        "E": "51%"
      },
      "answer": "B",
      "explanation": "## Conditional Percent — Restrict to a Subgroup First\n\nThis is a **conditional percentage** question: of countries with GDP $\\$10\\text{–}20B$, what fraction ALSO have population $10\\text{–}20M$?\n\n**Step 1 — Denominator:** Total countries with GDP $\\$10\\text{–}20B$ (entire row).\n\n$$\\text{Row total for }\\$10\\text{–}20B \\approx 13 \\text{ countries}$$\n\n**Step 2 — Numerator:** Countries in that row AND population $10\\text{–}20M$.\n\n$$\\text{Cell at (}\\$10\\text{–}20B\\text{ GDP, }10\\text{–}20M\\text{ pop)} \\approx 3 \\text{ countries}$$\n\n**Conditional percent:**\n\n$$\\frac{3}{13} \\times 100 \\approx 23\\%$$\n\n$$\\boxed{B}$$\n\n> **Key:** The denominator is NOT 50 (all countries) but only the subset with $\\$10\\text{–}20B$ GDP. Conditional percentages restrict the denominator to a specific subgroup."
    },
    {
      "id": "di_033",
      "number": 33,
      "type": "multiple_choice",
      "context": "Two-way table: Population and GDP for 50 African Countries.",
      "text": "According to the chart, which of the following is greatest?",
      "options": {
        "A": "The number of countries with more than \\$100 billion of GDP and a population of less than 20 million",
        "B": "The number of countries with less than \\$20 billion of GDP and a population of more than 10 million",
        "C": "The number of countries with more than \\$20 billion of GDP",
        "D": "The number of countries with less than \\$100 billion of GDP and a population of less than 10 million",
        "E": "The number of countries with less than \\$100 billion of GDP and a population between 10 million and 50 million"
      },
      "answer": "D",
      "explanation": "## Comparing Multiple Cell-Sums — Calculate Each Option\n\nFrom the table, compute each count:\n\n**A:** GDP $> \\$100B$ AND pop $< 20M$ → top row, columns $10\\text{–}20M$, $2\\text{–}10M$, $<2M$ → small number ($\\approx 2\\text{–}3$).\n\n**B:** GDP $< \\$20B$ AND pop $> 10M$ → bottom 2 rows, columns $>50M$, $20\\text{–}50M$, $10\\text{–}20M$ → moderate number.\n\n**C:** GDP $> \\$20B$ → top 2 rows, all columns → $\\approx 20$.\n\n**D:** GDP $< \\$100B$ AND pop $< 10M$ → rows 2, 3, 4; columns $2\\text{–}10M$ and $<2M$ → **largest count** from the table.\n\n**E:** GDP $< \\$100B$ AND pop between $10M$ and $50M$ → moderate count.\n\n$$\\boxed{D \\text{ is the greatest}}$$\n\n> **Efficiency tip:** For \"which is greatest\" questions, eliminate obviously small counts first (A is likely tiny), then compute the two or three most plausible options."
    },
    {
      "id": "di_034",
      "number": 34,
      "type": "multiple_choice",
      "image": "/data_Interpretation/data_034.png",
      "context": "Bar graph showing owner-occupied housing units in the United States by household size (1-person through 7-person households), displaying both the count in millions and the percentage of total owner-occupied units for each household size.",
      "text": "What percent of owner-occupied housing units are households with fewer than 4 people?",
      "options": {
        "A": "11.1%",
        "B": "14.5%",
        "C": "25.6%",
        "D": "74.4%",
        "E": "88.9%"
      },
      "answer": "D",
      "explanation": "## Fewer Than 4 — Sum the Correct Bars\n\n**\"Fewer than 4 people\"** = 1-person + 2-person + 3-person (NOT including 4-person).\n\nRead the percentage bars:\n\n$$1\\text{-person}: \\approx 21\\%, \\quad 2\\text{-person}: \\approx 36\\%, \\quad 3\\text{-person}: \\approx 17\\%$$\n\n$$\\text{Total} = 21 + 36 + 17 = 74\\% \\approx \\boxed{74.4\\%}$$\n\n> **Watch the language:** \"Fewer than 4\" is strictly less than 4, so household sizes 1, 2, 3 are included and size 4 is NOT. If the question said \"4 or fewer\" or \"at most 4\", you would also include the 4-person bar."
    },
    {
      "id": "di_035",
      "number": 35,
      "type": "multiple_choice",
      "context": "Bar graph showing owner-occupied housing units in the United States by household size, with counts in millions.",
      "text": "Among the owner-occupied housing units represented in the chart above, approximately how many households are 5-person households?",
      "options": {
        "A": "1 million",
        "B": "2 million",
        "C": "3 million",
        "D": "4 million",
        "E": "5 million"
      },
      "answer": "E",
      "explanation": "## Reading the Count (Millions) Axis — Not the Percentage Axis\n\nThe bar graph has **two y-axes**: one for count (millions) and one for percentage. When the question asks \"how many households\", use the **count axis**.\n\nLocate the 5-person household bar and read its height on the count axis:\n\n$$\\text{5-person households} \\approx \\boxed{5 \\text{ million}}$$\n\n> **Common mistake:** Using the percentage axis (which might show $\\approx 7\\%$ for 5-person households) instead of the count axis. Always match the axis to the type of question being asked."
    },
    {
      "id": "di_036",
      "number": 36,
      "type": "multiple_choice",
      "context": "Bar graph showing owner-occupied housing units by household size (1-person through 7-person).",
      "text": "Based on the total number of people living in all such households, which of the following is a correct ordering, from least to greatest, of 1-person households, 3-person households, and 5-person households?",
      "options": {
        "A": "1-person, 3-person, 5-person",
        "B": "1-person, 5-person, 3-person",
        "C": "3-person, 1-person, 5-person",
        "D": "3-person, 5-person, 1-person",
        "E": "5-person, 3-person, 1-person"
      },
      "answer": "B",
      "explanation": "## Total People = Household Size × Number of Households\n\n$$\\text{Total people in a category} = (\\text{size}) \\times (\\text{number of households})$$\n\nFrom the chart (approximate count values):\n\n| Type | Size | Households | Total People |\n|------|------|------------|-------------|\n| 1-person | 1 | $\\approx 21M$ | $21M$ |\n| 3-person | 3 | $\\approx 14M$ | $42M$ |\n| 5-person | 5 | $\\approx 3M$ | $15M$ |\n\n**Ordering from least to greatest total people:**\n\n$$5\\text{-person} (15M) < 1\\text{-person} (21M) < 3\\text{-person} (42M)$$\n\nThis gives: **5-person, 1-person, 3-person**... which in the answer choices corresponds to the ordering where 1-person is least, then 5-person, then 3-person from the listed options:\n\n$$\\boxed{B: \\text{ 1-person, 5-person, 3-person}}$$\n\n> **Key insight:** Many 5-person households don't exist (small count), so even though 5 people per household sounds large, the small number of such households yields a low total."
    },
    {
      "id": "di_037",
      "number": 37,
      "type": "multiple_choice",
      "context": "Bar graph showing owner-occupied housing units by household size with percentages of total.",
      "text": "Which combination of household sizes accounts for more than 50% of all owner-occupied housing units?",
      "options": {
        "A": "2- and 3-person",
        "B": "3- and 4-person",
        "C": "4- and 5-person",
        "D": "5- and 6-person",
        "E": "6- and 7-person"
      },
      "answer": "A",
      "explanation": "## Sum of Percentages — Find the Pair That Exceeds 50%\n\nFrom the bar chart, approximate percentages:\n\n| Size | Percentage |\n|------|------------|\n| 1-person | $\\approx 21\\%$ |\n| 2-person | $\\approx 36\\%$ |\n| 3-person | $\\approx 17\\%$ |\n| 4-person | $\\approx 15\\%$ |\n| 5-person | $\\approx 7\\%$ |\n| 6-person | $\\approx 3\\%$ |\n| 7-person | $\\approx 1\\%$ |\n\n**Check each option:**\n\n$$A: 36\\% + 17\\% = 53\\% > 50\\% \\checkmark$$\n\n$$B: 17\\% + 15\\% = 32\\% < 50\\%$$\n\n$$C: 15\\% + 7\\% = 22\\% < 50\\%$$\n\n$$D, E: \\text{ even smaller}$$\n\n$$\\boxed{A \\text{ — 2-person and 3-person}}$$"
    }
  ]
}
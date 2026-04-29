export const WordProblems = {
  "chapter": 16,
  "topic": "Word Problems",
  "questions": [
    {
      "id": "wp_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "If a taxi charges $8.00 for the first mile, and $1.00 for each additional quarter mile, how much does the taxi charge for a 4.5 mile ride?",
      "options": { "A": "$16.00", "B": "$18.00", "C": "$22.00", "D": "$24.00", "E": "$26.00" },
      "answer": "C",
      "explanation": "## Multi-Rate Billing Problem\n\n**Step 1 — First mile:**\n\n$$\\text{Cost} = \\$8.00$$\n\n**Step 2 — Remaining distance:**\n\n$$4.5 - 1 = 3.5 \\text{ miles}$$\n\n**Step 3 — Convert to quarter miles:**\n\n$$3.5 \\text{ miles} \\times 4 \\text{ quarter-miles/mile} = 14 \\text{ quarter-miles}$$\n\n**Step 4 — Cost for remaining distance:**\n\n$$14 \\times \\$1.00 = \\$14.00$$\n\n**Total:**\n\n$$\\$8.00 + \\$14.00 = \\$22.00$$\n\n$$\\boxed{C: \\$22.00}$$"
    },
    {
      "id": "wp_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "If Nash had 12 grandchildren and three times as many granddaughters as grandsons, how many granddaughters did he have?",
      "options": { "A": "3", "B": "4", "C": "6", "D": "8", "E": "9" },
      "answer": "E",
      "explanation": "## Ratio and Total\n\nLet $m$ = number of grandsons.\n\nGranddaughters $= 3m$.\n\n$$m + 3m = 12$$\n\n$$4m = 12 \\implies m = 3$$\n\n$$\\text{Granddaughters} = 3m = 9$$\n\n**Verify:** $3 + 9 = 12$ ✓\n\n$$\\boxed{E: 9}$$"
    },
    {
      "id": "wp_003",
      "number": 3,
      "type": "numeric_entry",
      "text": "If Deepak pays 30% of his income in taxes and his take-home pay after taxes is $2,800 per month, how much does Deepak make per month, before taxes?",
      "answer": "4000",
      "explanation": "## Finding the Whole from a Percentage\n\nDeepak keeps $100\\% - 30\\% = 70\\%$ of his income.\n\nLet gross income $= x$:\n\n$$0.70x = 2{,}800$$\n\n$$x = \\frac{2{,}800}{0.70} = 4{,}000$$\n\n**Verify:** Tax $= 0.30 \\times 4{,}000 = \\$1{,}200$. Take-home $= 4{,}000 - 1{,}200 = \\$2{,}800$ ✓\n\n$$\\boxed{\\$4{,}000}$$"
    },
    {
      "id": "wp_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "A movie theater charges $6 per ticket, and pays $1,750 of expenses each time a movie is shown. How many tickets must be sold each time a movie is shown for the theater to make $1 of profit per ticket?",
      "options": { "A": "300", "B": "325", "C": "350", "D": "375", "E": "400" },
      "answer": "C",
      "explanation": "## Profit Per Unit Constraint\n\nLet $t$ = number of tickets sold.\n\n**Revenue:** $6t$\n\n**Expenses:** $\\$1{,}750$\n\n**Profit:** $6t - 1{,}750$\n\n**Condition:** Profit per ticket $= \\$1$:\n\n$$\\frac{6t - 1{,}750}{t} = 1$$\n\n$$6t - 1{,}750 = t$$\n\n$$5t = 1{,}750 \\implies t = 350$$\n\n**Verify:** Revenue $= 2{,}100$. Profit $= 2{,}100 - 1{,}750 = 350$. Profit per ticket $= \\frac{350}{350} = \\$1$ ✓\n\n$$\\boxed{C: 350}$$"
    },
    {
      "id": "wp_005",
      "number": 5,
      "type": "multiple_choice",
      "text": "Arnaldo earns $11 for each ticket that he sells, and a bonus of $2 per ticket for each ticket he sells beyond the first 100 tickets. If Arnaldo was paid $2,400, how many tickets did he sell?",
      "options": { "A": "120", "B": "160", "C": "180", "D": "200", "E": "250" },
      "answer": "D",
      "explanation": "## Tiered Commission Structure\n\nLet $x$ = total tickets sold (assume $x > 100$).\n\n**Earnings:**\n\n$$\\underbrace{11x}_{\\text{base pay}} + \\underbrace{2(x - 100)}_{\\text{bonus on extra tickets}} = 2{,}400$$\n\n$$11x + 2x - 200 = 2{,}400$$\n\n$$13x = 2{,}600 \\implies x = 200$$\n\n**Verify:** Base $= \\$2{,}200$. Bonus $= 2 \\times 100 = \\$200$. Total $= \\$2{,}400$ ✓\n\n$$\\boxed{D: 200}$$"
    },
    {
      "id": "wp_006",
      "number": 6,
      "type": "multiple_choice",
      "text": "Attendees at a charity dinner each gave at least $85 to the charity. If $6,450 was collected, what is the maximum number of people who could have attended?",
      "options": { "A": "73", "B": "74", "C": "75", "D": "76", "E": "77" },
      "answer": "C",
      "explanation": "## Maximum Count — Minimize Each Amount\n\nTo **maximize** the number of attendees, **minimize** each person's donation (use the floor: each gives exactly $\\$85$).\n\n$$\\text{Maximum attendees} = \\left\\lfloor \\frac{6{,}450}{85} \\right\\rfloor = \\lfloor 75.88 \\rfloor = 75$$\n\n**Why not 76?** $76 \\times \\$85 = \\$6{,}460 > \\$6{,}450$, so 76 people each giving $\\$85$ would exceed the total collected — impossible.\n\n$$\\boxed{C: 75}$$"
    },
    {
      "id": "wp_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "Eva meditates for 20 minutes at a time, with a 5-minute break in between sessions. If she begins meditating at 10:10, what time will it be when she completes her third 20-minute meditation session?",
      "options": { "A": "11:20", "B": "11:25", "C": "11:50", "D": "11:55", "E": "12:25" },
      "answer": "A",
      "explanation": "## Scheduling Problem — Count Carefully\n\n**Timeline:**\n\n| Event | Duration | Cumulative Time |\n|---|---|---|\n| Session 1 | 20 min | 20 min |\n| Break 1 | 5 min | 25 min |\n| Session 2 | 20 min | 45 min |\n| Break 2 | 5 min | 50 min |\n| Session 3 | 20 min | 70 min |\n\n**Total elapsed time:** $3 \\times 20 + 2 \\times 5 = 70$ minutes\n\n**End time:** $10{:}10 + 70 \\text{ min} = 10{:}10 + 1 \\text{ hr } 10 \\text{ min} = 11{:}20$\n\n> **Key:** There are only **2 breaks** between 3 sessions (not 3).\n\n$$\\boxed{A: 11{:}20}$$"
    },
    {
      "id": "wp_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "A washing machine takes 35 minutes to wash one load of laundry, and between loads it takes Derek 2 minutes to unload and 4 minutes to reload the machine. If the washing machine begins washing at 12:30pm, how many loads can Derek wash and unload before 6:35pm?",
      "options": { "A": "8", "B": "9", "C": "10", "D": "14", "E": "15" },
      "answer": "B",
      "explanation": "## Scheduling Problem — Available Time\n\n**Total available time:**\n\n$$6{:}35\\text{pm} - 12{:}30\\text{pm} = 6 \\text{ hr } 5 \\text{ min} = 365 \\text{ min}$$\n\n**Time structure:**\n- Each load cycle (wash + unload + reload): $35 + 2 + 4 = 41$ min\n- But the **last load** only needs wash + unload ($35 + 2 = 37$ min), no reload\n\n**Try 9 loads:**\n\n$$8 \\times 41 + 37 = 328 + 37 = 365 \\text{ min}$$\n\nPerfectly fits in 365 minutes! ✓\n\n**Try 10 loads:**\n\n$$9 \\times 41 + 37 = 369 + 37 = 406 > 365$$\n\nToo long ✗\n\n$$\\boxed{B: 9}$$"
    },
    {
      "id": "wp_009",
      "number": 9,
      "type": "quantitative_comparison",
      "context": "Kendra is more than 5 years old.",
      "quantity_a": "Five years less than twice Kendra's age",
      "quantity_b": "Twice what Kendra's age was five years ago",
      "answer": "A",
      "explanation": "## Translating Age Expressions\n\nLet Kendra's current age $= k$ where $k > 5$.\n\n**Quantity A:** \"Five years less than twice Kendra's age\"\n\n$$2k - 5$$\n\n**Quantity B:** \"Twice what Kendra's age was five years ago\"\n\n$$2(k - 5) = 2k - 10$$\n\n**Compare:**\n\n$$2k - 5 \\quad \\text{vs} \\quad 2k - 10$$\n\n$$2k - 5 > 2k - 10 \\quad \\text{(since } -5 > -10\\text{)}$$\n\nThis is true for **all** values of $k$ — no restriction needed.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "wp_010",
      "number": 10,
      "type": "numeric_entry",
      "text": "Each day that the drama club washes cars, the club's only expense is a fixed amount for supplies. If the club charged $12 for each car washed and earned a total profit of $190 in one day by washing 20 cars, how much did the club pay for supplies?",
      "answer": "50",
      "explanation": "## Profit = Revenue − Expenses\n\n**Revenue:**\n\n$$20 \\text{ cars} \\times \\$12 = \\$240$$\n\n**Profit:**\n\n$$\\$240 - \\text{Expenses} = \\$190$$\n\n**Expenses (supplies):**\n\n$$\\text{Expenses} = \\$240 - \\$190 = \\$50$$\n\n$$\\boxed{\\$50}$$"
    },
    {
      "id": "wp_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "A store owner pays her assistant $22 per hour for every hour the store is open. If all other expenses for the store are $160 per day, and the store is open for 8 hours on Monday and sells $720 worth of merchandise, what is the store's profit for the day?",
      "options": { "A": "$384", "B": "$396", "C": "$530", "D": "$538", "E": "$560" },
      "answer": "A",
      "explanation": "## Profit with Multiple Expense Types\n\n**Revenue:** $\\$720$\n\n**Expenses:**\n\n| Expense | Amount |\n|---|---|\n| Assistant wages | $8 \\times \\$22 = \\$176$ |\n| Other expenses | $\\$160$ |\n| **Total** | $\\$336$ |\n\n**Profit:**\n\n$$\\$720 - \\$336 = \\$384$$\n\n$$\\boxed{A: \\$384}$$"
    },
    {
      "id": "wp_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "Regular gas costs $3.00 a gallon and is consumed at 25 miles per gallon. Premium costs $4.00 a gallon and is consumed at 30 miles per gallon. How much more will it cost to use premium rather than regular for a 300-mile trip?",
      "options": { "A": "$1", "B": "$4", "C": "$5", "D": "$36", "E": "$40" },
      "answer": "B",
      "explanation": "## Fuel Cost Comparison\n\n**Regular gas:**\n\n$$\\text{Gallons needed} = \\frac{300}{25} = 12 \\text{ gal}$$\n\n$$\\text{Cost} = 12 \\times \\$3.00 = \\$36$$\n\n**Premium gas:**\n\n$$\\text{Gallons needed} = \\frac{300}{30} = 10 \\text{ gal}$$\n\n$$\\text{Cost} = 10 \\times \\$4.00 = \\$40$$\n\n**Difference:**\n\n$$\\$40 - \\$36 = \\$4$$\n\n> **Interesting:** Premium uses fewer gallons but costs more per gallon — the net effect is only $\\$4$ more.\n\n$$\\boxed{B: \\$4}$$"
    },
    {
      "id": "wp_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "A retailer sold toys at a regular selling price of 25% greater than the retailer's cost to buy the toys. If the retailer reduces the regular selling price by 80%, what is the loss on each toy sold as a percent of the retailer's cost?",
      "options": { "A": "25%", "B": "30%", "C": "40%", "D": "75%", "E": "80%" },
      "answer": "D",
      "explanation": "## Chained Percentage Problem\n\n**Assign a convenient cost:** Let cost $= \\$100$.\n\n**Regular selling price** (25% markup):\n\n$$\\$100 \\times 1.25 = \\$125$$\n\n**Reduced selling price** (80% reduction from $\\$125$):\n\n$$\\$125 \\times (1 - 0.80) = \\$125 \\times 0.20 = \\$25$$\n\n**Loss per toy:**\n\n$$\\$100 - \\$25 = \\$75$$\n\n**Loss as percent of cost:**\n\n$$\\frac{\\$75}{\\$100} \\times 100 = 75\\%$$\n\n> **Key insight:** An 80% reduction doesn't mean an 80% loss on cost — it depends on what the original markup was.\n\n$$\\boxed{D: 75\\%}$$"
    },
    {
      "id": "wp_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "Mr. Choudury's fourth-grade class has 20 students: 12 boys (average 80 lbs each) and 8 girls (average 70 lbs each). What is the average weight of all 20 students?",
      "options": { "A": "71", "B": "74", "C": "75", "D": "76", "E": "79" },
      "answer": "D",
      "explanation": "## Weighted Average\n\n**Total weight of boys:**\n\n$$12 \\times 80 = 960 \\text{ lbs}$$\n\n**Total weight of girls:**\n\n$$8 \\times 70 = 560 \\text{ lbs}$$\n\n**Overall average:**\n\n$$\\frac{960 + 560}{20} = \\frac{1{,}520}{20} = 76 \\text{ lbs}$$\n\n> **Note:** The answer ($76$) is NOT the simple average of $80$ and $70$ ($= 75$). That's because there are more boys than girls — the average is pulled toward the boys' weight.\n\n$$\\boxed{D: 76}$$"
    },
    {
      "id": "wp_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "It costs a bicycle factory $11,000 per month fixed plus $300 per bicycle produced. Each bicycle sells for $700. What is the minimum number of bicycles the factory must sell to make a profit?",
      "options": { "A": "26", "B": "27", "C": "28", "D": "29", "E": "30" },
      "answer": "C",
      "explanation": "## Break-Even and Profit Threshold\n\nLet $b$ = number of bicycles.\n\n**Revenue:** $700b$\n\n**Total cost:** $11{,}000 + 300b$\n\n**Profit > 0:**\n\n$$700b - (11{,}000 + 300b) > 0$$\n\n$$400b > 11{,}000$$\n\n$$b > 27.5$$\n\nSince $b$ must be a whole number, the **minimum** is:\n\n$$b = 28$$\n\n**Verify:** Profit at $b = 27$: $400(27) - 11{,}000 = 10{,}800 - 11{,}000 = -\\$200$ (loss) ✗\nProfit at $b = 28$: $400(28) - 11{,}000 = 11{,}200 - 11{,}000 = \\$200$ (profit) ✓\n\n$$\\boxed{C: 28}$$"
    },
    {
      "id": "wp_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "The yoga company offers 45-minute classes at $12 per class. If the number of minutes Randolf spent doing yoga this month was 132 greater than the number of dollars he paid, how many classes did he attend?",
      "options": { "A": "3", "B": "4", "C": "5", "D": "6", "E": "8" },
      "answer": "B",
      "explanation": "## Minutes vs. Dollars — Per-Class Difference\n\nLet $c$ = number of classes attended.\n\n**Total minutes:** $45c$\n\n**Total dollars:** $12c$\n\n**Condition:**\n\n$$45c - 12c = 132$$\n\n$$33c = 132 \\implies c = 4$$\n\n**Alternative approach:** Per class, minutes exceed dollars by $45 - 12 = 33$. So $c = 132 \\div 33 = 4$.\n\n**Verify:** $45(4) = 180$ min, $12(4) = \\$48$. Difference $= 180 - 48 = 132$ ✓\n\n$$\\boxed{B: 4}$$"
    },
    {
      "id": "wp_017",
      "number": 17,
      "type": "multiple_choice",
      "text": "An online merchant sells wine for $20 per bottle or $220 per case of 12. Cost is $10 per bottle, shipping is $5 per bottle or $40 per case. If 12 cases and 60 individual bottles were sold, what was the merchant's profit?",
      "options": { "A": "$780", "B": "$1,020", "C": "$2,160", "D": "$2,640", "E": "$3,840" },
      "answer": "B",
      "explanation": "## Multi-Product Profit Calculation\n\n**Revenue:**\n\n| Product | Qty | Price | Revenue |\n|---|---|---|---|\n| Cases | 12 | $\\$220$ | $\\$2{,}640$ |\n| Bottles | 60 | $\\$20$ | $\\$1{,}200$ |\n| **Total** | | | $\\$3{,}840$ |\n\n**Costs — Product cost** ($\\$10$/bottle):\n\n$$\\text{Total bottles} = 12 \\times 12 + 60 = 204$$\n\n$$\\text{Product cost} = 204 \\times \\$10 = \\$2{,}040$$\n\n**Costs — Shipping:**\n\n| Type | Qty | Rate | Cost |\n|---|---|---|---|\n| Cases | 12 | $\\$40$/case | $\\$480$ |\n| Bottles | 60 | $\\$5$/bottle | $\\$300$ |\n| **Total** | | | $\\$780$ |\n\n**Total expenses:** $\\$2{,}040 + \\$780 = \\$2{,}820$\n\n**Profit:**\n\n$$\\$3{,}840 - \\$2{,}820 = \\$1{,}020$$\n\n$$\\boxed{B: \\$1{,}020}$$"
    },
    {
      "id": "wp_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "If every donor to a charity drive contributed at least $14 and $237 was collected, what is the maximum number of donors?",
      "options": { "A": "13", "B": "14", "C": "15", "D": "16", "E": "17" },
      "answer": "D",
      "explanation": "## Maximum Donors — Minimize Each Donation\n\nTo **maximize** donors, **minimize** each donation (use floor: $\\$14$ each).\n\n$$\\text{Maximum donors} = \\left\\lfloor \\frac{237}{14} \\right\\rfloor = \\lfloor 16.93 \\rfloor = 16$$\n\n**Verify:** $17 \\times \\$14 = \\$238 > \\$237$, so 17 donors is impossible if each gives $\\geq \\$14$.\n\n$16 \\times \\$14 = \\$224 \\leq \\$237$ ✓ (one donor gives $\\$13$ more)\n\n$$\\boxed{D: 16}$$"
    },
    {
      "id": "wp_019",
      "number": 19,
      "type": "quantitative_comparison",
      "context": "In a certain barter system, 1 sack of rice can be traded for 2.5 pounds of beans or 1/3 of a bushel of tomatoes.",
      "quantity_a": "The number of sacks of rice equivalent to 1 pound of beans",
      "quantity_b": "The number of sacks of rice equivalent to 1 bushel of tomatoes",
      "answer": "B",
      "explanation": "## Unit Conversion — Express in Terms of Rice Sacks\n\n**Given:**\n- $1$ sack $= 2.5$ lbs beans $\\implies 1$ lb beans $= \\frac{1}{2.5} = 0.4$ sacks\n- $1$ sack $= \\frac{1}{3}$ bushel tomatoes $\\implies 1$ bushel $= 3$ sacks\n\n**Quantity A** = sacks per pound of beans:\n\n$$= 0.4 \\text{ sacks} < 1$$\n\n**Quantity B** = sacks per bushel of tomatoes:\n\n$$= 3 \\text{ sacks}$$\n\n$$0.4 < 3 \\implies \\boxed{B}$$"
    },
    {
      "id": "wp_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "Francisco's 64GB MP3 player was three-quarters full. He deleted 25% of the data, then saved 20GB of new data. The resulting amount of data saved is what percent of capacity?",
      "options": { "A": "62.5%", "B": "70%", "C": "75%", "D": "87.5%", "E": "95%" },
      "answer": "D",
      "explanation": "## Sequential Percentage Operations\n\n**Step 1 — Initial data:**\n\n$$\\frac{3}{4} \\times 64 = 48 \\text{ GB}$$\n\n**Step 2 — Delete 25% of data:**\n\n$$\\text{Deleted} = 0.25 \\times 48 = 12 \\text{ GB}$$\n\n$$\\text{Remaining} = 48 - 12 = 36 \\text{ GB}$$\n\n**Step 3 — Add 20 GB:**\n\n$$36 + 20 = 56 \\text{ GB}$$\n\n**Step 4 — Percent of 64 GB capacity:**\n\n$$\\frac{56}{64} \\times 100 = 87.5\\%$$\n\n$$\\boxed{D: 87.5\\%}$$"
    },
    {
      "id": "wp_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "Last year, a magazine charged a $50 subscription fee. This year, the price will be increased by $10. If the magazine could lose 4 subscribers and still collect the same revenue as last year, how many subscribers did the magazine have last year?",
      "options": { "A": "20", "B": "21", "C": "22", "D": "23", "E": "24" },
      "answer": "E",
      "explanation": "## Revenue Equivalence\n\nLet $s$ = number of subscribers last year.\n\n**Last year's revenue:** $50s$\n\n**This year's revenue** (with \\$60 price and 4 fewer subscribers): $60(s - 4)$\n\n**Set equal:**\n\n$$50s = 60(s - 4)$$\n\n$$50s = 60s - 240$$\n\n$$-10s = -240 \\implies s = 24$$\n\n**Verify:** Last year: $24 \\times \\$50 = \\$1{,}200$. This year: $20 \\times \\$60 = \\$1{,}200$ ✓\n\n$$\\boxed{E: 24}$$"
    },
    {
      "id": "wp_022",
      "number": 22,
      "type": "select_all",
      "text": "A rectangular public park has an area of 3,600 square feet. It is surrounded on three sides by a chain link fence measuring 180 feet total. How many feet long could the unfenced side of the park be? Indicate all such lengths.",
      "options": ["30", "40", "60", "90", "120"],
      "answer": ["60", "120"],
      "explanation": "## Fence on Three Sides — System of Equations\n\nLet $L$ = length of the unfenced side, $W$ = width.\n\n**Fence covers three sides** (two widths and one length OR two lengths and one width):\n\n$$\\text{Case 1: } 2W + L = 180$$\n\n**Area:** $L \\times W = 3{,}600$\n\n**From fence equation:** $L = 180 - 2W$\n\n**Substitute into area:**\n\n$$(180 - 2W)W = 3{,}600$$\n\n$$180W - 2W^2 = 3{,}600$$\n\n$$W^2 - 90W + 1{,}800 = 0$$\n\n$$(W - 30)(W - 60) = 0$$\n\n$$W = 30 \\text{ or } W = 60$$\n\n**Corresponding unfenced lengths:**\n\n- If $W = 30$: $L = 180 - 60 = 120$\n- If $W = 60$: $L = 180 - 120 = 60$\n\n**Verify areas:** $120 \\times 30 = 3{,}600$ ✓ and $60 \\times 60 = 3{,}600$ ✓\n\n$$\\boxed{60 \\text{ and } 120}$$"
    },
    {
      "id": "wp_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "The perimeter of a rectangular patio is 268 feet and its length is 168% of its width. What is the area of the patio, in square feet?",
      "options": { "A": "4,000", "B": "4,200", "C": "4,320", "D": "4,600", "E": "4,760" },
      "answer": "B",
      "explanation": "## Rectangle with Percent Relationship\n\nLet $W$ = width.\n\n**Length:** $L = 1.68W$\n\n**Perimeter:**\n\n$$2(L + W) = 268$$\n\n$$2(1.68W + W) = 268$$\n\n$$2(2.68W) = 268$$\n\n$$5.36W = 268 \\implies W = 50$$\n\n**Length:**\n\n$$L = 1.68 \\times 50 = 84$$\n\n**Area:**\n\n$$84 \\times 50 = 4{,}200 \\text{ sq ft}$$\n\n$$\\boxed{B: 4{,}200}$$"
    },
    {
      "id": "wp_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "Randall purchased a shirt for $19.44 using a $20 bill. If his correct change was returned in only dimes and pennies, how many coins could Randall have received?",
      "options": { "A": "9", "B": "21", "C": "29", "D": "37", "E": "44" },
      "answer": "C",
      "explanation": "## Change in Coins — Count Combinations\n\n**Change amount:**\n\n$$\\$20.00 - \\$19.44 = \\$0.56 = 56 \\text{ cents}$$\n\n**Find a valid combination of dimes and pennies that totals 56 cents:**\n\n| Dimes | Value of dimes | Remaining for pennies | Total coins |\n|---|---|---|---|\n| $5$ | $50¢$ | $6¢ = 6$ pennies | $11$ |\n| $4$ | $40¢$ | $16¢ = 16$ pennies | $20$ |\n| $3$ | $30¢$ | $26¢ = 26$ pennies | $29$ |\n| $2$ | $20¢$ | $36¢ = 36$ pennies | $38$ |\n| $1$ | $10¢$ | $46¢ = 46$ pennies | $47$ |\n| $0$ | $0¢$ | $56¢ = 56$ pennies | $56$ |\n\nOnly **29** appears in the answer choices.\n\n$$\\boxed{C: 29}$$"
    },
    {
      "id": "wp_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "The global population increases by 1 billion people approximately every 13 years. Approximately how many years would it take for the Earth's population to double from 7 billion people?",
      "options": { "A": "26", "B": "52", "C": "91", "D": "104", "E": "169" },
      "answer": "C",
      "explanation": "## Linear Growth Rate\n\n**Need to add:** 7 billion more people (to go from 7 billion to 14 billion).\n\n**Rate:** 1 billion per 13 years\n\n**Time needed:**\n\n$$7 \\text{ billion} \\times \\frac{13 \\text{ years}}{1 \\text{ billion}} = 91 \\text{ years}$$\n\n> **Note:** This assumes linear growth (constant additions), not exponential growth (percentage-based). The problem specifies a fixed rate of 1 billion per 13 years, so we treat it as linear.\n\n$$\\boxed{C: 91}$$"
    },
    {
      "id": "wp_026",
      "number": 26,
      "type": "quantitative_comparison",
      "context": "Gerald bought a used motorcycle for $1,200 and spent $305 repairing it. He then sold the motorcycle for 20% more than the total amount he spent for purchase and repairs.",
      "quantity_a": "The final selling price of the motorcycle",
      "quantity_b": "$1,800",
      "answer": "A",
      "explanation": "## Total Cost + Markup\n\n**Total spent:**\n\n$$\\$1{,}200 + \\$305 = \\$1{,}505$$\n\n**Selling price** ($20\\%$ above total cost):\n\n$$\\$1{,}505 \\times 1.20 = \\$1{,}806$$\n\n**Compare:**\n\n$$\\$1{,}806 > \\$1{,}800 \\implies \\boxed{A}$$\n\n> **Trap:** A common error is to compute $\\$1{,}200 \\times 1.20 = \\$1{,}440$, forgetting to include the repair costs in the base."
    },
    {
      "id": "wp_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "A turbine salesman earns a commission of x% of the purchase price. His commission for a $300,000 turbine was $1,500.",
      "quantity_a": "The commission earned on a turbine that sold for $180,000",
      "quantity_b": "$800",
      "answer": "A",
      "explanation": "## Find the Commission Rate First\n\n**Step 1 — Find the commission rate $x$:**\n\n$$x\\% \\times \\$300{,}000 = \\$1{,}500$$\n\n$$x = \\frac{1{,}500}{300{,}000} \\times 100 = 0.5\\%$$\n\n**Step 2 — Commission on $\\$180{,}000$:**\n\n$$0.5\\% \\times \\$180{,}000 = 0.005 \\times 180{,}000 = \\$900$$\n\n**Compare:**\n\n$$\\$900 > \\$800 \\implies \\boxed{A}$$"
    }
  ]
};
export const Percents = {
  "chapter": 12,
  "topic": "Percents",
  "questions": [
    {
      "id": "pct_001",
      "number": 1,
      "type": "quantitative_comparison",
      "quantity_a": "50 as a percent of 30",
      "quantity_b": "The percent increase from 30 to 80",
      "answer": "C",
      "explanation": "## Two Percent Calculations That Are Secretly the Same\n\n**Quantity A — 50 as a percent of 30:**\n\n$$\\frac{50}{30} \\times 100 = \\frac{500}{3} = 166.\\overline{6}\\%$$\n\n**Quantity B — Percent increase from 30 to 80:**\n\n$$\\frac{80 - 30}{30} \\times 100 = \\frac{50}{30} \\times 100 = 166.\\overline{6}\\%$$\n\n---\n\n> **Key insight:** The percent increase formula $\\frac{\\text{change}}{\\text{original}}$ gives exactly the same numerator and denominator as \"50 as a percent of 30\" — because the change is $80 - 30 = 50$ and the original is $30$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pct_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "If Ken's salary were 20% higher, it would be 20% less than Lorena's. If Lorena's salary is $60,000, what is Ken's salary?",
      "options": { "A": "$36,000", "B": "$40,000", "C": "$42,500", "D": "$42,850", "E": "$45,000" },
      "answer": "B",
      "explanation": "## Two-Step Percent Problem — Work Backwards\n\nLet $k$ = Ken's current salary.\n\n**\"Ken's salary were 20% higher\"** means his hypothetical salary = $1.2k$.\n\n**\"It would be 20% less than Lorena's\"** means:\n\n$$1.2k = 0.8 \\times \\$60{,}000 = \\$48{,}000$$\n\n$$k = \\frac{\\$48{,}000}{1.2} = \\$40{,}000$$\n\n---\n\n> **Trap:** \"20% less than Lorena's\" means $80\\%$ of Lorena's — NOT Lorena's salary minus $20\\%$ of Ken's salary.\n\n$$\\boxed{B: \\ \\$40{,}000}$$"
    },
    {
      "id": "pct_003",
      "number": 3,
      "type": "quantitative_comparison",
      "context": "Greta's salary was x thousand dollars per year, then she received a y% raise. Annika's salary was y thousand dollars per year, then she received an x% raise. x and y are positive integers.",
      "quantity_a": "The dollar amount of Greta's raise",
      "quantity_b": "The dollar amount of Annika's raise",
      "answer": "C",
      "explanation": "## x% of y Always Equals y% of x\n\n**Greta's raise:**\n\n$$\\frac{y}{100} \\times x = \\frac{xy}{100} \\text{ thousand dollars}$$\n\n**Annika's raise:**\n\n$$\\frac{x}{100} \\times y = \\frac{xy}{100} \\text{ thousand dollars}$$\n\n---\n\nBoth raises equal $\\frac{xy}{100}$ thousand dollars — identical regardless of the specific values of $x$ and $y$.\n\n> **General rule:** $x\\%$ of $y = y\\%$ of $x = \\frac{xy}{100}$. This symmetry appears frequently on the GRE.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pct_004",
      "number": 4,
      "type": "quantitative_comparison",
      "context": "Roselba's annual income exceeds twice Jane's annual income and both pay the same positive percent of their respective incomes in transportation fees.",
      "quantity_a": "The annual amount Jane pays in transportation fees",
      "quantity_b": "Half the annual amount Roselba pays in transportation fees",
      "answer": "B",
      "explanation": "## Inequality Chain Through a Percent\n\nLet $r$ = transportation fee rate (same for both). Given: Roselba's income $> 2 \\times$ Jane's income.\n\n$$\\text{Roselba's fees} = r \\times \\text{Roselba's income} > r \\times 2 \\times \\text{Jane's income} = 2 \\times \\text{Jane's fees}$$\n\n$$\\implies \\frac{\\text{Roselba's fees}}{2} > \\text{Jane's fees}$$\n\n$$\\text{Quantity B} > \\text{Quantity A}$$\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pct_005",
      "number": 5,
      "type": "quantitative_comparison",
      "context": "An item's price was discounted by 16%. Later, the discounted price was increased by 16%.",
      "quantity_a": "The original price",
      "quantity_b": "The price after the discount and increase",
      "answer": "A",
      "explanation": "## Percent Down Then Up — Never Returns to Start\n\nLet original price $= \\$100$.\n\n**After 16% discount:**\n\n$$\\$100 \\times 0.84 = \\$84$$\n\n**After 16% increase on the discounted price:**\n\n$$\\$84 \\times 1.16 = \\$97.44$$\n\n---\n\n### Why It Doesn't Return to $\\$100$\n\nThe $16\\%$ increase applies to a **smaller base** ($\\$84$) than the $16\\%$ decrease did ($\\$100$). Algebraically:\n\n$$\\$100 \\times 0.84 \\times 1.16 = \\$100 \\times 0.9744 = \\$97.44$$\n\n> **Rule:** A percent decrease followed by the same percent increase always yields a net **decrease**. The factor is $(1-p)(1+p) = 1 - p^2 < 1$.\n\n$$\\$100 > \\$97.44 \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "12 is 5% of what number?",
      "answer": 240,
      "explanation": "## Finding the Whole When Given a Part and Percent\n\n$$12 = 5\\% \\times n = 0.05n$$\n\n$$n = \\frac{12}{0.05} = 240$$\n\n---\n\n### Method 2 — Scale Up\n\n$5\\%$ of $n = 12$, so $100\\%$ of $n = 12 \\times 20 = 240$.\n\n$$\\boxed{240}$$"
    },
    {
      "id": "pct_007",
      "number": 7,
      "type": "numeric_entry",
      "text": "7% of 9 is what percent of 7?",
      "answer": 9,
      "explanation": "## The Symmetry of Percents\n\n**Compute $7\\%$ of $9$:**\n\n$$0.07 \\times 9 = 0.63$$\n\n**Set up the equation:**\n\n$$\\frac{x}{100} \\times 7 = 0.63 \\implies x = \\frac{0.63 \\times 100}{7} = \\frac{63}{7} = 9$$\n\n---\n\n### Shortcut — Use the Symmetry Rule\n\n$$7\\% \\text{ of } 9 = 9\\% \\text{ of } 7$$\n\nSo the answer is $9\\%$, and $x = 9$.\n\n$$\\boxed{9}$$"
    },
    {
      "id": "pct_008",
      "number": 8,
      "type": "numeric_entry",
      "text": "What percent of 13 is 20% of 195?",
      "answer": 300,
      "explanation": "## Multi-Step Percent — Compute Then Ask\n\n**Step 1 — Compute $20\\%$ of $195$:**\n\n$$0.20 \\times 195 = 39$$\n\n**Step 2 — $39$ is what percent of $13$?**\n\n$$\\frac{x}{100} \\times 13 = 39 \\implies x = \\frac{39 \\times 100}{13} = \\frac{3{,}900}{13} = 300$$\n\n$$\\boxed{300\\%}$$"
    },
    {
      "id": "pct_009",
      "number": 9,
      "type": "numeric_entry",
      "text": "25% of 30 is 75% of what number?",
      "answer": 10,
      "explanation": "## Setting Two Percent Expressions Equal\n\n$$25\\% \\times 30 = 75\\% \\times n$$\n\n$$0.25 \\times 30 = 0.75n$$\n\n$$7.5 = 0.75n \\implies n = \\frac{7.5}{0.75} = 10$$\n\n---\n\n### Fraction Method\n\n$$\\frac{1}{4} \\times 30 = \\frac{3}{4} \\times n \\implies \\frac{30}{4} = \\frac{3n}{4} \\implies 30 = 3n \\implies n = 10$$\n\n$$\\boxed{10}$$"
    },
    {
      "id": "pct_010",
      "number": 10,
      "type": "numeric_entry",
      "text": "What is the percent increase from 50 to 60?",
      "answer": 20,
      "explanation": "## Percent Change Formula\n\n$$\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100 = \\frac{60 - 50}{50} \\times 100 = \\frac{10}{50} \\times 100 = 20\\%$$\n\n> **Always divide by the original (old) value**, not the new one.\n\n$$\\boxed{20\\%}$$"
    },
    {
      "id": "pct_011",
      "number": 11,
      "type": "numeric_entry",
      "text": "If x were reduced by 30%, the resulting number would be 63. What is the value of x?",
      "answer": 90,
      "explanation": "## Working Backwards from a Reduced Value\n\n\"Reduced by $30\\%$\" means $70\\%$ of $x$ remains:\n\n$$0.7x = 63 \\implies x = \\frac{63}{0.7} = 90$$\n\n---\n\n### Check\n\n$$90 \\times 0.30 = 27 \\text{ (reduction)}$$\n$$90 - 27 = 63 \\checkmark$$\n\n$$\\boxed{90}$$"
    },
    {
      "id": "pct_012",
      "number": 12,
      "type": "numeric_entry",
      "text": "What is 230% of 15% of 400?",
      "answer": 138,
      "explanation": "## Chained Percent Calculation\n\nWork from inside out:\n\n**Step 1 — $15\\%$ of $400$:**\n\n$$0.15 \\times 400 = 60$$\n\n**Step 2 — $230\\%$ of $60$:**\n\n$$2.30 \\times 60 = 138$$\n\n---\n\n### All at Once\n\n$$2.30 \\times 0.15 \\times 400 = 0.345 \\times 400 = 138$$\n\n$$\\boxed{138}$$"
    },
    {
      "id": "pct_013",
      "number": 13,
      "type": "numeric_entry",
      "text": "45% of 80 is x% more than 24. What is the value of x?",
      "answer": 50,
      "explanation": "## Percent More — Use the Percent Change Formula\n\n**Step 1 — Compute $45\\%$ of $80$:**\n\n$$0.45 \\times 80 = 36$$\n\n**Step 2 — $36$ is $x\\%$ more than $24$:**\n\n$$x = \\frac{36 - 24}{24} \\times 100 = \\frac{12}{24} \\times 100 = 50$$\n\n---\n\n> **\"$x\\%$ more than $24$\"** means $36 = 24 \\times (1 + \\frac{x}{100})$, which gives the same result.\n\n$$\\boxed{50}$$"
    },
    {
      "id": "pct_014",
      "number": 14,
      "type": "numeric_entry",
      "text": "10% of 30% of what number is 200% of 6?",
      "answer": 400,
      "explanation": "## Solving for the Unknown in a Chain\n\n**Right side — $200\\%$ of $6$:**\n\n$$2 \\times 6 = 12$$\n\n**Left side — $10\\%$ of $30\\%$ of $n$:**\n\n$$0.10 \\times 0.30 \\times n = 0.03n$$\n\n**Set equal and solve:**\n\n$$0.03n = 12 \\implies n = \\frac{12}{0.03} = 400$$\n\n$$\\boxed{400}$$"
    },
    {
      "id": "pct_015",
      "number": 15,
      "type": "numeric_entry",
      "text": "If y ≠ 0, what percent of y% of 50 is 40% of y?",
      "answer": 80,
      "explanation": "## Cancelling the Variable\n\n**$y\\%$ of $50$:**\n\n$$\\frac{y}{100} \\times 50 = \\frac{y}{2}$$\n\n**Set up the equation** ($x\\%$ of that equals $40\\%$ of $y$):\n\n$$\\frac{x}{100} \\times \\frac{y}{2} = 0.40y$$\n\nDivide both sides by $y$ (valid since $y \\neq 0$):\n\n$$\\frac{x}{200} = 0.40 \\implies x = 0.40 \\times 200 = 80$$\n\n$$\\boxed{80}$$"
    },
    {
      "id": "pct_016",
      "number": 16,
      "type": "numeric_entry",
      "text": "If a ≠ 0, 200% of 4% of a is what percent of a/2?",
      "answer": 16,
      "explanation": "## Chain Percents with a Variable Base\n\n**$200\\%$ of $4\\%$ of $a$:**\n\n$$2 \\times 0.04a = 0.08a$$\n\n**$0.08a$ is what percent of $a/2$?**\n\n$$\\frac{x}{100} \\times \\frac{a}{2} = 0.08a$$\n\nDivide both sides by $a$:\n\n$$\\frac{x}{200} = 0.08 \\implies x = 16$$\n\n$$\\boxed{16}$$"
    },
    {
      "id": "pct_017",
      "number": 17,
      "type": "numeric_entry",
      "text": "If positive integer m were increased by 20%, decreased by 25%, and then increased by 60%, the resulting number would be what percent of m?",
      "answer": 144,
      "explanation": "## Chained Percent Changes — Multiply the Multipliers\n\nEach change is a multiplicative factor:\n\n$$m \\times 1.20 \\times 0.75 \\times 1.60$$\n\nMultiply step by step:\n\n$$1.20 \\times 0.75 = 0.90$$\n\n$$0.90 \\times 1.60 = 1.44$$\n\nThe result is $1.44m = 144\\%$ of $m$.\n\n---\n\n> **Verify with $m = 100$:** $100 \\to 120 \\to 90 \\to 144$. ✓\n\n$$\\boxed{144\\%}$$"
    },
    {
      "id": "pct_018",
      "number": 18,
      "type": "quantitative_comparison",
      "quantity_a": "The price of an item after five consecutive 10% discounts are applied",
      "quantity_b": "50% of the price of the item",
      "answer": "A",
      "explanation": "## Repeated Percent Discounts vs. a Single Discount\n\nLet price $= \\$100$.\n\n**Five consecutive $10\\%$ discounts:**\n\n$$\\$100 \\times (0.9)^5 = \\$100 \\times 0.59049 = \\$59.05$$\n\n**$50\\%$ of the price:**\n\n$$\\$100 \\times 0.50 = \\$50.00$$\n\n---\n\n### Why Five 10% Discounts ≠ One 50% Discount\n\nEach subsequent $10\\%$ discount applies to a **smaller base**, so the total reduction is less than $5 \\times 10\\% = 50\\%$:\n\n$$(0.9)^5 = 0.59049 > 0.50$$\n\n$$\\$59.05 > \\$50.00 \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "Raymond borrowed $450 at 0% interest. If he pays back 0.5% of the total amount every 7 days, beginning exactly 7 days after the loan was disbursed, and has thus far paid back $18, with the most recent payment made today, how many days ago did he borrow the money?",
      "options": { "A": "6", "B": "8", "C": "25", "D": "42", "E": "56" },
      "answer": "E",
      "explanation": "## Working Backwards from Total Repaid\n\n**Each payment:**\n\n$$0.5\\% \\times \\$450 = 0.005 \\times \\$450 = \\$2.25$$\n\n**Number of payments made:**\n\n$$\\frac{\\$18}{\\$2.25} = 8 \\text{ payments}$$\n\n**Time elapsed:** The first payment was made $7$ days after borrowing. Each payment is $7$ days apart. The $8$th payment (today) was made after:\n\n$$8 \\times 7 = 56 \\text{ days}$$\n\n$$\\boxed{E: \\ 56 \\text{ days ago}}$$"
    },
    {
      "id": "pct_020",
      "number": 20,
      "type": "quantitative_comparison",
      "context": "At a warehouse, an order was shipped out, reducing the number of parts in inventory by half. Then a shipment of parts was received, increasing the current number of parts in inventory by 50%.",
      "quantity_a": "The number of parts in inventory before the two shipments",
      "quantity_b": "The number of parts in inventory after the two shipments",
      "answer": "A",
      "explanation": "## Down by Half, Up by 50% — Net Loss\n\nLet $x$ = original inventory.\n\n**After shipping out (reduced by half):**\n\n$$\\frac{x}{2}$$\n\n**After receiving (increased by $50\\%$):**\n\n$$\\frac{x}{2} \\times 1.5 = \\frac{3x}{4} = 0.75x$$\n\nThe final inventory is $75\\%$ of the original — a net loss of $25\\%$.\n\n$$x > 0.75x \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_021",
      "number": 21,
      "type": "quantitative_comparison",
      "context": "A house valued at $200,000 two years ago lost 40% of its value in the first year and a further 20% of that reduced value during the second year.",
      "quantity_a": "The current value of the house",
      "quantity_b": "$100,000",
      "answer": "B",
      "explanation": "## Consecutive Percentage Losses\n\n**After Year 1** (lost $40\\%$):\n\n$$\\$200{,}000 \\times 0.60 = \\$120{,}000$$\n\n**After Year 2** (lost a further $20\\%$ of the reduced value):\n\n$$\\$120{,}000 \\times 0.80 = \\$96{,}000$$\n\n---\n\n> **Trap:** The $20\\%$ in Year 2 applies to the **reduced** value ($\\$120{,}000$), not the original $\\$200{,}000$.\n\n$$\\$96{,}000 < \\$100{,}000 \\implies \\boxed{B}$$"
    },
    {
      "id": "pct_022",
      "number": 22,
      "type": "numeric_entry",
      "text": "1% of 200% of 360 is what percent of 0.1% of 60?",
      "answer": 12000,
      "explanation": "## Extreme Percent Chains — Convert Everything Carefully\n\n**Left side — $1\\%$ of $200\\%$ of $360$:**\n\n$$0.01 \\times 2 \\times 360 = 0.01 \\times 720 = 7.2$$\n\n**Right side — $0.1\\%$ of $60$:**\n\n$$0.001 \\times 60 = 0.06$$\n\n**$7.2$ is what percent of $0.06$?**\n\n$$\\frac{7.2}{0.06} \\times 100 = 120 \\times 100 = 12{,}000\\%$$\n\n$$\\boxed{12{,}000\\%}$$"
    },
    {
      "id": "pct_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "If Mary has half as many cents as Nora has dollars, then Nora has what percent more cents than Mary does? (100 cents = 1 dollar)",
      "options": { "A": "100%", "B": "200%", "C": "1,990%", "D": "19,900%", "E": "20,000%" },
      "answer": "D",
      "explanation": "## Unit Conversion Trap\n\nLet Nora have $n$ dollars $= 100n$ cents.\n\nMary has half as many cents as Nora has **dollars**, so Mary has $\\frac{n}{2}$ cents.\n\n**Percent more Nora has than Mary (in cents):**\n\n$$\\frac{100n - \\frac{n}{2}}{\\frac{n}{2}} \\times 100 = \\frac{\\frac{199n}{2}}{\\frac{n}{2}} \\times 100 = 199 \\times 100 = 19{,}900\\%$$\n\n---\n\n**Verify with $n = 10$ (Nora has $\\$10 = 1{,}000$ cents; Mary has $5$ cents):**\n\n$$\\frac{1{,}000 - 5}{5} \\times 100 = \\frac{995}{5} \\times 100 = 19{,}900\\% \\checkmark$$\n\n$$\\boxed{D: \\ 19{,}900\\%}$$"
    },
    {
      "id": "pct_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "The number that is 50% greater than 60 is what percent less than the number that is 20% less than 150?",
      "options": { "A": "5%", "B": "10%", "C": "15%", "D": "20%", "E": "25%" },
      "answer": "E",
      "explanation": "## Two Numbers, Then Compare Them\n\n**Number 1 — $50\\%$ greater than $60$:**\n\n$$60 \\times 1.5 = 90$$\n\n**Number 2 — $20\\%$ less than $150$:**\n\n$$150 \\times 0.8 = 120$$\n\n**$90$ is what percent less than $120$?**\n\n$$\\frac{120 - 90}{120} \\times 100 = \\frac{30}{120} \\times 100 = 25\\%$$\n\n---\n\n> **Percent less uses the larger number as the denominator** (the number you're comparing against).\n\n$$\\boxed{E: \\ 25\\%}$$"
    },
    {
      "id": "pct_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "A cockroach population doubles every 3 days. In 30 days, by what percent would a cockroach population increase?",
      "options": { "A": "900%", "B": "1,000%", "C": "9,999%", "D": "102,300%", "E": "102,400%" },
      "answer": "D",
      "explanation": "## Exponential Growth — Percent Increase\n\nIn $30$ days, there are $\\frac{30}{3} = 10$ doubling periods.\n\n**Growth multiplier:**\n\n$$2^{10} = 1{,}024$$\n\n**Percent increase** (not the final size, but the **increase**):\n\n$$\\frac{1{,}024 - 1}{1} \\times 100 = 1{,}023 \\times 100 = 102{,}300\\%$$\n\n---\n\n> **Trap:** The population is $1{,}024$ times its original size, which is an increase of $102{,}300\\%$ (not $102{,}400\\%$). The percent increase is always $\\text{(multiplier} - 1) \\times 100\\%$.\n\n$$\\boxed{D: \\ 102{,}300\\%}$$"
    },
    {
      "id": "pct_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "After a 15% discount, the price of a computer was $612. What was the price of the computer before the discount?",
      "options": { "A": "$108.00", "B": "$520.20", "C": "$703.80", "D": "$720.00", "E": "$744.00" },
      "answer": "D",
      "explanation": "## Finding the Original Price from a Discounted Price\n\nAfter a $15\\%$ discount, the price is $85\\%$ of the original:\n\n$$0.85 \\times p = \\$612 \\implies p = \\frac{\\$612}{0.85} = \\$720$$\n\n---\n\n> **Common mistake:** Adding $15\\%$ back to $\\$612$: $\\$612 \\times 1.15 = \\$703.80$ (answer C). This is wrong because $15\\%$ of the original ≠ $15\\%$ of the discounted price. Always divide by the remaining factor.\n\n$$\\boxed{D: \\ \\$720}$$"
    },
    {
      "id": "pct_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "At the end of April, the price of fuel was 40% greater than the price at the beginning of the month. At the end of May, the price was 30% greater than the price at the end of April.",
      "quantity_a": "The price increase in April",
      "quantity_b": "The price increase in May",
      "answer": "B",
      "explanation": "## Different Bases, Different Dollar Increases\n\nLet original price $= x$.\n\n**April increase** ($40\\%$ of $x$):\n\n$$\\Delta_{\\text{April}} = 0.40x$$\n\n**End of April price:**\n\n$$1.40x$$\n\n**May increase** ($30\\%$ of the end-of-April price):\n\n$$\\Delta_{\\text{May}} = 0.30 \\times 1.40x = 0.42x$$\n\n---\n\nCompare: $0.42x > 0.40x$ → May's dollar increase is larger.\n\n> Even though April had the higher **percent** increase ($40\\% > 30\\%$), May's increase applied to a **larger base**, making the dollar amount bigger.\n\n$$\\boxed{B}$$"
    },
    {
      "id": "pct_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "Aloysius spends 50% of his income on rent, utilities, and insurance, and 20% on food. If he spends 30% of the remainder on video games and has no other expenditures, what percent of his income is left after all expenditures?",
      "options": { "A": "30%", "B": "21%", "C": "20%", "D": "9%", "E": "0%" },
      "answer": "B",
      "explanation": "## Sequential Deductions\n\nLet income $= 100\\%$.\n\n**After rent/utilities/insurance and food:**\n\n$$100\\% - 50\\% - 20\\% = 30\\% \\text{ remaining}$$\n\n**Video games** ($30\\%$ of the $30\\%$ remainder):\n\n$$0.30 \\times 30\\% = 9\\%$$\n\n**Final remainder:**\n\n$$30\\% - 9\\% = 21\\%$$\n\n---\n\n> **Trap:** $30\\%$ of the remainder, not $30\\%$ of income. He spends $9\\%$ of income on video games (not $30\\%$).\n\n$$\\boxed{B: \\ 21\\%}$$"
    },
    {
      "id": "pct_029",
      "number": 29,
      "type": "numeric_entry",
      "text": "In 1970, company X had 2,000 employees, 15% of whom were women, and 10% of these women were executives. In 2012, the company had 12,000 employees, 45% of whom were women. If 40% of those women were executives, what was the percent increase in the number of women executives from 1970 to 2012?",
      "answer": 7100,
      "explanation": "## Multi-Step Percent — Find Both Values, Then Compare\n\n**1970 women executives:**\n\n$$\\text{Women} = 0.15 \\times 2{,}000 = 300$$\n\n$$\\text{Women execs} = 0.10 \\times 300 = 30$$\n\n**2012 women executives:**\n\n$$\\text{Women} = 0.45 \\times 12{,}000 = 5{,}400$$\n\n$$\\text{Women execs} = 0.40 \\times 5{,}400 = 2{,}160$$\n\n**Percent increase:**\n\n$$\\frac{2{,}160 - 30}{30} \\times 100 = \\frac{2{,}130}{30} \\times 100 = 71 \\times 100 = 7{,}100\\%$$\n\n$$\\boxed{7{,}100\\%}$$"
    },
    {
      "id": "pct_030",
      "number": 30,
      "type": "numeric_entry",
      "text": "75% of all the boys and 48% of all the girls at Smith High School take civics. If there are 20% fewer boys than there are girls in the school, what percent of all the students take civics?",
      "answer": 60,
      "explanation": "## Weighted Percent — Choose Convenient Numbers\n\nLet girls $= 100$. Then boys $= 80$ (20% fewer).\n\n**Boys taking civics:**\n\n$$0.75 \\times 80 = 60$$\n\n**Girls taking civics:**\n\n$$0.48 \\times 100 = 48$$\n\n**Total taking civics:**\n\n$$60 + 48 = 108$$\n\n**Total students:**\n\n$$80 + 100 = 180$$\n\n**Percent:**\n\n$$\\frac{108}{180} \\times 100 = 60\\%$$\n\n$$\\boxed{60\\%}$$"
    },
    {
      "id": "pct_031",
      "number": 31,
      "type": "quantitative_comparison",
      "context": "Airline A and airline B both previously charged $400. Airline A reduced price by 25%, airline B reduced by 55% but added $150 in fees. Then airline A increased its reduced price by 10%.",
      "quantity_a": "The final price of the flight on airline A",
      "quantity_b": "The final price of the flight on airline B",
      "answer": "C",
      "explanation": "## Two Different Pricing Paths\n\n**Airline A:**\n\n$$\\$400 \\times 0.75 = \\$300$$\n\n$$\\$300 \\times 1.10 = \\$330$$\n\n**Airline B:**\n\n$$\\$400 \\times 0.45 = \\$180$$\n\n$$\\$180 + \\$150 = \\$330$$\n\n$$\\$330 = \\$330 \\implies \\boxed{C}$$"
    },
    {
      "id": "pct_032",
      "number": 32,
      "type": "quantitative_comparison",
      "context": "p is 75% of q and p equals 2r.",
      "quantity_a": "0.375q",
      "quantity_b": "r",
      "answer": "C",
      "explanation": "## Linking Variables Through Equations\n\nGiven: $p = 0.75q$ and $p = 2r$.\n\nFrom $p = 2r$:\n\n$$r = \\frac{p}{2} = \\frac{0.75q}{2} = 0.375q$$\n\nQuantity A $= 0.375q =$ Quantity B $= r$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pct_033",
      "number": 33,
      "type": "quantitative_comparison",
      "context": "0 < x < 100",
      "quantity_a": "x% of 0.5% of 40,000",
      "quantity_b": "0.05% of 2,000% of 40x",
      "answer": "A",
      "explanation": "## Simplify Both Sides\n\n**Quantity A:**\n\n$$\\frac{x}{100} \\times 0.005 \\times 40{,}000 = \\frac{x}{100} \\times 200 = 2x$$\n\n**Quantity B:**\n\n$$0.0005 \\times 20 \\times 40x = 0.0005 \\times 800x = 0.4x$$\n\nSince $x > 0$:\n\n$$2x > 0.4x \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_034",
      "number": 34,
      "type": "numeric_entry",
      "image": "/percents/per_034.svg",
      "context": "Profit Per Student (in Dollars) at Dan's Dojo, 2000–2004:\n2000: 60, 2001: 80, 2002: 80, 2003: 100, 2004: 162",
      "text": "At Dan's Dojo, the percent increase from 2004 to 2005 (not shown) was the same as the percent increase from 2000 to 2001. What was the profit per student for 2005?",
      "answer": 216,
      "explanation": "## Apply the Same Percent Increase to a New Base\n\n**Percent increase from 2000 to 2001:**\n\n$$\\frac{80 - 60}{60} \\times 100 = \\frac{20}{60} \\times 100 = 33.\\overline{3}\\%$$\n\nAs a multiplier: $\\times \\frac{4}{3}$\n\n**Apply to 2004's value:**\n\n$$162 \\times \\frac{4}{3} = \\frac{648}{3} = 216$$\n\n---\n\n### Alternative — Find the Dollar Increase\n\n$33.\\overline{3}\\%$ of $162 = \\frac{162}{3} = 54$.\n\n$162 + 54 = 216$.\n\n$$\\boxed{216}$$"
    },
    {
      "id": "pct_035",
      "number": 35,
      "type": "multiple_choice",
      "text": "If x is 0.5% of y, then y is what percent of x?",
      "options": { "A": "199%", "B": "200%", "C": "2,000%", "D": "19,900%", "E": "20,000%" },
      "answer": "E",
      "explanation": "## Inverting the Percent Relationship\n\n$$x = 0.5\\% \\times y = 0.005y$$\n\n$$y = \\frac{x}{0.005} = 200x$$\n\n$y$ is $200$ times $x$, which as a percent:\n\n$$200 \\times 100\\% = 20{,}000\\%$$\n\n---\n\n> **Rule:** If $x$ is $\\frac{1}{k}$ of $y$, then $y$ is $k$ times $x = k \\times 100\\%$ of $x$. Here $k = 200$, so $y = 20{,}000\\%$ of $x$.\n\n$$\\boxed{E: \\ 20{,}000\\%}$$"
    },
    {
      "id": "pct_036",
      "number": 36,
      "type": "quantitative_comparison",
      "context": "Bill pays 20% tax on his gross salary of $5,000 each month and spends 25% of the remaining amount on rent.",
      "quantity_a": "The monthly tax paid on Bill's salary",
      "quantity_b": "The rent paid monthly by Bill",
      "answer": "C",
      "explanation": "## Comparing Two Percent Deductions\n\n**Tax:**\n\n$$20\\% \\times \\$5{,}000 = \\$1{,}000$$\n\n**Remaining after tax:**\n\n$$\\$5{,}000 - \\$1{,}000 = \\$4{,}000$$\n\n**Rent:**\n\n$$25\\% \\times \\$4{,}000 = \\$1{,}000$$\n\n$$\\$1{,}000 = \\$1{,}000 \\implies \\boxed{C}$$"
    },
    {
      "id": "pct_037",
      "number": 37,
      "type": "multiple_choice",
      "text": "Four people shared a dinner with an $80 bill and tipped the waiter 15% of this amount. If each person contributed equally to paying the bill and tip, how much did each person pay?",
      "options": { "A": "$20.00", "B": "$23.00", "C": "$23.75", "D": "$24.00", "E": "$25.00" },
      "answer": "B",
      "explanation": "## Total Then Divide\n\n**Tip:**\n\n$$15\\% \\times \\$80 = \\$12$$\n\n**Total (bill + tip):**\n\n$$\\$80 + \\$12 = \\$92$$\n\n**Per person:**\n\n$$\\frac{\\$92}{4} = \\$23$$\n\n$$\\boxed{B: \\ \\$23}$$"
    },
    {
      "id": "pct_038",
      "number": 38,
      "type": "quantitative_comparison",
      "context": "The price of a certain stock rose by 25% and then decreased by y%. After the decrease, the stock was back to its original price.",
      "quantity_a": "y",
      "quantity_b": "25",
      "answer": "B",
      "explanation": "## The Asymmetry of Up Then Down\n\nLet original $= \\$100$.\n\n**After $25\\%$ rise:**\n\n$$\\$100 \\times 1.25 = \\$125$$\n\n**To return to $\\$100$, need a decrease of:**\n\n$$y = \\frac{\\$125 - \\$100}{\\$125} \\times 100 = \\frac{25}{125} \\times 100 = 20\\%$$\n\n---\n\n> **Why $y < 25$?** The $y\\%$ decrease applies to the **larger** base ($\\$125$), so a smaller percentage wipes out the same $\\$25$ gain.\n\n$$y = 20 < 25 \\implies \\boxed{B}$$"
    },
    {
      "id": "pct_039",
      "number": 39,
      "type": "multiple_choice",
      "text": "A chemist has 30 ounces of a solution, 10 of which are acetone. How many ounces of acetone should she add to attain a 50/50 mixture of acetone and water if no additional water is added?",
      "options": { "A": "2.5", "B": "5", "C": "10", "D": "15", "E": "20" },
      "answer": "C",
      "explanation": "## Mixture Problem — Keep Water Fixed\n\n**Current composition:** $10$ oz acetone, $20$ oz water.\n\nFor a $50/50$ mixture, acetone must equal water. Water stays at $20$ oz, so acetone must reach $20$ oz.\n\n**Additional acetone needed:**\n\n$$20 - 10 = 10 \\text{ oz}$$\n\n**Verify:** New mixture = $20$ oz acetone + $20$ oz water $= 50\\%$ each ✓\n\n$$\\boxed{C: \\ 10 \\text{ oz}}$$"
    },
    {
      "id": "pct_040",
      "number": 40,
      "type": "quantitative_comparison",
      "context": "By the end of July, a certain baseball team had played 80% of total games and won 50% of those. Of the remaining games, the team won 60%.",
      "quantity_a": "Percent of total games won for the season",
      "quantity_b": "52%",
      "answer": "C",
      "explanation": "## Weighted Percent of Two Groups\n\nLet total games $= 100$.\n\n**Games played by end of July:** $80$ (won $50\\%$ → $40$ wins)\n\n**Remaining games:** $20$ (won $60\\%$ → $12$ wins)\n\n**Total wins:** $40 + 12 = 52$\n\n**Percent won:** $\\dfrac{52}{100} = 52\\%$\n\n$$52\\% = 52\\% \\implies \\boxed{C}$$"
    },
    {
      "id": "pct_041",
      "number": 41,
      "type": "quantitative_comparison",
      "quantity_a": "0.4% of 4% of 1.25",
      "quantity_b": "0.002",
      "answer": "B",
      "explanation": "## Small Percents — Be Precise with Decimal Places\n\n**Quantity A:**\n\n$$0.004 \\times 0.04 \\times 1.25$$\n\nStep by step:\n\n$$0.004 \\times 0.04 = 0.00016$$\n\n$$0.00016 \\times 1.25 = 0.0002$$\n\n**Quantity B $= 0.002$**\n\n$$0.0002 < 0.002 \\implies \\boxed{B}$$"
    },
    {
      "id": "pct_042",
      "number": 42,
      "type": "multiple_choice",
      "text": "Jane has a 40-ounce mixture of apple juice and seltzer that is 30% apple juice. If she pours 10 more ounces of apple juice into the mixture, what percent of the mixture will be seltzer?",
      "options": { "A": "33%", "B": "44%", "C": "50%", "D": "56%", "E": "67%" },
      "answer": "D",
      "explanation": "## Adding to a Mixture — Track Both Components\n\n**Original mixture:**\n\n$$\\text{Apple juice} = 30\\% \\times 40 = 12 \\text{ oz}$$\n$$\\text{Seltzer} = 40 - 12 = 28 \\text{ oz}$$\n\n**After adding $10$ oz of apple juice:**\n\n$$\\text{Apple juice} = 12 + 10 = 22 \\text{ oz}$$\n$$\\text{Seltzer} = 28 \\text{ oz (unchanged)}$$\n$$\\text{Total} = 50 \\text{ oz}$$\n\n**Percent seltzer:**\n\n$$\\frac{28}{50} \\times 100 = 56\\%$$\n\n$$\\boxed{D: \\ 56\\%}$$"
    },
    {
      "id": "pct_043",
      "number": 43,
      "type": "quantitative_comparison",
      "context": "Half of the shirts in a closet are white and 30% of the remaining shirts are gray.",
      "quantity_a": "The percent of the shirts in the closet that are not white or gray.",
      "quantity_b": "20%",
      "answer": "A",
      "explanation": "## Sequential Percentages on Different Bases\n\nLet total $= 100$ shirts.\n\n**White:** $50$ shirts\n\n**Remaining:** $50$ shirts\n\n**Gray** ($30\\%$ of remaining $50$):\n\n$$0.30 \\times 50 = 15 \\text{ shirts}$$\n\n**Neither white nor gray:**\n\n$$100 - 50 - 15 = 35 \\text{ shirts} = 35\\%$$\n\n$$35\\% > 20\\% \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_044",
      "number": 44,
      "type": "quantitative_comparison",
      "context": "The length and width of a painted rectangle were each increased by 10%.",
      "quantity_a": "The percent increase in the area of the painted rectangle",
      "quantity_b": "10%",
      "answer": "A",
      "explanation": "## Scaling Both Dimensions — Area Scales by $k^2$\n\nLet original length $= l$, width $= w$, area $= lw$.\n\n**New dimensions:** $1.1l$ and $1.1w$\n\n**New area:**\n\n$$1.1l \\times 1.1w = 1.21lw$$\n\n**Percent increase in area:**\n\n$$\\frac{1.21lw - lw}{lw} \\times 100 = 0.21 \\times 100 = 21\\%$$\n\n---\n\n> **Rule:** If each linear dimension is multiplied by $k = 1.1$, the area is multiplied by $k^2 = 1.21$ — a $21\\%$ increase, not $10\\%$ or $20\\%$.\n\n$$21\\% > 10\\% \\implies \\boxed{A}$$"
    },
    {
      "id": "pct_045",
      "number": 45,
      "type": "multiple_choice",
      "text": "If 35% of x equals 140, what is 20% of x?",
      "options": { "A": "9.8", "B": "39.2", "C": "80", "D": "320", "E": "400" },
      "answer": "C",
      "explanation": "## Find $x$, Then Apply the New Percent\n\n$$0.35x = 140 \\implies x = \\frac{140}{0.35} = 400$$\n\n$$20\\% \\times 400 = 0.20 \\times 400 = 80$$\n\n---\n\n### Shortcut — Ratio of Percents\n\n$$\\frac{20\\%}{35\\%} \\times 140 = \\frac{4}{7} \\times 140 = 80$$\n\n$$\\boxed{C: \\ 80}$$"
    },
    {
      "id": "pct_046",
      "number": 46,
      "type": "multiple_choice",
      "text": "A population of bacteria increases by 20% every 3 minutes. If at 9:00am the colony had a population of 144,000, what was the population at 8:54am?",
      "options": { "A": "100,000", "B": "112,000", "C": "120,000", "D": "121,000", "E": "136,000" },
      "answer": "A",
      "explanation": "## Working Backwards Through Exponential Growth\n\nFrom $8{:}54$ to $9{:}00$ = $6$ minutes = $2$ periods of $3$ minutes.\n\nLet $p$ = population at $8{:}54$.\n\n$$p \\times (1.2)^2 = 144{,}000$$\n\n$$p \\times 1.44 = 144{,}000$$\n\n$$p = \\frac{144{,}000}{1.44} = 100{,}000$$\n\n$$\\boxed{A: \\ 100{,}000}$$"
    },
    {
      "id": "pct_047",
      "number": 47,
      "type": "quantitative_comparison",
      "context": "The price of an item is greater than $90 and less than $150.",
      "quantity_a": "The price of the item after a 10%-off discount and then a $20-off discount",
      "quantity_b": "The price of the item after a $10-off discount and then a 20%-off discount",
      "answer": "D",
      "explanation": "## Order of Operations — Discount Order Matters\n\n**Test $p = \\$100$:**\n\n$$\\text{Qty A: } 100 \\times 0.9 - 20 = 90 - 20 = \\$70$$\n\n$$\\text{Qty B: } (100 - 10) \\times 0.8 = 90 \\times 0.8 = \\$72$$\n\nHere $B > A$.\n\n**Test $p = \\$140$:**\n\n$$\\text{Qty A: } 140 \\times 0.9 - 20 = 126 - 20 = \\$106$$\n\n$$\\text{Qty B: } (140 - 10) \\times 0.8 = 130 \\times 0.8 = \\$104$$\n\nHere $A > B$.\n\nBoth outcomes occur within the valid range $90 < p < 150$.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "pct_048",
      "number": 48,
      "type": "multiple_choice",
      "text": "The number that is 20% less than 300 is what percent greater than 180?",
      "options": { "A": "25", "B": "33 1/3", "C": "50", "D": "66 2/3", "E": "75" },
      "answer": "B",
      "explanation": "## Two Steps — Compute Then Compare\n\n**$20\\%$ less than $300$:**\n\n$$300 \\times 0.8 = 240$$\n\n**$240$ is what percent greater than $180$?**\n\n$$\\frac{240 - 180}{180} \\times 100 = \\frac{60}{180} \\times 100 = \\frac{1}{3} \\times 100 = 33.\\overline{3}\\%$$\n\n$$\\boxed{B: \\ 33\\tfrac{1}{3}\\%}$$"
    },
    {
      "id": "pct_049",
      "number": 49,
      "type": "multiple_choice",
      "text": "A tank that was 40% full of oil was emptied into a 20-gallon bucket. If the oil fills 35% of the bucket's volume, then what is the total capacity of the tank, in gallons?",
      "options": { "A": "8.75", "B": "15", "C": "16", "D": "17.5", "E": "19" },
      "answer": "D",
      "explanation": "## Find the Volume, Then Scale Back\n\n**Volume of oil (fills $35\\%$ of the $20$-gallon bucket):**\n\n$$0.35 \\times 20 = 7 \\text{ gallons}$$\n\n**This oil was $40\\%$ of the tank's capacity $T$:**\n\n$$0.40 \\times T = 7 \\implies T = \\frac{7}{0.40} = 17.5 \\text{ gallons}$$\n\n$$\\boxed{D: \\ 17.5 \\text{ gallons}}$$"
    },
    {
      "id": "pct_050",
      "number": 50,
      "type": "multiple_choice",
      "text": "If 150 were increased by 60% and then decreased by y%, the result would be 192. What is the value of y?",
      "options": { "A": "20", "B": "28", "C": "32", "D": "72", "E": "80" },
      "answer": "A",
      "explanation": "## Two Sequential Changes — Solve for the Unknown\n\n**After $60\\%$ increase:**\n\n$$150 \\times 1.6 = 240$$\n\n**After decrease by $y\\%$:**\n\n$$240 \\times \\left(1 - \\frac{y}{100}\\right) = 192$$\n\n$$1 - \\frac{y}{100} = \\frac{192}{240} = 0.8$$\n\n$$\\frac{y}{100} = 0.2 \\implies y = 20$$\n\n$$\\boxed{A: \\ y = 20}$$"
    },
    {
      "id": "pct_051",
      "number": 51,
      "type": "multiple_choice",
      "text": "If x is 150% greater than 200, x is what percent greater than 50% of 500?",
      "options": { "A": "0", "B": "20", "C": "50", "D": "100", "E": "200" },
      "answer": "D",
      "explanation": "## \"Greater Than\" vs. \"Of\" — Two Different Phrasings\n\n**\"$x$ is $150\\%$ greater than $200$\":**\n\n$$x = 200 + 150\\% \\times 200 = 200 + 300 = 500$$\n\n**\"$50\\%$ of $500$\":**\n\n$$0.5 \\times 500 = 250$$\n\n**$x$ is what percent greater than $250$?**\n\n$$\\frac{500 - 250}{250} \\times 100 = \\frac{250}{250} \\times 100 = 100\\%$$\n\n---\n\n> **Key distinction:** \"$150\\%$ greater than $200$\" means $200 + 150\\% \\times 200 = 500$, NOT $150\\% \\times 200 = 300$.\n\n$$\\boxed{D: \\ 100\\%}$$"
    },
    {
      "id": "pct_052",
      "number": 52,
      "type": "multiple_choice",
      "text": "16 ounces of birdseed mix contains 10% sesame seed by weight. How much sesame seed must be added to produce a mix that is 20% sesame seed by weight?",
      "options": { "A": "1 ounce", "B": "1.6 ounces", "C": "2 ounces", "D": "2.4 ounces", "E": "4 ounces" },
      "answer": "C",
      "explanation": "## Mixture Equation — Adding Pure Ingredient\n\n**Current sesame:** $10\\% \\times 16 = 1.6$ oz\n\nLet $s$ = ounces of sesame to add.\n\n**New mixture equation:**\n\n$$\\frac{1.6 + s}{16 + s} = 0.20$$\n\n$$1.6 + s = 0.20(16 + s) = 3.2 + 0.2s$$\n\n$$0.8s = 1.6 \\implies s = 2$$\n\n**Verify:** New mix $= 3.6$ oz sesame in $18$ oz total $= 20\\%$ ✓\n\n$$\\boxed{C: \\ 2 \\text{ oz}}$$"
    },
    {
      "id": "pct_053",
      "number": 53,
      "type": "quantitative_comparison",
      "context": "a, b, and c are positive.",
      "quantity_a": "(a + b)% of c",
      "quantity_b": "c% of (a + b)",
      "answer": "C",
      "explanation": "## The Universal Percent Symmetry\n\n$$\\text{Qty A} = \\frac{a+b}{100} \\times c = \\frac{c(a+b)}{100}$$\n\n$$\\text{Qty B} = \\frac{c}{100} \\times (a+b) = \\frac{c(a+b)}{100}$$\n\nBoth expressions equal $\\dfrac{c(a+b)}{100}$.\n\n$$\\boxed{C}$$"
    },
    {
      "id": "pct_054",
      "number": 54,
      "type": "multiple_choice",
      "image": "/percents/per_054.svg",
      "context": "Conference Ticket Advance Discounts:\n5–29 days in advance: 15%\n30–59 days in advance: 30%\n60–89 days in advance: 40%",
      "text": "Helen paid $252 for a conference ticket. If she had purchased the ticket one day later, she would have paid $306. How many days in advance did she purchase the ticket?",
      "options": { "A": "5", "B": "30", "C": "59", "D": "60", "E": "89" },
      "answer": "B",
      "explanation": "## The Boundary Between Two Discount Tiers\n\nThe key: one day later means a **different discount tier** — and the price jumps significantly.\n\n**Test the boundary at 30 days** (30% discount) vs. 29 days (15% discount):\n\nLet full price $= p$.\n\n**At 30 days in advance** ($30\\%$ off): $\\$252 = 0.70p \\implies p = \\$360$\n\n**At 29 days in advance** ($15\\%$ off): $\\$360 \\times 0.85 = \\$306$ ✓\n\n**This matches exactly.** Helen bought the ticket at $30$ days in advance at $30\\%$ off. One day later (29 days), the discount drops to $15\\%$, raising the price to $\\$306$.\n\n$$\\boxed{B: \\ 30 \\text{ days in advance}}$$"
    }
  ]
};
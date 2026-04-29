export const RatesWork = {
  "chapter": 18,
  "topic": "Rates and Work",
  "questions": [
    {
      "id": "rw_001",
      "number": 1,
      "type": "multiple_choice",
      "text": "Running on a 10-mile loop in the same direction, Sue ran at 8 mph and Rob ran at 6 mph. Starting at the same point, how many hours later did Sue complete exactly 1 more lap than Rob?",
      "options": { "A": "3", "B": "4", "C": "5", "D": "6", "E": "7" },
      "answer": "C",
      "explanation": "## Catch-Up Problem on a Loop\n\nSue laps Rob when she has run exactly $10$ more miles than him.\n\nLet $t$ = hours elapsed. Rob's distance $= 6t$. Sue's distance $= 8t$.\n\n$$8t - 6t = 10 \\implies 2t = 10 \\implies t = 5$$\n\n$$\\boxed{C: \\ 5 \\text{ hours}}$$"
    },
    {
      "id": "rw_002",
      "number": 2,
      "type": "multiple_choice",
      "text": "Svetlana ran the first 5 km of a 10 km race at 12 km/hr. She completed the race in 55 minutes. At what constant rate did she run the last 5 km?",
      "options": { "A": "15", "B": "12", "C": "11", "D": "10", "E": "8" },
      "answer": "D",
      "explanation": "## Split the Race Into Two Segments\n\n**Time for first 5 km:**\n\n$$t_1 = \\frac{5}{12} \\text{ hr} = \\frac{5}{12} \\times 60 = 25 \\text{ min}$$\n\n**Time for last 5 km:**\n\n$$t_2 = 55 - 25 = 30 \\text{ min} = 0.5 \\text{ hr}$$\n\n**Rate for last 5 km:**\n\n$$r = \\frac{5}{0.5} = 10 \\text{ km/hr}$$\n\n$$\\boxed{D: \\ 10 \\text{ km/hr}}$$"
    },
    {
      "id": "rw_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "A standard machine fills paint cans at 1 gallon every 4 minutes. A deluxe machine fills at twice that rate. How many hours will it take both machines working together to fill 135 gallons?",
      "options": { "A": "1", "B": "1.5", "C": "2", "D": "2.5", "E": "3" },
      "answer": "E",
      "explanation": "## Combined Rate — Convert Units\n\n**Standard machine:** $\\frac{1}{4}$ gal/min $= 15$ gal/hr\n\n**Deluxe machine:** $2 \\times 15 = 30$ gal/hr\n\n**Combined rate:** $15 + 30 = 45$ gal/hr\n\n**Time:**\n\n$$t = \\frac{135}{45} = 3 \\text{ hours}$$\n\n$$\\boxed{E: \\ 3 \\text{ hours}}$$"
    },
    {
      "id": "rw_004",
      "number": 4,
      "type": "multiple_choice",
      "text": "Wendy can build a birdhouse in 15 hours and Miguel can build one in 10 hours. How many hours will it take them working together?",
      "options": { "A": "5", "B": "6", "C": "7", "D": "8", "E": "9" },
      "answer": "B",
      "explanation": "## Combined Work Rate\n\nWendy's rate: $\\frac{1}{15}$ birdhouse/hr. Miguel's rate: $\\frac{1}{10}$ birdhouse/hr.\n\n**Combined rate:**\n\n$$\\frac{1}{15} + \\frac{1}{10} = \\frac{2}{30} + \\frac{3}{30} = \\frac{5}{30} = \\frac{1}{6} \\text{ birdhouse/hr}$$\n\n**Time for 1 birdhouse:**\n\n$$t = \\frac{1}{1/6} = 6 \\text{ hours}$$\n\n$$\\boxed{B: \\ 6 \\text{ hours}}$$"
    },
    {
      "id": "rw_005",
      "number": 5,
      "type": "numeric_entry",
      "text": "Machine A, which produces 15 golf clubs per hour, fills a production lot in 6 hours. Machine B fills the same production lot in 1.5 hours. How many golf clubs does machine B produce per hour?",
      "answer": 60,
      "explanation": "## Find the Lot Size, Then Divide\n\n**Lot size:**\n\n$$15 \\times 6 = 90 \\text{ golf clubs}$$\n\n**Machine B's rate:**\n\n$$\\frac{90}{1.5} = 60 \\text{ clubs/hr}$$\n\n$$\\boxed{60}$$"
    },
    {
      "id": "rw_006",
      "number": 6,
      "type": "quantitative_comparison",
      "context": "Davis drove from Amityville to Beteltown at 50 miles per hour, and returned by the same route at 60 miles per hour.",
      "quantity_a": "Davis's average speed for the round trip, in miles per hour",
      "quantity_b": "55",
      "answer": "B",
      "explanation": "## Average Speed Over Equal Distances — Harmonic Mean\n\nWhen the **same distance** is traveled at two different speeds, the average speed is the **harmonic mean**, always less than the arithmetic mean.\n\nLet one-way distance $= 300$ miles (LCM of $50$ and $60$ for clean numbers).\n\n$$t_{\\text{there}} = \\frac{300}{50} = 6 \\text{ hr}, \\quad t_{\\text{back}} = \\frac{300}{60} = 5 \\text{ hr}$$\n\n$$\\text{Avg speed} = \\frac{600}{11} \\approx 54.5 \\text{ mph}$$\n\n$$54.5 < 55 \\implies \\boxed{B}$$"
    },
    {
      "id": "rw_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "If a turtle traveled 1/30 of a mile in 5 minutes, what was its speed in miles per hour?",
      "options": { "A": "0.02", "B": "0.16̄", "C": "0.4", "D": "0.6", "E": "2.5" },
      "answer": "C",
      "explanation": "## Convert Time Units Before Dividing\n\n$$t = 5 \\text{ min} = \\frac{5}{60} = \\frac{1}{12} \\text{ hr}$$\n\n$$r = \\frac{d}{t} = \\frac{1/30}{1/12} = \\frac{1}{30} \\times 12 = \\frac{12}{30} = 0.4 \\text{ mph}$$\n\n$$\\boxed{C: \\ 0.4 \\text{ mph}}$$"
    },
    {
      "id": "rw_008",
      "number": 8,
      "type": "quantitative_comparison",
      "context": "Akilah traveled at a rate of x miles per hour for 2x hours.",
      "quantity_a": "The number of miles Akilah traveled",
      "quantity_b": "3x",
      "answer": "D",
      "explanation": "## Distance = Rate × Time\n\n$$d = x \\times 2x = 2x^2$$\n\nCompare $2x^2$ to $3x$:\n\n**If $x = 1$:** $2(1)^2 = 2 < 3(1) = 3$ → B greater\n\n**If $x = 2$:** $2(4) = 8 > 3(2) = 6$ → A greater\n\nBoth outcomes possible.\n\n$$\\boxed{D}$$"
    },
    {
      "id": "rw_009",
      "number": 9,
      "type": "numeric_entry",
      "text": "Claudette traveled the first 2/3 of a 60-mile trip at 20 mph and the remainder at 30 mph. How many minutes later would she have arrived if she had completed the entire trip at 20 mph?",
      "answer": 20,
      "explanation": "## Compare Actual vs. Hypothetical Time\n\n**Actual trip:**\n\n$$\\frac{2}{3} \\times 60 = 40 \\text{ miles at } 20 \\text{ mph}: \\frac{40}{20} = 2 \\text{ hr}$$\n\n$$20 \\text{ miles at } 30 \\text{ mph}: \\frac{20}{30} = \\frac{2}{3} \\text{ hr} = 40 \\text{ min}$$\n\nTotal: $2$ hr $40$ min $= 160$ min\n\n**Hypothetical (all at 20 mph):**\n\n$$\\frac{60}{20} = 3 \\text{ hr} = 180 \\text{ min}$$\n\n**Difference:** $180 - 160 = 20$ min\n\n$$\\boxed{20 \\text{ min}}$$"
    },
    {
      "id": "rw_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "Rajesh traveled home→school at 30 mph, school→home at 40 mph, then home→school again at 60 mph. What was his average speed for the entire trip?",
      "options": { "A": "32", "B": "36", "C": "40", "D": "45", "E": "47" },
      "answer": "C",
      "explanation": "## Average Speed Over Three Equal Distances\n\nLet each one-way distance $= 120$ miles (LCM of $30, 40, 60$).\n\n$$t_1 = \\frac{120}{30} = 4 \\text{ hr}, \\quad t_2 = \\frac{120}{40} = 3 \\text{ hr}, \\quad t_3 = \\frac{120}{60} = 2 \\text{ hr}$$\n\n$$\\text{Avg speed} = \\frac{360}{9} = 40 \\text{ mph}$$\n\n$$\\boxed{C: \\ 40 \\text{ mph}}$$"
    },
    {
      "id": "rw_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "Twelve workers pack 60 boxes in 9 minutes. How many minutes would it take 27 workers to pack 180 boxes at the same rate?",
      "options": { "A": "12", "B": "13", "C": "14", "D": "15", "E": "16" },
      "answer": "A",
      "explanation": "## Worker-Rate Problems\n\n**Individual rate:**\n\n$$r = \\frac{60 \\text{ boxes}}{12 \\text{ workers} \\times 9 \\text{ min}} = \\frac{60}{108} = \\frac{5}{9} \\text{ boxes/(worker·min)}$$\n\n**Time for 27 workers to pack 180 boxes:**\n\n$$180 = \\frac{5}{9} \\times 27 \\times t = 15t \\implies t = 12 \\text{ min}$$\n\n$$\\boxed{A: \\ 12 \\text{ min}}$$"
    },
    {
      "id": "rw_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "To service a single device in 12 seconds, 700 nanorobots are required. How many hours would it take a single nanorobot to service 12 devices?",
      "options": { "A": "7/3", "B": "28", "C": "108", "D": "1,008", "E": "1,680" },
      "answer": "B",
      "explanation": "## Scaling from Many to One\n\n**One nanorobot's time to service $1$ device:**\n\n$$12 \\text{ sec} \\times 700 = 8{,}400 \\text{ sec}$$\n\n**Time for $12$ devices:**\n\n$$8{,}400 \\times 12 = 100{,}800 \\text{ sec}$$\n\n**Convert to hours:**\n\n$$\\frac{100{,}800}{3{,}600} = 28 \\text{ hours}$$\n\n$$\\boxed{B: \\ 28 \\text{ hours}}$$"
    },
    {
      "id": "rw_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "A baker made 60 pies in the first 5 hours. By how many pies per hour did he increase his rate in the last 3 hours to complete 150 pies in the 8-hour day?",
      "options": { "A": "12", "B": "14", "C": "16", "D": "18", "E": "20" },
      "answer": "D",
      "explanation": "## Find Each Rate, Then Find the Difference\n\n**First 5 hours:** $\\frac{60}{5} = 12$ pies/hr\n\n**Last 3 hours:** $150 - 60 = 90$ pies in $3$ hr $= 30$ pies/hr\n\n**Increase:**\n\n$$30 - 12 = 18 \\text{ pies/hr}$$\n\n$$\\boxed{D: \\ 18}$$"
    },
    {
      "id": "rw_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "Nine identical machines can stitch 27 jerseys in 4 minutes. How many minutes would it take 4 such machines to stitch 60 jerseys?",
      "options": { "A": "8", "B": "12", "C": "16", "D": "18", "E": "20" },
      "answer": "E",
      "explanation": "## Individual Rate Then Scale\n\n**Rate per machine:**\n\n$$\\frac{27}{9 \\times 4} = \\frac{27}{36} = \\frac{3}{4} \\text{ jersey/(machine·min)}$$\n\n**4 machines, 60 jerseys:**\n\n$$60 = \\frac{3}{4} \\times 4 \\times t = 3t \\implies t = 20 \\text{ min}$$\n\n$$\\boxed{E: \\ 20 \\text{ min}}$$"
    },
    {
      "id": "rw_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "Brenda walked a 12-mile scenic loop in 3 hours. If she then reduced her walking speed by half, how many hours would it take Brenda to walk the same scenic loop two more times?",
      "options": { "A": "6", "B": "8", "C": "12", "D": "18", "E": "24" },
      "answer": "C",
      "explanation": "## Halved Speed = Doubled Time\n\n**Original speed:** $\\frac{12}{3} = 4$ mph\n\n**New speed:** $2$ mph\n\n**Distance:** $2 \\times 12 = 24$ miles\n\n$$t = \\frac{24}{2} = 12 \\text{ hours}$$\n\n$$\\boxed{C: \\ 12 \\text{ hours}}$$"
    },
    {
      "id": "rw_016",
      "number": 16,
      "type": "multiple_choice",
      "text": "A train was hijacked heading due south. A police car 50 miles north of the train started driving south at 80 mph while the train traveled at 50 mph. How long after the hijacking did the police car catch up?",
      "options": { "A": "1 hour", "B": "1 hour and 20 minutes", "C": "1 hour and 40 minutes", "D": "2 hours", "E": "2 hours and 20 minutes" },
      "answer": "C",
      "explanation": "## Closing-Gap Problem\n\n**Relative (closing) speed:**\n\n$$80 - 50 = 30 \\text{ mph}$$\n\n**Initial gap:** $50$ miles\n\n**Time to close gap:**\n\n$$t = \\frac{50}{30} = \\frac{5}{3} \\text{ hr} = 1 \\text{ hr } 40 \\text{ min}$$\n\n$$\\boxed{C: \\ 1 \\text{ hr } 40 \\text{ min}}$$"
    },
    {
      "id": "rw_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "Rachel assembles a brochure every 10 minutes and Terry assembles a brochure every 8 minutes.",
      "quantity_a": "The number of minutes it will take Rachel and Terry, working together, to assemble 9 brochures",
      "quantity_b": "40",
      "answer": "C",
      "explanation": "## Combined Rate — Verify the Answer\n\n**Combined rate:**\n\n$$\\frac{1}{10} + \\frac{1}{8} = \\frac{4}{40} + \\frac{5}{40} = \\frac{9}{40} \\text{ brochures/min}$$\n\n**Time for 9 brochures:**\n\n$$t = \\frac{9}{9/40} = 40 \\text{ min}$$\n\n**Check:** In $40$ min: Rachel makes $4$, Terry makes $5$. Total $= 9$ ✓\n\n$$40 = 40 \\implies \\boxed{C}$$"
    },
    {
      "id": "rw_018",
      "number": 18,
      "type": "multiple_choice",
      "text": "With 4 identical servers at 9,600 searches/hr, how many hours would 6 servers take to process 216,000 searches?",
      "options": { "A": "15", "B": "16", "C": "18", "D": "20", "E": "24" },
      "answer": "A",
      "explanation": "## Scale the Rate by Number of Servers\n\n**Rate per server:** $\\frac{9{,}600}{4} = 2{,}400$ searches/hr\n\n**Rate for 6 servers:** $6 \\times 2{,}400 = 14{,}400$ searches/hr\n\n**Time:**\n\n$$t = \\frac{216{,}000}{14{,}400} = 15 \\text{ hours}$$\n\n$$\\boxed{A: \\ 15 \\text{ hours}}$$"
    },
    {
      "id": "rw_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "Sabrina can assemble a tank in 8 hours, and Janis can assemble a tank in 13 hours. Working together, they can assemble a tank in approximately how many hours?",
      "options": { "A": "21", "B": "18", "C": "7", "D": "5", "E": "2" },
      "answer": "D",
      "explanation": "## Combined Rate — Estimate\n\n$$\\text{Combined rate} = \\frac{1}{8} + \\frac{1}{13} = \\frac{13 + 8}{104} = \\frac{21}{104}$$\n\n$$t = \\frac{104}{21} \\approx 4.95 \\approx 5 \\text{ hours}$$\n\n$$\\boxed{D: \\ \\approx 5 \\text{ hours}}$$"
    },
    {
      "id": "rw_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "Phil played 10 hours/day for 6 days and collected 540,000 gold pieces. He sold at $1 per 1,000 pieces. What were his average earnings per hour?",
      "options": { "A": "$5", "B": "$6", "C": "$7", "D": "$8", "E": "$9" },
      "answer": "E",
      "explanation": "## Rate of Earnings\n\n**Total earnings:**\n\n$$\\frac{540{,}000}{1{,}000} = \\$540$$\n\n**Total hours:**\n\n$$10 \\times 6 = 60 \\text{ hours}$$\n\n**Average:**\n\n$$\\frac{\\$540}{60} = \\$9/\\text{hr}$$\n\n$$\\boxed{E: \\ \\$9/\\text{hr}}$$"
    },
    {
      "id": "rw_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "Alyosha can now translate at 10 more than twice as many words per hour as before his training. If he previously translated 10 words per minute, how many words can he now translate in an hour?",
      "options": { "A": "30", "B": "70", "C": "610", "D": "1,210", "E": "1,800" },
      "answer": "D",
      "explanation": "## Unit Conversion Before Computing\n\n**Old rate:** $10$ words/min $= 10 \\times 60 = 600$ words/hr\n\n**New rate** (10 more than twice as many per hour):\n\n$$10 + 2 \\times 600 = 10 + 1{,}200 = 1{,}210 \\text{ words/hr}$$\n\n$$\\boxed{D: \\ 1{,}210}$$"
    },
    {
      "id": "rw_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "Jenny takes 3 hours to sand a picnic table; Laila can do the same job in 1/2 hour. Working together at their respective constant rates, Jenny and Laila can sand a picnic table in how many hours?",
      "options": { "A": "1/6", "B": "2/9", "C": "1/3", "D": "3/7", "E": "5/6" },
      "answer": "D",
      "explanation": "## Combined Work Rate\n\n**Jenny's rate:** $\\frac{1}{3}$ table/hr\n\n**Laila's rate:** $\\frac{1}{1/2} = 2$ tables/hr\n\n**Combined rate:**\n\n$$\\frac{1}{3} + 2 = \\frac{1}{3} + \\frac{6}{3} = \\frac{7}{3} \\text{ tables/hr}$$\n\n**Time for 1 table:**\n\n$$t = \\frac{1}{7/3} = \\frac{3}{7} \\text{ hr}$$\n\n$$\\boxed{D: \\ \\frac{3}{7} \\text{ hr}}$$"
    },
    {
      "id": "rw_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "Riders board the Jelly Coaster in groups of 4 every 15 seconds. If there are 200 people in front of Kurt, in approximately how many minutes will Kurt board?",
      "options": { "A": "5", "B": "8", "C": "10", "D": "13", "E": "20" },
      "answer": "D",
      "explanation": "## Board Rate → Wait Time\n\n**Board rate:**\n\n$$\\frac{4 \\text{ people}}{15 \\text{ sec}} = \\frac{4 \\times 4}{15 \\times 4} = \\frac{16 \\text{ people}}{60 \\text{ sec}} = 16 \\text{ people/min}$$\n\n**Time for 200 people:**\n\n$$\\frac{200}{16} = 12.5 \\approx 13 \\text{ min}$$\n\n$$\\boxed{D: \\ \\approx 13 \\text{ min}}$$"
    },
    {
      "id": "rw_024",
      "number": 24,
      "type": "quantitative_comparison",
      "context": "A team of 8 chefs produce 3,200 tarts in 5 days. All chefs produce at the same constant rate.",
      "quantity_a": "The number of chefs needed to produce 3,600 tarts in 3 days",
      "quantity_b": "The number of days that 4 chefs need to produce 4,800 tarts",
      "answer": "C",
      "explanation": "## Individual Rate, Then Scale Both Ways\n\n**Rate per chef:**\n\n$$\\frac{3{,}200}{8 \\times 5} = 80 \\text{ tarts/chef/day}$$\n\n**Quantity A — Chefs needed:**\n\n$$3{,}600 = 80 \\times c \\times 3 \\implies c = \\frac{3{,}600}{240} = 15$$\n\n**Quantity B — Days needed:**\n\n$$4{,}800 = 80 \\times 4 \\times d \\implies d = \\frac{4{,}800}{320} = 15$$\n\n$$15 = 15 \\implies \\boxed{C}$$"
    },
    {
      "id": "rw_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "Working together at their respective constant rates, robot A and robot B polish 88 pounds of gemstones in 6 minutes. If robot A's rate of polishing is 3/5 that of robot B, how many minutes would it take robot A alone to polish 165 pounds?",
      "options": { "A": "15.75", "B": "18", "C": "18.75", "D": "27.5", "E": "30" },
      "answer": "E",
      "explanation": "## Find Individual Rates from Combined Rate\n\n**Combined rate:** $\\frac{88}{6}$ lb/min\n\nLet robot B's rate $= r$. Robot A's rate $= \\frac{3}{5}r$.\n\n$$\\frac{3}{5}r + r = \\frac{88}{6} \\implies \\frac{8}{5}r = \\frac{88}{6}$$\n\n$$r = \\frac{88}{6} \\times \\frac{5}{8} = \\frac{440}{48} = \\frac{55}{6} \\text{ lb/min (Robot B)}$$\n\n$$r_A = \\frac{3}{5} \\times \\frac{55}{6} = \\frac{165}{30} = 5.5 \\text{ lb/min (Robot A)}$$\n\n**Time for Robot A to polish 165 lb:**\n\n$$t = \\frac{165}{5.5} = 30 \\text{ min}$$\n\n$$\\boxed{E: \\ 30 \\text{ min}}$$"
    },
    {
      "id": "rw_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "Car A drove north at 40 mph. One hour later, car B started north at 30 mph from the same point. Each car had 8 gallons of fuel at 30 mpg. How many miles apart were the two cars when car A ran out of fuel?",
      "options": { "A": "30", "B": "60", "C": "90", "D": "120", "E": "150" },
      "answer": "C",
      "explanation": "## Fuel Limits the Distance — Then Find the Gap\n\n**Car A's range:** $8 \\times 30 = 240$ miles. Time to travel: $\\frac{240}{40} = 6$ hr.\n\n**Car B started 1 hr later**, so drives for $6 - 1 = 5$ hr before car A runs out.\n\n**Car B's distance:** $30 \\times 5 = 150$ miles.\n\n**Gap when Car A runs out:**\n\n$$240 - 150 = 90 \\text{ miles}$$\n\n$$\\boxed{C: \\ 90 \\text{ miles}}$$"
    },
    {
      "id": "rw_027",
      "number": 27,
      "type": "multiple_choice",
      "text": "One robot, working independently at a constant rate, can assemble a doghouse in 12 minutes. What is the maximum number of complete doghouses that can be assembled by 10 such identical robots, each working on separate doghouses at the same rate for 2½ hours?",
      "options": { "A": "20", "B": "25", "C": "120", "D": "125", "E": "150" },
      "answer": "C",
      "explanation": "## Complete Doghouses Only\n\n**Convert time:** $2.5 \\text{ hr} = 150 \\text{ min}$\n\n**Each robot's output:**\n\n$$\\frac{150}{12} = 12.5 \\text{ doghouses}$$\n\nOnly **complete** houses count → $12$ per robot.\n\n**Total for 10 robots:**\n\n$$10 \\times 12 = 120$$\n\n$$\\boxed{C: \\ 120}$$"
    },
    {
      "id": "rw_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "A factory bottles Soda Q at 500 liters/sec and Soda V at 300 liters/sec. If twice as many bottles of Soda V as Soda Q are filled each day, what is the ratio of the volume of a bottle of Soda Q to a bottle of Soda V?",
      "options": { "A": "3/5", "B": "5/3", "C": "6/5", "D": "5/6", "E": "10/3" },
      "answer": "E",
      "explanation": "## Rate ÷ Bottle Count = Bottle Volume\n\nLet $q$ = bottles of Q per second, then $v = 2q$ = bottles of V per second.\n\n**Volume per Q bottle:**\n\n$$\\frac{500}{q}$$\n\n**Volume per V bottle:**\n\n$$\\frac{300}{2q} = \\frac{150}{q}$$\n\n**Ratio Q to V:**\n\n$$\\frac{500/q}{150/q} = \\frac{500}{150} = \\frac{10}{3}$$\n\n$$\\boxed{E: \\ \\frac{10}{3}}$$"
    }
  ]
};

export const Ratios = {
  "chapter": 20,
  "topic": "Ratios",
  "questions": [
    {
      "id": "rat_001",
      "number": 1,
      "type": "quantitative_comparison",
      "context": "The ratio of men to women in a garden club is 5 to 4.",
      "quantity_a": "The smallest possible number of garden club members",
      "quantity_b": "20",
      "answer": "B",
      "explanation": "## Minimum Members from a Ratio\n\nA ratio of $5:4$ means members come in groups of $5 + 4 = 9$. The minimum is $1$ group:\n\n$$\\text{Minimum} = 9$$\n\n$$9 < 20 \\implies \\boxed{B}$$"
    },
    {
      "id": "rat_002",
      "number": 2,
      "type": "select_all",
      "text": "A pantry holds x cans of beans, twice as many cans of soup, and half as many cans of tomato paste as beans. Which of the following could be the total number of cans in the pantry? Indicate two such numbers.",
      "options": ["6", "7", "36", "45", "63"],
      "answer": ["7", "63"],
      "explanation": "## Find the Total's Divisibility Requirement\n\nBeans $= x$, Soup $= 2x$, Paste $= \\frac{x}{2}$.\n\nFor whole-number cans, $x$ must be **even** (let $x = 2k$):\n\n$$\\text{Total} = 2k + 4k + k = 7k$$\n\nTotal must be a **multiple of $7$**. From the choices:\n\n- $6$: not divisible by $7$ ✗\n- $7 = 7 \\times 1$ ✓\n- $36$: not divisible by $7$ ✗\n- $45$: not divisible by $7$ ✗\n- $63 = 7 \\times 9$ ✓\n\n$$\\boxed{7 \\text{ and } 63}$$"
    },
    {
      "id": "rat_003",
      "number": 3,
      "type": "multiple_choice",
      "text": "If there are 20 birds and 6 dogs in a park, which represents the ratio of dogs to birds?",
      "options": { "A": "3 : 13", "B": "3 : 10", "C": "10 : 3", "D": "13 : 3", "E": "1 : 26" },
      "answer": "B",
      "explanation": "## Dogs to Birds — Order Matters\n\n$$\\text{Dogs : Birds} = 6 : 20 = \\frac{6}{20} = \\frac{3}{10} = 3 : 10$$\n\n$$\\boxed{B: \\ 3:10}$$"
    },
    {
      "id": "rat_004",
      "number": 4,
      "type": "numeric_entry",
      "text": "If there are 7 whole bananas, 14 whole strawberries, and no other fruit in a basket, what is the ratio of strawberries to the total pieces of fruit in the basket? Give your answer as a fraction.",
      "answer": "2/3",
      "explanation": "## Part to Whole Ratio\n\n$$\\text{Total} = 7 + 14 = 21$$\n\n$$\\text{Ratio} = \\frac{14}{21} = \\frac{2}{3}$$\n\n$$\\boxed{\\frac{2}{3}}$$"
    },
    {
      "id": "rat_005",
      "number": 5,
      "type": "numeric_entry",
      "text": "The ratio of cheese to sauce for a single pizza is 1 cup to 1/2 cup. If Bob used 15 cups of sauce to make a number of pizzas, how many cups of cheese did he use?",
      "answer": 30,
      "explanation": "## Scale Up the Ratio\n\n$$\\text{Cheese : Sauce} = 1 : \\frac{1}{2} = 2 : 1$$\n\nFor $15$ cups of sauce:\n\n$$\\text{Cheese} = 2 \\times 15 = 30 \\text{ cups}$$\n\n$$\\boxed{30}$$"
    },
    {
      "id": "rat_006",
      "number": 6,
      "type": "numeric_entry",
      "text": "Laura planted 4 tulip plants for every 1 rose plant, with no other plants, and planted a total of 50 plants. How many of those plants were tulips?",
      "answer": 40,
      "explanation": "## Find the Unit, Then Scale\n\nRatio $4:1$ → total parts $= 5$.\n\n$$5x = 50 \\implies x = 10$$\n\n$$\\text{Tulips} = 4 \\times 10 = 40$$\n\n$$\\boxed{40}$$"
    },
    {
      "id": "rat_007",
      "number": 7,
      "type": "multiple_choice",
      "text": "A certain automotive dealer sells only cars and trucks, and the ratio of cars to trucks is 1 to 3. If there are 51 trucks for sale, how many cars does the dealer have for sale?",
      "options": { "A": "17", "B": "34", "C": "68", "D": "153", "E": "204" },
      "answer": "A",
      "explanation": "## Use the Ratio Unit\n\n$$\\text{Cars : Trucks} = 1 : 3 \\implies 3x = 51 \\implies x = 17$$\n\n$$\\text{Cars} = 1 \\times 17 = 17$$\n\n$$\\boxed{A: \\ 17}$$"
    },
    {
      "id": "rat_008",
      "number": 8,
      "type": "multiple_choice",
      "text": "A steel manufacturer combines 98 ounces of iron with 2 ounces of carbon to make one sheet of steel. How many ounces of iron were used to manufacture 1/2 of a sheet of steel?",
      "options": { "A": "1", "B": "49", "C": "50", "D": "198", "E": "200" },
      "answer": "B",
      "explanation": "## Scale the Recipe\n\nFor $\\frac{1}{2}$ sheet:\n\n$$\\text{Iron} = 98 \\times \\frac{1}{2} = 49 \\text{ oz}$$\n\n$$\\boxed{B: \\ 49 \\text{ oz}}$$"
    },
    {
      "id": "rat_009",
      "number": 9,
      "type": "multiple_choice",
      "text": "Maria uses a recipe for 36 cupcakes that requires 8 cups of flour, 12 cups of milk, and 4 cups of sugar. How many cups of milk would Maria require for a batch of 9 cupcakes?",
      "options": { "A": "2", "B": "3", "C": "4", "D": "6", "E": "8" },
      "answer": "B",
      "explanation": "## Scale the Recipe\n\n$$\\text{Scale factor} = \\frac{9}{36} = \\frac{1}{4}$$\n\n$$\\text{Milk} = 12 \\times \\frac{1}{4} = 3 \\text{ cups}$$\n\n$$\\boxed{B: \\ 3 \\text{ cups}}$$"
    },
    {
      "id": "rat_010",
      "number": 10,
      "type": "multiple_choice",
      "text": "In a certain orchestra, the ratio of musicians who play violin or viola to those who play neither is 5 to 9. If 7 members play viola and four times as many play violin, how many play neither?",
      "options": { "A": "14", "B": "28", "C": "35", "D": "63", "E": "72" },
      "answer": "D",
      "explanation": "## Find the Whole from the Parts\n\nViola $= 7$, Violin $= 4 \\times 7 = 28$. Total playing either $= 35$.\n\n$$\\text{Either : Neither} = 5 : 9 \\implies 5x = 35 \\implies x = 7$$\n\n$$\\text{Neither} = 9 \\times 7 = 63$$\n\n$$\\boxed{D: \\ 63}$$"
    },
    {
      "id": "rat_011",
      "number": 11,
      "type": "multiple_choice",
      "text": "The ratio of 0.4 to 5 equals which of the following ratios?",
      "options": { "A": "4 to 55", "B": "5 to 4", "C": "2 to 25", "D": "4 to 5", "E": "4 to 45" },
      "answer": "C",
      "explanation": "## Simplify the Ratio\n\n$$\\frac{0.4}{5} = \\frac{4}{50} = \\frac{2}{25}$$\n\n$$\\boxed{C: \\ 2:25}$$"
    },
    {
      "id": "rat_012",
      "number": 12,
      "type": "multiple_choice",
      "text": "On a wildlife preserve, the ratio of giraffes to zebras is 37 : 43. If there are 300 more zebras than giraffes, how many giraffes are on the preserve?",
      "options": { "A": "1,550", "B": "1,850", "C": "2,150", "D": "2,450", "E": "2,750" },
      "answer": "B",
      "explanation": "## Use the Difference Between Ratio Parts\n\n$$43x - 37x = 300 \\implies 6x = 300 \\implies x = 50$$\n\n$$\\text{Giraffes} = 37 \\times 50 = 1{,}850$$\n\n$$\\boxed{B: \\ 1{,}850}$$"
    },
    {
      "id": "rat_013",
      "number": 13,
      "type": "multiple_choice",
      "text": "At a certain company, the ratio of male to female employees is 3 to 4. If there are 5 more female employees than male employees, how many male employees does the company have?",
      "options": { "A": "12", "B": "15", "C": "18", "D": "21", "E": "24" },
      "answer": "B",
      "explanation": "## Ratio Difference → Unit Value\n\n$$4x - 3x = 5 \\implies x = 5$$\n\n$$\\text{Males} = 3 \\times 5 = 15$$\n\n$$\\boxed{B: \\ 15}$$"
    },
    {
      "id": "rat_014",
      "number": 14,
      "type": "multiple_choice",
      "text": "On Monday, a class has 8 girls and 20 boys. On Tuesday, some girls joined just as twice that number of boys left, changing the ratio of girls to boys to 7 to 4. How many boys left on Tuesday?",
      "options": { "A": "5", "B": "6", "C": "11", "D": "12", "E": "18" },
      "answer": "D",
      "explanation": "## Set Up an Equation from the New Ratio\n\nLet $g$ = girls who joined. Then $2g$ boys left.\n\n$$\\text{New girls} = 8 + g, \\quad \\text{New boys} = 20 - 2g$$\n\n$$\\frac{8 + g}{20 - 2g} = \\frac{7}{4}$$\n\n$$4(8 + g) = 7(20 - 2g)$$\n\n$$32 + 4g = 140 - 14g$$\n\n$$18g = 108 \\implies g = 6$$\n\n**Boys who left:** $2g = 12$\n\n$$\\boxed{D: \\ 12}$$"
    },
    {
      "id": "rat_015",
      "number": 15,
      "type": "multiple_choice",
      "text": "If 14 daks = 1 jin, how many squares with a side length of 2 daks can fit in a square with a side length of 2 jins?",
      "options": { "A": "14", "B": "28", "C": "49", "D": "144", "E": "196" },
      "answer": "E",
      "explanation": "## Convert, Then Count by Area\n\n$2$ jins $= 2 \\times 14 = 28$ daks.\n\n**Squares per row:** $\\frac{28}{2} = 14$\n\n**Total squares:**\n\n$$14 \\times 14 = 196$$\n\n$$\\boxed{E: \\ 196}$$"
    },
    {
      "id": "rat_016",
      "number": 16,
      "type": "quantitative_comparison",
      "context": "In a group, women to men ratio is 5:6 and left-handed to right-handed ratio is 7:9.",
      "quantity_a": "The number of women in the group",
      "quantity_b": "The number of left-handed people in the group",
      "answer": "A",
      "explanation": "## Compare as Fractions of the Total\n\n$$\\text{Women} = \\frac{5}{11} \\approx 45.5\\% \\text{ of total}$$\n\n$$\\text{Left-handed} = \\frac{7}{16} = 43.75\\% \\text{ of total}$$\n\nSince $\\frac{5}{11} > \\frac{7}{16}$, there are more women than left-handed people.\n\n$$\\boxed{A}$$"
    },
    {
      "id": "rat_017",
      "number": 17,
      "type": "quantitative_comparison",
      "context": "Party Cranberry is 3 parts cranberry juice and 1 part seltzer. Fancy Lemonade is 1 part lemon juice and 2 parts seltzer. Equal amounts of each are mixed.",
      "quantity_a": "The fraction of the resulting mix that is cranberry juice",
      "quantity_b": "The fraction of the resulting mix that is seltzer",
      "answer": "B",
      "explanation": "## Work with Equal Portions\n\nUse $12$ oz of each drink.\n\n**Party Cranberry** ($12$ oz, ratio $3:1$): $9$ oz cranberry, $3$ oz seltzer.\n\n**Fancy Lemonade** ($12$ oz, ratio $1:2$): $4$ oz lemon, $8$ oz seltzer.\n\n**Combined $24$ oz:** Cranberry $= 9$, Seltzer $= 11$, Lemon $= 4$.\n\n$$\\frac{\\text{Cranberry}}{24} = \\frac{9}{24} \\quad \\text{vs.} \\quad \\frac{\\text{Seltzer}}{24} = \\frac{11}{24}$$\n\n$$\\frac{9}{24} < \\frac{11}{24} \\implies \\boxed{B}$$"
    },
    {
      "id": "rat_018",
      "number": 18,
      "type": "quantitative_comparison",
      "context": "The ratio of 16 to g is equal to the ratio of g to 49.",
      "quantity_a": "g",
      "quantity_b": "28",
      "answer": "D",
      "explanation": "## Geometric Mean — Two Solutions\n\n$$\\frac{16}{g} = \\frac{g}{49} \\implies g^2 = 16 \\times 49 = 784 \\implies g = \\pm 28$$\n\nIf $g = 28$: Qty A $=$ Qty B → equal.\n\nIf $g = -28$: Qty A $< $ Qty B → B greater.\n\nBoth values are valid (no constraint that $g > 0$).\n\n$$\\boxed{D}$$"
    },
    {
      "id": "rat_019",
      "number": 19,
      "type": "multiple_choice",
      "text": "In a parking lot, 1/3 of the vehicles are black and 1/5 of the remainder are white. How many vehicles could be parked on the lot?",
      "options": { "A": "8", "B": "12", "C": "20", "D": "30", "E": "35" },
      "answer": "D",
      "explanation": "## Divisibility Requirements\n\nTotal must be divisible by $3$ (for black cars).\n\nWhite $= \\frac{1}{5} \\times \\frac{2}{3} \\times T = \\frac{2T}{15}$, so total must also be divisible by $15$.\n\nOf the choices, only $\\mathbf{30}$ is divisible by $15$:\n\n- Black $= 10$, Remaining $= 20$, White $= 4$ ✓\n\n$$\\boxed{D: \\ 30}$$"
    },
    {
      "id": "rat_020",
      "number": 20,
      "type": "multiple_choice",
      "text": "Oil, vinegar, and water are mixed 3:2:1 to make salad dressing. If Larry has 8 cups of oil, 7 cups of vinegar, and unlimited water, what is the maximum number of cups of salad dressing he can make (fractional cups allowed)?",
      "options": { "A": "12", "B": "13", "C": "14", "D": "15", "E": "16" },
      "answer": "E",
      "explanation": "## Find the Limiting Ingredient\n\nEach \"recipe\" uses $3$ oil, $2$ vinegar, $1$ water.\n\n$$\\text{Oil-limited batches} = \\frac{8}{3} \\approx 2.67$$\n\n$$\\text{Vinegar-limited batches} = \\frac{7}{2} = 3.5$$\n\nOil is the limiting ingredient at $\\frac{8}{3}$ batches.\n\nEach batch $= 3 + 2 + 1 = 6$ cups.\n\n$$\\text{Total dressing} = \\frac{8}{3} \\times 6 = 16 \\text{ cups}$$\n\n$$\\boxed{E: \\ 16 \\text{ cups}}$$"
    },
    {
      "id": "rat_021",
      "number": 21,
      "type": "multiple_choice",
      "text": "With y dollars, 5 oranges can be bought. If all oranges cost the same, how many dollars do 25 oranges cost, in terms of y?",
      "options": { "A": "y/5", "B": "y", "C": "y + 5", "D": "5y", "E": "25y" },
      "answer": "D",
      "explanation": "## Scale the Unit Price\n\n$5$ oranges cost $y$ dollars → $25$ oranges cost $5 \\times y = 5y$ dollars.\n\n$$\\boxed{D: \\ 5y}$$"
    },
    {
      "id": "rat_022",
      "number": 22,
      "type": "multiple_choice",
      "text": "A woman spent 5/8 of her weekly salary on rent and 1/3 of the remainder on food, leaving $40 available for other expenses. What is the woman's weekly salary?",
      "options": { "A": "$160", "B": "$192", "C": "$216", "D": "$240", "E": "$256" },
      "answer": "A",
      "explanation": "## Work Backwards Through Fractions\n\nLet salary $= T$.\n\n$$\\text{Rent} = \\frac{5T}{8} \\implies \\text{Remainder} = \\frac{3T}{8}$$\n\n$$\\text{Food} = \\frac{1}{3} \\times \\frac{3T}{8} = \\frac{T}{8}$$\n\n$$\\text{Left} = T - \\frac{5T}{8} - \\frac{T}{8} = \\frac{2T}{8} = \\frac{T}{4} = \\$40$$\n\n$$T = \\$160$$\n\n$$\\boxed{A: \\ \\$160}$$"
    },
    {
      "id": "rat_023",
      "number": 23,
      "type": "multiple_choice",
      "text": "In a certain rectangle, the ratio of length to width is 3:2 and the area is 150 square centimeters. What is the perimeter?",
      "options": { "A": "10", "B": "15", "C": "25", "D": "40", "E": "50" },
      "answer": "E",
      "explanation": "## Find Dimensions from Ratio and Area\n\nLength $= 3x$, Width $= 2x$.\n\n$$3x \\times 2x = 6x^2 = 150 \\implies x^2 = 25 \\implies x = 5$$\n\n$$L = 15, \\quad W = 10$$\n\n$$P = 2(15 + 10) = 50 \\text{ cm}$$\n\n$$\\boxed{E: \\ 50}$$"
    },
    {
      "id": "rat_024",
      "number": 24,
      "type": "multiple_choice",
      "text": "In a certain country, 8 rubels = 1 schilling and 5 schillings = 1 lemuw. How many rubels are 6 lemuws worth?",
      "options": { "A": "3/20", "B": "30", "C": "40", "D": "48", "E": "240" },
      "answer": "E",
      "explanation": "## Chain Conversion\n\n$$6 \\text{ lemuws} \\times \\frac{5 \\text{ schillings}}{1 \\text{ lemuw}} \\times \\frac{8 \\text{ rubels}}{1 \\text{ schilling}} = 6 \\times 5 \\times 8 = 240 \\text{ rubels}$$\n\n$$\\boxed{E: \\ 240}$$"
    },
    {
      "id": "rat_025",
      "number": 25,
      "type": "multiple_choice",
      "text": "Team A:B money ratio is 5:6. Team A:B student ratio is 2:3. What is the ratio of money per student on team A to money per student on team B?",
      "options": { "A": "4 : 5", "B": "5 : 4", "C": "5 : 6", "D": "5 : 9", "E": "9 : 5" },
      "answer": "B",
      "explanation": "## Per-Student Amount = Money ÷ Students\n\n$$\\text{A per student} = \\frac{5}{2}, \\quad \\text{B per student} = \\frac{6}{3} = 2$$\n\n$$\\text{Ratio} = \\frac{5/2}{2} = \\frac{5}{4} \\implies 5 : 4$$\n\n$$\\boxed{B: \\ 5:4}$$"
    },
    {
      "id": "rat_026",
      "number": 26,
      "type": "multiple_choice",
      "text": "Jarod uses 2/3 of an ounce of vinegar in every 2 cups of sushi rice that he prepares. To prepare 7 cups of sushi rice in the same proportion, how many ounces of vinegar does Jarod need?",
      "options": { "A": "3/2", "B": "4/3", "C": "7/3", "D": "7/2", "E": "14/3" },
      "answer": "C",
      "explanation": "## Proportion — Scale Up\n\n$$\\frac{2/3 \\text{ oz}}{2 \\text{ cups}} = \\frac{x}{7 \\text{ cups}}$$\n\n$$x = \\frac{2}{3} \\times \\frac{7}{2} = \\frac{7}{3} \\text{ oz}$$\n\n$$\\boxed{C: \\ \\frac{7}{3} \\text{ oz}}$$"
    },
    {
      "id": "rat_027",
      "number": 27,
      "type": "quantitative_comparison",
      "context": "The total cost of 3 bananas, 2 apples, and 1 mango is $3.50. The total cost of 3 bananas, 2 apples, and 1 papaya is $4.20. The ratio of the cost of a mango to a papaya is 3 : 5.",
      "quantity_a": "The cost of a papaya",
      "quantity_b": "$2.00",
      "answer": "B",
      "explanation": "## Use the Difference to Find Individual Prices\n\nDifference between the two baskets = papaya $-$ mango:\n\n$$P - M = \\$4.20 - \\$3.50 = \\$0.70$$\n\nFrom the ratio $M:P = 3:5$: $M = \\frac{3}{5}P$.\n\n$$P - \\frac{3}{5}P = \\$0.70 \\implies \\frac{2}{5}P = \\$0.70 \\implies P = \\$1.75$$\n\n$$\\$1.75 < \\$2.00 \\implies \\boxed{B}$$"
    },
    {
      "id": "rat_028",
      "number": 28,
      "type": "multiple_choice",
      "text": "In a certain town, 2/5 of the total population is employed. Among the unemployed, the ratio of males to females is 5:7. If there are 40,000 employed people, how many females are unemployed?",
      "options": { "A": "16,000", "B": "25,000", "C": "35,000", "D": "65,000", "E": "75,000" },
      "answer": "C",
      "explanation": "## Find Total Then Unemployed Females\n\n$$\\frac{2}{5} \\times \\text{Total} = 40{,}000 \\implies \\text{Total} = 100{,}000$$\n\n$$\\text{Unemployed} = 100{,}000 - 40{,}000 = 60{,}000$$\n\n**Female unemployed** (ratio $5:7$, females $= \\frac{7}{12}$):\n\n$$\\frac{7}{12} \\times 60{,}000 = 35{,}000$$\n\n$$\\boxed{C: \\ 35{,}000}$$"
    },
    {
      "id": "rat_029",
      "number": 29,
      "type": "multiple_choice",
      "text": "On a certain map of the United States, 3/5 of an inch represents a distance of 400 miles. If Oklahoma City and Detroit are separated on the map by approximately 3/2 of an inch, what is the approximate distance between them in miles?",
      "options": { "A": "240", "B": "360", "C": "600", "D": "800", "E": "1,000" },
      "answer": "E",
      "explanation": "## Map Scale Proportion\n\n$$\\frac{3/2 \\text{ in}}{3/5 \\text{ in}} \\times 400 \\text{ miles} = \\frac{3}{2} \\times \\frac{5}{3} \\times 400 = \\frac{5}{2} \\times 400 = 1{,}000 \\text{ miles}$$\n\n$$\\boxed{E: \\ 1{,}000 \\text{ miles}}$$"
    },
    {
      "id": "rat_030",
      "number": 30,
      "type": "multiple_choice",
      "text": "A machine manufactures 20 cans per hour, and exactly 10 cans fit into every box. Maria packs cans at 3 boxes per hour. If the machine ran for 2 hours and was then turned off before Maria started packing, how many minutes would it take Maria to pack all the cans?",
      "options": { "A": "40", "B": "45", "C": "80", "D": "160", "E": "800" },
      "answer": "C",
      "explanation": "## Find Cans, Convert to Boxes, Find Time\n\n**Cans produced:** $20 \\times 2 = 40$\n\n**Boxes needed:** $\\frac{40}{10} = 4$ boxes\n\n**Time to pack at 3 boxes/hr:**\n\n$$t = \\frac{4}{3} \\text{ hr} = \\frac{4}{3} \\times 60 = 80 \\text{ min}$$\n\n$$\\boxed{C: \\ 80 \\text{ min}}$$"
    },
    {
      "id": "rat_031",
      "number": 31,
      "type": "select_all",
      "text": "If Beth has 1/4 more money than Ari, and each person has an integer number of dollars, which of the following could be the combined value of Beth and Ari's money? Indicate all such values.",
      "options": ["$12", "$54", "$72", "$200"],
      "answer": ["$54", "$72"],
      "explanation": "## Ratio → Divisibility Requirement\n\nBeth $= \\frac{5}{4} \\times$ Ari, so Ari must be divisible by $4$.\n\n$$\\text{Beth : Ari} = 5 : 4 \\implies \\text{Combined} = 9 \\times \\text{unit}$$\n\nCombined must be a **multiple of $9$**.\n\n- $\\$12$: not divisible by $9$ ✗\n- $\\$54 = 9 \\times 6$ ✓\n- $\\$72 = 9 \\times 8$ ✓\n- $\\$200$: not divisible by $9$ ✗\n\n$$\\boxed{\\$54 \\text{ and } \\$72}$$"
    },
    {
      "id": "rat_032",
      "number": 32,
      "type": "select_all",
      "text": "If salesperson A sold 35% more motorcycles than salesperson B, which of the following could be the total number of motorcycles sold by both salespeople? Indicate all such totals.",
      "options": ["47", "70", "135", "235"],
      "answer": ["47", "235"],
      "explanation": "## Convert Percent to Ratio\n\n$A = 1.35B = \\frac{27}{20}B$\n\n$$A : B = 27 : 20 \\implies \\text{Total} = 47 \\times k$$\n\nTotal must be a **multiple of $47$**:\n\n- $47 = 47 \\times 1$ ✓\n- $70$: $70 / 47$ not an integer ✗\n- $135$: not a multiple of $47$ ✗\n- $235 = 47 \\times 5$ ✓\n\n$$\\boxed{47 \\text{ and } 235}$$"
    },
    {
      "id": "rat_033",
      "number": 33,
      "type": "select_all",
      "text": "A zoo has twice as many zebras as lions and four times as many monkeys as zebras. Which of the following could be the total number of zebras, lions, and monkeys at the zoo? Indicate all such totals.",
      "options": ["14", "22", "28", "55", "121"],
      "answer": ["22", "55", "121"],
      "explanation": "## Build the Full Ratio\n\nLions $: $ Zebras $: $ Monkeys $= 1 : 2 : 8 \\implies$ total parts $= 11$.\n\nTotal must be a **multiple of $11$**:\n\n- $14$: $14/11$ — not an integer ✗\n- $22 = 11 \\times 2$ ✓\n- $28$: not a multiple of $11$ ✗\n- $55 = 11 \\times 5$ ✓\n- $121 = 11 \\times 11$ ✓\n\n$$\\boxed{22, \\ 55, \\ 121}$$"
    },
    {
      "id": "rat_034",
      "number": 34,
      "type": "multiple_choice",
      "text": "In nation Z, 10 terble coins equal 1 galok. In nation Y, 6 barbar coins equal 1 murb. If a galok is worth 40% more than a murb, what is the ratio of the value of 1 terble coin to the value of 1 barbar coin?",
      "options": { "A": "3/5", "B": "11/13", "C": "3/7", "D": "21/23", "E": "21/25" },
      "answer": "E",
      "explanation": "## Convert to Common Units\n\nLet $1$ murb $= 1$ unit. Then $1$ galok $= 1.4$ units.\n\n$$1 \\text{ terble} = \\frac{1 \\text{ galok}}{10} = \\frac{1.4}{10} = 0.14 \\text{ units}$$\n\n$$1 \\text{ barbar} = \\frac{1 \\text{ murb}}{6} = \\frac{1}{6} \\text{ units}$$\n\n$$\\text{Ratio} = \\frac{0.14}{1/6} = 0.14 \\times 6 = 0.84 = \\frac{21}{25}$$\n\n$$\\boxed{E: \\ \\frac{21}{25}}$$"
    },
    {
      "id": "rat_035",
      "number": 35,
      "type": "multiple_choice",
      "text": "Autolot has a 2:1 ratio of blue to red cars and a 6:1 ratio of red to orange cars. What could be the total number of blue, red, and orange cars on the lot?",
      "options": { "A": "38", "B": "39", "C": "40", "D": "41", "E": "42" },
      "answer": "A",
      "explanation": "## Combine Ratios\n\n$$\\text{Blue : Red} = 2 : 1, \\quad \\text{Red : Orange} = 6 : 1$$\n\nScale to align Red:\n\n$$\\text{Blue : Red : Orange} = 12 : 6 : 1$$\n\nTotal parts $= 19$. Total must be a **multiple of $19$**.\n\n$$38 = 19 \\times 2 \\checkmark$$\n\n$$\\boxed{A: \\ 38}$$"
    }
  ]
};
/* ===== GRE Quant Lab — Word Problems ===== */
'use strict';

// 12. Percentages & Profit/Loss
TOPICS.push({
  id: 'pct',
  ch: 'wp',
  icon: '🏷️',
  title: 'Percentages & Profit/Loss',
  desc: 'Percent change, base multipliers, successive changes, reverse percentages & profit/discount.',
  learn: R`
<h3>Understanding Percentages</h3>
<p>A percentage is simply a fraction with denominator 100: \(p\% = \frac{p}{100}\).</p>

<F t="Percent Change Formula">
<BIG>\(\text{Percent Change} = \frac{\text{Final} - \text{Initial}}{\text{Initial}} \times 100\%\)</BIG>
<p><b>Always remember:</b> The denominator is ALWAYS the <i>original / initial base value</i>!</p>
</F>

<F t="Successive Percentage Changes">
If a quantity changes by \(a\%\) and then by \(b\%\), the net percentage change is:
<BIG>\(\text{Net Change} = a + b + \frac{ab}{100}\)</BIG>
<ul>
  <li>Successive discounts of \(20\%\) and \(10\%\) give: \(-20 - 10 + \frac{(-20)(-10)}{100} = -28\%\) (LESS than a single \(30\%\) discount!).</li>
  <li>To return to original after a \(+50\%\) increase, you need a <b>\(33.33\%\) decrease</b>.</li>
  <li>To return to original after a \(-20\%\) decrease, you need a <b>\(+25\%\) increase</b>.</li>
</ul>
</F>

<EX t="Reverse Percentage">
An item sold for \(\$100\) yields a \(10\%\) profit. What was its cost price?
<SOL>
Let Cost Price be \(CP\).<br>
\(\text{Selling Price} = 1.10 \times CP = 100 \Rightarrow CP = \frac{100}{1.10} \approx \mathbf{\$90.91}\).<br>
(Common mistake: subtracting \(10\%\) of \(\$100\) gives \(\$90\), which is wrong!)
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`If \(10\%\) of a certain number is 5, what is \(30\%\) of that number?`,
      o: [R`\(15\)`, R`\(10\)`, R`\(25\)`, R`\(50\)`, R`\(150\)`],
      e: R`\(30\%\) is \(3 \times 10\%\), so \(3 \times 5 = 15\).`
    },
    {
      q: R`In a study group of 10 boys and 20 girls, what percentage of the group are boys?`,
      o: [R`\(33.33\%\)`, R`\(50\%\)`, R`\(25\%\)`, R`\(40\%\)`, R`\(30\%\)`],
      e: R`Total students \(= 10 + 20 = 30\). Percentage of boys \(= \frac{10}{30} \times 100\% = 33.33\%\).`
    },
    {
      q: R`Adam's weight increased from 55 lb to 65 lb. What was the percentage increase?`,
      o: [R`\(18.18\%\)`, R`\(15.38\%\)`, R`\(20\%\)`, R`\(10\%\)`, R`\(12.5\%\)`],
      e: R`Change \(= 65 - 55 = 10\). Percentage increase \(= \frac{10}{55} \times 100\% = \frac{2}{11} \times 100\% \approx 18.18\%\).`
    },
    {
      q: R`50 is greater than 20 by what percentage?`,
      o: [R`\(150\%\)`, R`\(250\%\)`, R`\(60\%\)`, R`\(40\%\)`, R`\(100\%\)`],
      e: R`Base is 20: \(\frac{50 - 20}{20} \times 100\% = \frac{30}{20} \times 100\% = 150\%\).`
    },
    {
      q: R`20 is less than 50 by what percentage?`,
      o: [R`\(60\%\)`, R`\(150\%\)`, R`\(40\%\)`, R`\(30\%\)`, R`\(250\%\)`],
      e: R`Base is 50: \(\frac{50 - 20}{50} \times 100\% = \frac{30}{50} \times 100\% = 60\%\).`
    },
    {
      q: R`If \(a\%\) of \(b = 40\) and \(b\%\) of \(80 = 48\), what is the value of \(a\)?`,
      o: [R`\(66.67\)`, R`\(60\)`, R`\(50\)`, R`\(75\)`, R`\(48\)`],
      e: R`\(\frac{b}{100} \times 80 = 48 \Rightarrow 0.8b = 48 \Rightarrow b = 60\).<br>\(\frac{a}{100} \times 60 = 40 \Rightarrow 0.6a = 40 \Rightarrow a = \frac{400}{6} \approx 66.67\).`
    },
    {
      q: R`A \(40\%\) discount on an item reduces its price by \(\$300\). What would be the selling price of the item if a discount of only \(20\%\) were applied instead?`,
      o: [R`\(\$600\)`, R`\(\$650\)`, R`\(\$700\)`, R`\(\$750\)`, R`\(\$550\)`],
      e: R`\(0.40 \times \text{Original} = 300 \Rightarrow \text{Original} = \$750\).<br>With a \(20\%\) discount, Selling Price \(= 750 \times 0.80 = \$600\).`
    }
  ]
});

// 13. Rates, Work & Pipes
TOPICS.push({
  id: 'work',
  ch: 'wp',
  icon: '⏱️',
  title: 'Rate, Time & Work',
  desc: 'Work rates, simultaneous workers, pipes & cisterns, and the smart LCM unit method.',
  learn: R`
<h3>The Fundamental Work Equation</h3>
<BIG>\(\text{Rate} \times \text{Time} = \text{Work Completed}\)</BIG>
<p>If a person completes a job in \(T\) hours, their rate is \(\frac{1}{T}\) of the job per hour.</p>

<F t="Combined Work Formula">
If Person A takes \(a\) hours and Person B takes \(b\) hours to complete a job alone:
<BIG>\(T_{\text{together}} = \frac{a \cdot b}{a + b}\)</BIG>
</F>

<TIP>
<b>Smart LCM Unit Method:</b><br>
Instead of fractions, assign total work equal to \(\text{LCM}(a, b)\) units.<br>
<i>Example:</i> A does a job in 6 hours, B in 4 hours.<br>
Let Total Work \(= \text{LCM}(6, 4) = 12\) units.<br>
A's rate \(= 12 / 6 = 2\) units/hr. B's rate \(= 12 / 4 = 3\) units/hr.<br>
Together \(= 2 + 3 = 5\) units/hr. Time \(= \frac{12}{5} = 2.4\) hours!
</TIP>

<F t="Pipes & Cisterns">
Inflow pipes have positive rates, while drainage pipes have negative rates:
<BIG>\(\text{Net Rate} = R_{\text{in}} - R_{\text{out}}\)</BIG>
</F>
`,
  quiz: [
    {
      q: R`A water pump fills a rectangular tank measuring \(3\text{ ft} \times 4\text{ ft} \times 8\text{ ft}\) at a constant rate of \(8\text{ cu ft/hr}\). How many hours will it take to fill the tank completely?`,
      o: [R`\(12\)`, R`\(8\)`, R`\(16\)`, R`\(24\)`, R`\(10\)`],
      e: R`Volume \(= 3 \times 4 \times 8 = 96\text{ cu ft}\).<br>Time \(= \frac{96}{8} = 12\text{ hours}\).`
    },
    {
      q: R`Tap A can fill a tank in 3 hours, and Tap B can fill it in 2 hours. How many hours will it take to fill the tank if both taps are open simultaneously?`,
      o: [R`\(1.2\text{ hrs (1 hr 12 min)}\)`, R`\(2.5\text{ hrs}\)`, R`\(1.5\text{ hrs}\)`, R`\(1.0\text{ hr}\)`, R`\(1.8\text{ hrs}\)`],
      e: R`\(T = \frac{a \times b}{a + b} = \frac{3 \times 2}{3 + 2} = \frac{6}{5} = 1.2\text{ hours}\).`
    },
    {
      q: R`Three workers can complete a project in 4 days, 5 days, and 6 days respectively when working alone. How many days will it take if all three work together?`,
      o: [R`\(\frac{60}{37}\text{ days}\)`, R`\(\frac{37}{60}\text{ days}\)`, R`\(5\text{ days}\)`, R`\(2.5\text{ days}\)`, R`\(\frac{15}{4}\text{ days}\)`],
      e: R`Combined rate \(= \frac{1}{4} + \frac{1}{5} + \frac{1}{6} = \frac{15 + 12 + 10}{60} = \frac{37}{60}\).<br>Time \(= \frac{60}{37}\text{ days} \approx 1.62\text{ days}\).`
    },
    {
      q: R`Machine A mints 160 coins in 40 minutes, and Machine B mints 100 coins in 20 minutes. If both machines work together at their constant rates, how many minutes will they take to mint 200 coins?`,
      o: [R`\(\frac{200}{9}\text{ min}\)`, R`\(20\text{ min}\)`, R`\(25\text{ min}\)`, R`\(\frac{100}{9}\text{ min}\)`, R`\(18\text{ min}\)`],
      e: R`Rate of A \(= \frac{160}{40} = 4\text{ coins/min}\). Rate of B \(= \frac{100}{20} = 5\text{ coins/min}\).<br>Combined rate \(= 4 + 5 = 9\text{ coins/min}\).<br>Time \(= \frac{200}{9}\text{ minutes} \approx 22.2\text{ min}\).`
    },
    {
      q: R`3 identical machines can bind 600 books in 4 hours. How many hours will 9 such machines take to bind 1350 books?`,
      o: [R`\(3\)`, R`\(4\)`, R`\(2\)`, R`\(4.5\)`, R`\(2.5\)`],
      e: R`Rate of 1 machine \(= \frac{600}{3 \times 4} = 50\text{ books/hr}\).<br>Rate of 9 machines \(= 9 \times 50 = 450\text{ books/hr}\).<br>Time \(= \frac{1350}{450} = 3\text{ hours}\).`
    }
  ]
});

// 14. Time, Speed & Distance
TOPICS.push({
  id: 'tsd',
  ch: 'wp',
  icon: '🚗',
  title: 'Speed, Distance & Time',
  desc: 'Average speed traps, round-trip harmonic mean, relative motion & meeting point calculations.',
  learn: R`
<h3>Fundamental Speed Formula</h3>
<BIG>\(\text{Distance} = \text{Speed} \times \text{Time}\)</BIG>

<F t="Average Speed: The Golden Definition">
<BIG>\(\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}\)</BIG>
<p>⚠️ <b>CRITICAL GRE TRAP:</b> NEVER simply take the arithmetic average of two speeds! Since more time is spent at the slower speed, the true average speed is always weighted closer to the slower speed.</p>
</F>

<F t="Round Trip with Equal Distances">
If an object travels a distance at speed \(v_1\) and returns along the same distance at speed \(v_2\):
<BIG>\(\text{Average Speed} = \frac{2 v_1 v_2}{v_1 + v_2}\)</BIG>
<p><i>Example:</i> 40 mph there and 60 mph back \(\Rightarrow \frac{2 \times 40 \times 60}{40 + 60} = \frac{4800}{100} = \mathbf{48\text{ mph}}\) (NOT 50!).</p>
</F>

<F t="Relative Motion">
<ul>
  <li><b>Moving towards each other:</b> Relative Speed \(= v_1 + v_2\)</li>
  <li><b>Moving in same direction:</b> Relative Speed \(= |v_1 - v_2|\)</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`Paul drives \(40\%\) of a trip at \(20\text{ mph}\) and the remaining \(60\%\) of the trip at \(90\text{ mph}\). What was Paul's average speed for the entire trip?`,
      o: [R`\(37.5\text{ mph}\)`, R`\(55\text{ mph}\)`, R`\(45\text{ mph}\)`, R`\(62\text{ mph}\)`, R`\(32.5\text{ mph}\)`],
      e: R`Assume a convenient total distance of 100 miles.<br>Leg 1: 40 miles at 20 mph \(\Rightarrow t_1 = \frac{40}{20} = 2\text{ hrs}\).<br>Leg 2: 60 miles at 90 mph \(\Rightarrow t_2 = \frac{60}{90} = \frac{2}{3}\text{ hrs}\).<br>Total time \(= 2 + \frac{2}{3} = \frac{8}{3}\text{ hrs}\).<br>Average speed \(= \frac{100}{8/3} = \frac{300}{8} = 37.5\text{ mph}\).`
    },
    {
      q: R`Adam drives 100 miles at 50 mph, and then 200 miles at 25 mph. What is his average speed for the entire 300-mile journey?`,
      o: [R`\(30\text{ mph}\)`, R`\(37.5\text{ mph}\)`, R`\(33.3\text{ mph}\)`, R`\(35\text{ mph}\)`, R`\(28\text{ mph}\)`],
      e: R`Time for leg 1: \(\frac{100}{50} = 2\text{ hrs}\). Time for leg 2: \(\frac{200}{25} = 8\text{ hrs}\).<br>Total time \(= 2 + 8 = 10\text{ hrs}\).<br>Average speed \(= \frac{300}{10} = 30\text{ mph}\).`
    },
    {
      q: R`A commuter flies from Seattle to San Francisco at \(90\text{ mph}\), and then from San Francisco to Los Angeles at \(50\text{ mph}\). The total distance of \(1400\text{ miles}\) was covered in \(20\text{ hours}\). What is the distance from San Francisco to Los Angeles?`,
      o: [R`\(500\text{ miles}\)`, R`\(900\text{ miles}\)`, R`\(600\text{ miles}\)`, R`\(700\text{ miles}\)`, R`\(450\text{ miles}\)`],
      e: R`Let \(t\) be time for Seattle-SF. Then \(20 - t\) is time for SF-LA.<br>\(90t + 50(20 - t) = 1400 \Rightarrow 40t + 1000 = 1400 \Rightarrow 40t = 400 \Rightarrow t = 10\text{ hrs}\).<br>Distance SF-LA \(= 50 \times (20 - 10) = 500\text{ miles}\).`
    },
    {
      q: R`Two cars are 400 miles apart on a straight highway and start driving directly towards each other at constant speeds of 40 mph and 60 mph. How many hours will it take for them to meet?`,
      o: [R`\(4\text{ hours}\)`, R`\(5\text{ hours}\)`, R`\(3.5\text{ hours}\)`, R`\(4.5\text{ hours}\)`, R`\(6\text{ hours}\)`],
      e: R`Relative speed \(= 40 + 60 = 100\text{ mph}\).<br>Time \(= \frac{\text{Distance}}{\text{Relative Speed}} = \frac{400}{100} = 4\text{ hours}\).`
    }
  ]
});

// 15. Simple & Compound Interest
TOPICS.push({
  id: 'interest',
  ch: 'wp',
  icon: '💰',
  title: 'Interest: Simple & Compound',
  desc: 'Simple interest formula, compound growth multipliers, and quarterly/monthly compounding rates.',
  learn: R`
<h3>Simple Interest (SI)</h3>
<p>Interest is calculated only on the initial principal \(P\):</p>
<BIG>\(SI = \frac{P \cdot R \cdot N}{100}\)</BIG>
<BIG>\(\text{Total Amount } A = P + SI = P\left(1 + \frac{R \cdot N}{100}\right)\)</BIG>

<F t="Compound Interest (CI)">
Interest is added back to principal at each compounding interval:
<BIG>\(A = P\left(1 + \frac{R}{100}\right)^N\)</BIG>
<ul>
  <li><b>Compounded Semi-Annually:</b> Rate \(= \frac{R}{2}\%\), Periods \(= 2N\)</li>
  <li><b>Compounded Quarterly:</b> Rate \(= \frac{R}{4}\%\), Periods \(= 4N\)</li>
  <li><b>Compounded Monthly:</b> Rate \(= \frac{R}{12}\%\), Periods \(= 12N\)</li>
</ul>
</F>

<EX t="Quarterly Compounding">
Find the compound interest on \(\$5000\) at \(12\%\) per annum compounded quarterly for 6 months.
<SOL>
Quarterly rate \(r = \frac{12\%}{4} = 3\%\).<br>
Number of quarters in 6 months \(= 2\).<br>
\(A = 5000(1 + 0.03)^2 = 5000 \times 1.0609 = \$5304.50\).<br>
Compound Interest \(= A - P = \$304.50\).
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`A sum of \(\$1000\) was split and invested: part at \(5\%\) simple interest per annum and the rest at \(10\%\) simple interest per annum. If the total interest earned after 1 year was \(\$75\), how much was invested at \(5\%\)?`,
      o: [R`\(\$500\)`, R`\(\$400\)`, R`\(\$600\)`, R`\(\$450\)`, R`\(\$550\)`],
      e: R`Let \(x\) be amount at \(5\%\). Amount at \(10\%\) is \(1000 - x\).<br>\(0.05x + 0.10(1000 - x) = 75 \Rightarrow 100 - 0.05x = 75 \Rightarrow 0.05x = 25 \Rightarrow x = \$500\).`
    },
    {
      q: R`Brad invested \(\$10,000\) at \(10\%\) per annum simple interest for 3 years. What is the total amount he receives at maturity?`,
      o: [R`\(\$13,000\)`, R`\(\$13,310\)`, R`\(\$12,500\)`, R`\(\$14,000\)`, R`\(\$3,000\)`],
      e: R`\(SI = 10000 \times 0.10 \times 3 = \$3000\).<br>\(A = 10000 + 3000 = \$13,000\).`
    },
    {
      q: R`If Brad had instead invested the same \(\$10,000\) at \(10\%\) per annum compounded annually for 3 years, what total amount would he receive?`,
      o: [R`\(\$13,310\)`, R`\(\$13,000\)`, R`\(\$13,100\)`, R`\(\$13,500\)`, R`\(\$12,900\)`],
      e: R`\(A = 10000(1 + 0.10)^3 = 10000(1.331) = \$13,310\).`
    }
  ]
});

// 16. Sets & Venn Diagrams
TOPICS.push({
  id: 'sets',
  ch: 'wp',
  icon: '⭕',
  title: 'Sets & Venn Diagrams',
  desc: 'Two-set inclusion-exclusion, exact-count terminology, and 2x2 grid table methods.',
  learn: R`
<h3>Two-Set Overlap Formula</h3>
<p>For any two overlapping groups \(A\) and \(B\):</p>

<F t="Inclusion-Exclusion Formula">
<BIG>\(\text{Total} - \text{Neither} = A + B - \text{Both}\)</BIG>
<ul>
  <li><b>Only \(A\):</b> \(A - \text{Both}\)</li>
  <li><b>Exactly one group:</b> \((A - \text{Both}) + (B - \text{Both})\)</li>
  <li><b>At least one group:</b> \(\text{Total} - \text{Neither} = A + B - \text{Both}\)</li>
</ul>
</F>

<h3>The 2×2 Table Method</h3>
<p>When dealing with two binary categories (e.g. Male/Female and French/German), a 2×2 grid ensures no terms are double-counted!</p>
`,
  quiz: [
    {
      q: R`In a sample of 1000 people, \(80\%\) are over 70 years old, \(40\%\) take daily walks, and 150 people neither are over 70 nor take daily walks. How many people both are over 70 and take daily walks?`,
      o: [R`\(350\)`, R`\(400\)`, R`\(250\)`, R`\(300\)`, R`\(200\)`],
      e: R`Over 70 \(= 800\), Walk \(= 400\), Neither \(= 150\).<br>\(\text{Total} - \text{Neither} = A + B - \text{Both} \Rightarrow 1000 - 150 = 800 + 400 - \text{Both}\).<br>\(850 = 1200 - \text{Both} \Rightarrow \text{Both} = 350\).`
    },
    {
      q: R`Among 50 university professors, 30 teach Mathematics, 25 teach Literature, and 10 teach neither. How many professors teach Mathematics but NOT Literature?`,
      o: [R`\(15\)`, R`\(10\)`, R`\(20\)`, R`\(25\)`, R`\(5\)`],
      e: R`\(50 - 10 = 30 + 25 - \text{Both} \Rightarrow 40 = 55 - \text{Both} \Rightarrow \text{Both} = 15\).<br>Maths but not Literature \(= 30 - 15 = 15\).`
    },
    {
      q: R`In a survey of residents, \(60\%\) own a car. Of those who own a car, \(40\%\) also own a villa. If \(80\%\) of villa owners also own a car, what percentage of the entire surveyed population own a villa?`,
      o: [R`\(30\%\)`, R`\(24\%\)`, R`\(40\%\)`, R`\(36\%\)`, R`\(20\%\)`],
      e: R`People owning both car and villa \(= 60\% \times 40\% = 24\%\).<br>Let \(V\) be percentage owning a villa: \(80\% \text{ of } V = 24\% \Rightarrow 0.80V = 0.24 \Rightarrow V = 30\%\).`
    },
    {
      q: R`A class of 30 students has 15 studying French and the remaining 15 studying German. 10 students play football, and 5 students play football and study German. How many students study French but do NOT play football?`,
      o: [R`\(10\)`, R`\(5\)`, R`\(15\)`, R`\(8\)`, R`\(12\)`],
      e: R`Football & German \(= 5\). Since total football players is 10, Football & French \(= 10 - 5 = 5\).<br>French total is 15, so French & no football \(= 15 - 5 = 10\).`
    }
  ]
});

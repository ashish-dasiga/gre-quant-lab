/* ===== GRE Quant Lab — Algebra Topics ===== */
'use strict';

// 1. Linear Equations (1 & 2 Variables)
TOPICS.push({
  id: 'lineq',
  ch: 'alg',
  icon: '⚖️',
  title: 'Linear Equations',
  desc: 'Single-variable equations, simultaneous systems, word problems & substitution shortcuts.',
  learn: R`
<h3>Single-Variable Linear Equations</h3>
<p>A linear equation in one variable has the standard form \(ax + b = c\) where \(a \ne 0\). The goal is always to isolate the variable by applying inverse operations to both sides.</p>

<F t="Solving Strategy">
<ol>
  <li><b>Clear fractions / parentheses:</b> Multiply by the LCD if fractions exist, or expand brackets.</li>
  <li><b>Collect variable terms:</b> Move all terms with the variable to one side, constants to the other.</li>
  <li><b>Isolate:</b> Divide by the variable's coefficient.</li>
</ol>
</F>

<EX t="Age Problem">
Peter's age 10 years from now will be twice his current age. How old is Peter today?
<SOL>
Let Peter's current age be \(p\).<br>
Equation: \(p + 10 = 2p\)<br>
Subtract \(p\) from both sides: \(10 = p\).<br>
Peter is <b>10 years old</b>.
</SOL>
</EX>

<h3>Two-Variable Systems & Word Problems</h3>
<p>When two unknown quantities are linked by two equations, you can solve using <b>elimination</b> or <b>substitution</b>. On the GRE, setting up a single variable using a total is often much faster!</p>

<TIP>
<b>One-Variable Shortcut for Mixture & Count Problems:</b><br>
If you have a total of \(10\) items consisting of pens at \(\$5\) and pencils at \(\$4\), total cost \(\$44\):<br>
Let pens \(= p\), then pencils \(= (10 - p)\).<br>
\(5p + 4(10 - p) = 44 \Rightarrow p + 40 = 44 \Rightarrow p = 4\). (Much faster than a \(2 \times 2\) system!)
</TIP>

<EX t="Ratio & Divisibility Trick">
Adam received \(\frac{1}{3}\) more votes than Peter. If the total votes were an integer, which of the following could be the total number of votes? (12, 13, 14, 15, 16)
<SOL>
Let Peter's votes be \(P\). Adam has \(P + \frac{1}{3}P = \frac{4}{3}P\).<br>
Total votes \(= P + \frac{4}{3}P = \frac{7}{3}P\).<br>
Since votes must be integers, \(P\) must be a multiple of \(3\), which makes Total a <b>multiple of 7</b>.<br>
Among the choices, only <b>14</b> is divisible by 7!
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`Solve for \(x\): \(7x + 23 = 2(x + 4)\)`,
      o: [R`\(-3\)`, R`\(3\)`, R`\(-5\)`, R`\(5\)`, R`\(-1\)`],
      e: R`Expand: \(7x + 23 = 2x + 8\). Subtract \(2x\): \(5x + 23 = 8\). Subtract 23: \(5x = -15 \Rightarrow x = -3\).`
    },
    {
      q: R`Solve for \(x\): \(2(5x - 2) = 3[2(x + 1) + 14]\)`,
      o: [R`\(13\)`, R`\(11\)`, R`\(15\)`, R`\(9\)`, R`\(17\)`],
      e: R`Expand inner brackets: \(2(5x - 2) = 3[2x + 16]\).<br>Expand: \(10x - 4 = 6x + 48\).<br>Subtract \(6x\): \(4x - 4 = 48 \Rightarrow 4x = 52 \Rightarrow x = 13\).`
    },
    {
      q: R`Harry, 15 years from now, will be 3 times as old as he was 5 years ago. How old is Harry today?`,
      o: [R`\(15\)`, R`\(20\)`, R`\(25\)`, R`\(12\)`, R`\(10\)`],
      e: R`Let Harry's age be \(h\).<br>\(h + 15 = 3(h - 5) \Rightarrow h + 15 = 3h - 15 \Rightarrow 2h = 30 \Rightarrow h = 15\).`
    },
    {
      q: R`Adam spent \(\$17.10\) on fruit. He bought 3 apples at \(\$1.50\) each, 2 mangoes at \(\$1.35\) each, and the rest were 9 guavas. What is the combined cost of 2 apples and 1 guava?`,
      o: [R`\(\$4.10\)`, R`\(\$3.90\)`, R`\(\$4.50\)`, R`\(\$4.20\)`, R`\(\$3.80\)`],
      e: R`Apples: \(3 \times 1.50 = \$4.50\). Mangoes: \(2 \times 1.35 = \$2.70\).<br>Spent on apples & mangoes \(= 4.50 + 2.70 = \$7.20\).<br>Remaining for 9 guavas \(= 17.10 - 7.20 = \$9.90 \Rightarrow\) each guava \(= \$1.10\).<br>2 apples \((2 \times 1.50 = 3.00) + 1\) guava \((1.10) = \$4.10\).`
    },
    {
      q: R`A water tank is \(\frac{3}{8}\) full. When 3 gallons of water are added, it becomes \(\frac{1}{2}\) full. What is the total capacity of the tank in gallons?`,
      o: [R`\(24\)`, R`\(18\)`, R`\(32\)`, R`\(20\)`, R`\(16\)`],
      e: R`Let capacity be \(C\).<br>\(\frac{1}{2}C - \frac{3}{8}C = 3 \Rightarrow \frac{4}{8}C - \frac{3}{8}C = \frac{1}{8}C = 3 \Rightarrow C = 24\) gallons.`
    },
    {
      q: R`A student bought 7 books (textbooks at \(\$5\) each and notebooks at \(\$4\) each) for a total of \(\$31\). How many textbooks did they buy?`,
      o: [R`\(3\)`, R`\(4\)`, R`\(2\)`, R`\(5\)`, R`\(1\)`],
      e: R`Let textbooks \(= t\), notebooks \(= 7 - t\).<br>\(5t + 4(7 - t) = 31 \Rightarrow t + 28 = 31 \Rightarrow t = 3\).`
    },
    {
      q: R`Peter is 10 years older than Adam. 5 years ago, Peter was twice as old as Adam. How old is Peter today?`,
      o: [R`\(25\)`, R`\(15\)`, R`\(30\)`, R`\(20\)`, R`\(35\)`],
      e: R`Let Adam's age today be \(A\). Then Peter is \(A + 10\).<br>5 years ago: Peter was \(A + 5\), Adam was \(A - 5\).<br>\(A + 5 = 2(A - 5) \Rightarrow A + 5 = 2A - 10 \Rightarrow A = 15\).<br>Peter's age today \(= 15 + 10 = 25\).`
    },
    {
      q: R`Peter and John together weigh 75 kg. Peter weighs 15 kg less than twice John's weight. How much does Peter weigh?`,
      o: [R`\(45\text{ kg}\)`, R`\(30\text{ kg}\)`, R`\(50\text{ kg}\)`, R`\(40\text{ kg}\)`, R`\(35\text{ kg}\)`],
      e: R`\(P + J = 75\) and \(P = 2J - 15\).<br>Substitute: \((2J - 15) + J = 75 \Rightarrow 3J = 90 \Rightarrow J = 30\text{ kg}\).<br>\(P = 75 - 30 = 45\text{ kg}\).`
    },
    {
      q: R`A snack stall sells single sandwiches for \(\$1\) and double sandwiches for \(\$2\). On a certain day, 125 sandwiches were sold for a total revenue of \(\$200\). How many double sandwiches were sold?`,
      o: [R`\(75\)`, R`\(50\)`, R`\(65\)`, R`\(80\)`, R`\(70\)`],
      e: R`Let double sandwiches \(= d\), single \(= 125 - d\).<br>\(1(125 - d) + 2d = 200 \Rightarrow 125 + d = 200 \Rightarrow d = 75\).`
    },
    {
      q: R`Victoria has 50 chocolates packed in 5-piece and 10-piece boxes. She has 4 more 5-piece boxes than 10-piece boxes. How many 10-piece boxes does she have?`,
      o: [R`\(2\)`, R`\(3\)`, R`\(4\)`, R`\(1\)`, R`\(5\)`],
      e: R`Let 10-piece boxes \(= x\), then 5-piece boxes \(= x + 4\).<br>\(10x + 5(x + 4) = 50 \Rightarrow 15x + 20 = 50 \Rightarrow 15x = 30 \Rightarrow x = 2\).`
    },
    {
      q: R`John has an equal number of nickels (\(\$0.05\)) and quarters (\(\$0.25\)). If their combined value is \(\$9.00\), what is the total number of coins he has?`,
      o: [R`\(60\)`, R`\(30\)`, R`\(45\)`, R`\(50\)`, R`\(75\)`],
      e: R`Let \(n\) be the number of nickels (and quarters).<br>\(0.05n + 0.25n = 9.00 \Rightarrow 0.30n = 9 \Rightarrow n = 30\).<br>Total coins \(= n + n = 60\).`
    },
    {
      q: R`If \(a + b = 15\), \(b + c = 10\), and \(a + c = 10\), what is the value of \(a + b + c\)?`,
      o: [R`\(17.5\)`, R`\(15\)`, R`\(20\)`, R`\(18\)`, R`\(16.5\)`],
      e: R`Sum all three equations: \((a+b) + (b+c) + (a+c) = 15 + 10 + 10 = 35\).<br>\(2(a + b + c) = 35 \Rightarrow a + b + c = 17.5\).`
    },
    {
      q: R`If \(\frac{x + y}{y} = 5\), what is the value of \(\frac{x + 3y}{y}\)?`,
      o: [R`\(7\)`, R`\(8\)`, R`\(6\)`, R`\(5\)`, R`\(9\)`],
      e: R`\(\frac{x + y}{y} = \frac{x}{y} + 1 = 5 \Rightarrow \frac{x}{y} = 4\).<br>\(\frac{x + 3y}{y} = \frac{x}{y} + 3 = 4 + 3 = 7\).`
    }
  ]
});

// 2. Quadratic Equations
TOPICS.push({
  id: 'quad',
  ch: 'alg',
  icon: '⚡',
  title: 'Quadratic Equations',
  desc: 'Factoring, quadratic formula, discriminant, nature of roots & Vieta\'s relations.',
  learn: R`
<h3>Standard Form of a Quadratic</h3>
<p>A quadratic equation has the standard form:</p>
<BIG>\(ax^2 + bx + c = 0 \quad (a \ne 0)\)</BIG>

<F t="The Quadratic Formula">
<BIG>\(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)</BIG>
<p>The term inside the radical, \(D = b^2 - 4ac\), is called the <b>discriminant</b>.</p>
<ul>
  <li>\(D > 0\): Two distinct real roots.</li>
  <li>\(D = 0\): Exactly one real root (repeated / double root).</li>
  <li>\(D < 0\): No real roots.</li>
</ul>
</F>

<F t="Vieta's Formulas (Sum & Product of Roots)">
If \(r_1\) and \(r_2\) are roots of \(ax^2 + bx + c = 0\):
<BIG>\(r_1 + r_2 = -\frac{b}{a}, \qquad r_1 r_2 = \frac{c}{a}\)</BIG>
</F>

<TIP>
<b>Factoring by Splitting the Middle Term:</b><br>
To factor \(x^2 + 5x + 6 = 0\), find two numbers whose product is \(6\) and sum is \(5\): \(2\) and \(3\).<br>
\((x + 2)(x + 3) = 0 \Rightarrow x = -2, -3\).
</TIP>

<EX t="Finding an Unknown Coefficient">
If \(x = 4\) is a root of \(x^2 + kx - 8 = 0\), what is \(k\)?
<SOL>
Plug in \(x = 4\):<br>
\(4^2 + k(4) - 8 = 0 \Rightarrow 16 + 4k - 8 = 0 \Rightarrow 4k = -8 \Rightarrow k = -2\).
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`What are the roots of \(x^2 + 5x - 6 = 0\)?`,
      o: [R`\(1\) and \(-6\)`, R`\(-1\) and \(6\)`, R`\(2\) and \(-3\)`, R`\(-2\) and \(3\)`, R`\(1\) and \(6\)`],
      e: R`Factor: \((x + 6)(x - 1) = 0 \Rightarrow x = 1, -6\).`
    },
    {
      q: R`What are the roots of \(x^2 - 4x - 5 = 0\)?`,
      o: [R`\(5\) and \(-1\)`, R`\(-5\) and \(1\)`, R`\(4\) and \(-1\)`, R`\(5\) and \(1\)`, R`\(-5\) and \(-1\)`],
      e: R`Factor: \((x - 5)(x + 1) = 0 \Rightarrow x = 5, -1\).`
    },
    {
      q: R`Solve for \(x\): \(2x^2 + 7x + 6 = 0\)`,
      o: [R`\(-1.5\) and \(-2\)`, R`\(1.5\) and \(2\)`, R`\(-3\) and \(-2\)`, R`\(-1.5\) and \(2\)`, R`\(3\) and \(2\)`],
      e: R`Factor by grouping: \(2x^2 + 4x + 3x + 6 = 2x(x + 2) + 3(x + 2) = (2x + 3)(x + 2) = 0\).<br>\(x = -\frac{3}{2} = -1.5\), \(x = -2\).`
    },
    {
      q: R`Find the roots of \(x^2 + 5x - 7 = 0\).`,
      o: [R`\(\frac{-5 \pm \sqrt{53}}{2}\)`, R`\(\frac{-5 \pm \sqrt{33}}{2}\)`, R`\(\frac{5 \pm \sqrt{53}}{2}\)`, R`\(-5 \pm \sqrt{53}\)`, R`\(\frac{-5 \pm \sqrt{47}}{2}\)`],
      e: R`Use quadratic formula with \(a=1, b=5, c=-7\):<br>\(D = 5^2 - 4(1)(-7) = 25 + 28 = 53\).<br>\(x = \frac{-5 \pm \sqrt{53}}{2}\).`
    },
    {
      q: R`If \(x = 4\) is a root of the equation \(x^2 + kx - 8 = 0\), find the value of \(k\).`,
      o: [R`\(-2\)`, R`\(2\)`, R`\(-4\)`, R`\(4\)`, R`\(0\)`],
      e: R`Substitute \(x = 4\): \(16 + 4k - 8 = 0 \Rightarrow 4k + 8 = 0 \Rightarrow k = -2\).`
    },
    {
      q: R`Which of the following quadratic equations has roots \(4\) and \(2\)?`,
      o: [R`\(x^2 - 6x + 8 = 0\)`, R`\(x^2 - 6x - 8 = 0\)`, R`\(x^2 - 4x + 8 = 0\)`, R`\(x^2 + 6x + 8 = 0\)`, R`\(x^2 + 6x + 12 = 0\)`],
      e: R`Equation with roots \(r_1, r_2\) is \((x - r_1)(x - r_2) = 0\).<br>\((x - 4)(x - 2) = x^2 - 6x + 8 = 0\).`
    },
    {
      q: R`If \(x^2 + a = b\), where \(x\) is an integer, which of the following could be the value of \(b - a\)?`,
      o: [R`\(4\)`, R`\(3\)`, R`\(5\)`, R`\(6\)`, R`\(7\)`],
      e: R`Rearrange: \(b - a = x^2\). Since \(x\) is an integer, \(b - a\) must be a perfect square. Among the choices, only 4 is a perfect square (\(2^2\)).`
    },
    {
      q: R`If \(xy = 6\) and \(x + 2y = 7\), what are the possible values of \(x\)?`,
      o: [R`\(3\) or \(4\)`, R`\(2\) or \(3\)`, R`\(1\) or \(6\)`, R`\(2\) or \(4\)`, R`\(-3\) or \(-4\)`],
      e: R`From \(x + 2y = 7 \Rightarrow 2y = 7 - x \Rightarrow y = \frac{7 - x}{2}\).<br>Substitute into \(xy = 6\): \(x\left(\frac{7 - x}{2}\right) = 6 \Rightarrow 7x - x^2 = 12 \Rightarrow x^2 - 7x + 12 = 0\).<br>\((x - 3)(x - 4) = 0 \Rightarrow x = 3\) or \(4\).`
    },
    {
      q: R`How many real solutions does the equation \(x^2 - 4x + 4 = 0\) have?`,
      o: [R`\(1\)`, R`\(2\)`, R`\(0\)`, R`\(3\)`, R`Infinitely many`],
      e: R`\(D = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0\). Discriminant is zero, so there is exactly 1 real solution (\(x = 2\)).`
    },
    {
      q: R`How many real solutions does \(x^2 + 9x + 21 = 0\) have?`,
      o: [R`\(0\)`, R`\(1\)`, R`\(2\)`, R`\(3\)`, R`Cannot be determined`],
      e: R`\(D = 9^2 - 4(1)(21) = 81 - 84 = -3 < 0\). Negative discriminant means 0 real solutions.`
    }
  ]
});

// 3. Square Root Equations
TOPICS.push({
  id: 'sqrteq',
  ch: 'alg',
  icon: '√',
  title: 'Square Root Equations',
  desc: 'Radical equations, squaring both sides, domain restrictions & detecting extraneous roots.',
  learn: R`
<h3>Solving Radical Equations</h3>
<p>To solve an equation containing square roots, follow these fundamental rules:</p>

<F t="Three-Step Method">
<ol>
  <li><b>Isolate:</b> Get the radical term alone on one side of the equation.</li>
  <li><b>Square:</b> Square both sides to eliminate the radical.</li>
  <li><b>Check:</b> ⚠️ <b>MANDATORY:</b> Always test your answers in the original equation! Squaring both sides can introduce <i>extraneous solutions</i> that are invalid.</li>
</ol>
</F>

<NOTE>
<b>Definition of Principal Square Root:</b><br>
The symbol \(\sqrt{a}\) refers strictly to the <b>non-negative</b> square root. Thus \(\sqrt{9} = 3\), NEVER \(-3\) or \(\pm 3\).<br>
Likewise, \(\sqrt{(-3)^2} = \sqrt{9} = 3\).
</NOTE>

<EX t="Beware Extraneous Roots">
Solve \(\sqrt{x} = x - 2\).
<SOL>
Square both sides: \(x = (x - 2)^2 = x^2 - 4x + 4\).<br>
Rearrange: \(x^2 - 5x + 4 = 0 \Rightarrow (x - 4)(x - 1) = 0 \Rightarrow x = 4\) or \(x = 1\).<br>
<b>Check:</b>
<ul>
  <li>\(x = 4\): \(\sqrt{4} = 4 - 2 \Rightarrow 2 = 2\) ✓ Valid!</li>
  <li>\(x = 1\): \(\sqrt{1} = 1 - 2 \Rightarrow 1 = -1\) ✗ False! \(x = 1\) is extraneous.</li>
</ul>
The only valid solution is <b>\(x = 4\)</b>.
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`Solve for \(x\): \(\sqrt{x - 8} = 6\)`,
      o: [R`\(44\)`, R`\(36\)`, R`\(28\)`, R`\(42\)`, R`\(50\)`],
      e: R`Square both sides: \(x - 8 = 36 \Rightarrow x = 44\).<br>Check: \(\sqrt{44 - 8} = \sqrt{36} = 6\) ✓.`
    },
    {
      q: R`Solve for \(x\): \(\sqrt{x^2 + 21} = 5\)`,
      o: [R`\(\pm 2\)`, R`\(2\) only`, R`\(-2\) only`, R`\(\pm 4\)`, R`No real solution`],
      e: R`Square both sides: \(x^2 + 21 = 25 \Rightarrow x^2 = 4 \Rightarrow x = \pm 2\).<br>Both check out in the original equation.`
    },
    {
      q: R`Solve for \(x\): \(\sqrt{x} = \frac{2}{\sqrt{x - 3}}\)`,
      o: [R`\(4\) only`, R`\(4\) and \(-1\)`, R`\(-1\) only`, R`\(3\)`, R`\(2\)`],
      e: R`Cross-multiply: \(\sqrt{x(x - 3)} = 2\).<br>Square: \(x(x - 3) = 4 \Rightarrow x^2 - 3x - 4 = 0 \Rightarrow (x - 4)(x + 1) = 0\).<br>Since \(\sqrt{x}\) requires \(x \ge 0\), \(x = -1\) is extraneous. Thus \(x = 4\).`
    },
    {
      q: R`Solve for \(x\): \(\sqrt{x^2 - 2} - \sqrt{x} = 0\)`,
      o: [R`\(2\)`, R`\(-1\)`, R`\(2\) and \(-1\)`, R`\(\sqrt{2}\)`, R`\(0\)`],
      e: R`\(\sqrt{x^2 - 2} = \sqrt{x} \Rightarrow x^2 - 2 = x \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x - 2)(x + 1) = 0\).<br>\(x = -1\) makes \(\sqrt{x}\) non-real. Thus the only real solution is \(x = 2\).`
    },
    {
      q: R`If \(x = 9\) is a solution to \(\sqrt{x} + k\sqrt{x - 8} = 0\), what is the value of \(k\)?`,
      o: [R`\(-3\)`, R`\(3\)`, R`\(-1\)`, R`\(1\)`, R`\(-9\)`],
      e: R`Substitute \(x = 9\): \(\sqrt{9} + k\sqrt{9 - 8} = 0 \Rightarrow 3 + k(1) = 0 \Rightarrow k = -3\).`
    },
    {
      q: R`What is the value of \(\sqrt{(-3)^2}\)?`,
      o: [R`\(3\)`, R`\(-3\)`, R`\(\pm 3\)`, R`\(9\)`, R`Undefined`],
      e: R`\((-3)^2 = 9\), and \(\sqrt{9} = 3\). The principal square root is always non-negative.`
    }
  ]
});

// 4. Inequalities & Absolute Value
TOPICS.push({
  id: 'ineq',
  ch: 'alg',
  icon: '><',
  title: 'Inequalities & Absolute Value',
  desc: 'Sign reversal rules, non-linear inequalities, distance definition of absolute value & compound ranges.',
  learn: R`
<h3>Rules of Inequalities</h3>
<p>Inequalities follow the same algebra rules as equations, with one crucial exception:</p>

<F t="Golden Rule of Inequalities">
When you <b>multiply or divide</b> both sides by a <b>negative number</b>, the inequality sign <b>REVERSES</b>!
<BIG>\(-2x < -14 \quad\Longrightarrow\quad x > 7\)</BIG>
</F>

<h3>Powers & Ranges</h3>
<ul>
  <li>If \(x > 1\): Higher powers increase: \(x^3 > x^2 > x > \sqrt{x}\).</li>
  <li>If \(0 < x < 1\): Higher powers <b>decrease</b>: \(\sqrt{x} > x > x^2 > x^3\).</li>
  <li>If \(x^2 > x\): This holds when \(x > 1\) OR \(x < 0\).</li>
</ul>

<h3>Absolute Value as Distance</h3>
<p>\(|x|\) represents the distance of \(x\) from \(0\) on the number line.</p>
<BIG>\(|x| = \begin{cases} x & \text{if } x \ge 0 \\ -x & \text{if } x < 0 \end{cases}\)</BIG>

<F t="Absolute Value Inequalities">
<ul>
  <li>\(|x - a| < k \iff a - k < x < a + k\) (within distance \(k\) of \(a\))</li>
  <li>\(|x - a| > k \iff x > a + k \text{ or } x < a - k\) (beyond distance \(k\) of \(a\))</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`Solve for \(x\): \(7(x + 2) > 2(x - 3)\)`,
      o: [R`\(x > -4\)`, R`\(x < -4\)`, R`\(x > 4\)`, R`\(x > -2\)`, R`\(x < 2\)`],
      e: R`\(7x + 14 > 2x - 6 \Rightarrow 5x > -20 \Rightarrow x > -4\).`
    },
    {
      q: R`For which values of \(x\) is \((x - 3)(x + 1) > 0\)?`,
      o: [R`\(x > 3\) or \(x < -1\)`, R`\(-1 < x < 3\)`, R`\(x > 3\) only`, R`\(x < -1\) only`, R`\(x > 1\) or \(x < -3\)`],
      e: R`The roots are \(3\) and \(-1\). The product is positive outside the roots: \(x > 3\) or \(x < -1\).`
    },
    {
      q: R`Solve for \(x\): \((2x - 5)(x + 3) < 0\)`,
      o: [R`\(-3 < x < 2.5\)`, R`\(x > 2.5\) or \(x < -3\)`, R`\(-2.5 < x < 3\)`, R`\(0 < x < 2.5\)`, R`\(x > -3\)`],
      e: R`The roots are \(x = 2.5\) and \(x = -3\). A quadratic opening upward is negative between the roots: \(-3 < x < 2.5\).`
    },
    {
      q: R`Solve for \(x\): \(24 - |x + 7| = 20\)`,
      o: [R`\(-3\) or \(-11\)`, R`\(3\) or \(-11\)`, R`\(-3\) or \(11\)`, R`\(3\) only`, R`\(-3\) only`],
      e: R`\(|x + 7| = 4 \Rightarrow x + 7 = 4\) or \(x + 7 = -4 \Rightarrow x = -3\) or \(-11\).`
    },
    {
      q: R`Solve for \(x\): \(|x - 5| > 2\)`,
      o: [R`\(x > 7\) or \(x < 3\)`, R`\(3 < x < 7\)`, R`\(x > 7\) only`, R`\(x < 3\) only`, R`\(x > 3\) or \(x < -7\)`],
      e: R`Distance from 5 is greater than 2: \(x - 5 > 2 \Rightarrow x > 7\), or \(x - 5 < -2 \Rightarrow x < 3\).`
    },
    {
      q: R`Solve for \(x\): \(|5 - x| < 2\)`,
      o: [R`\(3 < x < 7\)`, R`\(x > 7\) or \(x < 3\)`, R`\(-7 < x < -3\)`, R`\(2 < x < 5\)`, R`\(0 < x < 7\)`],
      e: R`Since \(|5 - x| = |x - 5|\), this means distance from 5 is less than 2: \(5 - 2 < x < 5 + 2 \Rightarrow 3 < x < 7\).`
    },
    {
      q: R`If \(x < 0\), what is the value of \(|x|\)?`,
      o: [R`\(-x\)`, R`\(x\)`, R`\(0\)`, R`\(x^2\)`, R`\(1\)`],
      e: R`By definition, if \(x\) is negative, \(|x| = -x\) (which is positive since \(-(-p) = p\)).`
    },
    {
      q: R`For what values of \(x\) does \(\sqrt{x} > x > x^2\) hold true?`,
      o: [R`\(0 < x < 1\)`, R`\(x > 1\)`, R`\(x < 0\)`, R`\(x = 1\)`, R`For all real numbers`],
      e: R`For fractions between 0 and 1, taking powers makes them smaller, and taking square roots makes them larger. Example: \(x = 0.25 \Rightarrow \sqrt{x} = 0.5 > 0.25 > 0.0625\).`
    }
  ]
});

// 5. Exponents & Roots
TOPICS.push({
  id: 'exp',
  ch: 'alg',
  icon: 'xⁿ',
  title: 'Exponents & Roots',
  desc: 'Exponent laws, negative & fractional powers, common bases & radical comparisons.',
  learn: R`
<h3>Fundamental Laws of Exponents</h3>

<F t="Exponent Rules">
<ul>
  <li><b>Product:</b> \(a^m \cdot a^n = a^{m+n}\)</li>
  <li><b>Quotient:</b> \(\frac{a^m}{a^n} = a^{m-n}\)</li>
  <li><b>Power of a Power:</b> \((a^m)^n = a^{mn}\)</li>
  <li><b>Negative Power:</b> \(a^{-n} = \frac{1}{a^n}\)</li>
  <li><b>Zero Power:</b> \(a^0 = 1 \quad (a \ne 0)\)</li>
  <li><b>Fractional Power:</b> \(a^{1/n} = \sqrt[n]{a}\), \quad \(a^{m/n} = (\sqrt[n]{a})^m\)</li>
</ul>
</F>

<TIP>
<b>Factoring Out Common Powers:</b><br>
When adding powers of the same base, do NOT multiply the bases! Instead, <b>factor out the smallest power</b>.<br>
\(2^{10} + 2^{11} = 2^{10}(1 + 2^1) = 3 \times 2^{10}\).
</TIP>

<EX t="Comparing Large Roots">
Compare \(9^{1/8}\) and \(8^{1/9}\).
<SOL>
Raise both sides to the \(72^{\text{nd}}\) power (since \(\text{LCM}(8, 9) = 72\)):<br>
\((9^{1/8})^{72} = 9^9\)<br>
\((8^{1/9})^{72} = 8^8\)<br>
Clearly, \(9^9 > 8^8\), so <b>\(9^{1/8} > 8^{1/9}\)</b>.
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`Simplify: \(2^{10} + 2^{11} + 2^{12} + 2^{13} + 2^{14}\)`,
      o: [R`\(31 \times 2^{10}\)`, R`\(30 \times 2^{10}\)`, R`\(2^{15}\)`, R`\(15 \times 2^{10}\)`, R`\(2^{70}\)`],
      e: R`Factor out \(2^{10}\): \(2^{10}(1 + 2 + 4 + 8 + 16) = 2^{10}(31) = 31 \times 2^{10}\).`
    },
    {
      q: R`Simplify: \(\frac{55^5}{5^{55}}\)`,
      o: [R`\(\frac{11^5}{5^{50}}\)`, R`\(\frac{11^5}{5^{55}}\)`, R`\(11^5\)`, R`\(\frac{1}{5^{50}}\)`, R`\(55^{-50}\)`],
      e: R`\(55^5 = (5 \times 11)^5 = 5^5 \times 11^5\).<br>\(\frac{5^5 \times 11^5}{5^{55}} = \frac{11^5}{5^{55 - 5}} = \frac{11^5}{5^{50}}\).`
    },
    {
      q: R`Simplify: \(\frac{7^{10} + 7^{11}}{7}\)`,
      o: [R`\(8 \times 7^9\)`, R`\(7^{10}\)`, R`\(8 \times 7^{10}\)`, R`\(7^9 + 7^{10}\)`, R`\(2 \times 7^9\)`],
      e: R`\(\frac{7^{10}(1 + 7)}{7} = \frac{7^{10} \times 8}{7} = 8 \times 7^9\).`
    },
    {
      q: R`Simplify: \(\frac{2^{25} - 2^{10}}{2^9}\)`,
      o: [R`\(2^{16} - 2\)`, R`\(2^{16} - 1\)`, R`\(2^{15} - 2\)`, R`\(2^{14}\)`, R`\(2^{16}\)`],
      e: R`\(\frac{2^{25}}{2^9} - \frac{2^{10}}{2^9} = 2^{16} - 2^1 = 2^{16} - 2\).`
    },
    {
      q: R`If \(a^4 = 256\), \(b^3 = -27\), and \(c^3 = 64\), what is the greatest possible value of \(a + b + c\)?`,
      o: [R`\(5\)`, R`\(-3\)`, R`\(11\)`, R`\(1\)`, R`\(3\)`],
      e: R`\(a = \pm 4\), \(b = -3\), \(c = 4\).<br>Greatest value takes \(a = 4\): \(4 + (-3) + 4 = 5\).`
    },
    {
      q: R`Evaluate: \(256^{0.18} \times 256^{0.07}\)`,
      o: [R`\(4\)`, R`\(2\)`, R`\(16\)`, R`\(8\)`, R`\(1\)`],
      e: R`\(256^{0.18 + 0.07} = 256^{0.25} = 256^{1/4} = \sqrt[4]{256} = 4\).`
    },
    {
      q: R`If \(2^x = 16^y\), express \(x\) in terms of \(y\).`,
      o: [R`\(x = 4y\)`, R`\(x = 8y\)`, R`\(x = 2y\)`, R`\(x = 16y\)`, R`\(x = y/4\)`],
      e: R`\(16 = 2^4 \Rightarrow 16^y = 2^{4y}\). Since \(2^x = 2^{4y}\), we have \(x = 4y\).`
    },
    {
      q: R`Which is greater: \(\sqrt{12} + \sqrt{20}\) or \(\sqrt{16} + \sqrt{16}\)?`,
      o: [R`\(\sqrt{16} + \sqrt{16}\)`, R`\(\sqrt{12} + \sqrt{20}\)`, R`They are equal`, R`Cannot be determined`],
      fix: 1, a: 0,
      e: R`\(\sqrt{16} + \sqrt{16} = 4 + 4 = 8 = \sqrt{64}\).<br>Square both: \((\sqrt{12} + \sqrt{20})^2 = 32 + 2\sqrt{240}\).<br>\(8^2 = 64 = 32 + 32 = 32 + 2\sqrt{256}\).<br>Since \(\sqrt{256} > \sqrt{240}\), \(\sqrt{16} + \sqrt{16}\) is greater.`
    }
  ]
});

// 6. Functions & Graphs
TOPICS.push({
  id: 'func',
  ch: 'alg',
  icon: '📈',
  title: 'Functions & Graphs',
  desc: 'Function notation, domain/range, vertex of quadratics, transformations & piecewise definitions.',
  learn: R`
<h3>Function Notation & Evaluations</h3>
<p>A function \(f(x)\) is a rule that assigns an input \(x\) to an output \(y = f(x)\).</p>

<F t="Parabolas & Extreme Values">
For a quadratic function \(f(x) = ax^2 + bx + c\):
<ul>
  <li>The <b>vertex</b> occurs at \(x = -\frac{b}{2a}\).</li>
  <li>If \(a < 0\): opens downwards, vertex is a <b>maximum</b>.</li>
  <li>If \(a > 0\): opens upwards, vertex is a <b>minimum</b>.</li>
</ul>
</F>

<EX t="Finding Maximum Value">
Find the maximum value of \(f(x) = 10 - (x - 3)^2\).
<SOL>
Since \((x - 3)^2 \ge 0\) for all real \(x\), the subtracted term is smallest when \((x - 3) = 0 \Rightarrow x = 3\).<br>
The maximum value is \(10 - 0 = \mathbf{10}\).
</SOL>
</EX>

<F t="Graph Transformations">
Starting from \(y = f(x)\):
<ul>
  <li>\(y = f(x) + c\): Shift UP by \(c\)</li>
  <li>\(y = f(x) - c\): Shift DOWN by \(c\)</li>
  <li>\(y = f(x - c)\): Shift RIGHT by \(c\)</li>
  <li>\(y = f(x + c)\): Shift LEFT by \(c\)</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`The height \(h(t)\) of an object in feet after \(t\) seconds is given by \(h(t) = 100 - (t - 5)^2\). What is the maximum height reached by the object?`,
      o: [R`\(100\text{ ft}\)`, R`\(75\text{ ft}\)`, R`\(95\text{ ft}\)`, R`\(125\text{ ft}\)`, R`\(50\text{ ft}\)`],
      e: R`Since \(-(t - 5)^2 \le 0\), the maximum occurs when \(t - 5 = 0 \Rightarrow t = 5\), giving \(h(5) = 100\text{ ft}\).`
    },
    {
      q: R`For the same height function \(h(t) = 100 - (t - 5)^2\), at what time \(t > 0\) does the object return to the ground (\(h = 0\))?`,
      o: [R`\(t = 15\)`, R`\(t = 10\)`, R`\(t = 5\)`, R`\(t = 20\)`, R`\(t = 25\)`],
      e: R`Set \(h(t) = 0\): \(100 - (t - 5)^2 = 0 \Rightarrow (t - 5)^2 = 100 \Rightarrow t - 5 = 10 \Rightarrow t = 15\text{ s}\).`
    },
    {
      q: R`At how many points do the graphs of \(y = x^2\) and \(y = x\) intersect?`,
      o: [R`\(2\)`, R`\(1\)`, R`\(0\)`, R`\(3\)`, R`Infinitely many`],
      e: R`Set \(x^2 = x \Rightarrow x^2 - x = 0 \Rightarrow x(x - 1) = 0 \Rightarrow x = 0\) and \(x = 1\). Points are \((0,0)\) and \((1,1)\), so 2 points.`
    },
    {
      q: R`Consider the piecewise function:
\[ f(x) = \begin{cases} -3x & \text{for } x \le 0 \\ x^2 + 3 & \text{for } x > 0 \end{cases} \]
Find \(f(-2) + f(2)\).`,
      o: [R`\(13\)`, R`\(7\)`, R`\(1\)`, R`\(10\)`, R`\(-1\)`],
      e: R`Since \(-2 \le 0\), \(f(-2) = -3(-2) = 6\).<br>Since \(2 > 0\), \(f(2) = 2^2 + 3 = 7\).<br>Sum \(= 6 + 7 = 13\).`
    },
    {
      q: R`How is the graph of \(y = (x - 5)^2\) obtained from the graph of \(y = x^2\)?`,
      o: [R`Shift 5 units to the right`, R`Shift 5 units to the left`, R`Shift 5 units upwards`, R`Shift 5 units downwards`, R`Reflected across the x-axis`],
      e: R`Replacing \(x\) with \((x - 5)\) shifts the graph 5 units to the right.`
    }
  ]
});

/* ===== GRE Quant Lab — Data Analysis Topics ===== */
'use strict';

// 17. Mean, Median & Mode
TOPICS.push({
  id: 'mmm',
  ch: 'da',
  icon: '📊',
  title: 'Mean, Median & Mode',
  desc: 'Arithmetic mean, weighted averages, median calculation, and frequency distributions.',
  learn: R`
<h3>Measures of Central Tendency</h3>

<F t="Arithmetic Mean & Sum">
<BIG>\(\text{Mean} = \frac{\sum x}{n} \quad\iff\quad \sum x = n \times \text{Mean}\)</BIG>
<p><i>Golden Rule:</i> Whenever an average is given or changes, immediately calculate the <b>TOTAL SUM</b>!</p>
</F>

<F t="Weighted Average">
When combining two groups with averages \(x_1\) and \(x_2\) and counts \(w_1\) and \(w_2\):
<BIG>\(\bar{x}_{\text{weighted}} = \frac{w_1 x_1 + w_2 x_2}{w_1 + w_2}\)</BIG>
<p>The weighted average is ALWAYS pulled closer to the group with the larger count.</p>
</F>

<h3>Median & Mode</h3>
<ul>
  <li><b>Median:</b> The middle value when data is sorted in ascending order.
    <ul>
      <li>If \(n\) is odd: The exact middle value at position \(\frac{n+1}{2}\).</li>
      <li>If \(n\) is even: The average of the two middle values at positions \(\frac{n}{2}\) and \(\frac{n}{2} + 1\).</li>
    </ul>
  </li>
  <li><b>Mode:</b> The value that appears with the highest frequency. A set can have one mode, multiple modes, or no mode.</li>
</ul>

<NOTE>
In any evenly spaced sequence (Arithmetic Progression), <b>\(\text{Mean} = \text{Median} = \frac{\text{First} + \text{Last}}{2}\)</b>.
</NOTE>
`,
  quiz: [
    {
      q: R`The average of 5 positive numbers is 40. When 2 of the numbers are removed, the average of the remaining 3 numbers is 50. What is the average of the 2 removed numbers?`,
      o: [R`\(25\)`, R`\(30\)`, R`\(20\)`, R`\(35\)`, R`\(45\)`],
      e: R`Initial sum \(= 5 \times 40 = 200\).<br>Remaining sum \(= 3 \times 50 = 150\).<br>Sum of 2 removed numbers \(= 200 - 150 = 50\).<br>Their average \(= \frac{50}{2} = 25\).`
    },
    {
      q: R`The average of 4 positive integers is 10. What is the greatest possible value that any one of these integers could have?`,
      o: [R`\(37\)`, R`\(40\)`, R`\(36\)`, R`\(38\)`, R`\(39\)`],
      e: R`Total sum \(= 4 \times 10 = 40\).<br>To maximize one integer, minimize the other three to the smallest positive integer (\(1\)):<br>\(40 - (1 + 1 + 1) = 37\).`
    },
    {
      q: R`The ratio of male to female students in a college program is \(1:2\). If the mean score of the male students is 120 and the mean score of the female students is 135, what is the combined mean score of all students?`,
      o: [R`\(130\)`, R`\(127.5\)`, R`\(132.5\)`, R`\(125\)`, R`\(128\)`],
      e: R`Weighted average \(= \frac{1(120) + 2(135)}{1 + 2} = \frac{120 + 270}{3} = \frac{390}{3} = 130\).`
    },
    {
      q: R`Given integers \(a, b, c\) such that \(-4 \le a \le 8\), \(4 \le b < 11\), and \(-4 < c \le 6\), what is the maximum possible arithmetic mean of \(a, b,\) and \(c\)?`,
      o: [R`\(8\)`, R`\(7\)`, R`\(8.33\)`, R`\(9\)`, R`\(7.67\)`],
      e: R`To maximize the mean, maximize each integer: \(a = 8\), \(b = 10\) (since \(b < 11\) is integer), \(c = 6\).<br>Sum \(= 8 + 10 + 6 = 24\). Mean \(= \frac{24}{3} = 8\).`
    }
  ]
});

// 18. Range & Standard Deviation
TOPICS.push({
  id: 'sd',
  ch: 'da',
  icon: '📏',
  title: 'Range & Standard Deviation',
  desc: 'Dispersion metrics, variance formula, transformation rules & visual spread comparison.',
  learn: R`
<h3>Measures of Spread</h3>
<ul>
  <li><b>Range:</b> \(\text{Max} - \text{Min} \ge 0\).</li>
  <li><b>Standard Deviation (\(\sigma\)):</b> Measures how spread out numbers are from the mean.
    <BIG>\(\sigma = \sqrt{\frac{\sum (x_i - \mu)^2}{n}}\)</BIG>
  </li>
  <li><b>Variance:</b> \(\text{Variance} = \sigma^2\).</li>
</ul>

<F t="Effects of Operations on Range & SD">
<ol>
  <li><b>Adding or Subtracting a Constant \(k\):</b><br>
    The entire distribution shifts, but distances between points remain unchanged!<br>
    \(\text{Range}_{\text{new}} = \text{Range}_{\text{old}}\)<br>
    \(\sigma_{\text{new}} = \sigma_{\text{old}}\) (UNALTERED!)
  </li>
  <li><b>Multiplying by a Constant \(k\):</b><br>
    Distances between points scale by \(|k|\):<br>
    \(\text{Range}_{\text{new}} = |k| \times \text{Range}_{\text{old}}\)<br>
    \(\sigma_{\text{new}} = |k| \times \sigma_{\text{old}}\)
  </li>
</ol>
</F>
`,
  quiz: [
    {
      q: R`The range of a dataset is 20. If every number in the dataset is increased by 30, what is the new range?`,
      o: [R`\(20\)`, R`\(50\)`, R`\(30\)`, R`\(10\)`, R`\(0\)`],
      e: R`Adding a constant to every value shifts the entire set but does not change the difference between max and min: \((M + 30) - (m + 30) = M - m = 20\).`
    },
    {
      q: R`Which of the following datasets has the greatest standard deviation?`,
      o: [
        R`\(\{20, 30, 40, 50\}\)`,
        R`\(\{1, 4, 7, 10\}\)`,
        R`\(\{2, 4, 6, 8\}\)`,
        R`\(\{12, 13, 14, 15\}\)`,
        R`\(\{-8, -6, -4, -2\}\)`
      ],
      e: R`Standard deviation measures distance from the mean. The spacing between consecutive terms in \(\{20, 30, 40, 50\}\) is 10, whereas in all other choices it is 3, 2, or 1. Thus it has the largest spread.`
    },
    {
      q: R`Which of the following operations on a dataset will leave its standard deviation UNCHANGED?
I. Increasing the largest number by 10
II. Increasing each number by 10
III. Multiplying each number by 10`,
      o: [R`II only`, R`I only`, R`III only`, R`II and III`, R`None of them`],
      fix: 1, a: 0,
      e: R`Only adding the same constant to EVERY number (II) shifts the data without altering the deviations from the mean.`
    },
    {
      q: R`What is the standard deviation and range of the set \(\{1, 5, 9, 13\}\)?`,
      o: [
        R`\(\text{SD} = \sqrt{20}, \text{Range} = 12\)`,
        R`\(\text{SD} = 20, \text{Range} = 12\)`,
        R`\(\text{SD} = \sqrt{10}, \text{Range} = 12\)`,
        R`\(\text{SD} = 4, \text{Range} = 13\)`,
        R`\(\text{SD} = \sqrt{20}, \text{Range} = 13\)`
      ],
      e: R`Mean \(= \frac{1+5+9+13}{4} = 7\).<br>Squared deviations: \((1-7)^2 = 36\), \((5-7)^2 = 4\), \((9-7)^2 = 4\), \((13-7)^2 = 36\).<br>Sum \(= 80\). Variance \(= 80/4 = 20 \Rightarrow \text{SD} = \sqrt{20}\).<br>Range \(= 13 - 1 = 12\).`
    }
  ]
});

// 19. Permutations & Combinations
TOPICS.push({
  id: 'pnc',
  ch: 'da',
  icon: '🎲',
  title: 'Permutations & Combinations',
  desc: 'Counting principle, combinations (nCr), permutations (nPr), circular seating & identical object anagrams.',
  learn: R`
<h3>Selection vs Arrangement</h3>

<F t="Combinations: Order Does NOT Matter">
Selecting \(r\) items out of \(n\) distinct items (e.g. committees, handshakes):
<BIG>\(^nC_r = \frac{n!}{r!(n - r)!}\)</BIG>
<ul>
  <li>\(^nC_1 = n\), \quad \(^nC_n = 1\), \quad \(^nC_0 = 1\)</li>
  <li>\(^nC_2 = \frac{n(n - 1)}{2}\)</li>
</ul>
</F>

<F t="Permutations: Order MATTERS">
Arranging \(r\) items out of \(n\) distinct items (e.g. ranks, podiums, words):
<BIG>\(^nP_r = \frac{n!}{(n - r)!}\)</BIG>
<ul>
  <li>Arranging \(n\) items in a straight line: \(n!\)</li>
  <li>Arranging \(n\) items in a circle: \((n - 1)!\)</li>
</ul>
</F>

<TIP>
<b>The Box / Glue Method (Items Kept Together):</b><br>
To arrange letters of "BEGIN" such that vowels (E, I) are always together:<br>
1. Glue {E, I} into 1 block. Total items to arrange: {B, G, N, [EI]} \(= 4\) items \(\Rightarrow 4! = 24\).<br>
2. Arrange vowels internally: \(2! = 2\).<br>
Total \(= 4! \times 2! = 24 \times 2 = \mathbf{48}\).
</TIP>
`,
  quiz: [
    {
      q: R`In how many ways can a committee of 3 men and 2 women be chosen from a group of 8 men and 6 women?`,
      o: [R`\(840\)`, R`\(420\)`, R`\(560\)`, R`\(1680\)`, R`\(336\)`],
      e: R`Men: \(^8C_3 = \frac{8 \times 7 \times 6}{6} = 56\). Women: \(^6C_2 = \frac{6 \times 5}{2} = 15\).<br>Total \(= 56 \times 15 = 840\).`
    },
    {
      q: R`A committee of 4 people is to be chosen from a group of 20 people. If Peter must NOT be on the committee and John MUST be on the committee, how many different committees can be formed?`,
      o: [R`\(816\)`, R`\(969\)`, R`\(1140\)`, R`\(680\)`, R`\(1024\)`],
      e: R`John is automatically included (1 choice). Peter is excluded (0 choices).<br>Remaining spots to fill: \(4 - 1 = 3\).<br>Eligible remaining candidates: \(20 - 2 = 18\).<br>\(^{18}C_3 = \frac{18 \times 17 \times 16}{6} = 3 \times 17 \times 16 = 816\).`
    },
    {
      q: R`In how many ways can 5 people (A, B, C, D, E) stand in a straight line if A and B must NOT stand next to each other?`,
      o: [R`\(72\)`, R`\(48\)`, R`\(120\)`, R`\(96\)`, R`\(60\)`],
      e: R`Total arrangements \(= 5! = 120\).<br>Arrangements where A and B are together \(= 4! \times 2! = 24 \times 2 = 48\).<br>Not together \(= 120 - 48 = 72\).`
    },
    {
      q: R`How many distinct 3-digit numbers can be formed using only the digits 4 and 7?`,
      o: [R`\(8\)`, R`\(6\)`, R`\(9\)`, R`\(16\)`, R`\(4\)`],
      e: R`Each of the 3 digit positions has 2 choices (4 or 7): \(2 \times 2 \times 2 = 8\).`
    },
    {
      q: R`In how many ways can a fair coin land on exactly 3 heads when tossed 5 times?`,
      o: [R`\(10\)`, R`\(5\)`, R`\(15\)`, R`\(20\)`, R`\(32\)`],
      e: R`Choose 3 positions out of 5 for heads: \(^5C_3 = \frac{5 \times 4}{2} = 10\).`
    }
  ]
});

// 20. Probability
TOPICS.push({
  id: 'prob',
  ch: 'da',
  icon: '🎯',
  title: 'Probability',
  desc: 'Fundamental probability rules, independent events, complementary logic & card/dice scenarios.',
  learn: R`
<h3>Basic Probability</h3>
<BIG>\(P(E) = \frac{\text{Number of Favorable Outcomes}}{\text{Total Possible Outcomes}} \qquad (0 \le P(E) \le 1)\)</BIG>
<p><b>Complementary Rule:</b> \(P(\text{not } E) = 1 - P(E)\). (Very useful when asked for "at least one"!).</p>

<F t="Compound Events">
<ul>
  <li><b>Independent Events (AND rule):</b> Both happen:
    <BIG>\(P(A \text{ and } B) = P(A) \times P(B)\)</BIG>
  </li>
  <li><b>Mutually Exclusive Events:</b> Cannot happen together (\(P(A \cap B) = 0\)):
    <BIG>\(P(A \text{ or } B) = P(A) + P(B)\)</BIG>
  </li>
  <li><b>General OR Rule (Overlapping):</b>
    <BIG>\(P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)\)</BIG>
  </li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`A single integer is chosen at random from 1 to 100 inclusive. What is the probability that it is NOT a multiple of 5?`,
      o: [R`\(0.80\)`, R`\(0.20\)`, R`\(0.75\)`, R`\(0.85\)`, R`\(0.50\)`],
      e: R`Multiples of 5 from 1 to 100: \(100/5 = 20\).<br>\(P(\text{multiple of 5}) = \frac{20}{100} = 0.20\).<br>\(P(\text{not multiple of 5}) = 1 - 0.20 = 0.80\).`
    },
    {
      q: R`A fair 6-sided die is rolled twice. What is the probability of rolling an even number on the first roll, followed by an odd number on the second roll?`,
      o: [R`\(\frac{1}{4}\)`, R`\(\frac{1}{2}\)`, R`\(\frac{1}{6}\)`, R`\(\frac{1}{3}\)`, R`\(\frac{1}{8}\)`],
      e: R`\(P(\text{even}) = \frac{3}{6} = \frac{1}{2}\). \(P(\text{odd}) = \frac{3}{6} = \frac{1}{2}\).<br>Independent: \(\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}\).`
    },
    {
      q: R`A standard 6-sided die is rolled once. What is the probability that the outcome is either 1 OR a prime number?`,
      o: [R`\(\frac{2}{3}\)`, R`\(\frac{1}{2}\)`, R`\(\frac{5}{6}\)`, R`\(\frac{1}{3}\)`, R`\(1\)`],
      e: R`Primes on a die are \(\{2, 3, 5\}\).<br>Favorable outcomes are \(\{1, 2, 3, 5\}\) (4 outcomes).<br>\(P = \frac{4}{6} = \frac{2}{3}\).`
    },
    {
      q: R`2 boys and 4 girls stand in a line at random. What is the probability that the 2 boys do NOT stand next to each other?`,
      o: [R`\(\frac{2}{3}\)`, R`\(\frac{1}{3}\)`, R`\(\frac{1}{2}\)`, R`\(\frac{3}{4}\)`, R`\(\frac{5}{6}\)`],
      e: R`Total arrangements \(= 6!\).<br>Arrangements with boys together \(= 5! \times 2!\).<br>\(P(\text{together}) = \frac{5! \times 2}{6!} = \frac{2}{6} = \frac{1}{3}\).<br>\(P(\text{not together}) = 1 - \frac{1}{3} = \frac{2}{3}\).`
    },
    {
      q: R`The probability of rain tomorrow is 0.40, and the independent probability that a driver gets a flat tire is 0.30. What is the probability that NEITHER of these two events occurs?`,
      o: [R`\(0.42\)`, R`\(0.12\)`, R`\(0.30\)`, R`\(0.58\)`, R`\(0.70\)`],
      e: R`\(P(\text{no rain}) = 1 - 0.40 = 0.60\). \(P(\text{no flat}) = 1 - 0.30 = 0.70\).<br>Independent: \(0.60 \times 0.70 = 0.42\).`
    },
    {
      q: R`A bag contains 4 red, 5 green, and 6 blue marbles (total 15). If 2 marbles are drawn at random without replacement, what is the probability that BOTH are red?`,
      o: [R`\(\frac{2}{35}\)`, R`\(\frac{4}{15}\)`, R`\(\frac{1}{10}\)`, R`\(\frac{2}{15}\)`, R`\(\frac{4}{105}\)`],
      e: R`\(P = \frac{4}{15} \times \frac{3}{14} = \frac{2}{5 \times 7} = \frac{2}{35}\).`
    }
  ]
});

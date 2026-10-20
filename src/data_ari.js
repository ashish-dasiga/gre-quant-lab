/* ===== GRE Quant Lab — Arithmetic Topics ===== */
'use strict';

// 7. Number Classification, Place Value & Decimals
TOPICS.push({
  id: 'num',
  ch: 'ari',
  icon: '🔢',
  title: 'Number Types & Decimals',
  desc: 'Integers, parity rules, place values, rounding, scientific notation & powers of ten.',
  learn: R`
<h3>Classification of Numbers</h3>
<ul>
  <li><b>Natural Numbers:</b> \(1, 2, 3, 4, \dots\)</li>
  <li><b>Whole Numbers:</b> \(0, 1, 2, 3, \dots\) (includes \(0\))</li>
  <li><b>Integers:</b> \(\dots, -3, -2, -1, 0, 1, 2, 3, \dots\)</li>
  <li><b>Rational Numbers:</b> Can be expressed as \(\frac{p}{q}\) where \(p, q\) are integers and \(q \ne 0\).</li>
  <li><b>Irrational Numbers:</b> Non-terminating, non-repeating decimals (e.g., \(\sqrt{2}, \pi\)).</li>
</ul>

<NOTE>
<b>Special Properties of Zero (\(0\)):</b><br>
Zero is an <b>even integer</b>. It is neither positive nor negative. It is divisible by every non-zero integer.
</NOTE>

<F t="Parity Rules (Odd & Even)">
<ul>
  <li>\(\text{Even} \pm \text{Even} = \text{Even}\)</li>
  <li>\(\text{Odd} \pm \text{Odd} = \text{Even}\)</li>
  <li>\(\text{Even} \pm \text{Odd} = \text{Odd}\)</li>
  <li>\(\text{Even} \times \text{Any Integer} = \text{Even}\)</li>
  <li>\(\text{Odd} \times \text{Odd} = \text{Odd}\)</li>
</ul>
<p><i>Rule:</i> If the product of integers is <b>odd</b>, EVERY integer must be odd.</p>
</F>

<h3>Place Value & Rounding</h3>
<p>In the decimal \(1563.972\):</p>
<ul>
  <li>\(6\) is in the <b>tens</b> place (\(10^1\))</li>
  <li>\(9\) is in the <b>tenths</b> place (\(10^{-1}\))</li>
  <li>\(7\) is in the <b>hundredths</b> place (\(10^{-2}\))</li>
  <li>\(2\) is in the <b>thousandths</b> place (\(10^{-3}\))</li>
</ul>
<p><b>Rounding Rule:</b> Look at the digit immediately to the right. If \(\ge 5\), round up; if \(< 5\), round down.</p>
`,
  quiz: [
    {
      q: R`When rounded to the nearest tenth, \(2.3a5\) rounds to \(2.3\). Which of the following digits could be \(a\)?`,
      o: [R`\(0, 1, 2, 3, \text{ or } 4\)`, R`\(5, 6, 7, 8, \text{ or } 9\)`, R`\(0, 1, 2, \text{ or } 3\) only`, R`\(4\) only`, R`\(0\) only`],
      e: R`To round down to \(2.3\), the hundredths digit \(a\) must be strictly less than 5, so \(a \in \{0, 1, 2, 3, 4\}\).`
    },
    {
      q: R`What is the smallest integer \(k\) such that \(0.0123 \times 10^k > 1000\)?`,
      o: [R`\(5\)`, R`\(4\)`, R`\(6\)`, R`\(7\)`, R`\(3\)`],
      e: R`Rewrite \(0.0123\) as \(1.23 \times 10^{-2}\).<br>\(1.23 \times 10^{k - 2} > 10^3 \Rightarrow 10^{k - 2} > \frac{1000}{1.23} \approx 813\).<br>Since \(10^2 = 100 < 813\) and \(10^3 = 1000 > 813\), we need \(k - 2 \ge 3 \Rightarrow k \ge 5\).`
    },
    {
      q: R`Evaluate: \(\frac{4.5 \times 4 + 6}{0.003}\)`,
      o: [R`\(8000\)`, R`\(800\)`, R`\(80000\)`, R`\(2400\)`, R`\(80\)`],
      e: R`Numerator: \(4.5 \times 4 + 6 = 18 + 6 = 24\).<br>\(\frac{24}{0.003} = \frac{24000}{3} = 8000\).`
    },
    {
      q: R`Evaluate: \(0.0003 \times 4000\)`,
      o: [R`\(1.2\)`, R`\(12\)`, R`\(0.12\)`, R`\(0.012\)`, R`\(120\)`],
      e: R`\(3 \times 10^{-4} \times 4 \times 10^3 = 12 \times 10^{-1} = 1.2\).`
    },
    {
      q: R`Evaluate: \(6 \times 10^{-2} - 3 \times 10^{-3}\)`,
      o: [R`\(0.057\)`, R`\(0.57\)`, R`\(0.0057\)`, R`\(0.03\)`, R`\(0.0597\)`],
      e: R`\(0.060 - 0.003 = 0.057\).`
    },
    {
      q: R`Evaluate: \((0.000027)^{1/3}\)`,
      o: [R`\(0.03\)`, R`\(0.3\)`, R`\(0.003\)`, R`\(0.009\)`, R`\(0.09\)`],
      e: R`\(0.000027 = 27 \times 10^{-6}\).<br>\((27 \times 10^{-6})^{1/3} = 3 \times 10^{-2} = 0.03\).`
    },
    {
      q: R`In the decimal number \(253.846\), which digit is in the hundredths place?`,
      o: [R`\(4\)`, R`\(8\)`, R`\(6\)`, R`\(5\)`, R`\(3\)`],
      e: R`8 is tenths, 4 is hundredths, 6 is thousandths.`
    }
  ]
});

// 8. Fractions & Comparisons
TOPICS.push({
  id: 'frac',
  ch: 'ari',
  icon: '½',
  title: 'Fractions & Ratios',
  desc: 'Mixed numbers, fraction division, cross-multiplication, benchmarks & addition effects.',
  learn: R`
<h3>Operations with Fractions</h3>
<ul>
  <li><b>Mixed Numbers:</b> \(2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}\).</li>
  <li><b>Division by a Fraction:</b> Multiply by its reciprocal:
    <BIG>\(\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}\)</BIG>
  </li>
</ul>

<F t="Three Techniques for Comparing Fractions">
<ol>
  <li><b>Cross-Multiplication:</b> To compare \(\frac{a}{b}\) and \(\frac{c}{d}\), compare \(a \cdot d\) with \(b \cdot c\).<br>
    Example: \(\frac{4}{5}\) vs \(\frac{11}{13} \Rightarrow 4 \times 13 = 52\) vs \(5 \times 11 = 55 \Rightarrow \frac{11}{13} > \frac{4}{5}\).
  </li>
  <li><b>Benchmarking (against \(\frac{1}{2}\)):</b><br>
    \(\frac{127}{255} < \frac{1}{2}\) (since \(127 < 127.5\)), while \(\frac{140}{278} > \frac{1}{2}\) (since \(140 > 139\)).<br>
    Thus \(\frac{140}{278} > \frac{127}{255}\) immediately without long division!
  </li>
  <li><b>Effect of Adding a Positive Constant:</b><br>
    Adding \(k > 0\) to both numerator and denominator drives the fraction closer to \(1\):<br>
    If \(\frac{a}{b} < 1 \Rightarrow \frac{a + k}{b + k} > \frac{a}{b}\) (e.g., \(\frac{2}{3} \to \frac{12}{13} \approx 0.92 > 0.67\)).<br>
    If \(\frac{a}{b} > 1 \Rightarrow \frac{a + k}{b + k} < \frac{a}{b}\).
  </li>
</ol>
</F>
`,
  quiz: [
    {
      q: R`Evaluate and express as a fraction: \(2\frac{1}{3} + 6\frac{3}{5}\)`,
      o: [R`\(\frac{134}{15}\)`, R`\(\frac{124}{15}\)`, R`\(\frac{144}{15}\)`, R`\(8\frac{4}{8}\)`, R`\(\frac{44}{5}\)`],
      e: R`\(2\frac{1}{3} = \frac{7}{3} = \frac{35}{15}\), and \(6\frac{3}{5} = \frac{33}{5} = \frac{99}{15}\).<br>Sum \(= \frac{35 + 99}{15} = \frac{134}{15}\).`
    },
    {
      q: R`Evaluate: \(2\frac{1}{3} \times 6\frac{3}{5}\)`,
      o: [R`\(\frac{77}{5}\)`, R`\(\frac{134}{15}\)`, R`\(15\)`, R`\(\frac{88}{5}\)`, R`\(\frac{66}{5}\)`],
      e: R`\(\frac{7}{3} \times \frac{33}{5} = \frac{7 \times 11}{5} = \frac{77}{5}\).`
    },
    {
      q: R`Evaluate: \(\frac{1}{2} \div \frac{3}{4}\)`,
      o: [R`\(\frac{2}{3}\)`, R`\(\frac{3}{8}\)`, R`\(\frac{3}{2}\)`, R`\(\frac{1}{6}\)`, R`\(\frac{4}{5}\)`],
      e: R`\(\frac{1}{2} \times \frac{4}{3} = \frac{2}{3}\).`
    },
    {
      q: R`Evaluate: \(\frac{\frac{3}{7} + \frac{1}{3}}{\frac{2}{3} + \frac{2}{5}}\)`,
      o: [R`\(\frac{5}{7}\)`, R`\(\frac{7}{5}\)`, R`\(\frac{16}{21}\)`, R`\(\frac{16}{15}\)`, R`\(1\)`],
      e: R`Numerator: \(\frac{9 + 7}{21} = \frac{16}{21}\).<br>Denominator: \(\frac{10 + 6}{15} = \frac{16}{15}\).<br>\(\frac{16}{21} \div \frac{16}{15} = \frac{16}{21} \times \frac{15}{16} = \frac{15}{21} = \frac{5}{7}\).`
    },
    {
      q: R`Which fraction is strictly greater: \(\frac{127}{255}\) or \(\frac{140}{278}\)?`,
      o: [R`\(\frac{140}{278}\)`, R`\(\frac{127}{255}\)`, R`They are equal`, R`Cannot be determined`],
      fix: 1, a: 0,
      e: R`Benchmark to \(1/2\): \(\frac{127}{255} < \frac{1}{2}\) because \(127 \times 2 = 254 < 255\).<br>\(\frac{140}{278} > \frac{1}{2}\) because \(140 \times 2 = 280 > 278\).<br>Therefore, \(\frac{140}{278} > \frac{127}{255}\).`
    },
    {
      q: R`Arrange the fractions \(\frac{3}{13}, \frac{7}{19}, \frac{2}{5}, \frac{4}{11}\) in ascending order.`,
      o: [
        R`\(\frac{3}{13} < \frac{4}{11} < \frac{7}{19} < \frac{2}{5}\)`,
        R`\(\frac{3}{13} < \frac{7}{19} < \frac{4}{11} < \frac{2}{5}\)`,
        R`\(\frac{4}{11} < \frac{3}{13} < \frac{7}{19} < \frac{2}{5}\)`,
        R`\(\frac{2}{5} < \frac{7}{19} < \frac{4}{11} < \frac{3}{13}\)`,
        R`\(\frac{3}{13} < \frac{4}{11} < \frac{2}{5} < \frac{7}{19}\)`
      ],
      e: R`Decimal equivalents:<br>\(\frac{3}{13} \approx 0.231\)<br>\(\frac{4}{11} \approx 0.3636\)<br>\(\frac{7}{19} \approx 0.3684\)<br>\(\frac{2}{5} = 0.400\)<br>Thus: \(\frac{3}{13} < \frac{4}{11} < \frac{7}{19} < \frac{2}{5}\).`
    }
  ]
});

// 9. Factoring, Primes, HCF & LCM
TOPICS.push({
  id: 'factor',
  ch: 'ari',
  icon: '🌱',
  title: 'Factors, Primes, HCF & LCM',
  desc: 'Prime factorization ladder, highest common factor, least common multiple & number of divisors.',
  learn: R`
<h3>Prime Numbers</h3>
<p>A prime number is an integer \(> 1\) whose only positive divisors are \(1\) and itself.</p>
<NOTE>
\(2\) is the <b>smallest prime</b> and the <b>only even prime</b>. \(1\) is NEITHER prime nor composite.
</NOTE>

<F t="Product Rule for HCF & LCM">
For any two positive integers \(a\) and \(b\):
<BIG>\(\text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b\)</BIG>
<p>For consecutive integers \(n\) and \(n+1\), \(\text{HCF}(n, n+1) = 1\) (they are always co-prime).</p>
</F>

<F t="Number of Factors Formula">
If a number's prime factorization is \(N = p^a \cdot q^b \cdot r^c\):
<BIG>\(\text{Total Factors} = (a + 1)(b + 1)(c + 1)\)</BIG>
</F>

<EX t="Prime Factorization Ladder">
Find the prime factorization of \(2520\).
<SOL>
\(2520 = 10 \times 252 = (2 \times 5) \times (4 \times 63) = 2 \times 5 \times 2^2 \times (9 \times 7) = 2^3 \times 3^2 \times 5^1 \times 7^1\).<br>
The sum of prime exponents is \(3 + 2 + 1 + 1 = \mathbf{7}\).
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`What is the prime factorization of \(450\)?`,
      o: [R`\(2 \times 3^2 \times 5^2\)`, R`\(2^2 \times 3 \times 5^2\)`, R`\(2 \times 3 \times 5^3\)`, R`\(9 \times 50\)`, R`\(2 \times 15^2\)`],
      e: R`\(450 = 45 \times 10 = (9 \times 5) \times (2 \times 5) = 2 \times 3^2 \times 5^2\).`
    },
    {
      q: R`Find the HCF (GCF) and LCM of \(90\) and \(120\).`,
      o: [R`\(\text{HCF} = 30, \text{LCM} = 360\)`, R`\(\text{HCF} = 15, \text{LCM} = 360\)`, R`\(\text{HCF} = 30, \text{LCM} = 720\)`, R`\(\text{HCF} = 60, \text{LCM} = 360\)`, R`\(\text{HCF} = 10, \text{LCM} = 1080\)`],
      e: R`\(90 = 30 \times 3\), \(120 = 30 \times 4\). HCF is 30. LCM \(= 30 \times 3 \times 4 = 360\).`
    },
    {
      q: R`Find the HCF and LCM of \(112\) and \(32\).`,
      o: [R`\(\text{HCF} = 16, \text{LCM} = 224\)`, R`\(\text{HCF} = 32, \text{LCM} = 224\)`, R`\(\text{HCF} = 8, \text{LCM} = 448\)`, R`\(\text{HCF} = 16, \text{LCM} = 112\)`, R`\(\text{HCF} = 4, \text{LCM} = 224\)`],
      e: R`\(112 = 16 \times 7\) and \(32 = 16 \times 2\). HCF is 16. LCM \(= 16 \times 7 \times 2 = 224\).`
    },
    {
      q: R`If \(2520 = 2^a \cdot 3^b \cdot 5^c \cdot 7^d\), where \(a, b, c, d\) are positive integers, what is the value of \(a + b + c + d\)?`,
      o: [R`\(7\)`, R`\(8\)`, R`\(6\)`, R`\(9\)`, R`\(10\)`],
      e: R`\(2520 = 2^3 \cdot 3^2 \cdot 5^1 \cdot 7^1\).<br>\(a + b + c + d = 3 + 2 + 1 + 1 = 7\).`
    },
    {
      q: R`Which of the following numbers is a prime number?`,
      o: [R`\(101\)`, R`\(81\)`, R`\(91\)`, R`\(111\)`, R`\(117\)`],
      e: R`\(81 = 9^2\), \(91 = 7 \times 13\), \(111 = 3 \times 37\), \(117 = 9 \times 13\). Only 101 has no divisors other than 1 and itself.`
    },
    {
      q: R`How many positive divisors does the number \(10\) have?`,
      o: [R`\(4\)`, R`\(2\)`, R`\(3\)`, R`\(5\)`, R`\(8\)`],
      e: R`The divisors of 10 are \(1, 2, 5, 10\) (total of 4). Formula: \(10 = 2^1 \times 5^1 \Rightarrow (1+1)(1+1) = 4\).`
    }
  ]
});

// 10. Divisibility & Remainders
TOPICS.push({
  id: 'div',
  ch: 'ari',
  icon: '➗',
  title: 'Divisibility & Remainders',
  desc: 'Divisibility rules (3, 4, 6, 8, 9), Division Algorithm, remainder cycles & parity reasoning.',
  learn: R`
<h3>Divisibility Tests</h3>
<ul>
  <li><b>Divisible by 3:</b> Sum of digits is divisible by 3.</li>
  <li><b>Divisible by 9:</b> Sum of digits is divisible by 9.</li>
  <li><b>Divisible by 4:</b> Last two digits form a number divisible by 4.</li>
  <li><b>Divisible by 8:</b> Last three digits form a number divisible by 8.</li>
  <li><b>Divisible by 6:</b> Number is both divisible by 2 (even) AND 3.</li>
</ul>

<F t="The Division Algorithm">
For any integer dividend \(N\), divisor \(D\), quotient \(Q\), and remainder \(R\):
<BIG>\(N = Q \cdot D + R \qquad (0 \le R < D)\)</BIG>
<p><i>Key insight:</i> \(N - R\) is always an exact multiple of \(D\)!</p>
</F>

<EX t="Finding an Unknown Number">
A number \(N\) between 30 and 35 is such that \(N - 3\) is divisible by 5. What is \(N\)?
<SOL>
Multiples of 5 near this range are \(25, 30, 35\).<br>
If \(N - 3 = 30 \Rightarrow N = 33\).<br>
Check: \(30 < 33 < 35\) ✓. Thus \(N = \mathbf{33}\).
</SOL>
</EX>
`,
  quiz: [
    {
      q: R`If \(a\) and \(b\) are odd prime numbers greater than 2, which of the following CANNOT be a divisor of \(ab\)?`,
      o: [R`\(10\)`, R`\(15\)`, R`\(33\)`, R`\(55\)`, R`\(91\)`],
      e: R`Since \(a\) and \(b\) are odd, their product \(ab\) is an odd number. An odd number can NEVER have an even divisor like 10.`
    },
    {
      q: R`If the sum of three consecutive integers is odd, which of the following statements must be true?`,
      o: [
        R`The first and third integers are both even`,
        R`The first and third integers are both odd`,
        R`All three integers are odd`,
        R`The middle integer is even`,
        R`The product of the three integers is odd`
      ],
      e: R`Let the integers be \(n, n+1, n+2\). Their sum is \(3(n+1)\).<br>For this sum to be odd, \(n+1\) must be odd, which means \(n\) and \(n+2\) must both be even.`
    },
    {
      q: R`If integer \(a\) is divided by 3, the quotient is \(b\) and remainder is 2. If \(a\) is divided by 4, the quotient is \(c\) and remainder is 3. What is the relation between \(b\) and \(c\)?`,
      o: [R`\(3b = 4c + 1\)`, R`\(3b = 4c - 1\)`, R`\(3b + 2 = 4c\)`, R`\(4b = 3c + 1\)`, R`\(b = c + 1\)`],
      e: R`\(a = 3b + 2\) and \(a = 4c + 3\). Equating both: \(3b + 2 = 4c + 3 \Rightarrow 3b = 4c + 1\).`
    },
    {
      q: R`If integer \(n\) is not divisible by 5, is \(3n\) divisible by 10?`,
      o: [R`Never`, R`Always`, R`May be`, R`Cannot be determined`],
      fix: 1, a: 0,
      e: R`To be divisible by 10, a number must be divisible by 5. Since neither 3 nor \(n\) has 5 as a factor, \(3n\) cannot be divisible by 5, hence never divisible by 10.`
    },
    {
      q: R`If positive integer \(p\) is divisible by both 10 and 15, is \(p\) necessarily divisible by 6?`,
      o: [R`Yes`, R`No`, R`May be`],
      fix: 1, a: 0,
      e: R`\(\text{LCM}(10, 15) = 30\). Any multiple of 30 is divisible by 6 (since \(30 = 6 \times 5\)). Thus, always YES.`
    },
    {
      q: R`If \(a\) is an odd integer, can \(7a\) be divisible by 6?`,
      o: [R`No`, R`Yes`, R`May be`],
      fix: 1, a: 0,
      e: R`7 is odd, and \(a\) is odd, so \(7a\) is odd. An odd number can never be divisible by an even number like 6.`
    }
  ]
});

// 11. Sequences & Series
TOPICS.push({
  id: 'seq',
  ch: 'ari',
  icon: '⛓️',
  title: 'Sequences & Series',
  desc: 'Arithmetic progressions, geometric series, counting formulas & consecutive square patterns.',
  learn: R`
<h3>Arithmetic Progression (AP)</h3>
<p>An AP has a constant difference \(d\) between consecutive terms: \(a, a+d, a+2d, \dots\)</p>

<F t="AP Formulas">
<ul>
  <li><b>\(n^{\text{th}}\) Term:</b> \(a_n = a + (n - 1)d\)</li>
  <li><b>Sum of \(n\) Terms:</b> \(S_n = \frac{n}{2}(a + l) = \frac{n}{2}[2a + (n - 1)d]\)</li>
  <li><b>Average of an AP:</b> \(\text{Average} = \text{Median} = \frac{\text{First} + \text{Last}}{2}\)</li>
</ul>
</F>

<F t="Counting Numbers in a Range">
<ul>
  <li><b>FROM \(a\) TO \(b\) (inclusive):</b> Count \(= b - a + 1\)</li>
  <li><b>BETWEEN \(a\) and \(b\) (exclusive):</b> Count \(= b - a - 1\)</li>
  <li><b>Number of Multiples of \(k\) from \(a\) to \(b\):</b> \(\frac{\text{Last Multiple} - \text{First Multiple}}{k} + 1\)</li>
</ul>
</F>

<h3>Geometric Progression (GP)</h3>
<p>A GP has a constant ratio \(r\) between consecutive terms: \(a, ar, ar^2, \dots\)</p>
<BIG>\(a_n = a \cdot r^{n - 1}\)</BIG>
`,
  quiz: [
    {
      q: R`Let \(a\) be the sum of integers from 1 to 30 inclusive, and \(b\) be the sum of integers from 31 to 60 inclusive. What is the value of \(b - a\)?`,
      o: [R`\(900\)`, R`\(450\)`, R`\(300\)`, R`\(600\)`, R`\(930\)`],
      e: R`Pair corresponding terms: \((31-1) + (32-2) + \dots + (60-30) = 30 + 30 + \dots + 30\) (30 times).<br>\(b - a = 30 \times 30 = 900\).`
    },
    {
      q: R`How many multiples of 6 are there between 30 and 300, inclusive?`,
      o: [R`\(46\)`, R`\(45\)`, R`\(47\)`, R`\(50\)`, R`\(44\)`],
      e: R`First multiple is \(30 = 6 \times 5\). Last is \(300 = 6 \times 50\).<br>Count \(= 50 - 5 + 1 = 46\).`
    },
    {
      q: R`What is the sum of all multiples of 4 from 20 to 80 inclusive?`,
      o: [R`\(800\)`, R`\(750\)`, R`\(850\)`, R`\(1600\)`, R`\(700\)`],
      e: R`The sequence is \(20, 24, \dots, 80\). Number of terms \(= \frac{80 - 20}{4} + 1 = 16\).<br>\(S = \frac{16}{2}(20 + 80) = 8 \times 100 = 800\).`
    },
    {
      q: R`A city's population doubles every decade. If its population was 10 million in 1970, what was its population 50 years later in 2020?`,
      o: [R`\(320\text{ million}\)`, R`\(160\text{ million}\)`, R`\(500\text{ million}\)`, R`\(640\text{ million}\)`, R`\(250\text{ million}\)`],
      e: R`50 years \(= 5\) decades. The population doubles 5 times: \(10 \times 2^5 = 10 \times 32 = 320\text{ million}\).`
    },
    {
      q: R`A rubber ball is dropped from a height of 100 ft. After each bounce, it rebounds to a fixed fraction \(r\) of its previous height. If after 2 bounces it reaches 25 ft, what is \(r\)?`,
      o: [R`\(\frac{1}{2}\)`, R`\(\frac{1}{4}\)`, R`\(\frac{3}{4}\)`, R`\(\frac{1}{\sqrt{2}}\)`, R`\(\frac{2}{3}\)`],
      e: R`Height after 2 bounces \(= 100 \cdot r^2 = 25 \Rightarrow r^2 = \frac{25}{100} = \frac{1}{4} \Rightarrow r = \frac{1}{2}\).`
    },
    {
      q: R`Consider the squares of the first 10 positive integers: \(1^2, 2^2, 3^2, \dots, 10^2\). Let \(S\) be the sequence of differences between consecutive squares: \((2^2 - 1^2), (3^2 - 2^2), \dots\). What is the sum of the first 8 terms of \(S\)?`,
      o: [R`\(80\)`, R`\(64\)`, R`\(99\)`, R`\(81\)`, R`\(72\)`],
      e: R`Telescoping sum: \((2^2 - 1^2) + (3^2 - 2^2) + \dots + (9^2 - 8^2) = 9^2 - 1^2 = 81 - 1 = 80\).`
    }
  ]
});

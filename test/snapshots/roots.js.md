# Snapshot report for `test/roots.js`

The actual snapshot is saved in `roots.js.snap`.

Generated by [AVA](https://avajs.dev).

## Displays square roots

> Snapshot 1

    '<math><msqrt><mi>x</mi></msqrt></math>'

## Displays n-roots

> Snapshot 1

    '<math><mroot><mi>x</mi><mi>n</mi></mroot></math>'

## Omits brackets in roots

> Snapshot 1

    '<math><msqrt><mn>2</mn></msqrt></math>'

> Snapshot 2

    '<math><mroot><mn>2</mn><mn>3</mn></mroot></math>'

## Allows empty roots

> Snapshot 1

    '<math><msqrt><mrow></mrow></msqrt></math>'

> Snapshot 2

    '<math><mroot><mrow></mrow><mrow></mrow></mroot></math>'

> Snapshot 3

    '<math><mroot><mrow></mrow><mn>3</mn></mroot></math>'

## sqrt(2) ≈ 1.414

> Snapshot 1

    '<math><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414213562</mn></math>'

## Quadradic formula

> Snapshot 1

    '<math><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mo>-</mo><mi>b</mi></mrow><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mrow><mn>4</mn><mi>a</mi><mi>c</mi></mrow></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>'

## Golden ratio (algebraic form)

> Snapshot 1

    '<math><mi>φ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></math>'

## Plastic number

> Snapshot 1

    '<math><mi>ρ</mi><mo>=</mo><mfrac><mrow><mroot><mrow><mn>108</mn><mo>+</mo><mn>12</mn><msqrt><mn>69</mn></msqrt></mrow><mn>3</mn></mroot><mo>+</mo><mroot><mrow><mn>108</mn><mo>-</mo><mn>12</mn><msqrt><mn>69</mn></msqrt></mrow><mn>3</mn></mroot></mrow><mn>6</mn></mfrac></math>'

## Continued square root

> Snapshot 1

    '<math><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mo>⋯</mo></mrow></msqrt></mrow></msqrt></mrow></msqrt></mrow></msqrt></mrow></msqrt></mrow></msqrt></mrow></msqrt></math>'

// | Expression                   | Result    | Reasoning                         |
// | ---------------------------- | --------- | --------------------------------- |
// | `0 == false`                 | ✅ `true`  | Loose equality with coercion      |
// | `0 === false`                | ❌ `false` | Different types                   |
// | `1 == "1"`                   | ✅ `true`  | `"1"` coerced to number `1`       |
// | `1 === "1"`                  | ❌ `false` | Number vs. String                 |
// | `null == undefined`          | ✅ `true`  | Special case in JS                |
// | `null === undefined`         | ❌ `false` | Different types                   |
// | `'0' == false`               | ✅ `true`  | `'0'` and `false` both become `0` |
// | `'0' === false`              | ❌ `false` | String vs. Boolean                |
// | `[] == []` / `[] === []`     | ❌ `false` | Different array references        |
// | `{}` == `{}` / `{}` === `{}` | ❌ `false` | Different object references       |

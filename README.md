# [Vue-i18n-filters](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nguyenthanh1995/vue-i18n-filters/blob/master/LICENSE)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Vue-i18n-filters is a Vue `filter` mix-in for Vue-i18n, which allow you use Vue filter to declare Vue-i18n.

### Installation

```
npm install vue-i18n-filters
```

```JavaScript
import VueI18n from 'vue-i18n'
import VueI18nFilters from 'vue-i18n-filters'

Vue.use(VueI18n)
Vue.use(VueI18nFilters)
```

### Usage

*Vue filters `t`, `te`, `tc` will mixed-in,
equal effect with `$t`, `$te`, `$tc` of `vue-i18n`.*

*avoid to declare Vue filter name as `t`, `te` or `tc` in component when using Vue-i18n-filters.*
*differs from vue-i18n-filter.  vue-i18n-filters allow you to extend its own filters syntax with the selector*

```JavaScript
import VueI18n from 'vue-i18n'
import VueI18nFilters from 'vue-i18n-filters'                                                             Vue.use(VueI18n)                                     Vue.use(VueI18nFilters, {
   t: "translate"
})
```

now you can use

```vue.js
{{ 'Xin chào' | translate }} // hello
```

instead

```vue.js
{{ 'Xin chào' | t }} // hello
```

#### Basic usage

```vue.js
{{ '你好' | t }} // hello
```

### Example

```JavaScript
var message = {
    ja: {
        message: {
          hello: 'こんにちは、世界',
          greeting: 'やあ！',
          greeting2: 'やあ {name}！',
          apple: '林檎ってしまった | one 林檎 | {count}の林檎'
        }
    }
}
```

```vue.js
{{ 'message.hello' | t }} // こんにちは、世界
```

```vue.js
{{ 'message.greeting2' | t({ name: 'kazupon' }) }} // やあ kazupon！
```

```vue.js
{{ 'message.hello' | te('en') }} // true
```

```vue.js
{{ 'message.apple' | tc(0) }} // 林檎ってしまった
```

```vue.js
{{ 'message.apple' | tc(10, { count: 10 }) }} // 10の林檎
```

### filters chain example

*translate and capitalize*

```vue.js
{{ 'message.hello' | t | capitalize }}
```


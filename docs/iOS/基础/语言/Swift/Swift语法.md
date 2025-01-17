#### 类型

#### 1. 值类型

枚举（enum）:

Optional

结构体（struct）:

非集合类型:

Bool
Double
Float
Int
Character
String

集合类型:

Array
Dictionary
Set

#### 2. 引用类型

类（class）

#### 3. Swift 中的函数派发

<table><thead><tr><th align="center"></th><th align="center"><strong>直接派发</strong></th><th align="center"><strong>函数表派发</strong></th><th align="center"><strong>消息派发</strong></th></tr></thead><tbody><tr><td align="center">NSObject</td><td align="center">@nonobjc 或者 final 修饰的方法</td><td align="center">声明作用域中方法</td><td align="center">扩展方法及被 dynamic 修饰的方法</td></tr><tr><td align="center">Class</td><td align="center">不被 @objc 修饰的扩展方法及被 final 修饰的方法</td><td align="center">声明作用域中方法</td><td align="center">dynamic 修饰的方法或者被 @objc 修饰的扩展方法</td></tr><tr><td align="center">Protocol</td><td align="center">扩展方法</td><td align="center">声明作用域中方法</td><td align="center">@objc 修饰的方法或者被 objc 修饰的协议中所有方法</td></tr><tr><td align="center">Value Type</td><td align="center">所有方法</td><td align="center">无</td><td align="center">无</td></tr><tr><td align="center">其他</td><td align="center">全局方法，staic 修饰的方法；使用 final 声明的类里面的所有方法；使用 private 声明的方法和属性会隐式 final 声明；</td><td align="center"></td><td align="center"></td></tr></tbody></table>

#### 4、oc与swift调用

```
“如果你用 Swift 写的 class 是继承自 NSObject 的话，Swift 会默认自动为所有的非 private 的类和成员加上 @objc。这就是说，对一个 NSObject 的子类，你只需要导入相应的头文件就可以在 Objective-C 里使用这个类了”

摘录来自: 王巍 (onevcat). “Swifter - Swift 必备 Tips (第四版)。” Apple Books.
```
 

#### 参考

[01-📝Swift5常用核心语法|了解Swift【Swift简介、Swift的版本、Swift编译原理、几种函数派发】](https://juejin.cn/post/7119020967430455327)

[02-📝Swift5常用核心语法|基础语法【Playground、常量与变量、常见数据类型、字面量、元组、流程控制、函数、枚举、可选项、guard语句、区间】](https://juejin.cn/post/7119510159109390343#heading-66)

[Swift5常用核心语法|编程范式与Swift源码【从OC到Swift、函数式编程、面向协议编程、响应式编程、Swift源码分析】](https://juejin.cn/post/7253350009289424933)

[Swift 派发机制
](https://juejin.cn/post/6978870445416120350#heading-4/)

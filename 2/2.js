let path = require('path');
console.log(
  path.extname('index.html'),
  // 返回: '.html'

  path.extname('index.coffee.md'),
  // 返回: '.md'

  path.extname('index.'),
  // 返回: '.'

  path.extname('index'),
  // 返回: ''

  path.extname('.index'),
  // 返回: ''
)

/**
 * path <string>
 * 返回: <string>
 * path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束。 如果在 path 的最后一部分中没有 . ，或者如果 path 的基本名称（参阅 path.basename()）的第一个字符是 .，则返回空字符串。
 *
 */
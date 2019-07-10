# emmmmo-link

## commit-message

> commit message 规范示例：`feat 提交信息`

### Commit message 的作用

格式化的Commit message，有几个好处。

1. 提供更多的历史信息，方便快速浏览。
2. 可以过滤某些commit（比如文档改动），便于快速查找信息。
3. 可以直接从commit生成Change log。

### Commit message 的格式

一个完整的 commit message 应该包含以下三部分：type、subject

格式：<type> subject

type | 备注
---|---
feat | 新功能（feature）
fix | 修补bug
docs | 文档（documentation）
style | 格式（不影响代码运行的变动）
refactor | 重构（即不是新增功能，也不是修改bug的代码变动）
chore | 构建过程或辅助工具的变动
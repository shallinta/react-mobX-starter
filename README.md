# react-mobx-starter

## Css Modules 说明
- 全局样式书写时，用`:global`包裹；使用时，使用`className="class"`
- 局部样式直接书写，使用时，使用`styleName="class"`

## 关于git commit -m 规范提议
本工程使用了`standard-version`版本管理工具  
> 该工具将通过git commit -m 时填写的信息，自动升级version版本号，并自动生成 `CHANGELOG.md` 记录文件  
> 只有符合change-log规范要求的提交信息，才会被记录并作为升级version的依据，不符合的提交信息将被忽略  

提议规范：  
- 需求开发时，若一个功能完成，提交时用`feat([页面名/组件名/项目编号]): `开头；  
  若功能未完成，不重要的提交时不使用规范开头，重要的提交时使用`chore: `开头；  
  样式修改提交时使用`style: `开头。  
- 修复bug，全部修完并验证之后提交时使用`fix([页面名/组件名/项目编号]): `开头；  
  未全部修复完成时，不重要的提交不使用规范开头，重要的提交使用`chore: `开头。  
- 修改文档、注释等，提交时用`docs: `开头  
- 其他重要修改提交时都使用`chore: `开头，不使用`refactor` `perf` `test`。  
- feat、 fix 等后面的括号内表示scope，可以不写括号及内容，建议写上PMO编号。  
- 上线前最后一次提交前，使用`npm run release`命令，来自动升级version版本号并更新CHANGELOG.md，然后push。  

参考资料：  
- [Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)  
- [Standard Version](https://github.com/conventional-changelog/standard-version)


## 创建初始化新页面
方法1. 使用命令 `node newpage`，根据命令行交互提示逐步输入参数来创建。  
方法2. 使用命令+参数一次性创建，跳过交互步骤，命令如下：

```sh
# 一次性创建命令
node newpage {页面名} {页面标题}

# 示例： 创建 about 页面
node newpage about 关于
```

创建同一目录下多页面时，使用目录+页面名，例如：

``` sh
# 成员管理 列表页
node newpage members-manage/index

# 成员管理 详情页
node newpage members-manage/detail
```


---

## 目录结构

```
.
├── /assets/                            # 静态资源，如图片、字体
├── /config/                            # webpack配置文件
│   ├── /packing.js                     # 和构建工具相关的配置
│   ├── /webpack.build.babel.js         # webpack编译环境配置文件
│   └── /webpack.serve:dist.js          # webpack预览编译后结果的配置文件
├── /mock/                              # 模拟数据
│   ├── /api/                           # API接口类型模拟数据
│   └── /pages/                         # 页面初始化类型模拟数据
├── /prd/                               # 项目编译输出目录
├── /src/                               # 项目源码目录
│   ├── /entries/                       # webpack打包入口js
│   ├── /profiles/                      # 类似maven的profiles，设置不同环境下的配置
│   └── /templates/                     # 后端模版，如jade、smarty
├── .babelrc                            # babel配置
├── .editorconfig                       # 代码编辑器配置
├── .eslintrc                           # eslint配置
├── package.json
├── pom.xml                             # maven配置
└── README.md                   
```

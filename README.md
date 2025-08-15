# dev

```sh
# 删除本地分支
git branch --delete gh-pages
# 删除远程分支
git push origin --delete gh-pages

# 创建 tag
git tag v0.0.1
# 推送 tag
git push origin v0.0.1

# 删除本地 tag
git tag --delete v0.0.1
# 删除远程 tag
git push origin :refs/tags/v0.0.1
```

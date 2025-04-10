.PHONY: push degit

push:
	git add -A
	git commit -m "chore: Regular code maintenance"
	git push origin main
	git push mirror main

degit:
	# git push origin --delete gh-pages # 删除分支
	# git push mirror --delete gh-pages # 删除分支
	# git push origin :refs/tags/v0.0.1 # 删除远程 tag
	# git push mirror :refs/tags/v0.0.1 # 删除远程 tag
	rm -rf ./.git
	git init
	git remote add origin git@github.com:161043261/dev.git
	git remote add mirror git@github.com:tianchenghang/dev.git
	git add -A
	git commit -m "feat: Introduce new feature"
	git push -f origin main --set-upstream
	git push -f mirror main --set-upstream

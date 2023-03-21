# astro-notion-blog をサイト版に改造しました
![Screenshot 2023-03-22 at 1 40 50](https://user-images.githubusercontent.com/24947347/226691264-01132a3a-447f-434f-bda5-ae129228095f.png)

【変更点】ブログ用のディレクトリにサイト用のディレクトリを追加

- NotionDB の Static プロパティでブログ用かサイト用かを切り分け
- link to page ブロックを入れることでサイト内の遷移可
  - ただし、サイトページからブログページへの遷移はできないので要改造
- 全ページ Notion で編集可
- DB の数は本家と同じなため面倒な環境変数は増やさずスッキリ

【注意点】骨組みのみを提案

- 細かい部分は各自で改造してください
- なるべく自走して作れるようワークシート型 Notion テンプレを作成する予定です

## astro-notion-blog で必要な設定は全て済ませておいてください。

[必要な設定まとめ](https://sparkling-cinnamon-3f9.notion.site/_-10c175455b7b49a48f323d399f02abde)

## サイト版テンプレート

https://sparkling-cinnamon-3f9.notion.site/294442966e7d4f93919cf642a4171960?v=321cf19d5c344ddeac02d23b9b9367dd
![Screenshot 2023-03-21 at 1 59 37](https://user-images.githubusercontent.com/24947347/226691302-611d5771-c2e8-43cc-bb6b-99463d65db07.png)

## プロパティ追加のヒント

![Screenshot 2023-03-22 at 2 24 20](https://user-images.githubusercontent.com/24947347/226691817-5052b258-d26d-4864-8f3f-443ac3b72ecd.png)

PR02,04,05,06を参照ください
![Screenshot 2023-03-22 at 2 26 22](https://user-images.githubusercontent.com/24947347/226692275-e704ac75-7b55-4758-9d83-a2c83087fc75.png)

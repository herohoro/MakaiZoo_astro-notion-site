# astro-notion-blog をサイト版に改造しました

![Screenshot 2023-03-22 at 18 29 29](https://user-images.githubusercontent.com/24947347/226860304-edacc25b-792e-4a17-aeb9-25aca18a8c84.png)
![Screenshot 2023-03-22 at 18 27 59](https://user-images.githubusercontent.com/24947347/226860340-a095de06-a8ae-4942-9b5b-b1e1687903e5.png)

## 【変更点】ブログ用のディレクトリにサイト用のディレクトリを追加

- NotionDB の Static プロパティでブログ用かサイト用かを切り分け
- link to page ブロックを入れることでサイト内の遷移可
  - ただし、サイトページからブログページへの遷移はできないので要改造
- 全ページ Notion で編集可

## 【注意点】骨組みのみを提案

- 細かい部分は各自で改造してください
- なるべく自走して作れるようワークシート型 Notion テンプレを作成する予定です
- 私は非エンジニアなため新たな機能を追加するほどのスキルはありません
  - 本家のアイディアをサイト版に落とし込んだのがこのリポジトリです
  - メンテナンスは続けますが、本家のサポートがあってこそです。

## astro-notion-blog で必要な設定は全て済ませておいてください。

[必要な設定まとめ](https://sparkling-cinnamon-3f9.notion.site/_-10c175455b7b49a48f323d399f02abde)

# サイト版テンプレート

https://sparkling-cinnamon-3f9.notion.site/DB-DB-Page-7c44e29606454cfa9785eb84f3fb4055

## プロパティ追加のヒント

![Screenshot 2023-03-22 at 2 24 20](https://user-images.githubusercontent.com/24947347/226691817-5052b258-d26d-4864-8f3f-443ac3b72ecd.png)

[PR02](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/2),[PR04](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/4),[PR05](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/5),[PR06](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/26)を参照ください
![Screenshot 2023-03-22 at 2 26 22](https://user-images.githubusercontent.com/24947347/226692275-e704ac75-7b55-4758-9d83-a2c83087fc75.png)

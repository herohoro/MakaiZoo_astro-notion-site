# astro-notion-blog をサイト版に改造しました
![Screenshot 2023-03-22 at 18 29 29](https://user-images.githubusercontent.com/24947347/226860304-edacc25b-792e-4a17-aeb9-25aca18a8c84.png)
![Screenshot 2023-03-22 at 18 27 59](https://user-images.githubusercontent.com/24947347/226860340-a095de06-a8ae-4942-9b5b-b1e1687903e5.png)

![Screenshot 2023-03-22 at 18 31 58](https://user-images.githubusercontent.com/24947347/226861081-9e43598b-01df-43e8-9ec9-d143e8504ea5.png)

## 【変更点】ブログ用のディレクトリにサイト用のディレクトリを追加

- NotionDB の Static プロパティでブログ用かサイト用かを切り分け
- link to page ブロックを入れることでサイト内の遷移可
  - ただし、サイトページからブログページへの遷移はできないので要改造
- 全ページ Notion で編集可
- DB の数は本家と同じなため面倒な環境変数は増やさずスッキリ

## 【注意点】骨組みのみを提案

- 細かい部分は各自で改造してください
- なるべく自走して作れるようワークシート型 Notion テンプレを作成する予定です
- 私は非エンジニアなため新たな機能を追加するほどのスキルはありません
  - 本家のアイディアをサイト版に落とし込んだのがこのリポジトリです
  - メンテナンスは続けますが、本家のサポートがあってこそです。

## astro-notion-blog で必要な設定は全て済ませておいてください。

[必要な設定まとめ](https://sparkling-cinnamon-3f9.notion.site/_-10c175455b7b49a48f323d399f02abde)

# サイト版テンプレート

https://sparkling-cinnamon-3f9.notion.site/294442966e7d4f93919cf642a4171960?v=321cf19d5c344ddeac02d23b9b9367dd

## NotionDB の扱いの違い
![Screenshot 2023-03-22 at 18 21 50](https://user-images.githubusercontent.com/24947347/226858733-291651e7-5281-495d-9b2d-bd609887ae09.png)

### 必ず入力

Dirプロパティによって分岐させています。  
必ず選択してください
![Screenshot 2023-03-22 at 18 43 16](https://user-images.githubusercontent.com/24947347/226864166-65d2996e-2ebd-4a31-9c79-53d6c2bf72b9.png)


![Screenshot 2023-03-22 at 18 22 10](https://user-images.githubusercontent.com/24947347/226858772-ba0b17ea-0f01-4d14-90ce-b90e9e5bc63f.png)

## Homeは１つのみ

複数選択するとエラーになるかもしれません
![Screenshot 2023-03-22 at 18 46 35](https://user-images.githubusercontent.com/24947347/226864895-cf52b780-11f9-45c7-9321-aaf34db9fe32.png)

## プロパティ追加のヒント

![Screenshot 2023-03-22 at 2 24 20](https://user-images.githubusercontent.com/24947347/226691817-5052b258-d26d-4864-8f3f-443ac3b72ecd.png)

[PR02](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/2),[PR04](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/4),[PR05](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/5),[PR06](https://github.com/herohoro/MakaiZoo_astro-notion-site/pull/26)を参照ください
![Screenshot 2023-03-22 at 2 26 22](https://user-images.githubusercontent.com/24947347/226692275-e704ac75-7b55-4758-9d83-a2c83087fc75.png)

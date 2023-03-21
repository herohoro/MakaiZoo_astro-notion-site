# astro-notion-blog をサイト版に改造しました

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

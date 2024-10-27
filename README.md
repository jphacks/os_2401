# 国会劇場

![diet-main](https://github.com/user-attachments/assets/020c55ca-4fab-462c-acb2-6097a91e7056)
![diet-image](https://github.com/user-attachments/assets/a18de557-85f2-4c95-bfb9-945a00e6796c)

## 製品概要

昨今の政治では若者離れ問題がある。そのため選挙権を持たない 0 歳〜17 歳までの若者を中心に 28 歳〜40 歳と選挙権はあるが政治離れしている中年層に対して簡単に楽しんで国会会議などで行われていることを知ってもらおうと開発することにしました。

[デモ](https://xgf.nu/PMVoo)

[作品URL(現在内閣委員会の会議のみ正しく動きます)](https://jp-diet-theater.noonyuu.com/agenda)

### 背景(製品開発のきっかけ、課題等）

政治って難しくね？何言ってるかさっぱりわからないし面白くもない。<br>
そこで「興味」「面白くない」「難しい」という部分に焦点を当て開発した。<br>

### 製品説明（具体的な製品の説明）

国立国会図書館が公開している国会議事録 API から議事録を取得しそれらを OpenAI を使用して簡単に要約してアニメのようにポップに表現する
政治をただ普通に理解してもらうつもりはありません。楽しくわかりやすく理解し、政治へのハードルを下げ、とくに若い世代が選挙に参加する喜びを感じられるような仕組みや機能を自分たちならではの発想を盛り込み、継続的に政治に関心を持てる作品に仕上げていきます。

### 特長

#### 1. 国会会議の内容を要点を押さえ短く楽しく知ることができる

#### 2. 難しい用語は解説付き&クイズ機能

#### 3. さまざまなツッコミを入れることで飽きさせない

### 解決できること

- ネットやニュースでは「切り取り記事」「難易度が高い」「興味関心がない」といった問題を解決し、選挙へ行き投票することでサイト内限定ボイスを獲得できることができるので投票を促すことが可能

### 今後の展望

- 興味関心に合わせた複数の要約モード

- 気づいたら見ていて気づいたら少し政治に詳しくなってた！を目指します

- クイズ機能の実装

- 若者の声をもう少し正確に実装

### 注力したこと（こだわり等）

- オリジナルの演出や独自で作成したボイス
- 今までにない世界観

## 開発技術

### 活用した技術

#### API・データ

- 国立国会図書館・国会議事録 API
- OpenAI

#### フレームワーク・ライブラリ・モジュール

- React
- Gin
<!--

#### デバイス

-
- -->

### 独自技術

#### ハッカソンで開発した独自機能・技術

- 音声
- 劇の自動再生
- 若者の意見導入
<!-- * 独自で開発したものの内容をこちらに記載してください

* 特に力を入れた部分をファイルリンク、または commit_id を記載してください。 -->

#### 力を入れた

- (commit_id:415d26d・29748de)見やすくしてもらうために自動再生を入れたがレンダリングや細かい使用に苦戦した

※ mainブランチは事前開発が主となっており、今回の開発期間の内容は一部を省きdevブランチです

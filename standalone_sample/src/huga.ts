// コンストラクタで受け取った値をログに出力するメソッド
// 実行するたびにカウントアップして, n回目と出力
export class Huga {
  private cnt = 0;

  constructor(private readonly value: string) {}

  public message() {
    console.log(`hugahuga:${this.value} ${++this.cnt}回目`);
  }
}

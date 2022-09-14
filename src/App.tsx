import { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

/**
 * 配列をシャッフルして返却する関数
 * @param array
 * @returns shuffled
 */
const shuffle = <T,>([...array]: T[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  // ルーレットの幅
  const [range, setRange] = useState(10);

  // range変更ハンドラ
  const handleChangeRange = useCallback(
    ({ target: { value } }: { target: { value: string } }) =>
      setRange(Number(value)),
    []
  );

  // ルーレットのデータ
  const [data, setData] = useState<WheelData[]>([]);

  // ルーレット生成ボタンハンドラ
  const handleClickGenerate = useCallback(
    () =>
      setData(
        // 配列をシャッフルして
        shuffle(list)
          // rangeで指定した数抽出する
          .slice(0, range)
          .map((value) => ({ option: value }))
      ),
    [range]
  );

  // ルーレットの開始を管理する
  const [start, setStart] = useState(false);
  // ルーレットの当たり
  const [prize, setPrize] = useState<number>(0);

  // SPINボタンクリックハンドラ
  const handleClickSpin = useCallback(() => {
    // ルーレット開始
    setStart((prev) => !prev);
    // 当たりを設定する
    setPrize(Math.floor(Math.random() * data.length));
  }, [data]);

  return (
    <Container>
      {/* タイトル */}
      <h1>ルーレットの旅</h1>
      <h2>東京メトロ・都営地下鉄編</h2>
      <Form>
        {/* いくつルーレットに入れるか */}
        <Form.Group>
          <Form.Label>ルーレットに入れる個数:{range}個</Form.Label>
          <Form.Range
            value={range}
            onChange={handleChangeRange}
            min={3}
            max={20}
          />
        </Form.Group>
        {/* ルーレット再生成ボタン */}
        <Button
          size="sm"
          disabled={list.length === 0}
          onClick={handleClickGenerate}
        >
          ルーレット生成
        </Button>
      </Form>
      {/* ルーレット */}
      {data.length > 0 && (
        <Form.Group className="overflow-hidden">
          <Wheel
            data={data}
            mustStartSpinning={start}
            prizeNumber={prize}
            backgroundColors={[
              "#87cefa",
              "#f0e68c",
              "#ffc0cb",
              "#ffdab9",
              "#dcdcdc",
            ]}
          />
          <Button onClick={handleClickSpin}>SPIN</Button>
        </Form.Group>
      )}
      <footer className="mt-3">
        <a
          target="_blank"
          href="https://icons8.com/icon/455ETTSXwfZM/roulette-wheel"
        >
          Roulette Wheel
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </footer>
    </Container>
  );
}

// 駅名
const list = [
  "一之江駅",
  "三ノ輪駅",
  "三田駅",
  "三越前駅",
  "上野広小路駅",
  "上野御徒町駅",
  "上野駅",
  "両国駅",
  "中井駅",
  "中延駅",
  "中目黒駅",
  "中野坂上駅",
  "中野富士見町駅",
  "中野新橋駅",
  "中野駅",
  "乃木坂駅",
  "九段下駅",
  "二重橋前駅",
  "五反田駅",
  "京橋駅",
  "人形町駅",
  "代々木上原駅",
  "代々木公園駅",
  "代々木駅",
  "仲御徒町駅",
  "住吉駅",
  "入谷駅",
  "八丁堀駅",
  "六本木一丁目駅",
  "六本木駅",
  "内幸町駅",
  "勝どき駅",
  "北千住駅",
  "北参道駅",
  "北綾瀬駅",
  "千川駅",
  "千石駅",
  "千駄木駅",
  "半蔵門駅",
  "南千住駅",
  "南砂町駅",
  "南行徳駅",
  "南阿佐ケ谷駅",
  "原木中山駅",
  "和光市駅",
  "四ツ谷駅",
  "四谷三丁目駅",
  "国会議事堂前駅",
  "国立競技場前駅",
  "地下鉄成増駅",
  "地下鉄赤塚駅",
  "外苑前駅",
  "大島駅",
  "大手町駅",
  "大門駅",
  "妙典駅",
  "宝町駅",
  "小伝馬町駅",
  "小川町駅",
  "小竹向原駅",
  "岩本町駅",
  "巣鴨駅",
  "市ケ谷駅",
  "平和台駅",
  "広尾駅",
  "後楽園駅",
  "御成門駅",
  "御茶ノ水駅",
  "志村三丁目駅",
  "志村坂上駅",
  "志茂駅",
  "恵比寿駅",
  "戸越駅",
  "押上駅",
  "新中野駅",
  "新大塚駅",
  "新宿三丁目駅",
  "新宿御苑前駅",
  "新宿西口駅",
  "新宿駅",
  "新富町駅",
  "新御徒町駅",
  "新御茶ノ水駅",
  "新木場駅",
  "新板橋駅",
  "新橋駅",
  "新江古田駅",
  "新高円寺駅",
  "新高島平駅",
  "方南町駅",
  "日本橋駅",
  "日比谷駅",
  "早稲田駅",
  "明治神宮前駅",
  "春日駅",
  "曙橋駅",
  "月島駅",
  "有楽町駅",
  "木場駅",
  "末広町駅",
  "本八幡駅",
  "本所吾妻橋駅",
  "本蓮沼駅",
  "本郷三丁目駅",
  "本駒込駅",
  "東中野駅",
  "東京駅",
  "東大前駅",
  "東大島駅",
  "東新宿駅",
  "東日本橋駅",
  "東池袋駅",
  "東銀座駅",
  "東陽町駅",
  "東高円寺駅",
  "板橋区役所前駅",
  "板橋本町駅",
  "根津駅",
  "桜田門駅",
  "森下駅",
  "水天宮前駅",
  "水道橋駅",
  "氷川台駅",
  "永田町駅",
  "汐留駅",
  "江戸川橋駅",
  "池袋駅",
  "泉岳寺駅",
  "浅草橋駅",
  "浅草駅",
  "浜町駅",
  "浦安駅",
  "淡路町駅",
  "清澄白河駅",
  "渋谷駅",
  "湯島駅",
  "溜池山王駅",
  "牛込柳町駅",
  "牛込神楽坂駅",
  "王子神谷駅",
  "王子駅",
  "瑞江駅",
  "田原町駅",
  "町屋駅",
  "白山駅",
  "白金台駅",
  "白金高輪駅",
  "目黒駅",
  "神保町駅",
  "神楽坂駅",
  "神田駅",
  "神谷町駅",
  "秋葉原駅",
  "稲荷町駅",
  "竹橋駅",
  "築地市場駅",
  "築地駅",
  "篠崎駅",
  "綾瀬駅",
  "練馬春日町駅",
  "練馬駅",
  "船堀駅",
  "芝公園駅",
  "若松河田駅",
  "茅場町駅",
  "茗荷谷駅",
  "荻窪駅",
  "菊川駅",
  "落合南長崎駅",
  "落合駅",
  "葛西駅",
  "蓮根駅",
  "蔵前駅",
  "虎ノ門駅",
  "行徳駅",
  "表参道駅",
  "西ケ原駅",
  "西台駅",
  "西大島駅",
  "西巣鴨駅",
  "西新宿五丁目駅",
  "西新宿駅",
  "西日暮里駅",
  "西早稲田駅",
  "西船橋駅",
  "西葛西駅",
  "西馬込駅",
  "西高島平駅",
  "要町駅",
  "護国寺駅",
  "豊島園駅",
  "豊洲駅",
  "赤坂見附駅",
  "赤坂駅",
  "赤羽岩淵駅",
  "赤羽橋駅",
  "辰巳駅",
  "都庁前駅",
  "銀座一丁目駅",
  "銀座駅",
  "錦糸町駅",
  "門前仲町駅",
  "雑司が谷駅",
  "霞ケ関駅",
  "青山一丁目駅",
  "飯田橋駅",
  "馬喰横山駅",
  "馬込駅",
  "駒込駅",
  "高島平駅",
  "高田馬場駅",
  "高輪台駅",
  "麹町駅",
  "麻布十番駅",
  "光が丘駅",
];

export default App;

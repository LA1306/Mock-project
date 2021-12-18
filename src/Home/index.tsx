import Navigation from "../RoomSearch/Navigation";
import { color } from "../shared/utils/styles"

export default function Home() {

  const colorPalette = (color: any) => {
    const colorList = [];
    for (let key in color) {
      colorList.push(
        <div key={key} style={{ background: color[key] }}>
          {key + ': ' + color[key]}
        </div>
      )
    }
    return colorList;
  }

  return (
    <>
      <Navigation />
      {colorPalette(color)}
      <h1>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h1>
      <h2>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h2>
      <h3>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h3>
      <h4>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h4>
      <h5>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h5>
      <h6>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</h6>
      <div>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</div>
      <p>Mayli Homestay Đà Lạt - Phòng đôi Garden view - Khu biệt thự độc lập - 5p tới trung tâm</p>
    </>
  )
}
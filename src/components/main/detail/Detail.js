import React, {useState} from "react";
import ListProduct from "../../../data.json";
import "./detail.css";



function Detail() {

  let state='';
  ListProduct.forEach(e => {
      if(e.id === localStorage.getItem("id")) {
        state = e.images[0];
      }
  });
  let [image , setImage] = useState(state);
  return (
    <>
      {ListProduct.map((prd) => {
        if (prd.id === localStorage.getItem("id")) {
          return (
            <div className="detail">
              <div className="slide">
                <img alt=""
                  className="slide__image"
                  src={image}
                ></img>
                <div className="input__img">
                  {prd.images.map((img => {
                      return (
                        <input checked={image === img ? 'checked' :''} onChange={() => {setImage(img)}} type="radio" name="img" value={img}></input>
                      );
                    }))}
                </div>
              </div>
              
              <div className="grid wide detail__top">
                <div className="detail__min">
                  <h1 className="detail__name">{prd.title}</h1>
                  <p className="detail__text">
                    Địa chỉ: {prd.address}
                  </p>
                  <p className="detail__text">Diện tích: {prd.area}m2</p>
                </div>
                <h1 className="detail__price detail__min">{prd.price.from} - {prd.price.to} tỷ</h1>
              </div>
              <div className="grid wide detail__min">
                <h2 className="detail__text-h2">Thông tin chi tiết</h2>
                <p className="detail__text">
                  {prd.description}
                </p>
                <p className="detail__text">
                  {" "}
                  I. VỊ TRÍ DỰ ÁN <br /> Tọa lạc tại số 4A Huỳnh Thúc Kháng kéo
                  dài, Láng Thượng, Đống Đa,Hateco Laroma kết nối trong tích tắc
                  đến các tuyến giao thông huyết mạch của Thủ đô như Láng,
                  Nguyễn Chí Thanh, Láng Hạ, Thái Hà, Kim Mã, Văn Cao.
                </p>
                <p className="detail__text">
                  Dễ dàng di chuyển đến các khu vực trung tâm hành chính bằng
                  các tuyến đường lớn như: Nguyễn Chí Thanh, Láng Hạ, Giảng Võ,
                  Thái Hà,...
                </p>
                <p className="detail__text">
                  {" "}
                  Gần các trung tâm thương mại lớn, dịch vụ vui chơi giải trí:
                  TTTM Vincom Nguyễn Chí Thanh, Rạp chiếu phim Quốc Gia, Trung
                  tâm nghệ thuật Âu Cơ,..Nằm trong khu vực dễ dàng kết nối với
                  hệ thống hồ điều hoà xung quanh: Hồ Đống Đa, hồ Thành Công,...
                </p>
                <p className="detail__text">
                  {" "}
                  Trung tâm của lõi thủ đô Hà Nội như: quận Đống Đa, quận Ba
                  Đình, quận Hoàn Kiếm,...
                </p>
                <p className="detail__text">
                  {" "}
                  Gần các bệnh viện lớn: Bệnh viện Việt Pháp, Viện Nhi Trung
                  Ương, Viện Nội Tiết,...
                </p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
export default Detail;

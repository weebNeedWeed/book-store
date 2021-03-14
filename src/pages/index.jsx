import React from "react";
import NavBar from "./../layouts/NavBar/NavBar.index";
import Image from "next/image";
import Button from "./../components/Button/Button.index";
import Footer from "../layouts/Footer/Footer.index";

function Home() {
  return (
    <div className="min-h-screen font-mono">
      <NavBar />
      <div className="container bg-theme-color-1 m-0 min-w-full">
        <div className="min-w-full min-h-screen md:min-h-300 sm:min-h-300 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
            <div className="rounded border-2 border-solid border-white px-2 py-2">
              <Image
                src="/images/book-image-1.jpg"
                alt="Book i -1"
                width="3500"
                height="5000"
              />
            </div>
            <div className="ml-20">
              <p className="text-black font-bold text-xl italic text-justify">
                Nếu biết trăm năm là hữu hạn, cớ gì ta không sống thật sâu…”
                Nhịp sống hiện đại khiến chúng ta làm việc gì cũng vội vả chưa
                bao giờ chậm rãi thưởng thức điều gì, cũng giống như một cuộc
                chạy đua của mỗi người trên hành trình sống của mình để rồi bỗng
                có lúc dừng chân lại suy nghĩ để ta đều thốt lên hai chữ “giá
                như…”...
              </p>
              <div className="float-left mt-5">
                <Button withLinkComponent={true} href="/heleo">
                  Xem them
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-900 h-1 border-0 w-10/12 m-auto" />
        <div className="min-w-full min-h-screen md:min-h-300 sm:min-h-300 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
            <div className="rounded border-2 border-solid border-white px-2 py-2">
              <Image
                src="/images/book2.png"
                alt="Book i -1"
                width="3500"
                height="5000"
              />
            </div>
            <div className="ml-20">
              <p className="text-black font-bold text-xl italic text-justify">
                Mitsuha là nữ sinh trung học sống ở vùng quê hẻo lánh. Một ngày
                nọ, cô mơ thấy mình ở Tokyo trong một căn phòng xa gặp những
                người bạn chưa từng quen biết. Trong khi đó ở một nơi khác,
                Taki, một nam sinh từ lúc hai con người xa lạ ấy gặp nhau, bánh
                xe số phận bắt đầu chuyển động.
              </p>
              <div className="float-left mt-5">
                <Button withLinkComponent={true} href="/heleo">
                  Xem them
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-900 h-1 border-0 w-10/12 m-auto" />
        <div className="min-w-full min-h-screen md:min-h-300 sm:min-h-300 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
            <div className="rounded border-2 border-solid border-white px-2 py-2">
              <Image
                src="/images/book3.png"
                alt="Book i -1"
                width="3500"
                height="5000"
              />
            </div>
            <div className="ml-20">
              <p className="text-black font-bold text-xl italic text-justify">
                Vì một sự cố tình cờ, Hina được tạo hóa ban cho năng lực đặc
                biệt: làm nắng. Năng lực ấy càng thêm nhiệm màu khi đặt vào bối
                cảnh Nhật Bản hứng mưa triền miên, mưa đến mức vòm trời âm u trở
                thành cơm bữa, nướfsdfdsfslạc có bi, trong hạnh đẵng cách xa.
              </p>
              <div className="float-left mt-5">
                <Button withLinkComponent={true} href="/heleo">
                  Xem them
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

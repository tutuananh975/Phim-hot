import MainLayout from "@/pages/layout/MainLayout";
import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";

const Details = () => {
  return (
    <MainLayout>
      <div className="p-4 w-3/4 mx-auto">
        <div className="flex">
          <div className="w-2/4 p-2">
            <img
              src="https://ghienphim3.net/uploads/tieng-thet-6-scream-VI.jpg?v=1682520715"
              alt="Picture of the author"
              className="w-full"
            />
            <div className="flex justify-center p-2">
              <AiFillEye className="text-orange-500 text-xl" />
              <p className="text-sm font-medium text-gray-500 pl-1">400</p>
            </div>
          </div>
          <div>
            <div className="border-b-2 border-gray-600 p-4">
              <div className="text-2xl font-bold font-mono">Tiếng Thét 6</div>
              <div className="text-lg text-gray-500 font-bold font-serif">
                Scream Vi
              </div>
            </div>
            <div className="p-4">
              <div className="font-semibold py-1">Thời Lượng: 123 Phút</div>
              <div className="font-semibold py-1">Năm Phát Hành: 2023</div>
              <div className="font-semibold py-1">
                Đạo Diễn: Matt Bettinelli-Olpin | Tyler Gillett
              </div>
              <div className="font-semibold py-1">
                Diễn Viên: Melissa Barrera | Jenna Ortega | Jasmin Savoy Brown |
                Mason Gooding | Roger Jackson | Courteney Cox | Dermot Mulroney
                | Jack Champion | Josh Segarra | Liana Liberato
              </div>
              <div className="font-semibold py-1">Quốc Gia: Âu Mỹ</div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <button className="border-2 px-4 py-2 rounded-3xl font-medium text-sm">
            Trailler
          </button>
          <Link href={'/details/Watching'} className="bg-orange-500 border-2 border-orange-500 px-4 py-2 rounded-3xl ml-3 font-medium text-sm">
            Xem Phim
          </Link>
        </div>
        <div>
          <div className="font-medium text-xl p-4 mt-4">
            <span className="text-orange-500">/</span> Nội dung phim
          </div>
          <div>
            Bộ phim tiếp tục câu chuyện về cậu thiếu niên Billy Batson, khi đọc
            thuộc lòng từ ma thuật "SHAZAM!" được biến thành Siêu anh hùng thay
            thế bản ngã trưởng thành của anh ấy, Shazam.
          </div>
        </div>
        <div className="font-medium text-xl p-4 mt-12">
          <span className="text-orange-500">/</span> Bình luận
        </div>
      </div>
    </MainLayout>
  );
};

export default Details
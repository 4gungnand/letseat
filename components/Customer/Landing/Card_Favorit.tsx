import Link from "next/link";
import Image from "next/image";
interface CardMenuProps {
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

export default function Card_Favorit({
  nama,
  desk,
  harga,
  imgURL,
}: CardMenuProps) {
  return (
    <>
      <Link href="#">
        <div
          className="flex bg-[#FFFFFF] w-[328px] h-[120px] shadow-lg border
        gap-x-[14px] relative rounded-xl"
        >
          <Image
            src={imgURL}
            alt="makanan favorit"
            className="rounded-xl"
            width={130}
            height={120}
          />

          <div className="flex flex-col">
            <div className="flex justify-between items-center w-[151px] mt-3">
              {/* Tag Makanan */}
              <div
                className="h-[16px] flex justify-center w-fit 
                          border-[#EC7505] bg-[#EC7505] px-2 rounded-xl"
              >
                <h1 className="text-white font-poppins font-semibold text-[10px]">
                  Ayam
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <Image
                  src="/icon_star.svg"
                  alt="Rating"
                  width={18}
                  height={17}
                />

                <h1
                  className="font-poppins font-semibold text-[13px]
                                    translate-x-1"
                >
                  4.7
                </h1>
              </div>
            </div>

            {/* Nama Makanan */}
            <h1 className="font-medium font-poppins text-[19px]">{nama}</h1>

            {/* Deskripsi Makanan*/}
            <h2 className="font-medium font-poppins text-[12px] text-[#9B8F8F] -translate-y-1">
              {desk}
            </h2>

            {/* Harga Makanan */}
            <p className="font-semibold font-poppins text-[13px]">Rp {harga}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

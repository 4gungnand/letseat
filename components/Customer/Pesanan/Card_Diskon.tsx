export default function Card_Diskon ({minPembelian, maxPotongan, diskon, handleDiskon, closeModal}:any) {
    const handlePromoClick = () => {
        handleDiskon(diskon,minPembelian,maxPotongan);
        closeModal();
    }
    return (
        <div className="font-poppins w-[316px] mx-auto border-2 border-opacity-25 rounded-lg">
            
            {/* Card Diskon */}
            <div className="bg-white rounded-lg flex flex-col justify-center h-[133px]">
                {/* Nama diskon */}
                <h1 className="pt-[13px] pl-[17px] font-semibold text-lg">
                    Diskon {diskon}%
                </h1>
                
                {/* Keterangan Diskon */}
                <ul className="text-gray-500 list-disc list-inside text-[14px] font-medium
                    ml-[17px]">
                    <li>Minimal Pembelian Rp.{minPembelian}</li>
                    <li>Potongan Maksimal Rp.{maxPotongan}</li>
                </ul>
                

                {/* Tanggal Expired dan Tombol Apply */}
                <div className="flex justify-between mt-[11px] items-center">
                    {/* Tanggal Expired */}
                    <div className="flex items-center text-gray-500 text-[14px] ml-[21px]">
                        <img src="/icon_kalender_promo.svg" className="w-[18px]"/>
                        <p className="translate-x-1">Hingga 30 April 2023</p>
                    </div>
                    
                    {/* Tombol Apply */}
                    <button 
                    onClick={handlePromoClick}
                    className="flex justify-center items-center bg-[#EC7505] 
                            rounded-xl mr-[14px] w-16 h-[22px]" >
                            <p className="text-white font-semibold text-[12px]" >Pakai</p>
                    </button> 
                </div>
            </div>

            {/* Layanan Dana*/}
            <div className="bg-gradient-to-r from-[#EC7505] to-white h-[32px] rounded-b-lg
                flex gap-x-2 items-center pl-[17px]">
                <img src="/icon_promo_letscash.svg" alt="" className="h-[18px]" />
                <img src="/icon_promo_makanan.svg" alt="" className="h-[18px]"/>
                {/* <img src="/icon_promo_pengiriman.svg" alt="" className="h-[18px]"/> */}
            </div>
        </div>
    )
}
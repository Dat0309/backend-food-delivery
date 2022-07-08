const companies = [
    {
        name: "Nha Khoa NỤ CƯỜI",
        description: "Nha Khoa NỤ CƯỜI",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 3",
        street: "Xô Viết Nghệ Tĩnh"
    },
    {
        name: "Nha khoa Quốc tế Daisy",
        description: "Phòng khám luôn đồng hành vói mọi bệnh nhân. Mang lại trải nghiệm dịch vụ tốt nhất cho bạn",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 6",
        street: "140 Đường Hai Bà Trưng"
    },
    {
        name: "Phòng khám Da Liễu Đà Lạt",
        description: "Phòng khám Da Liễu Đà Lạt",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 6",
        street: "1/3 Ngô Quyền"
    },
    {
        name: "Viện Thẩm Mỹ DIVA - Đà Lạt",
        description: "Viện Thẩm Mỹ DIVA - Đà Lạt",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 2",
        street: "244 Đường Hai Bà Trưng"
    },
    {
        name: "Phòng khám Tai Mũi Họng Đà Lạt",
        description: "Phòng khám Tai Mũi Họng Đà Lạt",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 2",
        street: "96 Nguyễn Văn Trỗi"
    },
    {
        name: "Phòng khám Sản Phụ Khoa Sài Gòn Đà Lạt",
        description: "Phòng khám Sản Phụ Khoa Sài Gòn Đà Lạt",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 5",
        street: "38 Đường Trần Nhật Duật"
    },
    {
        name: "Phòng khám Siêu Âm",
        description: "Phòng khám Siêu Âm",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 6",
        street: "52 Hải Thượng"
    },
    {
        name: "Phòng khám Bệnh Nội Khoa ",
        description: "Phòng khám Bệnh Nội Khoa ",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 6",
        street: "24 Đường Hai Bà Trưng"
    },
    {
        name: "Phòng khám DĐa Khoa Phước An",
        description: "Phòng khám DĐa Khoa Phước An",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 1",
        street: "118 Ba Tháng Hai"
    },
    {
        name: "Phòng mạch Cơ Xương Khớp ",
        description: "Phòng mạch Cơ Xương Khớp ",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 10",
        street: "17 Nguyễn Trãi"
    },
    {
        name: "Phòng khám THCT - VLTL",
        description: "Phòng khám THCT - VLTL",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 9",
        street: "98 Đường Nguyễn Đình Chiểu"
    },
    {
        name: "Trung tâm Y Khoa Pasteur Đà Lạt",
        description: "Trung tâm Y Khoa Pasteur Đà Lạt",
        image: "https://bizweb.dktcdn.net/100/394/948/themes/776328/assets/slider_3.png?1596593283611,https://alltop.vn/backend/media/images/posts/376/Nha_Khoa_Nu_Cuoi_Da_Lat-14623.jpg,https://nhakhoatrongrang.com/wp-content/uploads/2021/12/nha-khoa-co-mo-cua-chu-nhat.jpg,https://nhakhoakim.com/wp-content/uploads/2018/07/bac-sy-nha-khoa-uy-tin-nhat-tphcm.jpg,https://reviewnao.com/wp-content/uploads/2019/04/nha-khoa.jpg,https://nhakhoadalat.com/wp-content/uploads/2020/04/phong-kham-nha-khoa-uy-tin-1.png",
        province: "Lâm Đồng",
        district: "Thành phố Đà Lạt",
        ward: "Phường 4",
        street: "18 Đường Lê Hồng Phong"
    }
];

export default companies;
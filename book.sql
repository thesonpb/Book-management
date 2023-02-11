-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 26, 2022 lúc 07:39 AM
-- Phiên bản máy phục vụ: 8.0.26
-- Phiên bản PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `book`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `book`
--

CREATE TABLE `book` (
  `id` bigint NOT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `number_of_books_left` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `total_borrow` int DEFAULT NULL,
  `year` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `book`
--

INSERT INTO `book` (`id`, `author`, `description`, `image`, `number_of_books_left`, `title`, `total_borrow`, `year`) VALUES
(1, 'Paulo Coelho', 'Nhà giả kim là tiểu thuyết được xuất bản lần đầu ở Brasil năm 1988, và là cuốn sách nổi tiếng nhất của nhà văn Paulo Coelho. Tác phẩm đã được dịch ra 67 ngôn ngữ và bán ra tới 95 triệu bản, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại.', 'http://isach.info/images/story/cover/nha_gia_kim__paulo_coelho.jpg', 20, 'Nhà giả kim', 89, '1988'),
(2, 'Margaret Mitchell', 'Cuốn theo chiều gió, xuất bản lần đầu năm 1936, là một cuốn tiểu thuyết tình cảm của Margaret Mitchell, người đã giành giải Pulitzer với tác phẩm này năm 1937. Câu chuyện được đặt bối cảnh tại Georgia và Atlanta,', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg', 3, 'Cuốn theo chiều gió', 35, '1936'),
(3, 'Suzanne Collins', 'The Hunger Games bao gồm những bộ phim phiêu lưu khoa học viễn tưởng, dựa trên bộ ba tiểu thuyết The Hunger Games của tác giả người Mỹ Suzanne Collins. Các bộ phim được phân phối bởi Lionsgate và sản xuất bởi Nina Jacobson và Jon Kilik', 'https://upload.wikimedia.org/wikipedia/vi/a/ab/Hunger_games.jpg', 14, 'Đấu trường sinh tử', 44, '2011'),
(4, 'J. K. Rowling', 'Harry Potter và Phòng chứa Bí mật là quyển thứ hai trong loạt truyện Harry Potter của J. K. Rowling. Truyện được phát hành bằng tiếng Anh tại Anh, Hoa Kỳ và nhiều nước khác vào ngày 2 tháng 7 năm 1998.', 'https://upload.wikimedia.org/wikipedia/vi/6/62/Harry_Potter_v%C3%A0_Ph%C3%B2ng_ch%E1%BB%A9a_b%C3%AD_m%E1%BA%ADt.jpg', 10, 'Harry Potter và Phòng chứa Bí mật', 87, '1998'),
(5, 'J. K. Rowling', 'Harry Potter và hội Phượng hoàng là quyển thứ 5 trong bộ sách Harry Potter của nhà văn J. K. Rowling. Quyển này được đồng loạt xuất bản vào ngày 21 tháng 6 năm 2003 tại Anh, Hoa Kỳ, Canada, Úc và một vài quốc gia khác', 'https://upload.wikimedia.org/wikipedia/vi/7/74/Harry_Potter_v%C3%A0_H%E1%BB%99i_ph%C6%B0%E1%BB%A3ng_ho%C3%A0ng.jpg', 10, 'Harry Potter và hội Phượng Hoàng', 64, '2003'),
(6, 'Nguyễn Nhật Ánh', 'Mắt biếc là tiểu thuyết của nhà văn Nguyễn Nhật Ánh trong loạt truyện viết về tình yêu thanh thiếu niên của tác giả này cùng với Thằng quỷ nhỏ, Cô gái đến từ hôm qua', 'https://upload.wikimedia.org/wikipedia/vi/9/92/Mat_Biec.gif', 12, 'Mắt biếc', 58, '1990'),
(7, 'Nguyễn Nhật Ánh', 'Tôi thấy hoa vàng trên cỏ xanh là một tiểu thuyết dành cho thanh thiếu niên của nhà văn Nguyễn Nhật Ánh, xuất bản lần đầu tại Việt Nam vào ngày 9 tháng 12 năm 2010 bởi Nhà xuất bản Trẻ với phần tranh minh họa do Đỗ Hoàng Tường thực hiện', 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_04152018_031555.jpg', 8, 'Tôi thấy hoa vàng trên cỏ xanh', 30, '2010'),
(8, 'Emily Brontë', 'Đồi gió hú là tiểu thuyết duy nhất của nữ nhà văn Emily Brontë, được xuất bản lần đầu năm 1847 dưới bút danh Ellis Bell. Lần xuất bản thứ hai của tác phẩm là sau khi Emily đã qua đời', 'https://revelogue.com/wp-content/uploads/2020/08/doi-gio-hu-minh-hoa.jpg', 10, 'Đồi gió hú', 21, '1847'),
(9, 'Mark Twain', 'Những cuộc phiêu lưu của Huckleberry Finn là tiểu thuyết được xuất bản năm 1884 của nhà văn Mỹ Mark Twain. Nó được viết trong ngôi thứ nhất, là một trong những tiểu thuyết Mỹ đầu tiên dùng phương ngữ để viết.', 'https://www.netabooks.vn/Data/Sites/1/Product/23456/nhung-cuoc-phieu-luu-cua-huckleberry-finn-tai-ban.jpg', 3, 'Những cuộc phiêu lưu của Huckleberry Finn', 14, '1884'),
(10, 'Harper Lee', 'Giết con chim nhại là cuốn tiểu thuyết của Harper Lee; đây là cuốn tiểu thuyết rất được yêu chuộng, thuộc loại bán chạy nhất thế giới với hơn 10 triệu bản. Cuốn tiểu thuyết được xuất bản vào năm 1960 và đã giành được giải Pulitzer cho tác phẩm hư cấu năm 1961.', 'https://salt.tikicdn.com/cache/w1200/ts/product/2c/54/cf/d49da4e54370e1ed2acad4decb9a6174.jpg', 6, 'Giết con chim nhại', 32, '1960'),
(11, 'Ray Bradbury', 'Được dịch từ tiếng Anh-Fahrenheit 451 là một cuốn tiểu thuyết loạn luân năm 1953 của nhà văn Mỹ Ray Bradbury. Thường được coi là một trong những tác phẩm xuất sắc nhất của ông, cuốn tiểu thuyết trình bày một xã hội Mỹ tương lai, nơi những cuốn sách bị đặt ngoài vòng pháp luật và \"lính cứu hỏa\" đốt bất cứ thứ gì được tìm thấy.', 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-451-do-f.jpg', 21, '451 độ F', 45, '1953'),
(12, 'Dan Brown', 'Mật mã Da Vinci là một tiểu thuyết của nhà văn người Mỹ Dan Brown được xuất bản năm 2003 bởi nhà xuất bản Doubleday Fiction. Đây là một trong số các quyển sách bán chạy nhất thế giới với trên 40 triệu quyển được bán ra, và đã được dịch ra 44 ngôn ngữ.', 'https://upload.wikimedia.org/wikipedia/vi/8/84/M%E1%BA%ADt_m%C3%A3_davinci.jpg', 21, 'Mật mã Da Vinci', 112, '2003');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `review_book`
--

CREATE TABLE `review_book` (
  `id` bigint NOT NULL,
  `book_id` bigint DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `like` int DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `created_date` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `review_book`
--

INSERT INTO `review_book` (`id`, `book_id`, `content`, `like`, `user_id`, `created_date`) VALUES
(43, 1, 'review 1\n', 0, 26, '2022-05-14 22:43:43.050462'),
(44, 2, 'aaa', 0, 26, '2022-05-14 23:10:31.320469'),
(47, 3, 'nice book', 0, 26, '2022-05-14 23:20:44.924267'),
(57, 1, 'great book\n', 0, 11, '2022-05-16 09:18:35.508444');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `username`) VALUES
(11, 'Nguyễn Ngọc Nhung', '$2a$10$jVLxwg2D6avBGWzhnEUlB.ZnJYHWczgXCGmytWh7IgBwFHqNPrQ/O', 'ngocnhung'),
(12, 'Nguyễn Thế Sơn', '$2a$10$SgRwa6xiyV5fmXSSq7GK9ukP7G85z4qGpO/QoYijRNDWXXz/xQ17G', 'theson'),
(13, 'Dương Minh Hiếu', '$2a$10$nC.5imnTv5d55nHMv30zhOryr5nE1y.iyCus0MF8BaO.nWDSN/Xn6', 'dmh'),
(26, 'Admin', '$2a$10$wMfQBABZ6gYRZDY/TeMk.uv54Cc5HOiRC7GE/FNtGtUdRPHKsqBdu', 'admin'),
(27, 'Admin 2', '$2a$10$8SZtEkUGrUizku4S23KgheXF14PwXfjZ6BeUptS2H/FYAELDaf.XK', 'admin2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(26, 1),
(27, 1),
(11, 2),
(12, 2),
(13, 2),
(26, 2),
(27, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `review_book`
--
ALTER TABLE `review_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4gpiytnl1emyn0abwwgy0t9u2` (`user_id`),
  ADD KEY `FKn8i78kxd2to6u1q0bnm0s8d45` (`book_id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKrhfovtciq1l558cw6udg0h0d3` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `book`
--
ALTER TABLE `book`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `review_book`
--
ALTER TABLE `review_book`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `review_book`
--
ALTER TABLE `review_book`
  ADD CONSTRAINT `FK4gpiytnl1emyn0abwwgy0t9u2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKn8i78kxd2to6u1q0bnm0s8d45` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`);

--
-- Các ràng buộc cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

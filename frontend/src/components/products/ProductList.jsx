"use client";

import { useState, useEffect } from "react";

// Updated products with fixed IDs (removed duplicates)
const products = [
  {
    id: 1,
    name: "JK Photocopier",
    category: "product",
    price: 730,
    image:
      "https://printsupplies.co.ke/wp-content/uploads/2019/04/JK-Copier.jpg",
    description:
      "High-quality JK brand photocopier paper for clear and sharp prints.",
  },
  {
    id: 2,
    name: "A One Photocopier",
    category: "product",
    price: 700,
    image:
      "https://gadgetworld.co.ke/wp-content/uploads/2022/02/A1ne-paper-main.jpg",
    description:
      "Reliable A One photocopier paper suitable for everyday printing needs.",
  },
  {
    id: 3,
    name: "E Paper Photocopier",
    category: "product",
    price: 650,
    image:
      "https://www.plannettech.co.ke/wp-content/uploads/2024/06/epaper-printing-paper.jpeg.jpg",
    description:
      "Economical E Paper photocopier paper offering consistent performance.",
  },
  {
    id: 4,
    name: "Aria Photocopier",
    category: "product",
    price: 650,
    image:
      "https://www.plannettech.co.ke/wp-content/uploads/2024/02/Aria-papers.jpg",
    description:
      "Aria brand photocopier paper delivering crisp and clean copies.",
  },
  {
    id: 5,
    name: "Looseleafs",
    category: "accessories",
    price: 100,
    image:
      "https://cdn.mafrservices.com/sys-master-root/h22/h28/17556522172446/2431_main.jpg?im=Resize=480",
    description:
      "Pack of looseleaf papers ideal for note-taking and assignments.",
  },
  {
    id: 6,
    name: "Fullscaps",
    category: "product",
    price: 650,
    image:
      "https://mastepbookshop.com/glarufoa/2021/12/RULED-FULLSCAP-KARTASI.jpg",
    description:
      "Standard fullscap papers suitable for official documentation.",
  },
  {
    id: 7,
    name: "Fullscaps Pieces",
    category: "product",
    price: 5,
    image:
      "https://store.gsstationery.com/image/cjtee/image/data/all_product_images/product-957/FULLSCAP%20BOOK%20NUMBERING%20120PG.png",
    description: "Single fullscap paper sheets for individual use.",
  },
  {
    id: 8,
    name: "Calculator",
    category: "accessories",
    price: 1200,
    image: "https://i.ebayimg.com/images/g/2yAAAOSwD3pkhV7I/s-l1600.webp",
    description: "Durable calculator for accurate and efficient computations.",
  },
  {
    id: 9,
    name: "Atlas",
    category: "product",
    price: 1550,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/h/e/l/school-atlas-from-inikao-school-student-world-atlas-map-book-original-imah6cg8g4twyzqw.jpeg?q=90&crop=false",
    description:
      "Comprehensive atlas providing detailed maps and geographical information.",
  },
  {
    id: 10,
    name: "Junior Atlas",
    category: "product",
    price: 1850,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUjBTy9Lb4uuk5jUhcP4N9XxcuZSsUxuCIQ&s",
    description: "Educational atlas designed specifically for junior learners.",
  },
  {
    id: 11,
    name: "Bible",
    category: "product",
    price: 1400,
    image:
      "https://um-insight.net/downloads/313/download/Holy-Bible.jpg?cb=d7c66cda21ffa0b59262145100eec59f",
    description: "Standard Bible suitable for study and personal devotion.",
  },
  {
    id: 12,
    name: "Dictionary",
    category: "product",
    price: 1850,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/1/h/c/oxford-advanced-learners-dictionary-english-to-english-original-imagpae3ta6jzyhg.jpeg?q=20&crop=false",
    description:
      "Comprehensive dictionary for accurate word definitions and usage.",
  },
  {
    id: 13,
    name: "Golden Bells",
    category: "product",
    price: 500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCCB4gkbvm3lDc48gbb78K-UE0nGmcGNBJk9H4qMWF1zuKu6O2SqckSnxyQkaUaGVCNs&usqp=CAU",
    description:
      "Golden Bells publication offering insightful content for readers.",
  },
  {
    id: 14,
    name: "Maths Table",
    category: "product",
    price: 400,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/2599382/1.jpg?8172",
    description:
      "Mathematics table chart aiding in quick reference and learning.",
  },
  {
    id: 15,
    name: "Kamusi Karne 21st",
    category: "product",
    price: 1350,
    image:
      "https://officemart.co.ke/media/cache/d9/82/d982d4751dcbc45be563a49c98928c91.webp",
    description:
      "21st edition of Kamus Karne, a comprehensive Swahili dictionary.",
  },
  {
    id: 16,
    name: "Kamusi Sanifu",
    category: "product",
    price: 1350,
    image:
      "https://pictures-kenya.jijistatic.com/55330796_NjIwLTgyNy01NTE5ZTNiZWJm.webp",
    description: "Kamus Sanifu, an authoritative Swahili language dictionary.",
  },
  {
    id: 17,
    name: "Class Register",
    category: "product",
    price: 50,
    image:
      "https://tdog-online.myshopify.com/cdn/shop/products/s-l1600_3.gif?v=1699438843&width=1445",
    description: "Standard class register for recording student attendance.",
  },
  {
    id: 18,
    name: "Spring Files",
    category: "accessories",
    price: 70,
    image:
      "https://i1.wp.com/www.officepoint.co.ke/wp-content/uploads/2015/06/spring-file-pvc-1.png?fit=800%2C764&ssl=1",
    description: "Durable spring files for organizing and securing documents.",
  },
  {
    id: 19,
    name: "Box Files",
    category: "accessories",
    price: 280,
    image:
      "https://pictures-kenya.jijistatic.com/6088633_14-11-52-2460_600x400.jpg",
    description: "Spacious box files ideal for storing bulk documents.",
  },
  {
    id: 20,
    name: "Brown Covers",
    category: "accessories",
    price: 20,
    image: "https://5.imimg.com/data5/RE/OZ/AM/IOS-8491725/product-jpeg.png",
    description: "Protective brown covers for books and notebooks.",
  },
  {
    id: 21,
    name: "A5 Laminated Covers",
    category: "accessories",
    price: 30,
    image:
      "https://www.barnoprint.co.uk/wp-content/uploads/2024/06/booklets-barnoprint-7.jpg",
    description: "Durable A5 laminated covers for safeguarding documents.",
  },
  {
    id: 22,
    name: "A4 Laminated Covers",
    category: "accessories",
    price: 35,
    image:
      "https://cdn.mafrservices.com/pim-content/KEN/media/product/154971/1738074604/154971_main.jpg?im=Resize=200",
    description: "Protective A4 laminated covers for important papers.",
  },
  {
    id: 23,
    name: "A4 120 PGS Square",
    category: "product",
    price: 80,
    image:
      "https://www.muku.co.ke/wp-content/uploads/2024/08/120pg-square-rule.png",
    description: "A4 notebook with 120 pages of square-ruled paper.",
  },
  {
    id: 24,
    name: "A4 120PGS SINGLE",
    category: "product",
    price: 80,
    image:
      "https://www.muku.co.ke/wp-content/uploads/2024/08/120pg-single-line.png",
    description:
      "A4 size notebook with 120 single-ruled pages, ideal for writing and notes.",
  },
  {
    id: 25,
    name: "A4 200 PGS SQUARE",
    category: "product",
    price: 125,
    image:
      "https://savanisbookcentre.co.ke/wp-content/uploads/2024/04/kartasi-square-200.jpg",
    description:
      "A4 notebook with 200 square-ruled pages, perfect for mathematics.",
  },
  {
    id: 26,
    name: "A4 200 PGS SINGLE",
    category: "product",
    price: 125,
    image:
      "https://chaniaschooldepot.com/media/cache/7c/7d/7c7d45e6bc2774f7cd102a3ba5943ac2@2x.jpg",
    description:
      "Durable A4 notebook with 200 single-ruled pages for extended writing.",
  },
  {
    id: 27,
    name: "A4 64 PGS SINGLE",
    category: "product",
    price: 55,
    image: "https://theschoolbox.co.ke/wp-content/uploads/2022/11/64-SL.jpg",
    description: "64-page single-ruled A4 notebook suitable for class notes.",
  },
  {
    id: 28,
    name: "A4 64 PGS SQUARE",
    category: "product",
    price: 40,
    image:
      "https://chaniaschooldepot.com/media/cache/1b/1a/1b1a1eedf4c257a35136b68f81dc0c25@2x.jpg",
    description:
      "Square-ruled A4 notebook with 64 pages for math and diagrams.",
  },
  {
    id: 29,
    name: "A4 96 PGS SINGLE",
    category: "product",
    price: 70,
    image:
      "https://cdn.quicksell.co/-M4TwB30_UIMgFcVBRhI/products/-Mh2xbEdvKYUWMWga4Yy.jpg",
    description: "Standard A4 notebook with 96 single-ruled pages.",
  },
  {
    id: 30,
    name: "A4 96 PGS SQUARE",
    category: "product",
    price: 70,
    image:
      "https://mydolphin.co.ke/cdn/shop/files/Mh2xomgB4RTdT1hzV7Y_1100x.png?v=1719554285",
    description: "96-page square-ruled A4 notebook for technical subjects.",
  },
  {
    id: 31,
    name: "A5 120 PGS SQUARE",
    category: "product",
    price: 50,
    image:
      "https://d16zmt6hgq1jhj.cloudfront.net/product/12846/Economic%20Exercise%20Book%20A5%20Square%20Line%20120%20Pages.jpg",
    description: "A5 size 120-page notebook with square ruling.",
  },
  {
    id: 32,
    name: "A5 120 PGS SINGLE",
    category: "product",
    price: 50,
    image:
      "https://cdn.quicksell.co/-M4TwB30_UIMgFcVBRhI/products/-MhCk-X5KZx1BnuUJMHu.jpg",
    description: "Compact A5 notebook with 120 single-ruled pages.",
  },
  {
    id: 33,
    name: "A5 200 PGS SINGLE",
    category: "product",
    price: 65,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/11/kasuku-single-200pg.jpg",
    description: "A5 notebook with 200 single-ruled pages for long-form notes.",
  },
  {
    id: 34,
    name: "A5 200 PGS SQUARE",
    category: "product",
    price: 65,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/08/KS035_4713-1.jpg",
    description:
      "A5 notebook with 200 square-ruled pages ideal for math exercises.",
  },
  {
    id: 35,
    name: "A5 96 PGS SINGLE",
    category: "product",
    price: 45,
    image:
      "https://www.bienvillesupplies.co.ke/wp-content/uploads/2024/04/Exercise-Book-A5-Square-96pgs-Kasuku.jpg",
    description: "96-page A5 single-ruled notebook for everyday writing.",
  },
  {
    id: 36,
    name: "A5 96 PGS SQUARE",
    category: "product",
    price: 45,
    image:
      "https://savanisbookcentre.co.ke/wp-content/uploads/2024/08/HALF-SQU.jpg",
    description: "A5 square-ruled notebook for drawing graphs and charts.",
  },
  {
    id: 37,
    name: "A5 GRAPH BOOK 48 PGS",
    category: "product",
    price: 40,
    image:
      "https://arrowoffice.net/wp-content/uploads/2024/03/IMG_20210525_121757-removebg-preview_1024x1024.webp",
    description: "48-page A5 graph book for drawing and math projects.",
  },
  {
    id: 38,
    name: "A5 GRAPH BOOK 96 PGS",
    category: "product",
    price: 50,
    image:
      "https://officemart.co.ke/media/cache/73/bc/73bc29aa3c49f0217d0f5db650301f39@2x.webp",
    description:
      "96-page graph book in A5 size for detailed plotting and geometry.",
  },
  {
    id: 39,
    name: "A4 GRAPH BOOKS 96 PGS",
    category: "product",
    price: 85,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/08/19217fdd4322e63e78c654acfeab584e.jpg",
    description: "Large A4 graph book with 96 pages for detailed math work.",
  },
  {
    id: 40,
    name: "A5 SINGLE 48 PGS",
    category: "product",
    price: 35,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/11/kasuku-single-48-pg.jpg",
    description: "48-page single-ruled A5 notebook for lightweight writing.",
  },
  {
    id: 41,
    name: "A5 SQUARE 48 PGS",
    category: "product",
    price: 35,
    image:
      "https://arrowoffice.net/wp-content/uploads/2024/03/Exercise_Book_A5_48_Pages_Square_Line_jpg-100860-380x380-1-300x300.jpg",
    description: "A5 square-ruled notebook with 48 pages for quick math tasks.",
  },
  {
    id: 42,
    name: "A5 SQUARE 64 PGS",
    category: "product",
    price: 40,
    image:
      "https://cdn.quicksell.co/-M4TwB30_UIMgFcVBRhI/products/-MhCjXfoLn0SPjpuZXZS.jpg",
    description: "64-page A5 square-ruled notebook perfect for arithmetic.",
  },
  {
    id: 43,
    name: "A5 SINGLE 64 PGS",
    category: "product",
    price: 40,
    image:
      "https://cdn.quicksell.co/-M4TwB30_UIMgFcVBRhI/products/-MhCj_luLx_56HNLtXq6.jpg",
    description: "Single-ruled 64-page A5 notebook for note-taking.",
  },
  {
    id: 44,
    name: "DRAWING BOOK A4 96 PGS",
    category: "product",
    price: 85,
    image: "https://textbookcentre.com/storage/2024/10/2040404000136_2_.jpg",
    description:
      "A4 size drawing book with 96 blank pages for creative artwork.",
  },
  {
    id: 45,
    name: "DRAWING BOOK A5 48PGS",
    category: "product",
    price: 30,
    image:
      "https://savanisbookcentre.co.ke/wp-content/uploads/2024/08/48-RULED.jpg",
    description: "Small drawing book ideal for kids and sketch practice.",
  },
  {
    id: 46,
    name: "DRAWING BOOK A5 96 PGS",
    category: "product",
    price: 50,
    image:
      "https://hopeuniforms.co.ke/wp-content/uploads/2024/01/A5-96PGS-PLAIN-BOOK-1152x1536.jpg",
    description: "96-page drawing book in A5 size for art and diagrams.",
  },
  {
    id: 47,
    name: "GEOMETRICAL SET CLEAR OXFORD",
    category: "accessories",
    price: 250,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/0454711/1.jpg?0122",
    description: "Clear Oxford geometrical set ideal for technical drawing.",
  },
  {
    id: 48,
    name: "GEOMETRICAL SET CLEAR SUMO",
    category: "accessories",
    price: 300,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/4403261/1.jpg?3665",
    description: "Durable geometrical set from Sumo, ideal for students.",
  },
  {
    id: 49,
    name: "GEOMETRICAL SET",
    category: "accessories",
    price: 240,
    image:
      "https://biashara.keffys.co.ke/uploads/products/D63I1yxy2wNlm3k1fuw6uN1660988275.jpg",
    description: "Standard geometry tools for students and professionals.",
  },
  {
    id: 50,
    name: "TRANSPARENT CLIPBOARD",
    category: "accessories",
    price: 175,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41SCHQJoFLL._UL1200_.jpg",
    description:
      "Transparent clipboard for holding papers securely during writing.",
  },
  {
    id: 51,
    name: "MANILA PAPERS",
    category: "accessories",
    price: 30,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/672057/1.jpg?0783",
    description: "Bright manila papers for art and craft activities.",
  },
  {
    id: 52,
    name: "MANILA FOLDERS",
    category: "accessories",
    price: 100,
    image:
      "https://images.officeworks.com.au/api/2/img///s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/AV81702_avery_a4_manila_folder_buff_100_pack.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
    description: "Standard manila folders for organizing important documents.",
  },
  {
    id: 53,
    name: "MODELLING CLAY",
    category: "accessories",
    price: 55,
    image:
      "https://barbarareid.ca/wp-content/uploads/images_plasticine01-e1438173215137.jpg",
    description: "Colorful modeling clay for educational and artistic use.",
  },
  {
    id: 54,
    name: "DUSTLESS CHALK",
    category: "accessories",
    price: 85,
    image:
      "https://nairobisportshouse.com/media/cache/69/09/6909dbf9c2cd742213149c293c91c299@2x.webp",
    description: "Smooth, dust-free chalk for clean classroom use.",
  },
  {
    id: 55,
    name: "WATER COLOURS",
    category: "accessories",
    price: 180,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/40569255/4823057556.jpg",
    description: "Vibrant watercolor paint set for creative art.",
  },
  {
    id: 56,
    name: "CROTCHETS",
    category: "accessories",
    price: 70,
    image:
      "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/crotchet_ver_1.png",
    description: "Durable crotchets for knitting and crafts.",
  },
  {
    id: 57,
    name: "SEWING KITS",
    category: "accessories",
    price: 180,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/40569255/3827240968.jpg",
    description: "Complete sewing kit for home or classroom use.",
  },
  {
    id: 58,
    name: "WHITE OUT",
    category: "accessories",
    price: 85,
    image:
      "https://m.media-amazon.com/images/I/71gTlB-HI5L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Correction fluid for neatly fixing written errors.",
  },
  {
    id: 59,
    name: "QUIRE BOOK 1",
    category: "product",
    price: 125,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/9684903/1.jpg?1391",
    description: "1-quire book for extended note-taking needs.",
  },
  {
    id: 60,
    name: "QUIRE BOOK 2",
    category: "product",
    price: 235,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/597547/1.jpg?9800",
    description: "2-quire notebook for long-term writing.",
  },
  {
    id: 61,
    name: "QUIRE BOOK 3",
    category: "product",
    price: 275,
    image:
      "https://mydolphin.co.ke/cdn/shop/files/CounterBookKasuku3Quire_1100x.jpg?v=1718801313",
    description: "3-quire book, thick and durable for classroom use.",
  },
  {
    id: 62,
    name: "QUIRE BOOK 4",
    category: "product",
    price: 350,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/4739803/1.jpg?2681",
    description: "Heavy-duty 4-quire notebook for intensive writing.",
  },
  {
    id: 63,
    name: "RULERS",
    category: "accessories",
    price: 30,
    image:
      "https://www.tts-group.co.uk/dw/image/v2/AAXQ_PRD/on/demandware.static/-/Sites-TTSGroupE-commerceMaster/default/dw63030471/images/hi-res/1039276_01_EE10425_001.jpg?sw=443",
    description: "Standard 30cm rulers for classroom geometry use.",
  },
  {
    id: 64,
    name: "FLEXIBLE RULERS",
    category: "accessories",
    price: 40,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/08/s34-2661p01wl.jpg",
    description: "Bendable rulers for durability and versatile measuring.",
  },
  {
    id: 65,
    name: "STUDENT ERASERS",
    category: "accessories",
    price: 10,
    image:
      "https://m.media-amazon.com/images/I/71aZHtYn7NL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Soft erasers for pencil mark removal.",
  },
  {
    id: 66,
    name: "SHARPENERS",
    category: "accessories",
    price: 10,
    image:
      "https://cdn.mafrservices.com/sys-master-root/h34/h31/17384310571038/14989_main.jpg?im=Resize=400",
    description: "Compact sharpeners for smooth pencil sharpening.",
  },
  {
    id: 67,
    name: "CRAYONS",
    category: "accessories",
    price: 80,
    image:
      "https://officemart.co.ke/media/cache/9f/7e/9f7eb1066723771be0a9cad2362d1071@2x.webp",
    description: "Colorful crayons for children's art and crafts.",
  },
  {
    id: 68,
    name: "VEDA COLOURS",
    category: "accessories",
    price: 130,
    image:
      "https://www.myveda.co.ke/wp-content/uploads/2019/08/crayons-4638-1-800x800.jpg",
    description: "High-quality Veda brand coloring set for art.",
  },
  {
    id: 69,
    name: "A4 ENVELOPES",
    category: "accessories",
    price: 10,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/08/A4-Envelopes-C4-Brown-Manilla.jpg",
    description: "Standard A4 envelopes for document mailing.",
  },
  {
    id: 70,
    name: "A5 ENVELOPES",
    category: "accessories",
    price: 5,
    image:
      "https://www.plannettech.co.ke/wp-content/uploads/2024/02/BROWN-MANILA-ENVELOPE-A5-25-PACK-700x700-1.jpg",
    description: "Small A5 size envelopes for smaller documents.",
  },
  {
    id: 71,
    name: "DL ENVELOPES",
    category: "accessories",
    price: 5,
    image:
      "https://www.africanbookhub.co.ke/wp-content/uploads/2022/11/dl-envelopes.jpg",
    description: "DL-size envelopes ideal for letters and forms.",
  },
  {
    id: 72,
    name: "C6 ENVELOPES",
    category: "accessories",
    price: 5,
    image: "https://eys.co.ke/wp-content/uploads/2024/05/6224000110000.jpg",
    description: "Compact C6 envelopes for small cards or notes.",
  },
  {
    id: 73,
    name: "A5 NOTEBOOKS HANDCOVER",
    category: "product",
    price: 120,
    image:
      "https://theschoolbox.co.ke/wp-content/uploads/2023/03/a5-notebook.jpg",
    description: "Durable hardcover A5 notebook for journaling.",
  },
  {
    id: 74,
    name: "A5 NOTEBOOKS SPIRAL",
    category: "product",
    price: 60,
    image: "https://i.ebayimg.com/images/g/dT8AAeSwx3dnwh0g/s-l960.webp",
    description: "Spiral-bound A5 notebook for easy flipping.",
  },
  {
    id: 75,
    name: "A6 NOTEBOOK",
    category: "product",
    price: 60,
    image:
      "https://i5.walmartimages.com/seo/24-Pack-Kraft-Paper-Notebooks-A6-Size-4x6-Writing-Journal-80-Lined-Pages-Notebook-Set-Students-Kids-Classroom-Travel-Business-Office-Supplies_b27212e2-5418-4bef-a7df-60f046913dc4.4a95e53785b86ab2a4c0317c5879ef1a.jpeg",
    description: "Compact A6 notebook for portable writing.",
  },
  {
    id: 76,
    name: "BIC PENS",
    category: "accessories",
    price: 20,
    image:
      "https://sanamalawi.com/cdn/shop/files/BicPen.webp?v=1714582026&width=713",
    description: "Reliable BIC pens for smooth writing.",
  },
  {
    id: 77,
    name: "HB EXTRA DARK PENCILS",
    category: "accessories",
    price: 10,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/5/311870142/YL/WI/XT/190510474/extra-dark-pencils-1000x1000.jpg",
    description: "Extra dark HB pencils for clear writing.",
  },
  {
    id: 78,
    name: "OBAMA",
    category: "accessories",
    price: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/3914503/1.jpg?7328",
    description: "Economical writing pencil for everyday use.",
  },
  {
    id: 79,
    name: "SHARP POINTED",
    category: "accessories",
    price: 25,
    image:
      "https://i0.wp.com/kenyastationeryshop.com/wp-content/uploads/2024/07/bic-pen-sharp-pointed.jpg?fit=600%2C600&ssl=1",
    description: "Precision-pointed pencil ideal for technical drawing.",
  },
  {
    id: 80,
    name: "MARK PEN",
    category: "accessories",
    price: 70,
    image:
      "https://www.plannettech.co.ke/wp-content/uploads/2024/02/DELI-U101-THINK-PERMANENT-CHISEL-MARKERS.jpg",
    description: "Permanent marker pen for labeling and marking.",
  },
  {
    id: 81,
    name: "CBC PP1",
    category: "product",
    price: 180,
    image: "https://nuriakenya.com/wp-content/uploads/2022/01/3-2.jpg",
    description: "CBC PP1 learning material book.",
  },
  {
    id: 82,
    name: "CBC PP2",
    category: "product",
    price: 180,
    image:
      "https://fastlanebooks.co.ke/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Intensive-Encyclopedia-CBC-Pre-Primary-2.jpg.webp",
    description: "CBC PP2 learning material book.",
  },
  {
    id: 83,
    name: "CBC GRADE 1",
    category: "product",
    price: 180,
    image:
      "https://mastepbookshop.com/glarufoa/2022/01/044_Gal0gAi-705x1024.jpg",
    description: "CBC Grade 1 educational book.",
  },
  {
    id: 84,
    name: "CBC GRADE 2",
    category: "product",
    price: 180,
    image: "https://www.mybidhaa.co.ke/food_images/1706505315.jpg",
    description: "CBC Grade 2 educational book.",
  },
  {
    id: 85,
    name: "CBC GRADE 3",
    category: "product",
    price: 180,
    image:
      "https://savanisbookcentre.co.ke/wp-content/uploads/2024/11/IMG_20241123_104821_5352-scaled.jpg",
    description: "CBC Grade 3 educational book.",
  },
  {
    id: 86,
    name: "MANILLA FILES (PACK)",
    category: "accessories",
    price: 150,
    image: "https://i.ebayimg.com/images/g/kmcAAOSwvullTZoc/s-l1600.webp",
    description: "A pack of manilla files for document organization.",
  },
  {
    id: 87,
    name: "MATHS SET",
    category: "accessories",
    price: 200,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/0454711/1.jpg?0122",
    description: "Essential maths set for school geometry.",
  },
  {
    id: 88,
    name: "STAPLER SMALL",
    category: "accessories",
    price: 180,
    image:
      "https://topperskit.com/cdn/shop/files/30_7657b6dd-4a67-44a3-aca3-2fdf1d9694fa.jpg?v=1706186108&width=493",
    description: "Small-sized stapler for paper binding.",
  },
  {
    id: 89,
    name: "STAPLER PINS",
    category: "accessories",
    price: 70,
    image:
      "https://officemart.co.ke/media/cache/82/dd/82ddefabbec66e3979b41305a2dd741c@2x.webp",
    description: "Pack of standard stapler pins.",
  },
  {
    id: 90,
    name: "PUNCH",
    category: "accessories",
    price: 200,
    image:
      "https://officemart.co.ke/media/cache/dc/2c/dc2c75e8b0551f11e102a91e866c0b5b@2x.webp",
    description: "Paper punch for creating binder holes.",
  },
  {
    id: 91,
    name: "SCISSORS",
    category: "accessories",
    price: 90,
    image:
      "https://economyofbrighton.co.uk/cdn/shop/files/ezgif.com-jpg-to-webp-converter.webp?v=1743069766&width=823",
    description: "Multi-purpose scissors for paper and fabric.",
  },
  {
    id: 92,
    name: "GLUE STICK",
    category: "accessories",
    price: 80,
    image:
      "https://i0.wp.com/www.officepoint.co.ke/wp-content/uploads/2021/03/OFFICEPOINT_0000_GLUE-STICK.png?fit=800%2C764&ssl=1",
    description: "Glue stick for mess-free pasting.",
  },
  {
    id: 93,
    name: "LIQUID GLUE",
    category: "accessories",
    price: 70,
    image:
      "https://mydolphin.co.ke/cdn/shop/files/LiquidGlue90gms_288x.jpg?v=1719401208",
    description: "Liquid adhesive for crafts and schoolwork.",
  },
  {
    id: 94,
    name: "HIGHLIGHTER",
    category: "accessories",
    price: 50,
    image:
      "https://i0.wp.com/kibangabooks.com/wp-content/uploads/2024/10/IMG_8155-scaled.jpeg?resize=1535%2C2048&ssl=1",
    description: "Bright-colored highlighter for marking key points.",
  },
  {
    id: 95,
    name: "NOTE PADS",
    category: "product",
    price: 70,
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-gb/S001885126/NPIB-33900-FY24-Q4-Supershoot-Stills-Dew-Notepad-v3-002",
    description: "Handy notepads for daily notes and reminders.",
  },
];

const ProductList = () => {
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [enlargedProduct, setEnlargedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;

  // Update filtered products when category changes
  useEffect(() => {
    const filtered =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when category changes
  }, [category]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleProductClick = (productId) => {
    setEnlargedProduct(enlargedProduct === productId ? null : productId);
  };

  const handlePageChange = (pageNumber) => {
    setEnlargedProduct(null); // Reset enlarged product when changing pages
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600">
          Our Products & Accessories
        </h1>

        {/* Category filter buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {["all", "product", "accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  category === cat
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product count display */}
        <div className="text-center mb-6 text-gray-400">
          Showing {indexOfFirstProduct + 1}-
          {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
          {filteredProducts.length} products
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer
                ${
                  enlargedProduct === product.id
                    ? "scale-105 shadow-2xl z-10 ring-2 ring-teal-500"
                    : "hover:shadow-xl hover:scale-105"
                }`}
              onClick={() => handleProductClick(product.id)}
            >
              {/* Fixed image container with proper sizing */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-teal-300">
                  {product.name}
                </h2>
                <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-500">
                    Ksh. {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the card click
                      window.location.href = "/location#contact-form";
                    }}
                    className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
            >
              Previous
            </button>

            {/* Page numbers */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show pages around current page
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-md ${
                      currentPage === pageNum
                        ? "bg-teal-600 text-white font-bold"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Show ellipsis if there are more pages */}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="flex items-center justify-center w-10 h-10 text-gray-400">
                  ...
                </span>
              )}

              {/* Always show last page if not in view */}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="w-10 h-10 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700"
                >
                  {totalPages}
                </button>
              )}
            </div>

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

// Add your gear here.
// - image: put the file in /images and write "images/filename.jpg"
// - amazon: affiliate link (leave "" if not sold on Amazon)
// - link: optional non-Amazon link (manufacturer store etc.)
// Products are grouped by "category" in the order they first appear.

const PRODUCTS = [
    {
        category: "Camera & Lighting",
        name: "YoloLiv YoloCam S3",
        image: "https://m.media-amazon.com/images/I/715R39FsUiL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0FQ5NRQ8M?tag=m2kura-20&linkCode=ll2&linkId=004d583fa0d8615170038154484d835d",
        link: ""
    },
    {
        category: "Camera & Lighting",
        name: "Elgato Key Light",
        image: "https://m.media-amazon.com/images/I/617mzv+iKjL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B07L755X9G?tag=m2kura-20&linkCode=ll2&linkId=da56aa28a0b17bcd472305c39846ee00",
        link: ""
    },
    {
        category: "Audio",
        name: "Shure MV7+",
        image: "https://m.media-amazon.com/images/I/81SkpwyPZnL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0CTJ7PVN1?tag=m2kura-20&linkCode=ll2&linkId=043e0beea75b7079bdd03627f6558e63",
        link: ""
    },
    {
        category: "Audio",
        name: "Elgato Wave XLR MK.2",
        image: "https://m.media-amazon.com/images/I/51Id1KNebzL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0GGYXY67H?tag=m2kura-20&linkCode=ll2&linkId=12b86d3780e07cb8d402733c683b3327",
        link: ""
    },
    {
        category: "Audio",
        name: "FIFINE BM88 Mic Arm",
        image: "https://m.media-amazon.com/images/I/51iwlWH8v0L._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0C45H4WG9?tag=m2kura-20&linkCode=ll2&linkId=30e5a0294b3a45ad8a42dadd05779018",
        link: ""
    },
    {
        category: "Audio",
        name: "DJI Mic 3",
        image: "https://m.media-amazon.com/images/I/61M-pq9lRkL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0H6XFCXWN?tag=m2kura-20&linkCode=ll2&linkId=680fb3c0c38c0201b47e1eb48ee525bd",
        link: ""
    },
    {
        category: "Audio",
        name: "Audio\u2011Technica ATH\u2011M40x",
        image: "https://m.media-amazon.com/images/I/612QNnTYz0L._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B00HVLUR54?tag=m2kura-20&linkCode=ll2&linkId=8713aa54200f02b0387be7f485ff889a",
        link: ""
    },
    {
        category: "Audio",
        name: "Razer Leviathan V2",
        image: "https://m.media-amazon.com/images/I/612MSQ0cTlL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B09VX86JR6?tag=m2kura-20&linkCode=ll2&linkId=fd08f4202956744e9c3507cbc803e92f",
        link: ""
    },
    {
        category: "Displays",
        name: "Acer Nitro VG271U P",
        image: "https://m.media-amazon.com/images/I/81DJ-HL3HzL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B07NFK9XST?tag=m2kura-20&linkCode=ll2&linkId=6565a51273cd672b41f4e117afc82bf2",
        link: ""
    },
    {
        category: "Displays",
        name: "AOC Q27G3XMN",
        image: "https://m.media-amazon.com/images/I/71trp5wN0uL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0C8ZJKPWC?tag=m2kura-20&linkCode=ll2&linkId=78805d99ed49670791b2d2d27d7202fa",
        link: ""
    },
    {
        category: "Control & Input",
        name: "Elgato Stream Deck XL",
        image: "https://m.media-amazon.com/images/I/614IdhtGqnL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B07RL8H55Z?tag=m2kura-20&linkCode=ll2&linkId=44c0ce5ee84207eaec11c56308292202",
        link: ""
    },
    {
        category: "Control & Input",
        name: "Aula F75 Pro",
        image: "https://m.media-amazon.com/images/I/61Af7N1+pvL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0GMWTLHZT?tag=m2kura-20&linkCode=ll2&linkId=f783cd0629922fe6fafeb12ff767fcc7",
        link: ""
    },
    {
        category: "Control & Input",
        name: "PlayStation DualSense Controller",
        image: "https://m.media-amazon.com/images/I/61QWtX+qgJL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0FY66Q9MP?tag=m2kura-20&linkCode=ll2&linkId=1304399b2a70ea6bc4b7cc407bedcfff",
        link: ""
    },
    {
        category: "Control & Input",
        name: "Xbox Elite Controller Series 2",
        image: "https://m.media-amazon.com/images/I/514euvnzNcL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B082LNJ927?tag=m2kura-20&linkCode=ll2&linkId=ca93817bf2a66fc2f0eb8328818fe43e",
        link: ""
    },
    {
        category: "Cables",
        name: "Elgato XLR Microphone Cable",
        image: "https://m.media-amazon.com/images/I/61SZhLSmm0L._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0BBNC2JCH?tag=m2kura-20&linkCode=ll2&linkId=ac890a8af033817e4f3d9af311a0047f",
        link: ""
    },
    {
        category: "Cables",
        name: "Elgato Ultra High Speed HDMI Cable",
        image: "https://m.media-amazon.com/images/I/61ufVEOToOL._AC_SL500_.jpg",
        amazon: "https://www.amazon.com/dp/B0BQCGCPJ2?tag=m2kura-20&linkCode=ll2&linkId=23ffc13989f607a53d76afaf704a3912",
        link: ""
    }
];

const rekomendasiProduk = [1,4,6,8,9,12];


const allItemKonsumen = [
  // beras
  {
    id: 1,
    image: "../../../../../images/item/Beras Premium.png",
    name: "Beras Premium",
    price: "14.000",
    category: "Beras",
    detail:
      "Beras Premium adalah pilihan terbaik untuk mereka yang mengutamakan kualitas dalam konsumsi sehari-hari. Beras ini diproses dengan teliti sehingga menghasilkan butiran yang bersih, putih, dan tidak mudah patah. Setiap bulirnya memiliki tekstur yang halus, dengan kelembutan yang optimal setelah dimasak, menghasilkan nasi yang pulen dan harum. Cocok untuk berbagai jenis masakan, mulai dari nasi goreng, nasi uduk, hingga nasi putih biasa. Beras ini juga tahan disimpan lebih lama tanpa mengurangi kualitasnya, menjadikannya favorit di kalangan rumah tangga dan restoran yang mengutamakan cita rasa dan kualitas terbaik.",
  },
  {
    id: 2,
    image: "../../../../../images/item/Beras Merah.png",
    name: "Beras Merah",
    price: "20.000",
    category: "Beras",
    detail:
      "Beras Merah merupakan pilihan beras sehat yang kaya akan nutrisi, terutama serat yang tinggi dan vitamin B kompleks. Beras ini dikenal karena warnanya yang kemerahan alami, hasil dari lapisan bekatul yang masih utuh. Lapisan bekatul ini memberikan manfaat kesehatan yang signifikan, terutama untuk meningkatkan kesehatan pencernaan dan mengontrol kadar gula darah. Beras Merah sering menjadi pilihan bagi mereka yang menjalani diet sehat atau memiliki gaya hidup aktif. Rasanya yang sedikit nutty dan teksturnya yang lebih kenyal setelah dimasak memberikan variasi yang menarik dibandingkan beras putih biasa. Ideal untuk dikombinasikan dengan lauk-pauk sehat atau digunakan dalam masakan tradisional yang membutuhkan cita rasa khas beras merah.",
  },
  {
    id: 3,
    image: "../../../../../images/item/Beras Hitam.png",
    name: "Beras Hitam",
    price: "25.000",
    category: "Beras",
    detail:
      "Beras Hitam adalah jenis beras yang lebih jarang ditemui, namun sangat diminati karena kandungan nutrisinya yang kaya. Beras ini memiliki warna hitam pekat karena tingginya kandungan antosianin, sebuah antioksidan kuat yang membantu melawan radikal bebas dan meningkatkan kesehatan jantung. Selain itu, beras hitam juga kaya akan vitamin E yang baik untuk kesehatan kulit, serta mineral penting seperti zat besi dan magnesium yang mendukung fungsi tubuh secara keseluruhan. Tekstur beras ini setelah dimasak cenderung lebih kenyal dan rasa yang sedikit manis, membuatnya sempurna untuk hidangan khusus seperti nasi tim, bubur, atau digunakan dalam campuran nasi merah dan nasi putih untuk memberikan dimensi rasa dan warna yang unik. Beras hitam juga dikenal baik untuk membantu menjaga kesehatan pencernaan dan meningkatkan daya tahan tubuh.",
  },

  // cabai
  {
    id: 4,
    image: "../../../../../images/item/Cabai Merah.png",
    name: "Cabai Merah",
    price: "20.000",
    category: "Cabai",
    detail:
      "Cabai merah adalah salah satu bahan pokok dalam masakan Indonesia yang dikenal karena warna merah cerahnya dan rasa pedasnya yang kuat. Cabai merah sering kali menjadi pilihan utama untuk membuat sambal, bumbu dasar, atau saus karena mampu memberikan cita rasa pedas yang menyengat dan menambah kelezatan pada masakan. Selain itu, cabai merah juga kaya akan vitamin C dan antioksidan, yang membantu meningkatkan daya tahan tubuh. Teksturnya yang renyah menjadikannya ideal untuk digoreng atau diolah dalam tumisan, memberikan warna dan rasa yang khas pada hidangan seperti balado, gulai, dan berbagai masakan pedas lainnya.",
  },
  {
    id: 5,
    image: "../../../../../images/item/Cabai hijau.png",
    name: "Cabai Hijau",
    price: "20.000",
    category: "Cabai",
    detail:
      "Cabai hijau memiliki cita rasa pedas yang lebih lembut dibandingkan dengan cabai merah, tetapi tetap memberikan sensasi pedas yang khas. Biasanya, cabai hijau digunakan dalam masakan yang menginginkan rasa pedas namun tidak terlalu menyengat, seperti tumisan sayur, sambal hijau, atau acar. Warna hijau segar dari cabai ini juga memberikan tampilan menarik pada hidangan. Selain itu, cabai hijau sering dipotong kasar atau dimasukkan utuh ke dalam masakan berkuah seperti soto atau kari, menambah dimensi rasa tanpa membuat masakan terlalu pedas. Kandungan nutrisi cabai hijau juga meliputi vitamin A dan C yang baik untuk kesehatan.",
  },
  {
    id: 6,
    image: "../../../../../images/item/Cabai Rawit.png",
    name: "Cabai Rawit",
    price: "30.000",
    category: "Cabai",
    detail:
      "Cabai rawit, meskipun kecil dalam ukuran, memiliki tingkat kepedasan yang jauh lebih tinggi dibandingkan cabai merah dan hijau. Jenis cabai ini sangat populer dalam masakan pedas khas Indonesia seperti sambal terasi, sambal matah, atau bumbu rujak. Cabai rawit sering ditumbuk atau dihaluskan untuk menciptakan sambal dengan rasa pedas yang tajam, cocok untuk mereka yang menyukai sensasi pedas maksimal. Cabai ini juga sering digunakan secara utuh dalam berbagai hidangan, seperti lalapan atau hidangan berbumbu kuat. Selain dikenal karena kepedasannya, cabai rawit juga kaya akan kapsaisin, senyawa yang memberikan efek pedas sekaligus memiliki manfaat kesehatan, seperti meningkatkan metabolisme dan membantu melawan peradangan.",
  },

  // biji-bijian
  {
    id: 7,
    image: "../../../../../images/item/Kopi Robusta.png",
    name: "Kopi Robusta",
    price: "170.000",
    category: "Biji-Bijian",
    detail:
      "Biji Kopi Robusta ini menawarkan cita rasa yang sangat kuat dan karakteristik pahit yang mendalam, cocok bagi para pecinta kopi hitam yang mencari pengalaman rasa yang intens. Robusta dikenal dengan kandungan kafein yang lebih tinggi dibandingkan dengan jenis kopi lainnya, memberikan dorongan energi yang lebih besar dan rasa yang lebih tebal. Biji kopi ini sangat ideal untuk diseduh dalam bentuk espresso atau kopi hitam yang pekat, menonjolkan aroma yang khas dan kekuatan rasa yang robust.",
  },
  {
    id: 8,
    image: "../../../../../images/item/Kopi Arabika.png",
    name: "Biji Kopi Arabika",
    price: "180.000",
    category: "Biji-Bijian",
    detail:
      "Biji Kopi Arabika ini dikenal dengan aroma harum yang menyenangkan dan cita rasa yang lebih ringan dan seimbang dibandingkan dengan kopi robusta. Arabika memiliki tingkat keasaman yang lembut, memberikan rasa yang lebih halus dan kompleks. Kopi ini ideal untuk mereka yang menyukai kopi dengan rasa yang lebih halus dan beragam, sering disajikan dalam berbagai bentuk penyajian seperti cappuccino, latte, atau kopi filter. Biji ini juga cenderung memiliki profil rasa yang lebih beragam, dengan nuansa buah dan floral yang sering ditemukan dalam kopi Arabika premium.",
  },
  {
    id: 9,
    image: "../../../../../images/item/Kakao.png",
    name: "Biji Kakao",
    price: "150.000",
    category: "Biji-Bijian",
    detail:
      "Biji Kakao berkualitas tinggi ini adalah bahan dasar sempurna untuk membuat coklat artisanal. Dengan kualitas terbaik, biji kakao ini menawarkan rasa coklat yang pekat dan lezat, dengan kedalaman rasa yang kompleks. Cocok untuk digunakan dalam pembuatan coklat batangan, coklat bubuk, atau produk coklat lainnya, biji kakao ini memberikan pengalaman rasa coklat yang memuaskan dan kaya. Proses pemanggangan dan penggilingan biji kakao ini memastikan rasa coklat yang otentik dan konsistensi yang ideal untuk produk coklat berkualitas tinggi.",
  },
  {
    id: 10,
    image: "../../../../../images/item/Jagung.png",
    name: "Biji Jagung",
    price: "7.000",
    category: "Biji-Bijian",
    detail:
      "Biji Jagung ini adalah pilihan segar dan ekonomis untuk berbagai aplikasi kuliner. Dengan harga yang terjangkau, biji jagung ini dapat digunakan sebagai bahan dasar untuk berbagai makanan ringan seperti popcorn, keripik jagung, atau campuran dalam sup dan salad. Selain itu, biji jagung ini juga dapat diolah menjadi tepung jagung yang sangat berguna dalam pembuatan kue, roti, dan produk bakery lainnya. Kualitas biji jagung yang segar ini memastikan hasil akhir yang lezat dan tekstur yang optimal dalam berbagai hidangan.",
  },

  // umbi-umbian
  {
    id: 11,
    image: "../../../../../images/item/Kentang.png",
    name: "Kentang",
    price: "20.000",
    category: "Umbi-Umbian",
    detail:
      "Kentang ini memiliki tekstur lembut dan rasa yang netral, membuatnya sangat serbaguna dalam berbagai jenis masakan. Dengan kulit yang tipis dan daging berwarna putih yang halus, kentang ini ideal untuk digoreng menjadi kentang crispy, direbus untuk membuat purée atau mashed potatoes, dan digunakan sebagai bahan dasar dalam hidangan tradisional seperti perkedel atau kroket. Keberagaman cara pengolahan kentang membuatnya menjadi bahan pokok yang tidak boleh terlewatkan di dapur Anda.",
  },
  {
    id: 12,
    image: "../../../../../images/item/Ubi Jalar.png",
    name: "Ubi Jalar",
    price: "10.000",
    category: "Umbi-Umbian",
    detail:
      "Ubi jalar ini memiliki warna kuning keunguan yang mencolok dan rasa manis yang khas, memberikan sentuhan rasa unik pada setiap hidangan. Ubi jalar dapat diolah dengan berbagai cara, seperti direbus untuk membuat ubi rebus yang lembut, digoreng menjadi ubi goreng renyah, atau dijadikan camilan lezat seperti keripik ubi. Kelezatan dan manfaat nutrisinya yang tinggi, seperti beta-karoten dan serat, menjadikannya pilihan yang sangat baik untuk menambah variasi menu sehat Anda.",
  },
  {
    id: 13,
    image: "../../../../../images/item/Singkong.png",
    name: "Singkong",
    price: "10.000",
    category: "Umbi-Umbian",
    detail:
      "Singkong ini merupakan umbi yang kaya akan karbohidrat dan sangat serbaguna. Dengan tekstur yang padat dan rasa yang ringan, singkong bisa diolah menjadi berbagai jenis makanan, seperti tape singkong yang fermentasi untuk camilan manis, atau digoreng untuk membuat singkong goreng yang renyah. Singkong juga digunakan sebagai bahan dasar tepung tapioka, yang sering digunakan dalam pembuatan berbagai kue dan makanan ringan. Ketersediaannya yang melimpah dan kemudahan pengolahannya membuat singkong menjadi bahan yang sangat berguna dalam dapur.",
  },
  {
    id: 14,
    image: "../../../../../images/item/Talas.png",
    name: "Talas",
    price: "18.000",
    category: "Umbi-Umbian",
    detail:
      "Talas ini memiliki tekstur kenyal dan rasa yang sedikit manis, menjadikannya bahan yang ideal untuk berbagai jenis camilan dan kue tradisional. Talas sering digunakan dalam pembuatan makanan khas Indonesia, seperti kolak talas atau kue talas. Teksturnya yang unik dan kemampuannya untuk menyerap rasa dengan baik membuat talas menjadi pilihan populer untuk menambah variasi dan keunikan dalam hidangan manis atau gurih.",
  },
  {
    id: 15,
    image: "../../../../../images/item/Wortel.png",
    name: "Wortel",
    price: "15.000",
    category: "Umbi-Umbian",
    detail:
      "Wortel ini kaya akan vitamin A yang sangat penting untuk kesehatan mata, serta berbagai vitamin dan mineral lainnya yang bermanfaat bagi tubuh. Dengan warna oranye cerah dan rasa manis yang alami, wortel bisa diolah menjadi berbagai hidangan, seperti sup wortel yang hangat, salad wortel yang segar, atau jus wortel yang menyegarkan. Wortel tidak hanya menambah rasa dan warna pada masakan Anda, tetapi juga memberikan manfaat kesehatan yang signifikan.",
  },
];

export { allItemKonsumen, rekomendasiProduk };

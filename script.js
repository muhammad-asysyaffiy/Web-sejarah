// Database Sejarah 3 Tokoh Dunia
const HISTORICAL_FIGURES = {
    alexander: {
        name: "ALEXANDER MAGNUS",
        navLabels: ["I. Masa Muda", "II. Penaklukan Persia", "III. Warisan Akhir"],
        page1: {
            tag: "Babak Pertama • Pella & Mieza (356–336 SM)",
            title: "I. MASA MUDA & ARISTOTELES",
            imgSrc: "patung.jpg",
            imgFallback: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Gambar Untuk Suara",
            audioSrc: "alexander-intro.mp3",
            quote: "I'm Alexander III of Macedon. I conquered a portion of the world by the age of 30.",
            paragraphs: [
                `Lahir pada tahun 356 SM di Pella, ibu kota Kerajaan Makedonia, <strong>Alexander III</strong> adalah putra kebanggaan dari Raja Filipus II dan Ratu Olympias. Sejak usia belia, ambisi dan keberaniannya telah tampak melampaui usianya. Salah satu kisah paling legendaris di masa mudanya adalah keberhasilannya menjinakkan <strong>Bucephalus</strong>, seekor kuda jantan liar bertubuh besar yang tak seorang pun prajurit berani menungganginya. Alexander menyadari bahwa kuda itu hanya takut pada bayangannya sendiri; ia memutar kepala Bucephalus menghadap matahari dan berhasil menungganginya—menjadikan kuda itu sahabat setianya di setiap medan pertempuran.`,
                `Menyadari potensi luar biasa dalam diri putranya, Raja Filipus II mengundang filsuf paling brilian di seluruh Yunani, <strong>Aristoteles</strong>, untuk menjadi guru pribadi Alexander. Selama tiga tahun di Kuil Para Nimfa di Mieza, Aristoteles menanamkan kecintaan yang mendalam terhadap filsafat, logika, kedokteran, sains, hingga retorika dan kesusastraan.`,
                `Di bawah bimbingan Aristoteles pula, Alexander terpikat pada wiracarita <em>Iliad</em> karya Homer. Ia selalu tidur dengan salinan naskah <em>Iliad</em> yang diberi catatan langsung oleh Aristoteles—bersama sebilah belati—di bawah bantalnya, bermimpi kelak mampu melampaui kemuliaan ksatria mitologi idolanya, <strong>Achilles</strong>.`
            ]
        },
        page2: {
            tag: "Babak Kedua • Ekspedisi Asia (334–326 SM)",
            title: "II. PENAKLUKAN PERSIA",
            paragraphs: [
                `Setelah wafatnya Raja Filipus II pada tahun 336 SM, Alexander naik takhta pada usia baru <strong>20 tahun</strong>. Tanpa membuang waktu, ia mengonsolidasikan kekuatan di seluruh Yunani dan menyeberangi selat Hellespont pada tahun 334 SM dengan membawa sekitar 40.000 prajurit infanteri dan kavaleri pilihan untuk menantang kekaisaran terbesar di dunia kala itu: <strong>Kekaisaran Akhemeniyah Persia</strong> yang dipimpin oleh Raja Darius III.`,
                `Kegeniusan taktis Alexander terbukti melalui formasi <em>Phalanx</em> Makedonia yang bersenjatakan tombak panjang <em>Sarissa</em> (sepanjang 6 meter), dipadukan dengan serangan kilat kavaleri berat <em>Companion</em> yang ia pimpin langsung di garis terdepan. Dalam <strong>Pertempuran Granicus (334 SM)</strong> dan <strong>Pertempuran Issus (333 SM)</strong>, pasukan Alexander berhasil memukul mundur tentara Persia yang jumlahnya berkali-kali lipat lebih besar.`,
                `Puncak kejayaan militernya terjadi pada <strong>Pertempuran Gaugamela (331 SM)</strong>. Melalui manuver pergerakan miring yang brilian, Alexander memecah barisan tengah Persia dan memaksa Darius III melarikan diri. Gerbang Babilonia, Susa, hingga Persepolis pun terbuka lebar, menobatkan Alexander sebagai penguasa baru daratan Asia.`
            ],
            cards: [
                {
                    title: "1. Simpul Gordian & Granicus",
                    date: "334–333 SM",
                    desc: "Membuka gerbang Asia Kecil dan menebas Simpul Gordian dengan pedangnya—memenuhi ramalan kuno bahwa siapa pun yang membuka simpul itu akan menguasai Asia."
                },
                {
                    title: "2. Pengepungan Tirus & Mesir",
                    date: "332 SM",
                    desc: "Membangun jalan tambak raksasa di tengah laut untuk menaklukkan benteng pulau Tirus, lalu disambut sebagai Firaun pembebas di Mesir dan mendirikan kota Alexandria."
                },
                {
                    title: "3. Kemenangan Mutlak Gaugamela",
                    date: "331 SM",
                    desc: "Mahakarya strategi militer sepanjang masa. Meski kalah jumlah secara ekstrem, taktik baji kavaleri Alexander meruntuhkan jantung pertahanan Kekaisaran Persia."
                }
            ],
            bannerSub: "Rekor Pertempuran",
            bannerTitle: "Tak Terkalahkan Selama 15 Tahun",
            bannerStat: "100%"
        },
        page3: {
            tag: "Babak Ketiga • Babilonia & Era Helenistik (323 SM)",
            title: "III. WARISAN & AKHIR HAYAT",
            imgSrc: "singa.jpg",
            imgFallback: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Singa Untuk Kutipan",
            audioSrc: "alexander-quote.mp3",
            quote: "I'm not afraid of a lion army led by a sheep. I'm afraid of a sheep army led by a lion.",
            paragraphs: [
                `Ambisi Alexander tidak berhenti di Persia. Ia terus memimpin pasukannya melintasi pegunungan Hindu Kush hingga mencapai lembah Sungai Indus di India dan memenangkan <strong>Pertempuran Hydaspes (326 SM)</strong> melawan pasukan gajah Raja Porus. Namun, kelelahan ekstrem setelah satu dekade berperang tanpa henti membuat pasukannya memohon untuk kembali pulang.`,
                `Pada bulan Juni <strong>323 SM</strong> di Istana Nebukadnezar II di Babilonia, di tengah persiapan ekspedisi barunya menuju Jazirah Arab, Alexander jatuh sakit akibat demam hebat yang misterius. Ia menghembuskan napas terakhirnya pada usia yang sangat muda, <strong>32 tahun</strong>. Ketika para jenderalnya bertanya di tepi ranjang kematiannya kepada siapa kekaisaran raksasa itu akan diwariskan, Alexander dikabarkan menjawab dengan singkat: <em>"Kratisto"</em> — <strong>"Kepada yang terkuat."</strong>`,
                `Meski kekaisarannya kemudian terpecah di antara para jenderalnya (<em>Diadochi</em>), warisan terbesar Alexander tetap abadi. Ia melahirkan <strong>Zaman Helenistik</strong>—sebuah era keemasan yang memadukan kebudayaan, bahasa, filsafat, dan sains Yunani dengan peradaban Timur Tengah dan Asia, serta meninggalkan lebih dari dua puluh kota bernama Alexandria sebagai pusat ilmu pengetahuan dunia kuno.`
            ]
        }
    },

    caesar: {
        name: "GAIUS JULIUS CAESAR",
        navLabels: ["I. Ambisi & Triumvirat", "II. Galia & Rubicon", "III. Ides of March"],
        page1: {
            tag: "Babak Pertama • Republik Romawi (100–60 SM)",
            title: "I. AMBISI MUDA & TRIUMVIRAT",
            imgSrc: "patung-caesar.jpg",
            imgFallback: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Gambar Untuk Suara",
            audioSrc: "caesar-intro.mp3",
            quote: "I am Gaius Julius Caesar. I came, I saw, I conquered, and transformed the Roman Republic into a mighty Empire.",
            paragraphs: [
                `Lahir di jantung kota Roma pada tahun <strong>100 SM</strong> dari keluarga bangsawan kuno <em>Julii</em>, <strong>Gaius Julius Caesar</strong> tumbuh di tengah gejolak perang saudara Republik Romawi. Ketegasan karakternya sudah terlihat saat ia berusia 25 tahun ketika kapalnya ditangkap oleh bajak laut Kilikia di Laut Aegea. Alih-alih merasa takut, Caesar menertawakan para bajak laut karena meminta tebusan terlalu rendah, dan berjanji akan kembali untuk menangkap mereka. Begitu dibebaskan, Caesar langsung mengumpulkan armada kapal dan menepati janjinya hingga tuntas.`,
                `Saat bertugas sebagai gubernur di Hispania (Spanyol) pada usia 30-an, Caesar dikabarkan meneteskan air mata di depan patung Alexander Agung. Ia merenung dengan getir bahwa pada usianya saat itu, Alexander telah menaklukkan dunia, sementara dirinya merasa belum mencapai sesuatu yang abadi bagi sejarah.`,
                `Berbekal kecerdasan politik dan kemampuan pidato yang memukau rakyat Roma, Caesar mendaki puncak kekuasaan dengan membentuk aliansi politik legendaris bernama <strong>Triumvirat Pertama (60 SM)</strong> bersama jenderal besar <strong>Pompey</strong> dan negarawan terkaya Roma, <strong>Crassus</strong>—sebuah langkah brilian yang mengantarkannya menjadi Konsul dan Panglima Legiun Romawi.`
            ]
        },
        page2: {
            tag: "Babak Kedua • Perang Galia & Rubicon (58–45 SM)",
            title: "II. PENAKLUKAN GALIA & RUBICON",
            paragraphs: [
                `Antara tahun 58 hingga 50 SM, Caesar memimpin <strong>Perang Galia</strong> yang memperluas wilayah kekuasaan Romawi hingga mencapai Selat Inggris dan Sungai Rhine di Jerman. Puncak kejeniusan taktisnya terlihat pada <strong>Pengepungan Alesia (52 SM)</strong> melawan pemimpin suku Galia yang gagah berani, Vercingetorix. Caesar memerintahkan pasukannya membangun dua lapis benteng melingkar raksasa sepanjang puluhan kilometer untuk mengepung musuh di dalam kota sekaligus menahan serangan pasukan bantuan Galia dari luar secara bersamaan.`,
                `Kesuksesan luar biasa Caesar membuat faksi konservatif di Senat Roma dan mantan sekutunya, Pompey, merasa terancam. Senat memerintahkan Caesar membubarkan pasukannya dan kembali ke Roma sebagai warga biasa. Namun, pada tanggal <strong>10 Januari 49 SM</strong>, Caesar mengambil keputusan paling bersejarah dengan memimpin Legiun ke-13 menyeberangi <strong>Sungai Rubicon</strong> sembari mengucapkan <em>"Alea iacta est"</em> — <strong>"Dadu telah dilempar."</strong>`,
                `Langkah itu memicu Perang Saudara Romawi yang dimenangkan Caesar secara gemilang melalui <strong>Pertempuran Pharsalus (48 SM)</strong> di Yunani. Setelah menumpas pemberontakan kilat Raja Pharnaces II di Pertempuran Zela (47 SM), Caesar mengirim laporan kemenangan paling terkenal sepanjang sejarah ke Senat Roma: <strong>"Veni, Vidi, Vici"</strong> (Aku datang, Aku melihat, Aku menaklukkan).`
            ],
            cards: [
                {
                    title: "1. Pengepungan Benteng Ganda Alesia",
                    date: "52 SM",
                    desc: "Mahakarya teknik rekayasa militer Romawi. Caesar membangun benteng circumvallation dan contravallation untuk menundukkan seluruh koalisi suku Galia."
                },
                {
                    title: "2. Menyeberangi Sungai Rubicon",
                    date: "49 SM",
                    desc: "Titik balik sejarah dunia Barat. Kalimat 'Alea iacta est' melahirkan ungkapan modern 'Crossing the Rubicon' yang berarti mengambil keputusan tanpa jalan kembali."
                },
                {
                    title: "3. Kemenangan Pharsalus & Zela",
                    date: "48–47 SM",
                    desc: "Mengalahkan pasukan Pompey yang berjumlah dua kali lipat lebih besar di Pharsalus dan merangkum kemenangannya di Zela dengan tiga kata: Veni, Vidi, Vici."
                }
            ],
            bannerSub: "Semboyan Legendaris",
            bannerTitle: "Veni, Vidi, Vici — Sang Diktator Roma",
            bannerStat: "ROMA"
        },
        page3: {
            tag: "Babak Ketiga • Senat Roma & Kalender Julian (44 SM)",
            title: "III. WARISAN & IDES OF MARCH",
            imgSrc: "elang-caesar.jpg",
            imgFallback: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Elang Untuk Kutipan",
            audioSrc: "caesar-quote.mp3",
            quote: "Cowards die many times before their actual deaths; the valiant never taste of death but once.",
            paragraphs: [
                `Sekembalinya ke Roma sebagai penguasa tertinggi (<em>Dictator Perpetuo</em>), Caesar meluncurkan reformasi besar-besaran yang memperbaiki kehidupan rakyat. Ia merombak administrasi provinsi, membagikan tanah kepada para veteran dan rakyat miskin, serta merancang <strong>Kalender Julian</strong> bersama astronom Alexandria (terdiri dari 365 hari dengan tahun kabisat setiap empat tahun) yang menjadi fondasi langsung kalender modern kita hari ini.`,
                `Namun, kekuasaan mutlak Caesar memicu konspirasi dari sekitar 60 senator yang menamakan diri mereka <em>Liberatores</em>, dipimpin oleh Gaius Cassius dan Marcus Junius Brutus—anak angkat yang sangat disayangi Caesar. Pada hari <strong>Ides of March (15 Maret 44 SM)</strong>, Caesar diserang di ruang sidang Teater Pompey, meninggalkan kisah dramatis ucapan terakhirnya kepada Brutus: <em>"Et tu, Brute?"</em> (Kau juga, Brutus?).`,
                `Alih-alih mengembalikan Republik seperti yang diharapkan para konspirator, wafatnya Caesar justru memicu kemarahan rakyat Roma dan membuka jalan bagi keponakan sekaligus pewaris angkatnya, <strong>Octavianus (Kaisar Augustus)</strong>, untuk mendirikan <strong>Kekaisaran Romawi</strong>. Nama "Caesar" pun abadi sepanjang ribuan tahun sebagai gelar penguasa tertinggi, melahirkan kata <em>Kaiser</em> di Jerman dan <em>Tsar</em> di Rusia.`
            ]
        }
    },

    napoleon: {
        name: "NAPOLEON BONAPARTE",
        navLabels: ["I. Bintang Revolusi", "II. Kejayaan Austerlitz", "III. Kode & St. Helena"],
        page1: {
            tag: "Babak Pertama • Ajaccio & Paris (1769–1799 M)",
            title: "I. PUTRA KORSIKA & BINTANG REVOLUSI",
            imgSrc: "patung-napoleon.jpg",
            imgFallback: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Gambar Untuk Suara",
            audioSrc: "napoleon-intro.mp3",
            quote: "I am Napoleon Bonaparte, Emperor of the French. Through artillery, strategy, and willpower, I reshaped the map of Europe.",
            paragraphs: [
                `Lahir pada 15 Agustus <strong>1769</strong> di pulau Korsika yang baru saja diserahkan kepada Prancis, <strong>Napoleon Bonaparte</strong> memulai hidupnya sebagai bangsawan kecil daerah yang bahkan berbicara bahasa Prancis dengan aksen Korsika yang kental. Saat menempuh pendidikan di akademi militer Brienne dan <em>École Militaire</em> di Paris, bakat luar biasanya dalam matematika, pemetaan, dan strategi meriam artileri membuatnya lulus sebagai perwira muda pada usia 16 tahun.`,
                `Gejolak <strong>Revolusi Prancis (1789)</strong> membuka panggung besar bagi ambisi dan talenta militernya. Nama Napoleon melambung tinggi ketika ia merancang strategi penempatan meriam di <strong>Pengepungan Toulon (1793)</strong> untuk mengusir armada Inggris, yang langsung mengangkatnya menjadi Brigadir Jenderal pada usia baru <strong>24 tahun</strong>.`,
                `Melalui Kampanye Italia yang memukau (1796–1797) dan Ekspedisi Mesir (1798) yang turut membawa ratusan ilmuwan hingga menemukan <strong>Batu Rosetta</strong>, Napoleon menjadi pahlawan paling populer di Prancis. Pada bulan November 1799 (Kudeta 18 Brumaire), ia mengambil alih tampuk pemerintahan sebagai <strong>Konsul Pertama Prancis</strong>, mengakhiri kekacauan revolusi dan memulai era baru di Eropa.`
            ]
        },
        page2: {
            tag: "Babak Kedua • Puncak Kekaisaran Eropa (1800–1812 M)",
            title: "II. MAHAKARYA AUSTERLITZ & EROPA",
            paragraphs: [
                `Pada tanggal 2 Desember 1804 di Katedral Notre-Dame Paris, Napoleon menobatkan dirinya sebagai <strong>Kaisar Prancis (Emperor of the French)</strong>. Ia merevolusi peperangan modern dengan menciptakan sistem <strong>Korps Angkatan Darat (Grande Armée)</strong>—unit-unit tentara mandiri yang bergerak terpisah dengan kecepatan tinggi, namun mampu menyatu secara mendadak di titik penentuan pertempuran.`,
                `Puncak kejeniusan militer Napoleon terjadi tepat satu tahun setelah penobatannya dalam <strong>Pertempuran Austerlitz (2 Desember 1805)</strong>, yang dikenal sebagai "Pertempuran Tiga Kaisar". Menghadapi pasukan gabungan Kekaisaran Rusia dan Kekaisaran Austria yang lebih besar, Napoleon sengaja melemahkan sayap kanannya sebagai umpan. Ketika pasukan Sekutu terpancing turun dari dataran tinggi Pratzen, pasukan Napoleon menyerbu jantung barisan mereka dan menghancurkan kedua kekaisaran tersebut dalam satu hari.`,
                `Kemenangan beruntun di <strong>Jena-Auerstedt (1806)</strong>, <strong>Friedland (1807)</strong>, hingga <strong>Wagram (1809)</strong> meruntuhkan Kekaisaran Romawi Suci yang telah berusia seribu tahun dan menempatkan hampir seluruh benua Eropa dari Madrid hingga perbatasan Rusia di bawah hegemoni Kekaisaran Prancis.`
            ],
            cards: [
                {
                    title: "1. Penobatan Kaisar & Sistem Korps",
                    date: "1804 M",
                    desc: "Membangun Grande Armée dengan mobilitas kilat dan konsentrasi meriam artileri masif yang mengubah doktrin perang dunia selamanya."
                },
                {
                    title: "2. Mahakarya Pertempuran Austerlitz",
                    date: "2 Des 1805",
                    desc: "Diakui oleh sejarawan militer sebagai taktik pertempuran paling sempurna dalam sejarah modern, mengalahkan Kaisar Rusia dan Kaisar Austria sekaligus."
                },
                {
                    title: "3. Hegemoni Benua Eropa",
                    date: "1806–1809 M",
                    desc: "Menaklukkan Prusia di Jena dan Austria di Wagram, sekaligus menghapus feodalisme kuno di berbagai wilayah Eropa yang dilaluinya."
                }
            ],
            bannerSub: "Catatan Sejarah Militer",
            bannerTitle: "Memenangkan Lebih dari 50 Pertempuran Besar",
            bannerStat: "60+"
        },
        page3: {
            tag: "Babak Ketiga • Kode Sipil & Saint Helena (1815–1821 M)",
            title: "III. KODE NAPOLEON & AKHIR HAYAT",
            imgSrc: "kuda-napoleon.jpg",
            imgFallback: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=600&q=80",
            btnLabel: "Klik Kuda Perang Untuk Kutipan",
            audioSrc: "napoleon-quote.mp3",
            quote: "Impossible is a word to be found only in the dictionary of fools.",
            paragraphs: [
                `Titik balik kejatuhan militer Napoleon bermula dari invasi besarnya ke <strong>Rusia pada tahun 1812</strong>, di mana taktik bumi hangus dan musim dingin ekstrem menghancurkan sebagian besar pasukannya. Setelah sempat diasingkan ke Pulau Elba pada tahun 1814, Napoleon melakukan pelarian dramatis kembali ke Prancis dalam periode <strong>Seratus Hari (1815)</strong> sebelum akhirnya dikalahkan oleh koalisi Inggris dan Prusia di bawah pimpinan Duke of Wellington dan Marsekal Blücher dalam <strong>Pertempuran Waterloo (18 Juni 1815)</strong>.`,
                `Napoleon menghabiskan enam tahun terakhir hidupnya dalam pengasingan ketat Inggris di pulau terpencil <strong>Saint Helena</strong> di Samudra Atlantik Selatan hingga wafatnya pada 5 Mei <strong>1821</strong>. Di pulau itulah ia mendiktekan memoar hidupnya dan merenungkan warisan abadi yang telah ia bangun bagi peradaban modern.`,
                `Sebagaimana yang pernah diucapkan Napoleon sendiri, kemuliaan sejatinya bukanlah puluhan pertempuran yang ia menangkan, melainkan <strong>Kode Napoleon (Code Civil, 1804)</strong>—sistem hukum perdata tertulis yang menjamin kesetaraan warga negara di depan hukum, penghapusan hak istimewa feodal, dan sistem meritokrasi, yang hingga detik ini masih menjadi fondasi sistem hukum di puluhan negara di dunia, termasuk di Eropa dan Indonesia.`
            ]
        }
    }
};

let currentFigureKey = 'alexander';
const audioIntro = document.getElementById('audio-intro');
const audioQuote = document.getElementById('audio-quote');
const imgIntro = document.getElementById('img-intro');
const imgQuote = document.getElementById('img-quote');
const storyContainer = document.getElementById('story-container');

// Menghentikan seluruh audio yang sedang berjalan
function stopAllAudio() {
    audioIntro.pause();
    audioIntro.currentTime = 0;
    audioQuote.pause();
    audioQuote.currentTime = 0;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    imgIntro.classList.remove('playing-audio');
    imgQuote.classList.remove('playing-audio');
}

// Fungsi Mengganti Tokoh Sejarah Secara Dinamis
function selectFigure(figureKey, scrollToStory = false) {
    if (!HISTORICAL_FIGURES[figureKey]) return;
    stopAllAudio();
    currentFigureKey = figureKey;
    const data = HISTORICAL_FIGURES[figureKey];

    // Efek transisi halus pada konten cerita
    storyContainer.classList.add('fade-out');

    setTimeout(() => {
        // 1. Update Quick Switcher Pills di Navbar & Kartu Galeri
        ['alexander', 'caesar', 'napoleon'].forEach(key => {
            const pill = document.getElementById(`pill-${key}`);
            const card = document.getElementById(`card-${key}`);
            const badge = document.getElementById(`badge-active-${key}`);

            if (key === figureKey) {
                pill.className = "px-3 py-1.5 rounded-full transition-all bg-crimson-800 text-white shadow-sm";
                card.className = "group cursor-pointer rounded-2xl bg-white p-6 border-2 border-crimson-800 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden";
                badge.classList.remove('hidden');
            } else {
                pill.className = "px-3 py-1.5 rounded-full transition-all text-stone-600 hover:text-crimson-800";
                card.className = "group cursor-pointer rounded-2xl bg-white p-6 border-2 border-stone-200/90 hover:border-crimson-800/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden";
                badge.classList.add('hidden');
            }
        });

        // 2. Update Label Babak di Navbar
        document.getElementById('nav-chap-1').textContent = data.navLabels[0];
        document.getElementById('nav-chap-2').textContent = data.navLabels[1];
        document.getElementById('nav-chap-3').textContent = data.navLabels[2];

        // 3. Render Halaman 1 (Masa Muda / Awal Karier)
        document.getElementById('p1-tag').textContent = data.page1.tag;
        document.getElementById('p1-era').textContent = data.name;
        document.getElementById('p1-title').textContent = data.page1.title;
        document.getElementById('p1-paragraphs').innerHTML = data.page1.paragraphs.map(p => `<p>${p}</p>`).join('');
        
        imgIntro.onerror = function() {
            this.onerror = null;
            this.src = data.page1.imgFallback;
        };
        imgIntro.src = data.page1.imgSrc;
        document.getElementById('btn-intro-label').textContent = data.page1.btnLabel;
        document.getElementById('quote-intro-text').textContent = `"${data.page1.quote}"`;
        audioIntro.src = data.page1.audioSrc;

        // 4. Render Halaman 2 (Penaklukan & Kronologi Pertempuran)
        document.getElementById('p2-tag').textContent = data.page2.tag;
        document.getElementById('p2-title').textContent = data.page2.title;
        document.getElementById('p2-paragraphs').innerHTML = data.page2.paragraphs.map(p => `<p>${p}</p>`).join('');
        document.getElementById('p2-cards').innerHTML = data.page2.cards.map(c => `
            <div class="p-6 rounded-xl bg-white border-l-4 border-crimson-800 shadow-sm border border-stone-200 hover:shadow-md transition">
                <div class="flex justify-between items-center mb-1 gap-2">
                    <span class="font-serif font-bold text-base sm:text-lg text-stone-900">${c.title}</span>
                    <span class="text-xs font-bold text-crimson-800 bg-red-50 px-2.5 py-1 rounded shrink-0">${c.date}</span>
                </div>
                <p class="text-sm text-stone-600 leading-relaxed">${c.desc}</p>
            </div>
        `).join('');
        document.getElementById('p2-banner-sub').textContent = data.page2.bannerSub;
        document.getElementById('p2-banner-title').textContent = data.page2.bannerTitle;
        document.getElementById('p2-banner-stat').textContent = data.page2.bannerStat;

        // 5. Render Halaman 3 (Warisan & Akhir Hayat)
        document.getElementById('p3-tag').textContent = data.page3.tag;
        document.getElementById('p3-title').textContent = data.page3.title;
        document.getElementById('p3-paragraphs').innerHTML = data.page3.paragraphs.map(p => `<p>${p}</p>`).join('');
        
        imgQuote.onerror = function() {
            this.onerror = null;
            this.src = data.page3.imgFallback;
        };
        imgQuote.src = data.page3.imgSrc;
        document.getElementById('btn-quote-label').textContent = data.page3.btnLabel;
        document.getElementById('quote-wisdom-text').textContent = `"${data.page3.quote}"`;
        audioQuote.src = data.page3.audioSrc;

        storyContainer.classList.remove('fade-out');

        // Scroll mulus ke Babak 1 jika pengguna mengklik dari kartu atau tombol atas
        if (scrollToStory) {
            document.getElementById('page-1').scrollIntoView({ behavior: 'smooth' });
        }
    }, 180);
}

// Fungsi Memutar Suara Babak 1 (Perkenalan Tokoh)
function playIntroAudio() {
    stopAllAudio();
    const data = HISTORICAL_FIGURES[currentFigureKey].page1;
    imgIntro.classList.add('playing-audio');

    audioIntro.play().catch(() => {
        // Fallback otomatis ke suara AI browser jika file MP3 lokal belum ada di folder
        if ('speechSynthesis' in window) {
            const msg = new SpeechSynthesisUtterance(data.quote);
            msg.lang = 'en-US';
            msg.rate = 0.9;
            msg.pitch = 0.85;
            msg.onend = () => imgIntro.classList.remove('playing-audio');
            window.speechSynthesis.speak(msg);
        } else {
            imgIntro.classList.remove('playing-audio');
        }
    });

    audioIntro.onended = () => {
        imgIntro.classList.remove('playing-audio');
    };
}

// Fungsi Memutar Suara Babak 3 (Kutipan Bijak Tokoh)
function playQuoteAudio() {
    stopAllAudio();
    const data = HISTORICAL_FIGURES[currentFigureKey].page3;
    imgQuote.classList.add('playing-audio');

    audioQuote.play().catch(() => {
        // Fallback otomatis ke suara AI browser jika file MP3 lokal belum ada di folder
        if ('speechSynthesis' in window) {
            const msg = new SpeechSynthesisUtterance(data.quote);
            msg.lang = 'en-US';
            msg.rate = 0.9;
            msg.pitch = 0.85;
            msg.onend = () => imgQuote.classList.remove('playing-audio');
            window.speechSynthesis.speak(msg);
        } else {
            imgQuote.classList.remove('playing-audio');
        }
    });

    audioQuote.onended = () => {
        imgQuote.classList.remove('playing-audio');
    };
}

// Toggle Modal Panduan Asset
function toggleAssetModal() {
    const modal = document.getElementById('asset-modal');
    modal.classList.toggle('hidden');
}

// Inisialisasi tampilan awal dengan tokoh Alexander Agung
window.addEventListener('DOMContentLoaded', () => {
    selectFigure('alexander', false);
});
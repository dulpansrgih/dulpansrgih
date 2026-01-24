const contentOriginal = `
<article class="experience active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-10 relative overflow-hidden">

  <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

  <header class="flex flex-col gap-3 relative z-10 px-2 md:px-0">
     <div class="flex items-center gap-3 md:gap-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Career <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">History</span>
        </h2>
        <div class="h-1 flex-grow bg-gradient-to-r from-blue-500/30 to-transparent rounded-full ml-2"></div>
    </div>
    <div class="flex items-center gap-2 pl-1">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        <p class="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]" data-en="Professional, Volunteer & Projects">Professional, Volunteer & Projects</p>
    </div>
  </header>

  <section class="mt-2 relative z-10 space-y-12">

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4" data-en="<ion-icon name='briefcase' class='text-blue-400'></ion-icon> Professional Experience">
            <ion-icon name="briefcase" class="text-blue-400"></ion-icon>
            Pengalaman Profesional
        </h3>

        <div class="space-y-4">

            <details name="career-accordion" class="group bg-[#1e1e24] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 open">
                <summary class="flex items-start gap-4 md:gap-6 p-5 md:p-6 cursor-pointer list-none relative pr-12 md:pr-10">
                    <div class="absolute top-6 right-5 text-gray-500 group-hover:text-blue-400 transition-colors">
                         <ion-icon name="chevron-down" class="text-lg transition-transform duration-300 group-open:rotate-180"></ion-icon>
                    </div>
                    
                    <div class="shrink-0">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1 group-open:bg-blue-500/10 transition-colors">
                            <img src="assets/images/icon/uty.png" class="w-full h-full object-contain" alt="UTY">
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-1.5">
                            <div>
                                <h4 class="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight" data-en="Lecturer Assistant (MKP)">Asisten Dosen (MKP)</h4>
                                
                                <a href="https://uty.ac.id/" target="_blank" class="text-gray-400 text-sm mt-1 hover:text-blue-400 transition-colors flex items-center gap-1 w-max">
                                    Universitas Teknologi Yogyakarta <ion-icon name="open-outline"></ion-icon>
                                </a>

                                <p class="text-gray-500 text-[9px] md:text-sm mt-1 flex items-center gap-1">
                                    <ion-icon name="location-outline" class="text-blue-400"></ion-icon> Yogyakarta, Indonesia
                                </p>
                            </div>

                            <div class="mt-3 md:mt-0 flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1">
                                <span class="px-1.5 py-0 md:px-2 md:py-0.5 border border-blue-500/30 text-blue-300 text-[8px] md:text-[9px] capitalize md:uppercase font-bold tracking-normal md:tracking-wider rounded-full bg-blue-500/5 whitespace-nowrap leading-relaxed">Part-time</span>
                                <span class="text-gray-500 text-[10px] font-mono whitespace-nowrap">Sep 2024 — Jan 2025</span>
                            </div>
                        </div>
                    </div>
                </summary>

                <div class="px-6 pb-6 pt-0 animate-fade">
                    <div class="pl-0 md:pl-[72px] pt-2 border-t border-white/5 mt-2">
                        <p class="text-gray-400 text-sm mb-4 leading-relaxed text-justify" data-en="Trusted as a Lecturer Assistant for the <strong>Financial Management Practice</strong> course in 3 different classes. Fully responsible from <strong>material delivery</strong>, drafting <strong>Mid & Final Exams</strong>, to processing student <strong>Final Grades</strong>.">
                            Dipercaya sebagai Asisten Dosen untuk mata kuliah <strong>Manajemen Keuangan Praktik</strong> di 3 kelas berbeda. Bertanggung jawab penuh mulai dari <strong>penyampaian materi</strong>, penyusunan <strong>soal UTS & UAS</strong>, hingga pengolahan <strong>Nilai Akhir</strong> mahasiswa.
                        </p>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="easel" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Teaching & Mentoring:</strong> Providing direct <strong>practical teaching</strong> and <strong>technical guidance</strong> to students during assignments."><strong>Pengajaran & Pendampingan:</strong> Memberikan <strong>pengajaran materi</strong> praktikum dan <strong>arahan teknis</strong> secara langsung kepada mahasiswa saat pengerjaan tugas.</span>
                            </li>
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="document-text" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Evaluation Design:</strong> Independently designing and creating <strong>Mid-term & Final Exam questions</strong> to test student understanding."><strong>Penyusunan Evaluasi:</strong> Merancang dan membuat <strong>soal UTS serta UAS</strong> secara mandiri untuk menguji pemahaman mahasiswa.</span>
                            </li>
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="clipboard" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Grading & Evaluation:</strong> Routinely <strong>grading weekly assignments</strong> and performing detailed calculations to determine student <strong>Final Grades</strong>."><strong>Penilaian & Evaluasi:</strong> Rutin <strong>mengoreksi tugas mingguan</strong> dan melakukan perhitungan detail untuk menentukan <strong>Nilai Final</strong> mahasiswa.</span>
                            </li>
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="people" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Classroom Management:</strong> Tasked with <strong>conditioning the room</strong> to be conducive and ensuring discipline during practical activities."><strong>Manajemen Kelas:</strong> Bertugas <strong>mengondisikan ruangan</strong> agar kondusif dan memastikan kedisiplinan selama kegiatan praktikum berlangsung.</span>
                            </li>
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="chatbubbles" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Interactive Discussion:</strong> Leading Q&A sessions to sharpen critical thinking, and awarding <strong>extra points</strong> for active students."><strong>Diskusi Interaktif:</strong> Memimpin sesi tanya jawab untuk mengasah daya kritis, serta memberikan <strong>poin nilai tambahan</strong> bagi mahasiswa yang aktif menjawab.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </details>

            <details name="career-accordion" class="group bg-[#1e1e24] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                <summary class="flex items-start gap-4 md:gap-6 p-5 md:p-6 cursor-pointer list-none relative pr-12 md:pr-10">
                    <div class="absolute top-6 right-5 text-gray-500 group-hover:text-emerald-400 transition-colors">
                         <ion-icon name="chevron-down" class="text-lg transition-transform duration-300 group-open:rotate-180"></ion-icon>
                    </div>
                    
                    <div class="shrink-0">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-open:bg-emerald-500/10 transition-colors">
                            <img src="assets/images/icon/syncore-logo.jpeg" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-1.5">
                            <div>
                                <h4 class="text-base md:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight" data-en="Internship (Bumdes.id)">Magang (Bumdes.id)</h4>
                                
                                <a href="https://www.syncore.co.id/" target="_blank" class="text-gray-400 text-sm mt-1 hover:text-emerald-400 transition-colors flex items-center gap-1 w-max">
                                    PT Syncore Indonesia <ion-icon name="open-outline"></ion-icon>
                                </a>

                                <p class="text-gray-500 text-[9px] md:text-sm mt-1 flex items-center gap-1">
                                    <ion-icon name="location-outline" class="text-emerald-400"></ion-icon> Bantul, D.I. Yogyakarta
                                </p>
                            </div>

                            <div class="mt-3 md:mt-0 flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1">
                                <span class="px-1.5 py-0 md:px-2 md:py-0.5 border border-emerald-500/30 text-emerald-300 text-[8px] md:text-[9px] capitalize md:uppercase font-bold tracking-normal md:tracking-wider rounded-full bg-emerald-500/5 whitespace-nowrap leading-relaxed">Internship</span>
                                <span class="text-gray-500 text-[10px] font-mono whitespace-nowrap">Feb 2024 — Jun 2024</span>
                            </div>
                        </div>
                    </div>
                </summary>

                <div class="px-6 pb-6 pt-0 animate-fade">
                    <div class="pl-0 md:pl-[72px] pt-2 border-t border-white/5 mt-2">
                         <p class="text-gray-400 text-sm mb-4 leading-relaxed text-justify" data-en="BUMDes.id is a platform owned by PT Meravi Visitama Indonesia focusing on mentoring, training, and digitizing Village-Owned Enterprises (BUMDes). Directly involved in BUMDes digitalization projects, institutional research, and training content management.">
                            BUMDes.id adalah platform milik PT Meravi Visitama Indonesia yang fokus pada pendampingan, pelatihan, dan digitalisasi Badan Usaha Milik Desa (BUMDes). Terlibat langsung dalam proyek digitalisasi BUMDes, riset kelembagaan, dan manajemen konten pelatihan.
                        </p>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="checkmark-done-circle" class="text-emerald-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Assisted in data collection and mapping of potential BUMDes across various provinces.">Membantu proses pendataan dan pemetaan potensi BUMDes binaan di berbagai provinsi.</span>
                            </li>
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="checkmark-done-circle" class="text-emerald-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Supported online training via Zoom and webinars with village stakeholders.">Mendukung kegiatan pelatihan online via Zoom dan webinar dengan stakeholder desa.</span>
                            </li>
                            <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="checkmark-done-circle" class="text-emerald-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Conducted proofreading, visual redesign, and module compilation into interactive PDFs.">Melakukan proofreading, redesign visual, dan kompilasi modul ke dalam bentuk PDF interaktif.</span>
                            </li>
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="checkmark-done-circle" class="text-emerald-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Acted as notetaker, co-host, or technical operator during training sessions.">Berperan sebagai notulen, co-host, atau operator teknis selama pelatihan berlangsung.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </details>

            <details name="career-accordion" class="group bg-[#1e1e24] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
                <summary class="flex items-start gap-4 md:gap-6 p-5 md:p-6 cursor-pointer list-none relative pr-12 md:pr-10">
                    <div class="absolute top-6 right-5 text-gray-500 group-hover:text-yellow-400 transition-colors">
                         <ion-icon name="chevron-down" class="text-lg transition-transform duration-300 group-open:rotate-180"></ion-icon>
                    </div>
                    
                    <div class="shrink-0">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-open:bg-yellow-500/10 transition-colors">
                            <ion-icon name="flash" class="text-2xl text-yellow-400"></ion-icon>
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-1.5">
                            <div>
                                <h4 class="text-base md:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight" data-en="Internship - Electrical Substation">Magang - Gardu Induk</h4>
                                
                                <a href="https://web.pln.co.id/" target="_blank" class="text-gray-400 text-sm mt-1 hover:text-yellow-400 transition-colors flex items-center gap-1 w-max">
                                    PT PLN (Persero) UPT Pekalongan <ion-icon name="open-outline"></ion-icon>
                                </a>

                                <p class="text-gray-500 text-[9px] md:text-sm mt-1 flex items-center gap-1">
                                    <ion-icon name="location-outline" class="text-yellow-400"></ion-icon> Pekalongan, Jawa Tengah
                                </p>
                            </div>

                            <div class="mt-3 md:mt-0 flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1">
                                <span class="px-1.5 py-0 md:px-2 md:py-0.5 border border-yellow-500/30 text-yellow-300 text-[8px] md:text-[9px] capitalize md:uppercase font-bold tracking-normal md:tracking-wider rounded-full bg-yellow-500/5 whitespace-nowrap leading-relaxed">Internship</span>
                                <span class="text-gray-500 text-[10px] font-mono whitespace-nowrap">Jan 2020 - Feb 2020</span>
                            </div>
                        </div>
                    </div>
                </summary>

                <div class="px-6 pb-6 pt-0 animate-fade">
                    <div class="pl-0 md:pl-[72px] pt-2 border-t border-white/5 mt-2">
                         <p class="text-gray-400 text-sm mb-4 leading-relaxed text-justify" data-en="Electrical Substation (GI) is a facility in the electrical system functioning to transform high voltage from power plants to medium or low voltage for distribution. During this internship, I was directly involved in operation, maintenance, and power system monitoring.">
                            Gardu Induk (GI) adalah fasilitas dalam sistem kelistrikan yang berfungsi untuk mentransformasikan tegangan tinggi dari pembangkit ke tegangan menengah atau rendah agar bisa disalurkan ke konsumen. Magang di Gardu Induk, saya terlibat langsung dalam proses pengoperasian, pemeliharaan, dan monitoring sistem tenaga listrik.
                        </p>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="speedometer" class="text-yellow-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Conducted daily inspections and measurements of electrical parameters (voltage, current, frequency, component temperature).">Melakukan inspeksi harian dan pengukuran parameter kelistrikan (tegangan, arus, frekuensi, suhu komponen).</span>
                            </li>
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="document-text" class="text-yellow-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Created daily technical reports and measurement documentation.">Membuat laporan teknis harian dan dokumentasi hasil pengukuran.</span>
                            </li>
                             <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                                <ion-icon name="shield-checkmark" class="text-yellow-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                                <span class="text-xs text-gray-300 leading-relaxed" data-en="Implemented OHS (Occupational Health and Safety) standards according to GI work procedures.">Menerapkan standar K3 (Keselamatan dan Kesehatan Kerja) sesuai prosedur kerja di GI.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </details>

        </div>
    </div>

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4" data-en="<ion-icon name='people' class='text-orange-400'></ion-icon> Organization & Volunteer">
            <ion-icon name="people" class="text-orange-400"></ion-icon>
            Pengalaman Organisasi & Volunteer
        </h3>

        <div class="space-y-6">
            <div class="bg-gradient-to-b from-[#1e1e24] to-[#151518] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors shadow-lg">
                <div class="flex items-center gap-5 mb-8 border-b border-white/10 pb-6 relative z-10">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-[#121212] rounded-2xl flex items-center justify-center p-1 border border-white/10 shadow-xl">
                        <img src="assets/images/icon/kspm-uty.jpeg" class="w-full h-full object-contain rounded-xl" alt="KSPM">
                    </div>
                    <div>
                        <h4 class="text-xl md:text-2xl font-bold text-white mb-1" data-en="Capital Market Study Group">Kelompok Studi Pasar Modal</h4>
                        <p class="text-orange-400 font-medium text-sm">Executive Board (2023 - 2024)</p>
                    </div>
                </div>
                <div class="relative pl-3 md:pl-4">
                    <div class="absolute left-[7px] top-2 bottom-6 w-[2px] bg-white/10 rounded-full h-full"></div>
                    
                    <div class="relative pl-8 pb-8 group">
                        <div class="absolute left-[-3px] top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                            <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                             <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="General Treasurer">Bendahara Umum</h5>
                             <button onclick="window.loadPage('certificate'); setTimeout(() => window.cert.open(2), 50)" class="flex items-center gap-1 px-2 py-0.5 rounded border border-orange-500/30 bg-orange-500/5 text-[9px] font-bold text-orange-400 uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all">
                                <ion-icon name="ribbon-outline"></ion-icon> Credential
                             </button>
                        </div>
                        <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Fully responsible for organizational fiscal management, annual budget planning, and periodic financial accountability reporting (LPJ).">Bertanggung jawab penuh atas manajemen fiskal organisasi, penyusunan RAPBO, serta transparansi pelaporan keuangan (LPJ) periodik.</p>
                        <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1"><ion-icon name="calendar-outline"></ion-icon> Okt 2023 - Okt 2024</span>
                    </div>

                    <div class="relative pl-8 pb-4 group">
                        <div class="absolute left-[-3px] top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                            <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                             <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="Visit Company Chairman">Ketua Panitia Visit Company</h5>
                             <button onclick="window.loadPage('certificate'); setTimeout(() => window.cert.open(3), 50)" class="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all">
                                <ion-icon name="ribbon-outline"></ion-icon> Credential
                             </button>
                        </div>
                        <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Initiated and led the delegation for comparative studies to public companies and capital market institutions to learn business practices and corporate governance.">Menginisiasi dan memimpin delegasi studi banding ke emiten serta institusi pasar modal untuk mempelajari praktik bisnis dan tata kelola perusahaan.</p>
                        <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1"><ion-icon name="calendar-outline"></ion-icon> 12 Jul 2024</span>
                    </div>

                    <div id="kspm-history-full" class="hidden animate-fade">
                        <div class="relative pl-8 pb-8 pt-4 group">
                            <div class="absolute left-[-3px] top-6 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                             <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                                 <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="National Seminar Coordinator">Koord. Acara Seminar Nasional</h5>
                                 <button onclick="window.loadPage('certificate'); setTimeout(() => window.cert.open(8), 50)" class="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all">
                                    <ion-icon name="ribbon-outline"></ion-icon> Credential
                                 </button>
                             </div>
                             <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Successfully managed a national-scale event with 850+ participants (online & offline), arranged the rundown, and presented industry expert speakers.">Sukses mengelola acara skala nasional dengan 850+ peserta (online & offline), menyusun rundown, dan menghadirkan narasumber pakar industri.</p>
                             <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1"><ion-icon name="calendar-outline"></ion-icon> 15 Feb 2024</span>
                        </div>
                        
                        <div class="relative pl-8 pb-8 group">
                            <div class="absolute left-[-3px] top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                             <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                                 <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="Person in Charge 'Sinau Trading Bareng'">PJ Sinau Trading Bareng (Sitraba)</h5>
                                 <button onclick="window.loadPage('certificate'); setTimeout(() => window.cert.open(7), 50)" class="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all">
                                    <ion-icon name="ribbon-outline"></ion-icon> Credential
                                 </button>
                             </div>
                             <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Responsible for routine trading education programs, developing basic technical analysis curriculum, and coordinating mentors to guide members.">Bertanggung jawab atas pelaksanaan program edukasi trading rutin, menyusun kurikulum dasar analisis teknikal, serta mengoordinasikan mentor untuk membimbing anggota.</p>
                             <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1"><ion-icon name="calendar-outline"></ion-icon> Feb 2024 - Mei 2024</span>
                        </div>

                        <div class="relative pl-8 group">
                            <div class="absolute left-[-3px] top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                             <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                                 <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="Organization Leadership Training">Pelatihan Kepemimpinan ORMAWA</h5>
                                 <button onclick="window.loadPage('certificate'); setTimeout(() => window.cert.open(6), 50)" class="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all">
                                    <ion-icon name="ribbon-outline"></ion-icon> Credential
                                 </button>
                             </div>
                             <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Attended intensive training on modern organizational governance, conflict management, and effective leadership strategies.">Mengikuti pembekalan intensif mengenai tata kelola organisasi modern, manajemen konflik, dan strategi kepemimpinan yang efektif.</p>
                             <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1"><ion-icon name="calendar-outline"></ion-icon> 4 Okt 2023</span>
                        </div>

                        <div class="relative pl-8 mt-8 group">
                            <div class="absolute left-[-3px] top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center border border-orange-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>

                             <div class="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                                 <h5 class="text-base font-bold text-white group-hover:text-orange-400 transition-colors" data-en="Participant & Others">Peserta & Lainnya</h5>
                                 <button onclick="window.loadPage('more')" class="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all">
                                    <ion-icon name="images-outline"></ion-icon> Gallery
                                 </button>
                             </div>
                             <p class="text-gray-400 text-xs leading-relaxed mb-1" data-en="Actively participated in various self-development agendas, capital market competitions, and social activities to broaden knowledge and network.">
                                Aktif berpartisipasi dalam berbagai agenda pengembangan diri, kompetisi pasar modal, dan kegiatan sosial untuk memperluas wawasan serta jejaring.
                             </p>
                             <span class="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                                <ion-icon name="calendar-outline"></ion-icon> 2022 - 2024
                             </span>
                        </div>

                    </div>
                </div>
                <div class="relative pl-12 mt-4 pt-2 border-t border-white/5 border-dashed">
                    <button class="btn-detail-toggle flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-orange-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all group/btn w-max" data-target="kspm-history-full">
                        <span data-en="Show Full">Show Full</span>
                        <ion-icon name="chevron-down" class="group-[.active]/btn:rotate-180 transition-transform text-lg"></ion-icon>
                    </button>
                </div>
            </div>

            <div class="bg-[#1e1e24] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors animate-fade">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                        <img src="assets/images/icon/uty.png" class="w-full h-full object-contain" alt="UTY">
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white" data-en="Exam Invigilator">Pengawas Ujian</h4>
                        <p class="text-gray-400 text-xs">Universitas Teknologi Yogyakarta</p>
                    </div>
                </div>

                <div class="mb-6 border-b border-white/5 pb-6">
                    <p class="text-gray-400 text-sm mb-4 leading-relaxed text-justify" data-en="Mandated as an <strong>Exam Invigilator</strong> to ensure academic evaluation implementation runs according to operational standards. Fully responsible for upholding <strong>integrity</strong>, validating <strong>administration</strong>, and maintaining a <strong>conducive</strong> exam room.">
                        Diamanahkan sebagai <strong>Pengawas Ujian</strong> untuk memastikan pelaksanaan evaluasi akademik berjalan sesuai standar operasional. Bertanggung jawab penuh dalam menegakkan <strong>integritas</strong>, memvalidasi <strong>administrasi</strong>, serta menjaga <strong>kondusivitas</strong> ruang ujian.
                    </p>
                    <ul class="grid grid-cols-1 gap-2">
                        <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                            <ion-icon name="shield-checkmark" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                            <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Supervision & Integrity:</strong> Conducted strict supervision to prevent cheating and guarantee participant <strong>academic honesty</strong>."><strong>Supervisi & Integritas:</strong> Melakukan pengawasan ketat untuk mencegah kecurangan dan menjamin <strong>kejujuran akademik</strong> peserta.</span>
                        </li>
                        <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                            <ion-icon name="id-card" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                            <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Administrative Validation:</strong> Verifying identity (Student ID & Exam Card) and completeness of Exam Minutes."><strong>Validasi Administrasi:</strong> Memverifikasi identitas (KTM & Kartu Ujian) serta kelengkapan Berita Acara Ujian.</span>
                        </li>
                        <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/list">
                            <ion-icon name="information-circle" class="text-blue-400 text-lg shrink-0 mt-0.5 group-hover/list:scale-110 transition-transform"></ion-icon>
                            <span class="text-xs text-gray-300 leading-relaxed" data-en="<strong>Instruction & Solution:</strong> Delivering rules firmly and promptly handling participant technical issues during exams."><strong>Instruksi & Solusi:</strong> Menyampaikan tata tertib secara tegas dan sigap menangani kendala teknis peserta saat ujian.</span>
                        </li>
                    </ul>
                </div>

                <div class="relative pl-3">
                    <div class="absolute left-[6px] top-2 bottom-6 w-[2px] bg-white/10 rounded-full"></div>
                    
                    <div class="relative pl-8 pb-6 group/item">
                        <div class="absolute left-[-3px] top-1 w-5 h-5 bg-[#1e1e24] rounded-full border border-blue-500 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                        <h5 class="text-white font-bold text-sm group-hover/item:text-blue-400 transition-colors" data-en="Final Semester Exam (UAS)">Ujian Akhir Semester (UAS)</h5>
                        <span class="text-blue-400 text-[10px] font-mono block mb-1 mt-0.5">12 Jan - 23 Jan 2026</span>
                        <p class="text-gray-500 text-[11px] italic" data-en="Odd Semester Period A.Y. 2025/2026">Periode UAS Ganjil T.A 2025/2026</p>
                    </div>

                    <div class="relative pl-8 group/item">
                        <div class="absolute left-[-3px] top-1 w-5 h-5 bg-[#1e1e24] rounded-full border border-blue-500 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                        <h5 class="text-white font-bold text-sm group-hover/item:text-blue-400 transition-colors" data-en="Mid-Semester Exam (UTS)">Ujian Tengah Semester (UTS)</h5>
                        <span class="text-blue-400 text-[10px] font-mono block mb-1 mt-0.5">10 Nov - 21 Nov 2025</span>
                        <p class="text-gray-500 text-[11px] italic" data-en="Odd Semester Period A.Y. 2025/2026">Periode UTS Ganjil T.A 2025/2026</p>
                    </div>
                </div>
                
            </div>

        </div>
    </div>

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4" data-en="<ion-icon name='laptop-outline' class='text-purple-400'></ion-icon> Portfolio">
            <ion-icon name="laptop-outline" class="text-purple-400"></ion-icon>
            Portofolio
        </h3>
        <div class="grid grid-cols-1 gap-4">
            
            <div class="group relative bg-[#1e1e24] border border-white/10 rounded-2xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute -right-10 -top-10 w-32 h-32 bg-orange-400/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-orange-400/20 transition-all"></div>
                <div class="relative z-10 flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shadow-sm">
                            <img src="assets/images/icon/dulpans-url.png" alt="Biolink Hub Icon" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <h3 class="text-white font-bold text-lg leading-tight group-hover:text-orange-yellow-crayola transition-colors">Dlpan Adi Saragih</h3>
                            <p class="text-[10px] text-orange-300 font-mono mt-0.5 tracking-wide">Personal Biolink</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span class="text-[9px] font-bold text-green-400 uppercase tracking-wider">Live</span>
                    </div>
                </div>

                <div class="relative z-10 mb-6">
                    <p class="text-gray-400 text-xs leading-relaxed text-justify" data-en="<strong>Integrated Biolink Platform</strong> (All-in-One) designed as a digital ecosystem hub. Connecting visitors to <strong>Professional Portfolio</strong>, LinkedIn profile, <strong>Online Store</strong>, and exclusive access to various <strong>Premium Online Tools</strong>. Built with SPA architecture for instant performance.">
                        Platform <strong>Biolink Terintegrasi</strong> (All-in-One) yang dirancang sebagai pusat ekosistem digital. Menghubungkan pengunjung ke <strong>Portofolio Profesional</strong>, profil LinkedIn, <strong>Online Store</strong>, serta akses eksklusif ke berbagai <strong>Premium Online Tools</strong>. Dibangun dengan arsitektur SPA untuk performa instan.
                    </p>
                </div>

                <div class="relative z-10 flex items-center justify-between pt-4 border-t border-white/5">
                    <div class="flex items-center gap-3">
                        <div class="flex -space-x-2">
                            <div class="w-7 h-7 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center text-orange-500 text-xs relative z-30" title="HTML5"><ion-icon name="logo-html5"></ion-icon></div>
                            <div class="w-7 h-7 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center text-cyan-400 text-xs relative z-20" title="Tailwind CSS"><ion-icon name="logo-css3"></ion-icon></div>
                            <div class="w-7 h-7 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center text-yellow-400 text-xs relative z-10" title="JavaScript"><ion-icon name="logo-javascript"></ion-icon></div>
                        </div>
                    </div>

                    <a href="https://www.dulpanadisaragih.my.id/" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola text-white hover:text-jet text-xs font-bold rounded-lg transition-all border border-white/10 hover:border-orange-yellow-crayola group/btn">
                        <span data-en="Visit Hub">Visit Hub</span>
                        <ion-icon name="arrow-forward" class="group-hover/btn:-rotate-45 transition-transform"></ion-icon>
                    </a>
                </div>
            </div>

    </div>

  </section>
</article>
`;

const createEnVer = (htmlString) => {
    const parser = document.createElement('div');
    parser.innerHTML = htmlString;
    parser.querySelectorAll('[data-en]').forEach(el => { el.innerHTML = el.getAttribute('data-en'); });
    return parser.innerHTML;
};

export const experienceContent = { id: contentOriginal, en: createEnVer(contentOriginal) };
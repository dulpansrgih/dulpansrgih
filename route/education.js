// ============================================
// 1. KONTEN UTAMA
// ============================================
const contentOriginal = `
<article class="education active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-8 relative overflow-hidden">

  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-yellow-crayola/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

  <header class="flex flex-col gap-3 relative z-10 px-1 md:px-0">
     <div class="flex items-center gap-3 md:gap-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Education <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Journey</span>
        </h2>
        <div class="h-1 flex-grow bg-gradient-to-r from-blue-500/30 to-transparent rounded-full ml-2"></div>
    </div>
    <div class="flex items-center gap-2 pl-1">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        <p class="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]" data-en="Academic History">Academic History</p>
    </div>
  </header>

  <section class="mt-4 relative">
    
    <div class="hidden md:block absolute left-[30px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-orange-400 to-emerald-500 rounded-full opacity-30"></div>

    <div class="space-y-6 md:space-y-14">

      <div class="relative pl-0 md:pl-28 group">
         
         <div class="hidden md:flex absolute left-[10px] top-0 w-12 h-12 bg-[#1e1e24] border-2 border-blue-400 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(96,165,250,0.5)] group-hover:scale-110 transition-transform duration-300">
            <img src="assets/images/icon/uty.png" class="w-8 h-8 object-contain" alt="UTY">
            <div class="absolute inset-0 rounded-full bg-blue-400/30 animate-ping z-10"></div>
         </div>

         <div class="bg-gradient-to-br from-blue-500/[0.05] to-transparent border border-blue-500/20 p-5 md:p-8 rounded-2xl hover:bg-blue-500/[0.08] transition-all duration-300 shadow-xl relative overflow-hidden group-hover:-translate-y-1">
            
            <div class="hidden md:block absolute top-0 right-0 px-4 py-1.5 bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase rounded-bl-xl border-b border-l border-blue-500/20 backdrop-blur-md" data-en="Graduated">
                Lulus
            </div>

            <div class="flex md:hidden items-center gap-4 mb-5 border-b border-blue-500/20 pb-4">
                <div class="w-14 h-14 bg-[#1e1e24] border border-blue-400/50 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                    <img src="assets/images/icon/uty.png" class="w-8 h-8 object-contain">
                </div>
                <div class="flex flex-col justify-center">
                    <a href="https://uty.ac.id/" target="_blank" class="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-blue-500/30 transition-colors w-fit">
                        Universitas Teknologi Yogyakarta
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                    <div class="text-xs text-gray-400 font-mono mt-1.5">Sept 2021 — Dec 2025</div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                    <h3 class="hidden md:flex text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight items-center gap-2">
                        <a href="https://uty.ac.id/" target="_blank" class="hover:underline decoration-blue-400/30 underline-offset-4 flex items-center gap-2">
                            Universitas Teknologi Yogyakarta
                            <ion-icon name="open-outline" class="text-lg text-blue-400 opacity-70 group-hover:opacity-100"></ion-icon>
                        </a>
                    </h3>
                    
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
                        <span class="text-blue-200 font-medium text-xs md:text-sm flex items-center gap-1.5" data-en="<ion-icon name='school' class='text-blue-400'></ion-icon> Bachelor of Management (HR)">
                            <ion-icon name="school" class="text-blue-400"></ion-icon> S1 Manajemen (SDM)
                        </span>
                        <span class="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span class="text-gray-400 text-xs md:text-sm flex items-center gap-1.5">
                            <ion-icon name="location-sharp" class="text-blue-400"></ion-icon> Sleman, DIY
                        </span>
                    </div>
                </div>
                <div class="hidden md:block shrink-0 mt-1 md:mt-0">
                    <span class="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-semibold">
                        Sept. 2021 — Dec. 2025
                    </span>
                </div>
            </div>

            <div class="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-5 text-justify border-l-2 border-blue-500/30 pl-4 relative">
               <p data-en="At Universitas Teknologi Yogyakarta, I actively developed myself through the Capital Market Study Group (KSPM) as the General Treasurer. This role gave me full responsibility for managing cash flow, preparing financial and funding reports, and designing organizational work programs.<br><br>My professional experience continued through an internship at BUMDes.id (PT Syncore Indonesia), a consultant focused on training, mentoring, and digital services to strengthen Village-Owned Enterprises throughout Indonesia.<br><br>Additionally, in the 7th semester, I was entrusted to be a Lecturer Assistant for the Financial Management Practice course for three parallel classes. In this role, I was responsible for teaching, drafting exam questions, and conducting final student assessments.">
               Di Universitas Teknologi Yogyakarta, saya aktif mengembangkan diri melalui Kelompok Studi Pasar Modal (KSPM) sebagai Bendahara Utama. Peran ini memberikan saya tanggung jawab penuh dalam mengelola arus kas, menyusun laporan keuangan dan pendanaan, serta merancang perencanaan hingga pelaksanaan program kerja organisasi. <br><br>
               Pengalaman profesional saya berlanjut melalui magang di BUMDes.id (PT Syncore Indonesia), sebuah konsultan yang berfokus pada pelatihan, pendampingan, dan layanan digital untuk memperkuat Badan Usaha Milik Desa di seluruh Indonesia. <br><br>
               Selain itu, pada semester 7, saya dipercaya menjadi Asisten Dosen mata kuliah Manajemen Keuangan Praktik untuk tiga kelas paralel (V, VI, dan VII). Dalam peran ini, saya bertanggung jawab untuk mengajar, menyusun soal ujian, serta melakukan penilaian akhir mahasiswa. 
               </p>
               <span class="text-blue-400 font-semibold mt-2 block">GPA: 3.54</span>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-blue-500/10">
                <div class="flex flex-wrap gap-2">
                   <span class="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-blue-500/20" data-en="HR Management">Manajemen SDM</span>
                   <span class="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-blue-500/20" data-en="Financial Management">Manajemen Keuangan</span>
                   <span class="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-blue-500/20" data-en="Lecturer Assistant">Asisten Dosen</span>
                </div>
                <button class="btn-detail-toggle w-full md:w-auto px-4 md:px-5 py-2.5 bg-[#1e1e24] hover:bg-blue-600 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-blue-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn" data-target="detail-uty">
                   <span data-en="Show Details">Lihat Detail</span>
                   <ion-icon name="chevron-down" class="text-sm transition-transform duration-300 group-[.active]/btn:rotate-180"></ion-icon>
                </button>
            </div>

            <div id="detail-uty" class="detail-content hidden mt-5 bg-black/20 rounded-xl p-4 md:p-5 border border-white/5 animate-fade">
               <h5 class="text-white text-xs md:text-sm font-bold mb-3 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2" data-en="<ion-icon name='star' class='text-yellow-500'></ion-icon> Activities & Organizations">
                  <ion-icon name="star" class="text-yellow-500"></ion-icon> Aktivitas Kegiatan & Organisasi
               </h5>
               <ul class="space-y-3 text-xs md:text-sm text-gray-400">
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-blue-500 mt-0.5 shrink-0"></ion-icon><span data-en="Became a Lecturer Assistant for Financial Management Practice Course (Class V, VI, & VII) for one semester.">Menjadi Asisten Dosen Mata Kuliah Manajemen Keuangan Praktik (Kelas V, VI, & VII) selama satu semester.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-blue-500 mt-0.5 shrink-0"></ion-icon><span data-en="Internship at PT Syncore Indonesia in Bumdes.id division (platform by Merapi Visitama Indonesia).">Semester 6 Magang di PT Syncore Indonesia dibagian Bumdes.id (platform dari Merapi Visitama Indonesia).</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-blue-500 mt-0.5 shrink-0"></ion-icon><span data-en="Served as General Treasurer at Capital Market Study Group (KSPM) UTY.">Menjadi Bendahara Umum di Kelompok Studi Pasar Modal UTY.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-blue-500 mt-0.5 shrink-0"></ion-icon><span data-en="Committee member for KSPM events: Industrial Visit Chairman, National Seminar Coordinator, Capital Market School, and Person in Charge for various activities.">Menjadi Panitia kegiatan selama dikepengurusan KSPM UTY seperti Ketua Kunjungan Industri, Koordinator Acara kegiatan Seminar Nasional Pasar Modal, Sekolah Pasar Modal, Holiday, Makrab, dan sebagai Penanggung Jawab kegiatan.</span></li>
               </ul>
            </div>
         </div>
      </div>

      <div class="relative pl-0 md:pl-28 group">
         
         <div class="hidden md:flex absolute left-[10px] top-0 w-12 h-12 bg-[#1e1e24] border-2 border-orange-500 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform duration-300">
            <img src="assets/images/icon/smkn4-pekalongan.png" class="w-8 h-8 object-contain" alt="SMK">
         </div>

         <div class="bg-gradient-to-br from-orange-500/[0.05] to-transparent border border-orange-500/20 p-5 md:p-8 rounded-2xl hover:bg-orange-500/[0.08] transition-all duration-300 shadow-xl relative overflow-hidden group-hover:-translate-y-1">
            
            <div class="hidden md:block absolute top-0 right-0 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-[10px] font-bold uppercase rounded-bl-xl border-b border-l border-orange-500/20 backdrop-blur-md" data-en="Graduated">
                Lulus
            </div>

            <div class="flex md:hidden items-center gap-4 mb-5 border-b border-orange-500/20 pb-4">
                <div class="w-14 h-14 bg-[#1e1e24] border border-orange-400/50 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    <img src="assets/images/icon/smkn4-pekalongan.png" class="w-8 h-8 object-contain">
                </div>
                <div class="flex flex-col justify-center">
                    <a href="https://www.smk4pekalongan.sch.id/" target="_blank" class="px-2 py-1 rounded bg-orange-500/20 border border-orange-500/30 text-orange-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-orange-500/30 transition-colors w-fit">
                        SMK Negeri 4 Pekalongan
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                    <div class="text-xs text-gray-400 font-mono mt-1.5">2018 — 2021</div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div class="pr-0 md:pr-0">
                    <h3 class="hidden md:flex text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors leading-tight items-center gap-2">
                        <a href="https://www.smk4pekalongan.sch.id/" target="_blank" class="hover:underline decoration-orange-400/30 underline-offset-4 flex items-center gap-2">
                            SMK Negeri 4 Pekalongan
                            <ion-icon name="open-outline" class="text-lg text-orange-400 opacity-70 group-hover:opacity-100"></ion-icon>
                        </a>
                    </h3>
                    
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                        <span class="text-orange-200 font-medium text-xs md:text-sm flex items-center gap-1.5" data-en="<ion-icon name='flash' class='text-orange-500'></ion-icon> Electrical Network Engineering">
                            <ion-icon name="flash" class="text-orange-500"></ion-icon> Teknik Jaringan Tenaga Listrik
                        </span>
                        <span class="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span class="text-gray-400 text-xs md:text-sm flex items-center gap-1.5">
                            <ion-icon name="location-sharp" class="text-orange-500"></ion-icon> Pekalongan, Jawa Tengah
                        </span>
                    </div>
                </div>
                <div class="hidden md:block shrink-0 mt-2 md:mt-0">
                    <span class="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-mono font-semibold">
                        2018 — 2021
                    </span>
                </div>
            </div>

            <div class="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-5 text-justify border-l-2 border-orange-500/30 pl-4 relative">
                <p data-en="During my vocational high school years, I was active in the Scout extracurricular and was entrusted to be the 'Pradana' (Head of Scout) for 2 terms. Through this organization, I honed my event management, student coordination, and effective communication skills.<br>I became accustomed to drafting formal documents ranging from Proposals, Budgets, to Accountability Reports. My experience also included active participation in routine training, camping activities, and Basic Leadership Training (LDK), which significantly shaped my physical and mental resilience and teamwork skills.">
                Selama menempuh pendidikan di SMK, saya aktif dalam ekstrakurikuler Pramuka dan dipercaya menjadi Pradana selama 2 periode, serta menjabat sebagai Pengurus Ambalan, Penegak Bantara, dan Laksana.
                Melalui organisasi ini, saya mengasah kemampuan manajemen acara, koordinasi antar siswa, serta komunikasi efektif. Di masa ini, saya telah terbiasa menyusun dokumen formal mulai dari Proposal, Rencana Anggaran Biaya (RAB), hingga Laporan Pertanggungjawaban (LPJ).
                Pengalaman saya sebagai Pradana juga mencakup partisipasi aktif dalam latihan rutin, kegiatan perkemahan, Lomba Tingkat (LT), serta Pelatihan Dasar Kepemimpinan (LDK), yang secara signifikan membentuk ketahanan fisik, mental, dan keterampilan kerja sama tim.
                </p>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-orange-500/10">
                <div class="flex flex-wrap gap-2">
                   <span class="px-2 md:px-3 py-1 bg-orange-500/10 text-orange-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-orange-500/20" data-en="Scout Leader">Pradana Pramuka</span>
                   <span class="px-2 md:px-3 py-1 bg-orange-500/10 text-orange-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-orange-500/20">Leadership</span>
                </div>
                <button class="btn-detail-toggle w-full md:w-auto px-4 md:px-5 py-2.5 bg-[#1e1e24] hover:bg-orange-600 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-orange-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn" data-target="detail-smk">
                   <span data-en="Show Details">Lihat Detail</span>
                   <ion-icon name="chevron-down" class="text-sm transition-transform duration-300 group-[.active]/btn:rotate-180"></ion-icon>
                </button>
            </div>

            <div id="detail-smk" class="detail-content hidden mt-5 bg-black/20 rounded-xl p-4 md:p-5 border border-white/5 animate-fade">
               <h5 class="text-white text-xs md:text-sm font-bold mb-3 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2" data-en="<ion-icon name='people' class='text-orange-500'></ion-icon> Activities & Organizations">
                  <ion-icon name="people" class="text-orange-500"></ion-icon> Aktivitas Kegiatan & Organisasi
               </h5>
               <ul class="space-y-3 text-xs md:text-sm text-gray-400">
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-orange-500 mt-0.5 shrink-0"></ion-icon><span data-en="Scout Leader (Pradana) for 2 terms.">Menjadi Pradana Pramuka 2 periode & Penegak Laksana.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-orange-500 mt-0.5 shrink-0"></ion-icon><span data-en="Youth Red Cross (PMR) Member.">Anggota PMR (Palang Merah Remaja).</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-orange-500 mt-0.5 shrink-0"></ion-icon><span data-en="Inter-major Competition Coordinator.">Koordinator lomba antarjurusan.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-orange-500 mt-0.5 shrink-0"></ion-icon><span data-en="Ceremony Officer & Class Meeting Committee.">Petugas Upacara & Panitia Class Meeting.</span></li>
               </ul>
            </div>
         </div>
      </div>

      <div class="relative pl-0 md:pl-28 group">
         
         <div class="hidden md:flex absolute left-[10px] top-0 w-12 h-12 bg-[#1e1e24] border-2 border-emerald-500 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-300">
            <img src="assets/images/icon/smpn4-pekalongan.png" class="w-8 h-8 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="SMP">
         </div>

         <div class="bg-gradient-to-br from-emerald-500/[0.05] to-transparent border border-emerald-500/20 p-5 md:p-8 rounded-2xl hover:bg-emerald-500/[0.08] transition-all duration-300 shadow-xl relative overflow-hidden group-hover:-translate-y-1">
            
            <div class="hidden md:block absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase rounded-bl-xl border-b border-l border-emerald-500/20 backdrop-blur-md" data-en="Graduated">
                Lulus
            </div>

            <div class="flex md:hidden items-center gap-4 mb-5 border-b border-emerald-500/20 pb-4">
                <div class="w-14 h-14 bg-[#1e1e24] border border-emerald-400/50 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <img src="assets/images/icon/smpn4-pekalongan.png" class="w-8 h-8 object-contain">
                </div>
                <div class="flex flex-col justify-center">
                    <a href="http://www.smp4pekalongan.sch.id/" target="_blank" class="px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-emerald-500/30 transition-colors w-fit">
                        SMP Negeri 4 Pekalongan
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                    <div class="text-xs text-gray-400 font-mono mt-1.5">2015 — 2018</div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div class="pr-0 md:pr-0">
                    <h3 class="hidden md:flex text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight items-center gap-2">
                        <a href="http://www.smp4pekalongan.sch.id/" target="_blank" class="hover:underline decoration-emerald-400/30 underline-offset-4 flex items-center gap-2">
                            SMP Negeri 4 Pekalongan
                            <ion-icon name="open-outline" class="text-lg text-emerald-400 opacity-70 group-hover:opacity-100"></ion-icon>
                        </a>
                    </h3>
                    
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                        <span class="text-emerald-200 font-medium text-xs md:text-sm flex items-center gap-1.5" data-en="<ion-icon name='book' class='text-emerald-500'></ion-icon> Education">
                            <ion-icon name="book" class="text-emerald-500"></ion-icon> Pendidikan
                        </span>
                        <span class="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span class="text-gray-400 text-xs md:text-sm flex items-center gap-1.5">
                            <ion-icon name="location-sharp" class="text-emerald-500"></ion-icon> Pekalongan, Jawa Tengah
                        </span>
                    </div>
                </div>
                <div class="hidden md:block shrink-0 mt-2 md:mt-0">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold">
                        2015 — 2018
                    </span>
                </div>
            </div>

            <div class="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-5 text-justify border-l-2 border-emerald-500/30 pl-4 relative">
               <p data-en="During my study at SMP Negeri 4 Pekalongan, I was active in various academic and non-academic activities. I participated in Scouts, sports, religious activities, and group projects. I was also involved as a committee member in school events such as class meetings, national holidays, and art performances. Through these activities, I learned a lot about leadership, communication, and the importance of contributing to the surrounding environment.">
               Saat menempuh pendidikan di SMP Negeri 4 Pekalongan saya aktif dalam berbagai kegiatan baik akademik maupun non akademik. Saya pernah mengikuti pramuka, olahraga, serta kegiatan keagamaan, dan juga berpartisipasi dalam kerja kelompok dan lomba. saya beberapa kali terlibat sebagai panitia dalam acara sekolah seperti class meeting, peringatan hari besar nasional, dan pentas seni. Melalui kegiatan-kegiatan tersebut, saya belajar banyak tentang kepemimpinan, komunikasi, serta pentingnya berkontribusi untuk lingkungan sekitar.
               </p>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-emerald-500/10">
                <div class="flex flex-wrap gap-2">
                   <span class="px-2 md:px-3 py-1 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-emerald-500/20" data-en="Student Council">OSIS</span>
                   <span class="px-2 md:px-3 py-1 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-emerald-500/20" data-en="Scout">Pramuka</span>
                   <span class="px-2 md:px-3 py-1 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded border border-emerald-500/20">Karate</span>
                </div>
                <button class="btn-detail-toggle w-full md:w-auto px-4 md:px-5 py-2.5 bg-[#1e1e24] hover:bg-emerald-600 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn" data-target="detail-smp">
                   <span data-en="Show Details">Lihat Detail</span>
                   <ion-icon name="chevron-down" class="text-sm transition-transform duration-300 group-[.active]/btn:rotate-180"></ion-icon>
                </button>
            </div>

            <div id="detail-smp" class="detail-content hidden mt-5 bg-black/20 rounded-xl p-4 md:p-5 border border-white/5 animate-fade">
               <h5 class="text-white text-xs md:text-sm font-bold mb-3 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2" data-en="<ion-icon name='ribbon' class='text-emerald-500'></ion-icon> Activities & Organizations">
                  <ion-icon name="ribbon" class="text-emerald-500"></ion-icon> Aktivitas Kegiatan & Organisasi
               </h5>
               <ul class="space-y-3 text-xs md:text-sm text-gray-400">
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-emerald-500 mt-0.5 shrink-0"></ion-icon><span data-en="Scout Leader (Pradana) for Junior High.">Pradana Pramuka Penggalang.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-emerald-500 mt-0.5 shrink-0"></ion-icon><span data-en="Student Council Member & Ceremony Officer.">Pengurus OSIS & Petugas Upacara.</span></li>
                  <li class="flex gap-2 md:gap-3 items-start"><ion-icon name="caret-forward-circle" class="text-emerald-500 mt-0.5 shrink-0"></ion-icon><span data-en="Karate Athlete & School Band.">Atlet Ekstrakulikuler Karate & Band Sekolah.</span></li>
               </ul>
            </div>
         </div>
      </div>

    </div>
  </section>
</article>
`;

// ============================================
// 2. AUTO TRANSLATE HELPER
// ============================================
const createEnVer = (htmlString) => {
    const parser = document.createElement('div');
    parser.innerHTML = htmlString;
    parser.querySelectorAll('[data-en]').forEach(el => { el.innerHTML = el.getAttribute('data-en'); });
    return parser.innerHTML;
};

// ============================================
// 3. EXPORT MODULES
// ============================================
export const educationContent = { 
    id: contentOriginal, 
    en: createEnVer(contentOriginal) 
};
export const experienceContent = `
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
        <p class="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">Professional, Volunteer & Freelance</p>
    </div>
  </header>

  <section class="mt-2 relative z-10 space-y-14">

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
            <ion-icon name="briefcase" class="text-blue-400"></ion-icon>
            Professional Experience
        </h3>

        <div class="space-y-6">

            <div class="group bg-[#1e1e24] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div class="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="shrink-0">
                        <div class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                            <img src="assets/images/icon/uty.png" class="w-full h-full object-contain" alt="UTY">
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-2">
                            <div>
                                <h4 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Asisten Dosen (MKP)</h4>
                                <p class="text-gray-400 text-sm">Universitas Teknologi Yogyakarta • Part-time</p>
                            </div>
                            <span class="mt-2 md:mt-0 px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-mono rounded border border-blue-500/20">
                                Sep 2024 — Jan 2025
                            </span>
                        </div>
                        
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            Dipercaya oleh Kaprodi Manajemen untuk mengampu mata kuliah "Manajemen Keuangan Praktik" di 3 kelas berbeda. Saya bertugas membimbing praktikum, memberikan pemahaman teknis analisis keuangan, serta mengevaluasi hasil kerja mahasiswa.
                        </p>

                        <button class="btn-detail-toggle text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-2 group/btn" data-target="detail-asdos">
                            View Duties <ion-icon name="chevron-down" class="group-[.active]/btn:rotate-180 transition-transform"></ion-icon>
                        </button>
                        
                        <div id="detail-asdos" class="hidden pl-4 border-l border-blue-500/30 mt-3 animate-fade">
                            <ul class="space-y-1.5 text-sm text-gray-400 list-disc pl-4">
                                <li>Mengajar praktikum di Kelas V, VI, & VII.</li>
                                <li>Mentoring penggunaan software keuangan & Excel.</li>
                                <li>Menilai tugas dan memberikan feedback.</li>
                                <li>Jembatan komunikasi Mahasiswa & Dosen.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group bg-[#1e1e24] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div class="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="shrink-0">
                        <div class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                            <img src="assets/images/icon/syncore-logo.jpeg" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-2">
                            <div>
                                <h4 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Digital Transformation Intern</h4>
                                <p class="text-gray-400 text-sm">PT Syncore Indonesia (Bumdes.id) • Internship</p>
                            </div>
                            <span class="mt-2 md:mt-0 px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-mono rounded border border-blue-500/20">
                                Feb 2024 — Jun 2024
                            </span>
                        </div>
                        
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            Bergabung dalam divisi Bumdes.id yang berfokus pada digitalisasi ekonomi desa. Terlibat langsung dalam riset pasar strategis, pengelolaan big data mitra BUMDes, dan pendampingan implementasi sistem digital.
                        </p>

                        <button class="btn-detail-toggle text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-2 group/btn" data-target="detail-syncore">
                            View Duties <ion-icon name="chevron-down" class="group-[.active]/btn:rotate-180 transition-transform"></ion-icon>
                        </button>
                        
                        <div id="detail-syncore" class="hidden pl-4 border-l border-blue-500/30 mt-3 animate-fade">
                            <ul class="space-y-1.5 text-sm text-gray-400 list-disc pl-4">
                                <li>Riset potensi pasar produk BUMDes.</li>
                                <li>Data Entry & Validasi Database CRM Mitra.</li>
                                <li>Membantu persiapan materi pelatihan digital.</li>
                                <li>Koordinasi teknis website profil desa.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
            <ion-icon name="people" class="text-orange-400"></ion-icon>
            Organizational Leadership & Volunteer
        </h3>

        <div class="space-y-6">
            
            <div class="group bg-[#1e1e24] border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                <div class="absolute top-0 left-0 w-1 h-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors"></div>
                
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="shrink-0">
                        <div class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                            <img src="assets/images/icon/uty.png" class="w-full h-full object-contain" alt="UTY">
                        </div>
                    </div>
                    
                    <div class="grow">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-2">
                            <div>
                                <h4 class="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Pengawas Ujian</h4>
                                <p class="text-gray-400 text-sm">Universitas Teknologi Yogyakarta • Volunteer/Contract</p>
                            </div>
                            <span class="mt-2 md:mt-0 px-3 py-1 bg-orange-500/10 text-orange-300 text-xs font-mono rounded border border-orange-500/20">
                                12 Jan 2026 — 23 Jan 2026
                            </span>
                        </div>
                        
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            Bertanggung jawab penuh atas integritas pelaksanaan ujian akhir semester. Memastikan tata tertib berjalan dengan disiplin, memverifikasi kehadiran peserta, dan membuat berita acara pelaksanaan ujian secara akurat.
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-white/5 text-gray-500 text-[10px] uppercase font-bold rounded border border-white/10">Integrity</span>
                            <span class="px-2 py-1 bg-white/5 text-gray-500 text-[10px] uppercase font-bold rounded border border-white/10">Discipline</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-b from-[#1e1e24] to-[#151518] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                <div class="flex items-center gap-5 mb-8 border-b border-white/10 pb-6">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-1 border border-white/10 shadow-lg">
                        <img src="assets/images/icon/kspm-uty.jpeg" class="w-full h-full object-contain rounded-xl" alt="KSPM">
                    </div>
                    <div>
                        <h4 class="text-2xl font-bold text-white mb-1">Kelompok Studi Pasar Modal (KSPM)</h4>
                        <p class="text-orange-400 font-medium text-sm">Universitas Teknologi Yogyakarta</p>
                        <div class="flex items-center gap-2 mt-2">
                            <span class="px-2 py-0.5 bg-orange-500/10 text-orange-300 text-[10px] font-bold rounded border border-orange-500/20">Executive Board</span>
                            <span class="text-gray-500 text-xs">2023 - 2024</span>
                        </div>
                    </div>
                </div>

                <div class="relative space-y-8 pl-4 md:pl-6 before:absolute before:left-[23px] md:before:left-[31px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                    
                    <div class="relative pl-8 group">
                        <div class="absolute left-0 top-1 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#1e1e24] shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10"></div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center mb-2">
                            <h5 class="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Bendahara Umum</h5>
                            <span class="text-xs text-gray-500 font-mono">2023 - 2024</span>
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed mb-2">
                            Mengelola arus kas organisasi, menyusun Rancangan Anggaran (RAPBO), dan Laporan Pertanggungjawaban (LPJ). Merancang strategi *fundraising* kreatif (Danus) untuk operasional organisasi.
                        </p>
                    </div>

                    <div class="relative pl-8 group">
                        <div class="absolute left-0 top-1.5 w-3 h-3 bg-white/30 rounded-full border-2 border-[#1e1e24] group-hover:bg-orange-400 transition-colors z-10"></div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center mb-1">
                            <h5 class="text-md font-bold text-gray-200 group-hover:text-white">Ketua Panitia Kunjungan Industri</h5>
                            <span class="text-xs text-gray-500 font-mono">2023</span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed mb-2">
                            Menginisiasi dan memimpin kunjungan studi ke emiten serta institusi keuangan (BEI/OJK), menjalin kerjasama eksternal, dan mengkoordinir mobilisasi ratusan peserta.
                        </p>
                    </div>

                    <div class="relative pl-8 group">
                        <div class="absolute left-0 top-1.5 w-3 h-3 bg-white/30 rounded-full border-2 border-[#1e1e24] group-hover:bg-orange-400 transition-colors z-10"></div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center mb-1">
                            <h5 class="text-md font-bold text-gray-200 group-hover:text-white">Penanggung Jawab (PJ) Program</h5>
                            <span class="text-xs text-gray-500 font-mono">Various Events</span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed mb-2">
                            Bertanggung jawab atas keberhasilan program kerja rutin seperti "Sinau Trading Bareng" dan "Sekolah Pasar Modal". Memastikan kurikulum materi relevan dengan kondisi pasar modal terkini.
                        </p>
                    </div>

                    <div class="relative pl-8 group">
                        <div class="absolute left-0 top-1.5 w-3 h-3 bg-white/30 rounded-full border-2 border-[#1e1e24] group-hover:bg-orange-400 transition-colors z-10"></div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center mb-1">
                            <h5 class="text-md font-bold text-gray-200 group-hover:text-white">Panitia Aktif & Staff Divisi</h5>
                            <span class="text-xs text-gray-500 font-mono">Event Based</span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed mb-2">
                            Terlibat aktif dalam berbagai peran teknis lapangan:
                        </p>
                        <ul class="text-xs text-gray-400 list-disc pl-4 space-y-1">
                            <li><strong>Koordinator Acara (Seminar Nasional):</strong> Mengatur rundown dan 3 narasumber expert untuk 850+ peserta.</li>
                            <li><strong>Sie Acara & Humas:</strong> Mengelola konsep acara (Sitraba) dan komunikasi publik untuk promosi kegiatan.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div>
        <h3 class="flex items-center gap-3 text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
            <ion-icon name="laptop-outline" class="text-purple-400"></ion-icon>
            Freelance & Creative Development
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="group bg-[#1e1e24] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl">
                        <ion-icon name="code-slash"></ion-icon>
                    </div>
                    <span class="px-3 py-1 bg-white/5 text-gray-400 text-[10px] uppercase font-bold rounded">Freelance</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Web Development Projects</h4>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    Mengembangkan website profil dan landing page menggunakan teknologi modern. Berpengalaman dalam pembuatan Biolink, Company Profile, dan integrasi CMS sederhana.
                </p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-purple-500/10 text-purple-300 text-[10px] font-bold rounded">HTML/CSS</span>
                    <span class="px-2 py-1 bg-purple-500/10 text-purple-300 text-[10px] font-bold rounded">Biolink</span>
                </div>
            </div>

            <div class="group bg-[#1e1e24] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl">
                        <ion-icon name="brush"></ion-icon>
                    </div>
                    <span class="px-3 py-1 bg-white/5 text-gray-400 text-[10px] uppercase font-bold rounded">Freelance</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Creative Design Services</h4>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    Menyediakan jasa desain grafis untuk kebutuhan media sosial, presentasi bisnis, dan materi promosi UMKM menggunakan tools seperti Canva dan Photoshop.
                </p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-purple-500/10 text-purple-300 text-[10px] font-bold rounded">Social Media</span>
                    <span class="px-2 py-1 bg-purple-500/10 text-purple-300 text-[10px] font-bold rounded">Branding</span>
                </div>
            </div>

        </div>
    </div>

  </section>
</article>
`;
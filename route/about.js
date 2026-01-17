export const aboutContent = `
<style>
  /* SCROLLBAR ESTETIK FINAL */
  .scrollbar-estetik::-webkit-scrollbar {
      height: 3px;  /* Horizontal (Mobile Slider) */
      width: 6px;   /* FIXED: Vertikal (Desktop Scroll) - Wajib ada width biar muncul */
  }
  
  .scrollbar-estetik::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
      margin-block: 5px; 
      border-radius: 10px;
  }
  
  .scrollbar-estetik::-webkit-scrollbar-thumb {
      background: #fbbf24; /* Warna Orange Emas */
      border-radius: 10px;
  }
  
  .scrollbar-estetik::-webkit-scrollbar-thumb:hover {
      background: #d97706; 
  }
</style>

<article class="about active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-8 relative overflow-hidden">
  
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

  <header class="flex flex-col gap-3 relative z-10">
     <div class="flex items-center gap-3 md:gap-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          About <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-yellow-crayola to-amber-600">Me</span>
        </h2>
        <div class="h-1 flex-grow bg-gradient-to-r from-orange-500/30 to-transparent rounded-full ml-2"></div>
    </div>
    
    <div class="flex items-center gap-2 pl-1">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-yellow-crayola animate-pulse"></span>
        <p class="text-[11px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">Bachelor of Management • HR Specialist</p>
    </div>
  </header>

  <section class="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10 mt-2">
    <div class="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
        <div>
            <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Human Capital <br>
              <span class="text-gray-400">Strategist.</span>
            </h1>
        </div>
        
        <div class="text-gray-300 text-sm md:text-[16px] leading-relaxed max-w-2xl mx-auto md:mx-0 space-y-5 text-justify md:text-left">
            <p>
               Halo! Saya <strong class="text-white font-bold text-lg">Dulpan Adi Saragih</strong>.
            </p>
            <p>
               Saya adalah lulusan <strong class="text-orange-yellow-crayola">Universitas Teknologi Yogyakarta (UTY)</strong> jurusan <span class="text-white font-medium">Manajemen</span> dengan konsentrasi <strong class="text-orange-yellow-crayola">Manajemen Sumber Daya Manusia (MSDM)</strong>.
            </p>
            <p>
               Saya tidak hanya fokus pada pengelolaan SDM, tetapi juga memiliki kompetensi kuat dalam <span class="text-white font-medium">Analisis Keuangan</span> dan <span class="text-white font-medium">Strategi Pemasaran</span>. Kombinasi ini memungkinkan saya menciptakan ekosistem kerja yang produktif, efisien secara biaya, dan berorientasi pasar.
            </p>
        </div>

        <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button onclick="window.toggleAboutModal(true)" 
                    class="group px-6 py-3 bg-gradient-to-r from-orange-yellow-crayola to-amber-600 text-jet font-bold rounded-xl shadow-[0_0_20px_rgba(255,180,0,0.3)] hover:shadow-[0_0_30px_rgba(255,180,0,0.5)] hover:scale-105 transition-all active:scale-95 flex items-center gap-2">
                <span>View Full Profile</span>
                <ion-icon name="arrow-forward-circle" class="text-xl group-hover:rotate-45 transition-transform"></ion-icon>
            </button>
            <a href="https://linkedin.openinapp.co/dulpansrgih" target="_blank" class="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 group">
                <ion-icon name="logo-linkedin" class="text-xl text-blue-400 group-hover:scale-110 transition-transform"></ion-icon>
                <span>LinkedIn</span>
            </a>
        </div>
    </div>

    <div class="relative w-[240px] md:w-[280px] aspect-square flex items-center justify-center shrink-0 order-1 md:order-2">
        <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-full blur-[60px] animate-pulse"></div>
        <div class="relative w-full h-full bg-[#1e1e24] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
            <img src="assets/images/icon/myprof.jpg" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Dulpan Adi">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <p class="text-xs text-orange-yellow-crayola font-bold tracking-widest mb-1">MSDM • FINANCE</p>
                <p class="text-white font-bold text-xl leading-none">Yogyakarta, ID</p>
            </div>
        </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
      <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
          <ion-icon name="people-circle-outline" class="text-3xl text-orange-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
          <h3 class="text-white font-bold text-md mb-1">HR Management</h3>
          <p class="text-gray-400 text-xs leading-relaxed">Fokus pada pengembangan talenta, rekrutmen, dan efektivitas organisasi.</p>
      </div>

      <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
          <ion-icon name="stats-chart-outline" class="text-3xl text-blue-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
          <h3 class="text-white font-bold text-md mb-1">Finance & Marketing</h3>
          <p class="text-gray-400 text-xs leading-relaxed">Menguasai analisis keuangan dan strategi pemasaran yang terintegrasi.</p>
      </div>

      <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
          <ion-icon name="shield-checkmark-outline" class="text-3xl text-green-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
          <h3 class="text-white font-bold text-md mb-1">Organizational Leader</h3>
          <p class="text-gray-400 text-xs leading-relaxed">Pengalaman memimpin organisasi dan pengelolaan anggaran (Bendahara).</p>
      </div>
  </section>

  <section class="pt-4 border-t border-white/5">
     <div class="flex items-center justify-between mb-4">
        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Connect & Explore</h3>
        <div class="h-px bg-white/10 flex-grow ml-4"></div>
     </div>
     <div class="flex md:grid md:grid-cols-4 gap-3 overflow-x-auto pb-6 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 snap-x scrollbar-estetik">
        <a href="https://www.dulpanadisaragih.my.id/" target="_blank" class="min-w-[160px] md:min-w-0 p-3 rounded-xl bg-[#1e1e24] border border-white/5 hover:border-orange-yellow-crayola/50 transition-all flex items-center gap-3 group snap-center">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0"><img src="assets/images/prof-link.png" class="w-full h-full object-cover"></div>
            <div class="overflow-hidden"><h5 class="text-white text-xs font-bold truncate group-hover:text-orange-yellow-crayola">Personal Web</h5><p class="text-[10px] text-gray-500 truncate">Portfolio Center</p></div>
        </a>
        <a href="https://the.dulpanadisaragih.my.id/" target="_blank" class="min-w-[160px] md:min-w-0 p-3 rounded-xl bg-[#1e1e24] border border-white/5 hover:border-orange-yellow-crayola/50 transition-all flex items-center gap-3 group snap-center">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0"><img src="assets/images/the-dulls.png" class="w-full h-full object-cover"></div>
            <div class="overflow-hidden"><h5 class="text-white text-xs font-bold truncate group-hover:text-orange-yellow-crayola">The Dulls</h5><p class="text-[10px] text-gray-500 truncate">Creative Works</p></div>
        </a>
        <a href="https://info.kspmuty.com/" target="_blank" class="min-w-[160px] md:min-w-0 p-3 rounded-xl bg-[#1e1e24] border border-white/5 hover:border-orange-yellow-crayola/50 transition-all flex items-center gap-3 group snap-center">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0"><img src="assets/images/kspm-link.png" class="w-full h-full object-cover"></div>
            <div class="overflow-hidden"><h5 class="text-white text-xs font-bold truncate group-hover:text-orange-yellow-crayola">KSPM UTY</h5><p class="text-[10px] text-gray-500 truncate">Organization</p></div>
        </a>
        <a href="https://qris.dulpanadisaragih.my.id/" target="_blank" class="min-w-[160px] md:min-w-0 p-3 rounded-xl bg-[#1e1e24] border border-white/5 hover:border-orange-yellow-crayola/50 transition-all flex items-center gap-3 group snap-center">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0"><img src="assets/images/support.png" class="w-full h-full object-cover"></div>
            <div class="overflow-hidden"><h5 class="text-white text-xs font-bold truncate group-hover:text-orange-yellow-crayola">Support Me</h5><p class="text-[10px] text-gray-500 truncate">Donation / QRIS</p></div>
        </a>
     </div>
  </section>
</article>


<div id="about-modal" class="hidden fixed inset-0 z-[9999] flex items-end md:items-center justify-center">
    
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[4px] transition-opacity opacity-0" onclick="window.toggleAboutModal(false)"></div>
    
    <div id="modal-card" class="relative w-full h-[90vh] md:h-auto md:max-h-[85vh] md:max-w-5xl md:w-full bg-[#18181b] rounded-t-[30px] md:rounded-3xl border-t border-white/10 md:border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) translate-y-full md:translate-y-10 md:scale-95 opacity-0 z-20">
        
        <div class="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full md:hidden z-30" onclick="window.toggleAboutModal(false)"></div>

        <div class="md:hidden pt-8 pb-4 px-6 border-b border-white/5 bg-[#18181b] shrink-0 flex items-center justify-between">
            <div>
                <h3 class="text-2xl font-bold text-white tracking-tight">Profile Details</h3>
                <p class="text-xs text-gray-400">MSDM • Finance • Marketing</p>
            </div>
            <button onclick="window.toggleAboutModal(false)" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center active:scale-90 transition-transform">
                <ion-icon name="close" class="text-xl"></ion-icon>
            </button>
        </div>

        <div class="hidden md:flex w-1/3 bg-[#1e1e24] relative p-8 flex-col justify-between border-r border-white/5">
             <div class="absolute top-0 right-0 p-6 opacity-5 pointer-events-none"><ion-icon name="finger-print" class="text-9xl text-white"></ion-icon></div>
            <div class="relative z-10">
                <div class="w-32 h-32 rounded-2xl p-1 bg-gradient-to-br from-orange-yellow-crayola to-amber-600 mb-6 shadow-lg">
                    <img src="assets/images/icon/myprof.jpg" class="w-full h-full object-cover rounded-xl bg-[#1e1e24]">
                </div>
                
                <h3 class="text-2xl xl:text-3xl font-bold text-white leading-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis">Dulpan Adi Saragih</h3>
                
                <div class="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <p class="text-orange-yellow-crayola text-xs font-bold tracking-wide uppercase">Bachelor of Management</p>
                </div>
            </div>
            <div class="mt-8 space-y-5 relative z-10">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-orange-yellow-crayola shrink-0"><ion-icon name="school"></ion-icon></div>
                    <div><p class="text-xs text-gray-500 uppercase font-bold">University</p><p class="text-white text-sm">Universitas Teknologi Yogyakarta</p></div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-orange-yellow-crayola shrink-0"><ion-icon name="location"></ion-icon></div>
                    <div><p class="text-xs text-gray-500 uppercase font-bold">Location</p><p class="text-white text-sm">Yogyakarta, Indonesia</p></div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-2/3 bg-[#121212] flex flex-col h-full overflow-hidden relative">
            
            <div class="hidden md:flex p-6 border-b border-white/5 justify-between items-center shrink-0">
                <h4 class="text-gray-400 text-sm font-medium tracking-wide">FULL BACKGROUND</h4>
                <button onclick="window.toggleAboutModal(false)" class="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-500 text-gray-400 items-center justify-center transition-all flex">
                    <ion-icon name="close" class="text-xl"></ion-icon>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto min-h-0 scrollbar-estetik p-6 md:px-10 md:pb-10 md:pt-4 space-y-8 pb-20">
                
                <div class="flex md:hidden items-center gap-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div class="w-16 h-16 rounded-xl bg-orange-500/20 overflow-hidden shrink-0">
                        <img src="assets/images/icon/myprof.jpg" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h4 class="text-white font-bold text-lg">Dulpan Adi Saragih</h4>
                        <p class="text-orange-yellow-crayola text-xs font-mono uppercase">MSDM • Finance • Marketing</p>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-white mb-3">Academic & <span class="text-orange-yellow-crayola">Skills</span></h3>
                    <div class="text-gray-300 text-sm leading-7 space-y-3 text-justify">
                        <p>
                            Lulusan <strong>Universitas Teknologi Yogyakarta (UTY)</strong> jurusan Manajemen dengan spesialisasi <strong>MSDM</strong>. Saya memiliki keunggulan kompetitif berupa pemahaman lintas disiplin ilmu.
                        </p>
                        <p>
                             Di balik fokus saya pada <em>Human Capital</em>, saya juga menguasai dasar-dasar <strong>Manajemen Keuangan</strong> (analisis laporan, budgeting) dan <strong>Manajemen Pemasaran</strong> (strategi pasar, perilaku konsumen). Ini membuat saya mampu mengambil keputusan manajerial yang holistik.
                        </p>
                    </div>
                </div>

                <div class="p-4 rounded-2xl bg-gradient-to-r from-green-900/20 to-emerald-900/10 border border-green-500/20 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ion-icon name="wallet" class="text-6xl text-green-500"></ion-icon></div>
                    <h4 class="text-green-400 font-bold text-sm mb-1 uppercase tracking-wider">Leadership Experience</h4>
                    <h5 class="text-white font-bold text-lg mb-2">Bendahara Umum - KSPM UTY</h5>
                    <p class="text-gray-300 text-xs leading-relaxed max-w-[90%]">
                        Bertanggung jawab penuh atas pengelolaan arus kas organisasi, menyusun laporan pertanggungjawaban keuangan yang transparan, serta merancang anggaran efisien untuk setiap kegiatan Kelompok Studi Pasar Modal (KSPM).
                    </p>
                </div>

                <div>
                     <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Professional Competencies</h3>
                     <div class="flex flex-wrap gap-2">
                         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">Talent Acquisition</span>
                         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">HRIS</span>
                         <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">Financial Analysis</span>
                         <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">Budgeting</span>
                         <span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-400 font-medium">Marketing Strategy</span>
                         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">SPSS</span>
                         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">Microsoft Excel</span>
                         <span class="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-yellow-crayola">Leadership</span>
                     </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span class="w-1 h-6 bg-orange-yellow-crayola rounded-full"></span> Journey Timeline
                    </h3>
                    <div class="space-y-6 pl-2 border-l border-white/10 ml-1">
                        
                        <div class="relative pl-6">
                            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-orange-yellow-crayola rounded-full ring-4 ring-[#121212]"></div>
                            <h6 class="text-white font-bold text-sm">Bachelor of Management (S.M)</h6>
                            <span class="text-xs text-gray-500">Universitas Teknologi Yogyakarta • 2025</span>
                            <p class="text-xs text-gray-400 mt-1">Lulus dengan konsentrasi Manajemen SDM.</p>
                        </div>

                        <div class="relative pl-6">
                            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-[#121212]"></div>
                            <h6 class="text-white font-bold text-sm">Asisten Dosen (Finance)</h6>
                            <span class="text-xs text-gray-500">Universitas Teknologi Yogyakarta • 2024</span>
                            <p class="text-xs text-gray-400 mt-1">Membantu dosen dalam praktikum dan penilaian mata kuliah Keuangan.</p>
                        </div>

                        <div class="relative pl-6">
                            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-green-500 rounded-full ring-4 ring-[#121212]"></div>
                            <h6 class="text-white font-bold text-sm">Internship Program</h6>
                            <span class="text-xs text-gray-500">PT Syncore Indonesia • 2024</span>
                            <p class="text-xs text-gray-400 mt-1">Mengaplikasikan ilmu manajemen dalam lingkungan kerja profesional.</p>
                        </div>

                    </div>
                </div>
                
                <div class="md:hidden space-y-3 pt-4 border-t border-white/5">
                    <p class="text-xs font-bold text-gray-500 uppercase">Contact Info</p>
                    <a href="mailto:dulpansmanagement.offc@gmail.com" class="flex items-center gap-3 text-sm text-gray-300 p-3 bg-white/5 rounded-xl">
                        <ion-icon name="mail" class="text-orange-yellow-crayola"></ion-icon> dulpansmanagement.offc@gmail.com
                    </a>
                </div>

            </div>
        </div>
    </div>
</div>
`;
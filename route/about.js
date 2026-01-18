export const aboutContent = `
<style>
  /* SCROLLBAR ESTETIK */
  .scrollbar-estetik::-webkit-scrollbar {
      width: 5px;
  }
  .scrollbar-estetik::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
      border-radius: 10px;
  }
  .scrollbar-estetik::-webkit-scrollbar-thumb {
      background: #fbbf24; 
      border-radius: 10px;
  }
  .scrollbar-estetik::-webkit-scrollbar-thumb:hover {
      background: #d97706; 
  }
  
  /* Timeline Line */
  .timeline-line::before {
      content: '';
      position: absolute;
      top: 0;
      left: 7px;
      width: 2px;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 0;
  }

  /* ABSTRACT BACKGROUND PATTERN FOR SIDEBAR */
  .sidebar-pattern {
      background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
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
               Saya adalah lulusan <strong class="text-orange-yellow-crayola">Universitas Teknologi Yogyakarta (UTY)</strong> jurusan Manajemen dengan konsentrasi <strong class="text-orange-yellow-crayola">Manajemen Sumber Daya Manusia (MSDM)</strong>.
            </p>
            <p>
               Saya dikenal sebagai pribadi yang adaptif, komunikatif, dan berintegritas tinggi. Selain fokus pada pengelolaan SDM, saya memiliki semangat belajar tinggi untuk menghadapi tantangan baru dalam dunia bisnis dan profesional.
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

  <section class="mt-4">
      <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 border-l-4 border-orange-yellow-crayola pl-3">Areas of Expertise</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          
          <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
              <ion-icon name="people-circle-outline" class="text-3xl text-orange-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
              <h3 class="text-white font-bold text-sm mb-1">Human Capital</h3>
              <p class="text-gray-400 text-[11px] leading-relaxed">Talent Acquisition, Development, & Organizational Effectiveness.</p>
          </div>

          <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
              <ion-icon name="wallet-outline" class="text-3xl text-green-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
              <h3 class="text-white font-bold text-sm mb-1">Finance</h3>
              <p class="text-gray-400 text-[11px] leading-relaxed">Financial Analysis, Budgeting (Bendahara), & Reporting.</p>
          </div>

          <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
              <ion-icon name="trending-up-outline" class="text-3xl text-blue-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
              <h3 class="text-white font-bold text-sm mb-1">Business Dev</h3>
              <p class="text-gray-400 text-[11px] leading-relaxed">Event Management, Strategic Planning, & Market Research.</p>
          </div>

          <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.07] transition-all group">
              <ion-icon name="shield-checkmark-outline" class="text-3xl text-purple-400 mb-3 group-hover:scale-110 transition-transform"></ion-icon>
              <h3 class="text-white font-bold text-sm mb-1">Leadership</h3>
              <p class="text-gray-400 text-[11px] leading-relaxed">Team Management, Integrity, & Adaptability in fast-paced env.</p>
          </div>
      </div>
  </section>

  <section class="mt-2 pb-6">
       <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-5 border-l-4 border-blue-500 pl-3">Professional Journey</h3>
       
       <div class="timeline-line relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 pl-4 md:pl-0">
           
           <div class="relative pl-6 md:pl-0 md:pt-6 group">
               <div class="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-yellow-crayola border-2 border-[#1e1e24] z-10 group-hover:scale-125 transition-transform"></div>
               <div class="hidden md:block absolute top-2 left-0 w-full h-[2px] bg-white/10 -z-0"></div>
               <h4 class="text-white font-bold text-sm">Graduation</h4>
               <span class="text-[10px] text-orange-yellow-crayola font-mono">2025 • UTY</span>
               <p class="text-gray-400 text-[11px] mt-1">Bachelor of Management (MSDM).</p>
           </div>

           <div class="relative pl-6 md:pl-0 md:pt-6 group">
               <div class="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#1e1e24] z-10 group-hover:scale-125 transition-transform"></div>
               <div class="hidden md:block absolute top-2 left-0 w-full h-[2px] bg-white/10 -z-0"></div>
               <h4 class="text-white font-bold text-sm">Assistant Lecturer</h4>
               <span class="text-[10px] text-blue-400 font-mono">2024 • Finance</span>
               <p class="text-gray-400 text-[11px] mt-1">Teaching & Mentoring Students.</p>
           </div>

           <div class="relative pl-6 md:pl-0 md:pt-6 group">
               <div class="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-2 border-[#1e1e24] z-10 group-hover:scale-125 transition-transform"></div>
               <div class="hidden md:block absolute top-2 left-0 w-full h-[2px] bg-white/10 -z-0"></div>
               <h4 class="text-white font-bold text-sm">Internship</h4>
               <span class="text-[10px] text-green-400 font-mono">2024 • Syncore</span>
               <p class="text-gray-400 text-[11px] mt-1">Professional Work Experience.</p>
           </div>

           <div class="relative pl-6 md:pl-0 md:pt-6 group">
               <div class="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-2 border-[#1e1e24] z-10 group-hover:scale-125 transition-transform"></div>
               <div class="hidden md:block absolute top-2 left-0 w-1/2 h-[2px] bg-white/10 -z-0"></div>
               <h4 class="text-white font-bold text-sm">Treasurer</h4>
               <span class="text-[10px] text-purple-400 font-mono">2023 • KSPM</span>
               <p class="text-gray-400 text-[11px] mt-1">Budgeting & Financial Reports.</p>
           </div>

       </div>
  </section>

</article>

<div id="about-modal" class="hidden fixed inset-0 z-[9999] flex items-end md:items-center justify-center">
    
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[4px] transition-opacity opacity-0" onclick="window.toggleAboutModal(false)"></div>
    
    <div id="modal-card" class="relative w-full h-[90vh] md:max-w-6xl md:w-[95%] bg-[#18181b] rounded-t-[30px] md:rounded-3xl border-t border-white/10 md:border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) translate-y-full md:translate-y-10 md:scale-95 opacity-0 z-20">
        
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

        <div class="hidden md:flex w-[35%] bg-[#1e1e24] sidebar-pattern relative p-8 flex-col justify-between h-full border-r border-white/5 overflow-hidden">
             
             <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
             <div class="absolute top-10 right-0 p-6 opacity-[0.03] pointer-events-none rotate-12"><ion-icon name="finger-print" class="text-9xl text-white"></ion-icon></div>
             <div class="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-12 pointer-events-none"></div>

            <div class="flex flex-col h-full relative z-10">
            
                 <div class="shrink-0">
                    <div class="w-28 h-28 rounded-2xl p-1 bg-gradient-to-br from-orange-yellow-crayola to-amber-600 mb-6 shadow-xl hover:scale-105 transition-transform relative z-10">
                        <img src="assets/images/icon/myprof.jpg" class="w-full h-full object-cover rounded-xl bg-[#1e1e24]">
                    </div>
                    
                    <h3 class="text-3xl font-bold text-white leading-tight mb-2">Dulpan Adi Saragih</h3>
                    
                    <div class="flex items-center gap-2 mb-6">
                        <ion-icon name="briefcase" class="text-orange-yellow-crayola"></ion-icon>
                        <span class="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-yellow-crayola to-orange-200">
                            Majoring Human Capital Management
                        </span>
                    </div>
                    
                    <div class="flex items-center w-full gap-0 bg-[#121212] rounded-xl border border-white/10 p-1 shadow-inner">
                        <div class="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-yellow-crayola to-amber-600 text-jet font-bold text-sm whitespace-nowrap shadow-md">
                            IPK 3.54
                        </div>
                        <button onclick="window.open('http://verifikasi.uty.ac.id/lulusan/02OE53F4KR1QM26ZULVI0GA9TX7B8YJP146', '_blank')" 
                                class="flex-1 flex items-center justify-center gap-2 py-2 text-gray-400 hover:text-green-400 hover:bg-white/5 rounded-r-lg transition-all group">
                            <span class="text-xs font-bold uppercase tracking-wide">Verifikasi Ijazah</span>
                            <ion-icon name="arrow-forward" class="text-xs group-hover:translate-x-1 transition-transform"></ion-icon>
                        </button>
                    </div>
                </div>

                <div class="flex-grow"></div>

                <div class="shrink-0 space-y-6">
                    
                    <div class="space-y-4 pt-6 border-t border-white/5 relative">
                         <div class="absolute -top-[3px] left-0 w-10 h-[1px] bg-orange-yellow-crayola/50"></div>

                        <div class="flex items-center gap-4 group">
                            <div class="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors shrink-0 border border-white/5"><ion-icon name="school"></ion-icon></div>
                            <div class="overflow-hidden">
                                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider">University</p>
                                <p class="text-gray-300 text-xs font-medium truncate">Universitas Teknologi Yogyakarta</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 group">
                            <div class="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-red-500/20 flex items-center justify-center text-red-400 transition-colors shrink-0 border border-white/5"><ion-icon name="location"></ion-icon></div>
                            <div>
                                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Location</p>
                                <p class="text-gray-300 text-xs font-medium">Yogyakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-3 tracking-widest flex items-center gap-2">
                            Connect With Me <span class="h-[1px] w-10 bg-white/10"></span>
                        </p>
                        <div class="grid grid-cols-4 gap-2">
                            <a href="mailto:dulpansmanagement.offc@gmail.com" class="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-orange-yellow-crayola hover:bg-orange-yellow-crayola hover:text-jet transition-all border border-white/5 hover:scale-105 shadow-lg group" title="Email">
                                <ion-icon name="mail" class="text-xl group-hover:animate-bounce"></ion-icon>
                            </a>
                            <a href="https://linkedin.openinapp.co/dulpansrgih" target="_blank" class="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all border border-white/5 hover:scale-105 shadow-lg group" title="LinkedIn">
                                <ion-icon name="logo-linkedin" class="text-xl group-hover:animate-bounce"></ion-icon>
                            </a>
                            <a href="https://www.instagram.com/dulpansrgih_/" target="_blank" class="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all border border-white/5 hover:scale-105 shadow-lg group" title="Instagram">
                                <ion-icon name="logo-instagram" class="text-xl group-hover:animate-bounce"></ion-icon>
                            </a>
                             <a href="assets/cv/Dulpan Adi Saragih.pdf" target="_blank" class="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all border border-white/5 hover:scale-105 shadow-lg group" title="Download CV">
                                <ion-icon name="document-text" class="text-xl group-hover:animate-bounce"></ion-icon>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="w-full md:w-[65%] bg-[#121212] flex flex-col h-full overflow-hidden relative">
            
            <div class="hidden md:flex p-6 border-b border-white/5 justify-between items-center shrink-0 bg-[#121212] z-20">
                <div class="flex items-center gap-3">
                    <ion-icon name="layers" class="text-orange-yellow-crayola"></ion-icon>
                    <h4 class="text-gray-200 text-sm font-bold tracking-wide">FULL BACKGROUND</h4>
                </div>
                <button onclick="window.toggleAboutModal(false)" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-500 text-gray-400 flex items-center justify-center transition-all">
                    <ion-icon name="close" class="text-lg"></ion-icon>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto min-h-0 scrollbar-estetik p-6 md:px-10 md:pb-10 md:pt-6 space-y-8">
                
                <div class="flex md:hidden items-center gap-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div class="w-16 h-16 rounded-xl bg-orange-500/20 overflow-hidden shrink-0">
                        <img src="assets/images/icon/myprof.jpg" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h4 class="text-white font-bold text-lg">Dulpan Adi Saragih</h4>
                        <div class="flex flex-col gap-1.5 items-start mt-1">
                             <p class="text-orange-yellow-crayola text-xs font-mono uppercase">IPK 3.54 • Fresh Graduate</p>
                             <button onclick="window.open('http://verifikasi.uty.ac.id/lulusan/02OE53F4KR1QM26ZULVI0GA9TX7B8YJP146', '_blank')" 
                                class="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-medium text-blue-300">
                                <ion-icon name="checkmark-circle"></ion-icon> Verifikasi
                             </button>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 to-indigo-900/10 border border-blue-500/20 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ion-icon name="library" class="text-6xl text-blue-500"></ion-icon></div>
                    <h4 class="text-blue-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                        <ion-icon name="ribbon"></ion-icon> Academic Excellence
                    </h4>
                    <h5 class="text-white font-bold text-lg mb-2">Asisten Dosen - Manajemen Keuangan Praktik</h5>
                    <p class="text-gray-300 text-xs leading-relaxed text-justify mb-2">
                        Saya dipercaya menjadi Asisten Dosen yang menuntut <strong>ketelitian tinggi</strong>, kemampuan <strong>komunikasi yang baik</strong>, serta pemahaman mendalam terhadap materi. 
                    </p>
                    <p class="text-gray-400 text-xs leading-relaxed text-justify">
                        Peran ini melatih saya dalam membimbing mahasiswa lain (mentoring), menjelaskan konsep kompleks menjadi sederhana, dan menjaga standar akademik yang tinggi.
                    </p>
                </div>

                <div>
                     <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span class="w-1 h-6 bg-pink-500 rounded-full"></span> Career Aspirations
                    </h3>
                    <div class="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-pink-500/30 transition-all">
                        <p class="text-gray-300 text-xs leading-7 text-justify">
                            Sebagai lulusan baru dengan latar belakang Manajemen yang kuat, saya memiliki ambisi untuk mengembangkan karir profesional di bidang <strong>Human Capital</strong>, <strong>General Affair</strong>, atau <strong>Administrasi Keuangan</strong>. Saya siap berkontribusi dengan etos kerja tinggi, kemampuan adaptasi cepat, dan keinginan untuk terus belajar.
                        </p>
                        <div class="flex flex-wrap gap-2 mt-4">
                            <span class="px-2 py-1 bg-pink-500/10 text-pink-300 text-[10px] rounded border border-pink-500/20">HR Generalist</span>
                            <span class="px-2 py-1 bg-pink-500/10 text-pink-300 text-[10px] rounded border border-pink-500/20">Finance Staff</span>
                            <span class="px-2 py-1 bg-pink-500/10 text-pink-300 text-[10px] rounded border border-pink-500/20">Admin</span>
                        </div>
                    </div>
                </div>

                <div>
                     <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span class="w-1 h-6 bg-orange-yellow-crayola rounded-full"></span> Organizational & Committee
                    </h3>
                    
                    <div class="space-y-4">
                        
                         <div class="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-all">
                            <div class="flex justify-between items-start mb-2">
                                <h5 class="text-white font-bold text-sm">Bendahara Umum - KSPM UTY</h5>
                                <span class="px-2 py-0.5 rounded text-[10px] bg-green-500/20 text-green-300 border border-green-500/30">Finance</span>
                            </div>
                            <p class="text-gray-300 text-xs leading-relaxed text-justify">
                                Bertanggung jawab penuh atas pengelolaan arus kas organisasi, menyusun laporan pertanggungjawaban keuangan yang transparan, serta merancang anggaran efisien untuk setiap kegiatan.
                            </p>
                        </div>

                        <div class="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition-all">
                            <div class="flex justify-between items-start mb-2">
                                <h5 class="text-white font-bold text-sm">Ketua & Koordinator Acara</h5>
                                <span class="px-2 py-0.5 rounded text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/30">Leadership</span>
                            </div>
                            <ul class="list-disc list-outside ml-4 text-gray-300 text-xs space-y-2 leading-relaxed text-justify">
                                <li>
                                    <strong>Koordinator Acara Seminar Nasional Pasar Modal (5 Feb 2024):</strong> Sukses menghadirkan 3 narasumber dari Jakarta & Yogyakarta dengan total <strong>854 peserta</strong> (280 offline, 574 online).
                                </li>
                                <li>
                                    <strong>Ketua Panitia Kunjungan Industri:</strong> Memimpin perencanaan dan eksekusi kegiatan kunjungan ke perusahaan besar.
                                </li>
                                <li>
                                    <strong>Koordinator Sekolah Pasar Modal</strong> di BEI Yogyakarta & Penanggung Jawab kegiatan <em>Sinau Trading Bareng</em>.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div>
                     <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Hard & Soft Skills</h3>
                     <div class="flex flex-wrap gap-2">
                         <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">Microsoft Office (Word, Excel, PPT)</span>
                         <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">Google Workspace</span>
                         <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">Digital Platforms</span>
                         <span class="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-yellow-crayola">Adaptif & Komunikatif</span>
                         <span class="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-yellow-crayola">Teamwork</span>
                         <span class="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-yellow-crayola">Integritas Tinggi</span>
                         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">Public Speaking</span>
                     </div>
                </div>
                
                <div class="h-10"></div>

            </div>
        </div>
    </div>
</div>
`;
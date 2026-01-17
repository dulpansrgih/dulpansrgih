// ==========================================
// 1. DATA SERTIFIKAT
// ==========================================
const certData = [
  {
    src: "assets/images/1000074216.jpg",
    title: "BNSP Certification",
    category: "license", 
    desc: "Sertifikasi kompetensi nasional bidang Manajemen SDM yang diakui secara profesional."
  },
  {
    src: "assets/images/1000074217.jpg",
    title: "TOEFL Proficiency",
    category: "license",
    desc: "Bukti penguasaan Bahasa Inggris profesional untuk komunikasi bisnis global."
  },
  {
    src: "assets/images/icon/kspm-uty.jpeg",
    title: "KSPM Leadership",
    category: "organization",
    desc: "Pengalaman kepemimpinan strategis sebagai pengurus inti organisasi pasar modal."
  },
  {
    src: "assets/images/icon/syncore-logo.jpeg",
    title: "Syncore Internship",
    category: "experience",
    desc: "Pengalaman magang profesional menangani proyek keuangan riil di PT Syncore."
  }
];

// ==========================================
// 2. HTML CONTENT (Main Certificate Page)
// ==========================================
export const certificateContent = `
<article class="certificate active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-6 relative overflow-hidden">
  
  <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

  <header class="flex flex-col gap-3 relative z-10">
     <div class="flex items-center gap-3 md:gap-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Portfolio <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Center</span>
        </h2>
        <div class="h-1 flex-grow bg-gradient-to-r from-blue-500/30 to-transparent rounded-full ml-2"></div>
    </div>
  </header>

  <nav class="md:hidden relative z-30 bg-[#18181b] rounded-xl p-1.5 flex items-center justify-between border border-white/10 mb-4 shadow-lg">
      <button onclick="window.cert.switchTab('gallery')" id="tab-btn-gallery" class="mobile-tab-btn active flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 text-white bg-blue-600 shadow-lg shadow-blue-500/30">
          Certificates
      </button>
      <button onclick="window.cert.switchTab('resume')" id="tab-btn-resume" class="mobile-tab-btn flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5">
          CV Preview
      </button>
  </nav>

  <div id="panel-gallery" class="mobile-panel flex flex-col gap-6 animate-fade">
      
      <div class="relative z-20">
        
        <div class="md:hidden relative">
            <button onclick="window.cert.toggleDropdown()" id="mobile-dropdown-btn" class="w-full flex items-center justify-between bg-[#1e1e24] border border-white/10 text-white px-5 py-3 rounded-xl shadow-lg transition-all active:scale-95 group relative z-20">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 border border-white/5">
                        <ion-icon name="apps-outline" id="mobile-icon-display"></ion-icon>
                    </div>
                    <span id="current-category-label" class="font-medium text-sm group-hover:text-blue-400 transition-colors">All Certificates</span>
                </div>
                <ion-icon name="chevron-down" id="dropdown-icon" class="transition-transform duration-300 text-gray-400"></ion-icon>
            </button>
            
            <ul id="mobile-filter-list" class="hidden absolute top-full left-0 w-full mt-2 bg-[#1e1e24] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 flex-col animate-scaleUp origin-top divide-y divide-white/5">
                <li><button onclick="window.cert.filter('all', 'All Certificates', this)" data-icon="apps-outline" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-blue-400 transition-colors flex items-center gap-3"><ion-icon name="apps-outline" class="text-lg"></ion-icon> All Certificates</button></li>
                <li><button onclick="window.cert.filter('experience', 'Experience', this)" data-icon="briefcase-outline" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-blue-400 transition-colors flex items-center gap-3"><ion-icon name="briefcase-outline" class="text-lg"></ion-icon> Experience</button></li>
                <li><button onclick="window.cert.filter('license', 'License & Cert', this)" data-icon="ribbon-outline" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-blue-400 transition-colors flex items-center gap-3"><ion-icon name="ribbon-outline" class="text-lg"></ion-icon> License & Certification</button></li>
                <li><button onclick="window.cert.filter('organization', 'Organization', this)" data-icon="people-outline" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-blue-400 transition-colors flex items-center gap-3"><ion-icon name="people-outline" class="text-lg"></ion-icon> Organization</button></li>
                <li><button onclick="window.cert.handleMore()" class="w-full text-left px-5 py-3 text-sm text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-colors flex items-center gap-3 font-medium bg-blue-500/5"><ion-icon name="arrow-forward-circle-outline" class="text-lg"></ion-icon> More</button></li>
            </ul>
        </div>

        <ul class="hidden md:flex flex-wrap gap-3 justify-start">
            <li><button class="dt-filter active px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-blue-500/50 flex items-center gap-2 [&.active]:bg-blue-600 [&.active]:text-white [&.active]:border-blue-500 [&.active]:shadow-[0_0_20px_rgba(37,99,235,0.6)]" onclick="window.cert.filter('all', null, this)"><ion-icon name="apps-outline"></ion-icon> All</button></li>
            <li><button class="dt-filter px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-blue-500/50 flex items-center gap-2 [&.active]:bg-blue-600 [&.active]:text-white [&.active]:border-blue-500 [&.active]:shadow-[0_0_20px_rgba(37,99,235,0.6)]" onclick="window.cert.filter('experience', null, this)"><ion-icon name="briefcase-outline"></ion-icon> Experience</button></li>
            <li><button class="dt-filter px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-blue-500/50 flex items-center gap-2 [&.active]:bg-blue-600 [&.active]:text-white [&.active]:border-blue-500 [&.active]:shadow-[0_0_20px_rgba(37,99,235,0.6)]" onclick="window.cert.filter('license', null, this)"><ion-icon name="ribbon-outline"></ion-icon> License & Certification</button></li>
            <li><button class="dt-filter px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-blue-500/50 flex items-center gap-2 [&.active]:bg-blue-600 [&.active]:text-white [&.active]:border-blue-500 [&.active]:shadow-[0_0_20px_rgba(37,99,235,0.6)]" onclick="window.cert.filter('organization', null, this)"><ion-icon name="people-outline"></ion-icon> Organization</button></li>
            <li><button class="px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-blue-400 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30 flex items-center gap-2 group" onclick="window.cert.handleMore()">More <ion-icon name="arrow-forward" class="group-hover:translate-x-1 transition-transform"></ion-icon></button></li>
        </ul>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        ${certData.map((item, index) => `
        <li class="cert-item group relative h-[300px] rounded-3xl overflow-hidden bg-[#18181b] border border-white/5 cursor-pointer shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2" 
            data-category="${item.category}" onclick="window.cert.open(${index})">
            
            <img src="${item.src}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-in-out">
            <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div class="absolute top-4 left-4">
                <span class="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                   ${item.category === 'license' ? 'Certification' : item.category}
                </span>
            </div>

            <div class="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out border border-white/20 hover:bg-blue-500 hover:border-blue-500 shadow-lg">
                <ion-icon name="expand-outline" class="text-lg"></ion-icon>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div class="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-2xl group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
                    <h3 class="text-white text-lg font-bold leading-tight mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">${item.title}</h3>
                    <p class="text-gray-400 text-xs line-clamp-2 leading-relaxed">${item.desc}</p>
                </div>
            </div>
        </li>
        `).join('')}
      </ul>
      
      <div id="no-data" class="hidden text-center text-gray-500 py-20 flex flex-col items-center gap-3">
          <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
            <ion-icon name="folder-open-outline" class="text-3xl"></ion-icon>
          </div>
          <p class="text-sm">No certificates found in this category.</p>
      </div>
  </div>

  <div id="panel-resume" class="mobile-panel hidden animate-fade flex-col h-full min-h-[70vh] pb-24 relative">
      
      <div class="flex items-center justify-between mb-4 bg-[#18181b] p-4 rounded-2xl border border-white/10 shadow-lg relative z-10">
          <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <ion-icon name="document-text" class="text-lg"></ion-icon>
              </div>
              <div>
                  <h3 class="text-white font-bold text-sm leading-tight">Curriculum Vitae</h3>
                  <p class="text-[10px] text-blue-400 uppercase tracking-wider font-medium">Preview Mode</p>
              </div>
          </div>
          <a href="assets/cv/Dulpan Adi Saragih.pdf" download class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <ion-icon name="cloud-download" class="text-lg"></ion-icon>
          </a>
      </div>

      <div class="w-full flex-grow bg-white rounded-xl overflow-hidden border border-white/10 relative shadow-2xl ring-1 ring-white/20 flex flex-col">
          <iframe src="assets/cv/Dulpan Adi Saragih.pdf" class="w-full h-full min-h-[400px] border-none block"></iframe>
          <div class="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
      </div>

      <a href="assets/cv/Dulpan Adi Saragih.pdf" target="_blank" class="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#18181b] border border-white/10 rounded-xl text-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors active:scale-95">
          <ion-icon name="open-outline" class="text-lg"></ion-icon>
          Open Full PDF
      </a>
      
  </div>

</article>

<div id="theater-modal" class="fixed inset-0 z-[99999] hidden opacity-0 transition-opacity duration-500 ease-out bg-[#0a0a0b]/95 backdrop-blur-xl flex items-center justify-center">
    
    <div class="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50">
        <div class="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <span class="text-gray-400 text-xs tracking-widest uppercase font-mono">
                <span id="lb-current" class="text-white font-bold">1</span> / <span id="lb-total">4</span>
            </span>
        </div>
        
        <div class="flex items-center gap-3">
            <a id="lb-download-btn" href="#" download class="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 rounded-full transition-all duration-300">
                <ion-icon name="cloud-download-outline" class="text-white"></ion-icon>
                <span class="text-xs font-bold text-white uppercase tracking-wider hidden md:block">Download</span>
            </a>
            <button onclick="window.cert.close()" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-all text-gray-400">
                <ion-icon name="close" class="text-xl"></ion-icon>
            </button>
        </div>
    </div>

    <div class="w-full h-full flex items-center justify-center relative p-4 md:p-10">
        <button onclick="window.cert.change(-1)" class="absolute left-4 md:left-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20 backdrop-blur-sm group">
            <ion-icon name="chevron-back-outline" class="text-2xl md:text-3xl group-hover:-translate-x-0.5 transition-transform"></ion-icon>
        </button>

        <div class="relative max-w-5xl w-full max-h-[85vh] transition-transform duration-500 scale-90 flex flex-col items-center justify-center gap-6" id="lb-img-wrapper">
            <div class="relative rounded-lg overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)] ring-1 ring-white/10">
                <img id="lb-img" src="" class="max-h-[60vh] md:max-h-[70vh] w-auto object-contain bg-black/50">
            </div>
            <div class="text-center max-w-2xl px-6 py-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 animate-slideUp mt-2">
                <h3 id="lb-title" class="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-1">Title</h3>
                <p id="lb-desc" class="text-gray-400 text-xs md:text-sm font-light tracking-wide">Description</p>
            </div>
        </div>

        <button onclick="window.cert.change(1)" class="absolute right-4 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20 backdrop-blur-sm group">
            <ion-icon name="chevron-forward-outline" class="text-2xl md:text-3xl group-hover:translate-x-0.5 transition-transform"></ion-icon>
        </button>
    </div>
</div>
`;

// ==========================================
// 4. LOGIC ENGINE
// ==========================================
let currentIndex = 0;

export function initCertificateLogic() {
    window.cert = {
        activeTab: 'gallery', 

        switchTab: (tab) => {
            window.cert.activeTab = tab; 

            const gBtn = document.getElementById('tab-btn-gallery');
            const rBtn = document.getElementById('tab-btn-resume');
            const gPanel = document.getElementById('panel-gallery');
            const rPanel = document.getElementById('panel-resume');
            
            const activeClass = ['bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30', 'active'];
            const inactiveClass = ['text-gray-400', 'hover:text-white', 'hover:bg-white/5'];

            if(tab === 'gallery') {
                gBtn.classList.add(...activeClass);
                gBtn.classList.remove(...inactiveClass);
                
                rBtn.classList.remove(...activeClass);
                rBtn.classList.add(...inactiveClass);

                gPanel.classList.remove('hidden');
                rPanel.classList.add('hidden');
            } else {
                rBtn.classList.add(...activeClass);
                rBtn.classList.remove(...inactiveClass);

                gBtn.classList.remove(...activeClass);
                gBtn.classList.add(...inactiveClass);

                rPanel.classList.remove('hidden');
                gPanel.classList.add('hidden');
            }
        },

        toggleDropdown: () => {
            const list = document.getElementById('mobile-filter-list');
            const icon = document.getElementById('dropdown-icon');
            list.classList.toggle('hidden');
            list.classList.toggle('flex');
            icon.style.transform = list.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        },

        filter: (cat, label, btn) => {
            if(label) {
                document.getElementById('current-category-label').innerText = label;
                const iconName = btn ? btn.getAttribute('data-icon') : 'apps-outline';
                document.getElementById('mobile-icon-display').setAttribute('name', iconName);
                window.cert.toggleDropdown();
            }

            if(btn && !label) {
                document.querySelectorAll('.dt-filter').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }

            let count = 0;
            document.querySelectorAll('.cert-item').forEach(item => {
                item.style.animation = 'none';
                item.offsetHeight; 
                
                if(cat === 'all' || item.dataset.category === cat) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fade 0.5s ease forwards';
                    count++;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            const noData = document.getElementById('no-data');
            if(count === 0) noData.classList.remove('hidden');
            else noData.classList.add('hidden');
        },

        handleMore: () => {
             if(window.loadPage) {
                 window.loadPage('more');
             }
        },

        open: (index) => {
            currentIndex = index;
            const data = certData[index];
            const modal = document.getElementById('theater-modal');
            const img = document.getElementById('lb-img');
            const wrap = document.getElementById('lb-img-wrapper');
            const downloadBtn = document.getElementById('lb-download-btn');

            img.src = data.src;
            document.getElementById('lb-title').innerText = data.title;
            document.getElementById('lb-desc').innerText = data.desc;
            document.getElementById('lb-current').innerText = index + 1;
            document.getElementById('lb-total').innerText = certData.length;

            if(downloadBtn) {
                downloadBtn.href = data.src;
                downloadBtn.download = data.title.replace(/\s+/g, '_') + ".jpg";
            }

            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                modal.classList.remove('opacity-0');
                wrap.classList.remove('scale-90');
                wrap.classList.add('scale-100');
            });
            document.body.style.overflow = 'hidden';
        },

        close: () => {
            const modal = document.getElementById('theater-modal');
            const wrap = document.getElementById('lb-img-wrapper');
            modal.classList.add('opacity-0');
            wrap.classList.remove('scale-100');
            wrap.classList.add('scale-90');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        },

        change: (dir) => {
            currentIndex += dir;
            if(currentIndex >= certData.length) currentIndex = 0;
            if(currentIndex < 0) currentIndex = certData.length - 1;
            
            const wrap = document.getElementById('lb-img-wrapper');
            wrap.style.opacity = '0';
            wrap.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                const data = certData[currentIndex];
                document.getElementById('lb-img').src = data.src;
                document.getElementById('lb-title').innerText = data.title;
                document.getElementById('lb-desc').innerText = data.desc;
                document.getElementById('lb-current').innerText = currentIndex + 1;

                const downloadBtn = document.getElementById('lb-download-btn');
                if(downloadBtn) {
                    downloadBtn.href = data.src;
                    downloadBtn.download = data.title.replace(/\s+/g, '_') + ".jpg";
                }
                
                wrap.style.opacity = '1';
                wrap.style.transform = 'scale(1)';
            }, 300);
        }
    };
}

// ==========================================
// 5. CV CONTENT (DESKTOP FULLSCREEN MODE)
// ==========================================
export const cvContent = `
<div class="fixed inset-0 z-[100] bg-[#0a0a0b] flex flex-col animate-fade">
  
    <header class="flex-none flex items-center justify-between px-6 py-4 bg-[#18181b] border-b border-white/10 shadow-md z-20">
        
        <div class="flex items-center gap-4">
            <button onclick="window.loadPage('certificate')" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all group">
                <ion-icon name="arrow-back" class="text-xl group-hover:-translate-x-1 transition-transform"></ion-icon>
            </button>
            
            <div class="flex flex-col">
                <h2 class="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                   <ion-icon name="document-text" class="text-blue-500"></ion-icon> Curriculum Vitae
                </h2>
                <span class="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Dulpan Adi Saragih</span>
            </div>
        </div>

        <a href="assets/cv/Dulpan Adi Saragih.pdf" download class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg active:scale-95 group">
            <ion-icon name="cloud-download-outline" class="text-lg group-hover:animate-bounce"></ion-icon>
            <span class="hidden md:inline">Download PDF</span>
        </a>
    </header>

    <main class="flex-grow w-full h-full relative bg-[#121212] flex items-center justify-center p-0 md:p-4 overflow-hidden">
         
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

         <div class="w-full h-full md:max-w-[1200px] bg-white md:rounded-xl shadow-2xl overflow-hidden relative border border-white/20 ring-1 ring-black/50">
             <iframe src="assets/cv/Dulpan Adi Saragih.pdf" class="w-full h-full border-none block">
                  <div class="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                      <p>Browser Anda tidak mendukung preview PDF.</p>
                      <a href="assets/cv/Dulpan Adi Saragih.pdf" class="text-blue-500 underline">Download disini</a>
                  </div>
             </iframe>
         </div>
    </main>
</div>
`;
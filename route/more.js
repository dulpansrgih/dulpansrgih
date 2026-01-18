// ==========================================
// 1. DATA "MORE" (Re-categorized to 6 Categories)
// ==========================================
const moreData = [
    // --- 1. EXPERIENCE ---
    {
      src: "assets/images/more/Sertifikat Magang PT Syncore Indonesia.png",
      title: "Magang PT Syncore Indonesia",
      category: "experience", 
      year: "2024",
      desc: "Sertifikat penyelesaian program magang profesional di PT Syncore Indonesia."
    },
    {
      src: "assets/images/more/5210211146 Sertifikat Asisten Dosen.png",
      title: "Sertifikat Asisten Dosen",
      category: "experience",
      year: "2025",
      desc: "Penghargaan atas dedikasi dan kontribusi sebagai Asisten Dosen Akademik."
    },
    {
      src: "assets/images/more/Dulpan Adi S_Kepengurusan 2023-2024.jpg",
      title: "Kepengurusan Organisasi",
      category: "experience",
      year: "2024",
      desc: "Bukti keaktifan dan kontribusi dalam kepengurusan organisasi periode 2023-2024."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Visit Company.png",
      title: "Visit Company Participant",
      category: "experience",
      year: "2024",
      desc: "Partisipasi aktif dalam kegiatan kunjungan industri dan studi lapangan korporat."
    },
  
    // --- 2. LICENSE & CERTIFICATION ---
    {
      src: "assets/images/more/Data Engineering Professional - RapidMiner.png",
      title: "Data Engineering Professional",
      category: "license-certification",
      year: "2024",
      desc: "Sertifikasi profesional kompetensi Data Engineering menggunakan RapidMiner."
    },
    {
      src: "assets/images/more/Machine Learning Professional.png",
      title: "Machine Learning Professional",
      category: "license-certification",
      year: "2024",
      desc: "Sertifikasi keahlian profesional dalam bidang Machine Learning dan AI."
    },
  
    // --- 3. ORGANIZATION ---
    {
      src: "assets/images/more/Sertifikat Pelatihan Kepemimpinan Pengurus Organisasi UTY.png",
      title: "Pelatihan Kepemimpinan",
      category: "training",
      year: "2023",
      desc: "Pelatihan leadership untuk meningkatkan kapasitas pengurus organisasi UTY."
    },
    {
      src: "assets/images/more/Dulpan Adi S_Sitraba 2024.png",
      title: "Sitraba 2024",
      category: "organization",
      year: "2024",
      desc: "Sertifikat partisipasi dalam kegiatan Sitraba (Sinau Trading Bareng)."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Seminar Nasional KSPM UTY.png",
      title: "Seminar Nasional KSPM",
      category: "organization",
      year: "2024",
      desc: "Kepesertaan dalam Seminar Nasional yang diselenggarakan oleh KSPM UTY."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Sekolah Pasar Modal.png",
      title: "Sekolah Pasar Modal",
      category: "organization",
      year: "2024",
      desc: "Edukasi intensif mengenai investasi dan analisis fundamental pasar modal."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Musyawarah Besar.png",
      title: "Musyawarah Besar",
      category: "organization",
      year: "2023",
      desc: "Partisipasi dalam forum pengambilan keputusan tertinggi organisasi."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Career Session.png",
      title: "Career Session",
      category: "course",
      year: "2024",
      desc: "Sesi pengembangan karir dan persiapan dunia kerja profesional."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Diklatsar 2023.png",
      title: "Diklatsar 2023",
      category: "organization",
      year: "2023",
      desc: "Pendidikan dan Latihan Dasar untuk anggota baru organisasi."
    },
    {
      src: "assets/images/more/Diklatsar KSPM Dulpan Adi Saragih.png",
      title: "Diklatsar KSPM",
      category: "organization",
      year: "2022",
      desc: "Pelatihan dasar pasar modal bagi anggota Kelompok Studi Pasar Modal."
    },
  
    // --- 4. WORKSHOP & SEMINAR ---
    {
      src: "assets/images/more/Dulpan Adi Saragih_Literasi Keungan dan Digital UMKM.png",
      title: "Literasi Keuangan & Digital",
      category: "workshop-seminar",
      year: "2024",
      desc: "Seminar peningkatan literasi keuangan dan digitalisasi bagi UMKM."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Stadium Generale UNY.png",
      title: "Stadium Generale UNY",
      category: "workshop-seminar",
      year: "2024",
      desc: "Peserta kuliah umum Stadium Generale di Universitas Negeri Yogyakarta."
    },
    {
      src: "assets/images/more/Sertifikat Peserta Gelar Wicara LTF Dulpan Adi Saragih.png",
      title: "Gelar Wicara LTF",
      category: "workshop-seminar",
      year: "2024",
      desc: "Sertifikat peserta dalam acara talkshow interaktif Gelar Wicara LTF."
    },
    {
      src: "assets/images/more/Dulpan Adi Saragih_Seminar Nasional Self Exploration.png",
      title: "Seminar Self Exploration",
      category: "workshop-seminar",
      year: "2023",
      desc: "Seminar pengembangan diri untuk menggali potensi dan minat bakat."
    },
    {
      src: "assets/images/more/5210211146_Seminar Nasional 2023.png",
      title: "Seminar Nasional 2023",
      category: "workshop-seminar",
      year: "2023",
      desc: "Partisipasi aktif sebagai peserta dalam Seminar Nasional tahun 2023."
    },

    // --- 5. TRAINING ---
    {
      src: "assets/images/more/Dulpan Adi Saragih_Kompetensi Karir Cemerlang.png",
      title: "Kompetensi Karir Cemerlang",
      category: "training",
      year: "2024",
      desc: "Pelatihan strategi membangun kompetensi unggul untuk karir yang cemerlang."
    },

    // --- 6. COURSE ---
    {
      src: "assets/images/more/Dulpan Adi Saragih_Class Academy.png",
      title: "Class Academy",
      category: "course",
      year: "2024",
      desc: "Penyelesaian program kursus pembelajaran intensif melalui Class Academy."
    }
  ];
  
  // ==========================================
  // 2. HTML CONTENT
  // ==========================================
  export const moreContent = `
  <article class="more-certs active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-6 relative overflow-hidden">
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
  
    <header class="flex flex-col gap-6 relative z-20">
       
       <div class="flex items-center gap-4">
          <button onclick="window.loadPage('certificate')" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all group shrink-0">
              <ion-icon name="arrow-back" class="text-xl group-hover:-translate-x-1 transition-transform"></ion-icon>
          </button>
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Certificate <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vault</span>
            </h2>
            <p class="text-xs text-gray-400 mt-1">Arsip lengkap sertifikasi & kegiatan.</p>
          </div>
      </div>
  
      <div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center bg-white/5 p-3 rounded-2xl border border-white/5 relative z-50">
          
          <div class="relative w-full md:w-64 shrink-0">
              <input type="text" id="more-search" onkeyup="more.search(this.value)" placeholder="Search here..." 
              class="w-full bg-[#121212] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-black transition-all placeholder:text-gray-600">
              <ion-icon name="search-outline" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"></ion-icon>
          </div>
  
          <div class="flex-1 w-full md:w-auto relative">
            
            <div class="md:hidden relative w-full">
                <button onclick="more.toggleDropdown()" class="w-full flex items-center justify-between bg-[#121212] border border-white/10 text-white px-4 py-3 rounded-xl transition-all active:scale-95 group relative z-20">
                    <div class="flex items-center gap-2">
                        <ion-icon name="filter" class="text-purple-400"></ion-icon>
                        <span id="more-current-label" class="font-medium text-sm">All Categories</span>
                    </div>
                    <ion-icon name="chevron-down" id="more-dropdown-icon" class="transition-transform duration-300 text-gray-400"></ion-icon>
                </button>
                
                <ul id="more-filter-list" class="hidden absolute top-full left-0 w-full mt-2 bg-[#1e1e24] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-[100] flex-col animate-scaleUp origin-top divide-y divide-white/5">
                    <li><button onclick="more.filter('all', 'All Categories')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="grid-outline"></ion-icon> All Categories</button></li>
                    <li><button onclick="more.filter('experience', 'Experience')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="briefcase-outline"></ion-icon> Experience</button></li>
                    <li><button onclick="more.filter('license-certification', 'License & Cert')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="ribbon-outline"></ion-icon> License & Cert</button></li>
                    <li><button onclick="more.filter('organization', 'Organization')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="people-outline"></ion-icon> Organization</button></li>
                    <li><button onclick="more.filter('workshop-seminar', 'Workshop & Seminar')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="mic-outline"></ion-icon> Workshop & Seminar</button></li>
                    <li><button onclick="more.filter('training', 'Training')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="school-outline"></ion-icon> Training</button></li>
                    <li><button onclick="more.filter('course', 'Course')" class="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-3"><ion-icon name="book-outline"></ion-icon> Course</button></li>
                </ul>
            </div>
  
            <div class="hidden md:flex gap-2 justify-end flex-wrap">
                <button class="mf-btn active px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('all', null, this)">All</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('experience', null, this)">Experience</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('license-certification', null, this)">License</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('organization', null, this)">Organization</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('workshop-seminar', null, this)">Workshop & Seminar</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('training', null, this)">Training</button>
                <button class="mf-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all [&.active]:bg-purple-600 [&.active]:text-white [&.active]:border-purple-500" onclick="more.filter('course', null, this)">Course</button>
            </div>
          </div>
  
      </div>
    </header>
  
    <div class="relative z-10 pb-20 mt-2">
        <ul class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5" id="more-grid">
           ${moreData.map((item, index) => `
            <li class="more-item group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden bg-[#18181b] border border-white/5 cursor-pointer shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1" 
                data-category="${item.category}" onclick="more.open(${index})">
                
                <img src="${item.src}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700">
                
                <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-90"></div>
    
                <div class="absolute top-2 right-2 md:top-3 md:right-3">
                    <span class="px-1.5 py-0.5 md:px-2 md:py-1 text-[8px] md:text-[9px] font-bold text-white bg-black/40 backdrop-blur-md rounded-md border border-white/10">
                       ${item.year}
                    </span>
                </div>
    
                <div class="absolute top-2 left-2 md:top-3 md:left-3">
                    <span class="px-1.5 py-0.5 md:px-2 md:py-1 text-[8px] md:text-[9px] font-bold text-purple-300 bg-purple-500/10 backdrop-blur-md rounded-md border border-purple-500/20 uppercase tracking-wide">
                       ${item.category === 'license-certification' ? 'License' : 
                         item.category === 'workshop-seminar' ? 'Seminar' : 
                         item.category}
                    </span>
                </div>
    
                <div class="absolute bottom-0 left-0 w-full p-3 md:p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-white text-xs md:text-md font-bold leading-tight mb-0.5 md:mb-1 group-hover:text-purple-300 transition-colors line-clamp-1 filter-title">${item.title}</h3>
                    <p class="text-gray-400 text-[9px] md:text-[10px] line-clamp-2 leading-relaxed filter-desc">${item.desc}</p>
                </div>
            </li>
           `).join('')}
        </ul>
        
        <div id="more-no-data" class="hidden py-20 text-center">
            <div class="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-3">
                <ion-icon name="search-outline" class="text-2xl text-gray-600"></ion-icon>
            </div>
            <p class="text-gray-500 text-sm">No certificates found matching your search.</p>
        </div>
    </div>
  
  </article>
  
  <div id="more-modal" class="fixed inset-0 z-[99999] hidden opacity-0 transition-opacity duration-500 ease-out bg-[#0a0a0b]/95 backdrop-blur-xl flex items-center justify-center">
      
      <div class="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-end items-center gap-3 z-50">
          
          <a id="more-dl-btn" href="#" download class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all text-gray-400 group">
              <ion-icon name="cloud-download-outline" class="text-xl"></ion-icon>
          </a>

          <button onclick="more.close()" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-all text-gray-400">
              <ion-icon name="close" class="text-xl"></ion-icon>
          </button>
      </div>
  
      <div class="w-full h-full flex items-center justify-center relative p-4 md:p-10">
          
          <button onclick="more.change(-1)" class="absolute left-4 md:left-8 z-40 w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 bg-black/20 backdrop-blur-sm">
              <ion-icon name="chevron-back" class="text-2xl"></ion-icon>
          </button>
  
          <div class="relative max-w-4xl w-full flex flex-col items-center gap-4 transition-transform duration-300 scale-90" id="more-img-wrapper">
              <div class="relative rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
                  <img id="more-img" src="" class="max-h-[60vh] md:max-h-[70vh] w-auto object-contain">
              </div>
              <div class="text-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/5">
                  <h3 id="more-title" class="text-lg md:text-xl font-bold text-white mb-1">Title</h3>
                  <span id="more-cat" class="text-[10px] uppercase tracking-widest text-purple-400 font-bold border border-purple-500/30 px-2 py-0.5 rounded-full">Category</span>
              </div>
          </div>
  
          <button onclick="more.change(1)" class="absolute right-4 md:right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 bg-black/20 backdrop-blur-sm">
              <ion-icon name="chevron-forward" class="text-2xl"></ion-icon>
          </button>
      </div>
  </div>
  `;
  
  // ==========================================
  // 3. LOGIC ENGINE
  // ==========================================
  let currentMoreIndex = 0;
  let activeCategory = 'all'; 
  
  export function initMoreLogic() {
      window.more = {
          
          // --- A. Search Function ---
          search: (query) => {
              const filterTxt = query.toLowerCase();
              const list = document.querySelectorAll('.more-item');
              let count = 0;
  
              list.forEach(item => {
                  const title = item.querySelector('.filter-title').innerText.toLowerCase();
                  const desc = item.querySelector('.filter-desc').innerText.toLowerCase();
                  const cat = item.dataset.category;
                  
                  const matchSearch = title.includes(filterTxt) || desc.includes(filterTxt);
                  const matchCat = activeCategory === 'all' || cat === activeCategory;
  
                  if (matchSearch && matchCat) {
                      item.classList.remove('hidden');
                      item.classList.add('animate-fade');
                      count++;
                  } else {
                      item.classList.add('hidden');
                  }
              });
  
              const noData = document.getElementById('more-no-data');
              if(count === 0) noData.classList.remove('hidden');
              else noData.classList.add('hidden');
          },
  
          // --- B. Filter Category Logic ---
          filter: (cat, label, btn) => {
              activeCategory = cat; 
              
              if(label) {
                  document.getElementById('more-current-label').innerText = label;
                  window.more.toggleDropdown();
              }
  
              if(btn) {
                  document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
                  btn.classList.add('active');
              }
  
              const searchVal = document.getElementById('more-search').value;
              window.more.search(searchVal);
          },
  
          // --- C. Dropdown Toggle ---
          toggleDropdown: () => {
              const list = document.getElementById('more-filter-list');
              const icon = document.getElementById('more-dropdown-icon');
              
              if(list) {
                  list.classList.toggle('hidden');
                  list.classList.toggle('flex');
                  if(icon) {
                      icon.style.transform = list.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                  }
              }
          },
  
          // --- D. Lightbox Logic (With Download Update) ---
          open: (index) => {
              currentMoreIndex = index;
              const data = moreData[index];
              const modal = document.getElementById('more-modal');
              const wrapper = document.getElementById('more-img-wrapper');
              const dlBtn = document.getElementById('more-dl-btn');
  
              document.getElementById('more-img').src = data.src;
              document.getElementById('more-title').innerText = data.title;
              document.getElementById('more-cat').innerText = data.category;
              
              // Set Download Link
              if(dlBtn) {
                  dlBtn.href = data.src;
                  dlBtn.download = data.title.replace(/\s+/g, '_') + ".jpg";
              }
  
              modal.classList.remove('hidden');
              requestAnimationFrame(() => {
                  modal.classList.remove('opacity-0');
                  wrapper.classList.remove('scale-90');
                  wrapper.classList.add('scale-100');
              });
          },
  
          close: () => {
              const modal = document.getElementById('more-modal');
              const wrapper = document.getElementById('more-img-wrapper');
              
              modal.classList.add('opacity-0');
              wrapper.classList.remove('scale-100');
              wrapper.classList.add('scale-90');
              
              setTimeout(() => {
                  modal.classList.add('hidden');
              }, 300);
          },
  
          change: (dir) => {
              currentMoreIndex += dir;
              if(currentMoreIndex >= moreData.length) currentMoreIndex = 0;
              if(currentMoreIndex < 0) currentMoreIndex = moreData.length - 1;
              
              const wrapper = document.getElementById('more-img-wrapper');
              wrapper.style.opacity = '0';
              wrapper.style.transform = 'scale(0.95)';
  
              setTimeout(() => {
                  const data = moreData[currentMoreIndex];
                  document.getElementById('more-img').src = data.src;
                  document.getElementById('more-title').innerText = data.title;
                  document.getElementById('more-cat').innerText = data.category;
                  
                  // Update Download Link saat next/prev
                  const dlBtn = document.getElementById('more-dl-btn');
                  if(dlBtn) {
                      dlBtn.href = data.src;
                      dlBtn.download = data.title.replace(/\s+/g, '_') + ".jpg";
                  }
  
                  wrapper.style.opacity = '1';
                  wrapper.style.transform = 'scale(1)';
              }, 200);
          }
      };
  }
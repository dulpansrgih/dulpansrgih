import { aboutContent } from './route/about.js';
import { experienceContent } from './route/experience.js';
import { educationContent } from './route/education.js';
import { certificateContent, cvContent, initCertificateLogic } from './route/certificate.js';
import { myskillContent } from './route/myskill.js';
import { moreContent, initMoreLogic } from './route/more.js';

// =========================================
// 1. ROUTING CONFIGURATION
// =========================================
const routes = {
    'about': aboutContent,
    'experience': experienceContent,
    'education': educationContent,
    'certificate': certificateContent,
    'cv': cvContent,
    'myskill': myskillContent,
    'more': moreContent
};

const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('[data-nav-link]');

// State Global
let currentPage = 'about';
let currentLang = localStorage.getItem('appLang') || 'id'; // Simpan pilihan bahasa user

// =========================================
// 2. LANGUAGE ENGINE
// =========================================

// Fungsi Global untuk ganti bahasa (dipanggil dari HTML)
window.setLanguage = function(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    
    currentLang = lang;
    localStorage.setItem('appLang', lang); // Simpan ke memory browser
    
    // Update UI Tombol Bahasa
    updateLanguageButtons();
    
    // Terjemahkan elemen statis
    translateStaticElements();
    
    // Reload halaman yang sedang aktif dengan bahasa baru
    loadPage(currentPage);
}

function updateLanguageButtons() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('text-white', 'active');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('text-white', 'active');
            btn.classList.add('text-gray-500');
        }
    });
}

function translateStaticElements() {
    const staticElements = document.querySelectorAll('[data-en]');
    
    staticElements.forEach(el => {
        // --- LOGIKA PENGECUALIAN ---
        // Cek apakah elemen berada di dalam Sidebar, Navbar, atau Sticky Header
        const inSidebar = el.closest('.sidebar');
        const inNavbar = el.closest('.navbar');
        const inStickyHeader = el.closest('#sticky-header');

        // Jika elemen ada di salah satu area tersebut, JANGAN diterjemahkan.
        // Biarkan sesuai default HTML (Dwibahasa Default).
        if (inSidebar || inNavbar || inStickyHeader) {
            return; 
        }
        // -------------------------------------

        // Jika belum ada data-id (teks asli), simpan dulu
        if (!el.dataset.id) el.dataset.id = el.innerHTML;
        
        // Ganti teks berdasarkan bahasa
        if (currentLang === 'en') {
            el.innerHTML = el.dataset.en;
        } else {
            el.innerHTML = el.dataset.id;
        }
    });
}

// =========================================
// 3. CORE ENGINE (Page Loader)
// =========================================

window.loadPage = function(pageName) {
    currentPage = pageName;

    // A. Content Resolver (Pilih Bahasa)
    let contentData = routes[pageName] || routes['about'];
    let finalHTML = '';

    // Cek apakah konten berupa Object (Support Multi Bahasa) atau String biasa
    if (typeof contentData === 'object' && contentData !== null) {
        // Ambil bahasa yang diminta, kalau kosong fallback ke ID
        finalHTML = contentData[currentLang] || contentData['id']; 
    } else {
        // Jika file route belum di-update (masih string biasa), tampilkan apa adanya
        finalHTML = contentData; 
    }

    // B. Inject HTML
    mainContent.innerHTML = finalHTML;
    
    window.scrollTo(0, 0);

    // C. Re-assign CSS variable for icons
    document.querySelectorAll('.work-item').forEach(item => {
        const iconPath = item.getAttribute('data-icon');
        if (iconPath) item.style.setProperty('--icon-image', `url(${iconPath})`);
    });

    // D. Sticky Header Check
    checkStickyHeader();

    // E. Initialize Page Logic
    if (pageName === 'certificate' || pageName === 'cv') {
        initCertificateLogic(); 
        if (pageName === 'cv' && window.innerWidth < 1024) {
            // Logic khusus CV di mobile
            window.loadPage('certificate'); 
            setTimeout(() => {
                if(window.cert && window.cert.switchTab) window.cert.switchTab('resume'); 
            }, 50);
            return; 
        }
    }

    if (pageName === 'more') {
        setTimeout(() => { initMoreLogic(); }, 10);
    }

    // F. Update Navigasi & Bahasa UI
    updateNavigationState(pageName);
    updateLanguageButtons();
    translateStaticElements(); // Pastikan elemen statis tetap terupdate saat pindah halaman
}

function updateNavigationState(pageName) {
    navLinks.forEach(nav => {
        const navTarget = nav.getAttribute('data-nav-link');
        let isActive = (navTarget === pageName);

        if (pageName === 'more' && window.innerWidth >= 1024) {
            if (navTarget === 'certificate') isActive = true;
        }

        if(isActive) nav.classList.add('active');
        else nav.classList.remove('active');
    });
}

// =========================================
// 4. RESPONSIVE SYNC
// =========================================
window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop && currentPage === 'certificate' && window.cert && window.cert.activeTab === 'resume') {
        window.loadPage('cv');
    }

    if (!isDesktop && currentPage === 'cv') {
        window.loadPage('certificate');
        setTimeout(() => { if(window.cert) window.cert.switchTab('resume'); }, 50);
    }
    updateNavigationState(currentPage);
});

// =========================================
// 5. UI LOGIC & HELPERS
// =========================================
function checkStickyHeader() {
    const stickyHeader = document.getElementById('sticky-header');
    if (!stickyHeader) return;

    if (window.scrollY > 150) {
        stickyHeader.classList.remove('-translate-y-[150%]', 'opacity-0');
        stickyHeader.classList.add('translate-y-0', 'opacity-100');
    } else {
        stickyHeader.classList.remove('translate-y-0', 'opacity-100');
        stickyHeader.classList.add('-translate-y-[150%]', 'opacity-0');
    }
}
window.addEventListener('scroll', checkStickyHeader, { passive: true });

window.toggleAboutModal = function(show) {
    const modal = document.getElementById('about-modal');
    const card = document.getElementById('modal-card');
    if (!modal || !card) return;
    
    if (show) {
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hidden');
        void modal.offsetWidth; 
        modal.classList.remove('opacity-0', 'pointer-events-auto');
        modal.classList.add('pointer-events-auto');
        card.classList.remove('translate-y-full', 'md:scale-95', 'opacity-0');
        card.classList.add('translate-y-0', 'md:scale-100', 'opacity-100');
    } else {
        document.body.style.overflow = '';
        card.classList.remove('translate-y-0', 'md:scale-100', 'opacity-100');
        card.classList.add('translate-y-full', 'md:scale-95', 'opacity-0');
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('pointer-events-auto');
        setTimeout(() => { modal.classList.add('hidden'); }, 300);
    }
};

document.addEventListener('click', function(e) {
    if (e.target.id === 'about-modal') window.toggleAboutModal(false);
    
    const navBtn = e.target.closest('[data-nav-link]');
    if (navBtn) {
        loadPage(navBtn.getAttribute('data-nav-link'));
        
        // --- LOGIKA BARU: TUTUP SIDEBAR SAAT NAVIGASI DIKLIK ---
        const sidebar = document.querySelector('[data-sidebar]');
        if(sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
        // -------------------------------------------------------
    }
    
    const sidebarBtn = e.target.closest('[data-sidebar-btn]');
    if(sidebarBtn) {
        const sidebar = document.querySelector('[data-sidebar]');
        if(sidebar) sidebar.classList.toggle('active');
    }
    
    const detailBtn = e.target.closest('.btn-detail-toggle');
    if (detailBtn) {
        const targetId = detailBtn.getAttribute('data-target');
        const detailEl = document.getElementById(targetId);
        const btnTextSpan = detailBtn.querySelector('span');
        if (detailEl) {
            detailEl.classList.toggle('hidden');
            if (detailEl.classList.contains('hidden')) {
                if (btnTextSpan) {
                     // Cek bahasa saat ini untuk teks tombol
                     const isEn = localStorage.getItem('appLang') === 'en';
                     btnTextSpan.innerText = btnTextSpan.innerText.replace(isEn ? 'Hide' : 'Sembunyikan', isEn ? 'Show' : 'Lihat');
                }
                detailBtn.classList.remove('active');
            } else {
                if (btnTextSpan) {
                    const isEn = localStorage.getItem('appLang') === 'en';
                    btnTextSpan.innerText = btnTextSpan.innerText.replace(isEn ? 'Show' : 'Lihat', isEn ? 'Hide' : 'Sembunyikan');
                }
                detailBtn.classList.add('active');
            }
        }
    }
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('about'); 
});
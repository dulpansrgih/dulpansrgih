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

// Variabel Global untuk menyimpan halaman aktif saat ini
let currentPage = 'about';

// =========================================
// 2. CORE ENGINE (Page Loader)
// =========================================

window.loadPage = function(pageName) {
    currentPage = pageName; // Update state halaman aktif

    // A. Inject HTML ke Main Content
    if (routes[pageName]) {
        mainContent.innerHTML = routes[pageName];
    } else {
        mainContent.innerHTML = routes['about'];
    }
    
    window.scrollTo(0, 0);

    // B. Re-assign CSS variable for icons
    document.querySelectorAll('.work-item').forEach(item => {
        const iconPath = item.getAttribute('data-icon');
        if (iconPath) item.style.setProperty('--icon-image', `url(${iconPath})`);
    });

    // C. Cek status header sticky
    checkStickyHeader();

    // D. Inisialisasi Logic per Halaman
    if (pageName === 'certificate' || pageName === 'cv') {
        initCertificateLogic(); 
        
        // --- LOGIC RESPONSIVE: Mobile CV Tab ---
        if (pageName === 'cv' && window.innerWidth < 1024) {
            // Jika user buka link /#cv tapi di layar mobile:
            // Tampilkan halaman 'certificate', lalu switch ke tab 'resume'
            mainContent.innerHTML = routes['certificate'];
            currentPage = 'certificate'; // State jadi certificate karena base-nya di situ
            setTimeout(() => {
                if(window.cert && window.cert.switchTab) window.cert.switchTab('resume'); 
            }, 50);
        }
    }

    if (pageName === 'more') {
        setTimeout(() => {
            initMoreLogic();
        }, 10);
    }

    // E. Update State Navigasi
    updateNavigationState(pageName);
}

// Fungsi Update Navigasi Terpisah agar bisa dipanggil ulang
function updateNavigationState(pageName) {
    navLinks.forEach(nav => {
        const navTarget = nav.getAttribute('data-nav-link');
        let isActive = (navTarget === pageName);

        // Kasus Khusus: Jika di halaman MORE (Desktop), aktifkan menu Certificate
        if (pageName === 'more' && window.innerWidth >= 1024) {
            if (navTarget === 'certificate') isActive = true;
        }

        // Kasus Khusus: Jika di halaman CERTIFICATE tapi tab RESUME aktif (Mobile), mungkin perlu highlighting khusus?
        // Untuk saat ini standar saja.

        if(isActive) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}

// =========================================
// 3. RESPONSIVE SYNC (AUTO SWITCH)
// =========================================
window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth >= 1024;
    
    // A. Mobile (Resume Tab) --> Desktop (CV Page)
    // Jika kita di halaman certificate dan tab yang aktif adalah 'resume', saat layar membesar pindah ke page 'cv'
    if (isDesktop && currentPage === 'certificate') {
        if (window.cert && window.cert.activeTab === 'resume') {
            window.loadPage('cv');
        }
    }

    // B. Desktop (CV Page) --> Mobile (Certificate Page -> Resume Tab)
    // Jika kita di halaman 'cv' saat layar mengecil, pindah ke 'certificate' dan buka tab 'resume'
    if (!isDesktop && currentPage === 'cv') {
        window.loadPage('certificate');
        setTimeout(() => {
             if(window.cert) window.cert.switchTab('resume');
        }, 50);
    }
    
    // Update navigasi jika layout berubah (terutama untuk kasus 'more')
    updateNavigationState(currentPage);
});


// =========================================
// 4. UI LOGIC & HELPERS
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
        const targetPage = navBtn.getAttribute('data-nav-link');
        loadPage(targetPage);
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
                if (btnTextSpan) btnTextSpan.innerText = btnTextSpan.innerText.replace('Hide', 'Show');
                detailBtn.classList.remove('active');
            } else {
                if (btnTextSpan) btnTextSpan.innerText = btnTextSpan.innerText.replace('Show', 'Hide');
                detailBtn.classList.add('active');
            }
        }
    }
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('about'); 
});
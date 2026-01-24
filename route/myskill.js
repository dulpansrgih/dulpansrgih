const contentOriginal = `
<article class="myskill active bg-eerie-black-2/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 md:p-10 shadow-2xl z-[1] animate-fade min-h-screen flex flex-col gap-8 relative overflow-hidden">

  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-yellow-crayola/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

  <header class="flex flex-col gap-3 relative z-10 px-2 md:px-0">
     <div class="flex items-center gap-3 md:gap-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Professional <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skills</span>
        </h2>
        <div class="h-1 flex-grow bg-gradient-to-r from-blue-500/30 to-transparent rounded-full ml-2"></div>
    </div>
    <div class="flex items-center gap-2 pl-1">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        <p class="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">Management & Strategic Competencies</p>
    </div>
  </header>

  <section class="projects mt-4 relative z-10">
    
    <h3 class="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 border-l-4 border-orange-yellow-crayola pl-3" data-en="Competencies">
        Kompetensi
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-orange-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="construct" class="text-7xl text-orange-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2" data-en="<div class='w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400'><ion-icon name='analytics'></ion-icon></div> Data Analysis & Admin">
                <div class="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <ion-icon name="analytics"></ion-icon>
                </div>
                Analisis Data & Administrasi
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Microsoft Excel (Advanced)</h5><span class="text-orange-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Office Administration (Word/PPT)</h5><span class="text-orange-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Google Workspace (Spreadsheet)</h5><span class="text-orange-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 90%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Data Visualization (Reporting)">Visusalisasi Data (Pelaporan)</h5><span class="text-orange-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Data Management">Pengelolaan Data</h5><span class="text-orange-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Administrative Automation">Otomasi Administratif</h5><span class="text-orange-400 text-xs font-bold">83%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 83%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="people-circle" class="text-7xl text-blue-500 rotate-12"></ion-icon>
            </div>
            
            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2" data-en="<div class='w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400'><ion-icon name='people'></ion-icon></div> Human Resource Management">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <ion-icon name="people"></ion-icon>
                </div>
                Manajemen Sumber Daya Manusia
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Recruitment & Selection">Rekrutmen & Seleksi</h5><span class="text-blue-400 text-xs font-bold">87%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style="width: 87%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Training & Development">Pelatihan & Pengembangan</h5><span class="text-blue-400 text-xs font-bold">83%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 83%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Performance Appraisal">Penilaian Kinerja</h5><span class="text-blue-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Organizational Behavior">Perilaku Organisasi</h5><span class="text-blue-400 text-xs font-bold">75%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 75%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="HR Administration">Administrasi SDM</h5><span class="text-blue-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Analysis & Industrial Relations">Analisis & Hubungan Industrial</h5><span class="text-blue-400 text-xs font-bold">81%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 81%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="cash" class="text-7xl text-green-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2" data-en="<div class='w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400'><ion-icon name='wallet'></ion-icon></div> Financial Management">
                <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <ion-icon name="wallet"></ion-icon>
                </div>
                Manajemen Keuangan
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Budgeting & Planning">Penganggaran & Perencanaan</h5><span class="text-green-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Financial Statements">Laporan Keuangan</h5><span class="text-green-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Cash Flow Management">Manajemen Arus Kas</h5><span class="text-green-400 text-xs font-bold">83%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 83%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Financial Audit">Audit Keuangan</h5><span class="text-green-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Cost Analysis Management">Manajemen Analisis Biaya</h5><span class="text-green-400 text-xs font-bold">75%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 75%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-purple-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="trending-up" class="text-7xl text-purple-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2" data-en="<div class='w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400'><ion-icon name='megaphone'></ion-icon></div> Business Dev & Marketing">
                <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <ion-icon name="megaphone"></ion-icon>
                </div>
                Manajemen Pengembangan Bisnis & Pemasaran
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Digital Marketing Strategy">Strategi Pemasaran Digital</h5><span class="text-purple-400 text-xs font-bold">78%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 78%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Market Research">Penelitian Pasar</h5><span class="text-purple-400 text-xs font-bold">73%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 73%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Strategic Planning">Perencanaan Strategis</h5><span class="text-purple-400 text-xs font-bold">75%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 75%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium" data-en="Business Opportunity Analysis">Analisis Peluang Bisnis</h5><span class="text-purple-400 text-xs font-bold">75%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 75%"></div></div>
                </li>
            </ul>
        </div>

    </div>

    <h3 class="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 border-l-4 border-gray-500 pl-3" data-en="Other Skills">
        Keahlian Lainnya
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all">
            <h4 class="text-md font-bold text-white mb-4 flex items-center gap-2" data-en="<ion-icon name='brush' class='text-pink-400'></ion-icon> Creative & Design">
                <ion-icon name="brush" class="text-pink-400"></ion-icon> Kreatif & Desain
            </h4>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">Canva</span>
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">Capcut</span>
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20" data-en="Social Media">Media Sosial</span>
            </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all">
            <h4 class="text-md font-bold text-white mb-4 flex items-center gap-2" data-en="<ion-icon name='code-slash' class='text-gray-400'></ion-icon> Web & Technology">
                <ion-icon name="code-slash" class="text-gray-400"></ion-icon> Web & Teknologi
            </h4>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-500/10 text-gray-300 text-xs rounded-full border border-gray-500/20">WordPress / CMS</span>
                <span class="px-3 py-1 bg-gray-500/10 text-gray-300 text-xs rounded-full border border-gray-500/20">Blogger</span>
                <span class="px-3 py-1 bg-gray-500/10 text-gray-300 text-xs rounded-full border border-gray-500/20">Basic HTML/CSS</span>
            </div>
        </div>
    </div>

    <div class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-32 h-32 bg-orange-yellow-crayola/20 rounded-full blur-[50px] pointer-events-none"></div>
        
        <div class="flex items-center gap-3 mb-6 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-orange-yellow-crayola/20 flex items-center justify-center text-orange-yellow-crayola">
                <ion-icon name="flash" class="text-xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-white" data-en="Interpersonal Skills">Keterampilan Interpersonal</h3>
        </div>

        <div class="flex flex-wrap gap-3">
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="people" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Team Management">Manajemen Tim</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="flag" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Leadership">Kepemimpinan</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="chatbubbles" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Integrity & Work Ethics">Integritas & Etika Kerja</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="bulb" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Critical Thinking">Berpikir Kritis</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="extension-puzzle" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Problem Solving">Penyelesaian Masalah</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="sync" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white" data-en="Adaptability">Adaptabilitas</span>
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

export const myskillContent = { id: contentOriginal, en: createEnVer(contentOriginal) };
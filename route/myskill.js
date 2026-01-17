export const myskillContent = `
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
    
    <h3 class="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 border-l-4 border-orange-yellow-crayola pl-3">
        Core Competencies
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-orange-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="construct" class="text-7xl text-orange-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <ion-icon name="analytics"></ion-icon>
                </div>
                Data Analytics & Business Tools
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Microsoft Excel (Advanced)</h5><span class="text-orange-400 text-xs font-bold">95%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" style="width: 95%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">SPSS Statistics</h5><span class="text-orange-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">RapidMiner (Data Mining)</h5><span class="text-orange-400 text-xs font-bold">70%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 70%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Office Administration (Word/PPT)</h5><span class="text-orange-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 90%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Google Workspace (Spreadsheet)</h5><span class="text-orange-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full" style="width: 90%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="people-circle" class="text-7xl text-blue-500 rotate-12"></ion-icon>
            </div>
            
            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <ion-icon name="people"></ion-icon>
                </div>
                Human Capital & SDM
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Talent Acquisition & Recruitment</h5><span class="text-blue-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style="width: 90%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Training & Development</h5><span class="text-blue-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Performance Appraisal</h5><span class="text-blue-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Organizational Behavior</h5><span class="text-blue-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style="width: 90%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="cash" class="text-7xl text-green-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <ion-icon name="wallet"></ion-icon>
                </div>
                Financial Management
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Budgeting & Forecasting</h5><span class="text-green-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Financial Reporting</h5><span class="text-green-400 text-xs font-bold">90%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 90%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Cash Flow Management</h5><span class="text-green-400 text-xs font-bold">88%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full" style="width: 88%"></div></div>
                </li>
            </ul>
        </div>

        <div class="group bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 hover:border-purple-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ion-icon name="trending-up" class="text-7xl text-purple-500 rotate-12"></ion-icon>
            </div>

            <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <ion-icon name="megaphone"></ion-icon>
                </div>
                Marketing & Strategy
            </h4>
            
            <ul class="space-y-4">
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Digital Marketing Strategy</h5><span class="text-purple-400 text-xs font-bold">80%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 80%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Market Research</h5><span class="text-purple-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 85%"></div></div>
                </li>
                <li>
                    <div class="flex justify-between mb-1.5"><h5 class="text-gray-300 text-sm font-medium">Strategic Planning</h5><span class="text-purple-400 text-xs font-bold">85%</span></div>
                    <div class="w-full bg-black/40 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full" style="width: 85%"></div></div>
                </li>
            </ul>
        </div>

    </div>

    <h3 class="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 border-l-4 border-gray-500 pl-3">
        Additional Skills
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all">
            <h4 class="text-md font-bold text-white mb-4 flex items-center gap-2">
                <ion-icon name="brush" class="text-pink-400"></ion-icon> Creative & Design
            </h4>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">Canva Design</span>
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">Adobe Photoshop</span>
                <span class="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">Content Creation</span>
            </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all">
            <h4 class="text-md font-bold text-white mb-4 flex items-center gap-2">
                <ion-icon name="code-slash" class="text-gray-400"></ion-icon> Web & Technology
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
            <h3 class="text-xl font-bold text-white">Soft Skills & Leadership</h3>
        </div>

        <div class="flex flex-wrap gap-3">
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="people" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Team Management</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="flag" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Leadership</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="chatbubbles" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Public Speaking</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="bulb" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Critical Thinking</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="extension-puzzle" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Problem Solving</span>
           </div>
           <div class="group px-4 py-2 bg-white/5 hover:bg-orange-yellow-crayola/20 border border-white/10 hover:border-orange-yellow-crayola/50 rounded-xl transition-all cursor-default flex items-center gap-2">
               <ion-icon name="sync" class="text-gray-400 group-hover:text-orange-yellow-crayola transition-colors"></ion-icon>
               <span class="text-gray-300 text-sm font-medium group-hover:text-white">Adaptability</span>
           </div>
        </div>
    </div>

  </section>
</article>
`;
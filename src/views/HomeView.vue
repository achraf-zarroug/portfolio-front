<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100 relative selection:bg-indigo-500 selection:text-white">
    <!-- Interactive Background (Ambient Orbs, Cyber Grid & Canvas Particles) -->
    <InteractiveBackground />

    <!-- Top Navigation -->
    <AppHeader />

    <!-- Main Content Container -->
    <main class="relative z-10 flex-grow">
      
      <!-- ================================================================= -->
      <!-- SECTION 1: HERO SECTION (#home)                                  -->
      <!-- ================================================================= -->
      <section id="home" class="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <!-- Availability Pill -->
              <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-500/10">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Disponible pour opportunités Full-Time & Projets Freelance</span>
              </div>

              <!-- Main Heading -->
              <div class="space-y-2">
                <p class="text-sm sm:text-base font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                  Bonjour, je m'appelle
                </p>
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Achraf <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">ZARROUG</span>
                </h1>
              </div>

              <!-- Dynamic Typewriter Subtitle -->
              <div class="h-10 flex items-center justify-center lg:justify-start">
                <p class="text-xl sm:text-2xl font-bold font-mono text-slate-200 flex items-center">
                  <span class="text-indigo-400 mr-2 font-mono">&gt;</span>
                  <span>{{ currentTitle }}</span>
                  <span class="inline-block w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse"></span>
                </p>
              </div>

              <!-- Description -->
              <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Ingénieur logiciel diplômé de l'<strong class="text-white font-semibold">ESPRIT</strong>, je conçois des applications web d'entreprise performantes, scalables et centrées sur l'utilisateur. Double expertise <strong class="text-indigo-300 font-semibold">.NET 8 (C#)</strong> & frameworks frontend modernes <strong class="text-cyan-300 font-semibold">(Vue.js 3, TypeScript)</strong>.
              </p>

              <!-- CTA Action Buttons -->
              <div class="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#projects"
                  class="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 active:scale-95 border border-indigo-400/30"
                >
                  <span>Explorer mes réalisations</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  download="Achraf_Zarroug_CV.pdf"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200"
                >
                  <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Télécharger mon CV (.PDF)</span>
                </a>
              </div>

              <!-- Key Metrics / Stats with Animated Flair -->
              <div class="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
                <div class="space-y-1">
                  <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center lg:justify-start">
                    <span>2+</span>
                    <span class="text-indigo-400 text-lg">ans</span>
                  </div>
                  <div class="text-xs text-slate-400 font-medium">Expérience Pro</div>
                </div>

                <div class="space-y-1 border-x border-white/10 px-2">
                  <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center lg:justify-start">
                    <span>5+</span>
                    <span class="text-cyan-400 text-lg">projets</span>
                  </div>
                  <div class="text-xs text-slate-400 font-medium">Production & Déployés</div>
                </div>

                <div class="space-y-1">
                  <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center lg:justify-start">
                    <span>100%</span>
                  </div>
                  <div class="text-xs text-slate-400 font-medium">Clean Architecture</div>
                </div>
              </div>

            </div>

            <!-- Right Hero: Interactive 3D Avatar Card & Code Terminal -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              <!-- Avatar with Glowing Conic Orbit -->
              <div class="relative group">
                <!-- Rotating animated iridescent ring -->
                <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>

                <div class="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-900 p-2 shadow-2xl border border-white/10">
                  <div class="w-full h-full rounded-[20px] overflow-hidden bg-slate-950 flex items-center justify-center relative">
                    <img 
                      src="/moi.png" 
                      alt="Achraf Zarroug"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                <!-- Floating Tech Badge 1: .NET 8 -->
                <div class="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-indigo-500/40 shadow-xl flex items-center gap-2.5 animate-float">
                  <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span class="text-xs font-mono font-bold text-white">.NET 8 & C#</span>
                </div>

                <!-- Floating Tech Badge 2: Vue 3 -->
                <div class="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-2.5 animate-float" style="animation-delay: -2s;">
                  <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span class="text-xs font-mono font-bold text-white">Vue 3 & TypeScript</span>
                </div>

                <!-- Floating Tech Badge 3: Docker -->
                <div class="absolute top-1/2 -right-6 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg hidden sm:flex items-center gap-2 animate-float-slow">
                  <span class="text-[11px] font-mono text-slate-300">🐳 Docker</span>
                </div>
              </div>

              <!-- Interactive Live Code Terminal Window -->
              <div class="w-full max-w-md rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                <!-- Terminal Top Bar -->
                <div class="px-4 py-2.5 bg-slate-950 border-b border-white/5 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div class="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-lg border border-white/5">
                    <button
                      @click="activeCodeTab = 'csharp'"
                      class="px-2 py-0.5 rounded text-[11px] transition-colors"
                      :class="activeCodeTab === 'csharp' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'"
                    >
                      Program.cs
                    </button>
                    <button
                      @click="activeCodeTab = 'vue'"
                      class="px-2 py-0.5 rounded text-[11px] transition-colors"
                      :class="activeCodeTab === 'vue' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'"
                    >
                      Portfolio.vue
                    </button>
                  </div>
                </div>

                <!-- Code Lines -->
                <div class="p-4 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
                  <template v-if="activeCodeTab === 'csharp'">
                    <div class="text-slate-500">// .NET 8 Web API & Clean Architecture</div>
                    <div><span class="text-purple-400">var</span> builder = WebApplication.CreateBuilder(args);</div>
                    <div>builder.Services.AddEndpointsApiExplorer();</div>
                    <div>builder.Services.AddSwaggerGen();</div>
                    <div class="text-slate-500 mt-1">// Injection de dépendances métier</div>
                    <div>builder.Services.AddScoped&lt;<span class="text-cyan-300">IProjectService</span>, <span class="text-indigo-300">ProjectService</span>&gt;();</div>
                    <div><span class="text-purple-400">var</span> app = builder.Build();</div>
                    <div class="mt-1">app.MapGet(<span class="text-emerald-300">"/api/engineer"</span>, () =&gt; <span class="text-purple-400">new</span> {</div>
                    <div class="pl-4">Name = <span class="text-emerald-300">"Achraf Zarroug"</span>,</div>
                    <div class="pl-4">Status = <span class="text-emerald-300">"Available"</span>,</div>
                    <div class="pl-4">Stack = <span class="text-emerald-300">".NET 8 + Vue 3"</span></div>
                    <div>});</div>
                    <div>app.Run();</div>
                  </template>

                  <template v-else>
                    <div class="text-slate-500">&lt;script setup lang="ts"&gt;</div>
                    <div><span class="text-purple-400">import</span> { ref, computed } <span class="text-purple-400">from</span> <span class="text-emerald-300">'vue'</span></div>
                    <div><span class="text-purple-400">const</span> engineer = ref({</div>
                    <div class="pl-4">name: <span class="text-emerald-300">'Achraf Zarroug'</span>,</div>
                    <div class="pl-4">cleanArchitecture: <span class="text-amber-400">true</span>,</div>
                    <div class="pl-4">skills: [<span class="text-emerald-300">'.NET 8'</span>, <span class="text-emerald-300">'Vue 3'</span>, <span class="text-emerald-300">'Docker'</span>]</div>
                    <div>})</div>
                    <div><span class="text-purple-400">const</span> isReady = computed(() =&gt; engineer.value.skills.length &gt; 0)</div>
                    <div class="text-slate-500">&lt;/script&gt;</div>
                  </template>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- Infinite Dual Marquee Stack Showcase -->
      <TechMarquee />

      <!-- ================================================================= -->
      <!-- SECTION 2: ABOUT & JOURNEY (#about)                              -->
      <!-- ================================================================= -->
      <section id="about" class="py-24 border-b border-white/5 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Title Header -->
          <div class="text-center max-w-3xl mx-auto mb-20">
            <span class="badge-brand mb-3">Parcours & Compétences</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
              À Propos & Écosystème
            </h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Une vision orientée ingénierie logicielle : allier robustesse backend, sécurité et finesse ergonomique frontend.
            </p>
          </div>

          <!-- Profile Card -->
          <div class="glass-card rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden">
            <!-- Background Glow -->
            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div class="lg:col-span-4 flex justify-center">
                <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-cyan-400 p-1 shadow-2xl">
                  <img 
                    src="/moi2.png" 
                    alt="Achraf Zarroug" 
                    class="w-full h-full object-cover rounded-[22px] bg-slate-950" 
                  />
                </div>
              </div>

              <div class="lg:col-span-8 space-y-4">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">Achraf Zarroug</h3>
                  <span class="badge-emerald">Ingénieur Génie Logiciel</span>
                  <span class="badge-cyber">Full-Stack .NET & Vue</span>
                </div>

                <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Diplômé en Génie Logiciel de l'<strong class="text-white font-semibold">ESPRIT (Tunis)</strong>, je cumule {{ yearsOfExperience }} ans d'expérience dans la conception et l'implémentation de solutions web modernes.
                </p>

                <p class="text-slate-400 text-sm leading-relaxed">
                  Mon approche privilégie la modularité du code (<strong class="text-slate-200">Clean Architecture, DDD, SOLID</strong>), la scalabilité des APIs RESTful et la fluidité des interfaces frontend utilisateur. Toujours en quête d'optimisation des performances et de modernité architecturale.
                </p>

                <!-- Core Pillars -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  <div class="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <span class="text-xs font-mono font-bold text-indigo-400 block">Clean Code</span>
                    <span class="text-[11px] text-slate-500">SOLID & DRY</span>
                  </div>
                  <div class="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <span class="text-xs font-mono font-bold text-cyan-400 block">Scalabilité</span>
                    <span class="text-[11px] text-slate-500">APIs RESTful</span>
                  </div>
                  <div class="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <span class="text-xs font-mono font-bold text-emerald-400 block">Conteneurs</span>
                    <span class="text-[11px] text-slate-500">Docker & CI/CD</span>
                  </div>
                  <div class="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <span class="text-xs font-mono font-bold text-purple-400 block">UX Intuitive</span>
                    <span class="text-[11px] text-slate-500">Vue 3 & Motion</span>
                  </div>
                </div>

                <!-- Info Badges -->
                <div class="pt-3 flex flex-wrap gap-6 text-xs font-mono text-slate-400 border-t border-white/10">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Tunis, Tunisie (Mobile / Remote)</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:achraf.zarroug@hotmail.com" class="hover:text-indigo-400 transition-colors">achraf.zarroug@hotmail.com</a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <!-- Technical Skills Matrix -->
          <div class="mb-24">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h3 class="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Matrice des Compétences Techniques</span>
                </h3>
                <p class="text-xs text-slate-400 mt-1">Technologies manipulées quotidiennement en production</p>
              </div>

              <!-- Skill Category Tabs -->
              <div class="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
                <button
                  v-for="cat in skillCategories"
                  :key="cat.name"
                  @click="selectedSkillCategory = cat.name"
                  class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  :class="selectedSkillCategory === cat.name ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'"
                >
                  {{ cat.shortName || cat.name }}
                </button>
              </div>
            </div>

            <!-- Skills Display Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div
                v-for="skill in currentCategorySkills"
                :key="skill.name"
                class="glass-card p-5 rounded-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
              >
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{{ skill.name }}</span>
                  <span class="text-[11px] font-mono text-indigo-400 font-semibold">{{ skill.level }}%</span>
                </div>

                <!-- Animated Progress Bar -->
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2.5">
                  <div
                    class="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>

                <p class="text-[11px] text-slate-400 leading-relaxed">{{ skill.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Professional Experience Timeline -->
          <div class="mb-24">
            <div class="mb-12">
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Expérience Professionnelle</span>
              </h3>
              <p class="text-xs text-slate-400 mt-1">Missions freelance, projets d'envergure et stages d'ingénierie</p>
            </div>

            <!-- Timeline Container -->
            <div class="relative pl-6 sm:pl-8 border-l border-indigo-500/30 space-y-10">
              <div
                v-for="job in experience"
                :key="job.id"
                class="relative group"
              >
                <!-- Glowing Node Point -->
                <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300">
                  <span class="absolute inset-0 rounded-full bg-indigo-400/50 animate-ping"></span>
                </div>

                <!-- Milestone Card -->
                <div class="glass-card p-6 sm:p-8 rounded-2xl hover:border-indigo-500/40 transition-all duration-300">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 class="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {{ job.title }}
                      </h4>
                      <span class="text-sm font-semibold text-indigo-300">{{ job.company }}</span>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                      {{ job.period }}
                    </span>
                  </div>

                  <p class="text-slate-300 text-sm leading-relaxed mb-5">{{ job.description }}</p>

                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tech in job.technologies"
                      :key="tech"
                      class="tech-pill"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div>
            <div class="mb-10">
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span>Formation & Diplômes d'Ingénieur</span>
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                v-for="edu in education"
                :key="edu.id"
                class="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300"
              >
                <div>
                  <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {{ edu.year }}
                    </span>
                  </div>
                  <h4 class="text-base font-bold text-white mb-1.5">{{ edu.degree }}</h4>
                  <p class="text-xs font-semibold text-indigo-400 mb-3">{{ edu.school }}</p>
                  <p class="text-xs text-slate-400 leading-relaxed">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 3: PROJECTS SHOWCASE (#projects)                         -->
      <!-- ================================================================= -->
      <section id="projects" class="py-24 border-b border-white/5 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="badge-brand mb-3">Portfolio & Code</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Mes Réalisations Majeures
            </h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Applications web complètes, plateformes d'entreprise avec backend .NET et architectures frontend réactives.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap justify-center gap-2 mb-14">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
              :class="[
                selectedCategory === category 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105' 
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-white/5'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <!-- Projects Grid with 3D Tilt Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.id"
              :project="project"
              @open-details="openProjectModal"
            />
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 4: CONTACT & COLLABORATION (#contact)                    -->
      <!-- ================================================================= -->
      <section id="contact" class="py-24 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="badge-brand mb-3">Opportunités & Freelance</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Démarrons un Projet Ensemble
            </h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Une opportunité en CDI, un besoin de développement sur mesure ou une question technique ? Je réponds sous 24h.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <!-- Left: Contact Details Cards -->
            <div class="lg:col-span-5 space-y-6">
              
              <!-- Direct WhatsApp Quick Chat Card -->
              <div class="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-white">Discussion Rapide WhatsApp</h4>
                    <p class="text-xs text-slate-400">Réponse immédiate pour urgences & devis</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/21624231240?text=Bonjour%20Achraf%2C%20je%20souhaite%20discuter%20d'une%20opportunit%C3%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-shimmer w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-xs"
                >
                  <span>Ouvrir la conversation WhatsApp</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <!-- Quick Info Card with Copy Email -->
              <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-5">
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold pb-3 border-b border-white/10">
                  Coordonnées Directes
                </h4>

                <!-- Email Row with Copy Button -->
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-[11px] font-mono text-slate-400 block">Email</span>
                      <a href="mailto:achraf.zarroug@hotmail.com" class="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                        achraf.zarroug@hotmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    @click="copyEmail"
                    class="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    :title="copied ? 'Email copié !' : 'Copier l\'adresse email'"
                  >
                    {{ copied ? 'Copié !' : 'Copier' }}
                  </button>
                </div>

                <!-- Phone Row -->
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 block">Téléphone</span>
                    <p class="text-xs sm:text-sm font-semibold text-white">(+216) 24 231 240</p>
                  </div>
                </div>

                <!-- Location Row -->
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 block">Localisation</span>
                    <p class="text-xs sm:text-sm font-semibold text-white">Tunis, Tunisie (Disponible Remote / Mobilité)</p>
                  </div>
                </div>

                <!-- Socials -->
                <div class="pt-4 border-t border-white/10 flex gap-3">
                  <a
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-800 flex items-center justify-center gap-2"
                  >
                    <span>{{ social.name }}</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>

            <!-- Right: Interactive Contact Form -->
            <div class="lg:col-span-7">
              <div class="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Envoyez-moi un message direct</h3>
                <p class="text-xs sm:text-sm text-slate-400 mb-8">Remplissez le formulaire ci-dessous pour démarrer l'échange.</p>
                
                <form @submit.prevent="submitForm" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label for="name" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="Ex: Alexandre Dubois"
                      />
                    </div>

                    <div>
                      <label for="email" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Votre adresse Email *
                      </label>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="nom@entreprise.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="subject" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Sujet de votre message *
                    </label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="Ex: Opportunité Ingénieur Full-Stack (.NET 8 & Vue.js)"
                    />
                  </div>

                  <div>
                    <label for="message" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Message détaillé *
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      required
                      class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                      placeholder="Décrivez votre projet, vos technologies ou vos attentes..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="btn-shimmer w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-indigo-400/30 text-sm"
                  >
                    <template v-if="isSubmitting">
                      <span class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Transmission sécurisée en cours...
                      </span>
                    </template>
                    <template v-else>
                      <span class="flex items-center justify-center gap-2">
                        <span>Transmettre mon message</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </template>
                  </button>
                </form>

                <!-- Success Toast -->
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0 translate-y-4 scale-95"
                  enter-to-class="opacity-100 translate-y-0 scale-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0 scale-100"
                  leave-to-class="opacity-0 translate-y-4 scale-95"
                >
                  <div
                    v-if="showSuccess"
                    class="mt-6 bg-slate-900 border border-emerald-500/50 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3.5"
                  >
                    <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-bold text-sm text-emerald-300">Message transmis avec succès !</p>
                      <p class="text-xs text-slate-400">Merci. Je vous recontacte dans les plus brefs délais.</p>
                    </div>
                  </div>
                </transition>

              </div>
            </div>

          </div>

        </div>
      </section>

    </main>

    <!-- Floating WhatsApp Ping Button -->
    <a
      href="https://wa.me/21624231240?text=Bonjour%20Achraf%2C%20je%20souhaite%20discuter%20d'une%20opportunit%C3%A9"
      class="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 z-40 transition-all duration-300 hover:scale-110 active:scale-95 group"
      target="_blank"
      rel="noopener noreferrer"
      title="Discuter sur WhatsApp"
    >
      <span class="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping"></span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current relative z-10" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    </a>

    <!-- Project Details Modal -->
    <ProjectModal :project="activeModalProject" @close="activeModalProject = null" />

    <!-- Sleek Glassmorphic Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import TechMarquee from '../components/TechMarquee.vue'
import InteractiveBackground from '../components/InteractiveBackground.vue'

// --- Interfaces ---
interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
}

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface Education {
  id: number
  degree: string
  school: string
  year: string
  description: string
}

interface SkillItem {
  name: string
  level: number
  desc: string
}

interface SkillCategory {
  name: string
  shortName?: string
  items: SkillItem[]
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface SocialLink {
  name: string
  href: string
}

// --- Dynamic Typewriter in Hero ---
const titles = [
  'Ingénieur en Génie Logiciel',
  'Développeur Full-Stack .NET 8 & Vue.js 3',
  'Architecte Clean Architecture & APIs REST',
  'Spécialiste Frontend Moderne & TypeScript'
]

const currentTitle = ref(titles[0])
let titleIndex = 0
let charIndex = 0
let isDeleting = false
let typewriterTimeout: any = null

const typeWriter = () => {
  const currentWord = titles[titleIndex]
  if (isDeleting) {
    currentTitle.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentTitle.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  let delay = isDeleting ? 40 : 80

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 2200
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    titleIndex = (titleIndex + 1) % titles.length
    delay = 400
  }

  typewriterTimeout = setTimeout(typeWriter, delay)
}

// --- Code tab in Hero ---
const activeCodeTab = ref<'csharp' | 'vue'>('csharp')

// --- About Data ---
const yearsOfExperience = computed(() => {
  const startYear = 2023
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})

const experience = ref<Experience[]>([
  {
    id: 1,
    title: 'Développeur Full-Stack .NET & Vue.js',
    company: 'Freelance – Agence de voyage',
    period: '2024',
    description: `Conception et déploiement d’un système complet pour agence de voyage : gestion des réservations, module d'authentification sécurisé JWT, back-office d'administration, et catalogue interactif. Clean Architecture .NET 8 couplée à une interface Vue 3 ultra réactive.`,
    technologies: ['.NET 8', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'SQL Server', 'Axios']
  },
  {
    id: 2,
    title: 'Développeur Frontend – Plateforme Médicale & Prise de RDV',
    company: 'Freelance – Cabinet dentaire',
    period: '2024',
    description: `Développement d’une interface de prise de rendez-vous intuitive avec validation en temps réel, intégration EmailJS pour notifications instantanées et optimisation SEO locale atteignant les meilleurs scores Lighthouse.`,
    technologies: ['Vue.js 3', 'Tailwind CSS', 'TypeScript', 'EmailJS', 'SEO Optimization']
  },
  {
    id: 3,
    title: 'Développeur Frontend – Catalogue & Réservation Artisanale',
    company: 'Freelance – Maison de Pâtisserie',
    period: '2024',
    description: `Création d’un site vitrine haut de gamme avec galerie de créations filtrable, gestion des commandes spéciales et formulaires dynamiques responsive pour une expérience client fluide sur mobile et desktop.`,
    technologies: ['Vue.js 3', 'Tailwind CSS', 'TypeScript', 'Formspree']
  },
  {
    id: 4,
    title: 'Stage PFE – Ingénieur Full-Stack & Extraction IA',
    company: 'NeoLedge',
    period: '2023',
    description: `Conception d’un système de parsing et extraction de compétences depuis des CVs candidats, algorithme de scoring de correspondance par similarité sémantique, et génération automatique de fiches de synthèse RH.`,
    technologies: ['.NET Core', 'Vue.js', 'Python (FastAPI)', 'Entity Framework', 'Docker', 'REST API']
  }
])

const education = ref<Education[]>([
  {
    id: 1,
    degree: 'Diplôme d’Ingénieur en Génie Logiciel',
    school: 'ESPRIT - École Supérieure Privée d’Ingénierie et de Technologie',
    year: '2018 - 2024',
    description: `Cycle complet d'ingénierie logicielle : Architecture distribuée, bases de données relationnelles et NoSQL, cybersécurité, méthodologies Agile Scrum et conduite de projets innovants.`
  },
  {
    id: 2,
    degree: 'Cycle Préparatoire Mathématiques - Physique',
    school: 'IPEIT - Institut Préparatoire aux Études d’Ingénieurs de Tunis',
    year: '2016 - 2017',
    description: `Formation scientifique d'excellence : Algorithmique avancée, analyse mathématique, algèbre linéaire et physique quantique/ondulatoire.`
  },
  {
    id: 3,
    degree: 'Baccalauréat – Sciences Expérimentales',
    school: 'Lycée Technique de Zarzis',
    year: '2015',
    description: `Formation secondaire scientifique générale.`
  }
])

// --- Skills Matrix Data ---
const selectedSkillCategory = ref('Backend & Architecture')

const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Backend & Architecture',
    shortName: 'Backend',
    items: [
      { name: '.NET 8 / C#', level: 95, desc: 'Web APIs RESTful, Minimal APIs, LINQ, Async/Await' },
      { name: 'ASP.NET Core', level: 92, desc: 'Middlewares, Filters, Dependency Injection' },
      { name: 'Entity Framework Core', level: 90, desc: 'Migrations, Code-First, DbContext optimization' },
      { name: 'Clean Architecture', level: 92, desc: 'DDD, Repository & Unit of Work, SOLID' },
      { name: 'Python & FastAPI', level: 80, desc: 'Microservices légers, parsing de données' },
      { name: 'Sécurité & JWT', level: 88, desc: 'Auth, Claims, CORS, chiffrement' }
    ]
  },
  {
    name: 'Frontend & UI',
    shortName: 'Frontend',
    items: [
      { name: 'Vue.js 3', level: 94, desc: 'Composition API, Script Setup, Reactivity Core' },
      { name: 'TypeScript', level: 90, desc: 'Typage strict, interfaces génériques' },
      { name: 'Tailwind CSS', level: 95, desc: 'Design systems modernes, responsive, animations' },
      { name: 'Pinia & Vuex', level: 88, desc: 'Gestion d\'état centralisée scalable' },
      { name: 'Vite & Tooling', level: 90, desc: 'Bundling rapide, plugins, tree-shaking' },
      { name: 'Animations CSS / GSAP', level: 86, desc: 'Transitions fluides, scroll triggers' }
    ]
  },
  {
    name: 'Données & Cloud / DevOps',
    shortName: 'DevOps & Data',
    items: [
      { name: 'SQL Server (T-SQL)', level: 88, desc: 'Procédures stockées, indexation, jointures' },
      { name: 'MySQL & PostgreSQL', level: 85, desc: 'Bases relationnelles, modélisation relationnelle' },
      { name: 'Docker & Compose', level: 85, desc: 'Conteneurisation d\'APIs et frontend' },
      { name: 'Git & GitHub Workflows', level: 92, desc: 'Branching, PRs, CI/CD actions' },
      { name: 'Postman', level: 92, desc: 'Tests de charge d\'APIs et documentation' },
      { name: 'Vercel & Déploiement', level: 90, desc: 'Hébergement haute disponibilité' }
    ]
  },
  {
    name: 'Méthodologie & Soft Skills',
    shortName: 'Méthodes',
    items: [
      { name: 'Agile & Scrum', level: 92, desc: 'Sprints, daily meetings, backlog refinement' },
      { name: 'Résolution de problèmes', level: 95, desc: 'Débogage méthodique et optimisation' },
      { name: 'Sensibilité UX/UI', level: 90, desc: 'Ergonomie, accessibilité et design moderne' },
      { name: 'Communication & Autonomie', level: 92, desc: 'Collaboration fluide, respect des délais' }
    ]
  }
])

const currentCategorySkills = computed(() => {
  const cat = skillCategories.value.find(c => c.name === selectedSkillCategory.value)
  return cat ? cat.items : skillCategories.value[0].items
})

// --- Projects Data ---
const selectedCategory = ref('Tous')
const categories = ['Tous', 'Full-Stack', 'Web Frontend', 'Enterprise & API']
const activeModalProject = ref<Project | null>(null)

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Site Web GMS57 - Garage Automobile',
    description: 'Plateforme d\'entreprise complète pour Group Motors Sports (GMS57). Consultation des prestations mécaniques, devis instantané et module de réservation directe par WhatsApp et email.',
    image: '/projects/gms57.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'MySQL', 'Docker', 'Tailwind CSS'],
    category: 'Full-Stack',
    liveUrl: 'https://www.gms57.fr/',
    githubUrl: 'https://github.com/achraf-zarroug/gms57'
  },
  {
    id: 2,
    title: 'Plateforme de Recrutement Intelligent (PFE)',
    description: 'Application de gestion et automatisation des candidatures : extraction IA de compétences depuis des CVs PDF, calcul de similarité sémantique et génération de rapports RH.',
    image: '/projects/pfe.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'Python (FastAPI)', 'SQL Server', 'Docker'],
    category: 'Full-Stack',
    liveUrl: 'https://recrutement-smart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/recrutement-frontend'
  },
  {
    id: 3,
    title: 'Site Web ClesPro - Serrurier Automobile',
    description: 'Site vitrine moderne à fort taux de conversion pour services de reproduction et programmation de clés auto. SEO local poussé et intégration contact immédiat.',
    image: '/projects/clespro.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web Frontend',
    liveUrl: 'https://clespro.fr',
    githubUrl: 'https://github.com/achraf-zarroug/clespro'
  },
  {
    id: 4,
    title: 'Plateforme Web Cabinet Dentaire',
    description: 'Site professionnel pour cabinet dentaire avec formulaire dynamique de prise de rendez-vous en ligne, présentation des soins et notifications par email.',
    image: '/projects/dentiste.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    category: 'Web Frontend',
    liveUrl: 'https://dentiste-frontend.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/dentiste-frontend'
  },
  {
    id: 5,
    title: 'Site Vitrine Pâtisserie Artisanale',
    description: 'Site web gourmand avec catalogue interactif de créations pâtissières, module de réservation de gâteaux personnalisés et formulaire de contact.',
    image: '/projects/Patisserie.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    category: 'Web Frontend',
    liveUrl: 'https://patisserie-pink.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/patisserie-front'
  },
    {
    id: 6,
    title: 'GeoTrack — Gestion & Recherche Géographique',
    description: 'Application web personnelle de gestion et de recherche géographique. Visualisation de données cartographiques, recherche de lieux, tracking de positions et gestion d\'entités géolocalisées sur carte interactive.',
    image: '/projects/geotrack.jpg',
    technologies: ['React js', 'TypeScript', 'Leaflet.js', 'OpenStreetMap', 'PHP 8 ', 'MySQL'],
    category: 'Projet Personnel',
    liveUrl: 'https://geotrack-swart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/geotrack'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})

const openProjectModal = (proj: Project) => {
  activeModalProject.value = proj
}

// --- Contact Form ---
const isSubmitting = ref(false)
const showSuccess = ref(false)
const copied = ref(false)

const SERVICE_ID = 'service_w2tdwsm'
const TEMPLATE_ID = 'template_xdbyhhd'
const PUBLIC_KEY = '9Plxf4zjvq1bnkXpl'

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/achraf-zarroug/' },
  { name: 'GitHub', href: 'https://github.com/achraf-zarroug' }
]

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('achraf.zarroug@hotmail.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Erreur copie email', err)
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  const templateParams = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  }
  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    console.log('Email envoyé avec succès', result)

    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 6000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    // Fallback UI indication
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 6000)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout)
  }
})
</script>

<style scoped>
/* Scoped styles */
</style>
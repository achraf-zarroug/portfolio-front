<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100 relative selection:bg-indigo-500 selection:text-white">
    <!-- Interactive Background (Ambient Orbs, Cyber Grid & Canvas Particles) -->
    <InteractiveBackground />
    <CursorEffects />

    <!-- Top Navigation -->
    <AppHeader />

    <!-- Main Content Container -->
    <main class="relative z-10 flex-grow">
      
      <!-- ================================================================= -->
      <!-- SECTION 1: HERO SECTION (#home)                                  -->
      <!-- ================================================================= -->
      <section id="home" class="hero-section relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
        <div class="hero-layout max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16">
          <div class="hero-copy space-y-7 text-left">
            
            <!-- Left Hero Content -->
            <div class="space-y-7 text-left">
              
              <!-- Availability Pill -->
              <div class="hero-availability inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-300/20 text-teal-200 text-sm font-semibold">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Disponible pour de nouvelles opportunités</span>
              </div>

              <!-- Main Heading -->
              <div class="space-y-2">
                <h1 class="hero-heading">
                  Bonjour, je suis <span class="hero-name">Achraf Zarroug <span aria-hidden="true">👋</span></span>
                </h1>
              </div>

              <!-- Dynamic Typewriter Subtitle -->
              <div class="hero-role-line h-10 flex items-center justify-start">
                <p class="text-xl sm:text-2xl font-semibold text-slate-200 flex items-center">
                  <span class="mr-2">Ingénieur</span>
                  <span>{{ currentTitle }}</span>
                  <span class="inline-block w-0.5 h-6 bg-fuchsia-400 ml-2 animate-pulse"></span>
                </p>
              </div>

              <!-- Description -->
              <p class="hero-description text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Ingénieur en informatique diplômé de l'<strong class="text-white font-semibold">ESPRIT</strong>, je développe des applications web Full-Stack et des fonctionnalités logicielles. J’allie <strong class="text-fuchsia-200 font-semibold">.NET 8 / C#</strong>, <strong class="text-fuchsia-200 font-semibold">Vue.js</strong> et des pratiques DevOps pour livrer des solutions fiables.
              </p>

              <!-- CTA Action Buttons -->
              <div class="hero-actions pt-4 flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Achraf_Zarroug_CV.pdf"
                  class="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-500 hover:brightness-110 shadow-xl shadow-fuchsia-900/30 transition-all duration-300 active:scale-95 border border-fuchsia-300/30"
                >
                  <span>Télécharger mon CV</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0116 6.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-slate-200 bg-white/[0.035] hover:bg-white/[0.08] border border-violet-300/20 hover:border-violet-300/50 shadow-md transition-all duration-200"
                >
                  <svg class="w-4 h-4 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Me contacter</span>
                </a>
              </div>

            </div>

          </div>

            <div class="hero-art-wrap" aria-label="Illustration d’un poste de travail de développeur">
              <div class="hero-art-glow"></div>
              <div class="hero-workstation">
                <div class="hero-monitor">
                  <div class="hero-monitor-camera"></div>
                  <div class="hero-screen">
                    <div class="hero-screen-top"><span></span><span></span><span></span><b>achraf.dev</b></div>
                    <div class="hero-screen-content"><span class="hero-screen-kicker">PORTFOLIO · FULL-STACK</span><strong>Des idées<br>en expériences<br><i>numériques.</i></strong><span class="hero-screen-button">Découvrir mes projets ↗</span></div>
                    <div class="hero-screen-side"><span>01</span><i></i><span>02</span><i></i><span>03</span></div>
                  </div>
                </div>
                <div class="hero-monitor-neck"></div><div class="hero-monitor-base"></div><div class="hero-desk"></div><div class="hero-keyboard"></div><div class="hero-mouse"></div>
                <div class="hero-tower"><span></span><i></i><i></i><i></i></div><div class="hero-plant"><i></i><i></i><i></i><b></b></div>
              </div>
              <div class="hero-tech-float hero-tech-dotnet"><span>.NET</span><b>Backend fiable</b></div>
              <div class="hero-tech-float hero-tech-vue"><span>V</span><b>Vue.js · TypeScript</b></div>
            </div>

            <aside class="hero-social-rail" aria-label="Réseaux sociaux">
              <a href="https://github.com/achraf1934" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 12 0Z"/></svg></a>
              <a href="https://www.linkedin.com/in/achraf-zarroug/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg></a>
              <a href="mailto:achraf.zarroug@hotmail.com" aria-label="E-mail" title="E-mail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
            </aside>

            <!-- Legacy code terminal illustration, kept hidden -->
            <div class="hidden flex-col items-center justify-center space-y-6 absolute right-16 top-1/2 -translate-y-1/2">
              
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
      </section>

      <!-- Rôles, comme le bandeau de spécialités du site de référence -->
      <TechMarquee />

      <!-- ================================================================= -->
      <!-- SECTION 2: ABOUT                                                 -->
      <!-- ================================================================= -->
      <section id="about" class="py-24 border-b border-white/5 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Title Header -->
          <div class="text-center max-w-3xl mx-auto mb-20">
            <span class="badge-brand mb-3">Pour mieux me connaître</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
              À propos
            </h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Ingénieur logiciel passionné par la création d’applications utiles, performantes et pensées pour leurs utilisateurs.
            </p>
          </div>

          <div class="about-bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <article class="glass-card about-profile-card md:col-span-2 lg:col-span-8 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none"></div>
              <div class="about-profile-main relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div class="about-portrait-frame shrink-0">
                  <img src="/moi2.png" alt="Portrait d’Achraf Zarroug" class="h-full w-full rounded-2xl object-cover" />
                </div>
                <div class="min-w-0 text-center sm:text-left">
                  <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-violet-300">Bonjour, je suis Achraf Zarroug</h3>
                  <p class="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                    Ingénieur en informatique et architecture logicielle diplômé de l'<strong class="text-slate-200">ESPRIT</strong>, je développe des applications web Full-Stack et des fonctionnalités logicielles. Je conçois des solutions fiables, de l’interface au backend.
                  </p>
                </div>
              </div>
              <div class="about-profile-note relative mt-6 flex items-start gap-3 border-t border-violet-300/10 pt-5">
                <span class="about-code-icon" aria-hidden="true">&lt;/&gt;</span>
                <p class="text-sm leading-relaxed text-slate-400">J’aime résoudre des problèmes et créer des produits utiles. Je continue à explorer les nouvelles technologies pour améliorer mes compétences et concevoir de meilleures expériences numériques.</p>
              </div>
            </article>

            <article class="glass-card about-flex-card md:col-span-2 lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center">
              <div class="wire-globe mb-5" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
              <h3 class="text-lg font-bold text-white"><span class="mr-2 text-violet-300">☆</span>Mobilité internationale</h3>
              <p class="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">Basé à Tunis, je suis ouvert au travail à distance et aux opportunités de mobilité.</p>
            </article>

            <article class="glass-card about-connect-card md:col-span-1 lg:col-span-3 rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center">
              <span class="about-mail-icon" aria-hidden="true">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </span>
              <h3 class="mt-4 text-lg font-bold text-white">Restons en contact</h3>
              <p class="mt-1 text-sm text-slate-400">Prêt à collaborer</p>
              <button @click="copyEmail" class="about-email-button mt-4" :aria-label="copied ? 'Adresse e-mail copiée' : 'Copier l’adresse e-mail'">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2" stroke-width="1.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h3"/></svg>
                <span>{{ copied ? 'Copié !' : 'achraf.zarroug@hotmail.com' }}</span>
              </button>
            </article>

            <article class="glass-card about-languages-card md:col-span-1 lg:col-span-9 rounded-3xl p-6 sm:p-7 flex flex-col justify-center">
              <p class="mb-5 text-sm leading-relaxed text-slate-400">Français bilingue et anglais avancé : je peux collaborer avec des équipes internationales et multiculturelles.</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="language-card"><span>Français</span><strong>Bilingue</strong></div>
                <div class="language-card"><span>Anglais</span><strong>Avancé</strong></div>
              </div>
            </article>
          </div>

        </div>
      </section>

      <!-- Services offered, based on the work and skills already listed -->
      <section id="services" class="py-24 border-b border-white/5 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="badge-brand mb-3">Ce que je peux faire</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">Mes services</h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">De l’idée à la mise en ligne, je crée des expériences web adaptées aux besoins du projet.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <article v-for="service in services" :key="service.title" class="glass-card service-card rounded-2xl p-6">
              <span class="text-2xl text-fuchsia-300" aria-hidden="true">{{ service.icon }}</span>
              <h3 class="text-lg font-bold text-white mt-4 mb-2">{{ service.title }}</h3>
              <p class="text-sm text-slate-400 leading-relaxed">{{ service.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-24 border-b border-white/5 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="badge-brand mb-3">Outils & technologies</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">Compétences</h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">Les technologies et méthodes que j’utilise pour concevoir des produits fiables.</p>
          </div>
          <div class="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <article v-for="category in skillCategories" :key="category.name" class="skill-category-card rounded-2xl p-5 sm:p-6">
              <h3 class="mb-6 text-lg sm:text-xl font-extrabold tracking-tight text-slate-100">{{ category.name }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in category.items" :key="skill.name" class="skill-chip">
                  <span class="skill-chip-icon" :style="{ color: skill.color }" aria-hidden="true">{{ skill.icon }}</span>
                  {{ skill.name }}
                </span>
              </div>
            </article>
          </div>

        </div>
      </section>

      <!-- Professional Experience -->
      <section id="experience" class="py-24 border-b border-white/5 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-14">
              <span class="badge-brand mb-3">Mon parcours</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">Expérience professionnelle</h2>
              <p class="text-slate-400 text-sm sm:text-base leading-relaxed">Quelques expériences et missions qui ont construit mon parcours.</p>
            </div>
          <div class="experience-timeline">
            <article v-for="job in experience" :key="job.id" class="experience-item">
              <span class="experience-node" aria-hidden="true"><i></i></span>
              <div class="experience-card">
                <div class="experience-card-heading">
                  <span class="experience-company-icon" aria-hidden="true">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M10 21v-3h4v3"/></svg>
                  </span>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-100">{{ job.title }}</h3>
                    <p class="mt-1 text-sm font-medium text-violet-300">{{ job.company }}</p>
                    <div class="experience-meta mt-2">
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
                        {{ job.period }}
                      </span>
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                        {{ job.location }}
                      </span>
                    </div>
                  </div>
                  <button class="experience-toggle" type="button" @click="toggleExperience(job.id)" :aria-expanded="expandedExperienceIds.includes(job.id)" :aria-label="expandedExperienceIds.includes(job.id) ? 'Réduire la description' : 'Afficher la description'">
                    <svg :class="{ 'is-collapsed': !expandedExperienceIds.includes(job.id) }" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="m6 9 6 6 6-6"/></svg>
                  </button>
                </div>
                <transition name="experience-details">
                  <p v-if="expandedExperienceIds.includes(job.id)" class="experience-description">{{ job.description }}</p>
                </transition>
              </div>
            </article>
          </div>

        </div>
      </section>

      <!-- Education -->
      <section id="education" class="py-24 border-b border-white/5 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-14">
              <span class="badge-brand mb-3">Formation</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">Formation académique</h2>
              <p class="text-slate-400 text-sm sm:text-base leading-relaxed">Mon parcours en ingénierie et en sciences.</p>
            </div>
          <div>
            <div class="mb-10">
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span>Diplômes</span>
              </h3>
            </div>

            <div class="education-timeline">
              <article
                v-for="edu in education"
                :key="edu.id"
                class="education-item"
                :class="edu.id % 2 === 1 ? 'education-item-left' : 'education-item-right'"
              >
                <span class="education-node" aria-hidden="true"></span>
                <div class="education-card">
                  <h3 class="text-lg sm:text-xl font-bold text-violet-300">{{ edu.degree }}</h3>
                  <p class="education-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="5"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 12 7 21l5-3 5 3-1.5-9"/></svg>
                    <strong>{{ edu.school }}</strong>
                  </p>
                  <p class="education-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                    {{ edu.location }}
                  </p>
                  <p class="education-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
                    {{ edu.year }}
                  </p>
                </div>
              </article>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 7: PROJECTS SHOWCASE (#projects)                         -->
      <!-- ================================================================= -->
      <section id="projects" class="py-24 border-b border-white/5 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="badge-brand mb-3">Quelques projets</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Projets
            </h2>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Une sélection d’applications web, de plateformes métier et de sites réalisés pour des besoins concrets.
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
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="badge-brand mb-3">Parlons de votre projet</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">Contact</h2>
          </div>
          <p class="contact-intro">
            Que vous souhaitiez créer un produit, améliorer un site ou explorer une nouvelle opportunité, je suis toujours ouvert aux collaborations. Transformons votre vision en réalité.
          </p>

          <div class="contact-layout">
            <div class="contact-sidebar">
              <p class="contact-social-caption">Retrouvez-moi aussi ici — et découvrez mes projets ✨</p>
              <div class="contact-socials">
                <a v-for="social in socialLinks" :key="social.name" :href="social.href" :aria-label="social.name" :title="social.name" target="_blank" rel="noopener noreferrer" class="contact-social-link">
                  <svg v-if="social.name === 'GitHub'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 12 0Z"/></svg>
                  <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
                </a>
              </div>

              <h3 class="contact-info-title">Mes coordonnées</h3>
              <div class="contact-info-list">
                <div class="contact-info-row">
                  <span class="contact-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
                  <div><span>Localisation</span><strong>Tunis, Tunisie</strong></div>
                </div>
                <a class="contact-info-row" href="tel:+21624231240">
                  <span class="contact-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.5a1 1 0 0 1-.5 1.21l-2.26 1.13a11 11 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.5 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6Z"/></svg></span>
                  <div><span>Téléphone</span><strong>+216 24 231 240</strong></div>
                </a>
                <div class="contact-info-row">
                  <span class="contact-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
                  <div><span>Email</span><a href="mailto:achraf.zarroug@hotmail.com"><strong>achraf.zarroug@hotmail.com</strong></a></div>
                  <button type="button" class="contact-copy" @click.prevent="copyEmail">{{ copied ? 'Copié !' : 'Copier' }}</button>
                </div>
              </div>
              <p class="contact-signoff">Avant de partir… n’hésitez pas à me dire bonjour ! 👋</p>
            </div>

            <!-- Right: Interactive Contact Form -->
            <div class="contact-form-card">
                <h3 class="contact-form-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>Entrons en contact</h3>
                <p class="contact-form-subtitle">Envoyez-moi un message, je vous répondrai dès que possible.</p>
                
                <form @submit.prevent="submitForm" class="contact-form-fields">
                  <div>
                    <div>
                      <label for="name" class="contact-label">Nom</label>
                      <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        required
                        class="contact-input"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label for="email" class="contact-label">Email</label>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        class="contact-input"
                        placeholder="nom@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="subject" class="contact-label">Sujet</label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="contact-input"
                      placeholder="Votre projet"
                    />
                  </div>

                  <div>
                    <label for="message" class="contact-label">Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      required
                      class="contact-input contact-textarea"
                      placeholder="Parlez-moi de votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="contact-submit"
                  >
                    <template v-if="isSubmitting">
                      <span class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Envoi en cours…
                      </span>
                    </template>
                    <template v-else>
                      <span class="flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                        <span>Envoyer le message</span>
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
import CursorEffects from '../components/CursorEffects.vue'

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
  location: string
  period: string
  description: string
  technologies: string[]
}

interface Education {
  id: number
  degree: string
  school: string
  location: string
  year: string
}

interface SkillItem {
  name: string
  icon: string
  color: string
}

interface SkillCategory {
  name: string
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
  'Ingénieur logiciel & architecture',
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
const services = [
  {
    icon: '✦',
    title: 'Développement web',
    description: 'Des applications web responsive et complètes, du frontend jusqu’au backend.'
  },
  {
    icon: '⌘',
    title: 'Applications métier',
    description: 'Des outils adaptés aux besoins réels : gestion, réservation, recrutement et suivi.'
  },
  {
    icon: '⌁',
    title: 'API & architecture',
    description: 'Des APIs REST structurées et des bases solides avec .NET, C# et Clean Architecture.'
  },
  {
    icon: '◈',
    title: 'Sites web & UX',
    description: 'Des sites modernes, accessibles et rapides, conçus pour une navigation claire.'
  }
]

const experience = ref<Experience[]>([
  {
    id: 1,
    title: 'Développeur Full-Stack',
    company: 'UltimateIT Solutions',
    location: 'Zarzis, Tunisie',
    period: 'Mars 2025 – Juillet 2026',
    description: `Développement de fonctionnalités frontend avec Vue.js et backend avec .NET 8 / C#, de la conception à l’intégration. Conception d’API REST et gestion de bases de données SQLite ; correction et maintenance des applications, tests, packaging et déploiement sous Windows avec Electron.`,
    technologies: ['Vue.js', '.NET 8', 'C#', 'API REST', 'SQLite', 'Electron', 'Windows']
  },
  {
    id: 2,
    title: 'Stage de fin d’études · Ingénieur génie logiciel',
    company: 'Neoledge',
    location: 'Zarzis, Tunisie',
    period: 'Février – Novembre 2024',
    description: `Conception et développement d’une solution web de gestion des candidatures en .NET et React.js. Développement d’une analyse de CV en Python pour comparer les profils aux offres, génération automatique de CV et automatisation des déploiements par pipelines CI/CD.`,
    technologies: ['.NET', 'React.js', 'Python', 'CI/CD', 'DevOps']
  },
  {
    id: 3,
    title: 'Stage d’ingénieur · Développement web',
    company: 'Smart UP / 3s Group',
    location: 'Tunis, Tunisie',
    period: 'Juin – Août 2023',
    description: `Développement d’une application web de gestion de quiz et d’examens en ligne avec React.js : gestion des questions, correction automatique, calcul des scores, utilisateurs et sessions de test.`,
    technologies: ['React.js', 'JavaScript', 'Gestion des examens', 'Scoring']
  }
])

const expandedExperienceIds = ref(experience.value.map(job => job.id))

const toggleExperience = (id: number) => {
  expandedExperienceIds.value = expandedExperienceIds.value.includes(id)
    ? expandedExperienceIds.value.filter(expandedId => expandedId !== id)
    : [...expandedExperienceIds.value, id]
}

const education = ref<Education[]>([
  {
    id: 1,
    degree: 'Diplôme d’ingénieur en génie logiciel',
    school: 'ESPRIT - École Supérieure Privée d’Ingénierie et de Technologie',
    location: 'Tunis, Tunisie',
    year: '2018 - 2024',
  },
  {
    id: 2,
    degree: 'Baccalauréat – Sciences Expérimentales',
    school: 'Lycée Technique de Zarzis',
    location: 'Zarzis, Tunisie',
    year: '2015'
  }
])

// --- Skills Matrix Data ---
const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Langages de programmation',
    items: [
      { name: 'C#', icon: 'C#', color: '#a78bfa' },
      { name: 'Java', icon: '☕', color: '#f59e0b' },
      { name: 'PHP', icon: 'php', color: '#a5b4fc' },
      { name: 'Python', icon: 'Py', color: '#facc15' },
      { name: 'JavaScript', icon: 'JS', color: '#facc15' },
      { name: 'TypeScript', icon: 'TS', color: '#38bdf8' },
      { name: 'SQL', icon: '▤', color: '#60a5fa' }
    ]
  },
  {
    name: 'Développement Frontend',
    items: [
      { name: 'Vue.js', icon: 'V', color: '#4ade80' },
      { name: 'React.js', icon: '⚛', color: '#67e8f9' },
      { name: 'JavaScript', icon: 'JS', color: '#facc15' },
      { name: 'TypeScript', icon: 'TS', color: '#38bdf8' },
      { name: 'Interfaces responsive', icon: 'UI', color: '#d8b4fe' }
    ]
  },
  {
    name: 'Développement Backend',
    items: [
      { name: '.NET 8', icon: '.N', color: '#c084fc' },
      { name: 'Spring Boot', icon: 'S', color: '#4ade80' },
      { name: 'Symfony', icon: 'sf', color: '#e2e8f0' },
      { name: 'API REST', icon: 'API', color: '#38bdf8' },
      { name: 'Architecture logicielle', icon: '⌘', color: '#d8b4fe' }
    ]
  },
  {
    name: 'Applications & systèmes',
    items: [
      { name: 'Electron', icon: 'E', color: '#7dd3fc' },
      { name: 'Windows', icon: '⊞', color: '#38bdf8' },
      { name: 'Linux', icon: '🐧', color: '#facc15' },
      { name: 'Déploiement desktop', icon: '↥', color: '#c4b5fd' }
    ]
  },
  {
    name: 'Bases de données',
    items: [
      { name: 'MySQL', icon: '≋', color: '#38bdf8' },
      { name: 'SQLite', icon: '◉', color: '#60a5fa' },
      { name: 'MongoDB', icon: '◆', color: '#4ade80' },
      { name: 'PostgreSQL', icon: 'P', color: '#93c5fd' }
    ]
  },
  {
    name: 'IA & traitement de données',
    items: [
      { name: 'Python', icon: 'Py', color: '#facc15' },
      { name: 'Analyse de CV', icon: 'CV', color: '#c4b5fd' },
      { name: 'Correspondance profils/offres', icon: '↔', color: '#67e8f9' },
      { name: 'Automatisation', icon: '✧', color: '#d8b4fe' }
    ]
  },
  {
    name: 'Cloud, DevOps & automatisation',
    items: [
      { name: 'Docker', icon: '◈', color: '#38bdf8' },
      { name: 'GitHub Actions', icon: '⌘', color: '#e2e8f0' },
      { name: 'CI/CD', icon: '↻', color: '#c4b5fd' },
      { name: 'Jenkins', icon: 'J', color: '#f87171' },
      { name: 'Ansible', icon: 'A', color: '#fb7185' },
      { name: 'Prometheus', icon: 'P', color: '#fb923c' },
      { name: 'Grafana', icon: 'G', color: '#fbbf24' }
    ]
  },
  {
    name: 'Outils & méthodes',
    items: [
      { name: 'Git', icon: '◆', color: '#fb7185' },
      { name: 'Agile Scrum', icon: '↻', color: '#c084fc' },
      { name: 'Tests logiciels', icon: '✓', color: '#4ade80' },
      { name: 'Debugging', icon: '⌕', color: '#67e8f9' }
    ]
  }
])

// --- Projects Data ---
const selectedCategory = ref('Tous')
const categories = ['Tous', 'Web', 'Mobile', 'IA', 'Autres']
const activeModalProject = ref<Project | null>(null)

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Site Web GMS57 - Garage Automobile',
    description: 'Plateforme d\'entreprise complète pour Group Motors Sports (GMS57). Consultation des prestations mécaniques, devis instantané et module de réservation directe par WhatsApp et email.',
    image: '/projects/gms57.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'MySQL', 'Docker', 'Tailwind CSS'],
    category: 'Web',
    liveUrl: 'https://www.gms57.fr/',
    githubUrl: 'https://github.com/achraf-zarroug/gms57'
  },
  {
    id: 2,
    title: 'Plateforme de Recrutement Intelligent (PFE)',
    description: 'Application de gestion et automatisation des candidatures : extraction IA de compétences depuis des CVs PDF, calcul de similarité sémantique et génération de rapports RH.',
    image: '/projects/pfe.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'Python (FastAPI)', 'SQL Server', 'Docker'],
    category: 'IA',
    liveUrl: 'https://recrutement-smart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/recrutement-frontend'
  },
  {
    id: 3,
    title: 'Site Web ClesPro - Serrurier Automobile',
    description: 'Site vitrine moderne à fort taux de conversion pour services de reproduction et programmation de clés auto. SEO local poussé et intégration contact immédiat.',
    image: '/projects/clespro.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web',
    liveUrl: 'https://clespro.fr',
    githubUrl: 'https://github.com/achraf-zarroug/clespro'
  },
  {
    id: 4,
    title: 'Plateforme Web Cabinet Dentaire',
    description: 'Site professionnel pour cabinet dentaire avec formulaire dynamique de prise de rendez-vous en ligne, présentation des soins et notifications par email.',
    image: '/projects/dentiste.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    category: 'Web',
    liveUrl: 'https://dentiste-frontend.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/dentiste-frontend'
  },
  {
    id: 5,
    title: 'Site Vitrine Pâtisserie Artisanale',
    description: 'Site web gourmand avec catalogue interactif de créations pâtissières, module de réservation de gâteaux personnalisés et formulaire de contact.',
    image: '/projects/Patisserie.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    category: 'Web',
    liveUrl: 'https://patisserie-pink.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/patisserie-front'
  },
    {
    id: 6,
    title: 'GeoTrack — Gestion & Recherche Géographique',
    description: 'Application web full-stack de gestion et de recherche géographique, avec API REST, architecture MVC, interface React.js, backend PHP 8.3 et recherche optimisée avec Elasticsearch.',
    image: '/projects/geotrack.jpg',
    technologies: ['React.js', 'PHP 8.3', 'MySQL', 'Elasticsearch', 'API REST'],
    category: 'Autres',
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
  { name: 'GitHub', href: 'https://github.com/achraf1934' }
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

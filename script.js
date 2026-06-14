/* ═══════════════════════════════════════════════
   APEX COLLEGE — script.js
   Modules: Navbar · Hero Slider · Admissions
            Skeleton · Classes · Achievements
            Faculty · Modal · Footer
═══════════════════════════════════════════════ */

/* ════════════════════════════════════════
   DATA STORE
════════════════════════════════════════ */

const ADMISSION_DATA = [
  {
    icon: '🏛️',
    iconClass: 'adm-icon-blue',
    title: 'Admission Process',
    subtitle: 'Step-by-step guide to join Apex College',
    rows: [
      { label: 'Application Window', value: 'Mar 1 – Jun 30, 2026' },
      { label: 'Entrance Exam', value: 'APEX-CET 2026 · Jul 15' },
      { label: 'Merit Counselling', value: 'Aug 1 – Aug 20, 2026' },
      { label: 'Classes Begin', value: 'Sep 1, 2026' },
      { label: 'Mode', value: 'Online + Offline' },
    ]
  },
  {
    icon: '💰',
    iconClass: 'adm-icon-green',
    title: 'Fee Structure',
    subtitle: 'Transparent annual fee breakup per programme',
    rows: [
      { label: 'Science (PCM/PCB)', value: '₹48,000 / yr', highlight: true },
      { label: 'Commerce (with Maths)', value: '₹38,000 / yr', highlight: true },
      { label: 'Arts / Humanities', value: '₹28,000 / yr', highlight: true },
      { label: 'Lab & Activity Fee', value: '₹4,500 / yr' },
      { label: 'Scholarship Waiver', value: 'Up to 100%' },
    ]
  },
  {
    icon: '✅',
    iconClass: 'adm-icon-amber',
    title: 'Eligibility Criteria',
    subtitle: 'Minimum requirements for admission',
    rows: [
      { label: 'Class 10 Marks', value: '≥ 60% aggregate' },
      { label: 'Science Stream', value: 'PCM/PCB — Min 65%' },
      { label: 'Commerce Stream', value: 'Math score ≥ 55%' },
      { label: 'Arts Stream', value: 'Any background' },
      { label: 'Age Limit', value: '15 – 18 years' },
    ]
  },
  {
    icon: '🎓',
    iconClass: 'adm-icon-purple',
    title: 'Programmes Offered',
    subtitle: 'Streams and specialisations available',
    rows: [
      { label: 'Streams', value: 'Science · Commerce · Arts' },
      { label: 'Vocational', value: 'IT · Fashion · Tourism' },
      { label: 'Sports Quota', value: '5% seats reserved' },
      { label: 'NRI Quota', value: 'Available (FCRA)' },
      { label: 'Accreditation', value: 'NAAC A++ · ISO 9001' },
    ]
  }
];

const CLASS_DATA = [
  {
    label: 'Class XI – Science',
    rows: [
      { subject: 'Physics',       code: 'SCI-301', periods: 5, teacher: 'Dr. Rajan Mehta',     emoji: '👨‍🏫' },
      { subject: 'Chemistry',     code: 'SCI-302', periods: 5, teacher: 'Ms. Priya Nair',       emoji: '👩‍🔬' },
      { subject: 'Mathematics',   code: 'SCI-303', periods: 6, teacher: 'Mr. Aarav Singh',      emoji: '👨‍💻' },
      { subject: 'Biology',       code: 'SCI-304', periods: 4, teacher: 'Dr. Sunita Rao',       emoji: '👩‍🏫' },
      { subject: 'English',       code: 'LNG-101', periods: 4, teacher: 'Ms. Clara Fernandes',  emoji: '👩‍🎓' },
      { subject: 'Computer Sci.', code: 'IT-201',  periods: 3, teacher: 'Prof. Ananya Krishnan', emoji: '👩‍💻' },
    ]
  },
  {
    label: 'Class XII – Science',
    rows: [
      { subject: 'Physics',       code: 'SCI-401', periods: 5, teacher: 'Dr. Rajan Mehta',     emoji: '👨‍🏫' },
      { subject: 'Chemistry',     code: 'SCI-402', periods: 5, teacher: 'Ms. Priya Nair',       emoji: '👩‍🔬' },
      { subject: 'Mathematics',   code: 'SCI-403', periods: 6, teacher: 'Mr. Aarav Singh',      emoji: '👨‍💻' },
      { subject: 'Biology',       code: 'SCI-404', periods: 4, teacher: 'Dr. Sunita Rao',       emoji: '👩‍🏫' },
      { subject: 'English',       code: 'LNG-102', periods: 4, teacher: 'Ms. Clara Fernandes',  emoji: '👩‍🎓' },
      { subject: 'Comp. Science', code: 'IT-202',  periods: 3, teacher: 'Prof. Ananya Krishnan', emoji: '👩‍💻' },
    ]
  },
  {
    label: 'Class XI – Commerce',
    rows: [
      { subject: 'Accountancy',   code: 'COM-301', periods: 5, teacher: 'Mr. Vikram Joshi',    emoji: '👨‍💼' },
      { subject: 'Business St.',  code: 'COM-302', periods: 5, teacher: 'Ms. Rekha Pillai',    emoji: '👩‍💼' },
      { subject: 'Economics',     code: 'COM-303', periods: 4, teacher: 'Dr. Kiran Bose',      emoji: '👨‍🏫' },
      { subject: 'Mathematics',   code: 'COM-304', periods: 4, teacher: 'Mr. Aarav Singh',     emoji: '👨‍💻' },
      { subject: 'English',       code: 'LNG-101', periods: 4, teacher: 'Ms. Clara Fernandes', emoji: '👩‍🎓' },
      { subject: 'Informatics',   code: 'IT-203',  periods: 2, teacher: 'Prof. Ananya Krishnan', emoji: '👩‍💻' },
    ]
  },
  {
    label: 'Class XII – Commerce',
    rows: [
      { subject: 'Accountancy',   code: 'COM-401', periods: 5, teacher: 'Mr. Vikram Joshi',    emoji: '👨‍💼' },
      { subject: 'Business St.',  code: 'COM-402', periods: 5, teacher: 'Ms. Rekha Pillai',    emoji: '👩‍💼' },
      { subject: 'Economics',     code: 'COM-403', periods: 4, teacher: 'Dr. Kiran Bose',      emoji: '👨‍🏫' },
      { subject: 'Mathematics',   code: 'COM-404', periods: 4, teacher: 'Mr. Aarav Singh',     emoji: '👨‍💻' },
      { subject: 'English',       code: 'LNG-102', periods: 4, teacher: 'Ms. Clara Fernandes', emoji: '👩‍🎓' },
      { subject: 'Informatics',   code: 'IT-204',  periods: 2, teacher: 'Prof. Ananya Krishnan', emoji: '👩‍💻' },
    ]
  },
  {
    label: 'Class XI – Arts',
    rows: [
      { subject: 'History',       code: 'ART-301', periods: 4, teacher: 'Mr. Samuel D\'Souza',  emoji: '👨‍🎨' },
      { subject: 'Political Sci.',code: 'ART-302', periods: 4, teacher: 'Ms. Meena Thomas',    emoji: '👩‍🏫' },
      { subject: 'Geography',     code: 'ART-303', periods: 4, teacher: 'Dr. Harish Kumar',    emoji: '👨‍🏫' },
      { subject: 'Sociology',     code: 'ART-304', periods: 4, teacher: 'Ms. Lakshmi Rao',     emoji: '👩‍🎓' },
      { subject: 'English',       code: 'LNG-101', periods: 4, teacher: 'Ms. Clara Fernandes', emoji: '👩‍🎓' },
      { subject: 'Fine Arts',     code: 'ART-305', periods: 3, teacher: 'Mr. Samuel D\'Souza',  emoji: '👨‍🎨' },
    ]
  },
  {
    label: 'Class XII – Arts',
    rows: [
      { subject: 'History',       code: 'ART-401', periods: 4, teacher: 'Mr. Samuel D\'Souza',  emoji: '👨‍🎨' },
      { subject: 'Political Sci.',code: 'ART-402', periods: 4, teacher: 'Ms. Meena Thomas',    emoji: '👩‍🏫' },
      { subject: 'Geography',     code: 'ART-403', periods: 4, teacher: 'Dr. Harish Kumar',    emoji: '👨‍🏫' },
      { subject: 'Sociology',     code: 'ART-404', periods: 4, teacher: 'Ms. Lakshmi Rao',     emoji: '👩‍🎓' },
      { subject: 'English',       code: 'LNG-102', periods: 4, teacher: 'Ms. Clara Fernandes', emoji: '👩‍🎓' },
      { subject: 'Fine Arts',     code: 'ART-405', periods: 3, teacher: 'Mr. Samuel D\'Souza',  emoji: '👨‍🎨' },
    ]
  }
];

/* Helper for Unsplash gallery images (stable, free) */
const IMG = (q, n = 3) =>
  Array.from({ length: n }, (_, i) =>
    `https://source.unsplash.com/featured/800x500/?${encodeURIComponent(q)}&sig=${i + 1}`
  );

const ACHIEVEMENT_DATA = [
  {
    id: 'sports', label: '🏆 Sports',
    slides: [
      { medal:'🥇', year:'2025 · National', title:'Inter-University Cricket Champions', desc:'Our cricket team clinched the national title for the third consecutive year with an unbeaten run of 12 matches.', images: IMG('cricket,stadium', 4) },
      { medal:'🥈', year:'2024 · State',    title:'Basketball State Runners-up',       desc:"Women's basketball team reached the state finals, defeating 18 colleges en route.", images: IMG('basketball,women', 4) },
      { medal:'🏅', year:'2024 · National', title:'Athletics Gold Medalist',           desc:'Priya Sharma won gold in the 400m sprint at the National Inter-University Games, clocking 52.3 seconds.', images: IMG('athletics,running,track', 4) },
      { medal:'🥇', year:'2023 · State',    title:'Football State Champions',          desc:"Men's football team swept through the state tournament with a perfect unbeaten record across 10 games.", images: IMG('football,soccer', 4) },
      { medal:'🎽', year:'2023 · National', title:'Swimming — 3 Gold Medals',          desc:'Our swim team dominated the national aquatics championship across freestyle and butterfly events.', images: IMG('swimming,pool', 4) },
    ]
  },
  {
    id: 'education', label: '📚 Education',
    slides: [
      { medal:'🎓', year:'2025 · NAAC',   title:'A++ Accreditation',              desc:'Apex College received the highest NAAC grade for the second successive cycle with a score of 3.72/4.', images: IMG('graduation,university', 4) },
      { medal:'🔬', year:'2024 · DST',    title:'₹5 Cr Research Grant',           desc:'DST awarded a multi-year grant for our AI & Sustainable Energy research cluster, covering 8 PhD scholars.', images: IMG('laboratory,research', 4) },
      { medal:'🏫', year:'2024 · Ranking',title:'#3 in State Rankings',           desc:'India Today ranked us among the top 3 colleges in the state for academic outcomes and placement records.', images: IMG('campus,college', 4) },
      { medal:'📖', year:'2023 · Olympiad',title:'National Science Olympiad',     desc:'Students swept 4 gold medals at the National Science Olympiad finals held in New Delhi.', images: IMG('science,students', 4) },
      { medal:'💡', year:'2023 · Patent', title:'12 Patents Filed',               desc:'Faculty and student teams jointly filed 12 patents in renewable energy and biomedical engineering domains.', images: IMG('innovation,engineering', 4) },
    ]
  },
  {
    id: 'cultural', label: '🎭 Cultural',
    slides: [
      { medal:'🎭', year:'2025 · National', title:'Best Drama Troupe',             desc:'Our theatre group won Best Production at the National Inter-College Drama Festival in Mumbai.', images: IMG('theatre,drama,stage', 4) },
      { medal:'🎵', year:'2024 · Regional', title:'Music Ensemble Gold',           desc:'Apex Symphonia took home gold at the Regional Classical Music Competition — fourth year running.', images: IMG('orchestra,music', 4) },
      { medal:'🎨', year:'2024 · Exhibition',title:'Fine Arts at National Gallery', desc:'Student artworks were displayed at the National Gallery of Modern Art, Delhi — a first for the college.', images: IMG('art,gallery,painting', 4) },
      { medal:'💃', year:'2023 · State',    title:'Classical Dance Champions',     desc:'State-level Bharatanatyam competition champions for the 5th consecutive year.', images: IMG('classical,dance,india', 4) },
      { medal:'✍️', year:'2023 · Literary', title:'National Essay Championship',   desc:'Three students placed in the top 5 at the National Inter-College Essay Writing Contest.', images: IMG('writing,books,literature', 4) },
    ]
  },
  {
    id: 'events', label: '📅 Events',
    slides: [
      { medal:'🌍', year:'Aug 2026 · Upcoming', title:'TechFest 2026',          desc:'Annual technology festival hosting 5,000+ participants across 40+ events, hackathons, and exhibitions.', images: IMG('technology,hackathon', 4) },
      { medal:'🎪', year:'Oct 2026 · Upcoming', title:'Cultural Fest "Utsav"',  desc:'Three-day pan-India cultural festival featuring performances, competitions, and art exhibitions.', images: IMG('festival,celebration', 4) },
      { medal:'🤝', year:'Jan 2026 · Past',     title:'Industry Conclave',      desc:'200+ industry leaders and 1,500 students connected at our flagship placement and networking conclave.', images: IMG('conference,business', 4) },
      { medal:'🎓', year:'May 2026 · Past',     title:'Convocation 2026',       desc:'2,400 graduates received degrees. Chief Guest: Padma Bhushan Dr. S. Nair, Chairman of ISRO.', images: IMG('convocation,graduation', 4) },
      { medal:'🏕️', year:'Dec 2025 · Past',     title:'Annual Sports Meet',     desc:'Three-day inter-departmental sports meet with 1,200 student athletes across 22 disciplines.', images: IMG('sports,meet,students', 4) },
    ]
  }
];

const FACULTY_DATA = [
  {
    id: 1,
    emoji: '👨‍🏫', name: 'Dr. Rajan Mehta', degree: 'PhD', role: 'Head of Sciences',
    dept: 'Science', deptTag: 'Science Dept.',
    classes: ['Class XI Sci', 'Class XII Sci'],
    subjects: ['Physics', 'Applied Physics'],
    bio: '20+ years shaping future scientists. Specialist in Applied Physics and Quantum Computing research with 40+ peer-reviewed publications in international journals.',
    stats: { years: 22, papers: 42, students: 1800 },
    email: 'r.mehta@apexcollege.edu.in', phone: '+91 98450 11001',
    office: 'Science Block, Room 304',
    achievements: 'DRDO Research Fellowship (2019), Best Educator Award — Karnataka (2022), IIT Collaboration Grant Recipient'
  },
  {
    id: 2,
    emoji: '👩‍💻', name: 'Prof. Ananya Krishnan', degree: 'PhD', role: 'Head of Computer Science',
    dept: 'Computer Science', deptTag: 'CS Dept.',
    classes: ['Class XI Sci', 'Class XII Sci', 'Class XI Com', 'Class XII Com'],
    subjects: ['Computer Science', 'Informatics', 'AI Basics', 'Python'],
    bio: 'AI & Machine Learning researcher. Guided 200+ students to leading tech roles at Google, Microsoft, and top-tier startups globally.',
    stats: { years: 14, papers: 28, students: 2100 },
    email: 'a.krishnan@apexcollege.edu.in', phone: '+91 98450 11002',
    office: 'CS Block, Room 101',
    achievements: 'Google Faculty Research Award (2023), Best Paper — IEEE ICSE 2021, Women in Tech Leadership Award 2022'
  },
  {
    id: 3,
    emoji: '👨‍🎨', name: 'Mr. Samuel D\'Souza', degree: 'MA', role: 'Head of Arts & Humanities',
    dept: 'Arts', deptTag: 'Arts Dept.',
    classes: ['Class XI Arts', 'Class XII Arts'],
    subjects: ['Fine Arts', 'History', 'Cultural Studies'],
    bio: 'Award-winning educator and practising artist. Leads our cultural programmes, theatre group, and fine arts curriculum with over 18 years of experience.',
    stats: { years: 18, papers: 9, students: 1400 },
    email: 's.dsouza@apexcollege.edu.in', phone: '+91 98450 11003',
    office: 'Arts Block, Room 205',
    achievements: 'Karnataka Rajyotsava Award (2021), Best Theatre Director — National Drama Fest 2024, Lalit Kala Akademi Fellow'
  },
  {
    id: 4,
    emoji: '👨‍💼', name: 'Mr. Vikram Joshi', degree: 'MBA', role: 'Senior Lecturer — Commerce',
    dept: 'Commerce', deptTag: 'Commerce Dept.',
    classes: ['Class XI Com', 'Class XII Com'],
    subjects: ['Accountancy', 'Cost Accounting'],
    bio: 'Former CFO turned educator with deep expertise in financial accounting, taxation, and business strategy. Mentored 15 CA rank holders.',
    stats: { years: 12, papers: 6, students: 1100 },
    email: 'v.joshi@apexcollege.edu.in', phone: '+91 98450 11004',
    office: 'Commerce Block, Room 112',
    achievements: 'ICAI Best Educator Recognition (2023), 15 CA Rank Holders Mentored, Published CA Study Material (2022)'
  },
  {
    id: 5,
    emoji: '👩‍🔬', name: 'Ms. Priya Nair', degree: 'MSc', role: 'Lecturer — Chemistry',
    dept: 'Science', deptTag: 'Science Dept.',
    classes: ['Class XI Sci', 'Class XII Sci'],
    subjects: ['Chemistry', 'Organic Chemistry', 'Lab Work'],
    bio: 'Passionate chemistry educator specialising in making complex organic reactions intuitive through hands-on lab methodologies and visual learning.',
    stats: { years: 9, papers: 11, students: 870 },
    email: 'p.nair@apexcollege.edu.in', phone: '+91 98450 11005',
    office: 'Science Block, Chem Lab 2',
    achievements: 'Best Lab Educator Award 2023, CSIR Project Collaborator, National Chemistry Olympiad Trainer'
  },
  {
    id: 6,
    emoji: '👨‍💻', name: 'Mr. Aarav Singh', degree: 'MTech', role: 'Lecturer — Mathematics',
    dept: 'Science', deptTag: 'Science & Commerce',
    classes: ['Class XI Sci', 'Class XII Sci', 'Class XI Com', 'Class XII Com'],
    subjects: ['Mathematics', 'Statistics', 'Calculus'],
    bio: 'Ex-ISRO scientist turned mathematics educator. Makes calculus and statistics accessible through real-world engineering and data problems.',
    stats: { years: 7, papers: 8, students: 980 },
    email: 'a.singh@apexcollege.edu.in', phone: '+91 98450 11006',
    office: 'Science Block, Room 201',
    achievements: 'ISRO Young Scientist Award (2017), JEE Advanced Rank Holder Training — 100% success rate, TEDx Speaker 2024'
  },
  {
    id: 7,
    emoji: '👩‍🏫', name: 'Dr. Sunita Rao', degree: 'PhD', role: 'Lecturer — Biology',
    dept: 'Science', deptTag: 'Science Dept.',
    classes: ['Class XI Sci', 'Class XII Sci'],
    subjects: ['Biology', 'Botany', 'Zoology', 'Genetics'],
    bio: 'Researcher-turned-teacher with specialisation in molecular biology and genetics. Has co-authored a widely used Class XII Biology textbook.',
    stats: { years: 16, papers: 31, students: 1250 },
    email: 's.rao@apexcollege.edu.in', phone: '+91 98450 11007',
    office: 'Science Block, Bio Lab 1',
    achievements: 'NCERT Textbook Author (2020), NEET Top Scorer Mentor, DBT Research Fellowship Recipient'
  },
  {
    id: 8,
    emoji: '👩‍🎓', name: 'Ms. Clara Fernandes', degree: 'MA', role: 'Lecturer — English',
    dept: 'Arts', deptTag: 'Languages Dept.',
    classes: ['Class XI Sci', 'Class XII Sci', 'Class XI Com', 'Class XII Com', 'Class XI Arts', 'Class XII Arts'],
    subjects: ['English Literature', 'English Language', 'Creative Writing'],
    bio: 'Published author and linguist who believes language shapes thought. Runs the college\'s award-winning literary magazine and debate club.',
    stats: { years: 11, papers: 5, students: 2600 },
    email: 'c.fernandes@apexcollege.edu.in', phone: '+91 98450 11008',
    office: 'Arts Block, Room 108',
    achievements: 'Sahitya Akademi Young Writer Grant (2021), Best English Faculty — State Award 2023, Published novel "The Paper Boats"'
  },
  {
    id: 9,
    emoji: '👩‍💼', name: 'Ms. Rekha Pillai', degree: 'MBA', role: 'Lecturer — Business Studies',
    dept: 'Commerce', deptTag: 'Commerce Dept.',
    classes: ['Class XI Com', 'Class XII Com'],
    subjects: ['Business Studies', 'Entrepreneurship', 'Marketing'],
    bio: 'Former marketing director at a Fortune 500 firm. Brings real corporate experience into the classroom through case studies and live projects.',
    stats: { years: 6, papers: 4, students: 640 },
    email: 'r.pillai@apexcollege.edu.in', phone: '+91 98450 11009',
    office: 'Commerce Block, Room 204',
    achievements: 'Best Startup Mentor — NASSCOM 2024, Guest Lecturer at IIM Bangalore, 3 student startups funded under mentorship'
  },
];

/* ════════════════════════════════════════
   NAVBAR
════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link').forEach(l => {
    l.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.getElementById('loginBtn').addEventListener('click', () => {
    alert('🔐 Login portal launching soon!\nPlease contact admissions@apexcollege.edu.in for access.');
  });
}

/* ════════════════════════════════════════
   HERO SLIDER
════════════════════════════════════════ */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('#sliderDots .dot');
  let current  = 0;
  let timer    = null;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('heroPrev').addEventListener('click', () => { goTo(current - 1); startAuto(); });
  document.getElementById('heroNext').addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));
  startAuto();
}

/* ════════════════════════════════════════
   ADMISSIONS — SKELETON → REAL CARDS
════════════════════════════════════════ */
function buildSkeletonCard() {
  return `
    <div class="adm-card">
      <div class="skel-body">
        <div class="skel-icon-row">
          <div class="skel-icon skeleton"></div>
          <div style="flex:1">
            <div class="skel-line med skeleton" style="margin-bottom:6px;"></div>
            <div class="skel-line short skeleton"></div>
          </div>
        </div>
        <div class="skel-line full skeleton"></div>
        <div class="skel-line med skeleton"></div>
        <div class="skel-line full skeleton"></div>
        <div class="skel-line short skeleton"></div>
        <div class="skel-line med skeleton"></div>
      </div>
    </div>`;
}

function buildRealCard(d) {
  const rows = d.rows.map(r => `
    <div class="adm-row">
      <span class="adm-label">${r.label}</span>
      <span class="adm-value${r.highlight ? ' highlight' : ''}">${r.value}</span>
    </div>`).join('');

  return `
    <div class="adm-card">
      <div class="adm-card-header">
        <div class="adm-icon-box ${d.iconClass}">${d.icon}</div>
        <div class="adm-card-header-text">
          <h4>${d.title}</h4>
          <p>${d.subtitle}</p>
        </div>
      </div>
      <div class="adm-divider"></div>
      <div class="adm-card-body">${rows}</div>
    </div>`;
}

function initAdmissions() {
  const grid = document.getElementById('admGrid');

  // Render 4 skeleton cards immediately
  grid.innerHTML = ADMISSION_DATA.map(() => buildSkeletonCard()).join('');

  // After 1.6s simulate data loaded → swap in real cards
  setTimeout(() => {
    grid.innerHTML = ADMISSION_DATA.map(d => buildRealCard(d)).join('');
  }, 1600);
}

/* ════════════════════════════════════════
   CLASS & SUBJECTS TABS
════════════════════════════════════════ */
function initClasses() {
  const tabWrap   = document.getElementById('classTabs');
  const panelWrap = document.getElementById('classPanels');

  CLASS_DATA.forEach((cls, i) => {
    // Tab button
    const btn = document.createElement('button');
    btn.className = 'class-tab' + (i === 0 ? ' active' : '');
    btn.textContent = cls.label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.class-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('class-panel-' + i).classList.add('active');
    });
    tabWrap.appendChild(btn);

    // Panel
    const rows = cls.rows.map(r => `
      <tr>
        <td>${r.subject}</td>
        <td>${r.code}</td>
        <td style="text-align:center">${r.periods}</td>
        <td>
          <div class="teacher-chip">
            <div class="teacher-dot">${r.emoji}</div>
            ${r.teacher}
          </div>
        </td>
      </tr>`).join('');

    const panel = document.createElement('div');
    panel.className = 'class-panel' + (i === 0 ? ' active' : '');
    panel.id = 'class-panel-' + i;
    panel.innerHTML = `
      <div class="class-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Code</th>
              <th>Periods/Week</th>
              <th>Teacher In-Charge</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
    panelWrap.appendChild(panel);
  });
}

/* ════════════════════════════════════════
   ACHIEVEMENTS
════════════════════════════════════════ */
function initAchievements() {
  const tabWrap   = document.getElementById('achTabs');
  const panelWrap = document.getElementById('achPanels');
  const trackIndexes = {};

  ACHIEVEMENT_DATA.forEach((cat, ci) => {
    trackIndexes[cat.id] = 0;

    // Tab
    const btn = document.createElement('button');
    btn.className = 'ach-tab' + (ci === 0 ? ' active' : '');
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ach-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.ach-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('ach-panel-' + cat.id).classList.add('active');
    });
    tabWrap.appendChild(btn);

    // Slides — one-at-a-time carousel
    const slidesHtml = cat.slides.map((s, si) => {
      const imgs = (s.images || []);
      const galleryId = `gal-${cat.id}-${si}`;
      const imgHtml = imgs.map((src, ii) => `
        <img class="ach-gal-img${ii === 0 ? ' active' : ''}" src="${src}" alt="${s.title} ${ii + 1}" loading="lazy" />
      `).join('');
      const galDotsHtml = imgs.map((_, ii) => `
        <button class="ach-gal-dot${ii === 0 ? ' active' : ''}" data-idx="${ii}" aria-label="Image ${ii + 1}"></button>
      `).join('');
      return `
      <div class="ach-slide${si === 0 ? ' active' : ''}" data-idx="${si}">
        ${imgs.length ? `
          <div class="ach-gallery" id="${galleryId}" data-index="0" data-count="${imgs.length}">
            <div class="ach-gal-frame">${imgHtml}</div>
            <button class="ach-gal-nav ach-gal-prev" aria-label="Previous image">&#8249;</button>
            <button class="ach-gal-nav ach-gal-next" aria-label="Next image">&#8250;</button>
            <div class="ach-gal-dots">${galDotsHtml}</div>
          </div>` : ''}
        <div class="ach-body">
          <div class="ach-medal">${s.medal}</div>
          <div class="ach-year">${s.year}</div>
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
          <div class="ach-slide-count">${si + 1} / ${cat.slides.length}</div>
        </div>
      </div>`;
    }).join('');

    const slideDots = cat.slides.map((_, si) => `
      <button class="ach-dot${si === 0 ? ' active' : ''}" data-idx="${si}" aria-label="Slide ${si + 1}"></button>
    `).join('');

    const panel = document.createElement('div');
    panel.className = 'ach-panel' + (ci === 0 ? ' active' : '');
    panel.id = 'ach-panel-' + cat.id;
    panel.innerHTML = `
      <div class="ach-carousel ach-carousel-single" data-cat="${cat.id}" data-count="${cat.slides.length}" data-index="0">
        <button class="ach-btn ach-prev" aria-label="Previous">&#8592;</button>
        <div class="ach-stage">${slidesHtml}</div>
        <button class="ach-btn ach-next" aria-label="Next">&#8594;</button>
        <div class="ach-dots">${slideDots}</div>
      </div>`;
    panelWrap.appendChild(panel);

    panel.querySelector('.ach-prev').addEventListener('click', () => moveAch(cat.id, -1));
    panel.querySelector('.ach-next').addEventListener('click', () => moveAch(cat.id, 1));
    panel.querySelectorAll('.ach-dot').forEach(d => {
      d.addEventListener('click', () => goAch(cat.id, Number(d.dataset.idx)));
    });
  });

  function goAch(catId, idx) {
    const carousel = document.querySelector(`.ach-carousel[data-cat="${catId}"]`);
    if (!carousel) return;
    const count = Number(carousel.dataset.count);
    const next = (idx + count) % count;
    carousel.dataset.index = next;
    trackIndexes[catId] = next;
    carousel.querySelectorAll('.ach-slide').forEach((el, i) =>
      el.classList.toggle('active', i === next));
    carousel.querySelectorAll('.ach-dot').forEach((el, i) =>
      el.classList.toggle('active', i === next));
  }
  function moveAch(catId, dir) {
    const carousel = document.querySelector(`.ach-carousel[data-cat="${catId}"]`);
    goAch(catId, Number(carousel.dataset.index) + dir);
  }

  /* Auto-advance the slide carousel of the active panel */
  setInterval(() => {
    document.querySelectorAll('.ach-panel.active .ach-carousel-single').forEach(c => {
      moveAch(c.dataset.cat, 1);
    });
  }, 7000);

  /* Per-card image gallery (delegated) */
  const showGalImg = (gallery, idx) => {
    const count = Number(gallery.dataset.count);
    if (!count) return;
    const next = (idx + count) % count;
    gallery.dataset.index = next;
    gallery.querySelectorAll('.ach-gal-img').forEach((el, i) =>
      el.classList.toggle('active', i === next)
    );
    gallery.querySelectorAll('.ach-gal-dot').forEach((el, i) =>
      el.classList.toggle('active', i === next)
    );
  };

  panelWrap.addEventListener('click', (e) => {
    const gallery = e.target.closest('.ach-gallery');
    if (!gallery) return;
    if (e.target.closest('.ach-gal-prev')) {
      showGalImg(gallery, Number(gallery.dataset.index) - 1);
    } else if (e.target.closest('.ach-gal-next')) {
      showGalImg(gallery, Number(gallery.dataset.index) + 1);
    } else {
      const dot = e.target.closest('.ach-gal-dot');
      if (dot) showGalImg(gallery, Number(dot.dataset.idx));
    }
  });

  /* Auto-advance each gallery */
  setInterval(() => {
    document.querySelectorAll('.ach-panel.active .ach-gallery').forEach(g => {
      showGalImg(g, Number(g.dataset.index) + 1);
    });
  }, 4500);
}

/* ════════════════════════════════════════
   FACULTY — CARDS + FILTER + MODAL
════════════════════════════════════════ */
function initFaculty() {
  const grid   = document.getElementById('facultyGrid');
  const filter = document.getElementById('deptFilter');

  // Unique departments
  const depts = ['All', ...new Set(FACULTY_DATA.map(f => f.dept))];

  depts.forEach(dept => {
    const btn = document.createElement('button');
    btn.className = 'dept-btn' + (dept === 'All' ? ' active' : '');
    btn.textContent = dept;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dept-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.faculty-card').forEach(card => {
        const match = dept === 'All' || card.dataset.dept === dept;
        card.classList.toggle('hidden', !match);
      });
    });
    filter.appendChild(btn);
  });

  // Render cards
  FACULTY_DATA.forEach(f => {
    const subjects = f.subjects.map(s => `<span class="fac-sub-tag">${s}</span>`).join('');
    const card = document.createElement('div');
    card.className = 'faculty-card';
    card.dataset.dept = f.dept;
    card.dataset.id   = f.id;
    card.innerHTML = `
      <div class="faculty-avatar">
        ${f.emoji}
        <div class="faculty-badge-pill">${f.degree}</div>
      </div>
      <h4>${f.name}</h4>
      <div class="faculty-role">${f.role}</div>
      <div class="faculty-dept-tag">${f.deptTag}</div>
      <p>${f.bio.slice(0, 90)}…</p>
      <div class="faculty-subjects">${subjects}</div>
      <button class="view-profile-btn">View Full Profile</button>`;
    card.querySelector('.view-profile-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(f.id);
    });
    card.addEventListener('click', () => openModal(f.id));
    grid.appendChild(card);
  });
}

/* ── FACULTY MODAL ─────────────────────────── */
function openModal(id) {
  const f = FACULTY_DATA.find(x => x.id === id);
  if (!f) return;

  const classesHtml   = f.classes.map(c  => `<span class="m-class-badge">${c}</span>`).join('');
  const subjectsHtml  = f.subjects.map(s => `<span class="m-sub-tag">${s}</span>`).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-top">
      <div class="modal-avatar">${f.emoji}</div>
      <div class="modal-meta">
        <h2>${f.name}</h2>
        <div class="m-role">${f.role}</div>
        <span class="m-dept">${f.deptTag}</span>
      </div>
    </div>

    <div class="modal-stats">
      <div class="m-stat"><div class="num">${f.stats.years}+</div><div class="lbl">Years Teaching</div></div>
      <div class="m-stat"><div class="num">${f.stats.papers}</div><div class="lbl">Publications</div></div>
      <div class="m-stat"><div class="num">${f.stats.students.toLocaleString()}+</div><div class="lbl">Students Taught</div></div>
    </div>

    <div class="modal-section">
      <h5>About</h5>
      <p>${f.bio}</p>
    </div>

    <div class="modal-section">
      <h5>Classes Handled</h5>
      <div class="modal-classes">${classesHtml}</div>
    </div>

    <div class="modal-section">
      <h5>Subjects Taught</h5>
      <div class="modal-subs">${subjectsHtml}</div>
    </div>

    <div class="modal-section">
      <h5>Notable Achievements</h5>
      <p>${f.achievements}</p>
    </div>

    <div class="modal-section">
      <h5>Contact & Office</h5>
      <div class="modal-contact-row">
        <a class="m-contact" href="mailto:${f.email}"><span>✉️</span><span>${f.email}</span></a>
        <a class="m-contact" href="tel:${f.phone}"><span>📞</span><span>${f.phone}</span></a>
        <span class="m-contact"><span>📍</span><span>${f.office}</span></span>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ════════════════════════════════════════
   FOOTER YEAR
════════════════════════════════════════ */
function initFooter() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ════════════════════════════════════════
   BOOT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroSlider();
  initAdmissions();
  initClasses();
  initAchievements();
  initFaculty();
  initModal();
  initFooter();
});

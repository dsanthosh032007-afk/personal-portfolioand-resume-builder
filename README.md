# 🌟 Santhosh D. — Personal Developer Portfolio

A brand-new, premium, animated personal developer portfolio built from scratch for **Santhosh D.** (Engineering Student in Artificial Intelligence and Data Science at **Prathyusha Engineering College**).

Crafted with pure **HTML5, Modern Vanilla CSS3, and ES6 JavaScript** with zero heavy third-party framework overhead.

---

## 🚀 Live Demo & Visual Highlights

- **Design Aesthetic:** Deep Void Black background with glowing Violet (`#8b5cf6`) and Electric Blue / Cyan (`#06b6d4`) accents.
- **Interactive Particle Canvas:** High-performance HTML5 Canvas physics simulation of neural-node particles that gently react to mouse movement.
- **Creative Abstract Visual:** Sleek 3D-styled cybernetic terminal with live AI core nucleus and rotating orbits instead of a generic placeholder photo.
- **Dynamic Text Rotator:** Typewriter effect cycling through *"AI Enthusiast"*, *"Aspiring Software Developer"*, and *"Creative Problem Solver"*.
- **Scroll-Spy Navbar:** Seamless glassmorphic sticky navigation with scroll progress indicators and mobile drawer menu.
- **Resume PDF Engine:** Dedicated modal featuring a clean executive resume with a tailored `@media print` stylesheet that exports a crisp, professional black-and-white 1-page PDF when clicking **"Print / Save as PDF"**.
- **Project Architecture Modals:** Clickable architectural breakdown modals for each highlighted project.

---

## 📁 File Structure

```text
portfolio/
├── index.html       # Semantic HTML5 markup, Hero, About, Skills, Projects, Education, Contact, and Resume Modal
├── style.css        # Premium dark stylesheet, glassmorphism, glowing accents, and dedicated print styles (@media print)
├── script.js        # Canvas particle engine, text rotator, scroll-spy, modal management, and form validation
├── server.js        # Zero-dependency local Node.js static HTTP server (Port 8089)
└── README.md        # Documentation, local running instructions, and GitHub Pages deployment guide
```

---

## 🛠️ Tech Stack & Skills Highlighted

- **Python:** Scripting, AI/ML fundamentals, automation, and conversational agents (OMNIX).
- **JavaScript (ES6+):** Modern DOM manipulation, async logic, interactive canvas animations, client-side persistence.
- **C Programming:** Pointers, low-level memory allocation, core algorithms, and data structures.
- **HTML5 & CSS3:** Accessible semantic hierarchy, modern CSS Grid/Flexbox, glassmorphic cards, and micro-animations.

---

## 📌 Featured Projects

1. **OMNIX — Personal AI Assistant**  
   Intelligent desktop and web conversational companion capable of natural language interpretation, speech synthesis, automated web queries, and operating system task execution.
2. **Smart Expense Tracker**  
   Responsive financial utility tracking daily expenses, category budget allocations, and visual consumption analytics with zero-latency HTML5 LocalStorage persistence.
3. **Personal Portfolio & Resume Builder**  
   Modern developer showcase featuring print-optimized PDF resume generation, smooth scroll reveal transitions, and interactive particle backgrounds.

---

## 💻 How to Run Locally on Windows

### Method 1: Via Local Node.js Server (Recommended)
1. Open PowerShell or Command Prompt in the `portfolio` folder:
   ```powershell
   cd "c:\Users\THARUN\Downloads\santhosh projects\portfolio"
   ```
2. Start the local server:
   ```powershell
   node server.js
   ```
3. Open **http://localhost:8089** in your browser (it will also launch automatically).

---

### Method 2: Direct Browser Launch
Simply double-click [index.html](file:///c:/Users/THARUN/Downloads/santhosh%20projects/portfolio/index.html) in Windows File Explorer or right-click &rarr; **Open with** &rarr; **Google Chrome / Microsoft Edge**.

---

## 🌐 How to Publish for FREE on GitHub Pages (Step-by-Step)

You can host your portfolio live on the internet with a free `https://<username>.github.io/<repo-name>` address in less than 2 minutes:

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account: [https://github.com/dsanthosh032007-afk](https://github.com/dsanthosh032007-afk)
2. Click **New Repository** (`+` icon at top right).
3. Name your repository (e.g., `santhosh-portfolio` or `portfolio`).
4. Keep it **Public** and leave "Initialize with a README" unchecked (since we already have one).
5. Click **Create repository**.

### Step 2: Push Your Portfolio Code
Open PowerShell in this folder and run:
```powershell
cd "c:\Users\THARUN\Downloads\santhosh projects\portfolio"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial release of Santhosh D. Developer Portfolio"

# Set main branch
git branch -M main

# Link your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/dsanthosh032007-afk/santhosh-portfolio.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`.
6. Click **Save**.

Your portfolio will be live in ~60 seconds at:
```text
https://dsanthosh032007-afk.github.io/santhosh-portfolio/
```
*(Tip: If you name the repository `dsanthosh032007-afk.github.io`, it will be published directly at `https://dsanthosh032007-afk.github.io`!)*

---

## 📄 How to Save Your Resume as PDF

1. Click the **"Resume"** button in the navigation bar or the **"View & Print Resume (PDF)"** banner.
2. Inside the preview modal, click **"🖨️ Print / Save as PDF"**.
3. In the browser print dialog:
   - **Destination:** Select **"Save as PDF"**.
   - **Margins:** Select **"Default"** or **"None"**.
   - Ensure **"Background graphics"** is checked.
4. Click **Save** to generate a clean, executive monochrome 1-page engineering resume!

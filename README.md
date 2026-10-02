# 🌟 Durga Prasad Koyya — Personal Portfolio

A modern, responsive, clean, and professional personal portfolio website designed and built around the exact profile, education, skills, projects, achievements, and learning philosophy of **Durga Prasad Koyya**.

---

## 📁 Project Structure

```text
durga-prasad-portfolio/
│
├── index.html                           # Main semantic HTML structure & meta tags
│
├── assets/
│   ├── favicon.svg                      # Custom DP monogram SVG favicon
│   ├── profile-placeholder.svg          # Fallback monogram profile illustration
│   ├── profile.jpg                      # [Placeholder] Drop your photo here
│   └── Durga_Prasad_Koyya_Resume.pdf    # Starter editable resume PDF
│
├── css/
│   └── style.css                        # Modern CSS (Light & Dark theme, responsive)
│
├── js/
│   └── script.js                        # Vanilla JS (Theme toggle, modals, navigation, clipboard)
│
└── README.md                            # Documentation & deployment guide
```

---

## ✨ Features & Highlights

- ⚡ **Light & Dark Theme Toggle**: Automatically follows system preference with instant toggle and `localStorage` persistence.
- 📱 **100% Responsive & Mobile-First**: Flawless layout across smartphones, tablets, laptops, and wide desktop screens.
- 🎯 **Genuine Student Brand**: Built specifically for a **3rd-year B.Tech CSE student** at Lendi Institute of Engineering and Technology, keeping a humble, clean, and ambitious presentation.
- 🛠️ **Comprehensive CSE Technical Skills**:
  - *Core CS Fundamentals*: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, Operating Systems (OS), Computer Networks (CN).
  - *Programming Languages*: C, Python, Java, JavaScript (ES6+).
  - *Web Technologies*: HTML5, CSS3, Responsive Design, DOM Manipulation, RESTful APIs, React.js fundamentals.
  - *Databases & Tools*: SQL (Relational), MongoDB (NoSQL), Git, GitHub, VS Code, Postman, Linux basics.
  - *Areas of Interest*: Cyber Security & Cryptography, Full-Stack Development, Problem Solving.
- 🚀 **Projects & Concept Modals**: Clean cards and detailed pop-up modals for:
  - *Alumni Database Organization* (Smart India Hackathon)
  - *Post-Quantum Secure File Locker* (Cyber Security Concept)
  - *Explainable Groundwater Pollution Risk Assessment* (IoT & ML Concept)
  - *Village / Sachivalayam Digital Services Platform* (Digital Governance Concept)
- 🏆 **Certifications & Achievements**: Highlighting SIH representation and 1st Place in LNIT Brain Teaser Sudoku Challenge.
- 📈 **Visual Learning Journey & Career Roadmap**: Visual progression showing *Learn → Practice → Build → Make Mistakes → Improve → Build Again*.
- 📄 **Resume Center**: Interactive in-page modal view, printable sheet, and direct PDF download link.
- 📬 **Contact Section**: One-click copy for Phone and Email, verified LinkedIn link, and pre-filled email client dispatch.

---

## 💻 1. How to Test & Run Locally

### Method A: Direct Browser Opening (Easiest)
1. Open File Explorer and navigate to your project folder:
   `c:\Users\durga\OneDrive\Desktop\durga prasad portfolio`
2. Double-click **`index.html`** to open it in Chrome, Edge, Brave, or Firefox.

### Method B: VS Code Live Server (Recommended for Development)
1. Open VS Code: `File -> Open Folder...` and choose the `durga prasad portfolio` folder.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl + Shift + X`).
3. Right-click `index.html` in VS Code and select **"Open with Live Server"** (or click "Go Live" at the bottom right).
4. The site will open at `http://127.0.0.1:5500`.

---

## 🎨 2. How to Customize Your Details

### 🖼️ Profile Photo
- Place your photo inside the `assets/` folder and name it **`profile.jpg`**.
- The website is already configured to automatically load `assets/profile.jpg`. If the file is missing, it gracefully shows your stylish `DP` monogram.

### 📄 Resume PDF
- Replace `assets/Durga_Prasad_Koyya_Resume.pdf` with your updated resume PDF keeping the exact file name.

### 🔗 Social Links (GitHub & Instagram)
In `index.html`, search for `https://github.com/your-username` and `https://instagram.com/your-username` and replace them with your actual profile links:
```html
<a href="https://github.com/YOUR_GITHUB_HANDLE" target="_blank" rel="noopener noreferrer">
<a href="https://instagram.com/YOUR_INSTAGRAM_HANDLE" target="_blank" rel="noopener noreferrer">
```

---

## 🌐 3. How to Upload to GitHub & Deploy for Free

### Step A: Initialize Git and Push to GitHub

1. Open **PowerShell** or **Terminal** inside your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Durga Prasad Koyya Portfolio"
   git branch -M main
   ```
2. Go to [GitHub.com](https://github.com) and create a new public repository named `portfolio` or `durga-prasad-portfolio`.
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

---

### Step B: Host on GitHub Pages (100% Free)

1. In your GitHub repository, click on **Settings** (top menu).
2. On the left sidebar, click on **Pages**.
3. Under **Build and deployment -> Source**, select **Deploy from a branch**.
4. Set Branch to `main` and folder to `/ (root)`, then click **Save**.
5. Wait 1–2 minutes. Your website will be live at:
   `https://YOUR_USERNAME.github.io/portfolio/`

---

### Step C: Alternative Free Hosting (Netlify or Vercel)

- **Netlify**: Go to [app.netlify.com](https://app.netlify.com), drag and drop your `durga prasad portfolio` folder into the Netlify dashboard. Your site goes live instantly with an SSL certificate!
- **Vercel**: Go to [vercel.com](https://vercel.com), connect your GitHub account, import your `portfolio` repository, and click **Deploy**.

---

## 📜 Design Philosophy
> *“I am still learning, but I am serious about learning.”*
> 
> *“Start small. Learn continuously. Build something useful. Improve every day.”*

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const exportsDir = join(root, "exports");
const base = "http://localhost:4173";

async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(base);
      if (res.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Preview server did not start");
}

const preview = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1"], {
  cwd: root,
  stdio: "pipe",
});

try {
  await waitForServer();
  await mkdir(exportsDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 800 });
  await page.goto(`${base}/export/hero`, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(exportsDir, "hero-banner.png") });

  await page.setViewportSize({ width: 1080, height: 1080 });
  await page.goto(`${base}/export/post1`, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(exportsDir, "social-post-1.png") });

  await page.goto(`${base}/export/post2`, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(exportsDir, "social-post-2.png") });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(exportsDir, "mobile-home.png"), fullPage: true });

  await browser.close();
  console.log("Screenshots saved to exports/");
} finally {
  preview.kill();
}

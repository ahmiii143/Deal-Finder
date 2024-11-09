import express from "express";
import cors from "cors";
import puppeteer from "puppeteer"; // Import Puppeteer

const app = express();
const PORT = 1010;

// Use CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

// Define an asynchronous function for scraping
// Define an asynchronous function for scraping
// Define an asynchronous function for scraping
async function scrapeData() {
  // Launch Puppeteer with debugging options and set default geolocation
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  // Set a default location (latitude, longitude) if required
  await page.setGeolocation({ latitude: 37.7749, longitude: -122.4194 }); // Example: San Francisco coordinates

  // Allow location permissions for the page
  const context = browser.defaultBrowserContext();
  await context.overridePermissions("https://howdy.pk/", ["geolocation"]);

  // Navigate to the target website
  console.log("Navigating to https://howdy.pk/");
  await page.goto("https://howdy.pk/", {
    waitUntil: "networkidle2",
    timeout: 30000,
  }); // 30 seconds timeout

  // Wait for the body tag to load
  console.log("Waiting for the body tag...");
  await page.waitForSelector("body");

  // Extract HTML content from the body tag
  const data = await page.evaluate(() => {
    const bodyContent = document.querySelector("body");
    return bodyContent ? bodyContent.innerHTML : "No content found in body";
  });

  // Close the browser
  console.log("Closing the browser...");
  await browser.close();

  return { bodyHTML: data }; // Return the body content
}

// Define the API route for scraping
app.get("/api/scrape", async (req, res) => {
  try {
    const data = await scrapeData(); // Call the scraping function
    res.json(data); // Send the extracted data as a response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

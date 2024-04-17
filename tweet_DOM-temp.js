const puppeteer = require('puppeteer');

async function scrapeTwitter() {
  // Launch a new browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the URL of the Twitter page you want to scrape
  const url = 'https://twitter.com/ssrajamouli';

  // Navigate to the page
  await page.goto(url);

  // Extract the tweets from the page
  const tweets = await page.evaluate(() => {
    const tweetNodes = document.querySelectorAll('.tweet-text');
    const tweets = [];
    for (const node of tweetNodes) {
      tweets.push(node.innerText);
    }
    return tweets;
  });

  // Close the browser
  await browser.close();

  // Return the tweets
  return tweets;
}

scrapeTwitter().then(tweets => {
  console.log(tweets);
}).catch(error => {
  console.error(error);
});
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8003;

app.use(cors());
app.use(express.json());

let doct = [
  {
    id: 1,
    url: "https://very-very-long-and-descriptive-subdomain-that-goes-onand-on.somedomain.com/additional/directory/levels/for/more/length/really-log-sub-domain/a-really-log-page",
    validity: "30",
    shortcode: "abcd1",
  },
];


function calculateExpiry(validityMinutes) {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + parseInt(validityMinutes));
  return expiryDate.toISOString();
}

app.post("/doct", (req, res) => {
  const { url, validity, shortcode } = req.body;

  if (!url || !shortcode) {
    return res.status(400).json({ error: "URL and shortcode are required" });
  }

  const newEntry = {
    id: doct.length + 1,
    url,
    validity: validity || "30",
    shortcode,
  };
  doct.push(newEntry);
  res.json({
    shortLink: `http://localhost:${PORT}/${shortcode}`,
    expiry: calculateExpiry(newEntry.validity),
  });
});
app.get("/doct", (req, res) => {
  res.json(doct);
});

app.get("/:shortcode", (req, res) => {
  const { shortcode } = req.params;
  const entry = doct.find((d) => d.shortcode === shortcode);

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.url);
});

app.listen(PORT, () => {
  console.log(`■ Server running on http://localhost:${PORT}`);
});

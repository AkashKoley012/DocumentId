var express = require("express");
var multer = require("multer");
const { card } = require("./Scanner");
var router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./public/images"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

var upload = multer({ storage: storage });

router.post("/uploads", upload.single("document"), async (req, res, next) => {
  var src = `./public/images/${req.file.filename}`;
  // var [panId, aadharId] = await card(src);
  // if (panId !== null) return res.status(200).json({ panId: panId[0] });
  // if (aadharId !== null) return res.status(200).json({ aadharId: aadharId[0] });
  return res.status(404).json({ error: "Try another image" });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

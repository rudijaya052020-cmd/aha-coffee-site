// Netlify Function: /.netlify/functions/save-content
//
// Dipanggil oleh admin.html saat klik "Simpan Perubahan". Function ini:
// 1. Cek password admin (disimpan aman sebagai Environment Variable di
//    Netlify, BUKAN di kode ini).
// 2. Update file data/content.json di repo GitHub kamu lewat GitHub API.
// 3. GitHub -> Netlify otomatis mendeteksi perubahan & re-deploy situs,
//    jadi SEMUA pengunjung ikut lihat versi terbaru (~30-60 detik).
//
// Environment Variables yang WAJIB diisi di Netlify (Site settings ->
// Environment variables), jangan pernah ditulis langsung di file ini:
//   ADMIN_PASSWORD   -> password admin (samakan dengan ADMIN_PASSWORD di admin.html)
//   GITHUB_TOKEN     -> Personal Access Token GitHub (permission: Contents = Read & write)
//   GITHUB_REPO      -> contoh: "username-kamu/nama-repo"
//   GITHUB_BRANCH    -> opsional, default "main"

const CONTENT_PATH = "data/content.json";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Body tidak valid (bukan JSON)." }) };
  }

  const { password, content } = payload;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_REPO = process.env.GITHUB_REPO;
  const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

  if (!ADMIN_PASSWORD || !GITHUB_TOKEN || !GITHUB_REPO) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server belum diatur lengkap. Pastikan ADMIN_PASSWORD, GITHUB_TOKEN, dan GITHUB_REPO sudah diisi di Netlify Environment Variables, lalu deploy ulang."
      })
    };
  }

  if (!password || password !== ADMIN_PASSWORD) {
    return { statusCode: 401, body: JSON.stringify({ error: "Password admin salah." }) };
  }

  if (!content || typeof content !== "object") {
    return { statusCode: 400, body: JSON.stringify({ error: "Konten kosong / tidak valid." }) };
  }

  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${CONTENT_PATH}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "Content-Type": "application/json",
    "User-Agent": "aha-coffee-admin",
    Accept: "application/vnd.github+json"
  };

  try {
    // 1. Ambil SHA file saat ini (wajib disertakan GitHub API untuk update file yang sudah ada)
    let sha;
    const getRes = await fetch(`${apiUrl}?ref=${GITHUB_BRANCH}`, { headers });
    if (getRes.ok) {
      const getData = await getRes.json();
      sha = getData.sha;
    } else if (getRes.status !== 404) {
      const errData = await getRes.json().catch(() => ({}));
      throw new Error(errData.message || `Gagal membaca file saat ini (status ${getRes.status}).`);
    }
    // status 404 => file belum ada, akan dibuat baru (sha dibiarkan undefined)

    // 2. Update (atau buat baru) file data/content.json
    const contentBase64 = Buffer.from(JSON.stringify(content, null, 2), "utf-8").toString("base64");
    const putBody = {
      message: "Update konten website lewat admin panel",
      content: contentBase64,
      branch: GITHUB_BRANCH
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || `Gagal menyimpan ke GitHub (status ${putRes.status}).`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, message: "Tersimpan. Netlify akan re-deploy otomatis." })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Terjadi kesalahan tak terduga." }) };
  }
};

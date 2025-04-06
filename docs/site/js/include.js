async function loadPartial(id, file) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  }
  
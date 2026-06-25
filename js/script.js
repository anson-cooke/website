document.addEventListener("click", async (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    e.preventDefault();

    const response = await fetch(link.href);
    const html = await response.text();

    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, "text/html");

    document.querySelector("#content").innerHTML =
        newDoc.querySelector("#content").innerHTML;

    history.pushState({}, "", link.href);
});
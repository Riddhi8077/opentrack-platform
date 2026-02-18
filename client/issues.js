let issues = JSON.parse(localStorage.getItem("issues")) || [];
render();

function addIssue() {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;

  if (!title) return alert("Enter title");

  issues.push({ title, priority, status: "Open" });
  render();
}

function render() {
  const list = document.getElementById("issueList");
  list.innerHTML = "";

  issues.forEach((i, idx) => {
    list.innerHTML += `
      <tr>
        <td>${i.title}</td>
        <td>${i.priority}</td>
        <td onclick="closeIssue(${idx})">${i.status}</td>
      </tr>
    `;
  });
}

function closeIssue(index) {
  issues[index].status = "Resolved";
  render();
}
localStorage.setItem("issues", JSON.stringify(issues));


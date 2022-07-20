fetch('https://api.github.com/users')
.then(response => response.json())
.then(data => data.forEach((user) => {
document.body.insertAdjacentHTML('beforeEnd',  `
<div><img src="${user.avatar_url}"/><span>${user.login}</span></div>
`)
}))

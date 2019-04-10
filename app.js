document.getElementById('button1').addEventListener('click', getJson);

document.getElementById('button2').addEventListener('click', getExternal);

function getJson() {
  fetch('artikel.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(artikel) {
        output += `<li>${artikel.judul}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

function getExternal() {
  fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=nGFAgPBGzMRmwJ2IOGJg4GA0u1ZO9mno')
    .then(function(response) {
        console.log(response.json());
    });
    // })
    // .then(function(data) {
    //   console.log(data);
    //   let output = '';
    //   data.forEach(function(user) {
    //     output += `<li>${user.login}</li>`;
    //   });
    //   document.getElementById('output').innerHTML = output;
    // })
    // .catch(function(err){
    //   console.log(err);
    // });
}
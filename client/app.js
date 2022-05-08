const input = document.querySelector('#input');
const display = document.querySelector('#response')
document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();
  axios.post('/test', {"string_to_cut": input.value })
  .then(res => {
    display.innerText = res.data.return_string;
    input.value = '';
  })
})
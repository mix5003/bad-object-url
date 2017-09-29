function downloadBlob(event) {
  event.preventDefault();
  event.stopPropagation();

  let data = JSON.stringify([1,2,3,4,5]);
  let blob = new window.Blob([ data ]);

  let a = document.createElement('a');
  let objectUrl = window.URL.createObjectURL(blob);
  a.href = objectUrl;
  a.download = 'data.json';
  a.target = '_blank';
  a.rel = 'nofollow noopener';
  document.body.appendChild(a);
  a.click();
}

document.getElementById('download-link').addEventListener('click', downloadBlob);
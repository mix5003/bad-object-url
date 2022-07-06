function downloadBlob(event) {
  event.preventDefault();
  event.stopPropagation();

  //Creates a 15728640 byte file
  let blobs = [];
  for (let index = 0; index < 20; index++) {
    let blob = new Blob([index.toString().repeat(1024 * 512)]);
    blobs.push(blob);
  }
  
  let thefile = new File(blobs, "file");

  let objectUrl = URL.createObjectURL(thefile);

  let a = document.createElement('a');
  a.href = objectUrl;
  a.download = 'data.json';
  a.target = '_blank';
  a.rel = 'nofollow noopener';
  document.body.appendChild(a);
  a.click();
}

document.getElementById('download-link').addEventListener('click', downloadBlob);
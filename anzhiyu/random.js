var posts=["37083","f41b8e08","cad832a4","958a0988","14991"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["f41b8e08/","cad832a4/","958a0988/","37083/","14991/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
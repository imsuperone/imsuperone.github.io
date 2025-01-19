var posts=["post-e2fce66f/","post-1de292a1/","post-f41b8e08/","post-cad832a4/","post-958a0988/","post-37083/","post-14991/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["post-baidu/","post-e2fce66f/","post-f41b8e08/","post-37083/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
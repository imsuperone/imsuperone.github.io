var posts=["a/37083","a/958a0988","a/14991"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
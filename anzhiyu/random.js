var posts=["2025/重生归来我一定成为一个迷你世界玩家/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
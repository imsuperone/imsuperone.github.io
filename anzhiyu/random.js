var posts=["2025/重生归来我一定成为一个迷你世界玩家/","2025/啊啊啊啊啊许嵩你真的是一个许嵩啊/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
function playVideo(a, b) {
  console.log(this);
}

const fn = playVideo.bind({ name: "Moth" });
fn();
// 等价
playVideo.bind({ name: "Moth" })();

// 结合回调函数使用
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
video.showTags();

playVideo.bind({ name: "Moth" })();

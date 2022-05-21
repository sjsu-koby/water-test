class Platform {
  constructor(_platformx, _platformy, _size) {
    this.platformx = _platformx;
    this.platformy = _platformy;
    this.size = _size;
  }

  display() {
    push();
    translate(width * 0.4, height * 0.4);
    strokeWeight(0);
    fill(250);
    scale(this.size);
    rect(
      this.platformx + width * 0.17,
      this.platformy + height * 0.18,
      width * 0.14,
      width * 0.11
    );
    pop();
  }

  move() {
    if (this.platformx <= height * 2.7) {
      // this.platformy = this platformy +2;
      // short hand is +=
      this.platformx += 8;
    } else {
      this.platformx = -height * 1.5;
    }
  }
}

//function drawplatform(platformx, platformy) {
//  strokeWeight(0);
//  fill(250);
//  ellipse(
//    platformx + width * 0.17,
//    platformy + height * 0.18,
//    width * 0.14,
//    width * 0.11
//  );
//  ellipse(
//    platformx + width * 0.22,
//    platformy + height * 0.22,
//    width * 0.14,
//    width * 0.11
//  );
//  ellipse(
//   platformx + width * 0.13,
//    platformy + height * 0.22,
//    width * 0.14,
//    width * 0.11
//  );
//  ellipse(
//    platformx + width * 0.17,
//    platformy + height * 0.24,
//    width * 0.14,
//    width * 0.11
//  );
//}

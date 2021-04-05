const cursorSprite = "https://image.flaticon.com/icons/png/128/587/587376.png";

// module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
Body = Matter.Body;

// create an engine
var engine = Engine.create();

// create a renderer
var canvas = document.getElementById("world");
var render = Render.create({
  element: canvas,
  engine: engine,
  options: {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false } });



const offset = -50,
w = 5;

let bounds = [
[offset, offset, w, canvas.offsetHeight * 2.5],
[canvas.offsetWidth - offset, -w, w, canvas.offsetHeight * 2.5],
[offset, canvas.offsetHeight - offset, canvas.offsetWidth * 2.5, w]].
map(bound => {
  return Bodies.rectangle(...bound);
});

bounds.forEach(bound => {
  bound.label = "bound";
  Body.setStatic(bound, true); // has to be set in post for collision detection to work
});

/**
        Get letters as boxes
    */
function wrapTextNode(textNode) {
  let wrapNode = document.createElement("div");
  wrapNode.classList.add("wrapNode");
  let newTextNode = document.createTextNode(textNode.textContent);
  wrapNode.appendChild(newTextNode);
  textNode.parentNode.replaceChild(wrapNode, textNode);
}

(function () {
  let id = 0;
  document.querySelectorAll(".title").forEach(title => {
    title.childNodes.forEach(node => {
      if (node.nodeType == Node.TEXT_NODE) {
        wrapTextNode(node);
      }
    });

    title.childNodes.forEach(node => {
      let newHTML = "";
      let putty = node.innerHTML;

      putty.split("").forEach(l => {
        if (l == " ") newHTML += " ";else
        newHTML += `<span id="span-${id++}">${l}</span>`;
      });

      node.innerHTML = newHTML;
    });

    title.querySelectorAll("span").forEach(span => {
      let box = span.getBoundingClientRect();
      box = Bodies.rectangle(
      box.x + box.width / 2,
      box.y + box.height / 2,
      box.width,
      box.height,
      {
        collisionFilter: {
          group: -1 },

        render: {
          visible: false } });



      Body.setStatic(box, true);
      box.label = "span";
      box.spanId = span.id;
      World.add(engine.world, [box]);
    });
  });
})();

World.add(engine.world, bounds);
Engine.run(engine);
Render.run(render);

let times = n => {
  return f => {
    Array(n).
    fill().
    map((_, i) => f(i));
  };
};

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return [x, y];
}

function bodyAt(x, y) {
  let body = Bodies.circle(x, y, 10, {
    collisionFilter: {
      group: 1 },

    render: {
      sprite: {
        texture: cursorSprite,
        xScale: 0.12,
        yScale: 0.12 } } });




  body.label = "arrow";

  World.add(engine.world, [body]);

  Body.setAngularVelocity(body, rand(-2, 2, 1));

  Body.applyForce(
  body,
  {
    x: body.position.x,
    y: body.position.y },

  {
    x: rand(-15, 15, 4),
    y: rand(-7, -4, 3) });


}

function rand(min, max, div) {
  let res =
  Math.floor(Math.random() * (max - min + 1) + min) /
  parseInt("1" + "0".repeat(div));
  return res;
}

Matter.Events.on(engine, "collisionStart", function (event) {
  let pairs = event.pairs;
  pairs.forEach(function (pair) {
    //hit the spans
    if (pair.bodyB.label == "arrow" && pair.bodyA.label == "span") {
      let span = document.querySelector(`#${pair.bodyA.spanId}`);

      span.classList.add("struck");
      setTimeout(() => {
        span.classList.remove("struck");
        pair.bodyB.collisionFilter.group = -1;
        setTimeout(() => {
          pair.bodyB.collisionFilter.group = 1;
        }, 300);
      }, 100);
    }

    //hit the bounds
    if (pair.bodyB.label == "arrow" && pair.bodyA.label == "bound") {
      setTimeout(() => {
        Matter.World.remove(engine.world, [pair.bodyB]);
      }, 300);
    }
  });
});

/**
        Mouse stuff below
    */

let mouseDown = false;
let mouseEvent;
setTimeout(() => {
  times(6)(() => {
    bodyAt(canvas.offsetWidth / 2 - rand(-50, 50), -50);
  });
}, 500);

const cycle = (e = mouseEvent) => {
  if (mouseDown) {
    setTimeout(() => {
      let xy = getCursorPosition(canvas, e);
      times(rand(1, 7))(() => bodyAt(...xy));
      cycle();
    }, 80);
  }
};

const besideMouse = document.querySelector("#besideMouse");
document.body.addEventListener("mousedown", function (e) {
  setTimeout(() => {
    besideMouse.classList.add("hidden");
  }, 3000);

  mouseDown = true;
  cycle(e);
});

document.body.addEventListener("mouseup", function (e) {
  mouseDown = false;
});

document.body.addEventListener("mousemove", function (e) {
  mouseEvent = e;
  besideMouse.style.left = getCursorPosition(canvas, e)[0] + "px";
  besideMouse.style.top = getCursorPosition(canvas, e)[1] + "px";
});
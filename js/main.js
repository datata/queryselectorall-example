// Este codigo simplifica el código comentado
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("click", () => {
    const id = box.getAttribute('id')
    console.log(id);
    
    const computedStyle = window.getComputedStyle(box);
    const backgroundColor = computedStyle.backgroundColor;
    console.log(backgroundColor);
  });
});

// const box1 = document.getElementById('box1')
// const box2 = document.getElementById('box2')
// const box3 = document.getElementById('box3')
// const box4 = document.getElementById('box4')

// box1.addEventListener('click', () => {
//     const id = box1.getAttribute('id')
//     console.log(id);

//     const computedStyle = window.getComputedStyle(box1);
//     const backgroundColor = computedStyle.backgroundColor;
//     console.log(backgroundColor);
// })

// box2.addEventListener('click', () => {
//   const id = box2.getAttribute('id')
//   console.log(id);

//   const computedStyle = window.getComputedStyle(box2);
//   const backgroundColor = computedStyle.backgroundColor;
//   console.log(backgroundColor);
// })

// box3.addEventListener('click', () => {
//   const id = box3.getAttribute('id')
//   console.log(id);

//   const computedStyle = window.getComputedStyle(box3);
//   const backgroundColor = computedStyle.backgroundColor;
//   console.log(backgroundColor);
// })

// box4.addEventListener('click', () => {
//   const id = box4.getAttribute('id')
//   console.log(id);

//   const computedStyle = window.getComputedStyle(box4);
//   const backgroundColor = computedStyle.backgroundColor;
//   console.log(backgroundColor);
// })

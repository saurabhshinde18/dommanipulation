const people = [
  {
    name: "Aarav Mehta",
    designation: "Frontend Developer",
    introduction: "Aarav specializes in building responsive and user-friendly web interfaces using modern JavaScript frameworks.",
    image: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Neha Sharma",
    designation: "HR Manager",
    introduction: "Neha manages recruitment, employee engagement, and organizational culture with a people-first approach.",
    image: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Rohit Kulkarni",
    designation: "Backend Engineer",
    introduction: "Rohit focuses on server-side logic, APIs, and database optimization for scalable applications.",
    image: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Pooja Verma",
    designation: "UI/UX Designer",
    introduction: "Pooja designs intuitive and visually appealing user experiences backed by user research.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Karan Patel",
    designation: "Data Analyst",
    introduction: "Karan analyzes large datasets to derive actionable insights and support business decisions.",
    image: "https://images.unsplash.com/photo-1561577762-a50bcb6417d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnUlM0IlMjBnaXJsfGVufDB8fDB8fHww"
  },
  {
    name: "Sneha Iyer",
    designation: "Digital Marketing Executive",
    introduction: "Sneha works on SEO, social media campaigns, and content strategies to boost brand visibility.",
    image: "https://unsplash.com/photos/desk-with-laptop-sticky-notes-and-sunlight-J7vp4RK-FPY"
  },
  {
    name: "Vikram Singh",
    designation: "Project Manager",
    introduction: "Vikram ensures projects are delivered on time by coordinating teams and managing resources efficiently.",
    image: "https://images.unsplash.com/photo-1766543497004-2fd76e88f605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ananya Rao",
    designation: "Software Tester",
    introduction: "Ananya is responsible for ensuring software quality through manual and automated testing.",
    image: "https://images.unsplash.com/photo-1766133238998-b6813eaea76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Manish Gupta",
    designation: "DevOps Engineer",
    introduction: "Manish automates deployment pipelines and maintains system reliability and performance.",
    image: "https://images.unsplash.com/photo-1766068472152-491862bd1e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kavya Nair",
    designation: "Content Writer",
    introduction: "Kavya creates engaging and informative content tailored to diverse audiences and platforms.",
    image: "https://images.unsplash.com/photo-1766546407802-c0decb6e8e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
  }
];


var sum = "";
people.forEach(function(value){
    sum = sum + `
     <div class="card">
        <img src="${value.image}" alt="no photo">
        <h2>${value.name}</h2>
        <h4>${value.designation}</h4>
        <p>${value.introduction}</p>
     </div>   `;
  
});

var sks = document.querySelector('#sks');
sks.innerHTML = sum;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore , collection , getDocs ,addDoc} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBu3mKX6bLZT_VVr8rZ0ZK8vw3EVxYaciY",
    authDomain: "kinraidee-9410d.firebaseapp.com",
    projectId: "kinraidee-9410d",
    storageBucket: "kinraidee-9410d.appspot.com",
    messagingSenderId: "1085812439151",
    appId: "1:1085812439151:web:53fb2bcaab7af65423f59a",
    measurementId: "G-CQ1R9VS82R"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const table = document.getElementById("table")
const form = document.getElementById("addmenu")

async function getAllMenu(db){
    const allmenu = collection(db, 'menu')
    const menuname = getDocs(allmenu)
    return menuname
}

function showdata(showmenu){
    // console.log(showmenu.data().menuname)
    const row = table.insertRow(-1)
    const menu = row.insertCell(0)
    menu.innerHTML = showmenu.data().menuname
}

const data = await getAllMenu(db)

// ดึงกลุ่ม docs
data.forEach(showmenu => {
    showdata(showmenu)
});

// ดึงข้อมูลจาก form
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    // still error
    // ref.child("menu").orderByChild("menuname").equalTo(form.menuname.value).once("value",snapshot => {
    //     if (snapshot.exists()){
    //       const userData = snapshot.val();
    //       console.log("exists!", userData);
    //     } 
    // });
    addDoc(collection(db, 'menu'),{
        menuname:form.menuname.value
    })
    form.menuname.value=""
    alert("success")
})
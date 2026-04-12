// ====== SIMPLE BACKEND (FAKE DATA + FILTER) ======
// Save this as script.js and link into index.html before </body>

const properties = [
  {id:1,title:"Studio Cầu Giấy",price:5500000,area:"Cầu Giấy",type:"Studio",img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"},
  {id:2,title:"1PN Ba Đình",price:7000000,area:"Ba Đình",type:"1PN",img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb"},
  {id:3,title:"2PN Mỹ Đình",price:10000000,area:"Mỹ Đình",type:"2PN",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"}
];

function render(data){
  const container = document.getElementById("list");
  container.innerHTML = "";

  data.forEach(p=>{
    container.innerHTML += `
    <div class="col-md-4">
      <div class="property-card">
        <img src="${p.img}">
        <div class="p-3">
          <h5>${p.title}</h5>
          <p class="price">${(p.price/1000000).toFixed(1)} triệu</p>
          <a href="detail.html" class="btn btn-outline-dark w-100 mb-2">Chi tiết</a>
          <a href="tel:0942841758" class="btn-main w-100">Gọi ngay</a>
        </div>
      </div>
    </div>`;
  });
}

function filter(){
  const area = document.getElementById("area").value.toLowerCase();
  const price = document.getElementById("price").value;
  const type = document.getElementById("type").value.toLowerCase();

  const filtered = properties.filter(p=>{
    return (!area || p.area.toLowerCase().includes(area)) &&
           (!price || p.price <= price) &&
           (!type || p.type.toLowerCase().includes(type));
  });

  render(filtered);
}

window.onload = ()=> render(properties);

// ====== HOW TO USE ======
// 1. Add id="list" vào div chứa properties
// 2. Add input id="area", "price", "type"
// 3. Button onclick="filter()"
// 4. Link script.js vào index.html

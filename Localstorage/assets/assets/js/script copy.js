function save() {
    const pName = document.querySelector('#pName').value;
    const pPrice = document.querySelector('#pPrice').value;
    const pDesc = document.querySelector('#pDesc').value;
    // const pImage = document.querySelector('#pImage');


    // var reader = new FileReader();
    // // console.log(pImage.files[0])
    // reader.readAsDataURL(pImage.files[0])
    // reader.addEventListener('load', () => {
    const product = {
        pName,
        pPrice,
        pDesc,
        // image: reader.result
    }
    const productData = localStorage.getItem('productList')
    let productList = productData == null ? [] : JSON.parse(productData);
    productList.push(product)
    localStorage.setItem('productList', JSON.stringify(productList))
    location.reload()
    // })
}

function show() {
    // var showImg = document.querySelector('#showImg');
    // const data = JSON.parse(localStorage.getItem('productList'));
    // console.log(data[3].image)
    // showImg.innerHTML = `<img src="${data[3].image}" width="100%">`
    const tableBody = document.querySelector('#tableBody');
    const productData = localStorage.getItem('productList')

    const finalData = JSON.parse(productData)
    const loopData = finalData?.map((items, index) => {
        console.log(items?.pPrice)
        return `<tr>
        <td>${index + 1}</td>
        <td>${items?.pName ?? "no product name"}</td>
        <td>${items?.pPrice ? items.pPrice : "no data"}</td>
        <td>${items?.pDesc}</td>
    </tr>`
    })

    let productList = productData == null ?
        `<tr class="text-center"><td colspan="4">no data</td></tr>`
        : loopData;
    tableBody.innerHTML = productList
}
show()



// const arr = [1, 2, 3]
// const newArr = arr.map((items, index, array) => {
//     return items * 2
// })

// console.log(newArr)
// console.log(arr)

// const obj = {
//     name:"jyoti",
//     address:{
//         city:"xyz",
//         state:"state1"
//     }
// }


// chaining operator ?.
// console.log(obj?.address2?.jhjh)
// console.log("hello")

var a;
console.log(a ?? "no data")

// ?? -> only check null or undefined 

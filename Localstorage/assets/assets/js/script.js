var productData = localStorage.getItem('productList')
function save() {
    const pName = document.querySelector('#pName').value;
    const pPrice = document.querySelector('#pPrice').value;
    const pDesc = document.querySelector('#pDesc').value;
    const product = {
        pName,
        pPrice,
        pDesc,
    }
    let productList = productData == null ? [] : JSON.parse(productData);
    productList.push(product)
    localStorage.setItem('productList', JSON.stringify(productList))
    location.reload()
}

function show() {
    const tableBody = document.querySelector('#tableBody');
    const finalData = JSON.parse(productData)
    var html = "";
    if (productData == null) {
        html += `<tr class="text-center"><td colspan="4">no data</td></tr>`
    } else {
        finalData?.forEach((items, index) => {
            html += `<tr>
            <td>${index + 1}</td>
            <td>${items?.pName ?? "no product name"}</td>
            <td>${items?.pPrice ? items.pPrice : "no data"}</td>
            <td>${items?.pDesc}</td>
            <td><button onclick="trash(${index})" class="btn btn-danger">del</button></td>
            <td><button onclick="edit(${index})" class="btn btn-warning">edit</button></td>

        </tr>`
        })
    }
    tableBody.innerHTML = html
}
show();

// const arr = [4, 5, 6, 2];

// arr.splice(index, 1); // delete perticular index number

// arr.splice(index, 1, "data");  // insert perticular index number

// // splice(index,delete,insert)
// console.log(arr)

function trash(id) {
    let productList = JSON.parse(productData);

    if (confirm("do you want to delete this item?")) {
        productList.splice(id, 1)
        console.log(productList)

        localStorage.setItem('productList', JSON.stringify(productList))
        location.reload();
        show();
    }

}

function edit(id) {
    document.querySelector('#submit').style.display = "none"
    document.querySelector('#update').style.display = "block";

    let productList = JSON.parse(productData);

    /// get inputs
    const pName = document.querySelector('#pName');
    const pPrice = document.querySelector('#pPrice');
    const pDesc = document.querySelector('#pDesc');

    // value set in inputs
    pName.value = productList[id].pName;
    pPrice.value = productList[id].pPrice;
    pDesc.value = productList[id].pDesc;

    document.querySelector('#update').addEventListener('click', function (e) {
        e.preventDefault()
        // console.log(pName.value)
        // console.log(pPrice.value)
        // console.log(pDesc.value)

        /// updated object
        const newProduct = {
            pName: pName.value,
            pPrice: pPrice.value,
            pDesc: pDesc.value,
        }

        productList.splice(id, 1, newProduct);

        console.log(productList)
        localStorage.setItem('productList', JSON.stringify(productList))
        location.reload()

    })

}
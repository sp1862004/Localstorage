var    UserData = localStorage.getItem('UserList')
function save(){
    const uName = document.querySelector('#uName').value;
    const uPassword = document.querySelector('#uPassword').value;
    const uEmail = document.querySelector('#uEmail').value;
    const uDesc = document.querySelector('#uDesc').value;

    const User = {
        uName,
        uPassword,
        uEmail,
        uDesc,
    }
    
    let UserList = UserData == null ? [] : JSON.parse(UserData);
    UserList.push(User)
    localStorage.setItem('UserList', JSON.stringify(UserList))
    location.reload()
}

function show() {
    const tableBody = document.querySelector('#tableBody');
    const finalData = JSON.parse(UserData)
    var html = "";
    if (UserData == null) {
        html += `<tr class="text-center"><td colspan="4">no data</td></tr>`
    } else {
        finalData?.forEach((items, index) => {
            html += `<tr>
            <td>${index + 1}</td>
            <td>${items?.uName ?? "no User name"}</td>
            <td>${items?.uEmail ? items.uEmail : "no data"}</td>
            <td>${items?.uDesc}</td>
            <td><button onclick="trash(${index})" class="btn btn-danger">del</button></td>
            <td><button onclick="edit(${index})" class="btn btn-warning">edit</button></td>

        </tr>`
        })
    }
    tableBody.innerHTML = html
}
show();

function trash(id) {
    let UserList = JSON.parse(UserData);

    if (confirm("do you want to delete this item?")) {
        UserList.splice(id, 1)
        console.log(UserList)

        localStorage.setItem('UserList', JSON.stringify(UserList))
        location.reload();
        show();
    }

}


function edit(id) {
    document.querySelector('#submit').style.display = "none"
    document.querySelector('#update').style.display = "block";

    let UserList = JSON.parse(UserData);

    /// get inputs
    const uName = document.querySelector('#uName');
    const uPassword = document.querySelector('#uPassword');
    const uEmail = document.querySelector('#uEmail');
    const uDesc = document.querySelector('#uDesc');


    // value set in inputs
    uName.value = UserList[id].uName;
    uPassword.value = UserList[id].uPassword;
    uEmail.value = UserList[id].uEmail;
    uDesc.value = UserList[id].uDesc;


    document.querySelector('#update').addEventListener('click', function (e) {
        e.preventDefault()
        // console.log(pName.value)
        // console.log(pPrice.value)
        // console.log(pDesc.value)

        /// updated object
        const newUser = {
            uName: uName.value,
            uPassword: uPassword.value,
            uEmail: uEmail.value,
            uDesc: uDesc.value,
        }

        UserList.splice(id, 1, newUser);

        console.log(UserList)
        localStorage.setItem('UserList', JSON.stringify(UserList))
        location.reload()

    })

}
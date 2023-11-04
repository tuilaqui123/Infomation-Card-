var secondContentInfo
var secondContentSubject
var userDetail
$(document).ready(function () {
    $('#LoginButton').click(function () {
        var user = $('#user').val()
        var pass = $('#password').val()
        $.ajax({
            type: 'GET',
            url: './user.JSON',
            success: function (info) {
                secondContentInfo = info.map(item => {
                    if (user == item.user && pass == item.password) {
                        $("#main").removeClass("hidden")
                        $("#secondary").removeClass("hidden")
                        return `<div class="secondContent">
                        <p>Họ và tên: `+ item.name + `</p>
                        <p>Email: `+ item.email + `</p>
                        <p>ID:  `+ item.mssv + `</p>
                        <p>Lớp: `+ item.class + `</p>
                        <p>Số điện thoại: `+ item.phone + `</p>
                        <p>Năm học: `+ item.year + `</p>
                        </div>
                        `
                    }
                })
                userDetail = info.map(item => {
                    if (user == item.user && pass == item.password) {
                        return `
                        <img src="` + item.avt + `" alt="avt">
                        <div class="userDetail">
                        <h2>`+ item.name + `</h2>
                        <p>`+ item.mssv + `</p>
                        </div>
                        `
                    }
                })
                userAvt = info.map(item => {
                    if (user == item.user && pass == item.password) {
                        return `<img src="` + item.avt + `" alt="avt">`
                    }
                })
                var temp = `<ul class="subject">`
                secondContentSubject = info.map(item => {
                    if (user == item.user && pass == item.password) {
                        item.subject.map(sub => {
                            temp += `<li><p>` + sub.subjectName + `</p></li>`
                        })
                        temp += `</ul>`
                    }
                })
                secondContentSubject = temp
                $('.imgContainer').html(userDetail.join(''))
            }
        })
        $('#user').val('')
        $('#password').val('')
    })

    $('#LogoutButton').click(function () {
        $(".main").addClass("hidden")
        $(".secondary").addClass("hidden")
    })

    $("#info").click(function () {
        $(".secondary").animate({ left: '+=340px' });
        $('#content').html(secondContentInfo.join(''))
    });

    $("#subject").click(function () {
        $(".secondary").animate({ left: '+=340px' });
        $('#content').html(secondContentSubject)
    });

    $("#close").click(function () {
        $(".secondary").animate({ left: '-=340px' });
    });
})




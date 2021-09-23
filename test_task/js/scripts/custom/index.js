$(document).on('click', '.delete-request', function(){
    var elem = $(this),
        parent = elem.parents('.table-item'),
        id = parent.data('id')
     

    $.post('../../../php/delete_request.php', {id: id}, function(data) {
        parent.remove()
        console.log(data);
    })
})

$(document).on('click','.table-item .info', function(e) {
    var elem = $(this),
        dropdown = elem.next(),
        classes = e.target.classList,
        parent = elem.parents('.table-item'),
        dropdowns = parent.siblings().find('.dropdown')

    if(!classes.contains('prevent')) {
        dropdown.stop().slideToggle(300)
        dropdowns.stop().slideUp(300)
    }
})

let tbody = $('.table-body').find('.table-items')

function table_items() {

    $.getJSON("../../../users.json")
    .done(
        function (data) {
            $.each(data, function(key, user) {
                tbody.append(`
                    <div class="table-item" data-id="${user.id}">
                        <div class="info">
                            <div class="id">#${user.id}</div>
                            <div class="name">
                                <div class="avatar small">${first_symbol(user.name)}</div>
                                ${user.name}
                            </div>
                            <div class="phone">${user.phone}</div> 
                            <div class="date">${user.date}</div>
                        </div>
                        <div class="dropdown">
                        
                            <textarea name="message" id="message" class="message" cols="30" rows="10" readonly>${user.message}</textarea>
                            <div class="btns">
                                <div class="line">
                                    <button class="btn delete-request">Удалить</button>
                                    <button class="btn btn-edit">Редактировать</button>
                                    <button class="btn btn-save" disabled>Сохранить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    )
}

table_items()

function first_symbol(sym) { 
    return sym.substring(0, 1);
}
 
$(document).on('click', '.btn-edit', function() {
    let btn = $(this),
        save_btn = btn.siblings('.btn-save'),
        btns = btn.parents('.btns'),
        text = btns.siblings('.message')

    $(save_btn).removeAttr('disabled') 
    $(text).removeAttr('readonly')
    $(btn).attr('disabled', true)
})


$(document).on('click', '.btn-save', function() {
    let btn = $(this),
        edit_btn = btn.siblings('.btn-edit'),
        btns = btn.parents('.btns'),
        id = btn.parents('.table-item').data('id'),
        text = btns.siblings('.message'),
        text_msg =  text.val()
    
    $.post('../../../php/save_edit.php', {id: id, text_msg: text_msg}, function(data) {
        $(btn).attr('disabled', true)
        $(text).attr('readonly', true)
        $(edit_btn).removeAttr('disabled')

        console.log(data); 
    })
})


